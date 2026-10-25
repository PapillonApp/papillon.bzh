import type { Metadata } from "next";
import { defaultLocale, type Locale, locales } from "@/i18n/config";

export const siteUrl = "https://papillon.bzh";

const ogLocales: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

export function markdownPath(locale: Locale, path: string) {
  return `/${locale}${path || "/index"}.md`;
}

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
      types: { "text/markdown": markdownPath(canonicalLocale ?? locale, path) },
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

export const organizationId = `${siteUrl}/#organization`;

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
