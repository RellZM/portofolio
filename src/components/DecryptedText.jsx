import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const characters =
  "mkbmkgmotKSOADMWOAMSDMLWAEjksamkmoamwodirgnsnxmz1202266934731972256!@#$%^&*()_+";

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  className = "",
}) {
  const [displayText, setDisplayText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const iterations = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let currentText = text
      .split("")
      .map(() => characters[Math.floor(Math.random() * characters.length)])
      .join("");
    setDisplayText(currentText);

    const startAnimation = () => {
      clearInterval(intervalRef.current);
      iterations.current = 0;

      intervalRef.current = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (sequential) {
                if (
                  index <
                  iterations.current / (maxIterations / text.length)
                ) {
                  return char;
                }
              } else {
                if (iterations.current >= maxIterations) {
                  return char;
                }
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        iterations.current += 1;
        if (iterations.current >= maxIterations) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
        }
      }, speed);
    };

    startAnimation();

    return () => clearInterval(intervalRef.current);
  }, [text, speed, maxIterations, sequential]);

  return (
    <span
      className={`inline-block whitespace-pre-wrap break-words ${className}`}>
      {displayText}
    </span>
  );
}
