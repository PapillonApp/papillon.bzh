import Image from "next/image";
import "./hero.css";
import Button from "@/atoms/button/button";
import { Apple, ArrowDown, Mail } from "lucide-react";

export default function Hero() {

  return (
    <>
      <div className="hero-asso">
        <div className="hero-asso-content">
          <Image
            src="/people.png"
            alt=""
            width={312}
            height={64}
            className="hero-people"
          />

          <h1>
            Ensemble, on déploie nos ailes
          </h1>

          <p className="description">
            Depuis l'été 2025, Papillon est porté par une association loi 1901, qui a pour but de soutenir le projet, de fédérer la communauté et d'assurer la pérennité de l'application.
          </p>

          <div className="buttons-hero">
            <Button
              href="mailto:bureau@papillon.bzh"
              value="Nous contacter"
              color="foreground"
              icon={<Mail />}
            />
            <Button
              href="#about"
              value="En savoir plus"
              color="foreground"
              className="button-knowmore"
              icon={<ArrowDown />}
              outlined
            />
          </div>
        </div>
      </div>
    </>
  );
} 