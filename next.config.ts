import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 448],
    qualities: [75, 90],
  },
  experimental: {
    optimizePackageImports: ["@getpapillon/papicons"],
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

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter", "remark-gfm"],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        { theme: "github-dark-default", keepBackground: false, defaultLang: { block: "plaintext" } },
      ],
    ],
  },
});

export default withMDX(nextConfig);
