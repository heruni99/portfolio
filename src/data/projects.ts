export type ProjectCategory = "fullstack" | "frontend" | "backend" | "mobile";

export interface Project {
  id: string;
  name: string;
  tag: string;
  category: ProjectCategory;
  role?: string;
  subtitle?: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  webHeroImage?: string;
}

export const projects: Project[] = [
  {
    id: "waveform",
    name: "Waveform",
    subtitle: "Neuromodulation & Mental Wellness Platform",
    tag: "Flagship Project · Web & Mobile",
    category: "frontend",
    role: "Frontend Developer (Web + Mobile App)",
    description:
      "A university group project combining EEG-based brainwave monitoring with digital wellness tools to help young adults manage stress, anxiety, and mild depressive symptoms through real-time signal tracking, calming audio therapy, guided micro-challenges, and wearable device integration.",
    stack: [
      "React Native",
      "Redux Toolkit",
      "Python",
      "JavaScript",
      "HTML",
      "Java",
      "Ruby",
      "TypeScript",
    ],
    demoUrl: "https://waveform-medcap.vercel.app/",
    featured: true,
    webHeroImage: "/projects/waveform/waveform-web-hero.png",
  },
];
