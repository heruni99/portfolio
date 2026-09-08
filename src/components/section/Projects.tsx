import { useState } from "react";
import { projects, type ProjectCategory } from "../../data/projects";

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
    <section id="projects" className="bg-bgAlt px-12 py-24 max-md:px-6 max-md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 font-mono text-base text-roseDeep">projects</p>
        <h2 className="mb-10 text-4xl font-semibold tracking-tight">Things I've built</h2>

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                active === f.value
                  ? "border-rose bg-rose text-white shadow-md"
                  : "border-line bg-bg text-inkSoft hover:border-rose"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
          {visible.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col gap-4 rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:border-rose hover:shadow-lg ${
                project.featured ? "border-rose bg-roseWash" : "border-line bg-bg"
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-roseDeep">{project.tag}</span>
              <h3 className="text-xl font-bold text-ink">{project.name}</h3>
              <p className="flex-grow text-base leading-relaxed text-inkSoft">{project.description}</p>
              <div className="flex flex-wrap gap-2.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs font-medium text-inkSoft">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex gap-5">
                {project.demoUrl && (
                  <a href={project.demoUrl} className="text-sm font-semibold text-roseDeep hover:underline">
                    Live demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-sm font-semibold text-roseDeep hover:underline">
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
