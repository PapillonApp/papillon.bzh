import type { StaticImageData } from "next/image";
import ecnivtwelve from "@/assets/team/ecnivtwelve.jpg";
import raphckrman from "@/assets/team/raphckrman.jpg";
import remygdt from "@/assets/team/remygdt.jpg";
import ryzenixx from "@/assets/team/ryzenixx.jpg";
import tomhlr from "@/assets/team/tomhlr.jpg";
import tryon from "@/assets/team/tryon.jpg";

export type TeamMemberKey = "vince" | "lucas" | "tom" | "raphael" | "remy" | "mael";

export const teamMembers: {
  key: TeamMemberKey;
  name: string;
  photo: StaticImageData;
  city: string;
  coordinates: [longitude: number, latitude: number];
  github: string;
  linkedin: string;
}[] = [
  { key: "vince", name: "Vince Linise", photo: ecnivtwelve, city: "Rennes", coordinates: [-1.68, 48.11], github: "ecnivtwelve", linkedin: "https://www.linkedin.com/in/vincelinise/" },
  { key: "lucas", name: "Lucas Lavajo", photo: tryon, city: "Montpellier", coordinates: [3.88, 43.61], github: "tryon", linkedin: "https://www.linkedin.com/in/lucas-lavajo/" },
  { key: "tom", name: "Tom Hélière", photo: tomhlr, city: "Rennes", coordinates: [-1.68, 48.11], github: "tomhlr", linkedin: "https://www.linkedin.com/in/tom-heliere/" },
  { key: "raphael", name: "Raphaël Schroder", photo: raphckrman, city: "Laon", coordinates: [3.62, 49.56], github: "raphckrman", linkedin: "https://www.linkedin.com/in/raphckrman/" },
  { key: "remy", name: "Rémy Godet", photo: remygdt, city: "Angoulême", coordinates: [0.16, 45.65], github: "remygdt", linkedin: "https://www.linkedin.com/in/godetremy/" },
  { key: "mael", name: "Mael Duret", photo: ryzenixx, city: "Chambéry", coordinates: [5.92, 45.57], github: "ryzenixx", linkedin: "https://www.linkedin.com/in/mael-duret/" },
];
