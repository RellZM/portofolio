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
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#0D0D12] rounded-3xl border border-white/5">
        <svg
          className="w-48 h-48 animate-[spin_20s_linear_infinite]"
          viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            className="opacity-30"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1"
            className="opacity-50"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="2"
          />
          <path
            d="M50 10 L50 90 M10 50 L90 50"
            stroke="#C9A84C"
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
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#0D0D12] rounded-3xl border border-white/5">
        <div className="grid grid-cols-10 grid-rows-10 w-full h-full absolute inset-0 opacity-20">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-[#C9A84C]/20"></div>
          ))}
        </div>
        <div
          className="absolute w-[2px] h-[150%] bg-accent/80 blur-[2px] shadow-[0_0_15px_#C9A84C] animate-[scanning_4s_ease-in-out_infinite] rotate-12 -translate-x-[200px]"
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
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#0D0D12] rounded-3xl border border-white/5">
        <svg className="w-[80%] h-32" viewBox="0 0 200 50">
          <path
            d="M 0 25 L 40 25 L 50 10 L 60 40 L 70 25 L 130 25 L 140 5 L 150 45 L 160 25 L 200 25"
            fill="none"
            stroke="#C9A84C"
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
          @keyframes pulse-draw {
            to { stroke-dashoffset: 0; }
          }
         `}</style>
      </div>
    ),
  },
];

export default function Protocol() {
  const container = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;

      panels.forEach((panel, i) => {
        // Skip the last panel for pinning/scaling out, it just stops
        if (i < panels.length - 1) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(panel, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "bottom top",
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
      className="relative w-full bg-background text-text-dark pb-24">
      <div className="pt-32 pb-16 px-6 md:px-12 text-center">
        <h2 className="font-heading font-bold text-4xl tracking-tight mb-4">
          Engineering Protocol.
        </h2>
        <p className="font-heading text-text-dark/60 max-w-xl mx-auto">
          The methodical approach to transforming ideas into impregnable
          software architecture.
        </p>
      </div>

      <div className="relative">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="w-full h-screen flex items-center justify-center sticky top-0 bg-background/95 backdrop-blur-md px-6 z-10">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Text Side */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <span className="font-mono text-5xl md:text-7xl font-light text-text-dark/20">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-tight">
                  {step.title}
                </h3>
                <p className="font-heading text-lg text-text-dark/60 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>

              {/* Visual Side */}
              <div className="aspect-square lg:aspect-auto lg:h-[600px] w-full order-1 lg:order-2 p-2 bg-text-dark/5 rounded-[2.5rem] shadow-2xl relative">
                <div className="absolute inset-2 overflow-hidden rounded-[2rem]">
                  <step.Visual />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
