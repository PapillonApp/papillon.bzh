import { Emoji, GlobeCross, Home, Lock, Paper, Search, Tasks } from "@getpapillon/papicons";
import type { Metadata } from "next";
import detail from "@/assets/homework/detail.webp";
import list from "@/assets/homework/list.webp";
import sort from "@/assets/homework/sort.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { Screen } from "@/components/feature/screen";
import { Ledger } from "@/components/homework/ledger";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.homework;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function HomeworkPage() {
  const t = (await getDictionary()).featurePages.homework;
  const { week, done, sort: sorting } = t.highlights;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-homework"
      icon={Tasks}
      heroLayout="center"
      heroVisual={
        <div className="flex h-100 items-start justify-center overflow-hidden mask-b-from-55% lg:h-150">
          <Screen
            image={detail}
            alt={done.imageAlt}
            className="mt-16 -mr-16 w-32 -rotate-6 sm:w-48 lg:w-72"
          />
          <Screen
            image={list}
            alt={t.hero.imageAlt}
            priority
            className="relative z-10 w-48 sm:w-56 lg:w-80"
          />
          <Screen
            image={sort}
            alt={sorting.imageAlt}
            className="mt-16 -ml-16 w-32 rotate-6 sm:w-48 lg:w-72"
          />
        </div>
      }
      moreIcons={{
        subjects: Emoji,
        home: Home,
        attachments: Paper,
        search: Search,
        offline: GlobeCross,
        private: Lock,
      }}
      ctaImage={list}
    >
      <Ledger
        items={[
          { image: list, t: week },
          { image: detail, t: done },
          { image: sort, t: sorting },
        ]}
      />
    </FeaturePage>
  );
}
