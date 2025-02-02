"use client";
import React from "react";
import Stack from "../../ui/Stack";
import Flex from "../../ui/Flex";
import Text from "../../ui/Text";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Container from "../../ui/Container";

type Props = {};

export default function Brands({}: Props) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });
  const images = [
    "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYW5kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYW5kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYW5kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYW5kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYW5kfGVufDB8fDB8fHww",
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
                className="embla__slide sm:basis-1/2 lg:basis-1/4"
                key={index}
              >
                <Image src={src} className="" alt="" width={150} height={150} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Stack>
  );
}
