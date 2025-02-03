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
