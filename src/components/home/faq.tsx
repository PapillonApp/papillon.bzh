import { Info } from "@getpapillon/papicons";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export function Faq({ t }: { t: Dictionary["home"]["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-24 lg:py-32">
      <SectionHeading
        icon={Info}
        iconColor="text-foreground/50"
        title={t.title}
        description={t.description}
      />
      <div className="mx-auto mt-12 max-w-3xl lg:mt-16">
        <Accordion items={t.items} />
      </div>
    </section>
  );
}
