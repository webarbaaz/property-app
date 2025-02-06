import React from "react";
import Stack from "./ui/Stack";
import Image from "next/image";
import Text from "./ui/Text";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import HStack from "./ui/HStack";
import Button from "./ui/Button";
import { Property } from "@/types";
import generateImageUrl from "@/lib/sanity/utils/imageBuilder";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <Stack
      spacing={"0"}
      className="bg-white rounded-lg shadow-md capitalize relative"
    >
      <Text
        className="uppercase absolute left-2 top-2 bg-blue-500 px-3 py-1 shadow-lg rounded-full"
        color="white"
        size={"sm"}
      >
        {property?.propertyStatus}
      </Text>
      <Image
        className="rounded-t-lg w-full"
        src={generateImageUrl(property?.images[0]) ?? "/placeholder.jpg"}
        alt=""
        width={300}
        height={200}
      />
      <Stack spacing={"1"} className="p-3">
        <Text weight={"semibold"}>{property?.name}</Text>
        <Text size={"sm"} color="secondary">
          {property?.size} BHK
        </Text>
        <HStack spacing={"1"}>
          <FaLocationDot />
          <Text size={"sm"}>{property?.locality?.name?.current}</Text>
        </HStack>
        <Text size={"sm"} weight={"bold"}>
          ₹ {property?.price} /- Onwards
        </Text>
        <HStack spacing={"1"}>
          <FaBed />
          <Text size={"sm"}>{property?.size}</Text>
        </HStack>
        <Button className="!mt-3" size={"sm"} color={"primary"}>
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
}
