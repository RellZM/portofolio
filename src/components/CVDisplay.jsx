import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";

export default function CVDisplay() {
  const cvPath = "/CV Afrel Zharif Muflih.pdf";

  return (
    <section
      id="cv-display"
      className="w-full py-24 md:py-32 bg-background relative overflow-hidden flex flex-col items-center border-t border-b border-text-dark/5">
      {/* Background Decoratives */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent"></span>
              <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">
                DOCUMENTATION
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-dark leading-tight tracking-tight">
              Curriculum{" "}
              <span className="text-accent italic font-drama">Vitae.</span>
            </h2>
          </div>

          <motion.a
            href={cvPath}
            download="Afrel_Zharif_Muflih_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 bg-text-dark text-background px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(24,24,27,0.15)] hover:shadow-[0_8px_30px_rgba(123,97,255,0.25)] hover:bg-black self-start md:self-auto">
            <Download className="w-5 h-5 text-accent transition-transform group-hover:-translate-y-1" />
            <span>Download PDF</span>
          </motion.a>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden border border-text-dark/10 shadow-[0_20px_50px_rgba(24,24,27,0.05)] bg-[#E8E7EC] p-2 md:p-4 group">
          {/* Inner Viewer Container */}
          <div className="relative w-full aspect-[1/1.4] md:aspect-[16/10] max-h-[80vh] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-inner">
            {/* Desktop PDF Iframe Viewer */}
            <iframe
              src={`${cvPath}#view=FitH&toolbar=0&navpanes=0`}
              title="Afrel Zharif Muflih CV"
              className="absolute inset-0 w-full h-full border-0 hidden md:block" // Hidden on mobile, shown on desktop
            />

            {/* Mobile Fallback Overlay (Since iframes often fail or look bad on mobile) */}
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-background md:hidden p-8 text-center text-text-dark">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">
                View Full Resume
              </h3>
              <p className="font-mono text-sm opacity-60 max-w-[250px] mx-auto mb-8">
                PDF rendering is optimized for larger screens to ensure
                readability.
              </p>

              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-text-dark text-background px-8 py-4 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-transform">
                Open Document <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Subtle Gradient Overlay on edges for a framed look (Desktop only) */}
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl md:rounded-2xl hidden md:block"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
