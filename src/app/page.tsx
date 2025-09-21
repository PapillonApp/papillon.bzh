import Cards from "@/components/home/cards/cards";
import Features from "@/components/home/features/features";
import Hero from "@/components/home/hero/hero";
import HowTo from "@/components/home/howto/howto";
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
      <Steps />
      <Cards />
      <Features />
      <Why />

      {/*
      <HowTo />
      */}
    </div>
  );
}
