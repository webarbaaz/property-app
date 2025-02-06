export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    name,
    description,
    content
  }
`;

export const pageQueryList = `
  *[_type == "page" && slug.current == $slug] {
    name,
    slug,
  }
`;
