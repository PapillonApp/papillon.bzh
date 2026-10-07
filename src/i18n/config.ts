export const locales = ["fr", "en"] as const;
export const defaultLocale = "fr";
export const localeCookie = "locale";

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export function hasLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
