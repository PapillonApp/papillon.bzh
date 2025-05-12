import Image from "next/image";

import './steps.css';

export default function Steps() {
  return (
    <div id="connexion" className="section steps width">
      <div className="section-heading">
        <h2 className="section-title">Connexion facile & <span>ultra</span>-rapide</h2>
        <p className="section-description">
          L’application repose sur des technologies intelligentes et innovantes pour permettre la connexion avec votre établissement tout en <span>garantissant la sécurité de vos données</span>.
        </p>
      </div>

      <div className="steps-list">
        <div className="step">
          <Image
            src="/steps/step1.svg"
            alt="Step 1"
            width={384}
            height={179}
            className="step-image"
          />
          <h3 className="step-title">
            Sélection du service scolaire
          </h3>
          <p className="step-description">
            Papillon est compatible avec de nombreux services scolaires qu’il est possible de sélectionner lors de l’inscription
          </p>
        </div>

        <div className="step">
          <Image
            src="/steps/step2.svg"
            alt="Step 1"
            width={384}
            height={179}
            className="step-image"
          />
          <h3 className="step-title">
            Connexion avec vos identifiants
          </h3>
          <p className="step-description">
            Utilisez l’ENT pour vous connecter en toute sécurité. Papillon n’a pas accès aux mots de passe et aux informations personnelles.
          </p>
        </div>

        <div className="step">
          <Image
            src="/steps/step3.svg"
            alt="Step 1"
            width={384}
            height={179}
            className="step-image"
          />
          <h3 className="step-title">
            Synchronisation en temps réel
          </h3>
          <p className="step-description">
            L’application peut maintenant récupérer les dernières données pour les afficher ! Elles ne quittent évidemment jamais l’appareil.
          </p>
        </div>
      </div>
    </div>
  );
}
