import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
