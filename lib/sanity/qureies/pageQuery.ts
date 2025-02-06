export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    name,
    description,
    content
  }
`;
