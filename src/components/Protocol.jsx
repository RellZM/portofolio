import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Relational Architecture",
    desc: "Designing robust MySQL schemas and mapping application logic via strict ERDs before initiating development.",
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#7B61FF] rounded-[2rem] border border-white/10 shadow-2xl group">
        <svg
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-700 group-hover:scale-105"
          viewBox="0 0 100 100">
          <g className="animate-[pulse_4s_ease-in-out_infinite]">
            <ellipse
              cx="50"
              cy="25"
              rx="30"
              ry="10"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="opacity-90"
            />
            <path
              d="M20 25 L20 75 M80 25 L80 75"
              stroke="white"
              strokeWidth="1.5"
              className="opacity-90"
            />
            <ellipse
              cx="50"
              cy="75"
              rx="30"
              ry="10"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="opacity-90"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="30"
              ry="10"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-40"
            />
            <path
              d="M50 35 L50 65"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="2 4"
              className="animate-[spin_10s_linear_infinite]"
            />
          </g>
        </svg>
      </div>
    ),
  },
  {
    num: "02",
    title: "Interface Synthesis",
    desc: "Translating complex Figma prototypes into pixel-perfect, highly maintainable React components.",
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#7B61FF] rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
        <div className="grid grid-cols-6 grid-rows-6 w-[70%] h-[70%] absolute inset-0 m-auto opacity-30 gap-2">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className={`border-[1.5px] border-white/40 rounded-sm transition-colors duration-500 ${[7, 8, 14, 15, 22].includes(i) ? "bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" : ""}`}></div>
          ))}
        </div>
        <div
          className="absolute w-[3px] h-[150%] bg-white/90 blur-[2px] shadow-[0_0_20px_rgba(255,255,255,1)] animate-[scanning_3s_ease-in-out_infinite] rotate-12 -translate-x-[200px]"
          style={{
            animationName: "scanning",
            animationDuration: "3s",
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
    title: "Hardware Bridging",
    desc: "Connecting high-level applications to bare-metal logic utilizing C/C++ to optimize microcontroller performance.",
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-[#7B61FF] rounded-[2rem] border border-white/10 shadow-2xl group">
        <svg
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 transition-transform duration-700 group-hover:scale-105"
          viewBox="0 0 100 100">
          <g>
            <rect
              x="35"
              y="35"
              width="30"
              height="30"
              rx="4"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <rect
              x="42"
              y="42"
              width="16"
              height="16"
              rx="2"
              fill="white"
              className="opacity-30 animate-[pulse_2s_ease-in-out_infinite]"
            />
            {[20, 50, 80].map((y) => (
              <g key={y}>
                <path
                  d={`M10 ${y} L35 ${y}`}
                  stroke="white"
                  strokeWidth="1.5"
                  className="opacity-60"
                />
                <path
                  d={`M65 ${y} L90 ${y}`}
                  stroke="white"
                  strokeWidth="1.5"
                  className="opacity-60"
                />
                <circle
                  cx="10"
                  cy={y}
                  r="2"
                  fill="white"
                  className="animate-ping"
                  style={{ animationDelay: `${y * 10}ms` }}
                />
                <circle
                  cx="90"
                  cy={y}
                  r="2"
                  fill="white"
                  className="animate-ping"
                  style={{ animationDelay: `${y * 15}ms` }}
                />
              </g>
            ))}
            {[20, 50, 80].map((x) => (
              <g key={`x-${x}`}>
                <path
                  d={`M${x} 10 L${x} 35`}
                  stroke="white"
                  strokeWidth="1.5"
                  className="opacity-60"
                />
                <path
                  d={`M${x} 65 L${x} 90`}
                  stroke="white"
                  strokeWidth="1.5"
                  className="opacity-60"
                />
                <circle
                  cx={x}
                  cy="10"
                  r="2"
                  fill="white"
                  className="animate-ping"
                  style={{ animationDelay: `${x * 20}ms` }}
                />
                <circle
                  cx={x}
                  cy="90"
                  r="2"
                  fill="white"
                  className="animate-ping"
                  style={{ animationDelay: `${x * 5}ms` }}
                />
              </g>
            ))}
          </g>
        </svg>
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
            scale: 0.85,
            opacity: 0,
            filter: "blur(20px)",
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
      className="relative w-full bg-background text-text-dark lg:pb-32">
      <div className="pt-32 pb-16 px-6 md:px-12 text-center relative z-20 bg-background/90 backdrop-blur-sm">
        <h2 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6">
          Engineering Protocol.
        </h2>
        <p className="font-heading text-text-dark/60 max-w-3xl mx-auto text-xl md:text-2xl mt-4">
          The methodical approach to transforming ideas into impregnable
          software architecture.
        </p>
      </div>

      <div className="relative mt-8">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="w-full h-screen flex items-center justify-center sticky top-0 bg-background px-6 md:px-12 z-10 will-change-transform">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center justify-center">
              {/* Text Side */}
              <div className="flex flex-col gap-2 md:gap-8 order-2 lg:order-1 text-center lg:text-left w-full">
                <span className="font-mono text-5xl md:text-9xl font-black text-text-dark/10 leading-none">
                  {step.num}
                </span>
                <h3 className="font-heading font-black text-3xl md:text-6xl lg:text-7xl tracking-tight leading-none">
                  {step.title}
                </h3>
                <p className="font-heading text-base sm:text-lg md:text-2xl lg:text-3xl text-text-dark/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {step.desc}
                </p>
              </div>

              {/* Visual Side */}
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none aspect-square lg:w-[110%] order-1 lg:order-2 p-2 bg-text-dark/5 rounded-[2.5rem] relative mx-auto">
                <div className="absolute inset-2 md:inset-4 overflow-hidden rounded-[2rem]">
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
