export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    title,
    description,
    content
  }
`;
