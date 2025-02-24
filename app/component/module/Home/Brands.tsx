"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export default function Brands() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 3 },
        "(min-width: 1024px)": { slidesToScroll: 6 },
      },
    },
    [Autoplay({ delay: 3000 })]
  );

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    "/assets/brands/godrej.jpg",
    "/assets/brands/Hiranandani.jpg",
    "/assets/brands/lnt.jpg",
    "/assets/brands/lodha.png",
    "/assets/brands/mahindra.png",
    "/assets/brands/primal.png",
    "/assets/brands/WadhawaGroup.jpg",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Brands We Promote
          </h2>
          <p className="text-xl text-gray-600">
            We are Channel Partners with Reputed Companies
          </p>
        </motion.div>

        {isClient && (
          <div className="embla overflow-hidden py-6" ref={emblaRef}>
            <div className="embla__container flex">
              {images.map((src, index) => (
                <motion.div
                  className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_16.66%] min-w-0 px-2 sm:px-3 md:px-4"
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex items-center justify-center">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt="Brand logo"
                      width={120}
                      height={120}
                      className="object-contain max-h-24"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
