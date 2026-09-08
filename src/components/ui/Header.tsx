import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
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
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm transition-colors duration-200">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-12 py-5 max-md:flex-wrap max-md:gap-3 max-md:px-6">
        <a href="#hero" className="font-mono text-xl font-bold tracking-wide text-roseDeep">
          Samu_codes
        </a>
        <nav className="flex items-center gap-10 max-md:order-3 max-md:w-full max-md:justify-center max-md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative pb-1 text-base font-medium transition-colors ${
                active === item.id ? "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-rose" : "text-inkSoft hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bgAlt text-lg text-ink transition-all hover:border-rose hover:bg-roseWash hover:text-roseDeep"
        >
          {isDark ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
