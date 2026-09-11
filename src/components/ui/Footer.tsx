export default function Footer() {
  return (
    <footer className="pt-16 bg-bg">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        
        {/* Dark Container Card with Large Top Rounded Corners */}
        <div className="rounded-t-[2.5rem] sm:rounded-t-[3.5rem] bg-[#0A0E17] text-white p-8 sm:p-14 lg:p-16 border-t border-x border-white/10 shadow-2xl flex flex-col gap-12 sm:gap-16">
          
          {/* Brand Header */}
          <div className="flex flex-col gap-4 text-left border-b border-white/10 pb-10 sm:pb-12">
            <span className="font-mono text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white">
              samu_codes<span className="text-rose">.</span>
            </span>
            <p className="text-white/60 font-sans text-base sm:text-lg max-w-[46ch]">
              Building thoughtful digital products & software engineering solutions with clean code.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4 text-left">
            
            {/* Explore Column */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose">Explore</span>
              <a href="#projects" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Projects
              </a>
              <a href="#about" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                About
              </a>
              <a href="#experience" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Experience
              </a>
              <a href="#skills" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Skills
              </a>
              <a href="#contact" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                Contact
              </a>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose">Connect</span>
              <a
                href="mailto:herunisp@gmail.com"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/heruni-perera-5974032b8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/heruni99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/its.samuu__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Instagram
              </a>
            </div>

          </div>

          {/* Social Links Row with Icons & Labels */}
          <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/its.samuu__"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-rose"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose/10 group-hover:border-rose/40">
                <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <span className="font-mono text-xs font-semibold">Instagram</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/heruni99"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-rose"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose/10 group-hover:border-rose/40">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <span className="font-mono text-xs font-semibold">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/heruni-perera-5974032b8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-rose"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose/10 group-hover:border-rose/40">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="font-mono text-xs font-semibold">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:herunisp@gmail.com"
              className="group flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-rose"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose/10 group-hover:border-rose/40">
                <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="font-mono text-xs font-semibold">Email</span>
            </a>
          </div>

          {/* Footer Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs font-mono text-white/50 gap-4">
            <span>© 2026 Samu_codes. All rights reserved.</span>
            <span>Designed & Built with React, TypeScript & Tailwind</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
