import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import { Grid } from "@/app/component/ui/Grid";
import HStack from "@/app/component/ui/HStack";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <MainLayout>
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <Stack className="col-span-8" spacing={"2"}>
            <Text className="" color="black" weight={"bold"} size={"2xl"}>
              Property Name
            </Text>
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Stack>
                <Text weight={"semibold"} size={"xl"}>
                  Property Details
                </Text>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Song</th>
                      <th>Artist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                      <td>Malcolm Lockyer</td>
                    </tr>
                    <tr>
                      <td>Witchy Woman</td>
                      <td>The Eagles</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>Earth, Wind, and Fire</td>
                    </tr>
                  </tbody>
                </table>
              </Stack>
              <Stack>
                <Text weight={"semibold"} size={"xl"}>
                  Property Details
                </Text>
                <p className="text-lg">Property Description</p>
              </Stack>
            </div>
          </Stack>
          <Stack className="col-span-4">Addertisement</Stack>
        </div>
      </Container>
    </MainLayout>
  );
}
