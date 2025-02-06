"use client";
import { useCallback, useEffect, useState } from "react";
import { Grid } from "@/app/component/ui/Grid";
import Text from "@/app/component/ui/Text";
import PropertyCard from "./PropertyCard";
import { Button } from "@/app/component/ui/Button";
import { Property } from "@/types";
import { getProperties } from "@/lib/sanity/controller/controller.property";

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
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  console.log("filters", filters);
  const fetchProperties = useCallback(async (pageNumber: number) => {
    setLoading(true);
    const fetchedProperties: Property[] = await getProperties(
      filters,
      pageNumber,
      limit
    );
    setProperties(fetchedProperties);
    setLoading(false);
  }, []);

  // Fetch properties when page changes
  useEffect(() => {
    fetchProperties(page);
  }, []);

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
          <PropertyCard key={idx} property={property} />
        ))}
      </Grid>

      {/* Pagination Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Text style={{ margin: "0 10px" }}>Page {page}</Text>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
}
