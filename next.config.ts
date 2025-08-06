import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
experimental: {
    turbo: false, // ❌ disable Turbopack
  },

};

export default nextConfig;
