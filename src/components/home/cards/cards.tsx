'use client';

import Image from 'next/image';
import './cards.css';

import { motion } from "motion/react"
import { transition } from '@/utils/Transition';

export default function Cards() {
  const cardInitial = {
    opacity: 0,
    filter: "blur(10px)",
    translateY: 60,
    scale: 0.9,
  };

  const cardAnimate = {
    opacity: 1,
    filter: "blur(0px)",
    translateY: 0,
    scale: 1,
  };

  return (
    <div className='section cards'>
      <div className="section-heading">
        <h2 className="section-title">Oui, Papillon fait tout ça.</h2>
        <p className="section-description">
          Complète, et avec style. Papillon regroupe toutes les fonctionnalités nécessaires à la gestion de la vie scolaire, dans une interface pensée pour les élèves et les parents.
        </p>
      </div>

      <div className='cards-list'>
        <motion.div
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0)}
        >
          <Image
            src="/does_edt.jpg"
            width={400}
            height={500}
            alt="Notes icon"
          />
          <h3 className="card-title">Emploi du temps actualisé en temps réel</h3>
          <p className="card-description">
            Consultez votre emploi du temps en un clin d'œil, avec une interface claire et intuitive.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0.1)}
        >
          <Image
            src="/does_profile.jpg"
            width={400}
            height={500}
            alt="Notes icon"
          />
          <h3 className="card-title">Profil et fonctionnalités de l'établissement</h3>
          <p className="card-description">
            Ne vous perdez plus ! Retrouvez le profil de votre établissement, ses actualités, et bien plus encore.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0.2)}
        >
          <Image
            src="/does_custom.jpg"
            width={400}
            height={500}
            alt="Notes icon"
          />
          <h3 className="card-title">Personnalisation avancée du contenu</h3>
          <p className="card-description">
            Adaptez l'application à vos besoins avec des options de personnalisation poussées.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0.3)}
        >
          <Image
            src="/does_tasks.jpg"
            width={400}
            height={500}
            alt="Notes icon"
          />
          <h3 className="card-title">IA personnelle qui comprend vos devoirs</h3>
          <p className="card-description">
            Papillon Magic vous aide à organiser et gérer vos devoirs grâce à une intelligence artificielle.
          </p>
        </motion.div>
      </div>
    </div>
  )
}