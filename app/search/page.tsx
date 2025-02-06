import React from "react";
import MainLayout from "../component/layout/MainLayout";
import Stack from "../component/ui/Stack";
import SearchBar from "../component/SearchBar";
import Container from "../component/ui/Container";
import Text from "../component/ui/Text";

export default function page() {
  return (
    <MainLayout>
      <Container className="py-12">
        <Stack spacing={"6"}>
          <Text weight={"semibold"} size={"3xl"}>
            Property Search
          </Text>
          <SearchBar />
          <Text size={"2xl"}>Search Results</Text>
        </Stack>
      </Container>
    </MainLayout>
  );
}
