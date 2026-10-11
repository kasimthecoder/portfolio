export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  status?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const profile = {
  name: "KASIM SAIFI",
  title: "Full Stack Developer / Product Builder",
  location: "Uttar Pradesh, India",
  about:
    "I build digital products that feel quiet, fast, and unmistakably clear. My work sits between product thinking, interface design, and strong engineering — from frontend experience to backend systems and deployment decisions.",
  email: "kasimthecoder@gmail.com",
  github: "https://github.com/kasimthecoder",
  linkedin: "https://www.linkedin.com/in/kasim-saifi-0a08b6237/",
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "kyrofeedback",
    number: "01",
    title: "KyroFeedback",
    category: "Product tools · Feedback",
    description:
      "A developer-focused feedback platform for collecting, organizing, and acting on product feedback across sessions and teams.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    highlights: [
      "A structured feedback capture and review workflow.",
      "An interface for teams to triage product feedback.",
    ],
    liveUrl: "https://www.feedback.kyrocms.com/",
  },
  {
    id: "kyrocms",
    number: "02",
    title: "KyroCMS",
    category: "Developer tools · CMS",
    description:
      "A lightweight headless CMS shaped around a modern developer workflow, with clear content structure and minimal operational overhead.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    highlights: [
      "Content modeling designed to stay easy to extend.",
      "A focused editing experience for structured content workflows.",
    ],
    liveUrl: "https://www.kyrocms.com/",
  },
  {
    id: "juclasses",
    number: "03",
    title: "JUClasses",
    category: "Education · Scheduling",
    description:
      "A university timetable and class information tool for Jaypee University, BCA Semester 1.",
    technologies: ["React", "JavaScript", "Node.js", "Tailwind CSS"],
    highlights: [
      "A mobile-first timetable designed for quick scanning.",
      "Class scheduling information presented with clarity.",
    ],
    liveUrl: "https://jubca.kasimsaifi.in",
  },
];

export const workSteps = [
  {
    title: "Understand",
    text: "Start with the people using it and the problem they need solved.",
  },
  {
    title: "Shape",
    text: "Give the product a clear structure before adding complexity.",
  },
  {
    title: "Build",
    text: "Connect considered interfaces with dependable systems underneath.",
  },
  {
    title: "Improve",
    text: "Ship, learn from use, and make the next version more useful.",
  },
];

export const skillGroups = [
  {
    label: "Frontend & UI",
    items: ["React", "Next.js", "Svelte", "Tailwind CSS", "UI Systems"],
  },
  { label: "Backend & data", items: ["Node.js", "PostgreSQL", "Prisma"] },
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  { label: "Product practice", items: ["Product Engineering"] },
];

export const blogPosts = [
  {
    title: "Designing Calm Interfaces",
    excerpt:
      "Notes on using spacing, type, and restraint to make developer tools easier to read.",
    date: "2026-06-01",
    readTime: "4 min read",
  },
  {
    title: "When to Reach for Server Components",
    excerpt:
      "A practical look at keeping data-heavy interfaces simple with the App Router.",
    date: "2026-05-18",
    readTime: "6 min read",
  },
  {
    title: "Building for Maintenance",
    excerpt:
      "Small architecture choices that help projects stay understandable as they grow.",
    date: "2026-04-27",
    readTime: "5 min read",
  },
];
