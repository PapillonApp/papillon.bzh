import { Star } from "@getpapillon/papicons";
import Image, { type StaticImageData } from "next/image";
import type { ComponentType } from "react";
import ecoledirecte from "@/assets/services/ecoledirecte.svg";
import pronote from "@/assets/services/pronote.svg";
import skolengo from "@/assets/services/skolengo.svg";
import { StoreBadges } from "@/components/download/store-badges";
import { FadeUp } from "@/components/ui/fade-up";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const services = [
  { name: "Pronote", logo: pronote },
  { name: "ÉcoleDirecte", logo: ecoledirecte },
  { name: "Skolengo", logo: skolengo },
];

export type HeroText = {
  title: string;
  description: string;
  imageAlt: string;
};

type HeroProps = {
  t: HeroText;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  image: StaticImageData;
  compatible: string;
  download: Dictionary["downloadPage"];
  stats: Dictionary["home"]["adoption"]["stats"];
  locale: Locale;
};

export function Hero({ t, icon: Icon, image, compatible, download, stats, locale }: HeroProps) {
  const rating = download.hero.rating
    .replace("{rating}", stats.rating.value)
    .replace("{downloads}", stats.downloads.value);

  return (
    <section className="relative isolate overflow-hidden px-6 pt-32 lg:pt-44">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-full bg-radial-[at_top] from-primary/25 via-primary/8 via-30% to-transparent to-60%"
      />

      <FadeUp className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Icon aria-hidden className="size-14 text-primary lg:size-16" />
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
          {t.title}
        </h1>
        <p className="max-w-xl text-lg/normal font-book text-pretty text-foreground/60">
          {t.description}
        </p>
        <div className="mt-2">
          <StoreBadges t={download.stores} locale={locale} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-md text-foreground/60">
          <p className="flex items-center gap-1.5">
            <Star aria-hidden className="size-5 text-primary" />
            <span className="text-trim">{rating}</span>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="text-trim">{compatible}</span>
            {services.map((service) => (
              <Image
                key={service.name}
                src={service.logo}
                alt={service.name}
                title={service.name}
                className="size-6 rounded-md"
              />
            ))}
          </p>
        </div>
      </FadeUp>

      <FadeUp
        delay={0.15}
        className="mx-auto mt-14 h-100 w-fit overflow-hidden px-10 mask-b-from-55% lg:mt-20 lg:h-150"
      >
        <Image
          src={image}
          alt={t.imageAlt}
          sizes="(min-width: 1024px) 384px, 288px"
          priority
          className="h-auto w-72 drop-shadow-2xl lg:w-96"
        />
      </FadeUp>
    </section>
  );
}
