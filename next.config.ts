import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/why-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/typologies",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
