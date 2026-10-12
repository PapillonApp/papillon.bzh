import type { Metadata } from "next";
import { StoryPage } from "@/components/story/story-page";
import { getDictionary, getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getDictionary()).story.metadataTitle };
}

export default async function Page() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  return <StoryPage dict={dict} locale={locale} />;
}
