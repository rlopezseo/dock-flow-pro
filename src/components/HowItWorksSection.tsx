import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarPlus, Settings2, BellRing, ScanLine, BarChart3 } from "lucide-react";

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
    description: "The system validates the request against dock capacity, load type rules, and real-time availability before confirming.",
  },
  {
    icon: BellRing,
    step: "03",
    title: "Confirm & Remind",
    description: "Automated confirmations and reminders are sent to all parties — reducing no-shows and late arrivals to near zero.",
  },
  {
    icon: ScanLine,
    step: "04",
    title: "Check-In & Check-Out",
    description: "Drivers check in at the gate digitally. Operations teams see real-time dock status from arrival through departure.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Analyze & Optimize",
    description: "Comprehensive analytics on wait times, utilization rates, and carrier adherence drive continuous improvement.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            How loading dock appointment scheduling works — in five steps
          </h2>
        </motion.div>

        {/* Desktop: compact timeline */}
        <div className="hidden lg:block relative max-w-4xl mx-auto">
          {/* Central vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {steps.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className={`relative flex items-center mb-6 last:mb-0 ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Dot on timeline */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-primary bg-[hsl(0,0%,98%)] z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.12 * i + 0.2 }}
                />

                {/* Card */}
                <div className={`w-[44%] bg-card rounded-xl p-5 card-elevated group hover:shadow-lg transition-all duration-400 ${isLeft ? "mr-auto text-right" : "ml-auto text-left"}`}>
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
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

        {/* Mobile: vertical */}
        <div className="lg:hidden relative pl-7">
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="relative mb-4 last:mb-0"
            >
              <div className="absolute -left-7 top-6 w-3 h-3 rounded-full border-2 border-primary bg-[hsl(0,0%,98%)] z-10" style={{ transform: "translateX(7px)" }} />

              <div className="bg-card rounded-xl p-5 card-elevated">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">Step {item.step}</span>
                    <h3 className="text-[13px] font-display font-light text-foreground mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
