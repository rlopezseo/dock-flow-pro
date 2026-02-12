import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileSpreadsheet, PhoneOff, TrafficCone, Users, DollarSign, Eye } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Excel & Email Scheduling",
    description: "Manual slot coordination via spreadsheets and email chains leads to double-bookings, version conflicts, and zero audit trail.",
  },
  {
    icon: PhoneOff,
    title: "Carrier No-Shows & Late Arrivals",
    description: "Without automated reminders and accountability, no-show rates can exceed 15% — wasting dock capacity every day.",
  },
  {
    icon: TrafficCone,
    title: "Yard & Gate Congestion",
    description: "Trucks stack up at gates because arrivals aren't staggered. The result: safety risks, idle drivers, and frustrated operations teams.",
  },
  {
    icon: Users,
    title: "Labor Planning Chaos",
    description: "When you don't know who's arriving when, staffing docks becomes guesswork — leading to overtime costs or idle crews.",
  },
  {
    icon: DollarSign,
    title: "Detention & Demurrage Costs",
    description: "Every extra hour a truck waits costs $25–$75. Multiply that across hundreds of loads and the financial impact is staggering.",
  },
  {
    icon: Eye,
    title: "Zero Real-Time Visibility",
    description: "Operations teams fly blind. No live view of dock status, no ETA tracking, no way to proactively manage exceptions.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-section-alt overflow-hidden" ref={ref}>
      {/* Dot pattern decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="accent-line w-12 mb-6" />
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Why loading docks get congested
          </h2>
          <p className="text-muted-foreground font-body font-normal text-sm leading-relaxed max-w-lg">
            Most warehouses still manage dock scheduling with phone calls, emails, and spreadsheets. The result is predictable — and expensive.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-card rounded-xl p-7 card-elevated transition-all duration-500 group relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/15 group-hover:to-primary/8 transition-all duration-500">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-[13px] font-display font-normal text-foreground mb-2.5 tracking-wide">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
