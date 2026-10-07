import type { Dictionary } from "./fr";

const en: Dictionary = {
  metadata: {
    title: "Papillon, the new school life",
    description: "One place for your grades, your canteen, your calendar, your homework, and more.",
  },
  nav: {
    label: "Main navigation",
    home: "Papillon, home",
    features: "Features",
    about: "About",
    developers: "Developers",
    blog: "Blog",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  language: {
    label: "Language",
  },
  download: {
    label: "Download the app",
    shortLabel: "Download",
    moreOptions: "More download options",
  },
  home: {
    hero: {
      titleStart: "The new",
      titleEnd: "school life",
      description:
        "One place for your grades, your canteen, your calendar, your homework, and more, in an experience designed to make student life easy, smooth, and part of your everyday routine.",
      imageAlt: "Papillon open on a foldable phone, showing today’s schedule",
      discover: "Discover Papillon",
    },
    features: {
      title: "Your whole school life, in one app.",
      description:
        "Papillon brings together everything you need day to day, from your grades to the canteen menu. Built by students, for students, the app stays free, open source, and respectful of your privacy.",
      cards: {
        connected: {
          title: "Connected",
          description:
            "Pronote, ÉcoleDirecte, Skolengo and your canteen. Connect your accounts, Papillon handles the rest.",
        },
        private: {
          title: "Private",
          description: "Your data stays on your device. Free, open source, no ads, no tracking.",
        },
        instant: {
          title: "Instant",
          description: "Your day at a glance. Even offline.",
        },
        smart: {
          title: "Smart",
          description: "Averages calculated for you. Watch your grades evolve, term after term.",
        },
        personal: {
          title: "Yours",
          description: "Colors, emojis, subject names. Every detail is yours to tweak.",
        },
      },
    },
    devices: {
      title: "Works on any device",
      description:
        "Papillon adapts to whatever screen you have at hand: your phone in class, your tablet for revision, your Mac to keep everything organized.",
      tabsLabel: "Devices",
      new: "New",
      previous: "Previous device",
      next: "Next device",
      placeholder: "Mockup coming soon",
      duo: {
        label: "iPhone Duo position",
        closed: "Closed",
        open: "Open",
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
          "On iPhone, Papillon embraces Liquid Glass and native iOS components: menus, transitions, and gestures behave exactly as you expect.",
        android:
          "On Android, the interface follows Material You and picks up the colors of your wallpaper, for an app that feels like yours.",
        ipad: "On iPad, Papillon makes the most of the extra screen space to show more at a glance.",
        mac: "Papillon follows you all the way to your Mac and fits right into macOS, so you can keep an eye on your day while you work.",
        iphoneDuo:
          "Papillon is ready for tomorrow’s iPhone, with an interface that adapts naturally to its foldable screen.",
      },
    },
    steps: {
      title: "How it works",
      description:
        "Sign in with your school’s credentials and Papillon handles the rest. No account to create, and your password is never sent to us.",
      items: [
        {
          title: "Pick your school in seconds",
          description:
            "Search for your middle school, high school, or university by name or city, then pick it from the list.",
        },
        {
          title: "Sign in like you always do",
          description:
            "Use the login page of your school or digital workspace, with the credentials you already know.",
        },
        {
          title: "Rely on a secure connection",
          description:
            "Papillon talks directly to your school over an encrypted connection. Your data stays with you.",
        },
        {
          title: "Make the most of Papillon",
          description:
            "Grades, schedule, homework, and canteen menus: everything is right there, ready whenever you are.",
        },
      ],
    },
    trust: {
      title: "Built by you. Fully secure.",
      description:
        "Papillon is developed in the open by a community of students. No ads, no tracking: the app exists for you, not for your data.",
      github: "View the code on GitHub",
      pillars: {
        openSource: {
          title: "Free and open source",
          description:
            "Papillon’s code is public: anyone can freely read it, check it, and contribute to it on GitHub.",
        },
        privacy: {
          title: "Private by default",
          description:
            "No ads, no tracking, no data resale. Your information stays right here, on your device.",
        },
        security: {
          title: "Secure at every step",
          description:
            "We never know your credentials: they go straight to your school over an encrypted link.",
        },
      },
    },
    adoption: {
      title: "Don’t just take our word for it.",
      description:
        "Middle schoolers, high schoolers, and students use it every day. Here’s what they say on the stores.",
      reviewsLabel: "Reviews posted on the App Store and Google Play",
      ratingLabel: "out of 5 stars",
      stats: {
        downloads: { value: "1.8M+", label: "downloads" },
        rating: { value: "4.7", label: "average rating on the stores" },
        reviews: { value: "25K+", label: "reviews on the stores" },
        sessions: { value: "100K+", label: "weekly sessions" },
      },
    },
    faq: {
      title: "Frequently asked questions",
      description:
        "Everything you need to know before downloading Papillon. Another question? Write to us at support@papillon.bzh.",
      items: [
        {
          question: "Is Papillon free?",
          answer:
            "Yes, completely. Papillon has no ads and collects no personal data. The app is developed by students and young developers.",
        },
        {
          question: "Is my data safe?",
          answer:
            "Your credentials are never stored or sent to Papillon, and your information stays on your device. Since the code is open source, anyone can check how the app works.",
        },
        {
          question: "Which services are supported?",
          answer:
            "Papillon works with Pronote, ÉcoleDirecte, Skolengo, and Turboself. More services, like the Crous and regional digital workspaces, are coming soon.",
        },
        {
          question: "My school isn’t in the list. What can I do?",
          answer:
            "Some schools choose not to appear in the Pronote directory, which is managed by Index Education. You can still sign in by scanning a QR code or entering your school’s address.",
        },
        {
          question: "Can I use Papillon with a parent or teacher account?",
          answer:
            "Not yet: only student accounts are supported for now. Other account types may come later.",
        },
        {
          question: "Is Papillon available outside France?",
          answer:
            "On Android, Papillon is available everywhere. On iOS, the app is currently limited to France and Switzerland, for legal and App Store reasons.",
        },
        {
          question: "What does “open source” mean?",
          answer:
            "Papillon’s code is public: anyone can read it, check the app’s security, and suggest improvements on GitHub.",
        },
        {
          question: "How can I contact the team?",
          answer:
            "Write to us at support@papillon.bzh, or find us on Discord, X, Instagram, TikTok, and LinkedIn.",
        },
      ],
    },
  },
  footer: {
    team: {
      title: "A team & a vision for school",
      description:
        "Papillon is run by a nonprofit of students and young developers. We picture a school life centered on students, and we build it together, in the open.",
      about: "Who we are",
      linkedin: "LinkedIn",
      photoPlaceholder: "Team photo coming soon",
    },
    association: "Association Papillon",
    copyright: "© 2026 Association Papillon & contributors. All rights reserved.",
    columns: {
      product: {
        title: "Features",
        links: {
          grades: "Grades & averages",
          schedule: "Schedule",
          homework: "Homework",
          canteen: "Canteen",
          news: "News",
        },
      },
      about: {
        title: "About",
        links: {
          team: "Who we are",
          blog: "Blog",
          donate: "Support the project",
          privacy: "Privacy",
        },
      },
      developers: {
        title: "Developers",
        links: {
          docs: "Documentation",
          github: "GitHub",
        },
      },
      social: {
        title: "Find us",
        links: {
          x: "X (formerly Twitter)",
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

export default en;
