import { Flags } from "@/types";
import { client } from "../client";
type Filter = {
  propertyType?: string;
  propertyStatus?: string;
  city?: string;
  category?: string;
  flags?: Flags;
};
export async function getProperties(
  filters: Filter = {},
  page: number = 1,
  limit: number = 10
) {
  const { propertyType, propertyStatus, city, category, flags } = filters;

  const start = (page - 1) * limit;
  const end = start + limit;

  const filterConditions = [`_type == "property"`];

  if (propertyType) {
    filterConditions.push(`projectType == "${propertyType}"`);
  }
  if (propertyStatus) {
    filterConditions.push(`propertyStatus == "${propertyStatus}"`);
  }
  if (city) {
    filterConditions.push(`locality.city->name.current match "${city}"`);
  }
  if (category) {
    if (Array.isArray(category)) {
      filterConditions.push(`category[] in ${JSON.stringify(category)}`);
    } else {
      filterConditions.push(`"${category}" in category`);
    }
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

  const query = `*[
      ${filterConditions.join(" && ")}
    ] | order(_createdAt desc) [${start}...${end}] {
      _id,
      "slug": slug.current,
      name,
      description,
      images,
      size,
      price,
      category,
      propertyStatus,
      locality {
        name { current },
        city { name { current } }
      }
    }`;

  return await client.fetch(query, {
    // propertyType,
    // propertyStatus,
    // location,
    // category,
  });
}
