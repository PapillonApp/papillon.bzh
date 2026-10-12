import { Emoji, GlobeCross, Home, Lock, Paper, Search, Tasks } from "@getpapillon/papicons";
import type { Metadata } from "next";
import detail from "@/assets/homework/detail.webp";
import list from "@/assets/homework/list.webp";
import sort from "@/assets/homework/sort.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { HeroScreens } from "@/components/feature/hero-screens";
import { SectionTitle } from "@/components/feature/section-title";
import { Tiles } from "@/components/feature/tiles";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.featurePages.homework;

  return pageMetadata({
    locale,
    path: "/homework",
    title: t.metadataTitle,
    description: t.metadataDescription,
  });
}

export default async function HomeworkPage() {
  const t = (await getDictionary()).featurePages.homework;
  const { week, done, sort: sorting } = t.highlights;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-homework"
      icon={Tasks}
      heroVisual={
        <HeroScreens
          front={{ image: list, alt: t.hero.imageAlt }}
          back={{ image: detail, alt: done.imageAlt }}
        />
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
      <section className="px-6 py-24 lg:py-32">
        <SectionTitle title={t.tour.title} description={t.tour.description} />
        <Tiles
          items={[
            { image: list, t: week },
            { image: detail, t: done },
            { image: sort, t: sorting },
          ]}
        />
      </section>
    </FeaturePage>
  );
}
