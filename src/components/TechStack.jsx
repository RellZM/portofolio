import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic structure, accessibility, and SEO-optimized markup foundations.",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Advanced layouts, animations, and responsive design systems.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Core logic, asynchronous operations, and interactive functional programming.",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    desc: "Low-level memory management and high-performance algorithms.",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    desc: "Object-oriented system design and resource-constrained environments.",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    desc: "Enterprise logic, backend services, and robust architectural patterns.",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "Relational data modeling, complex queries, and state management.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Component-driven UI, state synchronization, and dynamic client experiences.",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    desc: "Utility-first styling for rapid, scalable, and systematic design implementation.",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    desc: "Visual prototyping, wireframing, and UI/UX design handoff.",
  },
];

export default function TechStack() {
  const container = useRef(null);

  useEffect(() => {
    // Add a slight delay to ensure DOM is fully painted before attaching ScrollTrigger
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".tech-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }, container);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={container}
      id="stack"
      className="py-24 px-6 md:px-12 lg:px-24 bg-primary relative z-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-drama italic text-4xl md:text-6xl text-white mb-20 text-center">
          Technical Arsenal.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto place-items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="tech-item w-full max-w-[160px] group relative aspect-square flex flex-col items-center justify-center p-4 md:p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-accent/5 hover:border-accent/40 transition-all duration-300 cursor-pointer">
              {/* Hover Glow Background */}
              <div className="absolute inset-x-4 inset-y-4 bg-accent/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-full pointer-events-none -z-0"></div>

              {/* Icon & Name */}
              <div className="relative z-10 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 mb-3 opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
                <span className="font-mono text-[10px] md:text-xs font-semibold text-white/50 group-hover:text-accent transition-colors">
                  {tech.name}
                </span>
              </div>

              {/* Tooltip Details (Hidden by default, slides up on hover) */}
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] md:w-48 opacity-0 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300 ease-out z-50 pointer-events-none">
                <div className="bg-[#1A1A22] border border-white/10 p-3 rounded-xl shadow-xl shadow-black/50 text-center relative pointer-events-auto">
                  {/* Tooltip arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1A1A22] border-t border-l border-white/10 rotate-45"></div>
                  <p className="font-heading text-[10px] md:text-[11px] leading-snug text-white/80 relative z-10">
                    {tech.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
