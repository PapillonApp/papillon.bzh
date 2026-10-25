import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/blog/post-article";
import { JsonLd } from "@/components/ui/json-ld";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import { getPost, getPosts, postLocale, teamAuthor } from "@/lib/blog";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getPosts(postLocale)).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const versions = await Promise.all(locales.map((lang) => getPost(slug, lang)));
  const post = versions[locales.indexOf(locale)];
  if (!post) return {};
  const translated = versions.every((version, index) => version?.lang === locales[index]);

  return pageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    canonicalLocale: translated ? undefined : post.lang,
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
  const [{ slug }, dict, locale] = await Promise.all([params, getDictionary(), getLocale()]);
  const post = await getPost(slug, locale);
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
          dateModified: post.date,
          inLanguage: post.lang,
          mainEntityOfPage: `${siteUrl}/${post.lang}/blog/${post.slug}`,
          author:
            post.author === teamAuthor
              ? { "@id": organizationId }
              : { "@type": "Person", name: post.author, url: `https://github.com/${post.author}` },
          publisher: { "@id": organizationId },
        }}
      />
      <PostArticle t={dict.blog} post={post} locale={locale} />
    </main>
  );
}
