import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, DollarSign, BarChart3 } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    value: "60%",
    numericTarget: 60,
    suffix: "%",
    label: "Reduction in Dwell Time",
    detail: "Average carrier wait time drops from 2+ hours to under 50 minutes.",
  },
  {
    icon: BarChart3,
    value: "85%+",
    numericTarget: 85,
    suffix: "%+",
    label: "Dock Utilization Rate",
    detail: "Eliminate idle gaps and maximize throughput at every loading bay.",
  },
  {
    icon: DollarSign,
    value: "$150K+",
    numericTarget: 150,
    suffix: "K+",
    prefix: "$",
    label: "Annual Detention Savings",
    detail: "Reduce detention and demurrage costs across your carrier network.",
  },
  {
    icon: TrendingUp,
    value: "40%",
    numericTarget: 40,
    suffix: "%",
    label: "Throughput Increase",
    detail: "More loads processed per dock door, per shift, per day.",
  },
];

const Counter = ({ target, suffix, prefix, inView }: { target: number; suffix: string; prefix?: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span>
      {prefix || ""}{display}{suffix}
    </span>
  );
};

const ROISection = () => {
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
            The Business Case
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Dock utilization optimization that pays for itself
          </h2>
          <p className="text-muted-foreground font-body font-normal text-sm">
            The ROI is clear. Here's what our customers achieve within the first 90 days.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-7 text-center card-elevated transition-all duration-500 relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="block text-3xl md:text-4xl font-display font-light number-accent mb-2">
                <Counter target={m.numericTarget} suffix={m.suffix} prefix={(m as any).prefix} inView={inView} />
              </span>
              <p className="text-[13px] font-display font-normal text-foreground mb-2">{m.label}</p>
              <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
