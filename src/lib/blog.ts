import { readdir } from "node:fs/promises";
import path from "node:path";
import type { MDXContent } from "mdx/types";
import type { Locale } from "@/i18n/config";

export const postLocale: Locale = "fr";

export const teamAuthor = "PapillonApp";

export const postCategories = ["articles", "development", "releaseNotes"] as const;

export type PostCategory = (typeof postCategories)[number];

export type PostFrontmatter = {
  title: string;
  category?: PostCategory;
  description?: string;
  summary?: string;
  date: string;
  author: string;
  banner: string;
  bannerAlt?: string;
  bannerVideo?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  file: string;
  lang: Locale;
  category: PostCategory;
};

type PostModule = { default: MDXContent; frontmatter: PostFrontmatter };

const postFile = /\.mdx?$/;

export const postDir = path.join(process.cwd(), "src/content/blog");

async function listPosts(dir: string) {
  const files = await readdir(dir).catch((): string[] => []);
  return files.filter((file) => postFile.test(file));
}

export function importPost(file: string, lang: Locale): Promise<PostModule> {
  return lang === postLocale
    ? import(`@/content/blog/${file}`)
    : import(`@/content/blog/${lang}/${file}`);
}

export async function getPosts(locale: Locale): Promise<Post[]> {
  "use cache";

  const [files, translations] = await Promise.all([
    listPosts(postDir),
    listPosts(path.join(postDir, locale)),
  ]);
  const posts = await Promise.all(
    files.map(async (file) => {
      const lang = translations.includes(file) ? locale : postLocale;
      return {
        category: "articles" as const,
        ...(await importPost(file, lang)).frontmatter,
        slug: file.replace(postFile, ""),
        file,
        lang,
      };
    }),
  );
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getPost(slug: string, locale: Locale) {
  return (await getPosts(locale)).find((post) => post.slug === slug);
}

export function formatPostDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(date),
  );
}
