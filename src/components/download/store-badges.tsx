import Image from "next/image";
import appStoreEn from "@/assets/download/app-store-en.svg";
import appStoreFr from "@/assets/download/app-store-fr.svg";
import googlePlayEn from "@/assets/download/google-play-en.png";
import googlePlayFr from "@/assets/download/google-play-fr.png";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export const storeUrls = {
  appStore: "https://apps.apple.com/app/id6477761165",
  googlePlay: "https://play.google.com/store/apps/details?id=xyz.getpapillon.app",
  testFlight: "https://testflight.apple.com/join/AT2h5fj1",
  github: "https://github.com/PapillonApp/Papillon/releases",
};

const badges = {
  fr: { appStore: appStoreFr, googlePlay: googlePlayFr },
  en: { appStore: appStoreEn, googlePlay: googlePlayEn },
} satisfies Record<Locale, unknown>;

type StoreBadgesProps = {
  t: Dictionary["downloadPage"]["stores"];
  locale: Locale;
  className?: string;
};

export function StoreBadges({
  t,
  locale,
  className = "justify-center lg:justify-start",
}: StoreBadgesProps) {
  const stores = ["appStore", "googlePlay"] as const;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stores.map((store) => (
        <a
          key={store}
          href={storeUrls[store]}
          target="_blank"
          rel="noreferrer"
          className="transition hover:opacity-85 active:scale-97"
        >
          <Image src={badges[locale][store]} alt={t[store]} sizes="180px" className="h-13 w-auto" />
        </a>
      ))}
    </div>
  );
}
