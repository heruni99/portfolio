import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0";
      case "fade-down":
        return isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0";
      case "fade-left":
        return isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0";
      case "fade-right":
        return isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0";
      case "zoom-in":
        return isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0";
      default:
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out will-change-transform ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
