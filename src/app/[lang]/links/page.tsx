import type { Metadata } from "next";
import { LinkList } from "@/components/links/link-list";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return pageMetadata({
    locale,
    path: "/links",
    title: dict.linksPage.metadataTitle,
    description: dict.linksPage.description,
  });
}

export default async function LinksPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main>
      <LinkList t={dict.linksPage} download={dict.downloadPage} locale={locale} />
    </main>
  );
}
