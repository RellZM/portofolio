import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        ref={navRef}
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-4xl border ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-text-dark/10 text-text-dark shadow-lg"
            : "bg-transparent border-transparent text-white"
        }`}>
        <div className="font-heading font-bold tracking-tight text-lg">AZM</div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a
            href="#features"
            className="hover:-translate-y-[1px] transition-transform">
            Expertise
          </a>
          <a
            href="#history"
            className="hover:-translate-y-[1px] transition-transform">
            History
          </a>
          <a
            href="#cv"
            className="hover:-translate-y-[1px] transition-transform">
            CV
          </a>
        </div>

        <a
          href="mailto:afrelzhm@gmail.com"
          className="relative overflow-hidden bg-accent text-primary px-5 py-2 rounded-full font-semibold text-sm transition-transform hover:scale-[1.03] active:scale-95 group"
          style={{
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}>
          <span className="relative z-10">Contact Me</span>
          <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
        </a>
      </nav>
    </div>
  );
}
