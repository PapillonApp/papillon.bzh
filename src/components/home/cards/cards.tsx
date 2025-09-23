'use client';

import { useRef, useEffect, useState } from 'react';
import './cards.css';

import { motion, useInView } from "framer-motion"
import { transition } from '@/utils/Transition';

export default function Cards() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const video4Ref = useRef<HTMLVideoElement>(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const isInView1 = useInView(card1Ref, { amount: 0.5 });
  const isInView2 = useInView(card2Ref, { amount: 0.5 });
  const isInView3 = useInView(card3Ref, { amount: 0.5 });
  const isInView4 = useInView(card4Ref, { amount: 0.5 });

  const [readyToPlay, setReadyToPlay] = useState({
    video2: false,
    video3: false,
    video4: false,
  });

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

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    const v3 = video3Ref.current;
    const v4 = video4Ref.current;

    if (v1 && v2 && v3 && v4) {
      const onTimeUpdate1 = () => {
        if (v1.duration && v1.duration - v1.currentTime <= 1) {
          setReadyToPlay((p) => ({ ...p, video2: true }));
        }
      };
      const onTimeUpdate2 = () => {
        if (v2.duration && v2.duration - v2.currentTime <= 1) {
          setReadyToPlay((p) => ({ ...p, video3: true }));
        }
      };
      const onTimeUpdate3 = () => {
        if (v3.duration && v3.duration - v3.currentTime <= 1) {
          setReadyToPlay((p) => ({ ...p, video4: true }));
        }
      };

      v1.addEventListener('timeupdate', onTimeUpdate1);
      v2.addEventListener('timeupdate', onTimeUpdate2);
      v3.addEventListener('timeupdate', onTimeUpdate3);

      return () => {
        v1.removeEventListener('timeupdate', onTimeUpdate1);
        v2.removeEventListener('timeupdate', onTimeUpdate2);
        v3.removeEventListener('timeupdate', onTimeUpdate3);
      };
    }
  }, []);

  useEffect(() => {
    const video = video1Ref.current;
    if (!video) return;
    if (isInView1) {
      [video1Ref, video2Ref, video3Ref, video4Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });
      setReadyToPlay({ video2: false, video3: false, video4: false });
      video.play();
    }
  }, [isInView1]);

  useEffect(() => {
    if (readyToPlay.video2 && isInView2) {
      video2Ref.current?.play();
    }
  }, [readyToPlay.video2, isInView2]);

  useEffect(() => {
    if (readyToPlay.video3 && isInView3) {
      video3Ref.current?.play();
    }
  }, [readyToPlay.video3, isInView3]);

  useEffect(() => {
    if (readyToPlay.video4 && isInView4) {
      video4Ref.current?.play();
    }
  }, [readyToPlay.video4, isInView4]);

  return (
    <div className='section cards'>
      <div className="section-heading">
        <h2 className="section-title">Oui, Papillon fait tout ça.</h2>
        <p className="section-description">
          Complète, et avec style. Papillon regroupe toutes les fonctionnalités nécessaires à la gestion de la vie scolaire, dans une interface pensée pour les élèves et les parents.
        </p>
      </div>

      <div
        className='cards-list'
      >
        <motion.div
          ref={card1Ref}
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0)}
        >
          <video
            ref={video1Ref}
            muted
            playsInline
            className="card-video"
          >
            <source src="/video/edt.mp4" type="video/mp4" />
          </video>
          <h3 className="card-title">Emploi du temps actualisé en temps réel</h3>
          <p className="card-description">
            Consultez votre emploi du temps en un clin d'œil, avec une interface claire et intuitive.
          </p>
        </motion.div>

        <motion.div
          ref={card2Ref}
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0.1)}
        >
          <video
            ref={video2Ref}
            muted
            playsInline
            className="card-video"
          >
            <source src="/video/profil.mp4" type="video/mp4" />
          </video>
          <h3 className="card-title">Profil et fonctionnalités de l'établissement</h3>
          <p className="card-description">
            Ne vous perdez plus ! Retrouvez le profil de votre établissement, ses actualités, les cartes et bien plus encore.
          </p>
        </motion.div>

        <motion.div
          ref={card3Ref}
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0.2)}
        >
          <video
            ref={video3Ref}
            muted
            playsInline
            className="card-video"
          >
            <source src="/video/personnalisation.mp4" type="video/mp4" />
          </video>
          <h3 className="card-title">Personnalisation avancée du contenu</h3>
          <p className="card-description">
            Adaptez l'application à vos besoins avec des options de personnalisation poussées.
          </p>
        </motion.div>

        <motion.div
          ref={card4Ref}
          className="card"
          initial={cardInitial}
          whileInView={cardAnimate}
          transition={transition(0.3)}
        >
          <video
            ref={video4Ref}
            muted
            playsInline
            className="card-video"
          >
            <source src="/video/ai.mp4" type="video/mp4" />
          </video>
          <h3 className="card-title">IA personnelle qui comprend vos devoirs</h3>
          <p className="card-description">
            Papillon Magic vous aide à organiser et gérer vos devoirs grâce à une intelligence artificielle.
          </p>
        </motion.div>
      </div>
    </div>
  )
}