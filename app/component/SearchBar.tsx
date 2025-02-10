"use client";
import React, { useState } from "react";
import { Grid } from "./ui/Grid";
import Stack from "./ui/Stack";
import Text from "./ui/Text";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [searchTerms, setSearchTerms] = useState({
    propertyType: "",
    propertyStatus: "",
    location: "",
  });

  const onSearch = () => {
    const params = new URLSearchParams();

    Object.entries(searchTerms).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <Grid
      cols={4}
      className="bg-white rounded-full px-12 py-6 border shadow-lg my-6">
      <Stack>
        <Text weight={"semibold"}>Type</Text>
        <select
          name={"type"}
          onChange={(e) =>
            setSearchTerms({ ...searchTerms, propertyType: e.target.value })
          }
          className="border p-2 rounded-lg">
          <option value={""}>All</option>
          <option value={"property"}>Property</option>
          <option value={"project"}>Project</option>
        </select>
      </Stack>
      <Stack>
        <Text weight={"semibold"}>Status</Text>
        <select
          name="status"
          onChange={(e) =>
            setSearchTerms({ ...searchTerms, propertyStatus: e.target.value })
          }
          className="border p-2 rounded-lg">
          <option value={""}>All</option>
          <option value={"ready-to-move"}>Ready To Move</option>
          <option value={"new-project"}>New Project</option>
          <option value={"under-construction"}>Under Construction</option>
        </select>
      </Stack>
      <Stack>
        <Text weight={"semibold"}>Location</Text>
        <select
          name="location"
          onChange={(e) =>
            setSearchTerms({ ...searchTerms, location: e.target.value })
          }
          className="border p-2 rounded-lg">
          <option value={""}>All</option>
          <option value={"mumbai"}>Mumbai</option>
          <option value={"pune"}>Pune</option>
          <option value={"delhi"}>Delhi</option>
        </select>
      </Stack>

      <Button onClick={onSearch} className="h-10 mt-auto">
        Search Now
      </Button>
    </Grid>
  );
}
