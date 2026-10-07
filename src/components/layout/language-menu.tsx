"use client";

import { Check, Globe } from "@getpapillon/papicons";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Chevron } from "@/components/ui/chevron";
import { Dropdown } from "@/components/ui/dropdown";
import { HoverGroup } from "@/components/ui/hover-highlight";
import { hasLocale, localeNames, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

type LanguageMenuProps = {
  t: Dictionary["language"];
  triggerClassName: string;
  side?: "top" | "bottom";
  align?: "start" | "end";
};

export function LanguageMenu({ t, triggerClassName, side, align }: LanguageMenuProps) {
  const [, currentLocale, ...rest] = usePathname().split("/");

  return (
    <Dropdown
      side={side}
      align={align}
      triggerClassName={triggerClassName}
      trigger={
        <>
          <Globe aria-hidden className="size-5" />
          <span className="sr-only">{t.label}, </span>
          <span className="text-trim">
            {hasLocale(currentLocale) ? localeNames[currentLocale] : t.label}
          </span>
          <Chevron className="text-current/30" />
        </>
      }
    >
      <HoverGroup highlightClassName="rounded-xl bg-foreground/5">
        <ul>
          {locales.map((locale) => (
            <li key={locale}>
              <Link
                href={["", locale, ...rest].join("/") as Route}
                hrefLang={locale}
                lang={locale}
                aria-current={locale === currentLocale ? "page" : undefined}
                data-hover-item
                className="flex h-9 items-center justify-between gap-3 rounded-xl px-3 text-md"
              >
                <span className="text-trim">{localeNames[locale]}</span>
                {locale === currentLocale && <Check aria-hidden className="size-5 text-primary" />}
              </Link>
            </li>
          ))}
        </ul>
      </HoverGroup>
    </Dropdown>
  );
}
