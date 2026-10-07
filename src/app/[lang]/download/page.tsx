import type { Metadata } from "next";
import { Beta } from "@/components/download/beta";
import { Hero } from "@/components/download/hero";
import { Platforms } from "@/components/download/platforms";
import { getDictionary, getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();

  return { title: dict.downloadPage.metadataTitle };
}

export default async function DownloadPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main>
      <Hero t={dict.downloadPage} stats={dict.home.adoption.stats} locale={locale} />
      <Platforms t={dict.downloadPage.platforms} />
      <Beta t={dict.downloadPage.beta} />
    </main>
  );
}
