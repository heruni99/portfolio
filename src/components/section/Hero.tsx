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
          <div className="inline-block rounded-full bg-roseWash px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-roseDeep w-fit">
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
              className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-roseDeep hover:shadow-xl hover:scale-105"
            >
              Explore Portfolio →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bgAlt px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:border-rose hover:bg-roseWash hover:text-roseDeep"
            >
              Let's Connect →
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Composition with Aura Glow & Floating Persona Badges */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px]">
            
            {/* Background Halo Glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-rose/30 via-accentBlue/25 to-roseWash/40 blur-3xl" />
            
            {/* Ambient Circular Aura Backdrop Ring */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/20 bg-rose/5 dark:bg-rose/10 sm:h-[420px] sm:w-[420px]" />
            
            {/* Rotating Dashed Tech Orbit Ring */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accentBlue/30 animate-[spin_60s_linear_infinite] sm:h-[480px] sm:w-[480px]" />

            {/* Floating Persona Pill 1 (Top-Left) */}
            <div className="animate-float-slow absolute -left-4 top-10 z-20 hidden sm:flex items-center gap-2.5 rounded-full border border-line/80 glass-card px-4 py-2 text-xs font-bold text-ink shadow-lg backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-rose animate-pulse" />
              <span>⚡ Full-Stack Developer</span>
            </div>

            {/* Floating Persona Pill 2 (Center-Right) */}
            <div className="animate-float-delayed absolute -right-4 top-1/3 z-20 hidden sm:flex items-center gap-2.5 rounded-full border border-line/80 glass-card px-4 py-2 text-xs font-bold text-ink shadow-lg backdrop-blur-md">
              <span className="text-sm">🚀</span>
              <span>Problem Solver</span>
            </div>

            {/* Floating Persona Pill 3 (Bottom-Left) */}
            <div className="animate-float-slow absolute left-4 bottom-16 z-20 hidden sm:flex items-center gap-2 rounded-full border border-line/80 glass-card px-4 py-2 text-xs font-bold text-ink shadow-lg backdrop-blur-md">
              <span className="font-mono text-rose font-bold">React</span>
              <span className="text-inkSoft">•</span>
              <span className="font-mono text-accentBlue font-bold">TypeScript</span>
            </div>

            {/* Main Profile PNG Image with Smooth 4-Edge Feather Mask */}
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.01] profile-edge-smooth">
              <img
                src="/profile.png"
                alt="Heruni"
                className="h-[480px] w-full object-contain sm:h-[540px] lg:h-[640px] drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
