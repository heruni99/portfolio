import AsciiMorphText from "../ui/AsciiMorphText";
import TypewriterCarousel from "../ui/TypewriterCarousel";

const rolesList = ["web.", "problems that matter.", "clean code.", "the next opportunity."];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[1400px] px-8 py-10 sm:px-12 lg:py-16">
      {/* Side-by-Side Grid Layout: Left Content, Right Profile Image */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        
        {/* Left Column: samu_codes tag, AsciiMorphText greeting, Main headline, Typewriter */}
        <div className="flex flex-col space-y-6 text-left">
          {/* samu_codes branding tag */}
          <div className="inline-block rounded-full border border-line/60 bg-roseWash/80 backdrop-blur-sm px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-roseDeep w-fit shadow-sm">
             samu_codes
          </div>

          {/* AsciiMorphText greeting */}
          <div className="text-3xl font-black uppercase tracking-tighter text-ink sm:text-4xl lg:text-5xl">
            <AsciiMorphText text="Hi, I'm Heruni" />
          </div>

          {/* Main Headline: IMAGINE IT. BUILD IT. */}
          <h1 className="font-sans text-5xl font-black uppercase leading-[0.92] tracking-tighter text-ink sm:text-7xl lg:text-8xl">
            IMAGINE IT.<br />
            <span className="text-rose">BUILD IT.</span>
          </h1>

          {/* Typewriter Carousel */}
          <div className="font-mono text-base text-inkSoft lg:text-lg">
            I build for the <TypewriterCarousel roles={rolesList} className="font-bold text-rose" />
          </div>

          <p className="font-sans text-base font-medium leading-relaxed text-inkSoft sm:text-lg pt-1">
            Turning what if into what next with clean code, creative problem solving, and intuitive design.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-roseDeep px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Explore Portfolio →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line/80 glass-card px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:border-rose hover:text-rose"
            >
              Let's Connect →
            </a>
          </div>
        </div>

        {/* Right Column: Profile PNG Image Floating Side-by-Side */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="/profile.png"
              alt="Heruni"
              className="h-[480px] w-full object-contain sm:h-[540px] lg:h-[640px] drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
