import { GlobeCross, Home, Lock, Newspaper } from "@getpapillon/papicons";
import type { Metadata } from "next";
import detail from "@/assets/news/detail.webp";
import list from "@/assets/news/list.webp";
import { FeaturePage } from "@/components/feature/feature-page";
import { HeroScreens } from "@/components/feature/hero-screens";
import { SectionTitle } from "@/components/feature/section-title";
import { Tiles } from "@/components/feature/tiles";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.featurePages.news;

  return pageMetadata({
    locale,
    path: "/news",
    title: t.metadataTitle,
    description: t.metadataDescription,
  });
}

export default async function NewsPage() {
  const t = (await getDictionary()).featurePages.news;

  return (
    <FeaturePage
      t={t}
      themeClassName="theme-news"
      icon={Newspaper}
      heroVisual={
        <HeroScreens
          front={{ image: list, alt: t.hero.imageAlt }}
          back={{ image: detail, alt: t.highlights.detail.imageAlt }}
        />
      }
      moreIcons={{ home: Home, offline: GlobeCross, private: Lock }}
      ctaImage={detail}
    >
      <section className="px-6 py-24 lg:py-32">
        <SectionTitle title={t.tour.title} description={t.tour.description} />
        <Tiles
          items={[
            { image: list, t: t.highlights.list },
            { image: detail, t: t.highlights.detail },
          ]}
        />
      </section>
    </FeaturePage>
  );
}
