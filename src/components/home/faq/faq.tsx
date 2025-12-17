'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileQuestion, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import './faq.css';

interface FAQItemProps {
  emoji: string;
  question: string;
  answer: string;
}

function FAQItem({ emoji, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <div className="faq-emoji">{emoji}</div>
        <span className="faq-question-text">{question}</span>
        <div className="faq-icon">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, translateY: -20 }}
            animate={{ height: 'auto', opacity: 1, translateY: 0 }}
            exit={{ height: 0, opacity: 0, translateY: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-wrapper"
          >
            <p className="faq-answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const questions = [
    {
      "emoji": "📱",
      "question": "Sur quels appareils fonctionne Papillon ?",
      "answer": "Papillon est disponible sur Android (à partir d'Android 7.0) et sur iPhone (à partir d'iOS 17.6)."
    },
    {
      "emoji": "🔐",
      "question": "Papillon collecte-t-il mes données personnelles ?",
      "answer": "Non, Papillon ne collecte ni ne partage tes données, et les informations sensibles restent toujours chiffrées sur ton appareil."
    },
    {
      "emoji": "🔑",
      "question": "Comment se fait la connexion à mon établissement ?",
      "answer": "Tu as juste à te connecter via ton ENT ou service scolaire, comme tu le fais d'habitude. Papillon n’a jamais accès à tes mots de passe ni à tes informations d’authentification."
    },
    {
      "emoji": "🏫",
      "question": "Avec quels services scolaires Papillon est-il compatible ?",
      "answer": "Papillon fonctionne avec des services comme Pronote, EcoleDirecte, Turboself, et bientôt Skolengo, les Crous et d’autres ENT régionaux."
    },
    {
      "emoji": "📊",
      "question": "Papillon permet-il de suivre ma moyenne générale ?",
      "answer": "Oui, l’app calcule une moyenne estimée, affiche l’historique de ta moyenne et montre l’impact de chaque note sur tes résultats."
    },
    {
      "emoji": "⏱️",
      "question": "Papillon récupère-t-il les données en temps réel ?",
      "answer": "Oui, l’application synchronise en temps réel ton emploi du temps, tes notes, tes devoirs et d'autres données depuis ton service scolaire, directement sur ton appareil."
    },
    {
      "emoji": "💸",
      "question": "Papillon est-il gratuit ?",
      "answer": "Oui, Papillon est entièrement gratuit, sans publicité ni collecte de données, et développé par des élèves et étudiants pour être pratique à utiliser."
    },
    {
      "emoji": "🧑‍💻",
      "question": "Puis-je contribuer au développement de Papillon ?",
      "answer": "Oui, la documentation propose une section pour apprendre à compiler et modifier Papillon, ainsi qu’une librairie UI pensée pour les développeurs."
    },
    {
      "emoji": "🐞",
      "question": "Que faire en cas de bug ou de chargement infini ?",
      "answer": "Si l’app charge en boucle ou n’affiche plus les nouvelles notes, il peut s’agir d’un bug connu corrigé par une mise à jour, donc installe la dernière version et contacte le support si besoin."
    }
  ]

  return (
    <div className="section faq">
      <div className="section-heading">
        <h2 className="section-title">Questions fréquentes</h2>
        <p className="section-description">
          Une question à propos de Papillon ? Trouve ici les réponses à tes questions.
        </p>
      </div>

      <div className="faq-list">
        {questions.map((q, index) => (
          <FAQItem key={index} {...q} />
        ))}
      </div>
    </div>
  );
}
