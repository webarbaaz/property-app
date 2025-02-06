import imageUrlBuilder from "@sanity/image-url";
import { client } from "../client";

// Setup the Sanity image builder
const builder = imageUrlBuilder(client);

export default function generateImageUrl(source: string) {
  if (!source && source === undefined) return "./placeholder-image.png";
  return builder.image(source)?.url();
}
