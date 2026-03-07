import { useState, useEffect } from "react";

const messages = [
  "Translating complex architecture into clear team directives...",
  "Aligning engineering goals with business objectives...",
  "Documenting protocols for seamless onboarding...",
  "Facilitating cross-functional technical synchronization...",
];

export default function TelemetryTypewriter() {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMsg = messages[currentMsgIndex];
    let timing;

    if (isDeleting) {
      timing = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentMsgIndex((prev) => (prev + 1) % messages.length);
        }
      }, 30);
    } else {
      timing = setTimeout(() => {
        setDisplayedText(currentMsg.slice(0, displayedText.length + 1));
        if (displayedText.length === currentMsg.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 50);
    }

    return () => clearTimeout(timing);
  }, [displayedText, isDeleting, currentMsgIndex]);

  return (
    <div className="h-64 flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-text-dark/50">
          Live Sync Feed
        </span>
      </div>

      <div className="bg-[#1A1A22] text-[#8DFFA3] p-5 rounded-2xl flex-grow font-mono text-sm leading-relaxed border border-[#2A2A35] shadow-inner relative overflow-hidden group">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity"></div>
        <div className="relative z-20">
          <span className="opacity-50 mr-2">&gt;</span>
          {displayedText}
          <span className="inline-block w-2.5 h-4 bg-accent ml-1 animate-pulse translate-y-1"></span>
        </div>
      </div>
    </div>
  );
}
