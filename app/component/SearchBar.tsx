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
} from "@/lib/sanity/controller/controller.property";

const configuration = [
  { title: "1 RK", value: "1-rk" },
  { title: "1 BHK", value: "1-bhk" },
  { title: "2 BHK", value: "2-bhk" },
  { title: "3 BHK", value: "3-bhk" },
  { title: "4 BHK", value: "4-bhk" },
  { title: "5 BHK", value: "5-bhk" },
  { title: "6 BHK", value: "6-bhk" },
  { title: "7 BHK", value: "7-bhk" },
  { title: "8 BHK", value: "8-bhk" },
];

type Locality = {
  _id: string;
  name: { current: string };
  city: { name: string };
};

export default function SearchBar() {
  const router = useRouter();
  const { searchTerms, setSearchTerms } = useSite();

  type ProjectType = {
    title: string;
    value: string;
  };

  const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]);
  const [localites, setLocalities] = useState<Locality[]>([]);

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

  useEffect(() => {
    fetchlocalities();
  }, [fetchlocalities]);

  useEffect(() => {
    fetchPT();
  }, [fetchPT]);

  // Disable button if no search terms
  const isSearchDisabled = Object.values(searchTerms).every((val) => !val);
  return (
    <Grid
      cols={"max5"}
      className="w-full max-w-4xl lg:bg-white lg:py-6 lg:px-8">
      <Stack>
        {/* <Text weight={"semibold"}>Type</Text> */}
        <select
          name="type"
          value={searchTerms.propertyType || ""}
          onChange={(e) => setSearchTerms({ propertyType: e.target.value })}
          className="border p-2 rounded-lg">
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
          className="border p-2 rounded-lg">
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
          className="border p-2 rounded-lg">
          <option value="">All</option>
          {configuration?.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </Stack>
      <Stack>
        {/* <Text weight={"semibold"}>Location</Text> */}
        <select
          name="location"
          value={searchTerms.locality || ""}
          onChange={(e) => setSearchTerms({ locality: e.target.value })}
          className="border p-2 rounded-lg">
          <option value="">All</option>
          {localites.map((item: Locality, idx: number) => (
            <option key={idx} value={item?.name?.current}>
              {item?.name?.current}
            </option>
          ))}
        </select>
      </Stack>
      <Button
        onClick={onSearch}
        className="h-10 mt-auto rounded-full"
        disabled={isSearchDisabled}>
        <Search className="w-6 h-6" />
        Search Now
      </Button>
    </Grid>
  );
}
