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
  label: string;
  title: string;
  description: string;
  imageAlt: string;
  secondaryImageAlt: string;
};

type HeroProps = {
  t: HeroText;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  images: { front: StaticImageData; back: StaticImageData };
  compatible: string;
  download: Dictionary["downloadPage"];
  stats: Dictionary["home"]["adoption"]["stats"];
  locale: Locale;
};

export function Hero({ t, icon: Icon, images, compatible, download, stats, locale }: HeroProps) {
  const rating = download.hero.rating
    .replace("{rating}", stats.rating.value)
    .replace("{downloads}", stats.downloads.value);

  return (
    <section className="relative isolate overflow-hidden px-4 pt-32 pb-20 lg:px-5 lg:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="absolute -top-118 left-1/2 -z-10 h-238 w-428 -translate-x-1/2 bg-radial from-primary/30 via-primary/6 via-40% to-transparent to-65%"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <FadeUp className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <p className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-md font-semibold text-primary">
            <Icon aria-hidden className="size-5" />
            <span className="text-trim">{t.label}</span>
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance lg:text-6xl">
            {t.title}
          </h1>
          <p className="max-w-xl text-lg/normal text-pretty text-foreground/60">{t.description}</p>
          <div className="mt-4">
            <StoreBadges t={download.stores} locale={locale} />
          </div>
          <p className="flex items-center gap-1.5 text-md text-foreground/60">
            <Star aria-hidden className="size-5 text-primary" />
            <span className="text-trim">{rating}</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-foreground/10 pt-6 lg:justify-start">
            <span className="text-md text-foreground/50">{compatible}</span>
            <ul className="flex flex-wrap items-center gap-4">
              {services.map((service) => (
                <li key={service.name} className="flex items-center gap-2 text-md font-medium">
                  <Image src={service.logo} alt="" className="size-6 rounded-md" />
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="relative flex justify-center">
          <Image
            src={images.back}
            alt={t.secondaryImageAlt}
            sizes="(min-width: 1024px) 256px, 192px"
            className="absolute top-12 left-1/2 h-auto w-48 translate-x-1/7 rotate-6 opacity-90 drop-shadow-xl lg:w-64"
          />
          <Image
            src={images.front}
            alt={t.imageAlt}
            sizes="(min-width: 1024px) 320px, 240px"
            priority
            className="relative h-auto w-60 -translate-x-1/5 -rotate-2 drop-shadow-2xl lg:w-80"
          />
        </FadeUp>
      </div>
    </section>
  );
}
