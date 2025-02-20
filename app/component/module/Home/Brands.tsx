"use client";
import React from "react";
import Stack from "../../ui/Stack";
import Flex from "../../ui/Flex";
import Text from "../../ui/Text";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Container from "../../ui/Container";

export default function Brands() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });
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
    <Stack spacing={"12"}>
      <Flex className="flex flex-col items-center">
        <Text weight={"bold"} size={"3xl"}>
          Brands We Promote
        </Text>
        <Text>We are Channel partner with reputed Company</Text>
      </Flex>
      <Container>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((src, index) => (
              <div
                className="embla__slide sm:basis-1/2 lg:basis-1/4 items-center"
                key={index}
              >
                <Image src={src} alt="brands" width={250} height={250} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Stack>
  );
}
