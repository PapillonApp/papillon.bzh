import { Star } from "@getpapillon/papicons";
import Image from "next/image";
import iphone from "@/assets/devices/Devices-iPhone.png";
import { FadeUp } from "@/components/ui/fade-up";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { QrCode } from "./qr-code";
import { StoreBadges } from "./store-badges";

type HeroProps = {
  t: Dictionary["downloadPage"];
  stats: Dictionary["home"]["adoption"]["stats"];
  locale: Locale;
};

export function Hero({ t, stats, locale }: HeroProps) {
  const rating = t.hero.rating
    .replace("{rating}", stats.rating.value)
    .replace("{downloads}", stats.downloads.value);

  return (
    <section data-primary-hero className="theme-primary overflow-hidden bg-background px-4 pt-32 lg:px-5 lg:pt-40 pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <FadeUp className="flex flex-col items-center gap-5 text-center lg:items-start lg:pb-28 lg:text-left">
          <p className="rounded-full bg-foreground/15 px-3 py-1.5 text-md font-medium">
            <span className="text-trim">{t.hero.label}</span>
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="max-w-xl text-lg/normal text-pretty text-foreground/85">
            {t.hero.description}
          </p>
          <div className="mt-4">
            <StoreBadges t={t.stores} locale={locale} />
          </div>
          <p className="flex items-center gap-1.5 text-md text-foreground/85">
            <Star aria-hidden className="size-5" />
            <span className="text-trim">{rating}</span>
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="relative flex justify-center">
          <Image
            src={iphone}
            alt={t.hero.imageAlt}
            sizes="(min-width: 1024px) 320px, 240px"
            priority
            className="h-auto w-60 lg:w-80 drop-shadow-2xl"
          />
          <div className="absolute bottom-32 left-0 flex w-92 items-center gap-6 rounded-3xl bg-white p-6 text-primary-dark shadow-2xl max-lg:hidden xl:-left-8">
            <QrCode label={t.hero.qrAlt} className="size-28 shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="text-md font-semibold">{t.hero.qrTitle}</p>
              <p className="text-sm/snug text-primary-dark/70">{t.hero.qrDescription}</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
