import { client } from "../client";
type Filter = {
  propertyType?: string;
  propertyStatus?: string;
  location?: string;
  category?: string;
};
export async function getProperties(
  filters: Filter = {},
  page: number = 1,
  limit: number = 10
) {
  const { propertyType, propertyStatus, location, category } = filters;

  const start = (page - 1) * limit;
  const end = start + limit;

  const filterConditions = [`_type == "property"`];

  if (propertyType) {
    filterConditions.push(`type == $propertyType`);
  }
  if (propertyStatus) {
    filterConditions.push(`status == $propertyStatus`);
  }
  if (location) {
    filterConditions.push(`locality.city.name.current match $location`);
  }
  if (category) {
    filterConditions.push(`category == $category`);
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
      locality {
        name { current },
        city { name { current } }
      }
    }`;

  return await client.fetch(query, {
    propertyType,
    propertyStatus,
    location,
    category,
  });
}
