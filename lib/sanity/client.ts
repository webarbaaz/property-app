import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "pjz2qow2", // Set in .env.local
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // Set to false if you need real-time updates
});
