import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { target: 60, suffix: "%", label: "Reduction in driver wait times" },
  { target: 85, suffix: "%+", label: "Dock door utilization rate" },
  { target: 0, prefix: "~$", suffix: "", label: "Monthly detention charges" },
  { target: 5, suffix: " days", label: "From signup to go-live" },
];

const CountUp = ({ target, prefix = "", suffix = "", inView }: { target: number; prefix?: string; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (target === 0) { setCount(0); return; }
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span>{prefix}{count}{suffix}</span>;
};

const MetricsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-light text-foreground text-center tracking-[-0.02em]"
        >
          Dock Scheduling Results Measured in <span className="text-accent font-normal">Days</span> — Not Months
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-9 text-center hover:border-accent/20 transition-colors"
            >
              <p className="text-4xl md:text-[52px] font-bold text-accent font-display">
                <CountUp target={m.target} prefix={m.prefix} suffix={m.suffix} inView={inView} />
              </p>
              <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
