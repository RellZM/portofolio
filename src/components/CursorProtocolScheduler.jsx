import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const days = ["S", "M", "T", "W", "T", "F", "S"];

export default function CursorProtocolScheduler() {
  const [activeCell, setActiveCell] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const cursorRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    let timeout;

    const animateCursor = async () => {
      if (!cursorRef.current || !gridRef.current) return;

      setActiveCell(null);
      setIsSaved(false);

      // Reset position
      cursorRef.current.style.transform = "translate(10px, 150px)";
      cursorRef.current.style.opacity = "0";

      timeout = setTimeout(() => {
        cursorRef.current.style.transition =
          "all 1s cubic-bezier(0.25, 1, 0.5, 1)";
        cursorRef.current.style.opacity = "1";

        // Move to target cell (Tuesday)
        cursorRef.current.style.transform = "translate(120px, 60px)";

        setTimeout(() => {
          // Click effect
          cursorRef.current.style.transform =
            "translate(120px, 60px) scale(0.9)";
          setActiveCell(2); // Activate Tuesday

          setTimeout(() => {
            // Move to save button
            cursorRef.current.style.transform = "translate(200px, 160px)";

            setTimeout(() => {
              // Click save
              cursorRef.current.style.transform =
                "translate(200px, 160px) scale(0.9)";
              setIsSaved(true);

              setTimeout(() => {
                // Fade out
                cursorRef.current.style.opacity = "0";
                cursorRef.current.style.transform =
                  "translate(200px, 160px) scale(1)";

                // Restart cycle
                timeout = setTimeout(animateCursor, 2000);
              }, 400);
            }, 800);
          }, 300);
        }, 1000);
      }, 500);
    };

    animateCursor();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-64 bg-background border border-text-dark/10 rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col justify-between">
      <div>
        <h4 className="font-heading font-bold text-lg mb-1">
          Commitment Protocol
        </h4>
        <p className="font-heading text-sm text-text-dark/60 mb-6">
          Automated deployment scheduling and continuous learning
          synchronization.
        </p>

        <div ref={gridRef} className="grid grid-cols-7 gap-2 mb-6">
          {days.map((day, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md flex items-center justify-center font-mono text-xs transition-colors duration-300 ${
                activeCell === i
                  ? "bg-accent font-bold text-primary shadow-inner"
                  : "bg-text-dark/5 text-text-dark/40 border border-text-dark/10"
              }`}>
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <div
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${isSaved ? "bg-green-500/20 text-green-700" : "bg-text-dark/5 text-text-dark/50"}`}>
          {isSaved ? "Sync Complete" : "Awaiting Entry"}
        </div>
      </div>

      <div
        ref={cursorRef}
        className="absolute w-5 h-5 z-20 pointer-events-none drop-shadow-md"
        style={{ originX: 0, originY: 0 }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.5 3.5L19 12L12 13.5L8.5 20.5L5.5 3.5Z"
            fill="#1A1A1A"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
