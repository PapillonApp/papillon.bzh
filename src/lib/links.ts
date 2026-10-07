import type { Dictionary } from "@/i18n/dictionaries/fr";

type Columns = Dictionary["footer"]["columns"];
export type LinkKey = { [Column in keyof Columns]: keyof Columns[Column]["links"] }[keyof Columns];

export const discordUrl = "https://discord.gg/wVKWBRTbfh";
export const linkedinUrl = "https://www.linkedin.com/company/getpapillonapp";

// TODO: replace "#" once the blog page exists.
export const linkHrefs: Record<LinkKey, string> = {
  grades: "/grades",
  schedule: "/schedule",
  homework: "/homework",
  news: "/news",
  team: "/association",
  blog: "#",
  donate: "https://ko-fi.com/thepapillonapp",
  privacy: "https://docs.papillon.bzh/privacy-policy",
  docs: "https://docs.papillon.bzh",
  github: "https://github.com/PapillonApp",
  x: "https://x.com/thepapillonapp",
  instagram: "https://instagram.com/thepapillonapp",
  tiktok: "https://tiktok.com/@thepapillonapp",
  youtube: "https://youtube.com/@thepapillonapp",
  linkedin: linkedinUrl,
  discord: discordUrl,
};

export function localizeHref(href: string, locale: string) {
  return href.startsWith("/") ? `/${locale}${href}` : href;
}

export const externalProps = { target: "_blank", rel: "noreferrer" } as const;
