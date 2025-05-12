import Hero from "@/components/hero";
import HowTo from "@/components/howto";
import Steps from "@/components/steps";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <Steps />
      <HowTo />
    </div>
  );
}
