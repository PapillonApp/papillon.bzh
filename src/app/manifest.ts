import type { MetadataRoute } from "next";
import fr from "@/i18n/dictionaries/fr";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Papillon",
    short_name: "Papillon",
    description: fr.metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#29947a",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
