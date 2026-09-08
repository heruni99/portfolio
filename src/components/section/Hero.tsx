import AsciiMorphText from "../ui/AsciiMorphText";
import TypewriterCarousel from "../ui/TypewriterCarousel";

const rolesList = ["web.", "problems that matter.", "clean code.", "the next opportunity."];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto grid max-w-5xl grid-cols-[1.15fr_0.85fr] items-center gap-16 px-12 py-24 max-md:grid-cols-1 max-md:px-6 max-md:py-14">
      <div>
        <h1 className="mb-4 text-[44px] font-semibold leading-tight tracking-tight">
          <AsciiMorphText text="Hi, I'm Heruni" />
        </h1>
        <div className="mb-8 min-h-[26px] font-mono text-lg text-inkSoft">
          I build for the <TypewriterCarousel roles={rolesList} className="font-bold text-roseDeep" />
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
        <div className="absolute -right-5 -top-5 -z-10 rounded-full bg-rose opacity-90" style={{ height: 60, width: 60 }} />
        <div className="flex h-80 w-64 items-center justify-center overflow-hidden rounded-2xl border border-line bg-roseWash p-5 text-center font-mono text-sm text-roseDeep">
          your photo here
        </div>
      </div>
    </section>
  );
}
