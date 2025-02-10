"use client";
import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import PropertyList from "../component/PropertyList";

export default function PropertiesPage() {
  return (
    <MainLayout>
      <Container>
        <Stack spacing="6">
          <Text size="2xl" weight="bold">
            All Properties
          </Text>
          <PropertyList limit={120} filters={{ propertyType: "property" }} />
        </Stack>
      </Container>
    </MainLayout>
  );
}
