export type ProjectCategory = "fullstack" | "frontend" | "backend";

export interface Project {
  id: string;
  name: string;
  tag: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "applytrack",
    name: "ApplyTrack",
    tag: "Flagship project · Full stack",
    category: "fullstack",
    description:
      "A full-stack job application tracker with a drag-and-drop pipeline, resume uploads, automated deadline reminders, and an analytics dashboard — built to manage my own internship search.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "project-two",
    name: "Project two",
    tag: "Frontend",
    category: "frontend",
    description:
      "A short one-line description of what this project does and the problem it solves for its users.",
    stack: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-three",
    name: "Project three",
    tag: "Backend",
    category: "backend",
    description:
      "A short one-line description of what this project does and the problem it solves for its users.",
    stack: ["Python", "Flask"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
