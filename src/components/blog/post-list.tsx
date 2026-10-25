import Image from "next/image";
import Link from "next/link";
import { type ReactNode, ViewTransition } from "react";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { withBasePath } from "@/lib/base-path";
import { formatPostDate, type Post, type PostCategory, postCategories } from "@/lib/blog";
import { Author } from "./author";
import { CategoryTabs } from "./category-tabs";

type PostListProps = {
  t: Dictionary["blog"];
  posts: Post[];
  locale: string;
};

export function PostList({ t, posts, locale }: PostListProps) {
  return (
    <ViewTransition name="blog-page" share="blog-page" default="none">
      <section className="px-6 pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
          <p className="mt-3 text-lg text-pretty text-foreground/60">{t.description}</p>

          <CategoryTabs
            allLabel={t.all}
            labels={t.categories}
            panels={{
              all: <Posts posts={posts} empty={t.empty} teamName={t.team} locale={locale} />,
              ...(Object.fromEntries(
                postCategories.map((category) => [
                  category,
                  <Posts
                    key={category}
                    posts={posts.filter((post) => post.category === category)}
                    empty={t.empty}
                    teamName={t.team}
                    locale={locale}
                  />,
                ]),
              ) as Record<PostCategory, ReactNode>),
            }}
          />
        </div>
      </section>
    </ViewTransition>
  );
}

type PostsProps = {
  posts: Post[];
  empty: string;
  teamName: string;
  locale: string;
};

function Posts({ posts, empty, teamName, locale }: PostsProps) {
  if (posts.length === 0) {
    return (
      <p className="mt-6 border-t border-foreground/10 pt-6 text-md text-foreground/60">{empty}</p>
    );
  }

  return (
    <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
      {posts.map((post, index) => (
        <li key={post.slug}>
          <PostRow post={post} teamName={teamName} locale={locale} preload={index === 0} />
        </li>
      ))}
    </ul>
  );
}

type PostRowProps = {
  post: Post;
  teamName: string;
  locale: string;
  preload: boolean;
};

function PostRow({ post, teamName, locale, preload }: PostRowProps) {
  return (
    <Link href={`/${locale}/blog/${post.slug}`} data-sound="pageOpen" className="group flex items-center gap-5 py-5">
      <ViewTransition name={`blog-banner-${post.slug}`} share="blog-banner" default="none">
        <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-surface sm:w-36">
          <Image
            src={withBasePath(post.banner)}
            alt=""
            fill
            preload={preload}
            sizes="144px"
            className="object-cover"
          />
        </div>
      </ViewTransition>
      <div className="flex min-w-0 flex-col gap-1.5">
        <h2 className="truncate text-lg/snug font-medium transition-colors duration-150 group-hover:text-primary">
          {post.title}
        </h2>
        {post.description && (
          <p className="line-clamp-1 text-md text-foreground/60 max-sm:hidden">
            {post.description}
          </p>
        )}
        <div className="flex items-center gap-2 text-sm whitespace-nowrap text-foreground/60">
          <time dateTime={post.date} className="shrink-0">
            {formatPostDate(post.date, locale)}
          </time>
          <span aria-hidden>·</span>
          <span className="truncate">
            <Author login={post.author} teamName={teamName} avatar={false} />
          </span>
        </div>
      </div>
    </Link>
  );
}
