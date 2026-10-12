import type { Metadata } from "next";
import { StoryPage } from "@/components/story/story-page";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return pageMetadata({
    locale,
    path: "/story",
    title: dict.story.metadataTitle,
    description: dict.story.hero.description,
  });
}

export default async function Page() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  return <StoryPage dict={dict} locale={locale} />;
}
