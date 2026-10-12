import type { Metadata } from "next";
import { defaultLocale, type Locale, locales } from "@/i18n/config";

export const siteUrl = "https://papillon.bzh";

const ogLocales: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

export function localizedAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}${path}`])),
    "x-default": `/${defaultLocale}${path}`,
  };
}

type PageMetadataOptions = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  openGraph?: Metadata["openGraph"];
  canonicalLocale?: Locale;
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
  openGraph,
  canonicalLocale,
}: PageMetadataOptions): Metadata {
  const url = `/${canonicalLocale ?? locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: canonicalLocale ? undefined : localizedAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: "Papillon",
      locale: ogLocales[locale],
      url,
      title,
      description,
      images: `/${locale}/opengraph-image`,
      ...openGraph,
    },
  };
}
