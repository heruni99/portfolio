import React, { useEffect, useState } from "react";

interface AsciiMorphTextProps {
  text: string;
  className?: string;
}

const MORPH_CHARS = "!<>-_\\/[]{}—=+*^?#________";

export const AsciiMorphText: React.FC<AsciiMorphTextProps> = ({ text, className = "" }) => {
  const [displayedChars, setDisplayedChars] = useState<string[]>(() => text.split(""));

  useEffect(() => {
    const chars = text.split("");
    setDisplayedChars(chars.map((char) => (char === " " ? " " : MORPH_CHARS[Math.floor(Math.random() * MORPH_CHARS.length)])));

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    chars.forEach((targetChar, index) => {
      if (targetChar === " ") {
        setDisplayedChars((prev) => {
          const next = [...prev];
          next[index] = " ";
          return next;
        });
        return;
      }

      const delay = index * 100; // Staggered reveal per letter
      const iterations = 10;
      const stepDuration = 50; // Random character change interval

      for (let i = 0; i <= iterations; i++) {
        const timeout = setTimeout(() => {
          setDisplayedChars((prev) => {
            const next = [...prev];
            if (i === iterations) {
              next[index] = targetChar;
            } else {
              const randomChar = MORPH_CHARS[Math.floor(Math.random() * MORPH_CHARS.length)];
              next[index] = randomChar;
            }
            return next;
          });
        }, delay + i * stepDuration);

        timeouts.push(timeout);
      }
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [text]);

  return (
    <span className={`inline-flex flex-wrap font-mono ${className}`}>
      {displayedChars.map((char, idx) => (
        <span key={`${char}-${idx}`} className="inline-block transition-all duration-75">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default AsciiMorphText;
