import type { Metadata } from "next";
import { PostList } from "@/components/blog/post-list";
import { getDictionary, getLocale } from "@/i18n/server";
import { getPosts } from "@/lib/blog";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();

  return { title: dict.blog.metadataTitle, description: dict.blog.description };
}

export default async function BlogPage() {
  const [dict, locale, posts] = await Promise.all([getDictionary(), getLocale(), getPosts()]);

  return (
    <main className="min-h-dvh">
      <PostList t={dict.blog} posts={posts} locale={locale} />
    </main>
  );
}
