import { useEffect, useState } from "react";

const navItems = [
  { id: "projects", num: "01", label: "Work" },
  { id: "about", num: "02", label: "About" },
  { id: "experience", num: "03", label: "Experience" },
  { id: "skills", num: "04", label: "Skills" },
  { id: "contact", num: "05", label: "Contacts" },
];

export default function Header() {
  const [active, setActive] = useState("about");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-md transition-colors duration-200">
      <div className="w-full flex items-center justify-between px-6 py-4 sm:px-12 lg:px-16">
        {/* Top-Left: samu_codes. brand logo */}
        <a
          href="#hero"
          className="font-mono text-2xl font-black tracking-tighter text-ink transition-colors hover:text-rose shrink-0"
        >
          samu_codes<span className="text-rose">.</span>
        </a>

        {/* Center: Numbered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group flex items-baseline gap-1.5 transition-colors ${
                active === item.id ? "text-rose" : "text-ink hover:text-rose"
              }`}
            >
              <span className="font-mono text-xs font-normal text-inkSoft group-hover:text-rose">
                {item.num}
              </span>
              <span className="font-sans text-xl font-extrabold tracking-tight lg:text-3xl">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Top-Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bgAlt text-ink transition-all hover:border-rose hover:bg-roseWash hover:text-roseDeep"
          >
            {isDark ? (
              <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 0 1 1-9-9Z" />
                <path d="M19 3h2.5l-2.5 3h2.5" strokeWidth="1.5" />
                <path d="M16 6.5h2l-2 2.5h2" strokeWidth="1.2" />
                <path d="M13.5 10h1.5l-1.5 2h1.5" strokeWidth="1" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links Row */}
      <div className="flex md:hidden border-t border-line/50 px-6 py-2 overflow-x-auto justify-between gap-4">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex items-baseline gap-1 text-sm font-bold transition-colors whitespace-nowrap ${
              active === item.id ? "text-rose" : "text-ink hover:text-rose"
            }`}
          >
            <span className="font-mono text-[10px] text-inkSoft">{item.num}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
