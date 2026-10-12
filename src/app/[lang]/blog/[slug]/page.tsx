import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/blog/post-article";
import { JsonLd } from "@/components/ui/json-ld";
import { getDictionary, getLocale } from "@/i18n/server";
import { getPost, getPosts, postLocale } from "@/lib/blog";
import { pageMetadata, siteUrl } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const [post, locale] = await Promise.all([params.then(({ slug }) => getPost(slug)), getLocale()]);
  if (!post) return {};

  return pageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    canonicalLocale: postLocale,
    title: `${post.title} – Papillon`,
    description: post.description ?? "",
    openGraph: {
      type: "article",
      publishedTime: post.date,
      images: { url: post.banner, alt: post.bannerAlt },
    },
  });
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: `${siteUrl}${post.banner}`,
          datePublished: post.date,
          inLanguage: postLocale,
          mainEntityOfPage: `${siteUrl}/${postLocale}/blog/${post.slug}`,
          author: { "@type": "Person", name: post.author, url: `https://github.com/${post.author}` },
          publisher: { "@type": "Organization", name: "Papillon", url: siteUrl },
        }}
      />
      <PostArticle t={dict.blog} post={post} locale={locale} />
    </main>
  );
}
