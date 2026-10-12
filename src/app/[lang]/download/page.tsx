import type { Metadata } from "next";
import { Beta } from "@/components/download/beta";
import { Hero } from "@/components/download/hero";
import { Platforms } from "@/components/download/platforms";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return pageMetadata({
    locale,
    path: "/download",
    title: dict.downloadPage.metadataTitle,
    description: dict.downloadPage.hero.description,
  });
}

export default async function DownloadPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className="min-h-dvh px-6 pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-2xl">
        <Hero t={dict.downloadPage} stats={dict.home.adoption.stats} locale={locale} />
        <Platforms t={dict.downloadPage.platforms} />
        <Beta t={dict.downloadPage.beta} />
      </div>
    </main>
  );
}
