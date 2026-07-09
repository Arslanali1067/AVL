import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#who-i-am",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#rentals",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
