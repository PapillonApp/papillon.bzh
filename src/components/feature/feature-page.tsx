import type { StaticImageData } from "next/image";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { Faq } from "@/components/home/faq";
import { getDictionary, getLocale } from "@/i18n/server";
import { Cta } from "./cta";
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
  heroLayout: "center" | "split";
  heroVisual: ReactNode;
  moreIcons: Record<MoreKey, Icon>;
  ctaImage: StaticImageData;
  children: ReactNode;
};

export async function FeaturePage<MoreKey extends string>({
  t,
  themeClassName,
  icon,
  heroLayout,
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
        layout={heroLayout}
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
