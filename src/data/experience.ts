export interface ExperienceItem {
  date: string;
  title: string;
  org: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    date: "2026 — present",
    title: "B.Sc. Computer Science",
    org: "Your University",
    points: [
      "Coursework in data structures, algorithms, and object-oriented design.",
      "Building independent full-stack projects alongside coursework.",
    ],
  },
  {
    date: "2025",
    title: "Campus hackathon / club role",
    org: "Name of hackathon or club",
    points: [
      "Replace with a real accomplishment — a hackathon placement, a club project, a freelance gig, anything with a concrete outcome.",
    ],
  },
];
