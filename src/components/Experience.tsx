import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-12 py-20 max-md:px-6 max-md:py-14">
      <p className="mb-2.5 font-mono text-sm text-roseDeep">experience</p>
      <h2 className="mb-9 text-3xl font-semibold tracking-tight">Where I've spent my time</h2>
      <div className="flex flex-col gap-10 border-l-2 border-line pl-8">
        {experience.map((item) => (
          <div key={item.title} className="relative">
            <div className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-[3px] border-bg bg-rose" />
            <div className="mb-1.5 font-mono text-xs text-roseDeep">{item.date}</div>
            <h3 className="mb-1 text-base font-semibold">{item.title}</h3>
            <div className="mb-2.5 text-sm text-inkSoft">{item.org}</div>
            <ul className="list-disc pl-4.5 text-sm text-inkSoft">
              {item.points.map((point) => (
                <li key={point} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
