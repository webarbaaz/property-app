"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Props = {};

export default function Carousel({}: Props) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });
  const images = [
    "https://images.unsplash.com/photo-1728326475125-3b4b62b8d2e6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534113356284-9aa4ea943778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <Image
              src={src}
              className="w-full max-h-screen"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
