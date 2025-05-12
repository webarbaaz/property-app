"use client";
import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
// import { Grid } from "@/app/component/ui/Grid";
import HStack from "@/app/component/ui/HStack";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import { propertyQuery } from "@/lib/sanity/qureies/property";
import { client } from "@/lib/sanity/client";
// import { FaCheckCircle } from "react-icons/fa";
import { notFound, useParams } from "next/navigation";
import { Property } from "@/types";
import { useEffect, useState } from "react";
import Loader from "@/app/component/Loader";
import { PortableText } from "@portabletext/react";
import { MapPin, PhoneCall } from "lucide-react";
import { EditorFormatter } from "@/app/component/EditorFormatter";
import Button from "@/app/component/ui/Button";
import { useSite } from "@/app/hooks/useSite";
import BentoGrid from "@/app/component/module/propertyPage/BentoGrid";
import PropertyList from "@/app/component/PropertyList";
// Fetch property data (Runs on the server)
async function getProperty(slug: string): Promise<Property | null> {
  return await client.fetch(propertyQuery, { slug });
}

// Page Component
export default function PropertyPage() {
  const { setActiveSlug } = useSite();
  const params = useParams();
  const slug = params?.slug
    ? Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug
    : null; // Ensure slug is a string

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const { setLeadDialog } = useSite();

  useEffect(() => {
    if (!slug) return; // Prevents fetching if slug is undefined

    const fetchSingleProperty = async () => {
      try {
        const data = await getProperty(slug);
        if (data) {
          setProperty(data);
          setActiveSlug(slug);
        }
      } catch (error) {
        console.error("Failed to fetch property:", error);
      } finally {
        setLoading(false); // Ensure loading state updates
      }
    };

    fetchSingleProperty();
  }, [slug, setActiveSlug]); // Only re-run when slug changes

  if (loading) return <Loader />;
  if (!property) return notFound();
  return (
    <MainLayout>
      <Stack className="pb-10">
        <Button
          variant={"primary"}
          className="flex hover:bg-green-600 bg-green-500 items-center gap-2 text-white rounded-full fixed bottom-8 right-8"
          onClick={() => setLeadDialog(true)}>
          <Text color="white">Enquiry</Text>
          <PhoneCall />
        </Button>
        <div className="p-6">
          <Container>
            <Stack>
              <Text color="black" weight="bold" size="2xl">
                {property.name}
              </Text>
              <HStack>
                <MapPin />
                <Text>
                  {property.locality.name.current},{" "}
                  {property.locality.city.name.current}
                </Text>
              </HStack>
            </Stack>
          </Container>
        </div>

        <Container>
          <Stack>
            <Stack className="" spacing="8">
              <BentoGrid images={property.images} />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
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
                          {property.developer}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Location</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.locality.name.current}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Land Parcel</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.landParcel}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Total Towers</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.totalTowers}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Total Floors</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.totalFloors}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Carpet Area</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property?.carpetArea}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Price</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.price}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Configuration</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property?.size.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Possession Date</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.possessionDate}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Rera ID</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.reRaId}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Launch Date</td>
                        <td className="px-4 py-2 border font-semibold">
                          {property.launchDate}
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
                      components={EditorFormatter}
                    />
                  </Stack>
                </Stack>
              </div>
              <PropertyList
                filters={{
                  category: property.category.name,
                }}
              />
            </Stack>

            {/* Sidebar Placeholder */}
            {/* <Stack className="col-span-4"></Stack> */}
          </Stack>
        </Container>
      </Stack>
    </MainLayout>
  );
}
