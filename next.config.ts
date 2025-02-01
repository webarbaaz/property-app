import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack5: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
