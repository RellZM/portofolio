import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Vulnerability Mapping",
    desc: "Rigorous threat modeling and architectural review before a single line of code is committed.",
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-primary/20 rounded-2xl border border-white/10 backdrop-blur-sm">
        <svg
          className="w-32 h-32 md:w-48 md:h-48 animate-[spin_25s_linear_infinite]"
          viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            className="opacity-30"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-50"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M50 10 L50 90 M10 50 L90 50"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-20"
          />
        </svg>
      </div>
    ),
  },
  {
    num: "02",
    title: "Secure Component Integration",
    desc: "Building isolated, fail-safe modules that communicate over zero-trust boundaries.",
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-primary/20 rounded-2xl border border-white/10 backdrop-blur-sm">
        <div className="grid grid-cols-10 grid-rows-10 w-full h-full absolute inset-0 opacity-10">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20"></div>
          ))}
        </div>
        <div
          className="absolute w-[2px] h-[150%] bg-white/80 blur-[2px] shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-[scanning_4s_ease-in-out_infinite] rotate-12 -translate-x-[200px]"
          style={{
            animationName: "scanning",
            animationDuration: "4s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}></div>
        <style>{`
          @keyframes scanning {
            0% { transform: translateX(-150px) rotate(12deg); }
            50% { transform: translateX(150px) rotate(12deg); }
            100% { transform: translateX(-150px) rotate(12deg); }
          }
        `}</style>
      </div>
    ),
  },
  {
    num: "03",
    title: "System Hardening",
    desc: "Continuous load testing, penetration simulation, and performance benchmarking.",
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-primary/20 rounded-2xl border border-white/10 backdrop-blur-sm">
        <svg className="w-[80%] h-24 md:h-32" viewBox="0 0 200 50">
          <path
            d="M 0 25 L 40 25 L 50 10 L 60 40 L 70 25 L 130 25 L 140 5 L 150 45 L 160 25 L 200 25"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            className="pulse-path"
          />
        </svg>
        <style>{`
          .pulse-path {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: pulse-draw 3s linear infinite;
          }
          @keyframes pulse-draw { to { stroke-dashoffset: 0; } }
        `}</style>
      </div>
    ),
  },
];

export default function Protocol() {
  const container = useRef(null);
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      const totalCards = cards.length;

      cards.forEach((card, index) => {
        const isLastCard = index === totalCards - 1;
        const cardInner = card.querySelector(".scroll-stack-card");

        // Create the stacking effect
        gsap.to(cardInner, {
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
            endTrigger: ".scroll-stack-end",
            end: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Scale and fade cards as they get covered
        if (!isLastCard) {
          gsap.to(cardInner, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(4px)",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 80%",
              end: "top 15%",
              scrub: true,
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="protocol"
      className="relative w-full bg-primary py-32 overflow-hidden">
      <style>{`
        .scroll-stack-scroller {
          position: relative;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .scroll-stack-inner {
          padding: 5vh 2rem 5rem;
          max-width: 85rem;
          margin: 0 auto;
        }

        .scroll-stack-card-wrapper {
          position: relative;
          padding-bottom: 2rem;
        }

        .scroll-stack-card {
          transform-origin: top center;
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          min-height: 24rem;
          width: 100%;
          padding: 3rem;
          border-radius: 40px;
          box-sizing: border-box;
          position: relative;
          display: flex;
          align-items: center;
          gap: 3rem;
          background: #7B61FF; /* Plasma Purple */
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .scroll-stack-card {
            flex-direction: column;
            padding: 2rem;
            min-height: auto;
            gap: 2rem;
          }
          .scroll-stack-inner {
            padding: 2vh 1rem 5rem;
          }
        }

        .scroll-stack-end {
          width: 100%;
          height: 10vh;
        }
      `}</style>

      <div className="px-6 md:px-12 text-center mb-24">
        <h2 className="font-heading font-bold text-4xl md:text-7xl tracking-tighter mb-6 text-white text-glow-purple">
          Engineering Protocol.
        </h2>
        <p className="font-heading text-white/50 max-w-2xl mx-auto text-lg md:text-xl">
          The methodical approach to transforming ideas into impregnable
          software architecture.
        </p>
      </div>

      <div className="scroll-stack-scroller">
        <div className="scroll-stack-inner">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="scroll-stack-card-wrapper">
              <div className="scroll-stack-card group">
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-4 relative z-10">
                  <span className="font-mono text-5xl md:text-8xl font-black text-black/10 transition-colors group-hover:text-black/15 duration-500">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-tight text-white leading-none">
                    {step.title}
                  </h3>
                  <p className="font-heading text-lg md:text-xl text-white/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Visual Section */}
                <div className="w-full md:w-[40%] aspect-square lg:h-[300px] relative z-20">
                  <step.Visual />
                </div>

                {/* Secondary Decorative Glow */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
              </div>
            </div>
          ))}
          <div className="scroll-stack-end"></div>
        </div>
      </div>
    </section>
  );
}
