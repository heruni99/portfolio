export interface Skill {
  name: string;
  icon?: string;
  isSvg?: boolean;
}

export const skills: Skill[] = [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "shadcn/ui", isSvg: true },
  { name: "Canva", icon: "devicon-canva-original colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Vercel", icon: "devicon-vercel-original" },
];
