export const siteConfig = {
  name: "Duarte Lopes",
  title: "Senior iOS Developer (Swift, Objective-C) · Android (Kotlin) · Flutter (Dart) · Flask (Python)",
  description: "Portfolio website of Duarte Lopes — iOS, Flutter & Python Developer with 10+ years of mobile experience.",
  accentColor: "#00bcd4",

  social: {
    email: "duarte.lopes85@gmail.com",
    linkedin: "https://linkedin.com/in/DuarteSantosLopes",
    twitter: "",
    github: "https://github.com/lopes710",
  },

  aboutMe:
    "I'm a mobile developer with 10+ years of iOS experience and around 1.5 years working with Flutter and Python. I've worked on high-impact apps at Farfetch, Fuse Energy, and Betfair. My recent work involves AI-driven features, Stripe payments, and full-stack development with Flask.",

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
      skills: ["Flutter", "Dart", "Gemini AI", "Transcription"],
    },
    {
      name: "Event Stage & Seat Editor",
      description:
        "Interactive editor to create event layouts with customizable stages and seat zones. Supports stage color coding, labels, and multi-seat selection for ticketing.",
      link: "/projects/event-editor",
      skills: ["Flutter", "Dart", "Custom UI", "Animations"],
    },
    {
      name: "Medical Aesthetic Clinic UI",
      description:
        "Flutter UI for tracking sleep, hydration, and activity with custom animations, graphs, and calendar — all built programmatically.",
      link: "/projects/clinic-ui",
      skills: ["Flutter", "Dart", "Animations", "Charts", "Custom Calendar"],
    },
    {
      name: "JSON Import/Export Editor",
      description:
        "Flutter-based admin tool to import/export structured JSON data and sync it with a backend database. Includes backend validation, and live updates.",
      link: "/projects/json-import-export",
      skills: ["Flutter", "Dart", "JSON", "Backend Sync"],
    },
    {
      name: "Fuse Energy App",
      description:
        "Cross-platform energy app with Stripe and Plaid integration, developed in SwiftUI and Kotlin with KMM shared code.",
      link: "https://apps.apple.com/gb/app/fuse-energy/id1618056244",
      skills: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Stripe", "Plaid", "KMM"],
    },
  ],

  experience: [
    {
      company: "Ampera Vision",
      title: "Full-Stack Developer (Flutter & Flask)",
      dateRange: "Mar 2024 – Present",
      bullets: [
        "Developed and maintained Flutter mobile apps using Dart, Beamer, and flutter_bloc.",
        "Built complex UIs with nested forms, drag-and-drop, paging, and validation logic.",
        "Created a dynamic form builder and renderer tool based on JSON schemas.",
        "Integrated MediaPipe for facial analysis with interactive mesh-based region selection.",
        "Implemented in-app payments with Stripe Elements and PaymentIntents API, including saved cards.",
        "Built reusable UI components and animated layouts for medical and aesthetic tools.",
        "Integrated google_generative_ai for voice-to-text transcription and report generation.",
        "Designed RESTful APIs in Flask with SQLAlchemy models and JWT-secured endpoints.",
        "Worked across the full stack to deliver frontend and backend features using Flutter and Flask.",
      ],
    },
    {
      company: "Fuse Energy",
      title: "iOS/Android Developer",
      dateRange: "Feb 2022 – Dec 2023",
      bullets: [
        "Initiated and led the development of the Fuse Energy iOS app from scratch using SwiftUI and MVVM — released on the App Store (4.5★ rating).",
        "Designed UI screens with MVVM architecture, implementing custom navigation, persistent storage, push notifications, and deep linking.",
        "Built an abstract network layer to enable flexible integration with other networking frameworks.",
        "Integrated third-party frameworks (Stripe, Plaid, customer support) via Swift Package Manager.",
        "Integrated Plaid to securely connect user bank accounts and Stripe for in-app payments using PaymentIntents and saved cards.",
        "Contributed to the Android app using Kotlin, Jetpack Compose, and MVVM — enabling cross-platform consistency.",
        "Implemented Kotlin Multiplatform (KMM) to share business logic between Android and iOS platforms.",
        "Set up and managed build configurations for development and production, including CI pipelines and TestFlight distribution.",
        "Registered the company in Apple’s Developer Program and managed App Store Connect, certificates, identifiers, and provisioning profiles.",
        "Established a solid foundation for unit testing, mock data, and developed UI and integration test suites.",
        "Participated in product design reviews and led hiring processes for iOS, Android, and backend roles.",
        "Demonstrated Agile ownership by leading standups, sprint planning, retrospectives, and task prioritization.",
      ],
    },
    {
      company: "Farfetch",
      title: "iOS Developer",
      dateRange: "Apr 2017 – Feb 2022",
      bullets: [
        "Developed the 'Store of the Future' app from scratch, actively contributing to architectural and design decisions.",
        "Built features enabling sales assistants to access customer data, send recommendations, and handle in-store payments.",
        "Created new UI screens, custom animations, and data parsing logic with performance optimizations.",
        "Wrote comprehensive unit, snapshot, and UI tests — including defining a scalable UI Test architecture.",
        "Added performance tests to key app areas and contributed to test stability across CI runs.",
        "Developed Fastlane scripts to automate Xcode configuration switching for different client builds.",
        "Created a macOS app to manage Fastlane script execution and streamline developer workflows.",
        "Released multiple production versions of the app and handled App Store submissions.",
        "Onboarded new iOS developers and supported team scaling efforts.",
        "Worked across Objective-C and Swift codebases, maintaining legacy frameworks and building new SDKs as CocoaPods.",
        "Implemented screens and navigation flows using VIPER architecture and Combine for reactive data flows.",
      ],
    },
    {
      company: "Betvictor / Betfair / Pocket Science / Xpand-IT",
      title: "iOS Developer",
      dateRange: "2012 – 2016",
      bullets: [
        "Developed and maintained betting apps like Betvictor and Betfair Sportsbook — including payments, video, sports odds, and casino games.",
        "Led development of the horse racing section in Betvictor’s app, including UI, HTTP requests, cloud event tracking, and video streaming.",
        "Worked in vertical agile teams with ownership over full-feature modules; contributed in both SCRUM and Kanban environments.",
        "Implemented modular architecture allowing feature toggles with minimal impact, improving scalability and performance.",
        "Built unit tests, performance tests, and custom UI testing frameworks; used Xcode, GitLab, Jira, and Confluence in cross-functional teams.",
        "Refactored legacy codebases and migrated layouts from frames to AutoLayout (StaatsoperLive – Vienna State Opera app).",
        "Integrated 3rd-party video streaming with multi-language subtitle support for global audiences (StaatsoperLive).",
        "Created drag-and-drop UI interactions in RedBull internal app and later open-sourced the system as a GitHub library (DragNDrop).",
        "Implemented QR scanning, in-app purchases, and CMS-driven UI customization (SPAR Mahlzeit!, LeafShelf).",
        "Built REST integrations, PDF downloads with progress tracking, and cross-client CI flows (Xpand-it projects).",
        "Technologies: Objective-C, UIKit, AutoLayout, CoreData, REST APIs, GitLab, Fastlane, Xcode Server, MVVM, Rally, SourceTree.",
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