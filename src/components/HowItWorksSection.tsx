import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CalendarPlus, Settings2, BellRing, ScanLine, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: CalendarPlus,
    step: "01",
    title: "Request a Time Slot",
    description: "Carriers select an available dock slot through the self-service portal or API.",
    accent: "from-primary to-[hsl(195,70%,40%)]",
  },
  {
    icon: Settings2,
    step: "02",
    title: "Rules Enforce Capacity",
    description: "Validates against dock capacity, load type rules, and real-time availability.",
    accent: "from-[hsl(195,70%,40%)] to-primary",
  },
  {
    icon: BellRing,
    step: "03",
    title: "Confirm & Remind",
    description: "Automated confirmations and reminders sent to all parties instantly.",
    accent: "from-primary to-[hsl(195,70%,40%)]",
  },
  {
    icon: ScanLine,
    step: "04",
    title: "Check-In & Check-Out",
    description: "Digital gate check-in with real-time dock status visibility.",
    accent: "from-[hsl(195,70%,40%)] to-primary",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Analyze & Optimize",
    description: "Analytics on wait times and utilization drive continuous improvement.",
    accent: "from-primary to-[hsl(195,70%,40%)]",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Loading dock appointment scheduling — in five steps
          </h2>
        </motion.div>

        {/* Desktop: horizontal compact cards */}
        <div className="hidden lg:grid grid-cols-5 gap-3 max-w-6xl mx-auto">
          {steps.map((item, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-default"
              >
                {/* Top accent bar */}
                <motion.div
                  className={`h-1 rounded-t-xl bg-gradient-to-r ${item.accent}`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * i + 0.3 }}
                  style={{ transformOrigin: "left" }}
                />

                <div className="bg-card rounded-b-xl p-5 card-elevated h-full relative overflow-hidden transition-all duration-500 group-hover:shadow-lg">
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    {/* Step number + icon row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[28px] font-display font-light text-primary/15 leading-none">
                        {item.step}
                      </span>
                      <motion.div
                        animate={isHovered ? { rotate: [0, -8, 8, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-colors duration-300"
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>

                    <h3 className="text-[13px] font-display font-light text-foreground mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="absolute -right-3 top-1/2 z-20 text-primary/25"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.15 * i + 0.5 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Animated progress bar desktop */}
        <motion.div
          className="hidden lg:block max-w-6xl mx-auto mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="h-px bg-border relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-[hsl(195,70%,40%)]"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Mobile: compact vertical */}
        <div className="lg:hidden space-y-3">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="relative"
            >
              <div className={`h-0.5 rounded-t-lg bg-gradient-to-r ${item.accent}`} />
              <div className="bg-card rounded-b-lg p-5 card-elevated flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">Step {item.step}</span>
                    <h3 className="text-[13px] font-display font-light text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
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
