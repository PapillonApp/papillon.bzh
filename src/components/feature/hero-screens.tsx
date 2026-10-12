import type { StaticImageData } from "next/image";
import { Screen } from "./screen";

type Shot = { image: StaticImageData; alt: string };

export function HeroScreens({ front, back }: { front: Shot; back: Shot }) {
  return (
    <div className="relative w-72 sm:w-80 lg:w-112">
      <Screen image={back.image} alt={back.alt} className="absolute top-12 right-0 w-48 sm:w-56 lg:w-72" />
      <Screen
        image={front.image}
        alt={front.alt}
        priority
        className="absolute top-0 left-0 w-56 sm:w-64 lg:w-80"
      />
    </div>
  );
}
