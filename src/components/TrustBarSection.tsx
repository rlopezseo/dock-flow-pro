import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const kpis = [
  { target: 500, suffix: "+", label: "Clients Worldwide" },
  { target: 12, suffix: "", label: "Countries" },
  { target: 3, suffix: "M+", label: "Shipments Managed" },
  { target: 98, suffix: "%", label: "Customer Retention" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2.2,
      ease: [0.25, 0.46, 0.45, 0.94],
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
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section className="relative py-14 overflow-hidden" ref={ref}>
      {/* Subtle decorative gradient at top */}
      <div className="absolute top-0 left-0 right-0 accent-line" />

      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-y-8">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="flex flex-col items-center text-center flex-1 min-w-[140px] relative"
            >
              {/* Divider between items */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border hidden lg:block" />
              )}

              <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-light tracking-tight number-accent leading-none mb-2">
                <Counter target={kpi.target} suffix={kpi.suffix} inView={inView} />
              </span>
              <span className="text-[11px] md:text-xs font-body font-normal text-muted-foreground tracking-[0.15em] uppercase mt-1">
                {kpi.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default TrustBarSection;
