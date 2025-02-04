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
    description: string;
    images: string[];
    type: string;
    size: number;
    carpetArea: number;
    parking: boolean;
    city: string;
    locality: Locality;
    category: string;
    price: number;
    dealerName: string;
    dealerContact: string;
    amenities: Amenity[];
    possessionDate: string;
  }