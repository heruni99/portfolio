import { skills } from "../../data/skills";

export default function Skills() {
  const doubled = [...skills, ...skills];

  return (
    <section id="skills" className="bg-bgAlt px-12 py-20 max-md:px-6 max-md:py-14">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2.5 font-mono text-sm text-roseDeep">skills</p>
        <h2 className="mb-9 text-3xl font-semibold tracking-tight">What I work with</h2>
        <div className="marquee-wrap marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max gap-4">
            {doubled.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-line bg-bg px-5 py-3 text-sm font-medium"
              >
                <i className={`${skill.icon} text-xl text-roseDeep`} />
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
