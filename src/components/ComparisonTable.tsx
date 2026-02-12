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
  { cap: "Wait time reduction", totm: "80% average", spread: "0%", phone: "0%" },
];

const CellVal = ({ val, positive }: { val: string; positive?: boolean }) => {
  if (val === "Yes") return <span className="flex items-center justify-center gap-1 text-[hsl(var(--success))] font-medium"><Check className="w-4 h-4" /> Yes</span>;
  if (val === "No") return <span className="flex items-center justify-center gap-1 text-destructive font-medium"><X className="w-4 h-4" /> No</span>;
  if (positive) return <span className="text-[hsl(var(--success))] font-medium">{val}</span>;
  if (["Error-prone", "Impossible", "Breaks down", "Non-existent", "0%", "None", "Manual if at all", "Weeks of setup", "N/A"].includes(val))
    return <span className="text-destructive font-medium">{val}</span>;
  return <span>{val}</span>;
};

const ComparisonTable = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 relative light-section" ref={ref}>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-light text-[hsl(var(--light-fg))] text-center leading-[1.12] tracking-[-0.02em] mb-12"
        >
          Why Teams <span className="text-primary">Switch</span> to TrucksOnTheMap
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-[hsl(var(--light-border))] overflow-hidden shadow-lg bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-[hsl(var(--light-bg-alt))] text-[hsl(var(--light-fg))] text-[13px] font-medium uppercase tracking-[0.05em] px-5 py-4 text-left">Capability</th>
                  <th className="bg-primary text-white text-[13px] font-medium uppercase tracking-[0.05em] px-5 py-4 text-center">TrucksOnTheMap</th>
                  <th className="bg-[hsl(var(--light-bg-alt))] text-[hsl(var(--light-fg))] text-[13px] font-medium uppercase tracking-[0.05em] px-5 py-4 text-center">Spreadsheets</th>
                  <th className="bg-[hsl(var(--light-bg-alt))] text-[hsl(var(--light-fg))] text-[13px] font-medium uppercase tracking-[0.05em] px-5 py-4 text-center">Phone & Whiteboard</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.cap} className={i % 2 === 0 ? "bg-white" : "bg-[hsl(var(--light-bg))]"}>
                    <td className="px-5 py-3.5 font-medium text-[hsl(var(--light-fg))]">{row.cap}</td>
                    <td className="px-5 py-3.5 text-center bg-primary/5"><CellVal val={row.totm} positive /></td>
                    <td className="px-5 py-3.5 text-center text-[hsl(var(--light-fg-muted))]"><CellVal val={row.spread} /></td>
                    <td className="px-5 py-3.5 text-center text-[hsl(var(--light-fg-muted))]"><CellVal val={row.phone} /></td>
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
