import Links from "@/components/links/links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Papillon - Nos liens",
  description: "Retrouve Papillon partout : réseaux sociaux, Discord, documentation et téléchargement de l'application.",
};

export default function Home() {
  return (
    <div className="app">
      <Links />
    </div>
  );
}
