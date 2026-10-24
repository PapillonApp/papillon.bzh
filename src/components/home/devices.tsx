import { Phone } from "@getpapillon/papicons";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/i18n/server";
import { DeviceShowcase } from "./device-showcase";

export async function Devices() {
  const t = (await getDictionary()).home.devices;

  return (
    <section id="devices" className="scroll-mt-20 overflow-x-clip px-6 py-24 lg:py-32">
      <SectionHeading
        icon={Phone}
        iconColor="text-foreground/60"
        title={t.title}
        description={t.description}
      />
      <DeviceShowcase t={t} />
    </section>
  );
}
