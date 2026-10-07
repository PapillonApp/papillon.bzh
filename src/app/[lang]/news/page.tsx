import { GlobeCross, Home, Lock, Newspaper } from "@getpapillon/papicons";
import type { Metadata } from "next";
import detail from "@/assets/news/detail.webp";
import list from "@/assets/news/list.webp";
import { FeaturePage } from "@/components/feature/feature-page";
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
      icon={Newspaper}
      heroImages={{ front: list, back: detail }}
      highlights={[
        { key: "list", image: list },
        { key: "detail", image: detail },
      ]}
      moreIcons={{ home: Home, offline: GlobeCross, private: Lock }}
      ctaImage={detail}
    />
  );
}
