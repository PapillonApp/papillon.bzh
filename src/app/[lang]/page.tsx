import { Adoption } from "@/components/home/adoption";
import { Devices } from "@/components/home/devices";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Steps } from "@/components/home/steps";
import { Trust } from "@/components/home/trust";
import { getDictionary } from "@/i18n/server";

export default async function HomePage() {
  const dict = await getDictionary();

  return (
    <main>
      <Hero t={dict.home.hero} download={dict.download} />
      <Features />
      <Devices />
      <Steps />
      <div data-dark-section className="theme-dark bg-background">
        <Trust />
        <Adoption />
      </div>
      <Faq />
    </main>
  );
}
