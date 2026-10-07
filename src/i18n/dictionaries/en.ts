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
    menus: {
      features: {
        grades: { title: "Grades & averages", description: "All your grades, averages worked out." },
        schedule: { title: "Schedule", description: "Your day, class by class." },
        homework: { title: "Homework", description: "What’s left to do, and when it’s due." },
        news: { title: "News", description: "Updates from your school." },
      },
      about: {
        team: { title: "Association", description: "The team and vision behind Papillon." },
      },
      developers: {
        docs: { title: "Documentation", description: "Guides and reference to contribute." },
        github: { title: "GitHub", description: "The source code, open to everyone." },
      },
    },
  },
  language: {
    label: "Language",
  },
  download: {
    label: "Download the app",
    shortLabel: "Download",
    moreOptions: "More download options",
    stores: {
      appStore: "App Store",
      googlePlay: "Google Play",
      github: "GitHub",
    },
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
    demos: {
      items: [
        {
          overtitle: "Smart",
          title: "See your overall average over time",
          description:
            "Follow your grades and progress in real time to better understand how you’re doing.",
          checks: [
            "Estimated average calculated automatically",
            "Overall average history",
            "Impact of each grade on your averages",
          ],
        },
        {
          overtitle: "Fast",
          title: "Check your timetable at a glance",
          description:
            "Get to your timetable quickly, wherever you are, so you never miss a class.",
          checks: ["Lightning-fast loading", "Works offline", "Always up to date"],
        },
        {
          overtitle: "Personal",
          title: "Make your subjects your own",
          description: "Tailor your subjects to your taste for an experience that feels like you.",
          checks: ["Custom colors", "Subject emojis and names", "Applied across the whole app"],
        },
      ],
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
  featurePages: {
    compatible: "Works with",
    grades: {
      metadataTitle: "Grades and averages – Papillon",
      metadataDescription:
        "Your grades as soon as they’re published, your average calculated with coefficients, and how it changes over the year. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        label: "Grades and averages",
        title: "Your average, without waiting for the report card.",
        description:
          "Papillon fetches your grades as soon as they’re published, calculates your average with coefficients, and shows how it changes, subject by subject.",
        imageAlt: "Papillon’s Grades tab, with the progress curve and an average of 15.20 out of 20",
        secondaryImageAlt: "Papillon grades grouped by subject, each with its average",
      },
      highlights: {
        evolution: {
          eyebrow: "Progress",
          title: "See where you stand, at a glance.",
          description:
            "Your overall average is front and center, with its curve over the whole term. Slide your finger along it to see your average on any date.",
          points: [
            "Interactive progress curve",
            "Your latest grades at the top",
          ],
          imageAlt: "Papillon’s progress curve, with an estimated average of 14.83 out of 20 on October 4",
        },
        methods: {
          eyebrow: "Calculation",
          title: "Your average, calculated the way you want.",
          description:
            "Papillon takes coefficients into account and lets you pick the method your school uses. When your school publishes its own average, that’s the one you see.",
          points: [
            "Coefficients taken into account",
            "Subject average, weighted average or median",
            "The official average when your school publishes it",
          ],
          imageAlt: "Choosing how the overall average is calculated in Papillon",
        },
        detail: {
          eyebrow: "Details",
          title: "Every grade, in context.",
          description:
            "Tap a grade to see how the class did: group average, highest and lowest grade, and the assignment’s coefficient.",
          points: [
            "Group average",
            "Highest and lowest grade",
            "Coefficient for every assessment",
          ],
          imageAlt: "Details of a 16 out of 20 grade, with a coefficient of 1 and a group average of 13.50",
        },
        influence: {
          eyebrow: "Impact",
          title: "Know what every grade changes.",
          description:
            "A 16 in Biology? +0.07 points on your overall average. Papillon calculates the impact of every grade, so you know right away where you’re gaining points and where to catch up.",
          points: [
            "Points gained or lost, grade by grade",
            "Effect on your average and the group’s",
          ],
          imageAlt: "A grade that adds 0.07 points to the overall average",
        },
        periods: {
          eyebrow: "Periods",
          title: "Every term, within reach.",
          description:
            "Switch from one term or semester to another from the periods menu, to compare your results or look back at the start of the year. Mock exams get their own period.",
          points: ["Terms and semesters", "Mock exams kept separate", "The dates of every period"],
          imageAlt: "Papillon’s periods menu, with the three terms and their dates",
        },
        subjects: {
          eyebrow: "Organization",
          title: "All your subjects, neatly sorted.",
          description:
            "Your grades are grouped by subject, each with its average. Papillon recognizes over 250 subjects, even abbreviated or in all caps, and gives them a readable name, an emoji and a color. Sort them, or search for an assignment.",
          points: [
            "Sort by date, average or alphabetically",
            "Search across all your grades",
            "Name, emoji and color detected automatically",
          ],
          imageAlt: "Papillon grades grouped by subject: French, Physics-Chemistry and their averages",
        },
      },
      more: {
        title: "And there’s more",
        description: "The little details that make a difference, every day.",
        items: {
          offline: {
            title: "Offline",
            description: "Your grades stay available without a connection, on the bus or at the back of class.",
          },
          home: {
            title: "Right on the home screen",
            description: "Your average and its curve show up as soon as you open the app.",
          },
          scale: {
            title: "Your scale",
            description: "Graded out of 10 or 40? Papillon converts it to the scale you choose.",
          },
          skills: {
            title: "Skills",
            description: "Skills-based assessments are supported too.",
          },
          personal: {
            title: "Make it yours",
            description: "Everything is picked automatically, but each subject’s name, emoji and color are yours to change.",
          },
          private: {
            title: "Private",
            description: "Your grades stay on your device. They never go through our servers.",
          },
        },
      },
      faq: {
        title: "Your questions about grades",
        description:
          "Everything you need to know about grades and averages in Papillon. Another question? Write to us at support@papillon.bzh.",
        items: [
          {
            emoji: "🎯",
            question: "Is the average the same as on my report card?",
            answer:
              "When your school publishes an average, Papillon shows it as is. Otherwise, the app calculates it from your grades and their coefficients: it’s a close estimate that can differ slightly from your report card (bonus or optional grades, rounding).",
          },
          {
            emoji: "⚖️",
            question: "Are coefficients taken into account?",
            answer:
              "Yes. Every grade counts according to the coefficient set by your teacher, and you’ll find it in the grade’s details.",
          },
          {
            emoji: "🧮",
            question: "Which calculation method should I choose?",
            answer:
              "The subject average is recommended: it’s how most schools calculate the overall average. The weighted average and the median give you another look at your results.",
          },
          {
            emoji: "⏱️",
            question: "When do new grades show up?",
            answer:
              "As soon as they’re published on Pronote, ÉcoleDirecte or Skolengo. Papillon fetches them straight from your school when you open the app.",
          },
          {
            emoji: "📶",
            question: "Can I check my grades offline?",
            answer: "Yes. Grades that were already fetched stay on your device and show up even offline.",
          },
          {
            emoji: "🔒",
            question: "Can anyone else see my grades?",
            answer:
              "No. Your grades go straight from your school to your phone. Papillon doesn’t see, store or sell them.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for these features?",
            answer: "No. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      largeScreen: {
        title: "Even clearer on a big screen.",
        description:
          "On iPad and Mac, Papillon uses the full width of the screen: the curve stretches out, your latest grades scroll by and two subjects sit side by side.",
        imageAlt: "Papillon’s Grades tab on an iPad Pro, with the progress curve and two subjects side by side",
      },
      cta: {
        title: "Your next grade deserves better than a spreadsheet.",
        description:
          "Install Papillon and sign in with your usual credentials. Your grades are there in seconds.",
      },
    },
    schedule: {
      metadataTitle: "Schedule – Papillon",
      metadataDescription:
        "Your schedule, always up to date: canceled and changed classes flagged, rooms, teachers, Live Activities and widgets. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        label: "Schedule",
        title: "Your day, class after class.",
        description:
          "Papillon shows your up-to-date schedule, flags canceled or changed classes and follows you all the way to the Lock Screen.",
        imageAlt: "The Thursday, October 8 schedule in Papillon, with a lunch break and a canceled class",
        secondaryImageAlt: "Papillon’s Live Activity on an iPhone Lock Screen",
      },
      highlights: {
        day: {
          eyebrow: "Your day",
          title: "Changes jump right out.",
          description:
            "A class canceled or changed? It’s flagged right in your day. Room, teacher, length: it’s all there, with the breaks between classes.",
          points: [
            "Canceled and changed classes flagged",
            "Room, teacher and length of every class",
            "Breaks and lunch shown",
          ],
          imageAlt: "Thursday, October 8, with the lunch break and a canceled Economics class",
        },
        views: {
          eyebrow: "Views",
          title: "List or week, your call.",
          description:
            "Stick with the List view to follow your day, or switch to the Weekly view to see all your classes at a glance. One menu is all it takes.",
          points: ["List view, day by day", "Weekly view, in beta", "Your iCal calendars in one place"],
          imageAlt: "The schedule’s View menu, with the List and Weekly views",
        },
        calendar: {
          eyebrow: "Navigation",
          title: "Jump to any day.",
          description:
            "Swipe from one day to the next, or open the calendar to go straight to the date you need: a test in two weeks, the first day back after the holidays.",
          points: [
            "Swipe to the next day",
            "The month’s calendar in one tap",
            "Back to today in one tap",
          ],
          imageAlt: "The month calendar open on Tuesday, October 13",
        },
        detail: {
          eyebrow: "Details",
          title: "Every class, in detail.",
          description:
            "Tap a class to see its times, how long until it starts, the room and the teacher. Papillon automatically recognizes over 250 subjects, even abbreviated or in all caps, and gives them a readable name, an emoji and a color.",
          points: [
            "Start, end and length",
            "Room and teacher",
            "Name, emoji and color detected automatically",
          ],
          imageAlt: "Details of a one-hour History-Geography class in room C 018 with Mme Bernard",
        },
        live: {
          eyebrow: "Live Activities",
          title: "Your class, on the Lock Screen.",
          description:
            "On iPhone, your current or next class shows live on the Lock Screen and in the Dynamic Island, with the room and the time left. No need to open the app between bells.",
          points: ["Time left, live", "Room and teacher", "In the Dynamic Island"],
          imageAlt: "An iPhone Lock Screen showing the current History-Geography class and the time left",
        },
        widget: {
          eyebrow: "Widgets",
          title: "Your next classes, right on the Home Screen.",
          description:
            "Add the Papillon widget to your iPhone’s Home Screen: your next classes show up without even opening the app.",
          points: ["Your next classes at a glance", "Always up to date"],
          imageAlt: "An iPhone Home Screen with Papillon’s widget showing tomorrow’s classes",
        },
      },
      more: {
        title: "And there’s more",
        description: "The little details that make a difference, every day.",
        items: {
          home: {
            title: "Right on the home screen",
            description: "Today’s or tomorrow’s classes show up as soon as you open the app.",
          },
          offline: {
            title: "Offline",
            description: "Your schedule stays available without a connection.",
          },
          ical: {
            title: "iCal calendars",
            description: "Add your iCal calendars to see them next to your classes.",
          },
          devices: {
            title: "Big screen",
            description: "On iPad and Mac, your whole week fits on a single screen.",
          },
          personal: {
            title: "Make it yours",
            description: "Change the name, emoji and color of every subject.",
          },
          private: {
            title: "Private",
            description: "Your schedule stays on your device, never on our servers.",
          },
        },
      },
      faq: {
        title: "Your questions about the schedule",
        description:
          "Everything you need to know about the schedule in Papillon. Another question? Write to us at support@papillon.bzh.",
        items: [
          {
            emoji: "🔄",
            question: "Do last-minute changes show up?",
            answer:
              "Yes. Canceled classes, changed classes and room changes show up as soon as your school publishes them on Pronote, ÉcoleDirecte or Skolengo.",
          },
          {
            emoji: "🔒",
            question: "How do I turn on Live Activities?",
            answer:
              "On iPhone, open Papillon’s settings and turn on Live Activities. Your current or next class then shows on the Lock Screen and in the Dynamic Island.",
          },
          {
            emoji: "📱",
            question: "How do I add the widget?",
            answer:
              "Touch and hold your iPhone’s Home Screen, tap “+” at the top, then search for Papillon and pick the widget.",
          },
          {
            emoji: "🗓️",
            question: "Can I see my whole week?",
            answer:
              "Yes. In the Timetable tab, tap “…” at the top right and choose the Weekly view. It’s still in beta.",
          },
          {
            emoji: "✨",
            question: "Why do my subjects have a different name?",
            answer:
              "Papillon automatically recognizes your subjects, even when your school abbreviates them or writes them in all caps, and gives them a readable name, an emoji and a color. You can change all of it.",
          },
          {
            emoji: "📶",
            question: "Can I check my schedule offline?",
            answer: "Yes. A schedule that was already fetched stays on your device and shows up even offline.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for these features?",
            answer: "No. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      largeScreen: {
        title: "The whole week, on one screen.",
        description:
          "On iPad and Mac, the Weekly view shows your classes from Monday to Friday at a glance, canceled classes included. The sidebar takes you from one tab to another.",
        imageAlt: "The schedule for the week of October 5 in Papillon on an iPad Pro",
      },
      cta: {
        title: "Your next class already fits in your pocket.",
        description:
          "Install Papillon and sign in with your usual credentials. Your schedule is there in seconds.",
      },
    },
    homework: {
      metadataTitle: "Homework – Papillon",
      metadataDescription:
        "All your homework week by week, ready to check off once done, sorted by date or subject. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        label: "Homework",
        title: "What’s left to do, and when it’s due.",
        description:
          "Papillon gathers your homework week by week, lets you check it off once it’s done, and shows you at a glance what’s coming up.",
        imageAlt: "Week 41 homework in Papillon, sorted by due day",
        secondaryImageAlt: "A History-Geography assignment marked as done",
      },
      highlights: {
        week: {
          eyebrow: "Week",
          title: "The whole week, day by day.",
          description:
            "Your homework is sorted by due date, with the subject and the time you have left. Swipe to move to the next week.",
          points: [
            "Sorted by due day",
            "“tomorrow”, “in 2 days”: deadlines in plain words",
            "A new week with one swipe",
          ],
          imageAlt: "Homework from Monday, October 5 to Wednesday, October 7, one already done",
        },
        done: {
          eyebrow: "Tracking",
          title: "Check it off, done.",
          description:
            "Mark an assignment as done with one tap, from the list or its own page. You always know what’s left before tomorrow.",
          points: [
            "Done in one tap",
            "The full instructions on the assignment page",
            "Your teacher’s attachments",
          ],
          imageAlt: "A History-Geography assignment page, marked as done",
        },
        sort: {
          eyebrow: "Sorting",
          title: "Sort it your way.",
          description:
            "Sort your homework by due date, by subject, or put unfinished work first. Looking for specific instructions? Search finds them.",
          points: [
            "By due date or by subject",
            "Unfinished homework first",
            "Search across all your homework",
          ],
          imageAlt: "The homework sort menu: due date, subjects, not done",
        },
      },
      more: {
        title: "And there’s more",
        description: "The little details that make a difference, every day.",
        items: {
          subjects: {
            title: "Recognized subjects",
            description:
              "Over 250 subjects recognized automatically, even abbreviated, with a readable name, an emoji and a color.",
          },
          home: {
            title: "Right on the home screen",
            description: "Your to-do list shows up as soon as you open the app.",
          },
          attachments: {
            title: "Attachments",
            description: "Files attached by your teachers are available from the assignment.",
          },
          search: {
            title: "Search",
            description: "Find an assignment by typing a word from the instructions or the subject name.",
          },
          offline: {
            title: "Offline",
            description: "Your homework stays available without a connection.",
          },
          private: {
            title: "Private",
            description: "Your homework stays on your device, never on our servers.",
          },
        },
      },
      faq: {
        title: "Your questions about homework",
        description:
          "Everything you need to know about homework in Papillon. Another question? Write to us at support@papillon.bzh.",
        items: [
          {
            emoji: "📥",
            question: "Where does my homework come from?",
            answer:
              "Papillon fetches the homework your teachers publish on Pronote, ÉcoleDirecte or Skolengo, straight from your school.",
          },
          {
            emoji: "📆",
            question: "Can I see homework for the coming weeks?",
            answer: "Yes. Swipe the list left or right to move from one week to another.",
          },
          {
            emoji: "📎",
            question: "Are attachments available?",
            answer: "Yes. Open an assignment to find its full instructions and the files your teacher attached.",
          },
          {
            emoji: "✨",
            question: "Where do the emojis next to subjects come from?",
            answer:
              "Papillon automatically recognizes your subjects and gives them a readable name, an emoji and a color. You can change all of it.",
          },
          {
            emoji: "📶",
            question: "Can I check my homework offline?",
            answer: "Yes. Homework that was already fetched stays on your device and shows up even offline.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for these features?",
            answer: "No. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      cta: {
        title: "No more “wait, did we have homework?”.",
        description:
          "Install Papillon and sign in with your usual credentials. Your homework is there in seconds.",
      },
    },
    news: {
      metadataTitle: "News – Papillon",
      metadataDescription:
        "Your school’s news in a clear list, easy to read on your phone. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        label: "News",
        title: "Your school’s news, without missing a thing.",
        description:
          "Meetings, sign-ups, trips: Papillon gathers your school’s announcements in a clear list, made to be read on your phone.",
        imageAlt: "The list of school news in Papillon",
        secondaryImageAlt: "A news post about signing up for the sports club, open in Papillon",
      },
      highlights: {
        list: {
          eyebrow: "Feed",
          title: "Every announcement, in one place.",
          description:
            "Each post shows its author, its date and a preview of the message. The newest are at the top, and search finds any announcement in an instant.",
          points: ["Author and publication date", "Message preview", "Search across all news"],
          imageAlt: "Four news posts: parent-teacher meeting, library, sports club and a charity drive",
        },
        detail: {
          eyebrow: "Reading",
          title: "Comfortable reading.",
          description:
            "Open a post to read it in full, formatted for your screen. Its category is shown at the top, so you know right away what it’s about.",
          points: ["Text formatted for your phone", "Category, author and date at the top"],
          imageAlt: "The “Sports club sign-ups” post, published by the student life office",
        },
      },
      more: {
        title: "And there’s more",
        description: "The little details that make a difference, every day.",
        items: {
          home: {
            title: "Right on the home screen",
            description: "The latest news shows up on the app’s home screen.",
          },
          offline: {
            title: "Offline",
            description: "News that was already loaded stays readable without a connection.",
          },
          private: {
            title: "Private",
            description: "Your school’s news stays on your device, never on our servers.",
          },
        },
      },
      faq: {
        title: "Your questions about news",
        description:
          "Everything you need to know about news in Papillon. Another question? Write to us at support@papillon.bzh.",
        items: [
          {
            emoji: "📥",
            question: "Where does the news come from?",
            answer:
              "It’s the information your school publishes on Pronote, ÉcoleDirecte or Skolengo. Papillon fetches it directly, with no middleman.",
          },
          {
            emoji: "📊",
            question: "Can I answer polls?",
            answer:
              "Not yet: Pronote doesn’t allow showing them for now. Papillon tells you when a post contains a poll.",
          },
          {
            emoji: "🛠️",
            question: "A post looks wrong, what can I do?",
            answer:
              "At the bottom of every post, you can turn off automatic formatting to see it exactly as it was published.",
          },
          {
            emoji: "📶",
            question: "Can I read the news offline?",
            answer: "Yes. News that was already loaded stays on your device and shows up even offline.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for these features?",
            answer: "No. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      cta: {
        title: "You won’t miss the next announcement.",
        description:
          "Install Papillon and sign in with your usual credentials. Your school’s news is there in seconds.",
      },
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
