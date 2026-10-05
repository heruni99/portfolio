import { useState } from "react";
import { projects, type ProjectCategory } from "../../data/projects";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All projects", value: "all" },
  { label: "Frontend & Mobile", value: "frontend" },
  { label: "Full stack", value: "fullstack" },
  { label: "Backend", value: "backend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const visibleProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="px-6 py-20 md:px-12 md:py-24 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest font-bold text-rose">
          featured projects
        </p>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Things I&apos;ve Built
        </h2>
        <p className="mt-2 text-base text-inkSoft max-w-xl">
          Real-world applications crafted with modern architectures, intuitive UX, and full-stack engineering.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
              activeFilter === f.value
                ? "border-rose bg-rose text-white shadow-sm shadow-rose/20"
                : "border-line/70 glass-card text-inkSoft hover:border-rose/60 hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects 2-column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-line/70 glass-card shadow-lg transition-all duration-300 hover:border-rose/50 hover:shadow-xl hover:shadow-rose/5 flex flex-col"
          >
            {/* Full UI Screenshot */}
            {project.webHeroImage && (
              <a
                href={project.demoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group/img relative block overflow-hidden border-b border-line/50"
              >
                {/* Browser chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 border-b border-white/5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-500/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="ml-2 flex-1 rounded bg-slate-700/60 h-3.5 text-[8px] font-mono text-slate-400 px-2 flex items-center truncate opacity-70">
                    {project.demoUrl}
                  </span>
                </div>

                {/* Full image — no fixed height, no cropping */}
                <img
                  src={project.webHeroImage}
                  alt={`${project.name} UI preview`}
                  className="w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.02]"
                />

                {/* Category badge */}
                <div className="absolute top-10 right-3">
                  <span className="rounded-full bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {project.tag.split("·")[0].trim()}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                    Visit Live App
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            )}

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-5">
              {/* Name + links */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink leading-tight">
                    {project.name}
                  </h3>
                  {project.subtitle && (
                    <p className="font-mono text-[11px] font-semibold text-rose/80 tracking-wide mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="flex items-center justify-center w-7 h-7 rounded-lg border border-line/60 bg-slate-900/30 text-inkSoft transition-all hover:border-slate-500 hover:text-white hover:bg-slate-800/60"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="flex items-center justify-center w-7 h-7 rounded-lg border border-rose/30 bg-rose/10 text-rose transition-all hover:bg-rose hover:text-white hover:border-rose"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-inkSoft mt-2">
                {project.description}
              </p>

              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-line/40 space-y-2 mt-3">
                {project.role && (
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-inkSoft">
                    <span className="text-rose/70 mr-1">&#8618;</span>
                    {project.role}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line/50 bg-roseWash/30 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-inkSoft transition-colors hover:border-rose/40 hover:text-rose"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}