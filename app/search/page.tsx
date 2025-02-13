"use client";
import React, { useMemo } from "react";
import MainLayout from "../component/layout/MainLayout";
import Stack from "../component/ui/Stack";
import SearchBar from "../component/SearchBar";
import Container from "../component/ui/Container";
import Text from "../component/ui/Text";
import { useSearchParams } from "next/navigation";
import PropertyList from "../component/PropertyList";
// import { useSite } from "../hooks/useSite";
// import isEqual from "lodash/isEqual";

export default function Page() {
  // const { searchTerms, setSearchTerms } = useSite();
  const searchParams = useSearchParams();

  // Extract search filters from URL
  const searchFilters = useMemo(
    () => ({
      propertyType: searchParams.get("propertyType") ?? undefined,
      propertyStatus: searchParams.get("propertyStatus") ?? undefined,
      city: searchParams.get("city") ?? undefined,
    }),
    [searchParams]
  );

  // // Update global search terms only if they change
  // useEffect(() => {
  //   if (!isEqual(searchTerms, searchFilters)) {
  //     setSearchTerms(searchFilters);
  //   }
  // }, [searchFilters, searchTerms, setSearchTerms]);

  return (
    <MainLayout>
      <Container className="py-12">
        <Stack spacing="6">
          <Text weight="semibold" size="3xl">
            Property Search
          </Text>
          <SearchBar />
          <Text size="2xl">Search Results</Text>
          <PropertyList filters={searchFilters} />
        </Stack>
      </Container>
    </MainLayout>
  );
}
