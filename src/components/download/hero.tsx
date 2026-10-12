import { Star } from "@getpapillon/papicons";
import Image from "next/image";
import appIcon from "@/assets/app-icon.png";
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
    <section>
      <Image src={appIcon} alt="" preload sizes="64px" className="mb-6 size-16" />
      <h1 className="text-3xl font-semibold tracking-tight text-balance">{t.hero.title}</h1>
      <p className="mt-3 text-lg text-pretty text-foreground/60">{t.hero.description}</p>

      <StoreBadges t={t.stores} locale={locale} className="mt-8" />

      <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground/60">
        <Star aria-hidden className="size-4" />
        <span>{rating}</span>
        <span aria-hidden>·</span>
        <span>{t.hero.label}</span>
      </p>

      <div className="mt-10 flex items-center gap-5 border-y border-foreground/10 py-5 max-lg:hidden">
        <QrCode label={t.hero.qrAlt} className="size-24 shrink-0" />
        <div className="flex flex-col gap-1.5">
          <p className="text-lg/snug font-medium">{t.hero.qrTitle}</p>
          <p className="text-md text-pretty text-foreground/60">{t.hero.qrDescription}</p>
        </div>
      </div>
    </section>
  );
}
