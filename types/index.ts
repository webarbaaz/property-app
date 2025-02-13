import { TypedObject } from "@portabletext/types";

interface Amenity {
  name: {
    current: string;
  };
  icon: string;
}

export interface Flags {
  isFeatured?: boolean;
  isUnderConstruction?: boolean;
  isExclusive?: boolean;
  isLatest?: boolean;
  isHotDeal?: boolean;
}
interface Locality {
  _id: string;
  name: { current: string };
  city: {
    name: { current: string };
  };
}
export interface Property {
  name: string;
  slug: string;
  description: TypedObject | TypedObject[];
  images: string[];
  propertyType: string;
  propertyStatus: string;
  size: string[];
  carpetArea: string;
  city: string;
  locality: Locality;
  category: string;
  price: string;
  amenities: Amenity[];
  developer: string;
  landParcel: string;
  totalTowers: number;
  totalFloors: number;
  buildUpArea: string;
  configuration: string;
  possessionDate: string;
  reRaId: string;
  launchDate: string;
  flags: Flags;
}

export interface LinkType {
  title: string;
  url: string;
}

export interface SearchTerm {
  propertyStatus?: string;
  propertyType?: string;
  city?: string;
  configuration?: string;
}
