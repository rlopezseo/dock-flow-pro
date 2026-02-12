import { motion, useInView, animate } from "framer-motion";
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
                {kpi.isText ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    className="inline-flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full border-2 border-primary/30 text-primary text-xl"
                  >
                    ✓
                  </motion.span>
                ) : (
                  <Counter target={kpi.target} suffix={kpi.suffix} inView={inView} />
                )}
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
