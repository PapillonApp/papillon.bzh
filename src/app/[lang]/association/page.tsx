import type { Metadata } from "next";
import { Commitments } from "@/components/association/commitments";
import { Contact } from "@/components/association/contact";
import { Hero } from "@/components/association/hero";
import { Origin } from "@/components/association/origin";
import { Team } from "@/components/association/team";
import { Today } from "@/components/association/today";
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
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  return (
    <main className="overflow-x-clip">
      <Hero t={dict.association.hero} locale={locale} />
      <Origin
        t={dict.association.origin}
        quote={dict.story.vinceQuote}
        role={dict.association.team.members.vince.role}
        locale={locale}
      />
      <Today t={dict.association.today} stats={dict.home.adoption.stats} />
      <Team t={dict.association.team} />
      <Commitments t={dict.association.commitments} />
      <Contact t={dict.association.next} />
    </main>
  );
}
