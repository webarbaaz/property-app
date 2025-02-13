"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "./ui/Grid";
import Stack from "./ui/Stack";
// import Text from "./ui/Text";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useSite } from "../hooks/useSite";
// import HStack from "./ui/HStack";
import { Search } from "lucide-react";
import {
  getLocations,
  getProjectTypes,
  getSizes,
} from "@/lib/sanity/controller/controller.property";

export default function SearchBar() {
  const router = useRouter();
  const { searchTerms, setSearchTerms } = useSite();

  const [projectTypes, setProjectTypes] = useState([]);
  const [localites, setLocalities] = useState([]);
  const [sizes, setSizes] = useState([]);

  // Function for executing the search
  const onSearch = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(searchTerms).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    router.push(`/search?${params.toString()}`);
  }, [searchTerms, router]);

  const fetchPT = useCallback(async () => {
    const pt = await getProjectTypes();
    if (pt) {
      setProjectTypes(pt);
    }
  }, []);
  const fetchlocalities = useCallback(async () => {
    const l = await getLocations();
    if (l) {
      setLocalities(l);
    }
  }, []);

  const fetchSizes = useCallback(async () => {
    const data = await getSizes();
    if (data) {
      setLocalities(data);
    }
  }, []);

  useEffect(() => {
    fetchPT();
    fetchlocalities();
    fetchSizes();
  }, [fetchPT, fetchlocalities, fetchSizes]);

  // Disable button if no search terms
  const isSearchDisabled = Object.values(searchTerms).every((val) => !val);
  return (
    <Grid
      cols={"max5"}
      className="w-full max-w-4xl lg:bg-white lg:py-6 lg:px-8"
    >
      <Stack>
        {/* <Text weight={"semibold"}>Type</Text> */}
        <select
          name="type"
          value={searchTerms.propertyType || ""}
          onChange={(e) => setSearchTerms({ propertyType: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          {projectTypes?.map((item, idx) => (
            <option key={idx} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </Stack>
      <Stack>
        {/* <Text weight={"semibold"}>Status</Text> */}
        <select
          name="status"
          value={searchTerms.propertyStatus || ""}
          onChange={(e) => setSearchTerms({ propertyStatus: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="ready-to-move">Ready To Move</option>
          <option value="under-construction">Under Construction</option>
        </select>
      </Stack>
      <Stack>
        {/* <Text weight={"semibold"}>Location</Text> */}
        <select
          name="configuration"
          value={searchTerms.configuration || ""}
          onChange={(e) => setSearchTerms({ configuration: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          {localites?.map((item, idx) => (
            <option key={idx} value={item.size}>
              {item.size}
            </option>
          ))}
        </select>
      </Stack>
      <Stack>
        {/* <Text weight={"semibold"}>Location</Text> */}
        <select
          name="location"
          value={searchTerms.city || ""}
          onChange={(e) => setSearchTerms({ city: e.target.value })}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          {localites?.map((item, idx) => (
            <option key={idx} value={item?.name?.current}>
              {item?.name?.current}
            </option>
          ))}
        </select>
      </Stack>
      <Button
        onClick={onSearch}
        className="h-10 mt-auto rounded-full"
        disabled={isSearchDisabled}
      >
        <Search className="w-6 h-6" />
        Search Now
      </Button>
    </Grid>
  );
}
