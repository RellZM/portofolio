export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0A0F] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 mt-0 z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-sm">
          <h2 className="font-heading font-bold text-3xl mb-4 text-white/90">
            Afrel Zharif Muflih
          </h2>
          <p className="font-heading text-white/50 leading-relaxed text-sm">
            Precision engineering for modern systems. Building resilient,
            scalable, and secure architecture.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/30 mb-2">
              Connect
            </span>
            <a
              href="mailto:afrelzhm@gmail.com"
              className="font-heading text-sm text-white/70 hover:text-accent transition-colors">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/afrel-zharif-m-2b96392bb/"
              target="_blank"
              rel="noreferrer"
              className="font-heading text-sm text-white/70 hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a
              href="https://github.com/RellZM"
              target="_blank"
              rel="noreferrer"
              className="font-heading text-sm text-white/70 hover:text-accent transition-colors">
              GitHub
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/30 mb-2">
              Navigation
            </span>
            <a
              href="#features"
              className="font-heading text-sm text-white/70 hover:text-white transition-colors">
              Expertise
            </a>
            <a
              href="#experience"
              className="font-heading text-sm text-white/70 hover:text-white transition-colors">
              Experience
            </a>
            <a
              href="#philosophy"
              className="font-heading text-sm text-white/70 hover:text-white transition-colors">
              Philosophy
            </a>
            <a
              href="#protocol"
              className="font-heading text-sm text-white/70 hover:text-white transition-colors">
              Protocol
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-heading text-xs text-white/40">
          &copy; {new Date().getFullYear()} Afrel Zharif Muflih. All rights
          reserved.
        </p>

        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
            System Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
