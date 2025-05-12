import Button from "@/atoms/button";
import { Apple, ArrowDown } from "lucide-react";
import Image from "next/image";

import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content width">
        <div className="trophies">
          <Image
            width={126}
            height={64}
            src="/trophy_appstore.svg"
            alt="Noté 4 virgule 8 étoiles sur l'App Store"
          />
          <Image
            width={126}
            height={64}
            src="/trophy_downloads.svg"
            alt="Plus de 900 000 installations"
          />
        </div>

        <h1 className="main-title">
          L’application pensée pour <span>l’école d’aujourd’hui</span> & de demain
          </h1>

        <p className="main-description">
          Papillon est une alternative fiable, <span>libre et open-source</span> aux applications de vie scolaire traditionnelles, créée par des élèves et des étudiants tout comme toi. Utilise-le dés aujourd’hui pour tous tes services de vie scolaire, et simplifie ton année !
        </p>

        <div className="buttons-hero">
          <Button
            href="/download"
            value="Télécharger pour iOS"
            color="foreground"
            icon={<Apple />}
          />
          <Button
            href="#connexion"
            value="En savoir plus"
            color="foreground"
            className="button-knowmore"
            icon={<ArrowDown />}
            outlined
          />
        </div>

        <p className="main-terms">
          En utilisant l’application Papillon, vous confirmez avoir lu et accepté les <a href="#">Termes et conditions</a>.<br/>
Ce projet est sous licence publique générale GNU v3.0.
        </p>
      </div>

      <Image
        width={1000}
        height={600}
        src="/background-line.svg"
        alt=" "
        className="hero-background-line"
      />
      
      <div className="hero-phones">
          <Image
            width={430}
            height={520}
            src="/hero-left.png"
            alt=" "
            className="hero-phones-image hero-left"
          />
          <Image
            width={430}
            height={582}
            src="/hero-center.png"
            alt=" "
            className="hero-phones-image hero-center"
          />
          <Image
            width={430}
            height={520}
            src="/hero-right.png"
            alt=" "
            className="hero-phones-image hero-right"
          />
      </div>
    </div>
  );
}
