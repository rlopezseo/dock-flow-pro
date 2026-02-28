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
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgHowItWorks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            How TrucksOnTheMap handles dock scheduling — in five steps
          </h2>
        </motion.div>

        {/* Desktop: clean vertical timeline, left-aligned line with right content */}
        <div className="hidden lg:block relative max-w-3xl mx-auto">
          {steps.map((item, i) => {
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="relative flex gap-10 pb-14 last:pb-0"
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center shrink-0 w-16">
                  {/* Step number circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.12 * i + 0.1, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25 relative z-10"
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  {/* Vertical connector */}
                  {!isLast && (
                    <motion.div
                      className="w-px flex-1 mt-0 bg-gradient-to-b from-primary/30 to-primary/10"
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.12 * i + 0.3 }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-7 border border-white/60 shadow-[0_2px_12px_hsl(220_20%_50%/0.05),0_8px_24px_hsl(220_20%_50%/0.04)] hover:shadow-[0_4px_20px_hsl(207_60%_30%/0.08),0_12px_36px_hsl(220_20%_50%/0.05)] hover:-translate-y-0.5 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">
                        Step {item.step}
                      </span>
                      <div className="h-px flex-1 bg-primary/10" />
                    </div>
                    <h3 className="text-base font-display font-light text-foreground mb-2">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          {steps.map((item, i) => {
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20 relative z-10">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/25 to-primary/5" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-[0_2px_12px_hsl(220_20%_50%/0.05)]">
                    <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">Step {item.step}</span>
                    <h3 className="text-[13px] font-display font-light text-foreground mt-1 mb-1.5">{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
