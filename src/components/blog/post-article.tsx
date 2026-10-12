import { ArrowLeft } from "@getpapillon/papicons";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { formatPostDate, importPost, type Post } from "@/lib/blog";
import { Author } from "./author";

type PostArticleProps = {
  t: Dictionary["blog"];
  post: Post;
  locale: string;
};

export function PostArticle({ t, post, locale }: PostArticleProps) {
  return (
    <article className="px-6 pt-32 pb-24 lg:pt-44 lg:pb-32">
      <FadeUp className="mx-auto flex max-w-2xl flex-col items-start gap-5">
        <Link
          href={`/${locale}/blog`}
          className="mb-4 flex items-center gap-2 text-md text-foreground/50 transition-colors hover:text-foreground"
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
        <span className="mt-2 text-md font-medium text-foreground/70 flex items-center gap-4">
          <Author login={post.author} link />

          <div className="h-1 w-1 rounded-full bg-foreground/30" />

          <time dateTime={post.date} className="text-md text-foreground/50">
            {formatPostDate(post.date, locale)}
          </time>
        </span>
      </FadeUp>

      <FadeUp delay={0.1} className="mx-auto mt-12 max-w-4xl lg:mt-16">
        <div className="relative aspect-video overflow-hidden rounded-3xl bg-surface">
          <Image
            src={post.banner}
            alt={post.bannerAlt ?? ""}
            fill
            preload
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      </FadeUp>

      <div className="mx-auto mt-12 max-w-2xl lg:mt-16 [&>:first-child]:mt-0">
        <PostBody file={post.file} />
      </div>
    </article>
  );
}

async function PostBody({ file }: { file: string }) {
  "use cache";

  const { default: Content } = await importPost(file);
  return <Content />;
}
