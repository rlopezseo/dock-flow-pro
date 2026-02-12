import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    day: "Day 1",
    title: "Map Your Facility",
    description: "Define your dock doors, operating hours, load types, and constraints. We do this with you on a 30-minute onboarding call. You talk, we configure.",
  },
  {
    day: "Day 2-3",
    title: "Set Scheduling Rules",
    description: "Slot durations, carrier tiers, buffer times, blackout windows, approval workflows. Your dock, your rules. We build the logic. You approve it.",
  },
  {
    day: "Day 4",
    title: "Invite Your Carriers",
    description: "Bulk-send portal invitations to every carrier on your list. They register, see your available slots, and start booking. Auto-confirmations go out on every appointment.",
  },
  {
    day: "Day 5",
    title: "Go Live",
    description: "Your dock has a schedule. Your carriers have appointments. Your team has full visibility. From here, you optimize with real data instead of guesswork.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 bg-[#FAFBFC]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] text-center leading-[1.12] tracking-[-0.02em] mb-16"
        >
          How to Implement Dock Scheduling Software in 5 Days
        </motion.h2>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Dashed line */}
          <div className="absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] border-t-2 border-dashed border-[#CBD5E1]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-full bg-[#2563EB] text-white text-xl font-extrabold flex items-center justify-center mx-auto relative z-10">
                {i + 1}
              </div>
              <p className="text-[11px] font-bold text-[#F97316] uppercase tracking-[0.05em] mt-5">{step.day}</p>
              <h3 className="text-base font-bold text-[#0F172A] mt-2">{step.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mt-2 max-w-[240px] mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-0.5 flex-1 border-l-2 border-dashed border-[#CBD5E1] mt-2" />}
              </div>
              <div className="pb-4">
                <p className="text-[11px] font-bold text-[#F97316] uppercase tracking-[0.05em]">{step.day}</p>
                <h3 className="text-base font-bold text-[#0F172A] mt-1">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
