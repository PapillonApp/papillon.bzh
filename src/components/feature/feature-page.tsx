import type { StaticImageData } from "next/image";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { getDictionary, getLocale } from "@/i18n/server";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { Hero, type HeroText } from "./hero";
import { MoreFeatures } from "./more-features";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

type FeaturePageProps<MoreKey extends string> = {
  t: {
    hero: HeroText;
    more: ComponentProps<typeof MoreFeatures<MoreKey>>["t"];
    faq: ComponentProps<typeof Faq>["t"];
    cta: { title: string; description: string };
  };
  themeClassName: string;
  icon: Icon;
  heroVisual: ReactNode;
  moreIcons: Record<MoreKey, Icon>;
  ctaImage: StaticImageData;
  children: ReactNode;
};

export async function FeaturePage<MoreKey extends string>({
  t,
  themeClassName,
  icon,
  heroVisual,
  moreIcons,
  ctaImage,
  children,
}: FeaturePageProps<MoreKey>) {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className={themeClassName}>
      <Hero
        t={t.hero}
        icon={icon}
        compatible={dict.featurePages.compatible}
        download={dict.downloadPage}
        stats={dict.home.adoption.stats}
        locale={locale}
      >
        {heroVisual}
      </Hero>
      {children}
      <MoreFeatures t={t.more} icons={moreIcons} />
      <Faq t={t.faq} />
      <Cta t={t.cta} image={ctaImage} stores={dict.downloadPage.stores} locale={locale} />
    </main>
  );
}
