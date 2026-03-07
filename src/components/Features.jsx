import DiagnosticShuffler from "./DiagnosticShuffler";
import TelemetryTypewriter from "./TelemetryTypewriter";
import CursorProtocolScheduler from "./CursorProtocolScheduler";

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 px-6 md:px-12 lg:px-24 bg-background relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight">
            Core Competencies.
          </h2>
          <p className="font-drama italic text-xl md:text-2xl text-text-dark/60 max-w-2xl">
            The fundamental principles that drive robust, scalable, and secure
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Logic */}
          <div className="flex flex-col h-full bg-white rounded-[2rem] p-1 border border-text-dark/5 shadow-xl shadow-text-dark/5 group hover:border-text-dark/10 transition-colors">
            <div className="p-8 pb-4">
              <h3 className="font-heading font-bold text-xl mb-2">
                Architectural Logic
              </h3>
              <p className="text-text-dark/60 text-sm leading-relaxed mb-6">
                Designing clean, maintainable systems built on solid principles.
              </p>
            </div>
            <div className="mt-auto px-4 pb-4">
              <DiagnosticShuffler />
            </div>
          </div>

          {/* Card 2: Communication */}
          <div className="flex flex-col h-full bg-white rounded-[2rem] p-1 border border-text-dark/5 shadow-xl shadow-text-dark/5 group hover:border-text-dark/10 transition-colors">
            <div className="p-8 pb-4">
              <h3 className="font-heading font-bold text-xl mb-2">
                Technical Syntax
              </h3>
              <p className="text-text-dark/60 text-sm leading-relaxed mb-6">
                Bridging the gap between complex code and human understanding.
              </p>
            </div>
            <div className="mt-auto px-4 pb-4">
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Card 3: Continuous Learning */}
          <div className="flex flex-col h-full bg-white rounded-[2rem] p-1 border border-text-dark/5 shadow-xl shadow-text-dark/5 group hover:border-text-dark/10 transition-colors">
            <div className="p-8 pb-4">
              <h3 className="font-heading font-bold text-xl mb-2">
                Adaptive Evolution
              </h3>
              <p className="text-text-dark/60 text-sm leading-relaxed mb-6">
                Relentlessly absorbing new paradigms and security vectors.
              </p>
            </div>
            <div className="mt-auto px-4 pb-4">
              <CursorProtocolScheduler />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
