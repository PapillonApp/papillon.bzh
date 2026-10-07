import { Emoji, GlobeCross, Home, Lock, Paper, Search, Tasks } from "@getpapillon/papicons";
import type { Metadata } from "next";
import detail from "@/assets/homework/detail.webp";
import list from "@/assets/homework/list.webp";
import sort from "@/assets/homework/sort.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getDictionary()).featurePages.homework;

  return { title: t.metadataTitle, description: t.metadataDescription };
}

export default async function HomeworkPage() {
  const t = (await getDictionary()).featurePages.homework;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-homework"
      icon={Tasks}
      heroImage={list}
      highlights={[
        { key: "week", image: list },
        { key: "done", image: detail },
        { key: "sort", image: sort },
      ]}
      moreIcons={{
        subjects: Emoji,
        home: Home,
        attachments: Paper,
        search: Search,
        offline: GlobeCross,
        private: Lock,
      }}
      ctaImage={list}
    />
  );
}
