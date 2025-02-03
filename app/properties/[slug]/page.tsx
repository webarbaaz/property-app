import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import { Grid } from "@/app/component/ui/Grid";
import HStack from "@/app/component/ui/HStack";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type Props = {};

export default function page({}: Props) {
  return (
    <MainLayout>
      <Stack className="pb-10">
        <div className="bg-gray-300 p-6">
          <Container>
            <Stack>
              <Text color="black" weight={"bold"} size={"2xl"}>
                Property Name
              </Text>
              <Text>
                Dr B.A Road ITC Grand Central, Lower Parel East, Mumbai,
                Maharashtra 400012
              </Text>
            </Stack>
          </Container>
        </div>
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <Stack className="col-span-8" spacing={"2"}>
              <HStack spacing={"10"}>
                <Text> published on 16-05-2020</Text>
                <Text> 3 bed 2 bath</Text>
                <Text> 1,200 sqft</Text>
              </HStack>
              <Image
                src="https://www.valueproperties.co.in/property-consultant/listing/images/uploads/projects/Piramal%20Aranya%20banner3.jpg"
                width={1920}
                height={1080}
                className="rounded-lg"
                alt=""
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                <Stack spacing={"6"} className="col-span-2">
                  <Text weight={"semibold"} size={"xl"}>
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
                        <td className="px-4 py-2 border">Bedrooms</td>
                        <td className="px-4 py-2 border">3</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border">Bathrooms</td>
                        <td className="px-4 py-2 border">2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border">Square Footage</td>
                        <td className="px-4 py-2 border">1,200 sqft</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 border">Year Built</td>
                        <td className="px-4 py-2 border">2015</td>
                      </tr>
                    </tbody>
                  </table>
                </Stack>
                <Stack spacing={"6"} className="col-span-3">
                  <Stack spacing={"6"}>
                    <Text weight={"semibold"} size={"xl"}>
                      Property Details
                    </Text>
                    <Text>
                      {" "}
                      Your search for the perfect 2 BHK & 3 BHK flats in Lower
                      Parel comes to an end with Avighna IX. Avighna IX is the
                      ultimate address for fine living with its architectural
                      elements creating an air of peace and prosperity, rich
                      design symbolizing luxury and world-class amenities that
                      deliver a great lifestyle. It is an oasis of opulence
                      created for a community of residents who want the best for
                      themselves and their families.
                    </Text>
                  </Stack>
                  <Stack spacing={"6"}>
                    <Text weight={"semibold"} size={"xl"}>
                      Amenities
                    </Text>
                    <Grid cols={2}>
                      <HStack>
                        <FaCheckCircle />
                        <Text> Security/Fire Alarm</Text>
                      </HStack>
                      <HStack>
                        <FaCheckCircle />
                        <Text> Security/Fire Alarm</Text>
                      </HStack>
                      <HStack>
                        <FaCheckCircle />
                        <Text> Security/Fire Alarm</Text>
                      </HStack>
                      <HStack>
                        <FaCheckCircle />
                        <Text> Security/Fire Alarm</Text>
                      </HStack>
                    </Grid>
                  </Stack>
                </Stack>
              </div>
            </Stack>
            <Stack className="col-span-4"></Stack>
          </div>
        </Container>
      </Stack>
    </MainLayout>
  );
}
