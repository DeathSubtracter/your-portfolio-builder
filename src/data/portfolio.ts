import type { ItemKind } from "@/components/PixelItem";

export const profile = {
  name: "Ky Hoang",
  university: "University of California, Berkeley",
  degree: "Bachelor of Arts in Data Science",
  graduation: "Expected May 2028",
  subtitle: "Data Science @ UC Berkeley · Aspiring Software Engineer",
  direction: "Aspiring Software Engineer",
  introduction: "I build software for practical problems, from searching personal journals to extracting text from images and exploring procedurally generated worlds.",
  email: "kyhoangg@berkeley.edu",
  github: "https://github.com/DeathSubtracter",
  linkedin: "https://www.linkedin.com/in/ky-m-hoang",
  resume: "",
};

export const music = {
  title: "Sweden",
  artist: "C418",
  src: "/audio/sweden-c418.mp3",
  creditUrl: "https://c418.bandcamp.com/track/sweden",
  defaultVolume: 0.25,
};

// Decorative title-screen copy, not a personal accomplishment or statistic.
export const splashPhrases = ["Built with curiosity!", "Data Structures Included!"];

type Project = {
  id: string; title: string; date: string; description: string;
  technologies: string[]; category: string; icon: ItemKind;
  award?: string; qualification?: string; highlights: string[];
  github: string; demo: string;
};

export const projects: Project[] = [
  {
    id: "nestwatch", title: "Nestwatch", date: "October 2026", icon: "chart", category: "Health monitoring",
    technologies: ["Python", "FastAPI", "scikit-learn", "React", "TypeScript"],
    description: "A health-monitoring project that combines wearable data with pregnancy and medication context to present patient trends, timelines, and forecasts trained on synthetic data.",
    award: "Best Human Impact Award · UC Berkeley Innovation Intelligence Hackathon",
    qualification: "Forecasting models were trained on synthetic data; no clinical validation or real-patient deployment is claimed.",
    highlights: [
      "Built a FastAPI backend integrating normalized wearable data and exposing REST APIs for trends, timelines, and forecasts trained on synthetic data.",
      "Developed explainable monitoring across five physiological signal groups using patient-specific baselines and three-day persistence rules.",
      "Built more than 170 pytest test functions covering backend reliability.",
      "Trained Ridge and Logistic Regression models on synthetic data to forecast 288 glucose readings over 24 hours and blood-pressure threshold events over seven days.",
    ], github: "", demo: "",
  },
  {
    id: "journal-rag", title: "Journal RAG", date: "Summer 2026", icon: "book", category: "Information retrieval",
    technologies: ["Python", "FastAPI", "React", "ChromaDB", "Gemini API"],
    description: "A full-stack application that searches Notion journal entries and answers natural-language questions with source citations.",
    highlights: [
      "Combined vector and BM25 retrieval using reciprocal-rank fusion and date-aware filtering.",
      "Built an agent workflow with conversational query rewriting, iterative retrieval, and deterministic counting for follow-up and quantitative questions.",
      "Added automated evaluation and GitHub Actions regression checks.",
    ], github: "", demo: "",
  },
  {
    id: "build-your-own-world", title: "Build Your Own World", date: "Summer 2026", icon: "tree", category: "Collaborative coursework · CS 61BL",
    technologies: ["Java", "Git"],
    description: "A Java exploration game, co-developed with a partner for CS 61BL, with seeded procedural worlds, randomized rooms and hallways, and persistent save/load.",
    highlights: [
      "Co-developed the game with a partner as a collaborative CS 61BL coursework project.",
      "Implemented shortest-path navigation using priority queues, hash maps, and graph traversal.",
      "Added keyboard-driven exploration and persistence so generated worlds can be resumed across sessions.",
    ], github: "", demo: "",
  },
  {
    id: "quickcapture", title: "QuickCapture", date: "Spring 2026", icon: "compass", category: "Native macOS utility",
    technologies: ["Swift", "SwiftUI", "Apple Vision"],
    description: "A native macOS utility that turns text in screenshots and images into editable, copyable text.",
    highlights: [
      "Implemented image import, editable OCR results, and clipboard export.",
      "Added locally persisted OCR history.",
      "Tested recognition and history persistence across varied image inputs, with explicit error handling for recognition failures.",
    ], github: "", demo: "",
  },
];

