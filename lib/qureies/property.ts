export const propertyListQuery = `
  *[_type == "property" 
    && (!defined($propertyType) || propertyType == $propertyType)
    && (!defined($propertyStatus) || propertyStatus == $propertyStatus)
    && (!defined($propertyLocation) || propertyLocation == $propertyLocation)
  ] | order(_createdAt desc)[$start...$end] {
    _id,
    title,
    propertyType,
    propertyStatus,
    propertyLocation,
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    "imageUrl": mainImage.asset->url
  }
`;

export const propertyQuery = `*[_type == "property" && slug.current == $slug][0] {
  name,
  description,
  images,
  type,
  size,
  carpetArea,
  parking,
  city,
  locality-> {
					_id,
					name,
					city-> {
						name
					},
},
  category,
  price,
  dealerName,
  dealerContact,
  amenities[]->{
    name,
    icon,
  },
  possessionDate,
  carpetArea,
}`;
