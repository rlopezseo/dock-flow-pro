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
    <section className="relative py-28 bg-section-alt overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            How loading dock appointment scheduling works — in five steps
          </h2>
        </motion.div>

        {/* Desktop: timeline layout */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

          {steps.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className={`relative flex items-center mb-16 last:mb-0 ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-[hsl(0,0%,98%)] z-10" />

                {/* Card */}
                <div className={`w-[44%] bg-card rounded-2xl p-7 card-elevated group hover:shadow-lg transition-all duration-500 ${isLeft ? "mr-auto text-right" : "ml-auto text-left"}`}>
                  <div className={`flex items-center gap-4 mb-4 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] font-body tracking-[0.2em] text-primary/60 uppercase block">
                        Step {item.step}
                      </span>
                      <h3 className="text-sm font-display font-light text-foreground mt-0.5">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical cards */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative mb-6 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-7 w-3 h-3 rounded-full border-2 border-primary bg-[hsl(0,0%,98%)] z-10" style={{ transform: "translateX(8px)" }} />

              <div className="bg-card rounded-xl p-6 card-elevated">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-body tracking-[0.2em] text-primary/60 uppercase">Step {item.step}</span>
                    <h3 className="text-[13px] font-display font-light text-foreground mt-1 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
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
