import type { Dictionary } from "./fr";

const en: Dictionary = {
  metadata: {
    title: "Papillon, school life reimagined",
    description: "Your grades, schedule, homework, cafeteria menu and more, all in one app.",
  },
  nav: {
    label: "Main navigation",
    home: "Papillon home",
    features: "Features",
    about: "About",
    developers: "Developers",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menus: {
      features: {
        grades: { title: "Grades", description: "Every grade, with your averages done for you." },
        schedule: { title: "Schedule", description: "Your day, one class at a time." },
        homework: { title: "Homework", description: "What’s due, and when." },
        news: { title: "News", description: "Announcements from your school." },
      },
      about: {
        team: { title: "Our team", description: "The people and the vision behind Papillon." },
        story: { title: "Our story", description: "How Papillon started, and what came next." },
      },
      developers: {
        docs: { title: "Docs", description: "Guides and API reference for contributors." },
        github: { title: "GitHub", description: "Our source code, open to all." },
      },
    },
  },
  language: {
    label: "Language",
  },
  download: {
    label: "Get the app",
    shortLabel: "Download",
    moreOptions: "More ways to download",
    stores: {
      appStore: "App Store",
      googlePlay: "Google Play",
      github: "GitHub",
    },
  },
  home: {
    hero: {
      titleStart: "School life,",
      titleEnd: "reimagined",
      description:
        "Grades, schedule, homework, cafeteria menu and more, all in one beautifully simple app that fits right into your day.",
      imageAlt: "Papillon on a foldable phone, showing today’s schedule",
      discover: "Explore Papillon",
    },
    features: {
      title: "Everything school, in one app.",
      description:
        "From your grades to today’s lunch menu, Papillon puts everything you need in one place. Made by students, for students: free, open source, and private by design.",
      cards: {
        connected: {
          title: "Connected",
          description:
            "Pronote, ÉcoleDirecte, Skolengo and your cafeteria. Link your accounts and Papillon takes care of the rest.",
          loadingTitle: "Setting up your account",
          loadingDescription: "Signing you in. This can take a few seconds.",
        },
        private: {
          title: "Private",
          description: "Your data never leaves your device. Free, open source, no ads, no tracking.",
          passwordPlaceholder: "Password",
        },
        instant: {
          title: "Instant",
          description: "Your whole day at a glance. Even offline.",
          homework: {
            emoji: "🇬🇧",
            subject: "English",
            due: "tomorrow",
            content: "Finish all the exercises on page 19 and the attached worksheets",
            tag: "Presentation",
            done: "Done",
            markDone: "Mark as done",
          },
        },
        smart: {
          title: "Smart",
          description: "Averages calculated for you. Track your progress term after term.",
          averageLabel: "Subject average",
          averageSource: "from your school",
        },
        personal: {
          title: "Yours",
          description: "Colors, emojis, subject names. Make every detail your own.",
          colorsLabel: "Accent color",
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
      title: "On every screen you own",
      description:
        "Papillon fits whatever you have on hand: your phone in class, your iPad for studying, your Mac to stay on top of it all.",
      tabsLabel: "Devices",
      new: "New",
      previous: "Previous device",
      next: "Next device",
      highlights: {
        sidebar: {
          title: "Sidebar",
          description:
            "Jump between Home, Classes, Tasks and Grades from the sidebar, just like any other iPad app.",
        },
        macApp: {
          title: "Built for macOS",
          description:
            "A true Mac app with a native sidebar that sits right alongside your other apps.",
        },
        weekView: {
          title: "Week view",
          description: "The bigger screen shows your entire week at a glance.",
        },
        liquidGlass: {
          title: "Liquid Glass",
          description:
            "Buttons, cards and menus use iOS’s translucent material, complete with reflections and depth.",
        },
        liveActivity: {
          title: "Live Activities",
          description:
            "Your current or next class, live, with the room, the teacher and the time remaining.",
        },
        materialYou: {
          title: "Material You",
          description:
            "The interface takes on your wallpaper’s colors and follows Android’s Material design.",
        },
        sideTabs: {
          title: "Adaptive tabs",
          description:
            "On iPhone Duo, tabs move to the side to give your content all the room it needs.",
        },
        wideLayout: {
          title: "Wider layout",
          description:
            "Papillon uses the full width of the screen, so cards and schedules are easier to read.",
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
          "On iPhone, Papillon embraces Liquid Glass and native iOS components, so menus, transitions and gestures work just the way you’d expect.",
        android:
          "On Android, the interface follows Material You and matches your wallpaper’s colors, so the app feels like yours.",
        ipad: "On iPad, Papillon makes the most of the larger display to show you more at once.",
        mac: "Papillon comes with you to your Mac and feels right at home on macOS, so you can keep an eye on your day while you work.",
        iphoneDuo:
          "Papillon is ready for the iPhone of tomorrow, with an interface that adapts seamlessly to its foldable display.",
      },
    },
    demos: {
      items: [
        {
          overtitle: "Smart",
          title: "Watch your overall average over time",
          description:
            "Follow your grades as they come in and see exactly how you’re doing.",
          checks: [
            "Estimated average, calculated automatically",
            "Overall average history",
            "How each grade affects your averages",
          ],
        },
        {
          overtitle: "Fast",
          title: "Your schedule, at a glance",
          description:
            "Pull up your schedule in a second, wherever you are, and never miss a class.",
          checks: ["Loads instantly", "Works offline", "Always up to date"],
        },
        {
          overtitle: "Personal",
          title: "Make your subjects your own",
          description: "Customize your subjects so the app feels like you.",
          checks: ["Custom colors", "Your own emojis and names", "Applied across the whole app"],
        },
      ],
    },
    steps: {
      title: "How it works",
      description:
        "Sign in with your school login and Papillon does the rest. No new account to create, and we never see your password.",
      items: [
        {
          title: "Find your school in seconds",
          description:
            "Search for your middle school, high school or university by name or city, then select it.",
        },
        {
          title: "Sign in as usual",
          description:
            "Use your school’s login page with the username and password you already have.",
        },
        {
          title: "Stay secure",
          description:
            "Papillon connects directly to your school over an encrypted connection. Your data stays yours.",
        },
        {
          title: "You’re all set",
          description:
            "Grades, schedule, homework and lunch menus: everything’s right there whenever you need it.",
        },
      ],
    },
    trust: {
      title: "Built by you. Secure by design.",
      description:
        "Papillon is built in the open by a community of students. No ads, no tracking: the app is here for you, not your data.",
      github: "View the code on GitHub",
      contributors: "{count} contributors on GitHub",
      pillars: {
        openSource: {
          title: "Free and open source",
          description:
            "Papillon’s code is public: anyone can read it, audit it and contribute on GitHub.",
        },
        privacy: {
          title: "Private by default",
          description:
            "No ads, no tracking, no selling your data. Your information stays on your device.",
        },
        security: {
          title: "Secure at every step",
          description:
            "We never see your login: it goes straight to your school over an encrypted connection.",
        },
      },
    },
    adoption: {
      title: "Don’t just take our word for it.",
      description:
        "Students from middle school to university use Papillon every day. Here’s what they’re saying.",
      reviewsLabel: "Reviews from the App Store and Google Play",
      ratingLabel: "out of 5 stars",
      stats: {
        downloads: { value: "1.8M+", label: "downloads" },
        rating: { value: "4.7", label: "average rating" },
        reviews: { value: "25K+", label: "reviews" },
        sessions: { value: "100K+", label: "sessions a week" },
      },
    },
    faq: {
      title: "FAQ",
      description:
        "Everything you need to know before downloading Papillon. Still have questions? Reach us at support@papillon.bzh.",
      items: [
        {
          emoji: "💸",
          question: "Is Papillon free?",
          answer:
            "Yes, 100% free. Papillon has no ads and doesn’t collect any personal data. It’s built by students and young developers.",
        },
        {
          emoji: "🔒",
          question: "Is my data safe?",
          answer:
            "Your login is never stored or sent to Papillon, and your data stays on your device. Since the code is open source, anyone can check how the app works.",
        },
        {
          emoji: "🔌",
          question: "Which services are supported?",
          answer:
            "Papillon works with Pronote, ÉcoleDirecte, Skolengo and Turboself. More services, like Crous and regional school portals, are on the way.",
        },
        {
          emoji: "🏫",
          question: "I can’t find my school. What should I do?",
          answer:
            "Some schools choose not to be listed in the Pronote directory, which is run by Index Education. You can still sign in by scanning a QR code or entering your school’s URL.",
        },
        {
          emoji: "👨‍👩‍👧",
          question: "Can parents or teachers use Papillon?",
          answer:
            "Not yet. Only student accounts are supported for now, but other account types may come later.",
        },
        {
          emoji: "🌍",
          question: "Is Papillon available outside France?",
          answer:
            "On Android, Papillon is available worldwide. On iOS, it’s currently limited to France and Switzerland for legal and App Store reasons.",
        },
        {
          emoji: "🧑‍💻",
          question: "What does “open source” mean?",
          answer:
            "Papillon’s code is public: anyone can read it, check the app’s security and suggest improvements on GitHub.",
        },
        {
          emoji: "💬",
          question: "How do I contact the team?",
          answer:
            "Email us at support@papillon.bzh, or find us on Discord, X, Instagram, TikTok and LinkedIn.",
        },
      ],
    },
  },
  association: {
    metadataTitle: "About us – Papillon",
    hero: {
      label: "About Papillon",
      title: "Better, together.",
      description:
        "Papillon is also six passionate students who never stop pushing to surprise you and deliver an experience that goes beyond what you’d expect.",
      discord: "Join our Discord",
    },
    values: [
      {
        title: "We can’t please everyone, but we’ll do everything we can to please you.",
        description:
          "We’re not just building an app. We’re building a community that creates school tools that go further. Papillon is a team of passionate people who always want to do more for you.",
      },
      {
        title: "Passionate about breaking the routine.",
        description:
          "Always looking for ways to do better, again and again: that’s what drives us. We’re constantly rethinking how things are done to bring you something that feels like a breath of fresh air.",
      },
      {
        title: "Whatever the storm, we stick together.",
        description:
          "We believe in the power of the team. At Papillon, we move forward together, share the same values and keep going even when the pressure’s on.",
      },
    ],
    team: {
      title: "So, who’s behind Papillon?",
      description:
        "Along with the hundreds of contributors we can’t thank enough, Papillon is a team of passionate people working every day to keep the project going.",
      members: {
        vince: {
          role: "President",
          description:
            "Founder and president of the project, he has a hand in everything Papillon.",
        },
        lucas: {
          role: "Vice President",
          description:
            "Lucas joined Papillon in its early days and helps lead the project.",
        },
        tom: {
          role: "UI/UX Designer",
          description:
            "The team’s artist, he shapes Papillon’s visual identity and interface.",
        },
        raphael: {
          role: "Developer",
          description:
            "Our evil coding genius, and the one who gets all the jobs nobody else wants.",
        },
        remy: {
          role: "Developer",
          description:
            "With an eye for both code and design, he gives features a fresh coat of paint.",
        },
        mael: {
          role: "Developer",
          description: "He tinkers with everything… especially when he “just wants to see what happens.”",
        },
      },
    },
  },
  downloadPage: {
    metadataTitle: "Download Papillon",
    hero: {
      label: "Free, ad-free, open source",
      title: "School life, in your pocket.",
      description:
        "Grades, schedule, homework and lunch menus: install Papillon and get it all in an instant.",
      rating: "{rating} out of 5 · {downloads} downloads",
      imageAlt: "Papillon on an iPhone",
      qrTitle: "Scan to download",
      qrDescription: "Point your phone’s camera at this code to go straight to the right store.",
      qrAlt: "QR code linking to the Papillon download page",
    },
    stores: {
      appStore: "Download on the App Store",
      googlePlay: "Get it on Google Play",
    },
    platforms: {
      title: "On all your devices",
      description: "Phone, tablet or computer: Papillon is there wherever you need it.",
      items: {
        apple: {
          name: "iPhone and iPad",
          description: "Liquid Glass and Live Activities. Available in France and Switzerland.",
          cta: "View on the App Store",
        },
        android: {
          name: "Android",
          description: "Material You, matched to your wallpaper. Available worldwide.",
          cta: "View on Google Play",
        },
        mac: {
          name: "Mac",
          description: "A true Mac app to keep an eye on your day while you work.",
          cta: "View on the Mac App Store",
        },
      },
    },
    beta: {
      title: "Beta",
      description: "Join our beta programs and try new features before anyone else.",
      testFlight: "Join the iOS beta on TestFlight",
      googlePlay: "Join the Android beta on Google Play",
    },
  },
  featurePages: {
    compatible: "Works with",
    grades: {
      metadataTitle: "Grades – Papillon",
      metadataDescription:
        "Get your grades as soon as they’re posted, your weighted average calculated for you, and see how it changes over the year. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        title: "Know your average before report cards do.",
        description:
          "Papillon pulls in your grades as soon as they’re posted, calculates your weighted average and shows how it changes, subject by subject.",
        imageAlt: "Papillon’s Grades tab, with the progress chart and an average of 15.20 out of 20",
      },
      highlights: {
        evolution: {
          title: "See where you stand, at a glance.",
          description:
            "Your overall average front and center, with a chart covering the whole term. Drag your finger along it to see your average on any day.",
          points: [
            "Interactive progress chart",
            "Your latest grades up top",
          ],
          imageAlt: "Papillon’s progress chart, showing an estimated average of 14.83 out of 20 on October 4",
        },
        methods: {
          title: "Your average, your way.",
          description:
            "Papillon factors in weights and lets you pick the method your school uses. If your school posts its own average, that’s the one you’ll see.",
          points: [
            "Weights factored in",
            "Subject average, weighted average or median",
            "Your school’s official average, when it’s posted",
          ],
          imageAlt: "Choosing how the overall average is calculated in Papillon",
        },
        detail: {
          title: "Every grade, in context.",
          description:
            "Tap a grade to see how the rest of the class did: class average, highest and lowest score, and how much the assignment is worth.",
          points: [
            "Class average",
            "Highest and lowest score",
            "Weight of every assignment",
          ],
          imageAlt: "Details of a 16 out of 20 grade, with a weight of 1 and a class average of 13.50",
        },
        influence: {
          title: "See what every grade really changes.",
          description:
            "Got a 16 in Biology? That’s +0.07 on your overall average. Papillon shows the impact of every grade, so you know exactly where you’re gaining ground and where to catch up.",
          points: [
            "Points gained or lost, grade by grade",
            "Effect on your average and the class’s",
          ],
          imageAlt: "A grade that raises the overall average by 0.07 points",
        },
        periods: {
          title: "Every term, one tap away.",
          description:
            "Switch between terms or semesters from the menu to compare your results or look back at the start of the year. Practice exams get their own tab.",
          points: ["Terms and semesters", "Practice exams kept separate", "Start and end dates for each term"],
          imageAlt: "Papillon’s term menu, showing three terms and their dates",
        },
        subjects: {
          title: "All your subjects, neatly organized.",
          description:
            "Your grades are grouped by subject, each with its own average. Papillon recognizes over 250 subjects, even when they’re abbreviated or in all caps, and gives each a clean name, an emoji and a color. Sort them, or search for any assignment.",
          points: [
            "Sort by date, average or name",
            "Search all your grades",
            "Names, emojis and colors set automatically",
          ],
          imageAlt: "Grades in Papillon grouped by subject: French, Physics & Chemistry and their averages",
        },
      },
      more: {
        title: "Also",
        items: {
          offline: {
            title: "Offline",
            description: "Your grades are always available, even with no signal on the bus or in the back row.",
          },
          home: {
            title: "Right on the home screen",
            description: "Your average and its chart are there the moment you open the app.",
          },
          scale: {
            title: "Your scale",
            description: "Graded out of 10 or 40? Papillon converts it to the scale you prefer.",
          },
          skills: {
            title: "Skills",
            description: "Skills-based assessments are supported too.",
          },
          personal: {
            title: "Make it yours",
            description: "Everything’s set up for you, but you can change any subject’s name, emoji and color.",
          },
          private: {
            title: "Private",
            description: "Your grades stay on your device. They never touch our servers.",
          },
        },
      },
      faq: {
        title: "Grades FAQ",
        description:
          "Everything you need to know about grades and averages in Papillon. Still have questions? Reach us at support@papillon.bzh.",
        items: [
          {
            emoji: "🎯",
            question: "Will my average match my report card?",
            answer:
              "If your school posts an average, Papillon shows exactly that. Otherwise, the app calculates it from your grades and their weights. It’s a close estimate, but it may differ slightly from your report card (extra credit, optional grades, rounding).",
          },
          {
            emoji: "⚖️",
            question: "Are weights taken into account?",
            answer:
              "Yes. Every grade counts according to the weight your teacher set, which you can find in the grade’s details.",
          },
          {
            emoji: "🧮",
            question: "Which calculation method should I pick?",
            answer:
              "We recommend the subject average, since most schools use it for the overall average. The weighted average and median give you another way to look at your results.",
          },
          {
            emoji: "⏱️",
            question: "When do new grades show up?",
            answer:
              "As soon as they’re posted on Pronote, ÉcoleDirecte or Skolengo. Papillon fetches them straight from your school when you open the app.",
          },
          {
            emoji: "📶",
            question: "Can I see my grades offline?",
            answer: "Yes. Once your grades have loaded, they’re saved on your device and available offline.",
          },
          {
            emoji: "🔒",
            question: "Can anyone else see my grades?",
            answer:
              "No. Your grades go straight from your school to your phone. Papillon never sees, stores or sells them.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for any of this?",
            answer: "Nope. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      largeScreen: {
        title: "Even better on a big screen.",
        description:
          "On iPad and Mac, Papillon uses the full width of the screen: the chart stretches out, your latest grades scroll by and two subjects sit side by side.",
        imageAlt: "Papillon’s Grades tab on an iPad Pro, with the progress chart and two subjects side by side",
      },
      cta: {
        title: "Your grades deserve better than a spreadsheet.",
        description:
          "Install Papillon and sign in with your school login. Your grades show up in seconds.",
      },
    },
    schedule: {
      metadataTitle: "Schedule – Papillon",
      metadataDescription:
        "Your schedule, always up to date: canceled and changed classes, rooms, teachers, Live Activities and widgets. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        title: "Your day, one class at a time.",
        description:
          "Papillon keeps your schedule up to date, flags canceled or changed classes and follows you all the way to your Lock Screen.",
        imageAlt: "Thursday, October 8 in Papillon’s schedule, with a lunch break and a canceled class",
      },
      highlights: {
        day: {
          title: "Changes stand out.",
          description:
            "Class canceled or moved? You’ll see it right in your day. Room, teacher, length: it’s all there, breaks included.",
          points: [
            "Canceled and changed classes flagged",
            "Room, teacher and length of every class",
            "Breaks and lunch included",
          ],
          imageAlt: "Thursday, October 8, with a lunch break and a canceled Economics class",
        },
        views: {
          title: "List or week, your call.",
          description:
            "Stick with the List view to follow your day, or switch to the Week view to see every class at once. It’s just one menu away.",
          points: ["List view, day by day", "Week view, in beta", "All your iCal calendars in one place"],
          imageAlt: "The schedule’s View menu, with the List and Week options",
        },
        calendar: {
          title: "Jump to any day.",
          description:
            "Swipe from one day to the next, or open the calendar to go straight to the date you need, whether it’s a test in two weeks or the first day back from break.",
          points: [
            "Swipe to the next day",
            "Full month view in one tap",
            "Back to today in one tap",
          ],
          imageAlt: "The month calendar open on Tuesday, October 13",
        },
        detail: {
          title: "Every class, up close.",
          description:
            "Tap a class to see when it starts and ends, how long until it begins, the room and the teacher. Papillon recognizes over 250 subjects, even when they’re abbreviated or in all caps, and gives each a clean name, an emoji and a color.",
          points: [
            "Start time, end time and length",
            "Room and teacher",
            "Names, emojis and colors set automatically",
          ],
          imageAlt: "Details of a one-hour History & Geography class in room C 018 with Mme Bernard",
        },
        live: {
          title: "Your class, on your Lock Screen.",
          description:
            "On iPhone, your current or next class shows up live on the Lock Screen and in the Dynamic Island, with the room and time remaining. No need to open the app between classes.",
          points: ["Live countdown", "Room and teacher", "In the Dynamic Island"],
          imageAlt: "An iPhone Lock Screen showing the current History & Geography class and the time remaining",
        },
        widget: {
          title: "Your next classes, right on your Home Screen.",
          description:
            "Add the Papillon widget to your iPhone’s Home Screen and see your upcoming classes without even opening the app.",
          points: ["Upcoming classes at a glance", "Always up to date"],
          imageAlt: "An iPhone Home Screen with the Papillon widget showing tomorrow’s classes",
        },
      },
      more: {
        title: "Also",
        items: {
          home: {
            title: "Right on the home screen",
            description: "Today’s or tomorrow’s classes are there the moment you open the app.",
          },
          offline: {
            title: "Offline",
            description: "Your schedule is always available, even without a connection.",
          },
          ical: {
            title: "iCal calendars",
            description: "Add your iCal calendars and see them alongside your classes.",
          },
          devices: {
            title: "Big screen",
            description: "On iPad and Mac, your whole week fits on one screen.",
          },
          personal: {
            title: "Make it yours",
            description: "Change any subject’s name, emoji and color.",
          },
          private: {
            title: "Private",
            description: "Your schedule stays on your device, never on our servers.",
          },
        },
      },
      faq: {
        title: "Schedule FAQ",
        description:
          "Everything you need to know about your schedule in Papillon. Still have questions? Reach us at support@papillon.bzh.",
        items: [
          {
            emoji: "🔄",
            question: "Do last-minute changes show up?",
            answer:
              "Yes. Canceled classes, schedule changes and room changes show up as soon as your school posts them on Pronote, ÉcoleDirecte or Skolengo.",
          },
          {
            emoji: "🔒",
            question: "How do I turn on Live Activities?",
            answer:
              "On iPhone, open Papillon’s settings and turn on Live Activities. Your current or next class will then appear on the Lock Screen and in the Dynamic Island.",
          },
          {
            emoji: "📱",
            question: "How do I add the widget?",
            answer:
              "Touch and hold your iPhone’s Home Screen, tap “+” at the top, then search for Papillon and choose the widget.",
          },
          {
            emoji: "🗓️",
            question: "Can I see my whole week?",
            answer:
              "Yes. In the Schedule tab, tap “…” in the top-right corner and choose Week view. It’s still in beta.",
          },
          {
            emoji: "✨",
            question: "Why do my subjects have different names?",
            answer:
              "Papillon automatically recognizes your subjects, even when your school abbreviates them or writes them in all caps, and gives each a clean name, an emoji and a color. You can change any of it.",
          },
          {
            emoji: "📶",
            question: "Can I see my schedule offline?",
            answer: "Yes. Once your schedule has loaded, it’s saved on your device and available offline.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for any of this?",
            answer: "Nope. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      largeScreen: {
        title: "Your whole week, on one screen.",
        description:
          "On iPad and Mac, the Week view shows every class from Monday to Friday at a glance, canceled ones included. Use the sidebar to jump between tabs.",
        imageAlt: "The week of October 5 in Papillon’s schedule on an iPad Pro",
      },
      cta: {
        title: "Your next class, already in your pocket.",
        description:
          "Install Papillon and sign in with your school login. Your schedule shows up in seconds.",
      },
    },
    homework: {
      metadataTitle: "Homework – Papillon",
      metadataDescription:
        "All your homework, week by week, sorted by due date or subject and ready to check off. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        title: "What’s due, and when.",
        description:
          "Papillon gathers your homework week by week, lets you check it off when you’re done and shows you what’s coming up at a glance.",
        imageAlt: "Week 41 homework in Papillon, sorted by due date",
      },
      highlights: {
        week: {
          title: "Your whole week, day by day.",
          description:
            "Your homework is sorted by due date, with the subject and how much time you have left. Swipe to see next week.",
          points: [
            "Sorted by due date",
            "“Tomorrow,” “in 2 days”: deadlines in plain English",
            "Next week, one swipe away",
          ],
          imageAlt: "Homework from Monday, October 5 to Wednesday, October 7, one assignment already done",
        },
        done: {
          title: "Check it off. Done.",
          description:
            "Mark an assignment as done with one tap, from the list or the assignment itself. You always know what’s left before tomorrow.",
          points: [
            "Done in one tap",
            "Full instructions on every assignment",
            "Your teachers’ attachments",
          ],
          imageAlt: "A History & Geography assignment, marked as done",
        },
        sort: {
          title: "Sort it your way.",
          description:
            "Sort your homework by due date or subject, or show unfinished work first. Looking for specific instructions? Just search.",
          points: [
            "By due date or subject",
            "Unfinished work first",
            "Search all your homework",
          ],
          imageAlt: "The homework sort menu: due date, subject, not done",
        },
      },
      more: {
        title: "Also",
        items: {
          subjects: {
            title: "Smart subjects",
            description:
              "Over 250 subjects recognized automatically, even abbreviated, each with a clean name, an emoji and a color.",
          },
          home: {
            title: "Right on the home screen",
            description: "Your to-do list is there the moment you open the app.",
          },
          attachments: {
            title: "Attachments",
            description: "Files your teachers attach are right there in the assignment.",
          },
          search: {
            title: "Search",
            description: "Find any assignment by typing a word from the instructions or the subject name.",
          },
          offline: {
            title: "Offline",
            description: "Your homework is always available, even without a connection.",
          },
          private: {
            title: "Private",
            description: "Your homework stays on your device, never on our servers.",
          },
        },
      },
      faq: {
        title: "Homework FAQ",
        description:
          "Everything you need to know about homework in Papillon. Still have questions? Reach us at support@papillon.bzh.",
        items: [
          {
            emoji: "📥",
            question: "Where does my homework come from?",
            answer:
              "Papillon pulls the homework your teachers post on Pronote, ÉcoleDirecte or Skolengo, straight from your school.",
          },
          {
            emoji: "📆",
            question: "Can I see homework for the weeks ahead?",
            answer: "Yes. Swipe left or right on the list to move between weeks.",
          },
          {
            emoji: "📎",
            question: "Can I open attachments?",
            answer: "Yes. Open an assignment to see the full instructions and any files your teacher attached.",
          },
          {
            emoji: "✨",
            question: "Where do the subject emojis come from?",
            answer:
              "Papillon automatically recognizes your subjects and gives each a clean name, an emoji and a color. You can change any of it.",
          },
          {
            emoji: "📶",
            question: "Can I see my homework offline?",
            answer: "Yes. Once your homework has loaded, it’s saved on your device and available offline.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for any of this?",
            answer: "Nope. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      cta: {
        title: "No more “wait, did we have homework?”",
        description:
          "Install Papillon and sign in with your school login. Your homework shows up in seconds.",
      },
    },
    news: {
      metadataTitle: "News – Papillon",
      metadataDescription:
        "Your school’s announcements in one clean feed, easy to read on your phone. Free, works with Pronote, ÉcoleDirecte and Skolengo.",
      hero: {
        title: "Never miss a school announcement.",
        description:
          "Meetings, sign-ups, field trips: Papillon brings your school’s announcements together in one clean feed, made for reading on your phone.",
        imageAlt: "The school news feed in Papillon",
      },
      highlights: {
        list: {
          title: "Every announcement, in one place.",
          description:
            "Each post shows who wrote it, when, and a preview of the message. The latest are at the top, and search finds any announcement in an instant.",
          points: ["Author and date", "Message preview", "Search all announcements"],
          imageAlt: "Four announcements: parent-teacher conferences, the library, the sports club and a charity drive",
        },
        detail: {
          title: "Easy on the eyes.",
          description:
            "Open a post to read it in full, formatted for your screen. Its category is shown up top, so you know right away what it’s about.",
          points: ["Text formatted for your phone", "Category, author and date up top"],
          imageAlt: "The “Sports club sign-ups” announcement, posted by the student affairs office",
        },
      },
      more: {
        title: "Also",
        items: {
          home: {
            title: "Right on the home screen",
            description: "The latest announcements appear on the app’s home screen.",
          },
          offline: {
            title: "Offline",
            description: "Announcements you’ve already loaded stay readable without a connection.",
          },
          private: {
            title: "Private",
            description: "Your school’s announcements stay on your device, never on our servers.",
          },
        },
      },
      faq: {
        title: "News FAQ",
        description:
          "Everything you need to know about news in Papillon. Still have questions? Reach us at support@papillon.bzh.",
        items: [
          {
            emoji: "📥",
            question: "Where do announcements come from?",
            answer:
              "They’re what your school posts on Pronote, ÉcoleDirecte or Skolengo. Papillon fetches them directly, with no middleman.",
          },
          {
            emoji: "📊",
            question: "Can I answer polls?",
            answer:
              "Not yet, since Pronote doesn’t allow it for now. Papillon lets you know when a post includes a poll.",
          },
          {
            emoji: "🛠️",
            question: "A post looks off. What can I do?",
            answer:
              "At the bottom of every post, you can turn off automatic formatting to see it exactly as it was published.",
          },
          {
            emoji: "📶",
            question: "Can I read announcements offline?",
            answer: "Yes. Once announcements have loaded, they’re saved on your device and available offline.",
          },
          {
            emoji: "💸",
            question: "Do I have to pay for any of this?",
            answer: "Nope. Everything is free, with no ads and no subscription.",
          },
        ],
      },
      cta: {
        title: "Stay in the loop.",
        description:
          "Install Papillon and sign in with your school login. Your school’s announcements show up in seconds.",
      },
    },
  },
  linksPage: {
    metadataTitle: "Our links – Papillon",
    title: "Papillon",
    description: "The school app that makes student life simpler. Find us everywhere below.",
    otherOptions: "Beta builds and other options",
    groups: {
      community: {
        title: "Community",
        links: {
          discord: { title: "Discord", description: "The community server" },
          instagram: { title: "Instagram", description: "@thepapillonapp" },
          tiktok: { title: "TikTok", description: "@thepapillonapp" },
          x: { title: "X", description: "@thepapillonapp" },
          youtube: { title: "YouTube", description: "@thepapillonapp" },
          linkedin: { title: "LinkedIn", description: "Papillon" },
        },
      },
      project: {
        title: "The project",
        links: {
          docs: { title: "Documentation", description: "Guides and help" },
          github: { title: "GitHub", description: "The code, open to everyone" },
          donate: { title: "Ko-fi", description: "Support the project" },
        },
      },
    },
  },
  notFound: {
    metadataTitle: "Page not found – Papillon",
    label: "Error 404 · Unexcused absence",
    title: "This page is skipping class.",
    description:
      "We looked everywhere: study hall, the library, even the cafeteria. It flew off without leaving a note.",
    home: "Back to home",
    hint: "Try to catch the butterfly.",
  },
  footer: {
    team: {
      title: "A team with a vision for school",
      description:
        "Papillon is run by a nonprofit of students and young developers. We believe school life should revolve around students, and we’re building it together, in the open.",
      about: "Meet the team",
      linkedin: "LinkedIn",
      photoAlt: "The Papillon team",
    },
    association: "Papillon (nonprofit)",
    copyright: "© 2026 Papillon & contributors. All rights reserved.",
    columns: {
      product: {
        title: "Features",
        links: {
          grades: "Grades",
          schedule: "Schedule",
          homework: "Homework",
          news: "News",
        },
      },
      about: {
        title: "About",
        links: {
          team: "Meet the team",
          story: "Our story",
          donate: "Donate",
          privacy: "Privacy",
        },
      },
      developers: {
        title: "Developers",
        links: {
          docs: "Docs",
          github: "GitHub",
        },
      },
      social: {
        title: "Follow us",
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
  story: {
    placeholder: "Screenshot needed",
    timeline: [
      { date: "2021", title: "An app for friends", text: "The first version is written in the evenings after class, for a handful of friends." },
      { date: "2022", title: "The code goes open source", text: "Anyone can read the code and suggest changes. A community starts to form on GitHub and Discord." },
      { date: "2023", title: "Finally on the stores", text: "Donations from the community pay for Papillon’s release on the App Store and Google Play." },
      { date: "September 2024", title: "Version 7, rebuilt from scratch", text: "Tom redesigns the whole app, including its visual identity." },
      { date: "December 2024", title: "Number 1 on the App Store", text: "Papillon passes 100,000 downloads and spends a week at the top of the French App Store." },
      { date: "May 2025", title: "A million downloads", text: "Still not a single ad. The app is still free." },
      { date: "August 2025", title: "We start an association", text: "Papillon becomes a nonprofit run by high school and university students, so the project can last." },
      { date: "September 2025", title: "Version 8", text: "A big update: the app is faster and does more." },
      { date: "January 2026", title: "Heading to university", text: "We start adapting Papillon for university students." },
      { date: "September 2026", title: "iPad, iPhone Duo and Mac", text: "Papillon comes to iPad and Mac, and adapts to the foldable screen of the iPhone Duo." },
    ],
    vinceQuote:
      "I started Papillon in 2021 because I wanted to see my average without digging through three menus. Five years later, we’re still students writing code for other students, and the code is still open. That part isn’t changing.",
    metadataTitle: "Our story – Papillon",
    download: "Download",
    hero: {
      title: "How it all started",
      devicesAlt: "Papillon on Pixel, iPad, iPhone Duo and iPhone",
      description:
        "Papillon started in 2021, between homework assignments. Five years later, it has been downloaded more than 1.8 million times.",
    },
    timelineLabel: "Papillon’s milestones, from 2021 to today",
    placeholders: {
      first: "the first version of Papillon in 2021, original screenshot",
      stores: "Papillon’s App Store page in 2023",
      v7: "Papillon v7 home screen, September 2024",
      ranking: "French App Store chart with Papillon at number 1, December 2024",
      million: "image posted for the millionth download, May 2025",
      universities: "university sign-in screen, in development",
    },
    images: {
      openSource: "A team member writing code on a laptop",
      association: "The six members of the Papillon team",
      v8: "The Papillon v8 home screen",
      devices: "Papillon on an iPad Pro, showing the week view",
    },
    vision: {
      title: "What’s next?",
      description:
        "The association wants every student, from middle school to university, to have an app that’s free, fast and respects their privacy. The code stays open, and we keep building it with the community.",
    },
    cta: {
      description: "Papillon is free, with no ads.",
    },
  },
};

export default en;
