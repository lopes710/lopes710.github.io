export const siteConfig = {
  name: "Duarte Lopes",
  title: "Senior iOS Developer (Swift, Objective-C) · Android (Kotlin) · Flutter (Dart) · Flask (Python)",
  description: "Portfolio website of Duarte Lopes — iOS, Flutter & Python Developer with 10+ years of mobile experience.",
  accentColor: "#00bcd4", // you can change this to match your style

  social: {
    email: "duarte.lopes85@gmail.com",
    linkedin: "https://linkedin.com/in/DuarteSantosLopes",
    twitter: "", // leave empty if unused
    github: "https://github.com/lopes710",
  },

  aboutMe:
    "I'm a mobile developer with 10+ years of iOS experience and 2+ years working with Flutter and Python. I've worked on high-impact apps at Farfetch, Fuse Energy, and Betfair. My recent work involves AI-driven features, Stripe payments, and full-stack development with Flask.",

  skills: [
    "iOS", "Swift", "Objective-C", "SwiftUI", "UIKit",
    "Android", "Kotlin", "Jetpack Compose",
    "Flutter", "Dart",
    "Python", "Flask",
    "Stripe", "Plaid",
    "MediaPipe", "Gemini AI",
    "Firebase", "REST APIs", "Docker"
  ],

  projects: [
    {
      name: "Medical Face AI Analyzer",
      description:
        "Flutter app using MediaPipe and Gemini AI to detect and interactively select facial regions for aesthetic analysis.",
      link: "/projects/face-ai-analyzer",
      skills: ["Flutter", "Dart", "MediaPipe"],
    },
    {
      name: "Stripe Payment Flow",
      description:
        "Implemented in-app payment flow with saved cards using Stripe Elements and PaymentIntents API in Flutter.",
      link: "/projects/stripe-payment-flow",
      skills: ["Flutter", "Dart", "Stripe"],
    },
    {
      name: "Voice Judging Reporter",
      description:
        "Flutter app for dog show judges to record and transcribe voice reports using Gemini AI and generate structured reports.",
      link: "projects/voice-judging-reporter",
      skills: ["Flutter", "Gemini AI", "Transcription"],
    },
    {
      name: "Fuse Energy App",
      description:
        "Cross-platform energy app with Stripe and Plaid integration, developed in SwiftUI and Kotlin with KMM shared code.",
      link: "https://apps.apple.com/gb/app/fuse-energy/id1618056244",
      skills: ["SwiftUI", "Kotlin", "Stripe", "Plaid", "KMM"],
    },
  ],

  experience: [
    {
      company: "Ampera Vision",
      title: "Full-Stack Developer (Flutter & Flask)",
      dateRange: "Mar 2024 – Present",
      bullets: [
        "Built mobile UIs with complex forms, drag-and-drop, paging, and validation using Flutter.",
        "Created form builder and renderer tools based on JSON schemas.",
        "Integrated MediaPipe and Gemini AI for facial analysis features.",
        "Developed REST APIs with Flask, SQLAlchemy, and JWT auth.",
        "Implemented Stripe payment flows and voice-to-text AI features.",
      ],
    },
    {
      company: "Fuse Energy",
      title: "iOS/Android Developer",
      dateRange: "Feb 2022 – Dec 2023",
      bullets: [
        "Led SwiftUI-based iOS development for a green energy app with 3.5K+ users in 3 months.",
        "Developed Android version using Kotlin + Jetpack Compose.",
        "Integrated Plaid and Stripe, set up Apple developer portal, and handled App Store release.",
        "Built unit, UI, and integration test suites; led agile ceremonies and hiring process.",
      ],
    },
    {
      company: "Farfetch",
      title: "iOS Developer",
      dateRange: "Apr 2017 – Feb 2022",
      bullets: [
        "Built scalable internal and public-facing apps including 'Store of the Future' and Farfetch Shopping App.",
        "Developed Fastlane scripts, SDKs, and unit/UI tests.",
        "Worked with Objective-C, Swift, Combine, and VIPER architecture.",
      ],
    },
    {
      company: "Betvictor / Betfair / Pocket Science / Xpand-IT",
      title: "iOS Developer",
      dateRange: "2012 – 2016",
      bullets: [
        "Developed apps for top UK betting companies and major brands like RedBull and Vienna State Opera.",
        "Handled UI/UX, video streaming, QR scanning, REST integrations, and iOS infrastructure tasks.",
      ],
    },
  ],

  education: [
    {
      school: "ISEP – Instituto Superior de Engenharia do Porto",
      degree: "Master's in Graphic Systems & Multimedia",
      dateRange: "2007 – 2009",
      achievements: ["Erasmus at BRNO University of Technology, Czechia"],
    },
    {
      school: "ISEP – Instituto Superior de Engenharia do Porto",
      degree: "Bachelor's in Computer Science",
      dateRange: "2003 – 2007",
      achievements: [],
    },
  ],
};