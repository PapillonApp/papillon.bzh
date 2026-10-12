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
  layout: "center" | "split";
  compatible: string;
  download: Dictionary["downloadPage"];
  stats: Dictionary["home"]["adoption"]["stats"];
  locale: Locale;
  children: ReactNode;
};

export function Hero({
  t,
  icon: Icon,
  layout,
  compatible,
  download,
  stats,
  locale,
  children,
}: HeroProps) {
  const split = layout === "split";
  const rating = download.hero.rating
    .replace("{rating}", stats.rating.value)
    .replace("{downloads}", stats.downloads.value);

  return (
    <section
      className={`relative isolate overflow-hidden px-6 pt-32 lg:pt-44 ${
        split ? "pb-20 lg:pb-28" : ""
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-radial-[at_top] from-primary/25 via-primary/8 via-30% to-transparent to-60% ${
          split ? "lg:bg-radial-[at_85%_30%]" : ""
        }`}
      />

      <div
        className={
          split
            ? "mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-20"
            : "mx-auto max-w-6xl"
        }
      >
        <FadeUp
          className={`flex flex-col gap-6 ${
            split
              ? "items-center text-center lg:items-start lg:text-left"
              : "mx-auto max-w-4xl items-center text-center"
          }`}
        >
          <Icon aria-hidden className="size-14 text-primary lg:size-16" />
          <h1
            className={`font-semibold tracking-tight text-balance ${
              split ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl lg:text-7xl"
            }`}
          >
            {t.title}
          </h1>
          <p className="max-w-xl text-lg/normal font-book text-pretty text-foreground/60">
            {t.description}
          </p>
          <div className="mt-2">
            <StoreBadges
              t={download.stores}
              locale={locale}
              className={split ? "justify-center lg:justify-start" : "justify-center"}
            />
          </div>
          <div
            className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-md text-foreground/60 ${
              split ? "justify-center lg:justify-start" : "justify-center"
            }`}
          >
            <p className="flex items-center gap-1.5">
              <Star aria-hidden className="size-5 text-primary" />
              <span className="text-trim">{rating}</span>
            </p>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-trim">{compatible}</span>
              <ServiceLogos />
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className={split ? "flex justify-center" : "mt-14 lg:mt-20"}>
          {children}
        </FadeUp>
      </div>
    </section>
  );
}
