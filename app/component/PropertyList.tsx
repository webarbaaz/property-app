"use client";
import { useEffect, useState } from "react";
import { Grid } from "@/app/component/ui/Grid";
import Text from "@/app/component/ui/Text";
import PropertyCard from "./PropertyCard";
import { Property } from "@/types";
import { getProperties } from "@/lib/sanity/controller/controller.property";
import Link from "next/link";

export default function PropertyList({
  filters = {},
  limit = 10,
}: {
  filters?: {
    propertyType?: string;
    propertyStatus?: string;
    location?: string;
    category?: string;
  };
  limit?: number;
}) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const fetchedProperties: Property[] = await getProperties(
        filters,
        1,
        limit
      );
      setProperties(fetchedProperties);
      setLoading(false);
    };
    fetchProperties();
  }, [filters, limit]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!properties.length) {
    return <Text>No properties found.</Text>;
  }

  return (
    <div>
      <Grid cols={3} gap="lg">
        {properties.map((property, idx) => (
          <Link key={idx} href={property.slug}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </Grid>
    </div>
  );
}
