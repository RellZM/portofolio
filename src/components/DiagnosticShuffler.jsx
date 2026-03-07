import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Algorithmic Precision",
    desc: "Breaking complex problems into elegant, scalable solutions.",
  },
  {
    id: 2,
    title: "Systemic Thinking",
    desc: "Understanding how individual components interact at the macro level.",
  },
  {
    id: 3,
    title: "Defensive Design",
    desc: "Anticipating vulnerabilities before they become functional flaws.",
  },
];

export default function DiagnosticShuffler() {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        newCards.push(first);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isTop = index === 0;
          return (
            <motion.div
              key={card.id}
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{
                y: index * 12,
                scale: 1 - index * 0.05,
                opacity: 1 - index * 0.2,
                zIndex: items.length - index,
              }}
              exit={{ y: -50, scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
              }}
              className={`absolute w-full p-6 rounded-2xl border ${
                isTop
                  ? "bg-background border-text-dark/10 shadow-lg"
                  : "bg-background border-text-dark/5 shadow-md"
              }`}>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-2 h-2 rounded-full ${isTop ? "bg-accent" : "bg-text-dark/20"}`}></div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-text-dark/90">
                  {card.title}
                </h4>
              </div>
              <p className="font-heading text-sm text-text-dark/60 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
