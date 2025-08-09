import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// experimental: {
//     turbo: false, // ❌ disable Turbopack
//   },

// };

// export default nextConfig;
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Increase upload size for server actions
    },
  },
  // Any other config can go here too
};

module.exports = withPWA(nextConfig);