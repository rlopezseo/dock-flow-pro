import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, DoorOpen, DollarSign, Phone } from "lucide-react";

const pains = [
  { icon: Clock, value: "2.4 hrs", label: "Average driver wait time without scheduling" },
  { icon: DoorOpen, value: "47%", label: "Dock utilization with manual coordination" },
  { icon: DollarSign, value: "$4,200", label: "Monthly detention charges per facility" },
  { icon: Phone, value: "40+", label: "Calls per week spent coordinating arrivals" },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 relative light-section-alt" ref={ref}>
      <div className="absolute inset-0 subtle-grid opacity-40" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-[40px] font-light text-[hsl(var(--light-fg))] leading-[1.12] tracking-[-0.02em] max-w-[640px] mx-auto">
            Time Is the Most Precious Asset —
            <br />
            <span className="text-primary">Yet Few See Its Value</span>
          </h2>
          <div className="text-lg text-[hsl(var(--light-fg-muted))] leading-[1.7] max-w-[640px] mx-auto mt-8 space-y-4">
            <p>
              Every day, trucks queue at gates with no appointments. Drivers wait hours. Docks sit idle. Carriers lose patience. Your team scrambles between phone calls, emails, and spreadsheets.
            </p>
            <p className="font-medium text-[hsl(var(--light-fg))]">
              We believe logistics is a service for the customer — not just a task.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="light-card rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 mx-auto flex items-center justify-center">
                <pain.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-4xl font-light text-destructive mt-4">{pain.value}</p>
              <p className="text-[13px] text-[hsl(var(--light-fg-muted))] mt-2 leading-snug">{pain.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
