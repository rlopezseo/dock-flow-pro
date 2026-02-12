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
    <section className="py-28 md:py-36 relative" ref={ref}>
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground leading-[1.12] tracking-[-0.02em] max-w-[640px] mx-auto font-display">
            Your Dock Is Running on Phone Calls, Spreadsheets, and <span className="text-destructive">Luck</span>
          </h2>
          <div className="text-lg text-muted-foreground leading-[1.7] max-w-[640px] mx-auto mt-8 space-y-4">
            <p>
              It's 6:15 AM. Three trucks are already at the gate. Two more just called — they're 20 minutes out. Your receiving team doesn't start until 7. Nobody knows which truck goes to which door.
            </p>
            <p>
              By 9 AM, you have 6 drivers sitting in the yard, engines running, dispatchers calling you to complain. By Friday, one of those carriers stops accepting your loads.
            </p>
            <p className="font-medium text-foreground">
              This isn't a bad day. This is every day without dock scheduling.
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
              className="glass-card rounded-2xl p-7 text-center border-destructive/20 hover:border-destructive/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 mx-auto flex items-center justify-center">
                <pain.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-4xl font-bold text-destructive mt-4 font-display">{pain.value}</p>
              <p className="text-[13px] text-muted-foreground mt-2 leading-snug">{pain.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-[11px] text-muted-foreground/50 text-center mt-6">
          Sources: FTR Transportation Intelligence, DAT Freight Analytics
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
