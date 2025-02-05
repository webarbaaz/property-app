import React from "react";
import Stack from "./ui/Stack";
import Image from "next/image";
import Text from "./ui/Text";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import HStack from "./ui/HStack";
import Button from "./ui/Button";
import { Property } from "@/types";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <Stack
      spacing={"0"}
      className="bg-white rounded-lg shadow-md capitalize relative">
      <Text
        className="uppercase absolute left-2 top-2 bg-blue-500 px-3 py-1 shadow-lg rounded-full"
        color="white"
        size={"sm"}>
        Ready To Move
      </Text>
      <Image
        className="rounded-t-lg w-full"
        src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb3BlcnR5fGVufDB8fDB8fHww"
        alt=""
        width={300}
        height={200}
      />
      <Stack spacing={"1"} className="p-3">
        <Text weight={"semibold"}>{property?.name}</Text>
        <Text size={"sm"} color="secondary">
          {property.size} BHK
        </Text>
        <HStack spacing={"1"}>
          <FaLocationDot />
          <Text size={"sm"}>{property?.locality?.name?.current}</Text>
        </HStack>
        <Text size={"sm"} weight={"bold"}>
          ₹ 1.5 Cr /- Onwards
        </Text>
        <HStack spacing={"1"}>
          <FaBed />
          <Text size={"sm"}>2,3,4,5 BHK</Text>
        </HStack>
        <Button className="!mt-3" size={"sm"} color={"primary"}>
          Contact Us
        </Button>
      </Stack>
    </Stack>
  );
}
