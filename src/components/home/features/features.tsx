'use client';

import { CheckIcon } from 'lucide-react';
import './features.css';
import Image from "next/image";

import { motion } from "motion/react"
import { transition } from '@/utils/Transition';

function Record({ video, width = 400 }: { video: string, width?: number }) {
  return (
    <motion.div
      className='record'
      style={{ width: width }}
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", translateY: 60 }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", translateY: 0 }}
      transition={transition(0.2)}
    >
      <Image
        width={431}
        height={885}
        src="/iphone_frame.png"
        alt=""
        className="feature-frame"
      />
      <video
        className="feature-video"
        width={431}
        height={885}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}

function Feature({ overtitle, title, description, checks, video, inverted }: { overtitle: string, title: string, description: string, checks: string[], video: string, inverted?: boolean }) {
  return (
    <div className={`feature ${inverted ? 'inverted' : ''}`}>
      <Record width={400} video={video} />
      <div className='feature-text'>
        <p className='overtitle'>
          {overtitle}
        </p>
        <h2>
          {title}
        </h2>
        <p className='description'>
          {description}
        </p>
        <div className='checks'>
          {checks.map((check, index) => (
            <div className='check' key={index}>
              <CheckIcon strokeWidth={2.5} className='check-icon' />
              <p>
                {check}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div className='section features'>
      <Feature
        overtitle="Intelligent"
        title="Visualisez votre moyenne générale dans le temps"
        description="Visualisez vos notes et votre progression en temps réel, pour mieux comprendre votre évolution."
        checks={[
          "Calcul automatique de la moyenne estimée",
          "Historique de la moyenne générale",
          "Influence des notes sur les moyennes"
        ]}
        video="/video/opti_grades.webm"
      />
      <Feature
        overtitle="Rapide"
        title="Consultez votre emploi du temps en un clin d'œil"
        description="Accédez rapidement à votre emploi du temps, où que vous soyez, pour ne jamais manquer un cours."
        checks={[
          "Chargement ultra-rapide",
          "Fonctionne hors-ligne",
          "Reste à jour automatiquement"
        ]}
        video="/video/opti_edt.webm"
        inverted={true}
      />
      <Feature
        overtitle="Personnalisé"
        title="Personnalisez vos matières à votre image"
        description="Adaptez les matières selon vos préférences pour une expérience qui vous ressemble."
        checks={[
          "Personnalisation des couleurs",
          "Emoji et nom des matières",
          "S'applique dans toute l’application"
        ]}
        video="/video/opti_custom.webm"
      />
    </div>
  );
}