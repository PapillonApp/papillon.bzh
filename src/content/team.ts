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
  linkedin: string;
}[] = [
  { key: "vince", name: "Vince Linise", photo: ecnivtwelve, linkedin: "https://www.linkedin.com/in/vincelinise/" },
  { key: "lucas", name: "Lucas Lavajo", photo: tryon, linkedin: "https://www.linkedin.com/in/lucas-lavajo/" },
  { key: "tom", name: "Tom Hélière", photo: tomhlr, linkedin: "https://www.linkedin.com/in/tom-heliere/" },
  { key: "raphael", name: "Raphaël Schroder", photo: raphckrman, linkedin: "https://www.linkedin.com/in/raphckrman/" },
  { key: "remy", name: "Rémy Godet", photo: remygdt, linkedin: "https://www.linkedin.com/in/godetremy/" },
  { key: "mael", name: "Mael Duret", photo: ryzenixx, linkedin: "https://www.linkedin.com/in/mael-duret/" },
];
