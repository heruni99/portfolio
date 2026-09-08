import AsciiMorphText from "../ui/AsciiMorphText";
import TypewriterCarousel from "../ui/TypewriterCarousel";

const rolesList = ["web.", "problems that matter.", "clean code.", "the next opportunity."];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto grid max-w-[1400px] grid-cols-[1.2fr_0.8fr] items-center gap-16 px-12 py-28 max-lg:grid-cols-1 max-md:px-6 max-md:py-16">
      <div>
        <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight lg:text-6xl">
          <AsciiMorphText text="Hi, I'm Heruni" />
        </h1>
        <div className="mb-10 min-h-[32px] font-mono text-xl text-inkSoft lg:text-2xl">
          I build for the <TypewriterCarousel roles={rolesList} className="font-bold text-roseDeep" />
        </div>
        <div className="flex gap-4">
          <a href="#" className="rounded-xl border border-rose bg-rose px-7 py-3.5 text-base font-medium text-white transition-all hover:bg-roseDeep">
            Resume →
          </a>
          <a href="#projects" className="rounded-xl border border-rose px-7 py-3.5 text-base font-medium text-roseDeep transition-all hover:bg-roseWash">
            See projects →
          </a>
        </div>
      </div>
      <div className="relative justify-self-center max-lg:order-first max-lg:mb-6">
        <div className="absolute -left-6 top-6 -z-10 h-[400px] w-[340px] rounded-3xl border border-rose opacity-80" />
        <div className="absolute -right-6 -top-6 -z-10 rounded-full bg-rose opacity-90" style={{ height: 72, width: 72 }} />
        <div className="flex h-96 w-80 items-center justify-center overflow-hidden rounded-3xl border border-line bg-roseWash p-6 text-center font-mono text-base text-roseDeep shadow-xl">
          your photo here
        </div>
      </div>
    </section>
  );
}
