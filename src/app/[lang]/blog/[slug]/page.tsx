import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/blog/post-article";
import { getDictionary, getLocale } from "@/i18n/server";
import { getPost, getPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};

  return {
    title: `${post.title} – Papillon`,
    description: post.description,
    openGraph: { images: post.banner, type: "article", publishedTime: post.date },
  };
}

export default async function PostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const [post, dict, locale] = await Promise.all([
    params.then(({ slug }) => getPost(slug)),
    getDictionary(),
    getLocale(),
  ]);
  if (!post) notFound();

  return (
    <main className="min-h-dvh">
      <PostArticle t={dict.blog} post={post} locale={locale} />
    </main>
  );
}
