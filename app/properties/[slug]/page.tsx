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
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Property } from "@/types";

// Fetch property data (Runs on the server)
async function getProperty(slug: string): Promise<Property | null> {
  return await client.fetch(propertyQuery, { slug });
}

// Generate SEO Metadata (Optional)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = await getProperty(params.slug);
  if (!property) return {};

  return {
    title: `${property.name} | My Real Estate`,
    description: property.description,
    openGraph: {
      title: property.name,
      description: property.description,
      // images: [{ url: property.images[0] }],
    },
  };
}

// Generate Static Paths for Static Site Generation (SSG)
export async function generateStaticParams() {
  const query = `*[_type == "property"]{ "slug": slug.current }`;
  const properties = await client.fetch(query);

  return properties.map((property: { slug: string }) => ({
    slug: property.slug,
  }));
}

// Page Component
export default async function PropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = await getProperty(params.slug);
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
            <Stack className="col-span-8" spacing="2">
              <HStack spacing="10">
                <Text>Published on: 16-05-2020</Text>
                <Text>{property.possessionDate}</Text>
                <Text>{property.carpetArea} sqft</Text>
              </HStack>
              {property.images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={"/placeholder.jpg"}
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                    alt={property.name}
                  />
                );
              })}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                <Stack spacing="6" className="col-span-2">
                  <Text weight="semibold" size="xl">
                    Property Details
                  </Text>
                  <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 border">Feature</th>
                        <th className="px-4 py-2 border">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border">Project Type</td>
                        <td className="px-4 py-2 border">{property.type}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Parking</td>
                        <td className="px-4 py-2 border">{property.parking}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">City</td>
                        <td className="px-4 py-2 border">
                          {property.locality.city.name.current}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Location</td>
                        <td className="px-4 py-2 border">
                          {property.locality.name.current}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Type</td>
                        <td className="px-4 py-2 border">
                          {property.size} BHK
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Property Price</td>
                        <td className="px-4 py-2 border">{property.size}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Name :</td>
                        <td className="px-4 py-2 border">
                          {property.dealerName}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Contact :</td>
                        <td className="px-4 py-2 border">
                          {property.dealerContact}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Stack>

                <Stack spacing="6" className="col-span-3">
                  <Stack spacing="6">
                    <Text weight="semibold" size="xl">
                      Description
                    </Text>
                    <Text>{property.description}</Text>
                  </Stack>

                  <Stack spacing="6">
                    <Text weight="semibold" size="xl">
                      Amenities
                    </Text>
                    <Grid cols={2}>
                      {property?.amenities?.map((amenity, index) => {
                        console.log(amenity);
                        return (
                          <HStack key={index}>
                            <FaCheckCircle />
                            <Text>{amenity.name.current}</Text>
                          </HStack>
                        );
                      })}
                    </Grid>
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
