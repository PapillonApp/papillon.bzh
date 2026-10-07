import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/fr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./dictionaries/fr").then((module) => module.default),
  en: () => import("./dictionaries/en").then((module) => module.default),
};

export async function getLocale() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary() {
  return dictionaries[await getLocale()]();
}
