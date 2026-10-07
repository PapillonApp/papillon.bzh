import type { Metadata } from "next";
import { Hero } from "@/components/association/hero";
import { Team } from "@/components/association/team";
import { Values } from "@/components/association/values";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();

  return { title: dict.association.metadataTitle };
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
