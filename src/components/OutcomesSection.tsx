import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, BarChart3, UserCheck, Users, Truck, CalendarCheck } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Reduce Truck Wait Times",
    description: "Cut carrier dwell time by up to 60% with automated time slot management and staggered arrivals.",
    metric: "60%",
    metricLabel: "less waiting",
  },
  {
    icon: BarChart3,
    title: "Maximize Dock Utilization",
    description: "Push dock door utilization above 85% by eliminating gaps, no-shows, and scheduling blind spots.",
    metric: "85%+",
    metricLabel: "utilization",
  },
  {
    icon: UserCheck,
    title: "Fewer No-Shows",
    description: "Automated reminders and carrier accountability reduce no-show rates to near zero.",
    metric: "~0%",
    metricLabel: "no-shows",
  },
  {
    icon: Users,
    title: "Smarter Labor Planning",
    description: "Know exactly when trucks arrive so you can staff docks precisely — no more overtime surprises.",
    metric: "30%",
    metricLabel: "labor savings",
  },
  {
    icon: Truck,
    title: "Better Carrier Experience",
    description: "Give carriers a self-service portal to book, reschedule, and check in — no phone calls needed.",
    metric: "24/7",
    metricLabel: "self-service",
  },
  {
    icon: CalendarCheck,
    title: "Complete Appointment Control",
    description: "Enforce capacity rules by load type, dock door, and time window. Every slot is optimized automatically.",
    metric: "100%",
    metricLabel: "controlled",
  },
];

const OutcomesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-3">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
            Dock scheduling that delivers measurable results
          </h2>
          <p className="text-muted-foreground font-body font-normal text-sm">
            Every feature is designed around one goal: making your loading bay operations faster, predictable, and cost-efficient.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-400 group relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-right">
                <span className="text-2xl font-display font-light text-primary/80">{item.metric}</span>
                <p className="text-[10px] font-body text-muted-foreground tracking-wider uppercase">{item.metricLabel}</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-display font-normal text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed pr-12">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
