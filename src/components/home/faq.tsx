import { Info } from "@getpapillon/papicons";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/i18n/server";

export async function Faq() {
  const t = (await getDictionary()).home.faq;

  return (
    <section id="faq" className="scroll-mt-20 px-4 py-24 lg:px-5 lg:py-32">
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
