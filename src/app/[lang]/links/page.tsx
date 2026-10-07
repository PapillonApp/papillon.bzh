import type { Metadata } from "next";
import { LinkList } from "@/components/links/link-list";
import { getDictionary, getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();

  return { title: dict.linksPage.metadataTitle };
}

export default async function LinksPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main>
      <LinkList t={dict.linksPage} download={dict.downloadPage} locale={locale} />
    </main>
  );
}
