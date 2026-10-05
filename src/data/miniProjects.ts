export interface MiniProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const miniProjects: MiniProject[] = [
  {
    id: "etch-a-sketch",
    name: "Etch-A-Sketch",
    description:
      "A browser-based drawing grid built with pure JavaScript and DOM manipulation. Supports adjustable grid size, a rainbow colour mode that cycles through the spectrum on every stroke, and a clear button to reset the canvas — all rendered with CSS Flexbox, no canvas element.",
    tags: ["JavaScript", "DOM Manipulation", "CSS Flexbox"],
    demoUrl: "https://heruni99.github.io/etch-a-sketch/",
    githubUrl: "https://github.com/heruni99/etch-a-sketch",
  },
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    description:
      "A browser-based Rock Paper Scissors game with score tracking, built with vanilla JavaScript and DOM manipulation.",
    tags: ["JavaScript", "DOM Manipulation", "CSS"],
    demoUrl: "https://heruni99.github.io/rock-paper-scissors/",
    githubUrl: "https://github.com/heruni99/rock-paper-scissors",
  },
];
