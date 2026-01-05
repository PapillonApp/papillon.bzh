'use client';
import React, { useRef } from "react";
import './intro.css';
import { motion, useScroll, useTransform } from "motion/react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollProgress = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollProgress.scrollYProgress, [0, 0.1, 0.95, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress.scrollYProgress, [0, 0.2], [0.8, 1]);

  // Merge phase timing - Staggered
  const m1Start = 0.5;
  const m1End = 0.6;
  const m2Start = 0.55;
  const m2End = 0.65;
  const m3Start = 0.6;
  const m3End = 0.7;
  const m4Start = 0.65;
  const m4End = 0.75;
  const m5Start = 0.7;
  const m5End = 0.8;

  // Final text timing
  const textStart = 0.78;
  const textEnd = 0.85;

  // Header fade out
  const headerOpacity = useTransform(scrollProgress.scrollYProgress, [0.3, 0.4], [1, 0]);
  const headerScale = useTransform(scrollProgress.scrollYProgress, [0.3, 0.4], [1, 0.8]);
  const headerTranslateY = useTransform(scrollProgress.scrollYProgress, [0.3, 0.4], [0, -50]);

  // App 1 (Far Left)
  const app1Y = useTransform(scrollProgress.scrollYProgress, [0.05, 0.3, m1Start, m1End], [800, 150, 100, 0]);
  const app1X = useTransform(scrollProgress.scrollYProgress, [m1Start, m1End], [0, 424]);
  const app1Op = useTransform(scrollProgress.scrollYProgress, [0.05, 0.2, m1Start, m1End], [0, 1, 1, 0]);
  const app1Scale = useTransform(scrollProgress.scrollYProgress, [m1Start, m1End], [1, 0.2]);
  const app1Blur = useTransform(scrollProgress.scrollYProgress,
    [0.05, 0.15, 0.2, m1Start, (m1Start + m1End) / 2, m1End],
    ["blur(12px)", "blur(4px)", "blur(0px)", "blur(0px)", "blur(8px)", "blur(12px)"]
  );

  // App 2 (Mid Left)
  const app2Y = useTransform(scrollProgress.scrollYProgress, [0.1, 0.35, m2Start, m2End], [800, 150, 100, 0]);
  const app2X = useTransform(scrollProgress.scrollYProgress, [m2Start, m2End], [0, 212]);
  const app2Op = useTransform(scrollProgress.scrollYProgress, [0.1, 0.25, m2Start, m2End], [0, 1, 1, 0]);
  const app2Scale = useTransform(scrollProgress.scrollYProgress, [m2Start, m2End], [1, 0.2]);
  const app2Blur = useTransform(scrollProgress.scrollYProgress,
    [0.1, 0.2, 0.25, m2Start, (m2Start + m2End) / 2, m2End],
    ["blur(12px)", "blur(4px)", "blur(0px)", "blur(0px)", "blur(8px)", "blur(12px)"]
  );

  // App 3 (Center)
  const app3Y = useTransform(scrollProgress.scrollYProgress, [0.15, 0.4, m3Start, m3End], [800, 150, 100, 0]);
  const app3X = useTransform(scrollProgress.scrollYProgress, [m3Start, m3End], [0, 0]);
  const app3Op = useTransform(scrollProgress.scrollYProgress, [0.15, 0.3, m3Start, m3End], [0, 1, 1, 0]);
  const app3Scale = useTransform(scrollProgress.scrollYProgress, [m3Start, m3End], [1, 0.2]);
  const app3Blur = useTransform(scrollProgress.scrollYProgress,
    [0.15, 0.25, 0.3, m3Start, (m3Start + m3End) / 2, m3End],
    ["blur(12px)", "blur(4px)", "blur(0px)", "blur(0px)", "blur(8px)", "blur(12px)"]
  );

  // App 4 (Mid Right)
  const app4Y = useTransform(scrollProgress.scrollYProgress, [0.2, 0.45, m4Start, m4End], [800, 150, 100, 0]);
  const app4X = useTransform(scrollProgress.scrollYProgress, [m4Start, m4End], [0, -212]);
  const app4Op = useTransform(scrollProgress.scrollYProgress, [0.2, 0.35, m4Start, m4End], [0, 1, 1, 0]);
  const app4Scale = useTransform(scrollProgress.scrollYProgress, [m4Start, m4End], [1, 0.2]);
  const app4Blur = useTransform(scrollProgress.scrollYProgress,
    [0.2, 0.3, 0.35, m4Start, (m4Start + m4End) / 2, m4End],
    ["blur(12px)", "blur(4px)", "blur(0px)", "blur(0px)", "blur(8px)", "blur(12px)"]
  );

  // App 5 (Far Right)
  const app5Y = useTransform(scrollProgress.scrollYProgress, [0.25, 0.5, m5Start, m5End], [800, 150, 100, 0]);
  const app5X = useTransform(scrollProgress.scrollYProgress, [m5Start, m5End], [0, -424]);
  const app5Op = useTransform(scrollProgress.scrollYProgress, [0.25, 0.4, m5Start, m5End], [0, 1, 1, 0]);
  const app5Scale = useTransform(scrollProgress.scrollYProgress, [m5Start, m5End], [1, 0.2]);
  const app5Blur = useTransform(scrollProgress.scrollYProgress,
    [0.25, 0.35, 0.4, m5Start, (m5Start + m5End) / 2, m5End],
    ["blur(12px)", "blur(4px)", "blur(0px)", "blur(0px)", "blur(8px)", "blur(12px)"]
  );



  // Icon Reveal - grows as apps merge
  const iconOpacity = useTransform(scrollProgress.scrollYProgress, [m1Start, m3Start, m5End], [0, 0.5, 1]);
  const iconScale = useTransform(scrollProgress.scrollYProgress, [m1Start, m3Start, m5End], [0.3, 0.6, 1.1]);

  // Text Reveal - delayed
  const textOpacity = useTransform(scrollProgress.scrollYProgress, [textStart, textEnd], [0, 1]);
  const textY = useTransform(scrollProgress.scrollYProgress, [textStart, textEnd], [20, 0]);

  // Main container shift to center the icon after header disappears
  const questionY = useTransform(scrollProgress.scrollYProgress, [0.5, 0.8], [0, -200]);

  return (
    <div className="intro-container" ref={containerRef}>
      <div className="intro-sticky">
        <motion.div
          className="intro-question"
          style={{ opacity, scale, y: questionY }}
        >
          <motion.div
            className="intro-header"
            style={{ opacity: headerOpacity, scale: headerScale, y: headerTranslateY }}
          >
            <h2 className="intro-title-text">L'étudiant moyen est souvent contraint entre plusieurs applications.</h2>
            {/* <p className="intro-subtitle-text">Aujourd'hui, le nombre d'applications requises pour la vie étudiante ne cesse d'augmenter. Il est temps de réellement penser à notre expérience utilisateur.</p> */}
          </motion.div>

          <div className="intro-content-stack">
            <div className="intro-apps">
              <motion.div
                className="intro-app intro-app-1"
                style={{ y: app1Y, x: app1X, opacity: app1Op, scale: app1Scale, filter: app1Blur }}
              >
                <img src="/intro-app-prn.jpg" alt="" />
                <p>Vie et gestion scolaire</p>
              </motion.div>
              <motion.div
                className="intro-app intro-app-2"
                style={{ y: app2Y, x: app2X, opacity: app2Op, scale: app2Scale, filter: app2Blur }}
              >
                <img src="/intro-app-tbs.jpg" alt="" />
                <p>Cantine et paiements</p>
              </motion.div>
              <motion.div
                className="intro-app intro-app-3"
                style={{ y: app3Y, x: app3X, opacity: app3Op, scale: app3Scale, filter: app3Blur }}
              >
                <img src="/intro-app-reminders.jpg" alt="" />
                <p>Organisation et rappels</p>
              </motion.div>
              <motion.div
                className="intro-app intro-app-4"
                style={{ y: app4Y, x: app4X, opacity: app4Op, scale: app4Scale, filter: app4Blur }}
              >
                <img src="/intro-app-tc.jpg" alt="" />
                <p>Emploi du temps</p>
              </motion.div>
              <motion.div
                className="intro-app intro-app-5"
                style={{ y: app5Y, x: app5X, opacity: app5Op, scale: app5Scale, filter: app5Blur }}
              >
                <img src="/intro-app-xls.jpg" alt="" />
                <p>Suivi des résultats</p>
              </motion.div>
            </div>

            <motion.div
              className="intro-answer"
            >
              <motion.img
                style={{ opacity: iconOpacity, scale: iconScale }} src="/app-icon.png" alt="" className="intro-answer-icon" />
              <motion.p
                className="intro-answer-text"
                style={{ opacity: textOpacity, y: textY }}
              >
                Papillon réunit tout ça au même endroit.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}