import { TypedObject } from "@portabletext/types";

interface Amenity {
  name: {
    current: string;
  };
  icon: string;
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
  size: number;
  carpetArea: number;
  parking: number;
  city: string;
  locality: Locality;
  category: string;
  price: number;
  dealerContact: string;
  amenities: Amenity[];
  possessionDate: string;
  representativeName: string;
  representativeNumber: number;
}

export interface LinkType {
  title: string;
  url: string;
}

export interface SearchTerm {
  propertyStatus?: string;
  propertyType?: string;
  city?: string;
}
