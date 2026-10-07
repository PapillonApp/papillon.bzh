import { GlobeCross, Home, Lock, Newspaper } from "@getpapillon/papicons";
import type { Metadata } from "next";
import detail from "@/assets/news/detail.webp";
import list from "@/assets/news/list.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { Screen } from "@/components/feature/screen";
import { ReadingSpread } from "@/components/news/reading-spread";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.news;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function NewsPage() {
  const t = (await getDictionary()).featurePages.news;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-news"
      icon={Newspaper}
      heroLayout="center"
      heroVisual={
        <div className="flex h-100 items-start justify-center overflow-hidden mask-b-from-55% lg:h-150">
          <Screen
            image={list}
            alt={t.hero.imageAlt}
            priority
            className="relative z-10 w-44 -rotate-3 sm:w-64 lg:w-80"
          />
          <Screen
            image={detail}
            alt={t.highlights.detail.imageAlt}
            className="mt-24 -ml-8 w-44 rotate-3 sm:w-64 lg:-ml-12 lg:w-80"
          />
        </div>
      }
      moreIcons={{ home: Home, offline: GlobeCross, private: Lock }}
      ctaImage={detail}
    >
      <ReadingSpread items={[t.highlights.list, t.highlights.detail]} />
    </FeaturePage>
  );
}
