import Image from "next/image";
import ecoledirecte from "@/assets/services/ecoledirecte.svg";
import pronote from "@/assets/services/pronote.svg";
import skolengo from "@/assets/services/skolengo.svg";

const services = [
  { name: "Pronote", logo: pronote },
  { name: "ÉcoleDirecte", logo: ecoledirecte },
  { name: "Skolengo", logo: skolengo },
];

export function ServiceLogos() {
  return (
    <span className="flex items-center">
      {services.map((service) => (
        <Image
          key={service.name}
          src={service.logo}
          alt={service.name}
          title={service.name}
          className="size-6 rounded-full not-first:-ml-2 not-first:stack-cutout"
        />
      ))}
    </span>
  );
}
