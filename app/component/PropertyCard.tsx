import React from "react";
import Stack from "./ui/Stack";
import Image from "next/image";
import Text from "./ui/Text";
import { Property } from "@/types";
import generateImageUrl from "@/lib/sanity/utils/imageBuilder";
import { Grid } from "./ui/Grid";
import Button from "./ui/Button";
import { useSite } from "../hooks/useSite";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const {setProperty, setLeadDialog} = useSite()
  return (
    <Stack
      spacing={"0"}
      className="bg-white rounded-lg shadow-md capitalize relative my-4 mx-2">
      <Text
        className="uppercase absolute left-2 top-2 bg-gray-700 px-3 py-1 shadow-lg rounded-full"
        color="white"
        size={"sm"}>
        {property?.propertyStatus}
      </Text>
      <Image
        className="rounded-lg w-full h-[500px] object-cover"
        src={generateImageUrl(property?.images[0]) ?? "/placeholder.jpg"}
        alt=""
        width={300}
        height={200}
      />
      <Stack
        spacing={"1"}
        className="p-3 rounded-lg absolute left-2 right-2 bg-white bottom-2">
        <Text weight={"semibold"} className="text-lg">
          {property?.name}
        </Text>
        <Grid cols={2} gap={"md"}>
          <Stack spacing={"1"} className="border-r-2">
            <Text className="text-gray-500">Carpet Area</Text>
            <Text className="font-semibold">{property?.carpetArea}</Text>
          </Stack>
          <Stack spacing={"1"}>
            <Text className="text-gray-500">Configuration</Text>
            <Text className="font-semibold">{property?.size.join(", ")}</Text>
          </Stack>
          <Stack spacing={"1"} className="border-r-2">
            <Text className="text-gray-500">RERA ID</Text>
            <Text className="font-semibold">{property?.reRaId}</Text>
          </Stack>
          <Stack spacing={"1"}>
            <Text className="text-gray-500">Possession Date</Text>
            <Text className="font-semibold">{property?.possessionDate}</Text>
          </Stack>
        </Grid>
        <Text weight={"semibold"} className="text-lg">
          INR {property?.price}{" "}
          <span className="text-sm text-gray-400">Onwards</span>
        </Text>
        <Button onClick={(e) => {
          e.stopPropagation();
          e.preventDefault()
          setProperty(property)
          setLeadDialog(true)
        }}>Contact us</Button>
      </Stack>
    </Stack>
  );
}
