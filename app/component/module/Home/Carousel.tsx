"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import SearchBar from "../../SearchBar";
import { getCategories } from "@/lib/sanity/controller/controller.property";
import AnimationComponent from "../../AnimationComponent";
type Category = {
  _id: string;
  name: string;
  slug: string;
};

export default function Carousel() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

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
          <AnimationComponent delay={0.5}>
            <div className="max-w-3xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Find Your Dream Home
              </h1>
              <p className="text-xl text-gray-200 md:text-2xl">
                Discover the perfect property that fits your lifestyle and
                aspirations.
              </p>
            </div>
          </AnimationComponent>

          <AnimationComponent delay={0.5}>
            <SearchBar />
          </AnimationComponent>

          <div className="mt-8 flex flex-wrap gap-4">
            {categories.map((item, idx) => (
              <Link href={`/properties?category=${item.slug}`} key={idx}>
                <Button variant="secondary" className="gap-2" key={idx}>
                  {/* <HomeIcon className="h-4 w-4" /> */}
                  {item.name}
                </Button>
              </Link>
            ))}
            {/* <Button variant="secondary" className="gap-2">
              <HomeIcon className="h-4 w-4" />
              Residential
            </Button>
            <Button variant={"secondary"} className="gap-2">
              <Building className="h-4 w-4" />
              Commercial
            </Button>
            <Button variant="secondary">New Developments</Button>
            <Button variant="secondary">Investment Properties</Button> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
