"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "../../SearchBar";
import Link from "next/link";

export default function Carousel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div>
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury home exterior"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>

      {/* Content Section with entrance animation */}
      <div
        className={`relative z-20 h-full flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto opacity-0 transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Heading with slide-up animation */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transform transition-transform duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Find Your Dream Home
        </h1>

        {/* Description with fade-in animation */}
        <p
          className={`text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl transform transition-transform duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Discover the perfect property that fits your lifestyle and aspirations.
        </p>

{/* Search Bar with fade-in and slide-up animation */}
<div
          className={`w-full max-w-4xl bg-white p-4 lg:p-0 rounded-md lg:rounded-full overflow-hidden shadow-lg flex mb-8 opacity-0 transition-opacity transform duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }} // Slight delay
        >
          <SearchBar />
        </div>

        {/* CTA Button with fade-in and slide-up animation */}
        <Link href={"/properties"}>
          <button
            className={`bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg transform transition-transform duration-1000 ease-in-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Explore Properties
          </button>
        </Link>
      </div>
    </div>
  );
}
