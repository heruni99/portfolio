import { useState } from "react";
import { projects, type ProjectCategory } from "../data/projects";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All projects", value: "all" },
  { label: "Full stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="bg-bgAlt px-12 py-20 max-md:px-6 max-md:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2.5 font-mono text-sm text-roseDeep">projects</p>
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">Things I've built</h2>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === f.value
                  ? "border-rose bg-rose text-white"
                  : "border-line bg-bg text-inkSoft hover:border-rose"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {visible.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col gap-3.5 rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:border-rose ${
                project.featured ? "border-rose bg-roseWash" : "border-line bg-bg"
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-roseDeep">{project.tag}</span>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="flex-grow text-sm text-inkSoft">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-xs text-inkSoft">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-1 flex gap-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} className="text-sm font-medium text-roseDeep hover:underline">
                    Live demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-sm font-medium text-roseDeep hover:underline">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
