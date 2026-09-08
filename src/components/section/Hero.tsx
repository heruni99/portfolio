import AsciiMorphText from "../ui/AsciiMorphText";
import TypewriterCarousel from "../ui/TypewriterCarousel";

const rolesList = ["web.", "problems that matter.", "clean code.", "the next opportunity."];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-24">
      <div className="flex flex-col justify-center">
        <h1 className="mb-6 text-5xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          <AsciiMorphText text="Hi, I'm Heruni" />
        </h1>
        <div className="mb-10 min-h-[36px] font-mono text-xl text-inkSoft sm:text-2xl lg:text-3xl">
          I build for the <TypewriterCarousel roles={rolesList} className="font-bold text-rose" />
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="rounded-2xl bg-rose px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-roseDeep hover:shadow-xl hover:-translate-y-0.5"
          >
            Resume →
          </a>
          <a
            href="#projects"
            className="rounded-2xl border border-line bg-white px-8 py-4 text-base font-semibold text-ink transition-all hover:border-rose hover:bg-roseWash hover:text-roseDeep hover:-translate-y-0.5"
          >
            See projects →
          </a>
        </div>
      </div>
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[460px] overflow-hidden rounded-[32px] shadow-2xl transition-all duration-300 hover:shadow-[0_25px_60px_rgba(124,58,237,0.18)]">
          <img
            src="/profile.png"
            alt="Heruni"
            className="h-[480px] w-full object-cover sm:h-[540px] lg:h-[580px]"
          />
        </div>
      </div>
    </section>
  );
}
