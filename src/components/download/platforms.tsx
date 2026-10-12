import { ArrowRight } from "@getpapillon/papicons";
import Image, { type StaticImageData } from "next/image";
import mac from "@/assets/devices/Devices-MacApp.png";
import android from "@/assets/devices/Devices-Pixel10.png";
import ipad from "@/assets/devices/Devices-iPadPro.png";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { storeUrls } from "./store-badges";

type PlatformKey = keyof Dictionary["downloadPage"]["platforms"]["items"];

const platforms: { key: PlatformKey; image: StaticImageData; href: string }[] = [
  { key: "apple", image: ipad, href: storeUrls.appStore },
  { key: "android", image: android, href: storeUrls.googlePlay },
  { key: "mac", image: mac, href: storeUrls.appStore },
];

type PlatformsProps = {
  t: Dictionary["downloadPage"]["platforms"];
};

export function Platforms({ t }: PlatformsProps) {
  return (
    <section className="mt-16 lg:mt-20">
      <h2 className="text-xl font-semibold tracking-tight">{t.title}</h2>
      <p className="mt-2 text-md text-pretty text-foreground/60">{t.description}</p>

      <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
        {platforms.map(({ key, image, href }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 py-5"
            >
              <div className="flex aspect-video w-28 shrink-0 items-center justify-center rounded-xl bg-surface p-2 sm:w-36">
                <Image src={image} alt="" sizes="144px" className="h-full w-auto object-contain" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <h3 className="text-lg/snug font-medium transition-colors duration-150 group-hover:text-primary">
                  {t.items[key].name}
                </h3>
                <p className="text-md text-pretty text-foreground/50 max-sm:hidden">
                  {t.items[key].description}
                </p>
                <span className="text-sm font-medium text-primary">{t.items[key].cta}</span>
              </div>
              <ArrowRight
                aria-hidden
                className="size-5 shrink-0 text-foreground/30 transition duration-150 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
