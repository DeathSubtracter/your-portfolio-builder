export const profile = {
  name: "Ky Hoang",
  subtitle: "Data Science @ UC Berkeley",
  direction: "Aspiring Software Engineer",
  github: "",
  linkedin: "",
  resume: "",
};

export const music = {
  title: "Sweden",
  artist: "C418",
  // The supplied MP3 is hosted with the site, without an external audio dependency.
  src: "/audio/sweden-c418.mp3",
  creditUrl: "https://c418.bandcamp.com/track/sweden",
  defaultVolume: 0.25,
};

export const splashPhrases = [
  "Now with fewer segfaults!",
  "Data Structures Included!",
  "100% more bugs!",
  "Java-powered!",
  "Questionable commit messages!",
];

export const projects = [
  {
    id: "campus-compass",
    title: "Campus Compass",
    date: "2026",
    description:
      "A student-built planner for finding the right courses, study spaces, and campus resources.",
    technologies: ["React", "TypeScript", "Python"],
    status: "Playable",
    icon: "🧭",
    github: "",
    demo: "",
  },
  {
    id: "bear-market",
    title: "Bear Market",
    date: "2026",
    description:
      "A data storytelling project that turns market trends into clear, interactive visual explanations.",
    technologies: ["Python", "Pandas", "React"],
    status: "Beta",
    icon: "📈",
    github: "",
    demo: "",
  },
  {
    id: "study-stack",
    title: "Study Stack",
    date: "2025",
    description: "A focused study tracker with sessions, goals, and lightweight progress insights.",
    technologies: ["Swift", "SQLite"],
    status: "Local",
    icon: "📚",
    github: "",
    demo: "",
  },
  {
    id: "cal-insights",
    title: "Cal Insights",
    date: "2025",
    description: "An exploratory dashboard for understanding public university datasets.",
    technologies: ["SQL", "Python", "D3"],
    status: "Archived",
    icon: "🐻",
    github: "",
    demo: "",
  },
];

export const experience = [
  {
    organization: "Sample Technology Lab",
    role: "Software Engineering Intern",
    dates: "Summer 2026",
    location: "Berkeley, CA",
    description:
      "Placeholder: built and tested user-facing product features with a small engineering team.",
    ping: "48 ms",
  },
  {
    organization: "UC Berkeley",
    role: "Data Science Student",
    dates: "2024 — Present",
    location: "Berkeley, CA",
    description:
      "Studying data science while developing foundations in software engineering, statistics, and computing.",
    ping: "12 ms",
  },
  {
    organization: "Sample Student Organization",
    role: "Project Developer",
    dates: "2025 — Present",
    location: "Berkeley, CA",
    description:
      "Placeholder: collaborated on practical software projects serving the campus community.",
    ping: "31 ms",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    icon: "sword",
    runes: "⍑ᒷリ ᓭ⚍リ",
    items: ["Python", "Java", "Swift", "SQL", "TypeScript", "JavaScript"],
  },
  {
    name: "Frameworks & Libraries",
    icon: "pickaxe",
    runes: "ᒲᔑ⊣╎ᓵ ᓭℸᔑᓵꖌ",
    items: ["React", "SwiftUI", "Node.js", "Pandas"],
  },
  {
    name: "AI / Data",
    icon: "shovel",
    runes: "ᓭℸᔑℸ╎ᓭℸ╎ᓵᓭ",
    items: ["Machine Learning", "Statistics", "Jupyter", "Data Visualization"],
  },
  {
    name: "Tools & Infrastructure",
    icon: "axe",
    runes: "ℸ𝙹𝙹ꖎᓭ ᔑリ↸ ᒲ𝙹∷ᒷ",
    items: ["Git", "VS Code", "SQLite", "Figma"],
  },
] as const;

export const about = {
  paragraph:
    "Hey, I’m Ky! I’m a Data Science student at UC Berkeley working toward a career in software engineering. I enjoy turning messy problems into useful software and exploring the stories hidden in data. From building an interface to debugging a tricky algorithm, I like understanding how all the pieces fit together. I’m looking for opportunities to learn, build, and contribute to products people enjoy using.",
  metadata: [
    { label: "Studying", value: "Data Science" },
    { label: "At", value: "UC Berkeley" },
    { label: "Goal", value: "Software Engineering" },
  ],
  tags: ["Software", "Data", "AI"],
  current: [
    {
      label: "Learning",
      value: "Swift / SwiftUI",
      icon: "book",
      detail: "Exploring native app development and thoughtful interfaces.",
    },
    {
      label: "Building",
      value: "Personal software projects",
      icon: "pickaxe",
      detail: "Turning ideas into small, practical applications.",
    },
    {
      label: "Practicing",
      value: "Data structures & algorithms",
      icon: "sword",
      detail: "Strengthening problem-solving and computer science foundations.",
    },
    {
      label: "Exploring",
      value: "AI / software engineering",
      icon: "crystal",
      detail: "Learning where data and useful software meet.",
    },
  ],
};

export const interfaceCopy = {
  enchantTitle: "Enchant",
  enchantHelper: "Pick a tool to reveal its enchantments.",
  sampleNote: "Sample content",
  photoNote: "Photo not added yet",
};
