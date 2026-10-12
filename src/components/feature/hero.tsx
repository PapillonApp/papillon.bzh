import { Star } from "@getpapillon/papicons";
import type { ComponentType, ReactNode } from "react";
import { StoreBadges } from "@/components/download/store-badges";
import { FadeUp } from "@/components/ui/fade-up";
import { ServiceLogos } from "@/components/ui/service-logos";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export type HeroText = {
  title: string;
  description: string;
  imageAlt: string;
};

type HeroProps = {
  t: HeroText;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  compatible: string;
  download: Dictionary["downloadPage"];
  stats: Dictionary["home"]["adoption"]["stats"];
  locale: Locale;
  children: ReactNode;
};

export function Hero({ t, icon: Icon, compatible, download, stats, locale, children }: HeroProps) {
  const rating = download.hero.rating
    .replace("{rating}", stats.rating.value)
    .replace("{downloads}", stats.downloads.value);

  return (
    <section className="px-3 pt-19 lg:px-4 lg:pt-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-primary/10 lg:min-h-160 lg:grid-cols-2">
        <FadeUp className="flex flex-col items-start justify-center gap-5 px-6 pt-12 sm:px-10 lg:py-20 lg:pr-0 lg:pl-16">
          <Icon aria-hidden className="size-12 text-primary" />
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="max-w-lg text-lg/normal font-book text-pretty text-foreground/60">
            {t.description}
          </p>
          <div className="mt-3">
            <StoreBadges t={download.stores} locale={locale} className="justify-start" />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-md text-foreground/60">
            <p className="flex items-center gap-1.5">
              <Star aria-hidden className="size-5 text-primary" />
              <span className="text-trim">{rating}</span>
            </p>
            <span aria-hidden className="h-4 w-px bg-current/30 max-sm:hidden" />
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-trim">{compatible}</span>
              <ServiceLogos />
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="flex h-104 justify-center pt-12 sm:h-120 lg:h-auto lg:pt-20">
          {children}
        </FadeUp>
      </div>
    </section>
  );
}
