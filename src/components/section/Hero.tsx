import AsciiMorphText from "../ui/AsciiMorphText";
import TypewriterCarousel from "../ui/TypewriterCarousel";

const rolesList = ["web.", "problems that matter.", "clean code.", "the next opportunity."];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[1400px] px-8 py-10 sm:px-12 lg:py-16">
      {/* Side-by-Side Grid Layout: Left Content, Right Profile Image */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* Left Column: AsciiMorphText greeting, Main headline, Typewriter, Social buttons */}
        <div className="flex flex-col space-y-6 text-left">
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

          {/* Social Links Row */}
          <div className="flex items-center gap-3 pt-2">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/80 glass-card text-ink transition-all duration-300 hover:border-rose hover:bg-rose/10 hover:text-rose hover:scale-110 hover:shadow-md"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/80 glass-card text-ink transition-all duration-300 hover:border-rose hover:bg-rose/10 hover:text-rose hover:scale-110 hover:shadow-md"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/80 glass-card text-ink transition-all duration-300 hover:border-rose hover:bg-rose/10 hover:text-rose hover:scale-110 hover:shadow-md"
            >
              <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@example.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/80 glass-card text-ink transition-all duration-300 hover:border-rose hover:bg-rose/10 hover:text-rose hover:scale-110 hover:shadow-md"
            >
              <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

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
