import { ArrowLeft, Sparkles } from "@getpapillon/papicons";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { LazyVideo } from "@/components/ui/lazy-video";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { withBasePath } from "@/lib/base-path";
import { formatPostDate, importPost, type Post, postLocale } from "@/lib/blog";
import { Author } from "./author";
import { CodeBlock, type CodeBlockLabels } from "./code-block";
import { PostSummary } from "./post-summary";

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
            data-sound="pageClose"
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
            <Author login={post.author} teamName={t.team} link />

            <div className="h-1 w-1 rounded-full bg-foreground/30" />

            <time dateTime={post.date} className="text-md text-foreground/60">
              {formatPostDate(post.date, locale)}
            </time>

            {post.lang !== postLocale && (
              <>
                <div className="h-1 w-1 rounded-full bg-foreground/30" />
                <span className="flex items-center gap-1.5 text-md text-foreground/60">
                  <Sparkles aria-hidden className="size-5" />
                  {t.translatedByAi}
                </span>
              </>
            )}
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
            {post.bannerVideo && (
              <LazyVideo
                src={withBasePath(post.bannerVideo)}
                poster={withBasePath(post.banner)}
                className="absolute inset-0 size-full object-cover"
              />
            )}
          </div>
        </ViewTransition>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 [&>:first-child]:mt-0">
          {post.summary && (
            <PostSummary summary={post.summary} title={t.summary} label={t.summarizedByAi} />
          )}
          <PostBody
            file={post.file}
            lang={post.lang}
            labels={{ copyCode: t.copyCode, copied: t.copied }}
          />
        </div>
      </article>
    </ViewTransition>
  );
}

type PostBodyProps = { file: string; lang: Locale; labels: CodeBlockLabels };

async function PostBody({ file, lang, labels }: PostBodyProps) {
  "use cache";

  const { default: Content } = await importPost(file, lang);
  return <Content components={{ pre: (props) => <CodeBlock {...props} labels={labels} /> }} />;
}
