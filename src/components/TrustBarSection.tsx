import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const kpis = [
  { target: 60, suffix: "%", label: "Less Dwell Time" },
  { target: 80, suffix: "%", label: "Less Gate Waiting" },
  { target: 85, suffix: "%+", label: "Dock Utilization" },
  { target: 20, suffix: "×", label: "Faster Booking" },
  { target: 0, suffix: "", label: "ISO 27001 Certified", isText: true },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

const TrustBarSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="py-10 border-b border-border" ref={ref}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="flex items-baseline gap-2"
            >
              <span className="text-3xl md:text-4xl font-display font-light text-primary tracking-tight">
                {kpi.isText ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    ✓
                  </motion.span>
                ) : (
                  <Counter target={kpi.target} suffix={kpi.suffix} inView={inView} />
                )}
              </span>
              <span className="text-xs md:text-sm font-body font-normal text-muted-foreground tracking-wide">
                {kpi.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
