import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarPlus, Settings2, BellRing, ScanLine, BarChart3 } from "lucide-react";
import bgHowItWorks from "@/assets/bg-howitworks.jpg";

const steps = [
  {
    icon: CalendarPlus,
    step: "01",
    title: "Request a Time Slot",
    description: "Carriers or planners select an available dock slot through the self-service portal or via API integration.",
  },
  {
    icon: Settings2,
    step: "02",
    title: "Rules Enforce Capacity",
    description: "The system validates against dock capacity, load type rules, and real-time availability before confirming.",
  },
  {
    icon: BellRing,
    step: "03",
    title: "Confirm & Remind",
    description: "Automated confirmations and reminders sent to all parties — reducing no-shows to near zero.",
  },
  {
    icon: ScanLine,
    step: "04",
    title: "Check-In & Check-Out",
    description: "Drivers check in digitally. Operations teams see real-time dock status from arrival through departure.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Analyze & Optimize",
    description: "Analytics on wait times, utilization rates, and carrier adherence drive continuous improvement.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background image - very faded */}
      <div className="absolute inset-0">
        <img
          src={bgHowItWorks}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Loading dock appointment scheduling — in five steps
          </h2>
        </motion.div>

        {/* Desktop: timeline zigzag */}
        <div className="hidden lg:block relative max-w-4xl mx-auto">
          {/* Central vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
            style={{ background: "linear-gradient(to bottom, hsl(207 60% 30% / 0.3), hsl(207 60% 30% / 0.08), transparent)" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2 }}
          />

          {steps.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className={`relative flex items-center mb-8 last:mb-0 ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.12 * i + 0.15 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </motion.div>

                {/* Horizontal connector line */}
                <motion.div
                  className={`absolute top-1/2 h-px bg-primary/15 ${isLeft ? "left-[calc(50%+24px)] right-[56%]" : "right-[calc(50%+24px)] left-[56%]"}`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.12 * i + 0.3 }}
                  style={{ transformOrigin: isLeft ? "left" : "right" }}
                />

                {/* Card */}
                <div
                  className={`w-[42%] bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-[0_2px_12px_hsl(220_20%_50%/0.06),0_8px_30px_hsl(220_20%_50%/0.04)] group hover:shadow-[0_4px_20px_hsl(207_60%_30%/0.1),0_12px_40px_hsl(220_20%_50%/0.06)] hover:-translate-y-0.5 transition-all duration-500 ${isLeft ? "mr-auto text-right" : "ml-auto text-left"}`}
                >
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                    <div>
                      <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase block">
                        Step {item.step}
                      </span>
                      <h3 className="text-sm font-display font-light text-foreground mt-0.5">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-12">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="relative mb-5 last:mb-0"
            >
              {/* Icon dot */}
              <div className="absolute -left-12 top-5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20" style={{ transform: "translateX(1px)" }}>
                <item.icon className="w-3.5 h-3.5 text-white" />
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-[0_2px_12px_hsl(220_20%_50%/0.06)]">
                <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">Step {item.step}</span>
                <h3 className="text-[13px] font-display font-light text-foreground mt-0.5 mb-1.5">{item.title}</h3>
                <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
