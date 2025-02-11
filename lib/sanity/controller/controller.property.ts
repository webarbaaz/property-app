import { client } from "../client";
type Filter = {
  propertyType?: string;
  propertyStatus?: string;
  city?: string;
  category?: string;
};
export async function getProperties(
  filters: Filter = {},
  page: number = 1,
  limit: number = 10
) {
  const { propertyType, propertyStatus, city, category } = filters;

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
    filterConditions.push(`category == ${category}`);
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
