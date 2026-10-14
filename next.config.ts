import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(staticExport && {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    trailingSlash: true,
  }),
  typedRoutes: true,
  cacheComponents: !staticExport,
  partialPrefetching: !staticExport,
  images: {
    unoptimized: staticExport,
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
