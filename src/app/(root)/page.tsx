import FAQ from "@/components/home/faq/faq";
import Features from "@/components/home/features/features";
import Hero from "@/components/home/hero/hero";
import Steps from "@/components/home/steps/steps";
import Secured from "@/components/home/secured/secured";
import Why from "@/components/home/why/why";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <Steps />
      <Secured />
      <Features />
      <FAQ />
      <Why />

      {/*
      <HowTo />
      */}
    </div>
  );
}
