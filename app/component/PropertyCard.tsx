import React from "react";
import Stack from "./ui/Stack";
import Image from "next/image";
import Text from "./ui/Text";
import { Property } from "@/types";
import generateImageUrl from "@/lib/sanity/utils/imageBuilder";
import { Grid } from "./ui/Grid";
import Button from "./ui/Button";
import { useSite } from "../hooks/useSite";
import { MapPin } from "lucide-react";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const { setProperty, setLeadDialog } = useSite();
  return (
    <div className="py-4 px-2">
      <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={
              generateImageUrl(property.images[0]) ??
              `/assets/banner/banner-1.jpg`
            }
            alt="Property"
            width={500}
            height={300}
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium">
            {property.propertyStatus}
          </div>
          <div className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-sm font-medium text-white">
            ₹{property.price}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold">{property.name}</h3>
          <div className="mt-2 flex items-center text-muted-foreground capitalize">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="text-sm">
              {property.locality.name.current}
              {", "}
              {property.locality.city.name.current}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Bedrooms</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Bathrooms</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">Area</span>
                <span className="font-medium">1,200 sq ft</span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
