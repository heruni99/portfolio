import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-12 py-24 max-md:px-6 max-md:py-16">
      <p className="mb-3 font-mono text-base font-bold text-rose">experience</p>
      <h2 className="mb-12 font-serif text-5xl font-normal italic tracking-tight text-ink sm:text-6xl">Where I've spent my time</h2>
      <div className="flex flex-col gap-12 border-l-2 border-line/60 pl-10">
        {experience.map((item) => (
          <div key={item.title} className="relative">
            <div className="absolute -left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-bg bg-rose shadow-sm" />
            <div className="mb-2 font-mono text-sm font-bold text-rose">{item.date}</div>
            <h3 className="mb-1 text-xl font-bold text-ink">{item.title}</h3>
            <div className="mb-3 text-base text-inkSoft">{item.org}</div>
            <ul className="list-disc pl-5 text-base text-inkSoft">
              {item.points.map((point) => (
                <li key={point} className="mb-1.5 leading-relaxed">
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
