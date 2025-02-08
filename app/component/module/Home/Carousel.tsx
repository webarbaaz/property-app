"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SearchBar from "../../SearchBar";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });
  const images = [
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <Image
              src={src}
              className="w-full max-h-screen object-cover"
              alt=""
              width={1400}
              height={1400}
            />
          </div>
        ))}
      </div>
      <div className="absolute left-2/4 bottom-12 -translate-x-2/4 w-full max-w-[1000px] hidden lg:block">
        <SearchBar />
      </div>
    </div>
  );
}
