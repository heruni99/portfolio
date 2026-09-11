import { skills } from "../../data/skills";

export default function Skills() {
  const doubled = [...skills, ...skills];

  return (
    <section id="skills" className="px-12 py-24 max-md:px-6 max-md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-3 font-mono text-base font-bold text-rose">skills</p>
        <h2 className="mb-10 text-4xl font-semibold tracking-tight text-ink">What I work with</h2>
        <div className="marquee-wrap marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max gap-5">
            {doubled.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-line/60 glass-card px-6 py-3.5 text-base font-medium text-ink shadow-sm"
              >
                <i className={`${skill.icon} text-2xl text-rose`} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-inkSoft">Hover to pause · scroll pauses automatically for readability.</p>
      </div>
    </section>
  );
}
