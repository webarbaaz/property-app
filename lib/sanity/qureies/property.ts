export const propertyListQuery = `
  *[_type == "property" 
    && (!defined($type) || type == $type)
    && (!defined($status) || status == $status)
  ] | order(_createdAt desc)[$start...$end] {
    _id,
    name,
  description,
  images,
  type,
  size,
  carpetArea,
  parking,
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
  }
`;

export const propertyQuery = `*[_type == "property" && slug.current == $slug][0] {
  name,
  description,
  images,
  propertyType,
  propertyStatus,
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
  representativeName,
  representativeNumber,
}`;
