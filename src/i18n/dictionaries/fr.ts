const fr = {
  metadata: {
    title: "Papillon, l’app gratuite de la vie scolaire",
    description:
      "Notes, moyennes, emploi du temps, devoirs et cantine dans une seule app. Gratuite, sans pub, notée 4,7/5 et déjà téléchargée plus de 2 millions de fois.",
  },
  nav: {
    label: "Navigation principale",
    home: "Papillon, accueil",
    features: "Fonctionnalités",
    about: "À propos",
    developers: "Développer",
    blog: "Blog",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    back: "Retour",
    menus: {
      features: {
        grades: {
          title: "Notes et moyennes",
          description: "Toutes vos notes, moyennes calculées.",
        },
        schedule: {
          title: "Emploi du temps",
          description: "Votre journée, cours après cours.",
        },
        homework: {
          title: "Devoirs",
          description: "Ce qu’il reste à faire, et pour quand.",
        },
        news: {
          title: "Actualités",
          description: "Les infos de votre établissement.",
        },
      },
      about: {
        team: { title: "Association", description: "L’équipe et la vision derrière Papillon." },
        story: { title: "Notre histoire", description: "Comment Papillon est né, et ce qui a suivi." },
      },
      developers: {
        docs: { title: "Documentation", description: "Guides et référence pour contribuer." },
        github: { title: "GitHub", description: "Le code source, ouvert à tou·te·s." },
      },
    },
  },
  language: {
    label: "Langue",
  },
  download: {
    label: "Télécharger l’app",
    shortLabel: "Télécharger",
    moreOptions: "Autres options de téléchargement",
    stores: {
      appStore: "App Store",
      googlePlay: "Google Play",
      github: "GitHub",
    },
  },
  home: {
    hero: {
      titleStart: "La nouvelle",
      titleEnd: "vie scolaire",
      description:
        "Un seul endroit pour vos notes, votre cantine, votre calendrier, vos devoirs, et plus encore, pour une expérience pensée pour rendre la vie étudiante facile et intégrée dans votre quotidien.",
      stars: "étoiles",
      discover: "Découvrir Papillon",
      iconLabels: ["Actualités", "Cartes", "Emploi du temps", "Cantine", "Vie scolaire"],
    },
    features: {
      title: "Toute votre scolarité, dans une seule app.",
      description:
        "Papillon rassemble tout ce dont vous avez besoin au quotidien, de vos notes au menu de la cantine. Pensée par des élèves, pour des élèves, l’app reste gratuite, libre et respectueuse de votre vie privée.",
      cards: {
        connected: {
          title: "Connecté",
          description:
            "Pronote, ÉcoleDirecte, Skolengo et votre cantine. Connectez vos comptes, Papillon s’occupe du reste.",
          loadingTitle: "Préparation de votre compte",
          loadingDescription: "Nous sommes en train de te connecter. Cela peut prendre quelques secondes.",
        },
        private: {
          title: "Privé",
          description:
            "Vos données restent sur votre appareil. Libre, open source, sans pub ni pistage.",
          passwordPlaceholder: "Mot de passe",
        },
        instant: {
          title: "Instantané",
          description: "Votre journée en un coup d’œil. Même hors connexion.",
          homework: {
            emoji: "🇬🇧",
            subject: "Anglais LV1",
            due: "demain",
            content: "Compléter tous les exercices de la page 19 ainsi que les annexes en pièce jointe",
            tag: "Présentation orale",
            done: "Terminé",
            markDone: "Marquer comme terminé",
          },
        },
        smart: {
          title: "Malin",
          description:
            "Moyennes calculées pour vous. L’évolution de vos notes, trimestre après trimestre.",
          averageLabel: "Moyenne des matières",
          averageSource: "par l’établissement",
        },
        personal: {
          title: "À votre image",
          description: "Couleurs, emojis, noms de matières. Chaque détail se personnalise.",
          colorsLabel: "Couleur de l’app",
          colors: {
            pink: "Rose",
            orange: "Orange",
            green: "Vert",
            purple: "Violet",
            blue: "Bleu",
            gray: "Gris",
          },
        },
      },
    },
    devices: {
      title: "Fonctionne sur n’importe quel appareil",
      description:
        "Papillon s’adapte à l’écran que vous avez sous la main : votre téléphone en cours, votre tablette pour réviser, votre Mac pour tout organiser.",
      tabsLabel: "Appareils",
      new: "Nouveau",
      previous: "Appareil précédent",
      next: "Appareil suivant",
      highlights: {
        sidebar: {
          title: "Barre latérale",
          description:
            "Passez de l’accueil aux cours, aux tâches ou aux notes depuis une barre latérale, comme dans les apps iPad.",
        },
        macApp: {
          title: "Pensé pour macOS",
          description:
            "Une vraie fenêtre Mac, avec sa barre latérale, qui trouve sa place à côté de vos autres apps.",
        },
        weekView: {
          title: "Vue semaine",
          description:
            "Le grand écran affiche tout votre emploi du temps de la semaine, d’un seul coup d’œil.",
        },
        liquidGlass: {
          title: "Liquid Glass",
          description:
            "Boutons, cartes et menus adoptent le matériau translucide d’iOS, avec ses reflets et sa profondeur.",
        },
        liveActivity: {
          title: "Cours en direct",
          description:
            "Votre cours actuel ou le prochain s’affiche en direct, avec la salle, le professeur et le temps restant.",
        },
        materialYou: {
          title: "Material You",
          description:
            "L’interface reprend les couleurs de votre fond d’écran et suit les composants Material d’Android.",
        },
        sideTabs: {
          title: "Onglets adaptés",
          description:
            "Sur l’iPhone Duo, les onglets passent sur le côté pour laisser toute la place à votre contenu.",
        },
        wideLayout: {
          title: "Interface élargie",
          description:
            "Papillon profite de toute la largeur de l’écran pour des cartes et un emploi du temps plus lisibles.",
        },
      },
      duo: {
        label: "Position de l’iPhone Duo",
        closed: "Fermé",
        open: "Ouvert",
      },
      names: {
        iphone: "iPhone",
        android: "Android",
        ipad: "iPad",
        mac: "Mac",
        iphoneDuo: "iPhone Duo",
      },
      details: {
        iphone:
          "Sur iPhone, Papillon adopte Liquid Glass et les composants natifs d’iOS : menus, transitions et gestes se comportent exactement comme vous l’attendez.",
        android:
          "Sur Android, l’interface suit Material You et reprend les couleurs de votre fond d’écran, pour une app qui vous ressemble.",
        ipad: "Sur iPad, Papillon tire parti de la surface d’écran supplémentaire pour en afficher plus d’un seul coup d’œil.",
        mac: "Papillon vous suit jusque sur votre Mac et s’intègre à macOS, pour garder un œil sur votre journée pendant que vous travaillez.",
        iphoneDuo:
          "Papillon est déjà prêt pour l’iPhone de demain, avec une interface qui s’ajuste naturellement à son écran pliable.",
      },
    },
    demos: {
      items: [
        {
          overtitle: "Intelligent",
          title: "Visualisez votre moyenne générale dans le temps",
          description:
            "Visualisez vos notes et votre progression en temps réel, pour mieux comprendre votre évolution.",
          checks: [
            "Calcul automatique de la moyenne estimée",
            "Historique de la moyenne générale",
            "Influence des notes sur les moyennes",
          ],
        },
        {
          overtitle: "Rapide",
          title: "Consultez votre emploi du temps en un clin d’œil",
          description:
            "Accédez rapidement à votre emploi du temps, où que vous soyez, pour ne jamais manquer un cours.",
          checks: ["Chargement ultra-rapide", "Fonctionne hors-ligne", "Reste à jour automatiquement"],
        },
        {
          overtitle: "Personnalisé",
          title: "Personnalisez vos matières à votre image",
          description:
            "Adaptez les matières selon vos préférences pour une expérience qui vous ressemble.",
          checks: [
            "Personnalisation des couleurs",
            "Emoji et nom des matières",
            "S’applique dans toute l’application",
          ],
        },
      ],
    },
    steps: {
      title: "Comment ça marche",
      description:
        "Connectez-vous avec les identifiants de votre établissement, Papillon s’occupe du reste. Aucun compte à créer, et votre mot de passe ne nous est jamais transmis.",
      items: [
        {
          title: "Choisissez votre établissement",
          description:
            "Recherchez votre collège, lycée ou université par son nom ou sa ville, puis sélectionnez-le dans la liste.",
        },
        {
          title: "Connectez-vous comme d’habitude",
          description:
            "Utilisez la page de connexion de votre établissement ou de votre ENT, avec vos identifiants habituels.",
        },
        {
          title: "Bénéficiez d’un accès sécurisé",
          description: "Papillon échange en direct et de façon chiffrée avec votre établissement.",
        },
        {
          title: "Profitez pleinement de Papillon",
          description:
            "Notes, emploi du temps, devoirs et menus de la cantine : tout est là, prêt à être consulté en un instant.",
        },
      ],
    },
    trust: {
      title: "Construit par vous. Entièrement sécurisé.",
      description:
        "Papillon est développé en open source par une communauté d’élèves et d’étudiant·e·s. Pas de pub, pas de pistage : l’app existe pour vous, pas pour vos données.",
      github: "Voir le code sur GitHub",
      contributors: "{count} contributeur·rice·s sur GitHub",
      pillars: {
        openSource: {
          title: "Libre et open source",
          description:
            "Le code de Papillon est public : chacun peut librement le lire, le vérifier et y contribuer sur GitHub.",
        },
        privacy: {
          title: "Privé par défaut",
          description:
            "Ni publicité, ni pistage, ni revente de données. Vos informations restent sur votre appareil.",
        },
        security: {
          title: "Sécurisé à chaque étape",
          description:
            "Nous ne connaissons pas vos identifiants : ils vont directement à votre établissement, chiffrés.",
        },
      },
    },
    adoption: {
      title: "C’est vous qui le dites.",
      description:
        "Collégien·ne·s, lycéen·ne·s et étudiant·e·s l’utilisent au quotidien. Voici leurs avis sur les stores.",
      reviewsLabel: "Avis publiés sur l’App Store et Google Play",
      ratingLabel: "étoiles sur 5",
      stats: {
        downloads: { value: "2M+", label: "téléchargements" },
        rating: { value: "4,7", label: "note moyenne sur les stores" },
        reviews: { value: "25K+", label: "avis sur les stores" },
        sessions: { value: "100K+", label: "sessions hebdomadaires" },
      },
    },
    faq: {
      title: "Questions fréquentes",
      description:
        "Tout ce qu’il faut savoir avant de télécharger Papillon. Une autre question ? Écrivez-nous à support@papillon.bzh.",
      items: [
        {
          emoji: "💸",
          question: "Papillon est-il gratuit ?",
          answer:
            "Oui, entièrement. Papillon ne contient aucune publicité et ne collecte aucune donnée personnelle. L’app est développée par des élèves et de jeunes développeur·euse·s.",
        },
        {
          emoji: "🔒",
          question: "Mes données sont-elles en sécurité ?",
          answer:
            "Vos identifiants ne sont ni conservés ni transmis à Papillon, et vos informations restent sur votre appareil. Le code étant open source, chacun peut vérifier comment l’app fonctionne.",
        },
        {
          emoji: "🔌",
          question: "Quels services sont compatibles ?",
          answer:
            "Papillon fonctionne avec Pronote, ÉcoleDirecte, Skolengo et Turboself. D’autres services, comme le Crous et les ENT régionaux, arrivent bientôt.",
        },
        {
          emoji: "🏫",
          question: "Mon établissement n’apparaît pas dans la liste, que faire ?",
          answer:
            "Certains établissements choisissent de ne pas figurer dans l’annuaire Pronote, géré par Index Education. Vous pouvez quand même vous connecter en scannant un QR code ou en saisissant l’adresse de votre établissement.",
        },
        {
          emoji: "👨‍👩‍👧",
          question: "Puis-je utiliser Papillon avec un compte parent ou enseignant ?",
          answer:
            "Pas pour le moment : seuls les comptes élèves sont pris en charge. D’autres types de comptes pourraient arriver plus tard.",
        },
        {
          emoji: "🌍",
          question: "Papillon est-il disponible hors de France ?",
          answer:
            "Sur Android, Papillon est disponible partout. Sur iOS, l’app est pour l’instant limitée à la France et à la Suisse, pour des raisons légales et liées à l’App Store.",
        },
        {
          emoji: "🧑‍💻",
          question: "Que veut dire « open source » ?",
          answer:
            "Le code de Papillon est public : chacun peut le lire, vérifier la sécurité de l’app et proposer des améliorations sur GitHub.",
        },
        {
          emoji: "💬",
          question: "Comment contacter l’équipe ?",
          answer:
            "Écrivez-nous à support@papillon.bzh, ou retrouvez-nous sur Discord, X, Instagram, TikTok et LinkedIn.",
        },
      ],
    },
  },
  association: {
    metadataTitle: "Qui sommes-nous ? – Papillon",
    hero: {
      label: "Association Papillon",
      title: "Des élèves qui codent pour d’autres élèves",
      description:
        "Pas d’entreprise derrière Papillon : juste six étudiants, une asso loi 1901 et une app qu’on fait tourner entre deux cours. 2 millions de téléchargements plus tard, elle est toujours gratuite, sans pub et open source.",
      team: "Découvrir l’équipe",
      story: "Notre histoire",
    },
    origin: {
      title: "Au départ, c’était juste pour moi",
      description:
        "En 2021, Vince est encore élève et trouve que son emploi du temps, ses devoirs et ses notes méritent mieux. Alors il code sa propre app, le soir après les cours. Il la montre à quelques potes, qui la montrent à leurs potes. Et ça ne s’est jamais arrêté.",
      imageAlt: "L’emploi du temps de Papillon v1, en 2021",
      link: "Lire toute l’histoire",
    },
    today: {
      title: "Cinq ans après, c’est *toujours gratuit*",
      description:
        "Le projet entre potes s’est retrouvé dans les poches d’élèves de toute la France, du collège à la fac. Et on n’a toujours pas mis une seule pub.",
      facts: {
        founded: { value: "2021", label: "la toute première version" },
        appStore: { value: "N°1", label: "sur l’App Store France, en 2024" },
      },
    },
    team: {
      title: "Six étudiants, cinq villes",
      description:
        "Rennes, Montpellier, Laon, Angoulême, Chambéry : on n’habite pas au même endroit, alors tout se passe en ligne, entre deux cours. Des centaines de contributeur·rice·s nous filent un coup de main. Et dès qu’un événement nous réunit, on saute dans le train.",
      remote: "Chacun chez soi, du canapé à la table de la cuisine.",
      together: "Et réunis dès qu’on en a l’occasion.",
      members: {
        vince: {
          role: "Président et fondateur",
          school: "BUT MMI, 3e année · IUT de Lannion",
          description:
            "Il a codé la toute première version en 2021. Aujourd’hui, il pilote le produit et fait tourner l’asso.",
        },
        lucas: {
          role: "Vice-président",
          school: "BUT MMI, 1re année · IUT de Béziers",
          description:
            "Là depuis le tout début, il codirige l’asso et garde un œil sur tout ce qui avance.",
        },
        tom: {
          role: "Designer UI/UX",
          school: "BUT MMI, 2e année · IUT de Lannion",
          description:
            "Il a refait toute l’app et son identité visuelle pour la v7. Depuis, aucun écran ne sort sans passer par lui.",
        },
        raphael: {
          role: "Développeur",
          school: "1re année · Université de technologie de Troyes",
          description:
            "Les chantiers techniques dont personne ne veut ? C’est pour lui.",
        },
        remy: {
          role: "Développeur",
          school: "École 42 · Angoulême",
          description:
            "Moitié dev, moitié designer, il transforme les maquettes en vraies fonctionnalités.",
        },
        mael: {
          role: "Développeur",
          school: "O’Clock School · Chambéry",
          description:
            "Il teste tout, surtout quand il veut « juste voir ce que ça fait ».",
        },
      },
    },
    commitments: {
      title: "Ce qui ne bougera pas",
      items: {
        free: {
          title: "Gratuit, et ça le restera",
          description:
            "Pas d’abonnement, pas de pub, et on ne revend rien à personne. L’app tient grâce aux dons de la communauté, et on a monté l’asso en 2025 justement pour que ça dure.",
        },
        open: {
          title: "Tout le code est public",
          description:
            "Depuis 2022, n’importe qui peut le lire sur GitHub, vérifier ce que fait l’app ou proposer une idée. Des centaines de personnes l’ont déjà fait.",
        },
        privacy: {
          title: "On ne garde pas vos identifiants",
          description:
            "Ils partent chiffrés, directement vers l’établissement. Et le reste de vos données ne quitte pas votre téléphone.",
        },
      },
    },
    next: {
      title: "Envie de participer ?",
      description:
        "L’objectif ? Que chaque élève, du collège à la fac, ait une app gratuite, rapide et qui respecte sa vie privée. Si ça vous parle, il y a plusieurs façons de nous donner un coup de main.",
      privacy: "Vous travaillez dans un établissement ? Tout ce qu’on fait des données est expliqué dans notre politique de confidentialité.",
      cards: {
        support: {
          title: "Nous soutenir",
          description:
            "Incubateur, mécène, entreprise ? On en parle autour d’un café (ou d’un mail). Et pour un simple coup de pouce, les dons sont ouverts.",
          cta: "Nous écrire",
          subject: "Partenariat",
          secondary: "Faire un don",
        },
        contribute: {
          title: "Contribuer",
          description:
            "Dev, designer ou juste curieux·se ? Le code est sur GitHub, et toute la communauté traîne sur Discord.",
          cta: "Voir le code",
          secondary: "Passer sur Discord",
        },
      },
    },
  },
  downloadPage: {
    metadataTitle: "Télécharger Papillon gratuitement sur iPhone, Android et Mac",
    metadataDescription:
      "Installez Papillon gratuitement sur iPhone, iPad, Mac et Android. Sans pub, sans abonnement, et noté 4,7/5 sur les stores. Toute votre vie scolaire en une app.",
    hero: {
      label: "Gratuit, sans pub, open source",
      title: "Votre vie scolaire, dans votre poche.",
      description:
        "Notes, emploi du temps, devoirs et menus de la cantine : installez Papillon et retrouvez tout en un instant.",
      rating: "{rating} sur 5 · {downloads} téléchargements",
      imageAlt: "Papillon ouvert sur un iPhone",
      qrTitle: "Scannez pour télécharger",
      qrDescription: "Visez ce code avec l’appareil photo de votre téléphone, il vous mène au bon store.",
      qrAlt: "QR code vers la page de téléchargement de Papillon",
    },
    stores: {
      appStore: "Télécharger dans l’App Store",
      googlePlay: "Disponible sur Google Play",
    },
    platforms: {
      title: "Sur tous vos appareils",
      description:
        "Téléphone, tablette ou ordinateur : Papillon s’installe là où vous en avez besoin.",
      items: {
        apple: {
          name: "iPhone et iPad",
          description: "Liquid Glass et cours en direct. Disponible en France et en Suisse.",
          cta: "Voir sur l’App Store",
        },
        android: {
          name: "Android",
          description: "Material You et les couleurs de votre fond d’écran. Disponible partout.",
          cta: "Voir sur Google Play",
        },
        mac: {
          name: "Mac",
          description: "Une vraie fenêtre Mac pour garder un œil sur votre journée en travaillant.",
          cta: "Voir sur le Mac App Store",
        },
      },
    },
    beta: {
      title: "Versions bêta",
      description:
        "Rejoignez nos programmes de test pour accéder aux dernières fonctionnalités en avant-première.",
      testFlight: "Rejoindre TestFlight pour iOS",
      googlePlay: "Rejoindre la bêta Google Play pour Android",
    },
  },
  featurePages: {
    compatible: "Compatible avec",
    grades: {
      metadataTitle: "Vos notes et votre moyenne en temps réel – Papillon",
      metadataDescription:
        "Vos notes dès leur publication, votre moyenne calculée avec les coefficients et son évolution sur l’année. Gratuit, sans pub, sur iPhone et Android.",
      hero: {
        title: "Votre moyenne, sans attendre le bulletin",
        description:
          "Dès qu’un prof publie une note, elle arrive dans Papillon. Votre moyenne est recalculée avec les coefficients, et vous voyez tout de suite si ça monte ou si ça descend.",
        imageAlt: "L’onglet Notes de Papillon, avec la courbe d’évolution et une moyenne de 15,20 sur 20",
      },
      tour: {
        title: "Vos notes, dans tous les sens",
        description:
          "La courbe, la méthode de calcul, les trimestres, les matières : tout est rangé, et vous n’avez plus rien à calculer de tête.",
      },
      highlights: {
        evolution: {
          title: "Où vous en êtes, en un coup d’œil",
          description:
            "Votre moyenne générale s’affiche en grand, avec sa courbe sur toute la période. Faites glisser votre doigt dessus pour voir ce qu’elle valait à n’importe quelle date.",
          points: [
            "Courbe d’évolution interactive",
            "Vos dernières notes en premier",
          ],
          imageAlt: "La courbe d’évolution de Papillon, avec une moyenne estimée à 14,83 sur 20 au 4 octobre",
        },
        methods: {
          title: "La bonne moyenne, avec les bons coeffs",
          description:
            "Papillon tient compte des coefficients et vous laisse choisir la méthode de calcul de votre établissement. Et si votre établissement publie sa propre moyenne, c’est elle qui s’affiche.",
          points: [
            "Coefficients pris en compte",
            "Moyenne des matières, moyenne pondérée ou médiane",
            "La moyenne officielle, quand elle est publiée",
          ],
          imageAlt: "Le choix de la méthode de calcul de la moyenne générale dans Papillon",
        },
        detail: {
          title: "Ce que vaut vraiment votre note",
          description:
            "Touchez une note pour voir comment s’en est sortie la classe : moyenne du groupe, meilleure et moins bonne note, et le coefficient du devoir.",
          points: [
            "Moyenne du groupe",
            "Note la plus haute et la plus basse",
            "Coefficient de chaque évaluation",
          ],
          imageAlt: "Détail d’une note de 16 sur 20, avec un coefficient de 1 et une moyenne de groupe de 13,50",
        },
        influence: {
          title: "Ce que chaque note change",
          description:
            "Un 16 en SVT ? +0,07 point sur votre moyenne générale. Papillon calcule l’effet de chaque note, pour que vous sachiez tout de suite où vous gagnez des points et où il faut vous rattraper.",
          points: [
            "Gain ou perte en points, note par note",
            "L’effet sur votre moyenne et sur celle du groupe",
          ],
          imageAlt: "Une note qui fait gagner 0,07 point sur la moyenne générale",
        },
        periods: {
          title: "Trimestre par trimestre",
          description:
            "Passez d’un trimestre ou d’un semestre à l’autre depuis le menu des périodes, pour comparer vos résultats ou revoir votre début d’année. Les bacs et brevets blancs ont leur propre période.",
          points: [
            "Trimestres et semestres",
            "Bacs et brevets blancs à part",
            "Les dates de chaque période",
          ],
          imageAlt: "Le menu des périodes de Papillon, avec les trois trimestres et leurs dates",
        },
        subjects: {
          title: "Toutes vos matières, bien rangées",
          description:
            "Vos notes sont groupées par matière, chacune avec sa moyenne. Papillon reconnaît plus de 250 matières, même quand votre établissement les écrit en abrégé ou en majuscules, et leur donne un vrai nom, un emoji et une couleur. Triez-les comme vous voulez, ou cherchez directement un devoir.",
          points: [
            "Tri par date, par moyenne ou par ordre alphabétique",
            "Recherche dans toutes vos notes",
            "Nom, emoji et couleur détectés automatiquement",
          ],
          imageAlt: "Les notes de Papillon regroupées par matière : Français, Physique-Chimie et leurs moyennes",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          offline: {
            title: "Même sans réseau",
            description: "Vos notes restent dispo hors connexion, dans le bus comme au fond de la salle.",
          },
          home: {
            title: "Dès l’accueil",
            description: "Votre moyenne et sa courbe vous attendent dès que vous ouvrez l’app.",
          },
          scale: {
            title: "Sur 20, ou pas",
            description: "Un devoir noté sur 10 ou sur 40 ? Papillon le ramène à l’échelle de votre choix.",
          },
          skills: {
            title: "Compétences",
            description: "Les évaluations par compétences sont aussi prises en charge.",
          },
          personal: {
            title: "À votre image",
            description: "Tout est choisi automatiquement, mais vous pouvez changer le nom, l’emoji et la couleur de chaque matière en un geste.",
          },
          private: {
            title: "Rien que pour vous",
            description: "Vos notes restent sur votre appareil. Elles ne passent jamais par nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur les notes",
        description:
          "Tout ce qu’il faut savoir sur vos notes et vos moyennes dans Papillon.",
        items: [
          {
            emoji: "🎯",
            question: "C’est la même moyenne que sur mon bulletin ?",
            answer:
              "Si votre établissement publie une moyenne, Papillon affiche exactement celle-là. Sinon, l’app la calcule à partir de vos notes et de leurs coefficients. Le résultat est fidèle, mais il peut varier un peu par rapport au bulletin (notes bonus ou optionnelles, arrondis).",
          },
          {
            emoji: "⚖️",
            question: "Les coefficients sont pris en compte ?",
            answer:
              "Oui. Chaque note compte selon le coefficient donné par votre prof, et vous le retrouvez dans le détail de la note.",
          },
          {
            emoji: "🧮",
            question: "Quelle méthode de calcul choisir ?",
            answer:
              "On vous conseille la moyenne des matières : c’est comme ça que la plupart des établissements calculent la moyenne générale. La moyenne pondérée et la médiane vous donnent un autre regard sur vos résultats.",
          },
          {
            emoji: "⏱️",
            question: "Mes nouvelles notes arrivent quand ?",
            answer:
              "Dès qu’elles sont publiées sur Pronote, ÉcoleDirecte ou Skolengo. Papillon va les chercher directement auprès de votre établissement quand vous ouvrez l’app.",
          },
          {
            emoji: "📶",
            question: "Je peux voir mes notes sans connexion ?",
            answer:
              "Oui. Les notes déjà récupérées restent sur votre appareil et s’affichent même hors ligne.",
          },
          {
            emoji: "🔒",
            question: "Quelqu’un d’autre peut voir mes notes ?",
            answer:
              "Non. Vos notes vont directement de votre établissement à votre téléphone. Papillon ne les voit pas, ne les stocke pas et ne les revend pas.",
          },
          {
            emoji: "💸",
            question: "C’est payant ?",
            answer: "Non. Tout est gratuit, sans pub et sans abonnement.",
          },
        ],
      },
      largeScreen: {
        title: "Encore mieux sur grand écran",
        description:
          "Sur iPad et Mac, Papillon prend toute la largeur : la courbe s’étire, vos dernières notes défilent et deux matières tiennent côte à côte.",
        imageAlt: "L’onglet Notes de Papillon sur un iPad Pro, avec la courbe d’évolution et deux matières côte à côte",
      },
      cta: {
        title: "Votre prochaine note mérite mieux qu’un tableau",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Vos notes sont là en quelques secondes.",
      },
    },
    schedule: {
      metadataTitle: "Votre emploi du temps toujours à jour – Papillon",
      metadataDescription:
        "Cours annulés et modifiés signalés tout de suite, salles, profs, Activités en direct et widgets. Gratuit, sans pub, sur iPhone et Android.",
      hero: {
        title: "Votre journée, cours après cours",
        description:
          "Papillon affiche votre emploi du temps à jour, vous prévient quand un cours saute ou change, et vous suit jusque sur l’écran verrouillé.",
        imageAlt: "L’emploi du temps du jeudi 8 octobre dans Papillon, avec une pause déjeuner et un cours annulé",
      },
      beyond: {
        title: "Même sans ouvrir l’app",
        description:
          "Sur iPhone, vos cours vous suivent sur l’écran verrouillé et sur l’écran d’accueil.",
      },
      highlights: {
        day: {
          title: "Un cours annulé ? Vous le voyez tout de suite",
          description:
            "Annulé ou modifié, un cours est signalé directement dans votre journée. Salle, prof, durée : tout est là, pauses comprises.",
          points: [
            "Cours annulés et modifiés signalés",
            "Salle, prof et durée de chaque cours",
            "Les pauses et la pause déj",
          ],
          imageAlt: "La journée du jeudi 8 octobre, avec la pause méridienne et un cours de SES annulé",
        },
        views: {
          title: "En liste ou à la semaine",
          description:
            "Gardez la vue Liste pour suivre votre journée, ou passez à la vue Semaine pour voir tous vos cours d’un coup. Un menu suffit pour changer.",
          points: [
            "Vue Liste, jour par jour",
            "Vue Semaine, en bêta",
            "Vos calendriers iCal au même endroit",
          ],
          imageAlt: "Le menu Affichage de l’emploi du temps, avec les vues Liste et Semaine",
        },
        calendar: {
          title: "Sautez à n’importe quel jour",
          description:
            "Glissez d’un jour à l’autre, ou ouvrez le calendrier pour aller droit à la date qui vous intéresse : le contrôle dans deux semaines, la rentrée après les vacances.",
          points: [
            "Un glissement pour passer au jour suivant",
            "Le calendrier du mois en un geste",
            "Retour à aujourd’hui en un appui",
          ],
          imageAlt: "Le calendrier du mois ouvert sur le mardi 13 octobre",
        },
        detail: {
          title: "Chaque cours, en détail",
          description:
            "Touchez un cours pour voir ses horaires, le temps avant qu’il commence, la salle et le prof. Papillon reconnaît plus de 250 matières, même abrégées ou en majuscules, et leur donne un vrai nom, un emoji et une couleur.",
          points: [
            "Début, fin et durée",
            "Salle et prof",
            "Nom, emoji et couleur détectés automatiquement",
          ],
          imageAlt: "Le détail d’un cours d’Histoire-Géographie d’une heure, en salle C 018 avec Mme Bernard",
        },
        live: {
          title: "Votre cours, sur l’écran verrouillé",
          description:
            "Sur iPhone, votre cours actuel ou le suivant s’affiche en direct sur l’écran verrouillé et dans la Dynamic Island, avec la salle et le temps restant. Plus besoin d’ouvrir l’app entre deux sonneries.",
          points: [
            "Temps restant en direct",
            "Salle et prof",
            "Dans la Dynamic Island",
          ],
          imageAlt: "L’écran verrouillé d’un iPhone avec le cours d’Histoire-Géographie en cours et le temps restant",
        },
        widget: {
          title: "Vos prochains cours, dès l’écran d’accueil",
          description:
            "Ajoutez le widget Papillon sur l’écran d’accueil de votre iPhone : vos prochains cours s’affichent sans même ouvrir l’app.",
          points: ["Vos prochains cours en un coup d’œil", "Toujours à jour"],
          imageAlt: "L’écran d’accueil d’un iPhone avec le widget Papillon des cours de demain",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          home: {
            title: "Dès l’accueil",
            description: "Vos cours du jour ou du lendemain vous attendent dès que vous ouvrez l’app.",
          },
          offline: {
            title: "Même sans réseau",
            description: "Votre emploi du temps reste dispo hors connexion.",
          },
          ical: {
            title: "Calendriers iCal",
            description: "Ajoutez vos calendriers iCal pour les retrouver à côté de vos cours.",
          },
          devices: {
            title: "Grand écran",
            description: "Sur iPad et Mac, toute votre semaine tient sur un seul écran.",
          },
          personal: {
            title: "À votre image",
            description: "Changez le nom, l’emoji et la couleur de chaque matière.",
          },
          private: {
            title: "Rien que pour vous",
            description: "Votre emploi du temps reste sur votre appareil, jamais sur nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur l’emploi du temps",
        description:
          "Tout ce qu’il faut savoir sur l’emploi du temps dans Papillon.",
        items: [
          {
            emoji: "🔄",
            question: "Les changements de dernière minute s’affichent ?",
            answer:
              "Oui. Cours annulés, cours modifiés, changements de salle : tout apparaît dès que votre établissement le publie sur Pronote, ÉcoleDirecte ou Skolengo.",
          },
          {
            emoji: "🔒",
            question: "Comment activer les Activités en direct ?",
            answer:
              "Sur iPhone, ouvrez les réglages de Papillon et activez les Activités en direct. Votre cours actuel ou le suivant s’affiche alors sur l’écran verrouillé et dans la Dynamic Island.",
          },
          {
            emoji: "📱",
            question: "Comment ajouter le widget ?",
            answer:
              "Restez appuyé·e sur l’écran d’accueil de votre iPhone, touchez « + » en haut, puis cherchez Papillon et choisissez le widget.",
          },
          {
            emoji: "🗓️",
            question: "Je peux voir toute ma semaine ?",
            answer:
              "Oui. Dans l’onglet Cours, touchez « … » en haut à droite et choisissez la vue Semaine. Elle est encore en bêta.",
          },
          {
            emoji: "✨",
            question: "Pourquoi mes matières ont un autre nom ?",
            answer:
              "Papillon reconnaît vos matières, même quand votre établissement les écrit en abrégé ou en majuscules, et leur donne un vrai nom, un emoji et une couleur. Vous pouvez tout changer comme vous voulez.",
          },
          {
            emoji: "📶",
            question: "Je peux voir mon emploi du temps hors connexion ?",
            answer: "Oui. L’emploi du temps déjà récupéré reste sur votre appareil et s’affiche même sans réseau.",
          },
          {
            emoji: "💸",
            question: "C’est payant ?",
            answer: "Non. Tout est gratuit, sans pub et sans abonnement.",
          },
        ],
      },
      largeScreen: {
        title: "Toute votre semaine, sur un seul écran",
        description:
          "Sur iPad et Mac, la vue Semaine affiche vos cours du lundi au vendredi d’un coup d’œil, cours annulés compris. La barre latérale vous emmène d’un onglet à l’autre.",
        imageAlt: "L’emploi du temps de la semaine du 5 octobre dans Papillon sur un iPad Pro",
      },
      cta: {
        title: "Votre prochain cours tient déjà dans votre poche",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Votre emploi du temps est là en quelques secondes.",
      },
    },
    homework: {
      metadataTitle: "Tous vos devoirs, semaine par semaine – Papillon",
      metadataDescription:
        "Tous vos devoirs semaine par semaine, à cocher une fois finis, triés par date ou par matière. Gratuit, sans pub, sur iPhone et Android.",
      hero: {
        title: "Ce qu’il reste à faire, et pour quand",
        description:
          "Papillon range vos devoirs semaine par semaine, vous laisse les cocher une fois faits et vous montre d’un coup d’œil ce qui vous attend.",
        imageAlt: "Les devoirs de la semaine 41 dans Papillon, rangés par jour de rendu",
      },
      tour: {
        title: "Vos devoirs, sous contrôle",
        description:
          "Voyez ce qui arrive, cochez ce qui est fait et rangez le reste comme vous voulez.",
      },
      highlights: {
        week: {
          title: "Toute la semaine, jour par jour",
          description:
            "Vos devoirs sont rangés par date de rendu, avec la matière et le temps qu’il vous reste. Glissez pour passer à la semaine suivante.",
          points: [
            "Rangés par jour de rendu",
            "« demain », « dans 2 jours » : le délai en clair",
            "Une semaine d’un glissement de doigt",
          ],
          imageAlt: "Les devoirs du lundi 5 au mercredi 7 octobre, dont un déjà terminé",
        },
        done: {
          title: "Coché, c’est fait",
          description:
            "Marquez un devoir comme fini d’un geste, depuis la liste ou depuis sa fiche. Vous savez toujours ce qu’il vous reste avant demain.",
          points: [
            "Fini en un geste",
            "La consigne complète sur la fiche du devoir",
            "Les pièces jointes du prof",
          ],
          imageAlt: "La fiche d’un devoir d’Histoire-Géographie, marqué comme terminé",
        },
        sort: {
          title: "Rangez-les comme vous voulez",
          description:
            "Triez vos devoirs par date de rendu, par matière, ou faites remonter ceux qui ne sont pas finis. Vous cherchez une consigne précise ? La recherche la retrouve.",
          points: [
            "Par date de rendu ou par matière",
            "Les devoirs pas finis en premier",
            "Recherche dans tous vos devoirs",
          ],
          imageAlt: "Le menu de tri des devoirs : date de rendu, matières, non terminé",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          subjects: {
            title: "Matières reconnues",
            description:
              "Plus de 250 matières reconnues automatiquement, même abrégées, avec un vrai nom, un emoji et une couleur.",
          },
          home: {
            title: "Dès l’accueil",
            description: "Ce qu’il vous reste à faire s’affiche dès que vous ouvrez l’app.",
          },
          attachments: {
            title: "Pièces jointes",
            description: "Les documents joints par vos profs sont accessibles depuis le devoir.",
          },
          search: {
            title: "Recherche",
            description: "Retrouvez un devoir en tapant un mot de la consigne ou le nom de la matière.",
          },
          offline: {
            title: "Même sans réseau",
            description: "Vos devoirs restent dispo hors connexion.",
          },
          private: {
            title: "Rien que pour vous",
            description: "Vos devoirs restent sur votre appareil, jamais sur nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur les devoirs",
        description:
          "Tout ce qu’il faut savoir sur les devoirs dans Papillon.",
        items: [
          {
            emoji: "📥",
            question: "D’où viennent mes devoirs ?",
            answer:
              "Papillon récupère les devoirs publiés par vos profs sur Pronote, ÉcoleDirecte ou Skolengo, directement auprès de votre établissement.",
          },
          {
            emoji: "📆",
            question: "Je peux voir les devoirs des semaines suivantes ?",
            answer:
              "Oui. Faites glisser la liste vers la gauche ou la droite pour changer de semaine.",
          },
          {
            emoji: "📎",
            question: "Les pièces jointes sont dispo ?",
            answer: "Oui. Ouvrez un devoir pour retrouver sa consigne complète et les documents joints par votre prof.",
          },
          {
            emoji: "✨",
            question: "D’où viennent les emojis à côté des matières ?",
            answer:
              "Papillon reconnaît vos matières et leur donne un vrai nom, un emoji et une couleur. Vous pouvez tout changer comme vous voulez.",
          },
          {
            emoji: "📶",
            question: "Je peux voir mes devoirs hors connexion ?",
            answer: "Oui. Les devoirs déjà récupérés restent sur votre appareil et s’affichent même sans réseau.",
          },
          {
            emoji: "💸",
            question: "C’est payant ?",
            answer: "Non. Tout est gratuit, sans pub et sans abonnement.",
          },
        ],
      },
      cta: {
        title: "Plus jamais « on avait des devoirs ? »",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Vos devoirs sont là en quelques secondes.",
      },
    },
    news: {
      metadataTitle: "Les actus de votre établissement – Papillon",
      metadataDescription:
        "Les actus de votre établissement dans une liste claire, faite pour le téléphone. Gratuit, sans pub, sur iPhone et Android.",
      hero: {
        title: "Les infos de votre établissement, sans rien rater",
        description:
          "Réunions, inscriptions, sorties : Papillon regroupe les actus de votre établissement dans une liste claire, faite pour être lue sur votre téléphone.",
        imageAlt: "La liste des actualités de l’établissement dans Papillon",
      },
      tour: {
        title: "L’essentiel, sans chercher",
        description:
          "Les annonces de votre établissement, au même endroit et mises en forme pour votre téléphone.",
      },
      highlights: {
        list: {
          title: "Toutes les annonces, au même endroit",
          description:
            "Chaque actu affiche son auteur, sa date et un aperçu du message. Les plus récentes sont en haut, et la recherche retrouve une annonce en deux secondes.",
          points: [
            "Auteur et date de publication",
            "Aperçu du message",
            "Recherche dans toutes les actus",
          ],
          imageAlt: "Quatre actualités : réunion parents-professeurs, CDI, association sportive et collecte solidaire",
        },
        detail: {
          title: "Agréable à lire",
          description:
            "Ouvrez une actu pour la lire en entier, mise en forme pour votre écran. Sa catégorie s’affiche en haut, pour savoir tout de suite de quoi ça parle.",
          points: ["Texte mis en forme pour le téléphone", "Catégorie, auteur et date en haut"],
          imageAlt: "L’actualité « Inscription à l’association sportive », publiée par le service de la vie scolaire",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          home: {
            title: "Dès l’accueil",
            description: "La dernière actu s’affiche sur l’accueil de l’app.",
          },
          offline: {
            title: "Même sans réseau",
            description: "Les actus déjà chargées restent lisibles hors connexion.",
          },
          private: {
            title: "Rien que pour vous",
            description: "Vos actus restent sur votre appareil, jamais sur nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur les actus",
        description:
          "Tout ce qu’il faut savoir sur les actus dans Papillon.",
        items: [
          {
            emoji: "📥",
            question: "D’où viennent les actus ?",
            answer:
              "Ce sont les infos publiées par votre établissement sur Pronote, ÉcoleDirecte ou Skolengo. Papillon les récupère directement, sans intermédiaire.",
          },
          {
            emoji: "📊",
            question: "Je peux répondre aux sondages ?",
            answer:
              "Pas encore : Pronote ne permet pas de les afficher pour l’instant. Papillon vous signale quand une actu contient un sondage.",
          },
          {
            emoji: "🛠️",
            question: "Une actu s’affiche mal, je fais quoi ?",
            answer:
              "En bas de chaque actu, vous pouvez désactiver la mise en forme automatique pour la voir telle qu’elle a été publiée.",
          },
          {
            emoji: "📶",
            question: "Je peux lire les actus hors connexion ?",
            answer: "Oui. Les actus déjà chargées restent sur votre appareil et s’affichent même sans réseau.",
          },
          {
            emoji: "💸",
            question: "C’est payant ?",
            answer: "Non. Tout est gratuit, sans pub et sans abonnement.",
          },
        ],
      },
      cta: {
        title: "La prochaine annonce, vous la verrez",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Les actus de votre établissement sont là en quelques secondes.",
      },
    },
  },
  linksPage: {
    metadataTitle: "Nos liens – Papillon",
    title: "Papillon",
    description: "L’app scolaire qui simplifie la vie des élèves. Retrouvez-nous partout ci-dessous.",
    otherOptions: "Versions bêta et autres options",
    groups: {
      community: {
        title: "Communauté",
        links: {
          discord: { title: "Discord", description: "Le serveur de la communauté" },
          instagram: { title: "Instagram", description: "@thepapillonapp" },
          tiktok: { title: "TikTok", description: "@thepapillonapp" },
          x: { title: "X", description: "@thepapillonapp" },
          youtube: { title: "YouTube", description: "@thepapillonapp" },
          linkedin: { title: "LinkedIn", description: "Papillon" },
        },
      },
      project: {
        title: "Le projet",
        links: {
          docs: { title: "Documentation", description: "Guides et aide" },
          github: { title: "GitHub", description: "Le code, ouvert à tou·te·s" },
          donate: { title: "Ko-fi", description: "Soutenir le projet" },
        },
      },
    },
  },
  blog: {
    metadataTitle: "Blog – Papillon",
    title: "Blog",
    description: "Les nouveautés de l’app, les coulisses du projet et ce qu’on apprend en chemin.",
    all: "Tout",
    categories: {
      articles: "Articles",
      development: "Développement",
      releaseNotes: "Notes de mise à jour",
    },
    copyCode: "Copier le code",
    copied: "Copié",
    back: "Tous les articles",
    empty: "Aucun article pour le moment.",
    translatedByAi: "Traduit par IA",
    summary: "En bref",
    summarizedByAi: "Résumé par IA",
    team: "L’équipe Papillon",
  },
  notFound: {
    metadataTitle: "Page introuvable – Papillon",
    label: "Erreur 404 · Absence non justifiée",
    title: "Cette page sèche les cours.",
    description:
      "On a cherché partout : en permanence, au CDI, même à la cantine. Elle s’est envolée sans laisser de mot d’excuse.",
    home: "Retour à l’accueil",
    hint: "Essayez d’attraper le papillon.",
  },
  footer: {
    team: {
      title: "Une équipe & une vision de l’école",
      description:
        "Papillon est porté par une association d’élèves, d’étudiant·e·s et de jeunes développeur·euse·s. Nous imaginons une vie scolaire centrée sur les élèves, et nous la construisons ensemble, en open source.",
      about: "Qui sommes-nous ?",
      linkedin: "LinkedIn",
      photoAlt: "L’équipe de Papillon",
    },
    madeIn: "Fait avec amour en Bretagne",
    association: "Association Papillon",
    copyright: "© 2026 Association Papillon & contributeur·rice·s. Tous droits réservés.",
    columns: {
      product: {
        title: "Fonctionnalités",
        links: {
          grades: "Notes et moyennes",
          schedule: "Emploi du temps",
          homework: "Devoirs",
          news: "Actualités",
        },
      },
      about: {
        title: "À propos",
        links: {
          team: "Qui sommes-nous",
          story: "Notre histoire",
          blog: "Blog",
          donate: "Soutenir le projet",
          privacy: "Confidentialité",
        },
      },
      developers: {
        title: "Développer",
        links: {
          docs: "Documentation",
          github: "GitHub",
        },
      },
      social: {
        title: "Nous retrouver",
        links: {
          x: "X (ex. Twitter)",
          instagram: "Instagram",
          tiktok: "TikTok",
          youtube: "YouTube",
          linkedin: "LinkedIn",
          discord: "Discord",
        },
      },
    },
  },
  story: {
    metadataTitle: "Notre histoire – Papillon",
    hero: {
      title: "Notre histoire",
      description:
        "En 2021, l’app ne servait qu’à Vince. Huit versions plus tard, plus d’un million d’élèves l’ont sur leur téléphone.",
      iconsAlt: "Les icônes successives de l’app, de 2021 à aujourd’hui",
    },
    timelineLabel: "Les versions de Papillon, de 2021 à aujourd’hui",
    eras: [
      {
        date: "2021",
        title: "La toute première version",
        text: "Vince code sa propre version de Pronote, pour lui et personne d’autre. La v2 ? Une petite mise à jour, rien de fou.",
        alts: ["L’accueil de Pronote+ v1, avec les dernières notes"],
      },
      {
        date: "2022",
        title: "On ouvre le code",
        text: "Le code passe en open source, avec une interface refaite à notre goût. Et là, les premier·e·s utilisateur·rice·s débarquent.",
        alts: ["L’écran de bienvenue de Pronote+ 3.4", "L’emploi du temps de Pronote+ v3"],
      },
      {
        date: "2022",
        title: "Le papillon débarque",
        text: "Première version avec le logo qu’on a encore aujourd’hui. Le reste ? Lent, plein de bugs, clairement pas notre meilleure. Elle n’a pas tenu longtemps.",
        alts: ["L’écran de connexion de Pronote+ v4", "L’emploi du temps de Pronote+ v4"],
      },
      {
        date: "2023",
        title: "Pronote+ devient Papillon",
        text: "Nouveau nom, et on ne se limite plus à Pronote. Grosse version : l’écran d’accueil, les notes en cartes, l’influence de chaque note sur votre moyenne, et de quoi personnaliser l’app.",
        alts: ["La vue d’ensemble de Papillon v5, avec les dernières notes et les devoirs"],
      },
      {
        date: "2023",
        title: "On passe à React Native",
        text: "Première version en React Native, et l’interface commence à ressembler à celle que vous connaissez. Au passage : l’historique de la moyenne et les toutes premières Papicons, nos icônes maison.",
        alts: ["La vue d’ensemble de Papillon v6, avec le prochain cours et la journée du lendemain"],
      },
      {
        date: "2024",
        title: "On refait tout",
        text: "Tom Things redessine l’app de A à Z. On ajoute Papillon Magic (notre IA), les notifications et encore plus de personnalisation. C’est là que tout décolle.",
        alts: ["L’accueil de Papillon v7, avec le cours en cours et la moyenne"],
      },
      {
        date: "2025",
        title: "Notre dernière version",
        text: "Notre version la plus complète : une nouvelle interface signée Tom Things, et une app qui s’intègre vraiment à iOS et Android. Pour les curieux·ses, voici toutes les étapes par lesquelles l’interface est passée.",
        alts: [
          "Papillon v8, première itération de l’accueil",
          "Papillon v8, itération de l’emploi du temps",
          "Papillon v8, troisième itération de l’accueil",
          "Papillon v8, quatrième itération de l’accueil",
          "Papillon v8, cinquième itération de l’accueil",
          "Papillon v8, l’accueil actuel",
        ],
      },
    ],
    milestone: {
      label: "Et puis, ça s’emballe",
      from: { value: "100 000", label: "utilisateur·rice·s fin 2024" },
      to: { value: "1 million", label: "début 2025" },
    },
    today: "Aujourd’hui",
    vinceQuote:
      "J’ai lancé Papillon en 2021 parce que je voulais une interface plus moderne pour mon emploi du temps, mes devoirs et mes notes. Cinq ans plus tard, on est toujours des élèves qui codent pour d’autres élèves, et le code est toujours ouvert. Ça, on n’y touchera pas.",
    vision: {
      title: "Et maintenant ?",
      description:
        "On veut que chaque élève, du collège à la fac, ait une app gratuite, rapide et qui respecte sa vie privée. Le code reste ouvert, et on continue de le construire avec la communauté.",
    },
    cta: {
      description: "Papillon est gratuit et sans pub.",
    },
  },
};

export type Dictionary = typeof fr;

export default fr;
