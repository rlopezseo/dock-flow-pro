import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Automated dock scheduling", manual: false, totm: true },
  { feature: "Real-time dock visibility", manual: false, totm: true },
  { feature: "Carrier self-service booking", manual: false, totm: true },
  { feature: "Capacity enforcement rules", manual: false, totm: true },
  { feature: "Automated reminders & no-show reduction", manual: false, totm: true },
  { feature: "Audit trail & compliance", manual: false, totm: true },
  { feature: "WMS / TMS / ERP integration", manual: false, totm: true },
  { feature: "Wait time & utilization analytics", manual: false, totm: true },
  { feature: "Multi-site support", manual: false, totm: true },
  { feature: "Go-live in 7 weeks", manual: false, totm: true },
];

const CompareSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-section-alt overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-25" />

      <div className="container max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Compare
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Dock scheduling software vs. spreadsheets and emails
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card rounded-xl overflow-hidden card-elevated"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px]">
            <div className="p-5 text-xs font-display font-normal text-muted-foreground tracking-wider uppercase">Feature</div>
            <div className="p-5 text-xs font-display font-normal text-muted-foreground tracking-wider uppercase text-center border-l border-border">
              Manual
            </div>
            <div className="p-5 text-xs font-display font-normal tracking-wider uppercase text-center border-l border-border bg-gradient-to-b from-primary/8 to-primary/4 number-accent">
              TrucksOnTheMap
            </div>
          </div>

          <div className="section-divider" />

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] ${
                i < rows.length - 1 ? "border-b border-border/50" : ""
              } hover:bg-secondary/30 transition-colors`}
            >
              <div className="p-4 px-5 text-xs font-body font-normal text-foreground">{row.feature}</div>
              <div className="p-4 flex items-center justify-center border-l border-border/50">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-3 h-3 text-muted-foreground/50" />
                </div>
              </div>
              <div className="p-4 flex items-center justify-center border-l border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;
