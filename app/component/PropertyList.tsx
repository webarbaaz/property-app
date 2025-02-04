import React from "react";
import { client } from "@/lib/qureies/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Grid } from "@/app/component/ui/Grid";
import HStack from "@/app/component/ui/HStack";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import PropertyCard from "./PropertyCard";

// Define Property Interface
interface Property {
  _id: string;
  slug: string;
  name: string;
  description: string;
  images: string[];
  size: number;
  price: number;
  locality: {
    name: { current: string };
    city: {
      name: { current: string };
    };
  };
  amenities: { name: { current: string } }[];
}

// Fetch properties (Server-side function)
async function getProperties(filters?: any, limit: number = 10) {
  const query = `*[_type == "property"] | order(_createdAt desc) [0...$limit] {
    _id,
    "slug": slug.current,
    name,
    description,
    images,
    size,
    price,
    locality {
      name { current },
      city { name { current } }
    }
  }`;

  return await client.fetch(query, { limit });
}

// Reusable Server Component
export default async function PropertyList({ limit = 10 }: { limit?: number }) {
  const properties: Property[] = await getProperties({}, limit);

  if (!properties.length) {
    return <Text>No properties found.</Text>;
  }

  return (
    <Grid cols={3} gap="lg">
      {properties.map((property, idx) => (
        <PropertyCard key={idx} property={property} />
      ))}
    </Grid>
  );
}
