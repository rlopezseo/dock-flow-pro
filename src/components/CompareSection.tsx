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
    <section className="py-24 bg-secondary/50" ref={ref}>
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-3">
            Compare
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
            Dock scheduling software vs. spreadsheets and emails
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card border border-border rounded-lg overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] border-b border-border">
            <div className="p-4 text-xs font-display font-normal text-muted-foreground tracking-wider uppercase">Feature</div>
            <div className="p-4 text-xs font-display font-normal text-muted-foreground tracking-wider uppercase text-center border-l border-border">
              Manual
            </div>
            <div className="p-4 text-xs font-display font-normal text-primary tracking-wider uppercase text-center border-l border-border bg-primary/5">
              TrucksOnTheMap
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] ${
                i < rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="p-4 text-xs font-body font-normal text-foreground">{row.feature}</div>
              <div className="p-4 flex items-center justify-center border-l border-border">
                <X className="w-4 h-4 text-muted-foreground/40" />
              </div>
              <div className="p-4 flex items-center justify-center border-l border-border bg-primary/5">
                <Check className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;
