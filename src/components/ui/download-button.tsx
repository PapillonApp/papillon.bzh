"use client";

import { Apple, PapillonApp } from "@getpapillon/papicons";
import { useParams } from "next/navigation";
import { storeUrls } from "@/components/download/store-badges";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { externalProps } from "@/lib/links";
import { GitHubLogo, GooglePlayLogo } from "./brand-logos";
import { Chevron } from "./chevron";
import { Dropdown } from "./dropdown";
import { HoverGroup } from "./hover-highlight";

const stores = [
  { key: "appStore", Logo: Apple },
  { key: "googlePlay", Logo: GooglePlayLogo },
  { key: "github", Logo: GitHubLogo },
] as const;

const variants = {
  header: {
    root: "h-9 bg-white text-primary-dark group-data-light/header:bg-primary group-data-light/header:text-white",
    main: "py-1.5",
    icon: "size-5",
    toggle: "border-current/30 pl-2.5 pr-3 group-data-light/header:border-current/40",
  },
  primary: {
    root: "h-10 bg-primary text-white",
    main: "py-2",
    icon: "size-6",
    toggle: "border-current/40 pl-3 pr-4",
  },
};

type DownloadButtonProps = {
  t: Dictionary["download"];
  variant: keyof typeof variants;
  compactOnMobile?: boolean;
};

export function DownloadButton({ t, variant, compactOnMobile = false }: DownloadButtonProps) {
  const style = variants[variant];
  const { lang } = useParams<{ lang: string }>();

  return (
    <div
      className={`flex shrink-0 items-stretch rounded-full text-md font-semibold transition-[color,background-color,scale] duration-300 active:scale-97 active:duration-150 ${style.root}`}
    >
      <a
        href={`/${lang}/download`}
        className={`flex items-center gap-1.5 rounded-l-full px-3 transition-[background-color] hover:bg-current/10 ${style.main} ${compactOnMobile ? "max-sm:rounded-r-full" : ""}`}
      >
        <PapillonApp aria-hidden className={style.icon} />
        {compactOnMobile ? (
          <>
            <span className="text-trim whitespace-nowrap sm:hidden">{t.shortLabel}</span>
            <span className="text-trim whitespace-nowrap max-sm:hidden">{t.label}</span>
          </>
        ) : (
          <span className="text-trim whitespace-nowrap">{t.label}</span>
        )}
      </a>
      <Dropdown
        className={compactOnMobile ? "max-sm:hidden" : ""}
        triggerClassName={`flex h-full items-center rounded-r-full border-l transition-[background-color] hover:bg-current/10 ${style.toggle}`}
        trigger={
          <>
            <span className="sr-only">{t.moreOptions}</span>
            <Chevron />
          </>
        }
      >
        <HoverGroup highlightClassName="rounded-xl bg-foreground/5">
          <ul>
            {stores.map(({ key, Logo }) => (
              <li key={key}>
                <a
                  href={storeUrls[key]}
                  {...externalProps}
                  data-hover-item
                  className="flex h-9 items-center gap-2.5 rounded-xl px-3 text-md font-medium"
                >
                  <Logo aria-hidden className="size-5" />
                  <span className="text-trim whitespace-nowrap">{t.stores[key]}</span>
                </a>
              </li>
            ))}
          </ul>
        </HoverGroup>
      </Dropdown>
    </div>
  );
}
