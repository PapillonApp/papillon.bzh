import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

export const postCategories = ["articles", "development", "releaseNotes"] as const;

export type PostCategory = (typeof postCategories)[number];

export type PostFrontmatter = {
  title: string;
  category?: PostCategory;
  description?: string;
  date: string;
  author: string;
  banner: string;
  bannerAlt?: string;
};

export type Post = PostFrontmatter & { slug: string; file: string; category: PostCategory };

type PostModule = { default: ComponentType; frontmatter: PostFrontmatter };

const postFile = /\.mdx?$/;

export function importPost(file: string): Promise<PostModule> {
  return import(`@/content/blog/${file}`);
}

export async function getPosts(): Promise<Post[]> {
  "use cache";

  const files = (await readdir(path.join(process.cwd(), "src/content/blog"))).filter((file) =>
    postFile.test(file),
  );
  const posts = await Promise.all(
    files.map(async (file) => ({
      category: "articles" as const,
      ...(await importPost(file)).frontmatter,
      slug: file.replace(postFile, ""),
      file,
    })),
  );
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getPost(slug: string) {
  return (await getPosts()).find((post) => post.slug === slug);
}

export function formatPostDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(date),
  );
}
