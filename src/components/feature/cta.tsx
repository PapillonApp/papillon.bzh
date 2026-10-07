import Image, { type StaticImageData } from "next/image";
import { StoreBadges } from "@/components/download/store-badges";
import { FadeUp } from "@/components/ui/fade-up";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

type CtaProps = {
  t: { title: string; description: string };
  image: StaticImageData;
  stores: Dictionary["downloadPage"]["stores"];
  locale: Locale;
};

export function Cta({ t, image, stores, locale }: CtaProps) {
  return (
    <section className="px-6 pb-24 lg:pb-32">
      <FadeUp className="theme-primary mx-auto grid max-w-6xl items-center overflow-hidden rounded-4xl bg-background lg:grid-cols-2">
        <div className="flex flex-col items-center gap-5 px-6 pt-14 text-center lg:items-start lg:py-20 lg:pl-16 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
            {t.title}
          </h2>
          <p className="max-w-md text-lg/normal text-pretty text-foreground/85">{t.description}</p>
          <div className="mt-4">
            <StoreBadges t={stores} locale={locale} />
          </div>
        </div>
        <div className="flex h-80 justify-center overflow-hidden pt-12 lg:h-112">
          <Image
            src={image}
            alt=""
            sizes="(min-width: 1024px) 320px, 256px"
            className="h-auto w-64 self-start drop-shadow-2xl lg:w-80"
          />
        </div>
      </FadeUp>
    </section>
  );
}
