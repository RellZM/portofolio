import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`pointer-events-auto flex flex-col px-6 py-3 transition-all duration-500 w-full max-w-4xl border ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border-text-dark/10 text-text-dark shadow-lg"
            : "bg-transparent border-transparent text-white"
        } ${isMobileMenuOpen ? "rounded-3xl" : "rounded-full"}`}>
        
        <div className="flex items-center justify-between w-full">
          <div className="font-heading font-bold tracking-tight text-lg">AZM</div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a
              href="#features"
              className="hover:-translate-y-[1px] transition-transform">
              Expertise
            </a>
            <a
              href="#experience"
              className="hover:-translate-y-[1px] transition-transform">
              History
            </a>
            <a
              href="#cv-display"
              className="hover:-translate-y-[1px] transition-transform">
              CV
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:afrelzhm@gmail.com"
              className="relative overflow-hidden bg-accent text-primary px-4 py-2 md:px-5 md:py-2 rounded-full font-semibold text-xs md:text-sm transition-transform hover:scale-[1.03] active:scale-95 group"
              style={{
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}>
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
            </a>
            <button
              className="md:hidden p-1 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}>
          <div className="flex flex-col gap-4 pb-2 px-2 text-sm font-medium">
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-accent transition-colors">
              Expertise
            </a>
            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-accent transition-colors">
              History
            </a>
            <a
              href="#cv-display"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-accent transition-colors">
              CV
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
