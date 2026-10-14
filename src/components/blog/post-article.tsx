import { ArrowLeft } from "@getpapillon/papicons";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { withBasePath } from "@/lib/base-path";
import { formatPostDate, importPost, type Post } from "@/lib/blog";
import { Author } from "./author";
import { CodeBlock, type CodeBlockLabels } from "./code-block";

type PostArticleProps = {
  t: Dictionary["blog"];
  post: Post;
  locale: string;
};

export function PostArticle({ t, post, locale }: PostArticleProps) {
  return (
    <ViewTransition name="blog-page" share="blog-page" default="none">
      <article className="px-6 pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-5">
          <Link
            href={`/${locale}/blog`}
            className="mb-4 flex items-center gap-2 text-md text-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="size-5" />
            <span className="text-trim">{t.back}</span>
          </Link>
          <h1 className="text-4xl leading-tighter font-semibold tracking-tight text-balance lg:text-5xl">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl/snug text-pretty text-foreground/60">{post.description}</p>
          )}
          <div className="mt-2 flex items-center gap-4 text-md font-medium text-foreground/70">
            <Author login={post.author} link />

            <div className="h-1 w-1 rounded-full bg-foreground/30" />

            <time dateTime={post.date} className="text-md text-foreground/60">
              {formatPostDate(post.date, locale)}
            </time>
          </div>
        </div>

        <ViewTransition name={`blog-banner-${post.slug}`} share="blog-banner" default="none">
          <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-3xl bg-surface lg:mt-16">
            <Image
              src={withBasePath(post.banner)}
              alt={post.bannerAlt ?? ""}
              fill
              preload
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </ViewTransition>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 [&>:first-child]:mt-0">
          <PostBody file={post.file} labels={{ copyCode: t.copyCode, copied: t.copied }} />
        </div>
      </article>
    </ViewTransition>
  );
}

async function PostBody({ file, labels }: { file: string; labels: CodeBlockLabels }) {
  "use cache";

  const { default: Content } = await importPost(file);
  return <Content components={{ pre: (props) => <CodeBlock {...props} labels={labels} /> }} />;
}
