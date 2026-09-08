import React, { useEffect, useState } from "react";

interface TypewriterCarouselProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterCarousel: React.FC<TypewriterCarouselProps> = ({
  roles,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        charIndex++;
        setDisplayText(currentRole.slice(0, charIndex));

        if (charIndex === currentRole.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, pauseDuration);
          return;
        }
        timeoutId = setTimeout(tick, typingSpeed);
      } else {
        charIndex--;
        setDisplayText(currentRole.slice(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = setTimeout(tick, 300);
          return;
        }
        timeoutId = setTimeout(tick, deletingSpeed);
      }
    };

    tick();

    return () => clearTimeout(timeoutId);
  }, [roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{displayText}</span>
      <span className="animate-blink ml-1 inline-block h-5 w-2 bg-rose align-middle" />
    </span>
  );
};

export default TypewriterCarousel;
