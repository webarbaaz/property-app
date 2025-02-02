"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SearchBar from "../../SearchBar";

type Props = {};

export default function Carousel({}: Props) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });
  const images = [
    "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb3BlcnR5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
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
      <div className="absolute left-2/4 bottom-12 -translate-x-2/4 w-full max-w-[1000px]">
        <SearchBar />
      </div>
    </div>
  );
}
