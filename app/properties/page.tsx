import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import PropertyList from "../component/PropertyList";
import { Metadata } from "next";

// ✅ Set Metadata using Next.js Metadata API
export const metadata: Metadata = {
  title: "All Properties - Property App",
  description:
    "Browse all properties available on Property App. Find your dream home today!",
  keywords: ["properties", "real estate", "homes", "apartments", "buy", "rent"],
  viewport: "width=device-width, initial-scale=1",
};

export default function PropertiesPage() {
  return (
    <MainLayout>
      <Container>
        <Stack spacing="6">
          <Text size="2xl" weight="bold">
            All Properties
          </Text>
          <PropertyList limit={12} />
        </Stack>
      </Container>
    </MainLayout>
  );
}
