import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack5: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "www.valueproperties.co.in",
      "cdn.sanity.io",
      "www.facebook.com",
    ],
  },
};

export default nextConfig;
