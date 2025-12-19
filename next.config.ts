// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "covers.openlibrary.org",
      "books.google.com",
      "via.placeholder.com",
      "res.cloudinary.com", // Add Cloudinary domain here
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/b/isbn/**",
      },
      {
        protocol: "https",
        hostname: "books.google.com",
        pathname: "/books/content/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      // Add Cloudinary remote pattern
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // This allows all paths from Cloudinary
      },
    ],
  },
  // Optional: Add if you're using experimental features
  experimental: {
    serverActions: {},
  },
};

export default nextConfig;
