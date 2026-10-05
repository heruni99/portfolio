import { miniProjects } from "../../data/miniProjects";

export default function MiniProjects() {
  return (
    <section
      id="mini-projects"
      className="px-6 pb-20 md:px-12 md:pb-24 max-w-[1400px] mx-auto"
    >
      {/* Section header */}
      <div className="mb-6 flex items-center gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest font-bold text-rose mb-1">
            fundamentals
          </p>
          <h3 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Mini Projects
          </h3>
        </div>
        {/* Divider line */}
        <div className="flex-1 h-px bg-line/50 mt-5" />
        <span className="mt-5 font-mono text-[10px] text-inkSoft uppercase tracking-widest whitespace-nowrap">
          Smaller builds & experiments
        </span>
      </div>

      {/* Compact card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {miniProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-xl border border-line/60 glass-card px-5 py-4 shadow-sm transition-all duration-200 hover:border-rose/40 hover:shadow-md"
          >
            {/* Top row — name + link icons */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h4 className="font-display text-base font-bold text-ink leading-snug">
                {project.name}
              </h4>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex items-center justify-center w-6 h-6 rounded-md border border-line/60 bg-slate-900/20 text-inkSoft transition-all hover:border-slate-500 hover:text-white"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="flex items-center justify-center w-6 h-6 rounded-md border border-rose/30 bg-rose/10 text-rose transition-all hover:bg-rose hover:text-white hover:border-rose"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed text-inkSoft mb-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line/50 bg-roseWash/20 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-inkSoft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
