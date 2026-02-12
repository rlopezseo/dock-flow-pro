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
    <section className="py-24 bg-secondary/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
            From freight appointment booking to real-time analytics in five steps
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Circle */}
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary/40">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-6 flex-1 hover:shadow-md hover:border-primary/15 transition-all duration-400">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-display tracking-[0.2em] text-primary uppercase">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-display font-normal text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
