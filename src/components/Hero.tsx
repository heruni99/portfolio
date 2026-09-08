import { useEffect, useState } from "react";

const roles = ["web.", "problems that matter.", "clean code.", "the next opportunity."];

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 40 : 70);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="mx-auto grid max-w-5xl grid-cols-[1.15fr_0.85fr] items-center gap-16 px-12 py-24 max-md:grid-cols-1 max-md:px-6 max-md:py-14">
      <div>
        <h1 className="mb-4 text-[44px] font-semibold leading-tight tracking-tight">Hi, I'm Heruni</h1>
        <div className="mb-8 min-h-[26px] font-mono text-lg text-inkSoft">
          I build for the <span className="font-bold text-roseDeep">{text}</span>
          <span className="animate-blink ml-0.5 inline-block h-5 w-2 -translate-y-0.5 bg-rose align-middle" />
        </div>
        <div className="flex gap-4">
          <a href="#" className="rounded-lg border border-rose bg-rose px-6 py-3 text-sm font-medium text-white hover:bg-roseDeep">
            Resume →
          </a>
          <a href="#projects" className="rounded-lg border border-rose px-6 py-3 text-sm font-medium text-roseDeep hover:bg-roseWash">
            See projects →
          </a>
        </div>
      </div>
      <div className="relative justify-self-center max-md:order-first max-md:mb-6">
        <div className="absolute -left-5 top-5 -z-10 h-[376px] w-[316px] rounded-2xl border border-rose" />
        <div className="absolute -right-5 -top-5 -z-10 h-15 w-15 rounded-full bg-rose opacity-90" style={{ height: 60, width: 60 }} />
        <div className="flex h-80 w-64 items-center justify-center overflow-hidden rounded-2xl border border-line bg-roseWash p-5 text-center font-mono text-sm text-roseDeep">
          your photo here
          {/* Replace this div's children with: <img src="/your-photo.jpg" alt="Heruni" className="h-full w-full rounded-2xl object-cover" /> */}
        </div>
      </div>
    </section>
  );
}
