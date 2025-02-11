"use client";
import React, { useCallback } from "react";
import { Grid } from "./ui/Grid";
import Stack from "./ui/Stack";
import Text from "./ui/Text";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useSite } from "../hooks/useSite";

export default function SearchBar() {
  const router = useRouter();
  const { searchTerms, setSearchTerms } = useSite();

  // Function for executing the search
  const onSearch = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(searchTerms).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    router.push(`/search?${params.toString()}`);
  }, [searchTerms, router]);

  // Disable button if no search terms
  const isSearchDisabled = Object.values(searchTerms).every((val) => !val);

  return (
    <Grid cols={"max4"} className="">
      <Stack>
        <Text weight={"semibold"}>Type</Text>
        <select
          name="type"
          value={searchTerms.propertyType || ""}
          onChange={(e) => setSearchTerms({ propertyType: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="property">Property</option>
          <option value="project">Project</option>
        </select>
      </Stack>
      <Stack>
        <Text weight={"semibold"}>Status</Text>
        <select
          name="status"
          value={searchTerms.propertyStatus || ""}
          onChange={(e) => setSearchTerms({ propertyStatus: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="ready-to-move">Ready To Move</option>
          <option value="new-project">New Project</option>
          <option value="under-construction">Under Construction</option>
        </select>
      </Stack>
      <Stack>
        <Text weight={"semibold"}>Location</Text>
        <select
          name="location"
          value={searchTerms.city || ""}
          onChange={(e) => setSearchTerms({ city: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="mumbai">Mumbai</option>
          <option value="pune">Pune</option>
          <option value="delhi">Delhi</option>
        </select>
      </Stack>

      <Button
        onClick={onSearch}
        className="h-10 mt-auto"
        disabled={isSearchDisabled}
      >
        Search Now
      </Button>
    </Grid>
  );
}
