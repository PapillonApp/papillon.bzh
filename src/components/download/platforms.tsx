import { ArrowRight, Phone } from "@getpapillon/papicons";
import Image, { type StaticImageData } from "next/image";
import mac from "@/assets/devices/Devices-MacApp.png";
import android from "@/assets/devices/Devices-Pixel10.png";
import ipad from "@/assets/devices/Devices-iPadPro.png";
import { FadeUp } from "@/components/ui/fade-up";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { storeUrls } from "./store-badges";

type PlatformKey = keyof Dictionary["downloadPage"]["platforms"]["items"];

const platforms: { key: PlatformKey; image: StaticImageData; imageClassName: string; href: string }[] = [
  { key: "apple", image: ipad, imageClassName: "w-11/12", href: storeUrls.appStore },
  { key: "android", image: android, imageClassName: "w-2/5", href: storeUrls.googlePlay },
  { key: "mac", image: mac, imageClassName: "w-11/12", href: storeUrls.appStore },
];

type PlatformsProps = {
  t: Dictionary["downloadPage"]["platforms"];
};

export function Platforms({ t }: PlatformsProps) {
  return (
    <section className="px-6 py-24 lg:py-32">
      <SectionHeading
        icon={Phone}
        iconColor="text-foreground/50"
        title={t.title}
        description={t.description}
      />
      <ul className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3 lg:mt-16">
        {platforms.map(({ key, image, imageClassName, href }, index) => (
          <li key={key}>
            <FadeUp
              delay={index * 0.08}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-surface"
            >
              <div className="flex h-56 justify-center overflow-hidden pt-8 mask-b-from-70%">
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 768px) 360px, 90vw"
                  className={`h-auto self-start ${imageClassName}`}
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-3 p-6">
                <h3 className="text-xl font-semibold tracking-tight">{t.items[key].name}</h3>
                <p className="text-md/normal text-pretty text-foreground/60">
                  {t.items[key].description}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-1.5 pt-3 text-md font-semibold text-primary transition hover:text-primary-dark"
                >
                  <span className="text-trim">{t.items[key].cta}</span>
                  <ArrowRight aria-hidden className="size-5" />
                </a>
              </div>
            </FadeUp>
          </li>
        ))}
      </ul>
    </section>
  );
}
