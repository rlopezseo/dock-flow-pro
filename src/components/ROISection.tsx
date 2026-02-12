import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, DollarSign, BarChart3 } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    value: "60%",
    label: "Reduction in Dwell Time",
    detail: "Average carrier wait time drops from 2+ hours to under 50 minutes.",
  },
  {
    icon: BarChart3,
    value: "85%+",
    label: "Dock Utilization Rate",
    detail: "Eliminate idle gaps and maximize throughput at every loading bay.",
  },
  {
    icon: DollarSign,
    value: "$150K+",
    label: "Annual Detention Savings",
    detail: "Reduce detention and demurrage costs across your carrier network.",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Throughput Increase",
    detail: "More loads processed per dock door, per shift, per day.",
  },
];

const ROISection = () => {
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
            The Business Case
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
            Dock utilization optimization that pays for itself
          </h2>
          <p className="text-muted-foreground font-body font-normal text-sm">
            The ROI is clear. Here's what our customers achieve within the first 90 days.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-7 text-center hover:shadow-lg hover:border-primary/15 transition-all duration-400"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/8 flex items-center justify-center mb-5">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="block text-3xl font-display font-light text-primary stat-glow mb-1">{m.value}</span>
              <p className="text-sm font-display font-normal text-foreground mb-2">{m.label}</p>
              <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