export const experience = [
  { id: "apple-operations", organization: "Apple", role: "Operations Specialist", dates: "January 2026–Present", location: "San Jose, CA", icon: "pickaxe", description: "Processed 2,766 internal support requests—the team’s highest quarterly volume—while maintaining 99% on-time performance against a two-minute service target." },
  { id: "apple-sales", organization: "Apple", role: "Sales Specialist", dates: "August 2025–January 2026", location: "San Jose, CA", icon: "compass", description: "Helped customers choose products through personalized recommendations, technical explanations, Apple Vision Pro demonstrations, and iCloud+ guidance. Supported Vietnamese-speaking customers by bridging language and technical communication gaps, and received positive feedback across more than 20 customer surveys." },
  { id: "data-8", organization: "University of California, Berkeley", role: "Volunteer DATA 8 Tutor", dates: "August–December 2023", location: "Berkeley, CA", icon: "book", description: "Tutored more than 30 students in Python-based data analysis, explaining programming concepts and debugging techniques to students with varying experience levels." },
  { id: "codeadvantage", organization: "CodeAdvantage", role: "Programming Instructor", dates: "", location: "San Jose, CA", icon: "code", description: "Taught K–8 students programming fundamentals through hands-on projects using Scratch, Python, Roblox Studio, and Minecraft modding, covering loops, conditionals, and functions." },
] satisfies { id: string; organization: string; role: string; dates: string; location: string; icon: ItemKind; description: string }[];

export const skillGroups = [
  { name: "Languages", icon: "sword", runes: "⍑ᒷリ ᓭ⚍リ", items: ["Java", "Python", "TypeScript", "Swift", "SQL", "HTML/CSS"] },
  { name: "Frameworks & Libraries", icon: "pickaxe", runes: "ᒲᔑ⊣╎ᓵ ᓭℸᔑᓵꖌ", items: ["React", "FastAPI", "Flask", "SwiftUI", "scikit-learn", "NumPy"] },
  { name: "Developer Tools & Databases", icon: "axe", runes: "ℸ𝙹𝙹ꖎᓭ ᔑリ↸ ᒲ𝙹∷ᒷ", items: ["Git", "GitHub Actions", "SQLite", "ChromaDB", "pytest", "JUnit", "Xcode"] },
] as const;

export const about = {
  paragraphs: [
    "I’m Ky, a Data Science student at UC Berkeley working toward a career in software engineering. My projects span full-stack applications, information retrieval, machine learning, native macOS tools, and procedural games. I enjoy turning ideas into working software and paying attention to testing and reliability.",
    "Outside my projects, I work in operations at Apple and have taught programming to Berkeley students and younger learners. Those experiences have given me practice explaining technical concepts and helping people with different backgrounds.",
  ],
  emblem: "UC BERKELEY",
  metadata: [{ label: "Degree", value: "BA · Data Science" }, { label: "Graduation", value: "May 2028 (expected)" }],
  tags: ["Software", "Data Science"],
  facts: [
    { label: "Education", value: "University of California, Berkeley", icon: "book", detail: "Bachelor of Arts in Data Science · Expected May 2028" },
    { label: "Work", value: "Operations Specialist · Apple", icon: "pickaxe", detail: "San Jose, CA · January 2026–Present" },
    { label: "Recognition", value: "Eagle Scout", icon: "crystal", detail: "Boy Scouts of America · 2019" },
  ],
} satisfies { paragraphs: string[]; emblem: string; metadata: { label: string; value: string }[]; tags: string[]; facts: { label: string; value: string; icon: ItemKind; detail: string }[] };

export const interfaceCopy = {
  enchantTitle: "Enchant", enchantHelper: "Technical inventory", skillsUnit: "skills",
  aboutFactsTitle: "Education & background", projectHighlightsTitle: "Project highlights", projectAwardLabel: "Project award",
  resumeUnavailable: "Current resume PDF unavailable.",
};

const pageCopy = {
  home: { title: "Ky Hoang — Aspiring Software Engineer", description: "Ky Hoang’s portfolio: UC Berkeley BA in Data Science, expected May 2028. Explore full-stack applications, retrieval, macOS tools, and procedural games.", path: "/" },
  projects: { title: "Projects — Ky Hoang", description: "Explore Nestwatch, Journal RAG, Build Your Own World, and QuickCapture: software projects by Ky Hoang, including collaborative coursework and synthetic-data forecasting.", path: "/projects" },
  experience: { title: "Experience — Ky Hoang", description: "Ky Hoang’s Apple operations and sales experience, volunteer DATA 8 tutoring at UC Berkeley, and programming instruction at CodeAdvantage.", path: "/experience" },
  skills: { title: "Skills — Ky Hoang", description: "Ky Hoang’s programming languages, frameworks, developer tools, and databases, including Java, Python, React, FastAPI, SwiftUI, and pytest.", path: "/skills" },
  about: { title: "About — Ky Hoang", description: "Meet Ky Hoang, an aspiring software engineer studying a BA in Data Science at UC Berkeley, expected May 2028, with experience in Apple operations and teaching.", path: "/about" },
};

export function portfolioHead(page: keyof typeof pageCopy) {
  const { title, description, path } = pageCopy[page];
  return {
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title }, { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
