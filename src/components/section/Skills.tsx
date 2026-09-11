import { skills } from "../../data/skills";

export default function Skills() {
  const doubled = [...skills, ...skills];

  return (
    <section id="skills" className="px-6 py-24 max-md:py-16 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 font-mono text-base font-bold text-rose">skills</p>
        <h2 className="mb-12 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Tech Stack & Tools
        </h2>

        {/* Infinite Marquee Ribbon with Large Free-Floating Tech Logos */}
        <div className="marquee-wrap marquee-mask overflow-hidden py-8">
          <div className="animate-marquee flex w-max items-center gap-10 sm:gap-14 lg:gap-16">
            {doubled.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                title={skill.name}
                className="group flex cursor-pointer items-center justify-center p-2 shrink-0 transition-transform duration-300 ease-out hover:scale-135"
              >
                {skill.isSvg ? (
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center">
                    <svg className="h-12 w-12 sm:h-14 sm:w-14 text-ink transition-transform duration-300 group-hover:scale-110" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="208" y1="128" x2="128" y2="208" />
                      <line x1="192" y1="40" x2="40" y2="192" />
                    </svg>
                  </div>
                ) : (
                  <i className={`${skill.icon} text-6xl sm:text-7xl lg:text-8xl transition-transform duration-300 group-hover:scale-110`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
