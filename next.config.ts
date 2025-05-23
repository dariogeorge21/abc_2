import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com"],
  },
};

export default nextConfig;
