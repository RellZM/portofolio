import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import DecryptedText from "./DecryptedText";

export default function Hero() {
  const container = useRef(null);
  const textRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate normalized mouse position (-1 to 1) for parallax
      const normalizedX = (clientX / innerWidth) * 2 - 1;
      const normalizedY = (clientY / innerHeight) * 2 - 1;

      setMousePosition({ x: clientX, y: clientY });

      // Parallax effect on text
      if (textRef.current) {
        gsap.to(textRef.current, {
          x: normalizedX * 20,
          y: normalizedY * 10,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      });
    }, container);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      className="relative w-full h-[100dvh] flex items-end pb-20 md:pb-32 px-6 md:px-12 lg:px-24 lg:pt-0 overflow-hidden bg-primary cursor-default">
      {/* Relevant Tech/Cybersecurity Background Image */}
      <div className="absolute inset-0 z-0 bg-primary">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
          alt="Cybersecurity and technology concept"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 origin-center"
          style={{
            transform: `scale(1.05) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-primary/20"></div>

        {/* Noise Overlay for Texture */}
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none noise-overlay"></div>

        {/* Subtle Interactive Particle Grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123, 97, 255, 0.25) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`,
          }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-white">
        <div ref={textRef}>
          <h1 className="flex flex-col gap-2 mb-8">
            <span className="hero-anim font-heading font-bold text-xl md:text-3xl tracking-tight text-white/80 uppercase">
              <DecryptedText
                text="Curious Developer. Security Minded."
                speed={80}
                maxIterations={40}
                sequential={true}
              />
            </span>
            <span className="hero-anim font-drama italic text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white inline-block relative group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                <DecryptedText
                  text="Building Secure Systems."
                  speed={70}
                  maxIterations={60}
                  sequential={true}
                />
              </span>
              <span className="absolute -inset-x-2 -inset-y-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10 shadow-[4px_4px_0_rgba(123,97,255,0.3)]"></span>
            </span>
          </h1>

          <p className="hero-anim max-w-xl text-lg md:text-xl text-white/70 mb-10 font-heading">
            Afrel Zharif Muflih — freshman Software Engineering student with a
            passion for building clean software and understanding how systems
            break. Exploring the intersection of development and cybersecurity.
          </p>
        </div>

        <div className="hero-anim">
          <a
            href="mailto:afrelzhm@gmail.com"
            className="inline-flex items-center justify-center relative overflow-hidden bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-[1.03] active:scale-95 group shadow-[0_0_40px_rgba(123,97,255,0.2)] hover:shadow-[0_0_60px_rgba(123,97,255,0.4)]"
            style={{
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}>
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <svg
                className="w-5 h-5 group-hover:translate-x-1 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-white/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
