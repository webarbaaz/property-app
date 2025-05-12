"use client";
import React, { useCallback, useEffect, useState } from "react";
// import Text from "./ui/Text";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useSite } from "../hooks/useSite";
// import HStack from "./ui/HStack";
import { Filter, Search } from "lucide-react";
import { getLocations } from "@/lib/sanity/controller/controller.property";
import HStack from "./ui/HStack";

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

  const [localites, setLocalities] = useState<Locality[]>([]);

  // Function for executing the search
  const onSearch = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(searchTerms).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    router.push(`/search?${params.toString()}`);
  }, [searchTerms, router]);

  const fetchlocalities = useCallback(async () => {
    const l = await getLocations();
    if (l) {
      setLocalities(l);
    }
  }, []);

  useEffect(() => {
    fetchlocalities();
  }, [fetchlocalities]);

  // Disable button if no search terms
  return (
    <div className="mt-10 max-w-4xl rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium block">
                  Configuration
                </label>
                <select
                  name="configuration"
                  value={searchTerms.configuration || ""}
                  onChange={(e) =>
                    setSearchTerms({ configuration: e.target.value })
                  }
                  className="border p-2 rounded-lg w-full">
                  <option value="">All</option>
                  {configuration?.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <select
                  name="location"
                  value={searchTerms.locality || ""}
                  onChange={(e) => setSearchTerms({ locality: e.target.value })}
                  className="border p-2 rounded-lg w-full">
                  <option value="">All</option>
                  {localites.map((item: Locality, idx: number) => (
                    <option key={idx} value={item?.name?.current}>
                      {item?.name?.current}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
              </div> */}
              <div></div>
              <div className="flex items-end ms-auto">
                <Button className="w-full gap-2" onClick={onSearch}>
                  <Search className="h-4 w-4" />
                  Search Properties
                </Button>
              </div>
            </div>
            <HStack className="mt-4 gap-4" justify={"between"}>
              <Button variant="link" size="sm" className="gap-1">
                <Filter className="h-3 w-3" />
                Advanced Filters
              </Button>
              <span className="text-sm text-gray-500">
                2,345 properties available
              </span>
            </HStack>
          </div>
  );
}
