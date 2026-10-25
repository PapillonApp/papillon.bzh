import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/ui/json-ld";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { faqJsonLd } from "@/lib/seo";

export function Faq({ t }: { t: Dictionary["home"]["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-24 lg:py-32">
      <JsonLd data={faqJsonLd(t.items)} />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:gap-20">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:col-span-2 lg:self-start">
          <h2 className="text-3xl font-semibold tracking-tight text-balance lg:text-4xl">{t.title}</h2>
          <p className="text-lg/normal text-pretty text-foreground/60">{t.description}</p>
        </div>
        <div className="lg:col-span-3">
          <Accordion items={t.items} />
        </div>
      </div>
    </section>
  );
}
