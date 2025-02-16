"use client";
import MainLayout from "@/app/component/layout/MainLayout";
import Container from "@/app/component/ui/Container";
import Stack from "@/app/component/ui/Stack";
import Text from "@/app/component/ui/Text";
import PropertyList from "../component/PropertyList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PropertiesPage() {

  const params = useSearchParams()
  const category = params.get('category')



  return (
    <MainLayout>
      <Container className="py-8">
        <Stack spacing="4">
          <Text size="2xl" weight="bold">
            All Properties
          </Text>
          <PropertyList limit={120} filters={category ? { category: category} : {}} />
        </Stack>
      </Container>
    </MainLayout>
  );
}
