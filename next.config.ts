import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
