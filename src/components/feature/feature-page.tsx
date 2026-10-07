import type { StaticImageData } from "next/image";
import type { ComponentProps, ComponentType } from "react";
import { Faq } from "@/components/home/faq";
import { getDictionary, getLocale } from "@/i18n/server";
import { Cta } from "./cta";
import { Hero, type HeroText } from "./hero";
import { Highlights } from "./highlights";
import { LargeScreen, type LargeScreenText } from "./large-screen";
import { MoreFeatures } from "./more-features";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type FeaturePageProps<HighlightKey extends string, MoreKey extends string> = {
  t: {
    hero: HeroText;
    highlights: ComponentProps<typeof Highlights<HighlightKey>>["t"];
    more: ComponentProps<typeof MoreFeatures<MoreKey>>["t"];
    faq: ComponentProps<typeof Faq>["t"];
    cta: { title: string; description: string };
    largeScreen?: LargeScreenText;
  };
  icon: Icon;
  heroImages: { front: StaticImageData; back: StaticImageData };
  highlights: { key: HighlightKey; image: StaticImageData }[];
  moreIcons: Record<MoreKey, Icon>;
  ctaImage: StaticImageData;
  largeScreenImage?: StaticImageData;
};

export async function FeaturePage<HighlightKey extends string, MoreKey extends string>({
  t,
  icon,
  heroImages,
  highlights,
  moreIcons,
  ctaImage,
  largeScreenImage,
}: FeaturePageProps<HighlightKey, MoreKey>) {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main>
      <Hero
        t={t.hero}
        icon={icon}
        images={heroImages}
        compatible={dict.featurePages.compatible}
        download={dict.downloadPage}
        stats={dict.home.adoption.stats}
        locale={locale}
      />
      <Highlights t={t.highlights} items={highlights} />
      {t.largeScreen && largeScreenImage && (
        <LargeScreen t={t.largeScreen} image={largeScreenImage} />
      )}
      <MoreFeatures t={t.more} icons={moreIcons} />
      <Faq t={t.faq} />
      <Cta t={t.cta} image={ctaImage} stores={dict.downloadPage.stores} locale={locale} />
    </main>
  );
}
