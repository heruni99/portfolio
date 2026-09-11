const facts = [
  { label: "Location", value: "Sri Lanka" },
  { label: "Studying", value: "B.Sc. Computer Science, Year 2" },
  { label: "Currently learning", value: "React + TypeScript" },
  { label: "Looking for", value: "Software engineering internships" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-12 py-24 max-md:px-6 max-md:py-16">
      <p className="mb-3 font-mono text-base font-bold text-rose">about</p>
      <h2 className="mb-10 text-4xl font-semibold tracking-tight text-ink">A little about me</h2>
      <div className="grid grid-cols-2 items-start gap-16 max-lg:grid-cols-1">
        <p className="text-lg leading-relaxed text-inkSoft">
          I'm a second-year computer science undergraduate, currently building toward my
          first software engineering internship. I like taking problems I actually run into
          — like losing track of internship applications across ten different tabs — and
          turning them into small, working products. Right now I'm deepening my skills in
          React, TypeScript, and backend fundamentals, one project at a time.
        </p>
        <div className="flex flex-col gap-5">
          {facts.map((fact) => (
            <div key={fact.label} className="flex justify-between border-b border-line pb-4 text-base">
              <span className="text-inkSoft">{fact.label}</span>
              <span className="font-semibold text-ink">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
