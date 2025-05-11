"use client";
import React from "react";
import Image from "next/image";
import { Building, Filter, HomeIcon, Search } from "lucide-react";
import Container from "../../ui/Container";
import HStack from "../../ui/HStack";
import Button from "../../ui/Button";

export default function Carousel() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // Trigger the animation after the component mounts
  //   setIsVisible(true);
  // }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/banner/banner-1.jpg"
          alt="City skyline"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
      </div>
      <Container>
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-gray-200 md:text-2xl">
              Discover the perfect property that fits your lifestyle and
              aspirations.
            </p>
          </div>

          <div className="mt-10 max-w-4xl rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-lg">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Property Type</label>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
              </div>
              <div className="flex items-end">
                <Button className="w-full gap-2">
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

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="secondary" className="gap-2">
              <HomeIcon className="h-4 w-4" />
              Residential
            </Button>
            <Button variant={"secondary"} className="gap-2">
              <Building className="h-4 w-4" />
              Commercial
            </Button>
            <Button variant="secondary">New Developments</Button>
            <Button variant="secondary">Investment Properties</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
