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
  buildUpArea,
  launchDate,
  locality-> {
					_id,
					name,
					city-> {
						name
					},
},
  category,
  price,
  developer,
  totalFloor,
  totalTowers,
  reRaId,
  landParcel,
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
  developer,
  projectType,
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
  amenities[]->{
    name,
    icon,
  },
  possessionDate,
  carpetArea,
  totalFloors,
  launchDate,
  totalTowers,
  reRaId,
  landParcel,
  buildUpArea
}`;
