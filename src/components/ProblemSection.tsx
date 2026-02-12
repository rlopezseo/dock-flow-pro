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
    <section className="py-28 md:py-36 bg-[#FAFBFC]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] leading-[1.12] tracking-[-0.02em] max-w-[640px] mx-auto">
            Your Dock Is Running on Phone Calls, Spreadsheets, and Luck
          </h2>
          <div className="text-lg text-[#64748B] leading-[1.7] max-w-[640px] mx-auto mt-8 space-y-4">
            <p>
              It's 6:15 AM. Three trucks are already at the gate. Two more just called — they're 20 minutes out. Your receiving team doesn't start until 7. Nobody knows which truck goes to which door.
            </p>
            <p>
              By 9 AM, you have 6 drivers sitting in the yard, engines running, dispatchers calling you to complain. By Friday, one of those carriers stops accepting your loads.
            </p>
            <p className="font-medium text-[#0F172A]">
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
              className="bg-white border border-[#FEE2E2] rounded-2xl p-7 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#FEF2F2] mx-auto flex items-center justify-center">
                <pain.icon className="w-5 h-5 text-[#DC2626]" />
              </div>
              <p className="text-4xl font-extrabold text-[#DC2626] mt-4">{pain.value}</p>
              <p className="text-[13px] text-[#64748B] mt-2 leading-snug">{pain.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-[11px] text-[#94A3B8] text-center mt-6">
          Sources: FTR Transportation Intelligence, DAT Freight Analytics
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
