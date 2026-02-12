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
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            From freight appointment booking to real-time analytics
          </h2>
        </motion.div>

        {/* Horizontal stepper */}
        <div className="hidden lg:flex items-start justify-between relative max-w-5xl mx-auto mb-0">
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="flex flex-col items-center text-center flex-1 px-3 relative"
            >
              {/* Circle */}
              <div className="w-16 h-16 rounded-2xl bg-card card-elevated flex items-center justify-center mb-5 relative z-10 transition-all duration-500 group-hover:shadow-xl">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <span className="text-[10px] font-display tracking-[0.2em] text-primary uppercase mb-2">
                Step {item.step}
              </span>
              <h3 className="text-[13px] font-display font-normal text-foreground mb-2">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed max-w-[180px]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-6 card-elevated flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-display tracking-[0.2em] text-primary uppercase">Step {item.step}</span>
                <h3 className="text-[13px] font-display font-normal text-foreground mt-1 mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
