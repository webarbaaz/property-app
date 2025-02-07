"use client";

import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Grid } from "@/app/component/ui/Grid";
import Text from "@/app/component/ui/Text";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types";
import { getProperties } from "@/lib/sanity/controller/controller.property";
import Link from "next/link";

interface PropertyFilters {
  propertyType?: string;
  propertyStatus?: string;
  location?: string;
  category?: string;
}

interface PropertyListProps {
  filters?: PropertyFilters;
  limit?: number;
}

export default function PropertyList({
  filters = {},
  limit = 10,
}: PropertyListProps) {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  // ✅ Convert searchParams to a stable string to avoid unnecessary renders
  const searchParamsString = useMemo(
    () => searchParams.toString(),
    [searchParams]
  );

  // ✅ Use useMemo to prevent unnecessary re-renders
  const mergedFilters = useMemo(() => {
    const params = new URLSearchParams(searchParamsString); // Parse string back to object
    return {
      propertyType: params.get("propertyType") || filters.propertyType,
      propertyStatus: params.get("propertyStatus") || filters.propertyStatus,
      location: params.get("location") || filters.location,
      category: params.get("category") || filters.category,
    };
  }, [searchParamsString, filters]);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const fetchedProperties: Property[] = await getProperties(
          mergedFilters,
          1,
          limit
        );
        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []); // ✅ No more infinite loop!

  if (loading) return <Text>Loading properties...</Text>;
  if (!properties.length) return <Text>No properties found.</Text>;

  return (
    <div>
      <Grid cols={3} gap="lg">
        {properties.map((property) => (
          <Link key={property.slug} href={`/properties/${property.slug}`}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </Grid>
    </div>
  );
}
