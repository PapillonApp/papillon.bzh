"use client";
import LightRays from "@/components/effects/LightRays/LightRays";
import "./hero.css";
import Image from "next/image";
import Button from "@/atoms/button/button";
import { Code2Icon, DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from 'motion/react';
import {People} from "@/components/global/people/people";

function getOS() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return null;
  // @ts-ignore
  var uA = navigator.userAgent || navigator.vendor || (window as any).opera;
  // @ts-ignore
  if ((/iPad|iPhone|iPod/.test(uA) && !(window as any).MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
  var i, os = ['Android', 'iOS'];
  for (i = 0; i < os.length; i++) if (new RegExp(os[i], 'i').test(uA)) return os[i];
  return null;
}

export default function Hero() {
  const [os, setOS] = useState<string | null>(null);
  useEffect(() => {
    setOS(getOS());
  }, []);

  return (
    <div className="hero navbar-dark-sentinel">
      <div className="light-rays-container">
        <LightRays
          raysOrigin="top-center"
          raysColor="#94296e"
          raysSpeed={1}
          lightSpread={4}
          rayLength={12}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0.01}
          className="custom-rays"
          pulsating={false}
          fadeDistance={3}
          saturation={2}
        />
      </div>

      <div className="hero-title width">
        <motion.div initial={{ opacity: 0, scale: 0.3 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, type: "spring", bounce: 0.5, delay: 0.1 }}>
          <Image
            src="/appicon-glass.png"
            alt="Papillon"
            width={96}
            height={96}
          />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.5 }}>
          Faire équipe<br />
          pour faire mieux.
        </motion.h1>
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 0.7, scale: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.1 }}>
          <People avatarSize={70}/>
        </motion.div>
        <motion.p className="hero-description" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 0.7, scale: 1, y: 0 }} transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.1 }}>
          Papillon, c'est aussi 6 étudiants passionnés qui cherchent toujours a créer l'inattendu pour fournir une expérience au delà des attentes.
        </motion.p>
        <motion.div className="hero-image-container" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.1, 0, 0, 1] }}>
          <Image
            src="/asso-hand.png"
            alt=""
            width={1200}
            height={1200}
            className="hero-image"
          />
        </motion.div>
      </div>
    </div>
  )
}
