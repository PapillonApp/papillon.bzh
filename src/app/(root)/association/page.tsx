import Hero from "@/components/asso/hero/hero";
import Persons from "@/components/asso/persons/persons";
import AboutUs from "@/components/asso/us/us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Papillon - L'association qui change l'école",
  description: "Chercher à faire mieux, toujours, et encore. C'est notre moteur. Papillon, c'est une équipe qui réfléchit constamment à comment faire autrement, pour apporter une expérience qui fait un vent de frais.",
};

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <AboutUs />
      <Persons />
    </div>
  );
}
