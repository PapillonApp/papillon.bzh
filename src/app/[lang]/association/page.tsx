import type { Metadata } from "next";
import { Hero } from "@/components/association/hero";
import { Team } from "@/components/association/team";
import { Values } from "@/components/association/values";
import { getDictionary, getLocale } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return pageMetadata({
    locale,
    path: "/association",
    title: dict.association.metadataTitle,
    description: dict.association.hero.description,
  });
}

export default async function AssociationPage() {
  const dict = await getDictionary();

  return (
    <main>
      <Hero t={dict.association.hero} download={dict.download} />
      <Values t={dict.association.values} />
      <Team t={dict.association.team} />
    </main>
  );
}
