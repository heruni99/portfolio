import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export default function Header() {
  const [active, setActive] = useState("about");

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
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-bg/90 px-12 py-5 backdrop-blur-sm max-md:flex-wrap max-md:gap-3 max-md:px-6">
      <a href="#hero" className="font-mono text-lg font-bold tracking-wide text-roseDeep">
        Samu_codes
      </a>
      <nav className="flex items-center gap-9 max-md:order-3 max-md:w-full max-md:justify-center max-md:gap-5">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative pb-1 text-sm font-medium ${
              active === item.id ? "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-rose" : "text-inkSoft"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        aria-label="toggle theme"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-inkSoft"
      >
        ☀
      </button>
    </header>
  );
}
