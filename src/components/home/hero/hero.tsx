"use client";

import Button from "@/atoms/button/button";
import { Apple, ArrowDown, Download } from "lucide-react";
import Image from "next/image";

import { motion, MotionConfig, useTransform } from "motion/react"

import Calendar from "@/icons/Calendar";
import Pie from "@/icons/Pie";
import Check from "@/icons/Check";

import "./hero.css";
import HeroSpan from "@/atoms/herospan/herospan";
import { useScroll, useSpring } from "motion/react";
import { del } from "motion/react-client";
import { transition } from "@/utils/Transition";

function getOS() {
  // @ts-ignore
  var uA = navigator.userAgent || navigator.vendor || window.opera;
  // @ts-ignore
  if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';

  var i, os = ['Android', 'iOS'];
  for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];

  return null;
}

export default function Hero() {
  const { scrollYProgress, scrollY } = useScroll();
  const os = getOS();

  return (
    <>
      <div className="hero">
        <div className="hero-content width">
          <motion.div
            className="trophies"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              translateY: -60,
            }}
            whileInView={{
              opacity: 0.5,
              filter: "blur(0px)",
              translateY: 0,
            }}
            transition={transition(0.1)}
          >
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
          </motion.div>

          <motion.h1
            className="main-title"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              translateY: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              translateY: 0,
              scale: 1,
            }}
            transition={transition(0)}
          >
            L’application ultime pour les{" "}
            <HeroSpan
              text="cours"
              color="#B84C00"
              icon={<Calendar />}
              index={1}
            />
            , tes{" "}
            <HeroSpan
              text="tâches"
              color="#B1399F"
              icon={<Check />}
              index={2}
            />
            {" "}et tes{" "}
            <HeroSpan
              text="résultats"
              color="#006F85"
              icon={<Pie />}
              index={3}
            />
          </motion.h1>

          <motion.p
            className="main-description"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              translateY: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              translateY: 0,
              scale: 1,
            }}
            transition={transition(0.1)}
          >
            Papillon est une alternative fiable, <span>libre et open-source</span> aux applications de vie scolaire traditionnelles, créée par des élèves et des étudiants tout comme toi. Utilise-le dès aujourd’hui pour tous tes services de vie scolaire, et simplifie ton année !
          </motion.p>

          <motion.div
            className="buttons-hero"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              translateY: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              translateY: 0,
              scale: 1,
            }}
            transition={transition(0.2)}
          >
            <Button
              href="/download"
              value={os ? `Télécharger pour ${os}` : "Télécharger l'appli"}
              color="foreground"
              icon={(os === 'iOS' || os === 'Mac' )? <Apple /> : <Download />}
            />
            <Button
              href="#connexion"
              value="En savoir plus"
              color="foreground"
              className="button-knowmore"
              icon={<ArrowDown />}
              outlined
            />
          </motion.div>

          <motion.p
            className="main-terms"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              translateY: 60,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              translateY: 0,
              scale: 1,
            }}
            transition={transition(0.3)}
          >
            En utilisant l’application Papillon, vous confirmez avoir lu et accepté les <a href="https://docs.papillon.bzh/terms">Termes et conditions</a>.<br/>
  Ce projet est sous licence publique générale GNU v3.0.
          </motion.p>
        </div>

        {/*
          <Image
            width={1000}
            height={600}
            src="/background-line.svg"
            alt=" "
            className="hero-background-line"
          />
        */}
        
        <motion.div
          className="hero-phones"
          style={{
            filter: useTransform(scrollY, [10, 1000], ["blur(0px)", "blur(4px)"]),
          }}
        >
          <motion.div
            style={{
              translateY: useTransform(scrollY, [0, 1000], [0, 400] ),
            }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            translateY: 60,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0,
            scale: 1,
          }}
          transition={transition(0.5)}
          >
            <Image
              width={430}
              height={520}
              src="/hero-left.png"
              alt=" "
              className="hero-phones-image hero-left"
            />
          </motion.div>
          <motion.div
            style={{
              translateY: useTransform(scrollY, [0, 1000], [0, 600] ),
              scale: useTransform(scrollY, [0, 1000], [1, 0.9] ),
            }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            translateY: 60,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0,
            scale: 1,
          }}
          transition={transition(0.4)}
          >
            <Image
              width={430}
              height={582}
              src="/hero-center.png"
              alt=" "
              className="hero-phones-image hero-center"
            />
          </motion.div>
          <motion.div
            style={{
              translateY: useTransform(scrollY, [0, 1000], [0, 300] )
            }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            translateY: 60,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0,
            scale: 1,
          }}
          transition={transition(0.5)}
          >
            <Image
              width={430}
              height={520}
              src="/hero-right.png"
              alt=" "
              className="hero-phones-image hero-right"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
