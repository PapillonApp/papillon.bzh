import Hero from "@/components/asso/hero/hero";
import Persons from "@/components/asso/persons/persons";
import AboutUs from "@/components/asso/us/us";

export default function Home() {
  return (
    <div className="app top">
      <Hero />
      <AboutUs />
      <Persons />
    </div>
  );
}
