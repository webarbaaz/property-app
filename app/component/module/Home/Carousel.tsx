"use client";
import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SearchBar from "../../SearchBar";
import Link from "next/link";
// import { Search } from "lucide-react";

export default function Carousel() {
  // const [emblaRef] = useEmblaCarousel({
  //   loop: true,
  // });
  // const images = [
  //   "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Luxury home exterior"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Find Your Dream Home
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
          Discover the perfect property that fits your lifestyle and
          aspirations.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white p-4 sm:p-0 rounded-md lg:rounded-full overflow-hidden shadow-lg flex mb-8">
          <SearchBar />
          {/* <button className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 transition duration-300">
            <Search className="w-6 h-6" />
          </button> */}
        </div>

        {/* CTA Button */}
        <Link href={"/properties"}>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
            Explore Properties
          </button>
        </Link>
      </div>
    </div>
  );
}
