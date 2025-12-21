import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/carrosserie-generale",
        statusCode: 302,
      },
    ];
  },
};

export default nextConfig;
