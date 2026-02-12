import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { cap: "Carrier self-service booking", totm: "Yes", spread: "No", phone: "No" },
  { cap: "Real-time dock visibility", totm: "Yes", spread: "No", phone: "No" },
  { cap: "Automated driver notifications", totm: "Yes", spread: "No", phone: "No" },
  { cap: "Multi-facility management", totm: "Yes", spread: "Error-prone", phone: "Impossible" },
  { cap: "WMS / TMS integration", totm: "API-first", spread: "CSV export", phone: "None" },
  { cap: "Time to go live", totm: "5 days", spread: "Weeks of setup", phone: "N/A" },
  { cap: "Handles 50+ trucks/day", totm: "Effortless", spread: "Breaks down", phone: "Breaks down" },
  { cap: "Audit trail & compliance logs", totm: "Automatic", spread: "Manual if at all", phone: "Non-existent" },
  { cap: "Wait time reduction", totm: "60% average", spread: "0%", phone: "0%" },
];

const CellVal = ({ val, positive }: { val: string; positive?: boolean }) => {
  if (val === "Yes") return <span className="flex items-center justify-center gap-1 text-[hsl(var(--success))] font-bold"><Check className="w-4 h-4" /> Yes</span>;
  if (val === "No") return <span className="flex items-center justify-center gap-1 text-destructive font-semibold"><X className="w-4 h-4" /> No</span>;
  if (positive) return <span className="text-[hsl(var(--success))] font-semibold">{val}</span>;
  if (["Error-prone", "Impossible", "Breaks down", "Non-existent", "0%", "None", "Manual if at all", "Weeks of setup", "N/A"].includes(val))
    return <span className="text-destructive font-medium">{val}</span>;
  return <span>{val}</span>;
};

const ComparisonTable = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 relative" ref={ref}>
      <div className="absolute inset-0 bg-background" />
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-light text-foreground text-center leading-[1.12] tracking-[-0.02em] mb-12"
        >
          Dock Scheduling Software vs. Spreadsheets
          <br className="hidden md:block" />
          vs. Manual Coordination
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-card text-foreground text-[13px] font-bold uppercase tracking-[0.05em] px-5 py-4 text-left">Capability</th>
                  <th className="bg-primary text-primary-foreground text-[13px] font-bold uppercase tracking-[0.05em] px-5 py-4 text-center">TrucksOnTheMap</th>
                  <th className="bg-card text-foreground text-[13px] font-bold uppercase tracking-[0.05em] px-5 py-4 text-center">Spreadsheets & Email</th>
                  <th className="bg-card text-foreground text-[13px] font-bold uppercase tracking-[0.05em] px-5 py-4 text-center">Phone & Whiteboard</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.cap} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                    <td className="px-5 py-3.5 font-medium text-foreground">{row.cap}</td>
                    <td className="px-5 py-3.5 text-center bg-primary/5"><CellVal val={row.totm} positive /></td>
                    <td className="px-5 py-3.5 text-center"><CellVal val={row.spread} /></td>
                    <td className="px-5 py-3.5 text-center"><CellVal val={row.phone} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
