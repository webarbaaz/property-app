import { Flags } from "@/types";
import { client } from "../client";
type Filter = {
  propertyType?: string;
  propertyStatus?: string;
  locality?: string;
  category?: string;
  flags?: Flags;
  configuration?: string;
};
export async function getProperties(
  filters: Filter = {},
  page: number = 1,
  limit: number = 10
) {
  const { propertyType, propertyStatus, locality, category, flags, configuration } =
    filters;
  const start = (page - 1) * limit;
  const end = start + limit;

  const filterConditions = [`_type == "property"`];

  if (propertyType) {
    filterConditions.push(`projectType->slug.current == "${propertyType}"`);
  }
  if (propertyStatus) {
    filterConditions.push(`propertyStatus == "${propertyStatus}"`);
  }
  if (locality) {
    filterConditions.push(`locality->name.current == "${locality}"`);
  }
  if (category) {
    filterConditions.push(`category->slug.current == "${category}"`);
  }
  if (flags?.isFeatured) {
    filterConditions.push(`isFeatured == true`);
  }
  if (flags?.isExclusive) {
    filterConditions.push(`isExclusive == true`);
  }
  if (flags?.isHotDeal) {
    filterConditions.push(`isHotDeal == true`);
  }
  if (flags?.isUnderConstruction) {
    filterConditions.push(`isUnderConstruction == true`);
  }
  if (flags?.isLatest) {
    filterConditions.push(`isLatest == true`);
  }

  if (configuration) {
    filterConditions.push(`"${[configuration]}" in size`);
  }

  const query = `*[
      ${filterConditions.join(" && ")}
    ] | order(_createdAt desc) [${start}...${end}] {
      "slug": slug.current,
      propertyStatus,
        _id,
    name,
  description,
  images,
  type,
  size,
  buildUpArea,
  locality-> {
					_id,
					name,
					city-> {
						name
					},
},
  category -> {
    name,
  },
  price,
  reRaId,
  possessionDate,
  carpetArea,
    }`;

  return await client.fetch(query, {
    // propertyType,
    // propertyStatus,
    // location,
    // category,
  });
}

export async function getProjectTypes() {
  const query = `
  *[_type == "projectType"] {
    title
  }
  `;

  return await client.fetch(query);
}

export async function getLocations() {
  const query = `*[_type == "locality"] { _id, name }`;
  return await client.fetch(query);
}

export async function getSizes() {
  const query = `*[_type == "size"] { size }`;
  return await client.fetch(query);
}

export async function getCategories() {
  const query = `*[_type == "category"] | order(_createdAt asc) { _id, name,
    "slug": slug.current}`;
  return await client.fetch(query);
}


export async function getReviews () {
  const query = `*[_type == "review"] {
  author,
  rating,
  reviewText,
  }`
  return await client.fetch(query)
}