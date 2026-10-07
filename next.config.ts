import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 90],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
