"use client";

import generateImageUrl from "@/lib/sanity/utils/imageBuilder";
import { BentoGalleryProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function BentoGrid({ images }: BentoGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden">
        {/* Main Image */}
        {images[0] && (
          <div
            className="col-span-2 row-span-2 cursor-pointer aspect-square sm:aspect-auto"
            onClick={() => openModal(0)}>
            <Image
              src={generateImageUrl(images[0]) ?? "/placeholder.jpg"}
              alt="Main image"
              className="w-full h-full object-cover"
              width={800}
              height={800}
              priority
            />
          </div>
        )}

        {/* Render up to 4 more images */}
        {images.slice(1, 5).map((img, idx) => {
          const imgIndex = idx + 1;
          return (
            <div
              key={idx}
              onClick={() => openModal(imgIndex)}
              className={`col-span-1 relative group cursor-pointer aspect-[4/3] sm:aspect-auto ${
                idx === 3 ? "rounded-br-xl" : ""
              } hidden md:block`}>
              <Image
                src={generateImageUrl(img) ?? "/placeholder.jpg"}
                alt={`Gallery ${imgIndex}`}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              {idx === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-medium opacity-100 transition-opacity">
                  View All Photos
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal Slider */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-3xl z-10">
              &times;
            </button>

            <Image
              src={generateImageUrl(images[currentIndex]) ?? "/placeholder.jpg"}
              alt={`Image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Prev/Next */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-3 text-2xl rounded-r hover:bg-black/70">
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-3 text-2xl rounded-l hover:bg-black/70">
              ›
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
