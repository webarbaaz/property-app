import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import { Grid } from "@/app/component/ui/Grid";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <MainLayout>
      <Container>
        <Stack>
          <Image src="/images/hero.jpg" width={1920} height={1080} alt="" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Stack>
              <Text weight={"bold"} size={"2xl"}>
                Property Details
              </Text>
              <p>Property Details</p>
            </Stack>
            <Stack>
              <Text weight={"bold"} size={"2xl"}>
                Property Details
              </Text>
              <p className="text-lg">Property Description</p>
            </Stack>
          </div>
        </Stack>
      </Container>
    </MainLayout>
  );
}
