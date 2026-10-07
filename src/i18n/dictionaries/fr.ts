const fr = {
  metadata: {
    title: "Papillon, la nouvelle vie scolaire",
    description:
      "Un seul endroit pour vos notes, votre cantine, votre calendrier, vos devoirs, et plus encore.",
  },
  nav: {
    label: "Navigation principale",
    home: "Papillon, accueil",
    features: "Fonctionnalités",
    about: "À propos",
    developers: "Développer",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menus: {
      features: {
        grades: { title: "Notes et moyennes", description: "Toutes vos notes, moyennes calculées." },
        schedule: { title: "Emploi du temps", description: "Votre journée, cours après cours." },
        homework: { title: "Devoirs", description: "Ce qu’il reste à faire, et pour quand." },
        news: { title: "Actualités", description: "Les infos de votre établissement." },
      },
      about: {
        team: { title: "Association", description: "L’équipe et la vision derrière Papillon." },
      },
      developers: {
        docs: { title: "Documentation", description: "Guides et référence pour contribuer." },
        github: { title: "GitHub", description: "Le code source, ouvert à tous." },
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
        "Un seul endroit pour vos notes, votre cantine, votre calendrier, vos devoirs, et plus encore, pour une expérience pensée pour rendre la vie étudiante facile, fluide et intégrée dans votre quotidien.",
      imageAlt: "Papillon ouvert sur un téléphone pliable, avec l’emploi du temps de la journée",
      discover: "Découvrir Papillon",
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
          loadingTitle: "Préparation de ton compte",
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
        "Papillon est développé en open source par une communauté d’élèves et d’étudiants. Pas de pub, pas de pistage : l’app existe pour vous, pas pour vos données.",
      github: "Voir le code sur GitHub",
      contributors: "{count} contributeurs sur GitHub",
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
        "Collégiens, lycéens et étudiants l’utilisent au quotidien. Voici ce qu’ils en disent sur les stores.",
      reviewsLabel: "Avis publiés sur l’App Store et Google Play",
      ratingLabel: "étoiles sur 5",
      stats: {
        downloads: { value: "1,8M+", label: "téléchargements" },
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
            "Oui, entièrement. Papillon ne contient aucune publicité et ne collecte aucune donnée personnelle. L’app est développée par des élèves et de jeunes développeurs.",
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
      title: "Faire équipe pour faire mieux.",
      description:
        "Papillon, c’est aussi 6 étudiants passionnés qui cherchent toujours à créer l’inattendu pour fournir une expérience au-delà des attentes.",
      discord: "Rejoindre le Discord",
    },
    values: [
      {
        title: "On ne peut pas plaire à tout le monde, mais on fait tout pour vous plaire.",
        description:
          "On ne veut pas juste une application, mais construire une communauté qui s’engage à créer des outils éducatifs qui dépassent les attentes. Papillon, c’est une équipe de passionnés, qui se dédie à faire toujours plus pour vous.",
      },
      {
        title: "Passionnés par ce qui vous change de la routine.",
        description:
          "Chercher à faire mieux, toujours, et encore. C’est notre moteur. Papillon, c’est une équipe qui réfléchit constamment à comment faire autrement, pour apporter une expérience qui fait un vent de frais.",
      },
      {
        title: "Même sous les pires tempêtes, on restera soudés.",
        description:
          "On est une équipe qui croit en la force du collectif. Papillon, c’est une équipe qui avance ensemble, qui partage les mêmes valeurs, et qui avance même quand la contrainte est forte.",
      },
    ],
    team: {
      title: "Mais c’est qui, Papillon ?",
      description:
        "En plus des centaines de contributeurs que nous remercions chaleureusement, Papillon c’est aussi une équipe de passionnés qui travaillent chaque jour pour faire vivre le projet.",
      members: {
        vince: {
          role: "Président",
          description:
            "Fondateur et président du projet, il touche un peu à tout ce qui parle Papillon.",
        },
        lucas: {
          role: "Vice-président",
          description:
            "Lucas a rejoint Papillon à ses débuts et participe activement à la direction du projet.",
        },
        tom: {
          role: "Designer UI/UX",
          description:
            "Artiste du projet, il s’occupe de l’identité visuelle et de l’interface de Papillon.",
        },
        raphael: {
          role: "Développeur",
          description:
            "Grand génie du mal et du code, c’est lui à qui on refile les tâches ingrates.",
        },
        remy: {
          role: "Développeur",
          description:
            "Visionnaire du code et du design, il met un coup de pinceau aux fonctionnalités.",
        },
        mael: {
          role: "Développeur",
          description: "Il touche à tout… surtout quand il veut « juste voir ce que ça fait ».",
        },
      },
    },
  },
  downloadPage: {
    metadataTitle: "Télécharger Papillon",
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
      metadataTitle: "Notes et moyennes – Papillon",
      metadataDescription:
        "Vos notes dès leur publication, votre moyenne calculée avec les coefficients et son évolution sur l’année. Gratuit, compatible Pronote, ÉcoleDirecte et Skolengo.",
      hero: {
        title: "Votre moyenne, sans attendre le bulletin.",
        description:
          "Papillon récupère vos notes dès leur publication, calcule votre moyenne avec les coefficients et vous montre son évolution, matière par matière.",
        imageAlt: "L’onglet Notes de Papillon, avec la courbe d’évolution et une moyenne de 15,20 sur 20",
      },
      highlights: {
        evolution: {
          title: "Voyez où vous en êtes, d’un coup d’œil.",
          description:
            "Votre moyenne générale s’affiche en grand, avec sa courbe sur toute la période. Glissez le doigt dessus pour retrouver votre moyenne à n’importe quelle date.",
          points: [
            "Courbe d’évolution interactive",
            "Vos dernières notes en tête de liste",
          ],
          imageAlt: "La courbe d’évolution de Papillon, avec une moyenne estimée à 14,83 sur 20 au 4 octobre",
        },
        methods: {
          title: "Une moyenne calculée pour vous, comme vous le voulez.",
          description:
            "Papillon tient compte des coefficients et vous laisse choisir la méthode qui correspond à votre établissement. Quand celui-ci publie sa propre moyenne, c’est elle qui s’affiche.",
          points: [
            "Coefficients pris en compte",
            "Moyenne des matières, moyenne pondérée ou médiane",
            "La moyenne officielle quand l’établissement la publie",
          ],
          imageAlt: "Le choix de la méthode de calcul de la moyenne générale dans Papillon",
        },
        detail: {
          title: "Chaque note, remise dans son contexte.",
          description:
            "Touchez une note pour savoir comment s’en est sortie la classe : moyenne du groupe, meilleure et moins bonne note, et le coefficient du devoir.",
          points: [
            "Moyenne du groupe",
            "Note la plus haute et la plus basse",
            "Coefficient de chaque évaluation",
          ],
          imageAlt: "Détail d’une note de 16 sur 20, avec un coefficient de 1 et une moyenne de groupe de 13,50",
        },
        influence: {
          title: "Sachez ce que chaque note change.",
          description:
            "Un 16 en SVT ? +0,07 point sur votre moyenne générale. Papillon calcule l’impact de chaque note, pour savoir tout de suite où vous gagnez des points et où il faut en reprendre.",
          points: [
            "Gain ou perte en points, note par note",
            "Effet sur votre moyenne et sur celle du groupe",
          ],
          imageAlt: "Une note qui fait gagner 0,07 point sur la moyenne générale",
        },
        periods: {
          title: "Chaque trimestre, à portée de main.",
          description:
            "Passez d’un trimestre ou d’un semestre à l’autre depuis le menu des périodes, pour comparer vos résultats ou revoir le début d’année. Les bacs et brevets blancs ont leur propre période.",
          points: [
            "Trimestres et semestres",
            "Bacs et brevets blancs à part",
            "Les dates de chaque période",
          ],
          imageAlt: "Le menu des périodes de Papillon, avec les trois trimestres et leurs dates",
        },
        subjects: {
          title: "Toutes vos matières, bien rangées.",
          description:
            "Vos notes sont regroupées par matière, chacune avec sa moyenne. Papillon reconnaît plus de 250 matières, même abrégées ou en majuscules, et leur donne un nom lisible, un emoji et une couleur. Triez-les, ou cherchez directement un devoir.",
          points: [
            "Tri par date, par moyenne ou par ordre alphabétique",
            "Recherche parmi toutes vos notes",
            "Nom, emoji et couleur détectés automatiquement",
          ],
          imageAlt: "Les notes de Papillon regroupées par matière : Français, Physique-Chimie et leurs moyennes",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          offline: {
            title: "Hors connexion",
            description: "Vos notes restent consultables sans réseau, dans le bus comme au fond de la salle.",
          },
          home: {
            title: "Dès l’accueil",
            description: "Votre moyenne et sa courbe s’affichent dès que vous ouvrez l’app.",
          },
          scale: {
            title: "Votre échelle",
            description: "Un devoir noté sur 10 ou sur 40 ? Papillon le ramène à l’échelle de votre choix.",
          },
          skills: {
            title: "Compétences",
            description: "Les évaluations par compétences sont aussi prises en charge.",
          },
          personal: {
            title: "À votre image",
            description: "Tout est choisi automatiquement, mais le nom, l’emoji et la couleur de chaque matière se changent en un geste.",
          },
          private: {
            title: "Privé",
            description: "Vos notes restent sur votre appareil. Elles ne passent jamais par nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur les notes",
        description:
          "Tout ce qu’il faut savoir sur vos notes et vos moyennes dans Papillon. Une autre question ? Écrivez-nous à support@papillon.bzh.",
        items: [
          {
            emoji: "🎯",
            question: "La moyenne affichée est-elle celle de mon bulletin ?",
            answer:
              "Quand votre établissement publie une moyenne, Papillon l’affiche telle quelle. Sinon, l’app la calcule à partir de vos notes et de leurs coefficients : c’est une estimation fidèle, qui peut légèrement différer du bulletin (notes bonus ou optionnelles, arrondis).",
          },
          {
            emoji: "⚖️",
            question: "Les coefficients sont-ils pris en compte ?",
            answer:
              "Oui. Chaque note compte selon le coefficient indiqué par votre professeur, et vous le retrouvez dans le détail de la note.",
          },
          {
            emoji: "🧮",
            question: "Quelle méthode de calcul choisir ?",
            answer:
              "La moyenne des matières est recommandée : c’est ainsi que la plupart des établissements calculent la moyenne générale. La moyenne pondérée et la médiane offrent un autre regard sur vos résultats.",
          },
          {
            emoji: "⏱️",
            question: "Quand mes nouvelles notes apparaissent-elles ?",
            answer:
              "Dès qu’elles sont publiées sur Pronote, ÉcoleDirecte ou Skolengo. Papillon les récupère directement auprès de votre établissement quand vous ouvrez l’app.",
          },
          {
            emoji: "📶",
            question: "Puis-je consulter mes notes sans connexion ?",
            answer:
              "Oui. Les notes déjà récupérées restent sur votre appareil et s’affichent même hors ligne.",
          },
          {
            emoji: "🔒",
            question: "Quelqu’un d’autre peut-il voir mes notes ?",
            answer:
              "Non. Vos notes vont directement de votre établissement à votre téléphone. Papillon ne les voit pas, ne les stocke pas et ne les revend pas.",
          },
          {
            emoji: "💸",
            question: "Faut-il payer pour ces fonctionnalités ?",
            answer: "Non. Tout est gratuit, sans publicité ni abonnement.",
          },
        ],
      },
      largeScreen: {
        title: "Encore plus clair sur grand écran.",
        description:
          "Sur iPad et Mac, Papillon profite de toute la largeur de l’écran : la courbe s’étire, vos dernières notes défilent et deux matières s’affichent côte à côte.",
        imageAlt: "L’onglet Notes de Papillon sur un iPad Pro, avec la courbe d’évolution et deux matières côte à côte",
      },
      cta: {
        title: "Votre prochaine note mérite mieux qu’un tableau.",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Vos notes sont là en quelques secondes.",
      },
    },
    schedule: {
      metadataTitle: "Emploi du temps – Papillon",
      metadataDescription:
        "Votre emploi du temps toujours à jour : cours annulés et modifiés signalés, salles, professeurs, Activités en direct et widgets. Gratuit, compatible Pronote, ÉcoleDirecte et Skolengo.",
      hero: {
        title: "Votre journée, cours après cours.",
        description:
          "Papillon affiche votre emploi du temps à jour, signale les cours annulés ou modifiés et vous suit jusque sur l’écran verrouillé.",
        imageAlt: "L’emploi du temps du jeudi 8 octobre dans Papillon, avec une pause déjeuner et un cours annulé",
      },
      highlights: {
        day: {
          title: "Les changements sautent aux yeux.",
          description:
            "Un cours annulé ou modifié ? Il est signalé directement dans votre journée. Salle, professeur, durée : tout est là, avec les pauses entre deux cours.",
          points: [
            "Cours annulés et modifiés signalés",
            "Salle, professeur et durée de chaque cours",
            "Pauses et pause déjeuner affichées",
          ],
          imageAlt: "La journée du jeudi 8 octobre, avec la pause méridienne et un cours de SES annulé",
        },
        views: {
          title: "En liste ou à la semaine, à vous de choisir.",
          description:
            "Gardez la vue Liste pour suivre votre journée, ou passez à la vue Semaine pour voir tous vos cours d’un coup d’œil. Il suffit d’un menu pour changer.",
          points: [
            "Vue Liste, jour par jour",
            "Vue Semaine, en bêta",
            "Vos calendriers iCal au même endroit",
          ],
          imageAlt: "Le menu Affichage de l’emploi du temps, avec les vues Liste et Semaine",
        },
        calendar: {
          title: "Sautez à n’importe quel jour.",
          description:
            "Glissez d’un jour à l’autre, ou ouvrez le calendrier pour aller droit à la date qui vous intéresse : un contrôle dans deux semaines, la rentrée après les vacances.",
          points: [
            "Un glissement pour passer au jour suivant",
            "Le calendrier du mois en un geste",
            "Retour à aujourd’hui d’un seul appui",
          ],
          imageAlt: "Le calendrier du mois ouvert sur le mardi 13 octobre",
        },
        detail: {
          title: "Chaque cours, en détail.",
          description:
            "Touchez un cours pour voir ses horaires, le temps avant qu’il commence, la salle et le professeur. Papillon reconnaît automatiquement plus de 250 matières, même abrégées ou en majuscules, et leur donne un nom lisible, un emoji et une couleur.",
          points: [
            "Début, fin et durée",
            "Salle et professeur",
            "Nom, emoji et couleur détectés automatiquement",
          ],
          imageAlt: "Le détail d’un cours d’Histoire-Géographie d’une heure, en salle C 018 avec Mme Bernard",
        },
        live: {
          title: "Votre cours, sur l’écran verrouillé.",
          description:
            "Sur iPhone, le cours actuel ou le suivant s’affiche en direct sur l’écran verrouillé et dans la Dynamic Island, avec la salle et le temps restant. Plus besoin d’ouvrir l’app entre deux sonneries.",
          points: [
            "Temps restant en direct",
            "Salle et professeur",
            "Dans la Dynamic Island",
          ],
          imageAlt: "L’écran verrouillé d’un iPhone avec le cours d’Histoire-Géographie en cours et le temps restant",
        },
        widget: {
          title: "Vos prochains cours, dès l’écran d’accueil.",
          description:
            "Ajoutez le widget Papillon à l’écran d’accueil de votre iPhone : vos prochains cours s’affichent sans même ouvrir l’app.",
          points: ["Vos prochains cours en un coup d’œil", "Toujours à jour"],
          imageAlt: "L’écran d’accueil d’un iPhone avec le widget Papillon des cours de demain",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          home: {
            title: "Dès l’accueil",
            description: "Vos cours de la journée ou du lendemain s’affichent dès que vous ouvrez l’app.",
          },
          offline: {
            title: "Hors connexion",
            description: "Votre emploi du temps reste consultable sans réseau.",
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
            title: "Privé",
            description: "Votre emploi du temps reste sur votre appareil, jamais sur nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur l’emploi du temps",
        description:
          "Tout ce qu’il faut savoir sur l’emploi du temps dans Papillon. Une autre question ? Écrivez-nous à support@papillon.bzh.",
        items: [
          {
            emoji: "🔄",
            question: "Les changements de dernière minute apparaissent-ils ?",
            answer:
              "Oui. Cours annulés, cours modifiés et changements de salle apparaissent dès que votre établissement les publie sur Pronote, ÉcoleDirecte ou Skolengo.",
          },
          {
            emoji: "🔒",
            question: "Comment activer les Activités en direct ?",
            answer:
              "Sur iPhone, ouvrez les réglages de Papillon et activez les Activités en direct. Le cours actuel ou le suivant s’affiche alors sur l’écran verrouillé et dans la Dynamic Island.",
          },
          {
            emoji: "📱",
            question: "Comment ajouter le widget ?",
            answer:
              "Maintenez le doigt sur l’écran d’accueil de votre iPhone, touchez « + » en haut, puis cherchez Papillon et choisissez le widget.",
          },
          {
            emoji: "🗓️",
            question: "Puis-je voir toute ma semaine ?",
            answer:
              "Oui. Dans l’onglet Cours, touchez « … » en haut à droite et choisissez la vue Semaine. Elle est encore en bêta.",
          },
          {
            emoji: "✨",
            question: "Pourquoi mes matières ont-elles un autre nom ?",
            answer:
              "Papillon reconnaît automatiquement vos matières, même abrégées ou écrites en majuscules par l’établissement, et leur donne un nom lisible, un emoji et une couleur. Vous pouvez tout changer à votre goût.",
          },
          {
            emoji: "📶",
            question: "Puis-je consulter mon emploi du temps hors connexion ?",
            answer: "Oui. L’emploi du temps déjà récupéré reste sur votre appareil et s’affiche même sans réseau.",
          },
          {
            emoji: "💸",
            question: "Faut-il payer pour ces fonctionnalités ?",
            answer: "Non. Tout est gratuit, sans publicité ni abonnement.",
          },
        ],
      },
      largeScreen: {
        title: "Toute la semaine, sur un seul écran.",
        description:
          "Sur iPad et Mac, la vue Semaine affiche vos cours du lundi au vendredi d’un coup d’œil, cours annulés compris. La barre latérale vous emmène d’un onglet à l’autre.",
        imageAlt: "L’emploi du temps de la semaine du 5 octobre dans Papillon sur un iPad Pro",
      },
      cta: {
        title: "Votre prochain cours tient déjà dans votre poche.",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Votre emploi du temps est là en quelques secondes.",
      },
    },
    homework: {
      metadataTitle: "Devoirs – Papillon",
      metadataDescription:
        "Tous vos devoirs semaine par semaine, à cocher une fois terminés, triés par date ou par matière. Gratuit, compatible Pronote, ÉcoleDirecte et Skolengo.",
      hero: {
        title: "Ce qu’il reste à faire, et pour quand.",
        description:
          "Papillon rassemble vos devoirs semaine par semaine, vous laisse les cocher une fois faits et vous montre en un coup d’œil ce qui vous attend.",
        imageAlt: "Les devoirs de la semaine 41 dans Papillon, rangés par jour de rendu",
      },
      highlights: {
        week: {
          title: "Toute la semaine, jour par jour.",
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
          title: "Cochez, c’est fait.",
          description:
            "Marquez un devoir comme terminé d’un geste, depuis la liste ou depuis sa fiche. Vous savez toujours ce qu’il reste à faire avant demain.",
          points: [
            "Terminé en un geste",
            "La consigne complète sur la fiche du devoir",
            "Les pièces jointes du professeur",
          ],
          imageAlt: "La fiche d’un devoir d’Histoire-Géographie, marqué comme terminé",
        },
        sort: {
          title: "Rangez-les comme vous voulez.",
          description:
            "Triez vos devoirs par date de rendu, par matière, ou faites passer ceux qui ne sont pas terminés en premier. Une consigne précise ? La recherche la retrouve.",
          points: [
            "Par date de rendu ou par matière",
            "Les devoirs non terminés en premier",
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
              "Plus de 250 matières reconnues automatiquement, même abrégées, avec un nom lisible, un emoji et une couleur.",
          },
          home: {
            title: "Dès l’accueil",
            description: "Les tâches à faire s’affichent dès que vous ouvrez l’app.",
          },
          attachments: {
            title: "Pièces jointes",
            description: "Les documents joints par vos professeurs sont accessibles depuis le devoir.",
          },
          search: {
            title: "Recherche",
            description: "Retrouvez un devoir en tapant un mot de la consigne ou le nom de la matière.",
          },
          offline: {
            title: "Hors connexion",
            description: "Vos devoirs restent consultables sans réseau.",
          },
          private: {
            title: "Privé",
            description: "Vos devoirs restent sur votre appareil, jamais sur nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur les devoirs",
        description:
          "Tout ce qu’il faut savoir sur les devoirs dans Papillon. Une autre question ? Écrivez-nous à support@papillon.bzh.",
        items: [
          {
            emoji: "📥",
            question: "D’où viennent mes devoirs ?",
            answer:
              "Papillon récupère les devoirs publiés par vos professeurs sur Pronote, ÉcoleDirecte ou Skolengo, directement auprès de votre établissement.",
          },
          {
            emoji: "📆",
            question: "Puis-je voir les devoirs des semaines suivantes ?",
            answer:
              "Oui. Glissez la liste vers la gauche ou la droite pour passer d’une semaine à l’autre.",
          },
          {
            emoji: "📎",
            question: "Les pièces jointes sont-elles disponibles ?",
            answer: "Oui. Ouvrez un devoir pour retrouver sa consigne complète et les documents joints par le professeur.",
          },
          {
            emoji: "✨",
            question: "D’où viennent les emojis à côté des matières ?",
            answer:
              "Papillon reconnaît automatiquement vos matières et leur attribue un nom lisible, un emoji et une couleur. Vous pouvez tout changer à votre goût.",
          },
          {
            emoji: "📶",
            question: "Puis-je consulter mes devoirs hors connexion ?",
            answer: "Oui. Les devoirs déjà récupérés restent sur votre appareil et s’affichent même sans réseau.",
          },
          {
            emoji: "💸",
            question: "Faut-il payer pour ces fonctionnalités ?",
            answer: "Non. Tout est gratuit, sans publicité ni abonnement.",
          },
        ],
      },
      cta: {
        title: "Plus jamais « on avait des devoirs ? ».",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Vos devoirs sont là en quelques secondes.",
      },
    },
    news: {
      metadataTitle: "Actualités – Papillon",
      metadataDescription:
        "Les actualités de votre établissement dans une liste claire, lisible sur téléphone. Gratuit, compatible Pronote, ÉcoleDirecte et Skolengo.",
      hero: {
        title: "Les infos de votre établissement, sans rien manquer.",
        description:
          "Réunions, inscriptions, sorties : Papillon rassemble les actualités de votre établissement dans une liste claire, faite pour être lue sur téléphone.",
        imageAlt: "La liste des actualités de l’établissement dans Papillon",
      },
      highlights: {
        list: {
          title: "Toutes les annonces, au même endroit.",
          description:
            "Chaque actualité affiche son auteur, sa date et un aperçu du message. Les plus récentes en haut, et une recherche pour retrouver une annonce en un instant.",
          points: [
            "Auteur et date de publication",
            "Aperçu du message",
            "Recherche dans toutes les actualités",
          ],
          imageAlt: "Quatre actualités : réunion parents-professeurs, CDI, association sportive et collecte solidaire",
        },
        detail: {
          title: "Une lecture confortable.",
          description:
            "Ouvrez une actualité pour la lire en entier, mise en forme pour votre écran. Sa catégorie s’affiche en tête, pour savoir tout de suite de quoi il s’agit.",
          points: ["Texte mis en forme pour le téléphone", "Catégorie, auteur et date en tête"],
          imageAlt: "L’actualité « Inscription à l’association sportive », publiée par le service de la vie scolaire",
        },
      },
      more: {
        title: "Et aussi",
        items: {
          home: {
            title: "Dès l’accueil",
            description: "La dernière actualité s’affiche sur l’accueil de l’app.",
          },
          offline: {
            title: "Hors connexion",
            description: "Les actualités déjà chargées restent lisibles sans réseau.",
          },
          private: {
            title: "Privé",
            description: "Vos actualités restent sur votre appareil, jamais sur nos serveurs.",
          },
        },
      },
      faq: {
        title: "Vos questions sur les actualités",
        description:
          "Tout ce qu’il faut savoir sur les actualités dans Papillon. Une autre question ? Écrivez-nous à support@papillon.bzh.",
        items: [
          {
            emoji: "📥",
            question: "D’où viennent les actualités ?",
            answer:
              "Ce sont les informations publiées par votre établissement sur Pronote, ÉcoleDirecte ou Skolengo. Papillon les récupère directement, sans intermédiaire.",
          },
          {
            emoji: "📊",
            question: "Puis-je répondre aux sondages ?",
            answer:
              "Pas encore : Pronote ne permet pas de les afficher pour le moment. Papillon vous indique quand une actualité contient un sondage.",
          },
          {
            emoji: "🛠️",
            question: "Une actualité s’affiche mal, que faire ?",
            answer:
              "En bas de chaque actualité, vous pouvez désactiver le formatage automatique pour l’afficher telle qu’elle a été publiée.",
          },
          {
            emoji: "📶",
            question: "Puis-je lire les actualités hors connexion ?",
            answer: "Oui. Les actualités déjà chargées restent sur votre appareil et s’affichent même sans réseau.",
          },
          {
            emoji: "💸",
            question: "Faut-il payer pour ces fonctionnalités ?",
            answer: "Non. Tout est gratuit, sans publicité ni abonnement.",
          },
        ],
      },
      cta: {
        title: "La prochaine annonce, vous la verrez.",
        description:
          "Installez Papillon et connectez-vous avec vos identifiants habituels. Les actualités de votre établissement sont là en quelques secondes.",
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
          github: { title: "GitHub", description: "Le code, ouvert à tous" },
          donate: { title: "Ko-fi", description: "Soutenir le projet" },
        },
      },
    },
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
        "Papillon est porté par une association d’élèves, d’étudiants et de jeunes développeurs. Nous imaginons une vie scolaire centrée sur les élèves, et nous la construisons ensemble, en open source.",
      about: "Qui sommes-nous ?",
      linkedin: "LinkedIn",
      photoAlt: "L’équipe de Papillon",
    },
    association: "Association Papillon",
    copyright: "© 2026 Association Papillon & contributeurs. Tous droits réservés.",
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
};

export type Dictionary = typeof fr;

export default fr;
