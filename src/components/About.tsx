const facts = [
  { label: "Location", value: "Sri Lanka" },
  { label: "Studying", value: "B.Sc. Computer Science, Year 2" },
  { label: "Currently learning", value: "React + TypeScript" },
  { label: "Looking for", value: "Software engineering internships" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-12 py-20 max-md:px-6 max-md:py-14">
      <p className="mb-2.5 font-mono text-sm text-roseDeep">about</p>
      <h2 className="mb-9 text-3xl font-semibold tracking-tight">A little about me</h2>
      <div className="grid grid-cols-2 items-start gap-14 max-md:grid-cols-1">
        <p className="max-w-[56ch] text-base text-inkSoft">
          I'm a second-year computer science undergraduate, currently building toward my
          first software engineering internship. I like taking problems I actually run into
          — like losing track of internship applications across ten different tabs — and
          turning them into small, working products. Right now I'm deepening my skills in
          React, TypeScript, and backend fundamentals, one project at a time.
        </p>
        <div className="flex flex-col gap-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex justify-between border-b border-line pb-3 text-sm">
              <span className="text-inkSoft">{fact.label}</span>
              <span className="font-medium">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
