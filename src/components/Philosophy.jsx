import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const container = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(".parallax-bg", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(text1.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        text2.current,
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6",
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="philosophy"
      className="relative w-full min-h-screen py-32 flex items-center justify-center overflow-hidden bg-primary text-background">
      {/* Texture Background */}
      <div className="absolute inset-0 z-0 opacity-20 parallax-bg">
        <img
          src="https://images.unsplash.com/photo-1594968973184-9040a5079963?q=80&w=2000&auto=format&fit=crop"
          alt="Dark luxurious texture"
          className="w-full h-[120%] object-cover object-center -mt-[10%]"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 text-center md:text-left">
        <p
          ref={text1}
          className="font-heading font-semibold text-lg md:text-2xl text-white/50 mb-8 max-w-2xl">
          Most software engineers focus on writing code:{" "}
          <br className="hidden md:block" />
          <span className="text-white/70">
            Syntax, speed, and immediate output.
          </span>
        </p>

        <h2
          ref={text2}
          className="font-drama italic font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
          I focus on building <br className="hidden md:block" />
          <span className="inline-block mt-2 font-bold text-accent px-4 py-1 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm shadow-[0_0_30px_rgba(201,168,76,0.15)] relative transform hover:scale-105 transition-transform duration-500">
            Resilient Architecture.
          </span>
        </h2>
      </div>
    </section>
  );
}
