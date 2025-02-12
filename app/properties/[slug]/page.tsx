"use client";
import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import { Grid } from "@/app/component/ui/Grid";
import HStack from "@/app/component/ui/HStack";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import { propertyQuery } from "@/lib/sanity/qureies/property";
import { client } from "@/lib/sanity/client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { notFound, useParams } from "next/navigation";
import { Property } from "@/types";
import generateImageUrl from "@/lib/sanity/utils/imageBuilder";
import { useEffect, useState } from "react";
import Loader from "@/app/component/Loader";
import { PortableText } from "@portabletext/react";
import { components } from "@/app/(otp)/[slug]/page";

// Fetch property data (Runs on the server)
async function getProperty(slug: string): Promise<Property | null> {
  return await client.fetch(propertyQuery, { slug });
}

// Page Component
export default function PropertyPage() {
  const params = useParams();
  const slug = params?.slug
    ? Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug
    : null; // Ensure slug is a string

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return; // Prevents fetching if slug is undefined

    const fetchSingleProperty = async () => {
      try {
        const data = await getProperty(slug);
        if (data) {
          setProperty(data);
        }
      } catch (error) {
        console.error("Failed to fetch property:", error);
      } finally {
        setLoading(false); // Ensure loading state updates
      }
    };

    fetchSingleProperty();
  }, [slug]); // Only re-run when slug changes

  if (loading) return <Loader />;
  if (!property) return notFound();
  return (
    <MainLayout>
      <Stack className="pb-10">
        <div className="bg-gray-300 p-6">
          <Container>
            <Stack>
              <Text color="black" weight="bold" size="2xl">
                {property.name}
              </Text>
              <Text>
                {property.locality.name.current},{" "}
                {property.locality.city.name.current}
              </Text>
            </Stack>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <Stack className="col-span-8" spacing="8">
              <HStack spacing="10">
                <Text>Published on: 16-05-2020</Text>
                <Text>{property.possessionDate}</Text>
                <Text>{property.carpetArea} sqft</Text>
              </HStack>
              {property.images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={generateImageUrl(image) ?? "/placeholder.jpg"}
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                    alt={property.name}
                  />
                );
              })}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                <Stack spacing="6" className="col-span-2">
                  <table className="w-full border-collapse border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 border">Feature</th>
                        <th className="px-4 py-2 border font-semibold">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Developer</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.propertyType}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Location</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.parking}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Land Parcel</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.locality.city.name.current}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Total Towers</td>
                        <td className="px-4 py-2 border font-semibold font-semibold">
                          {property.locality.name.current}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Total Floors</td>
                        <td className="px-4 py-2 border font-semibold font-semibold">
                          {property.size} BHK
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Carpet Area</td>
                        <td className="px-4 py-2 border font-semibold font-semibold font-semibold">
                          {property.size}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Price</td>
                        <td className="px-4 py-2 border font-semibold font-semibold font-semibold">
                          {property.representativeName}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Configuration</td>
                        <td className="px-4 py-2 border font-semibold font-semibold font-semibold">
                          {property.representativeNumber}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Possession Date</td>
                        <td className="px-4 py-2 border font-semibold font-semibold font-semibold font-semibold">
                          {property.representativeNumber}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">ReRa ID</td>
                        <td className="px-4 py-2 border font-semibold font-semibold font-semibold font-semibold">
                          {property.representativeNumber}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Launch Date</td>
                        <td className="px-4 py-2 border font-semibold font-semibold font-semibold font-semibold">
                          {property.representativeNumber}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Amenities</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property?.amenities
                            ?.map((amenity) => amenity.name.current)
                            .join(", ")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Stack>

                <Stack spacing="6" className="col-span-3">
                  <Stack spacing="6">
                    {/* <Text>{property.description}</Text> */}
                    <PortableText
                      value={property?.description}
                      components={components}
                    />
                  </Stack>
                </Stack>
              </div>
            </Stack>

            {/* Sidebar Placeholder */}
            <Stack className="col-span-4"></Stack>
          </div>
        </Container>
      </Stack>
    </MainLayout>
  );
}
