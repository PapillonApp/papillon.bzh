import Cards from "@/components/home/cards/cards";
import FAQ from "@/components/home/faq/faq";
import Features from "@/components/home/features/features";
import Hero from "@/components/home/hero/hero";
import HowTo from "@/components/home/howto/howto";
import Intro from "@/components/home/intro/Intro";
import Steps from "@/components/home/steps/steps";
import Why from "@/components/home/why/why";
import Head from "next/head";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <meta name="apple-itunes-app" content="app-id=6477761165" />
      </Head>

      <Hero />
      {/*
      <Intro />
      */}
      <Steps />
      {/*
      <Cards />
      */}
      <Features />
      <FAQ />
      <Why />

      {/*
      <HowTo />
      */}
    </div>
  );
}
