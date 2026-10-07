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
      titleEnd: "way to school",
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
          loadingTitle: "Setting up your account",
          loadingDescription: "We’re signing you in. This can take a few seconds.",
        },
        private: {
          title: "Private",
          description: "Your data stays on your device. Free, open source, no ads, no tracking.",
          passwordPlaceholder: "Password",
        },
        instant: {
          title: "Instant",
          description: "Your day at a glance. Even offline.",
          homework: {
            emoji: "🇬🇧",
            subject: "English",
            due: "tomorrow",
            content: "Finish all the exercises on page 19 and the attached appendices",
            tag: "Oral presentation",
            done: "Done",
            markDone: "Mark as done",
          },
        },
        smart: {
          title: "Smart",
          description: "Averages calculated for you. Watch your grades evolve, term after term.",
          averageLabel: "Subject average",
          averageSource: "from your school",
        },
        personal: {
          title: "Yours",
          description: "Colors, emojis, subject names. Every detail is yours to tweak.",
          colorsLabel: "App color",
          colors: {
            pink: "Pink",
            orange: "Orange",
            green: "Green",
            purple: "Purple",
            blue: "Blue",
            gray: "Gray",
          },
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
      highlights: {
        sidebar: {
          title: "Sidebar",
          description:
            "Jump between home, classes, tasks, and grades from a sidebar, just like in other iPad apps.",
        },
        macApp: {
          title: "Made for macOS",
          description:
            "A real Mac window, with its sidebar, that sits right next to your other apps.",
        },
        weekView: {
          title: "Week view",
          description: "The big screen shows your whole week’s schedule at a glance.",
        },
        liquidGlass: {
          title: "Liquid Glass",
          description:
            "Buttons, cards, and menus use iOS’s translucent material, with its reflections and depth.",
        },
        liveActivity: {
          title: "Live classes",
          description:
            "Your current or next class shows up live, with the room, the teacher, and the time left.",
        },
        materialYou: {
          title: "Material You",
          description:
            "The interface picks up your wallpaper’s colors and follows Android’s Material components.",
        },
        sideTabs: {
          title: "Adapted tabs",
          description:
            "On iPhone Duo, tabs move to the side to leave all the room for your content.",
        },
        wideLayout: {
          title: "Wider interface",
          description:
            "Papillon uses the full width of the screen for easier-to-read cards and schedules.",
        },
      },
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
      contributors: "{count} contributors on GitHub",
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
          emoji: "💸",
          question: "Is Papillon free?",
          answer:
            "Yes, completely. Papillon has no ads and collects no personal data. The app is developed by students and young developers.",
        },
        {
          emoji: "🔒",
          question: "Is my data safe?",
          answer:
            "Your credentials are never stored or sent to Papillon, and your information stays on your device. Since the code is open source, anyone can check how the app works.",
        },
        {
          emoji: "🔌",
          question: "Which services are supported?",
          answer:
            "Papillon works with Pronote, ÉcoleDirecte, Skolengo, and Turboself. More services, like the Crous and regional digital workspaces, are coming soon.",
        },
        {
          emoji: "🏫",
          question: "My school isn’t in the list. What can I do?",
          answer:
            "Some schools choose not to appear in the Pronote directory, which is managed by Index Education. You can still sign in by scanning a QR code or entering your school’s address.",
        },
        {
          emoji: "👨‍👩‍👧",
          question: "Can I use Papillon with a parent or teacher account?",
          answer:
            "Not yet: only student accounts are supported for now. Other account types may come later.",
        },
        {
          emoji: "🌍",
          question: "Is Papillon available outside France?",
          answer:
            "On Android, Papillon is available everywhere. On iOS, the app is currently limited to France and Switzerland, for legal and App Store reasons.",
        },
        {
          emoji: "🧑‍💻",
          question: "What does “open source” mean?",
          answer:
            "Papillon’s code is public: anyone can read it, check the app’s security, and suggest improvements on GitHub.",
        },
        {
          emoji: "💬",
          question: "How can I contact the team?",
          answer:
            "Write to us at support@papillon.bzh, or find us on Discord, X, Instagram, TikTok, and LinkedIn.",
        },
      ],
    },
  },
  association: {
    metadataTitle: "About us – Papillon",
    hero: {
      label: "Association Papillon",
      title: "Teaming up to do better.",
      description:
        "Papillon is also 6 passionate students who always strive to create the unexpected and deliver an experience beyond expectations.",
      discord: "Join the Discord",
    },
    values: [
      {
        title: "We can’t please everyone, but we do everything we can to please you.",
        description:
          "We don’t just want an app, we want to build a community committed to creating educational tools that go beyond expectations. Papillon is a team of passionate people, dedicated to always doing more for you.",
      },
      {
        title: "Passionate about what breaks you out of the routine.",
        description:
          "Always looking to do better, again and again. That’s what drives us. Papillon is a team that constantly thinks about how to do things differently, to bring an experience that feels like a breath of fresh air.",
      },
      {
        title: "Even through the worst storms, we’ll stick together.",
        description:
          "We’re a team that believes in the strength of the collective. Papillon is a team that moves forward together, shares the same values, and keeps going even when the pressure is high.",
      },
    ],
    team: {
      title: "So who is Papillon?",
      description:
        "Alongside the hundreds of contributors we warmly thank, Papillon is also a team of passionate people working every day to keep the project alive.",
      members: {
        vince: {
          role: "President",
          description:
            "Founder and president of the project, he dabbles in everything Papillon-related.",
        },
        lucas: {
          role: "Vice-president",
          description:
            "Lucas joined Papillon in its early days and is actively involved in steering the project.",
        },
        tom: {
          role: "UI/UX Designer",
          description:
            "The project’s artist, he takes care of Papillon’s visual identity and interface.",
        },
        raphael: {
          role: "Developer",
          description:
            "Evil genius of code, he’s the one we hand all the thankless tasks to.",
        },
        remy: {
          role: "Developer",
          description:
            "A visionary of code and design, he gives features a fresh coat of paint.",
        },
        mael: {
          role: "Developer",
          description: "He tinkers with everything… especially when he “just wants to see what happens”.",
        },
      },
    },
  },
  downloadPage: {
    metadataTitle: "Download Papillon",
    hero: {
      label: "Free, ad-free, open source",
      title: "Your school life, in your pocket.",
      description:
        "Grades, schedule, homework and canteen menus: install Papillon and find everything in an instant.",
      rating: "{rating} out of 5 · {downloads} downloads",
      imageAlt: "Papillon open on an iPhone",
      qrTitle: "Scan to download",
      qrDescription: "Point your phone’s camera at this code, it takes you to the right store.",
      qrAlt: "QR code to the Papillon download page",
    },
    stores: {
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play",
    },
    platforms: {
      title: "On all your devices",
      description: "Phone, tablet or computer: Papillon installs wherever you need it.",
      items: {
        apple: {
          name: "iPhone and iPad",
          description: "Liquid Glass and live classes. Available in France and Switzerland.",
          cta: "View on the App Store",
        },
        android: {
          name: "Android",
          description: "Material You and your wallpaper’s colors. Available everywhere.",
          cta: "View on Google Play",
        },
        mac: {
          name: "Mac",
          description: "A real Mac window to keep an eye on your day while you work.",
          cta: "View on the Mac App Store",
        },
      },
    },
    beta: {
      title: "Beta versions",
      description: "Join our testing programs to try the latest features before everyone else.",
      testFlight: "Join TestFlight for iOS",
      googlePlay: "Join the Google Play beta for Android",
    },
  },
  footer: {
    team: {
      title: "A team & a vision for school",
      description:
        "Papillon is run by a nonprofit of students and young developers. We picture a school life centered on students, and we build it together, in the open.",
      about: "Who we are",
      linkedin: "LinkedIn",
      photoAlt: "The Papillon team",
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
