import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Set in .env.local
  // token: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN,
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false, // Set to false if you need real-time updates
});
