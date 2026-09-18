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
    <section id="projects" className="px-6 py-24 md:px-12 md:py-28 max-w-[1400px] mx-auto">
      <div className="mb-12">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest font-bold text-rose">
          featured projects
        </p>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Things I've Built
        </h2>
        <p className="mt-3 text-lg text-inkSoft max-w-2xl">
          Real-world applications crafted with modern frontend architectures, intuitive UX, and mobile/web engineering.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
              activeFilter === f.value
                ? "border-rose bg-rose text-white shadow-md shadow-rose/20"
                : "border-line/70 glass-card text-inkSoft hover:border-rose/60 hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects Showcase Container */}
      <div className="space-y-16">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl border border-line/80 glass-card p-6 md:p-10 shadow-2xl transition-all duration-300 hover:border-rose/50"
          >
            {/* Top Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-rose/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-rose border border-rose/20">
                  {project.tag}
                </span>
                {project.role && (
                  <span className="rounded-full bg-slate-900/50 text-slate-300 border border-slate-700/60 px-3.5 py-1 text-xs font-semibold">
                    Role: {project.role}
                  </span>
                )}
              </div>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-5 py-2 font-mono text-xs font-bold text-rose transition-all hover:bg-rose hover:text-white shadow-sm"
                >
                  Live Platform
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>

            {/* Title & Description Header */}
            <div className="mb-8">
              <h3 className="font-display text-3xl font-bold text-ink md:text-4xl">
                {project.name}
              </h3>
              {project.subtitle && (
                <p className="mt-1 font-mono text-sm font-medium text-rose/90">
                  {project.subtitle}
                </p>
              )}
              <p className="mt-4 text-base leading-relaxed text-inkSoft max-w-4xl">
                {project.description}
              </p>
            </div>

            {/* Web Hero Banner Cover Image (Full Width Link) */}
            {project.webHeroImage && (
              <div className="mb-8 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono text-xs font-bold text-inkSoft uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Web Application Cover
                  </span>
                  <span className="text-xs text-rose/80 font-mono">Click cover to launch web app</span>
                </div>

                <a
                  href={project.demoUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/img relative block overflow-hidden rounded-2xl border border-line/60 bg-slate-900/60 shadow-xl transition-all hover:border-rose/60 hover:shadow-rose/10"
                >
                  <img
                    src={project.webHeroImage}
                    alt={`${project.name} Web Hero`}
                    className="w-full h-[320px] md:h-[440px] object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="rounded-full bg-rose px-6 py-3 font-mono text-sm font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2.5 transform group-hover/img:scale-105 transition-transform">
                      Visit Waveform Web App
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="pt-6 border-t border-line/50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-inkSoft uppercase tracking-wider mr-2">
                  Tech Stack:
                </span>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line/60 bg-roseWash/40 px-3.5 py-1 font-mono text-xs font-semibold text-inkSoft transition-colors hover:border-rose/50 hover:text-rose"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-rose px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-rose/20 transition-all hover:bg-rose/90 hover:scale-[1.02] active:scale-95"
                >
                  Visit Waveform Web App
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

