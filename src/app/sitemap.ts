import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getPosts, postLocale } from "@/lib/blog";
import { localizedAlternates, siteUrl } from "@/lib/seo";

const paths = [
  "",
  "/grades",
  "/schedule",
  "/homework",
  "/news",
  "/download",
  "/association",
  "/story",
  "/blog",
  "/links",
];

function absolute(languages: Record<string, string>) {
  return Object.fromEntries(Object.entries(languages).map(([key, path]) => [key, siteUrl + path]));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: { languages: absolute(localizedAlternates(path)) },
    })),
  );
  const posts = (await getPosts()).map((post) => ({
    url: `${siteUrl}/${postLocale}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...pages, ...posts];
}
