import Button from "@/atoms/button";
import Spacer from "@/atoms/spacer";
import { Undo2 } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <article className="width error-page">
      <Image
        width={300}
        height={200}
        alt=" "
        src="./masc_colere.svg"
      />
      <Spacer height={12} />
      <h1>Page introuvable</h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          color: "#666",
          fontWeight: 500,
        }}
      >La page que vous recherchez n’existe pas ou est inaccessible.</p>
      <Spacer height={16} />
      <Button
        href="/"
        value="Revenir à l’accueil"
        color="foreground"
        icon={<Undo2 />}
      />
      <Spacer height={48} />
    </article>
  );
}