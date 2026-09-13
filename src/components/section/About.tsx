import { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

type PersonaKey = "general" | "recruiters" | "developers";

interface PersonaConfig {
  key: PersonaKey;
  label: string;
  icon: JSX.Element;
  text: string;
}

const personas: PersonaConfig[] = [
  {
    key: "general",
    label: "General",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    text: "I'm a Computer Science undergrad hooked on technology since childhood. I love architecting clean, purposeful solutions that solve real-world problems. I prioritize clean code, proper formatting, and modern execution in everything I build.",
  },
  {
    key: "recruiters",
    label: "Recruiters",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
    text: "I'm a highly adaptable 2nd-year CS student who thrives on the 'learn by doing' approach. Adept at full-stack React and TypeScript development, with a strong interest in building scalable web applications. I consistently deliver disciplined, reliable, and production-ready work.",
  },
  {
    key: "developers",
    label: "Developers",
    icon: (
      <svg className="h-4 w-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    text: "I'm a software engineering student who values readable code, solid formatting, and robust frontend & full-stack architectures. I'm always open to collaborating on interesting projects, tackling hackathons, or geeking out over new tools and automation. Hit me up if you want to build something cool!",
  },
];

export default function About() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("general");

  const currentPersona = personas.find((p) => p.key === activePersona) || personas[0];

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-8 py-24 max-md:px-6 max-md:py-16 sm:px-12">
      <ScrollReveal variant="fade-up" duration={850} delay={100}>
        <p className="mb-3 font-mono text-base font-bold text-rose">about</p>
        <h2 className="mb-10 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          A little about me
        </h2>
      </ScrollReveal>

      {/* Interactive Persona Tabs & Dynamic Content Container */}
      <ScrollReveal variant="fade-up" duration={850} delay={250} className="flex flex-col space-y-6 max-w-4xl">
        
        {/* Persona Tabs Navigation Bar */}
        <div className="flex items-center gap-6 border-b border-line/60 pb-1">
          {personas.map((persona) => {
            const isActive = persona.key === activePersona;
            return (
              <button
                key={persona.key}
                onClick={() => setActivePersona(persona.key)}
                className={`group relative flex items-center gap-2 pb-3 font-sans text-sm font-bold transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-inkSoft hover:text-ink"
                }`}
              >
                <span className={`transition-colors ${isActive ? "text-rose" : "text-inkSoft group-hover:text-ink"}`}>
                  {persona.icon}
                </span>
                <span>{persona.label}</span>

                {/* Active Indicator Underline Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-rose shadow-sm" />
                )}
              </button>
            );
          })}
        </div>

        {/* Persona Copy Text */}
        <div className="min-h-[100px] transition-all duration-300">
          <p className="text-xl sm:text-2xl font-normal leading-relaxed text-inkSoft">
            {currentPersona.text}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
