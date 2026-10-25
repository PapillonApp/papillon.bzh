import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getPosts } from "@/lib/blog";
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
  const posts = (await Promise.all(locales.map((locale) => getPosts(locale)))).flatMap(
    (posts, index) => posts.filter((post) => post.lang === locales[index]),
  );
  const translated = (slug: string) =>
    posts.filter((post) => post.slug === slug).length === locales.length;
  const postEntries = posts.map((post) => ({
    url: `${siteUrl}/${post.lang}/blog/${post.slug}`,
    lastModified: post.date,
    ...(translated(post.slug) && {
      alternates: { languages: absolute(localizedAlternates(`/blog/${post.slug}`)) },
    }),
  }));

  return [...pages, ...postEntries];
}
