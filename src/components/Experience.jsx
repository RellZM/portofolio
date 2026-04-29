import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Frontend development",
    company: "Schematics ITS",
    date: "April 2026 – now",
    desc: [
      "Successfully sliced 5+ complex design mockups from Figma into high-fidelity code using Next.js & Tailwind CSS achieving 95% visual accuracy and ensuring 100% responsiveness across mobile, and desktop devices.",
      "Collaborated with UI/UX designers to establish a shared component library, which streamlined the hand-off process and cut down implementation time by 15% while maintaining a consistent user experience across the entire platform.",
    ],
  },
  {
    role: "Administrative and Finance Intern",
    company: "Banyubramanta ITS",
    date: "October 2025 – November 2025",
    desc: [
      "Led and coordinated 5+ Intern members to organize Small-scale robot crafting.",
      "Led a team of 5+ interns in a robotics project, coordinating tasks and ensuring timely completion of development milestones.",
    ],
  },
  {
    role: "Internship/Tutor",
    company: "Kumon Institute of Education Co., Ltd.",
    date: "May 2025 – July 2025",
    desc: [
      "Correct an average of 100–150 student assignments per day in accordance with Kumon assessment standards.",
      "Learn and understand the Kumon system and learning methods to support consistent and efficient learning.",
    ],
  },
  {
    role: "Head of Equipment / Division Lead",
    company: "KARANG TARUNA RW 08",
    date: "August 2021 – August 2025",
    desc: [
      "Led and supervised a committee of over 20 members to organize Independence Day competitions, engaging more than 100 participants across multiple events.",
      "Managed logistics and inventory of over 50 pieces of equipment, ensuring all tools were fully functional and materials were delivered on time.",
    ],
  },
  {
    role: "Lead Logistic Team",
    company: "OSIS SMAN 1 SIDOARJO",
    date: "August 2022 – April 2024",
    desc: [
      "Coordinate and manage an inventory of over 100 items to support school events and student council activities.",
      "Ensure equipment is fully functional by conducting routine inspections prior to student events.",
    ],
  },
];

export default function Experience() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight text-text-dark">
            Operational History.
          </h2>
          <p className="font-drama italic text-xl text-text-dark/60 max-w-xl">
            A track record of leadership, logistics manipulation, and technical
            execution.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item relative pl-8 md:pl-0">
              {/* Timeline dot and line for mobile */}
              <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-text-dark/10 md:hidden"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent md:hidden"></div>

              <div className="flex flex-col md:flex-row md:gap-12 group">
                <div className="md:w-1/3 mb-2 md:mb-0 md:text-right relative">
                  {/* Timeline dot and line for desktop */}
                  <div className="hidden md:block absolute right-[-24px] top-2 bottom-[-3rem] w-px bg-text-dark/10"></div>
                  <div className="hidden md:block absolute right-[-28px] top-2 w-2 h-2 rounded-full bg-accent scale-100 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(123,97,255,0.5)] transition-all duration-300"></div>

                  <h3 className="font-mono text-sm tracking-wider text-text-dark/40 uppercase">
                    {exp.date}
                  </h3>
                </div>

                <div className="md:w-2/3 pb-12 md:pb-24">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-dark group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <h4 className="font-heading font-semibold text-lg text-text-dark/70 mb-6">
                    {exp.company}
                  </h4>

                  <ul className="space-y-4">
                    {exp.desc.map((item, i) => (
                      <li
                        key={i}
                        className="font-heading text-base text-text-dark/60 flex items-start gap-4">
                        <span className="text-accent mt-1.5 opacity-70 font-mono">
                          &gt;
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
