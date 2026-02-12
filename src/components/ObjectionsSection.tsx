import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const objections = [
  {
    objection: "\"My carriers won't use a portal.\"",
    response: "They will. The booking flow is simpler than reserving a table online. And your carriers would rather pick a 15-minute slot than wait 3 hours blind in your yard.",
    highlight: "Average carrier adoption across our customers: 94% within 14 days.",
  },
  {
    objection: "\"We're too busy to implement right now.\"",
    response: "That's exactly why you need it.",
    highlight: "Implementation takes 5 business days. We handle the configuration. You keep running your dock. By day 6, your team has a schedule instead of a scramble.",
  },
  {
    objection: "\"Our operation has too many exceptions.\"",
    response: "Multi-site, multi-client, cross-dock, temp-controlled, hazmat, live unload — we've configured all of it.",
    highlight: "The platform adapts to how you operate. Not the other way around.",
  },
  {
    objection: "\"We already have a WMS.\"",
    response: "Good. Keep it. TrucksOnTheMap manages what happens at the dock boundary — carrier arrivals, door assignments, yard flow. Your WMS manages what happens inside the four walls.",
    highlight: "We integrate via API with the platforms you already run. Complementary, not competing.",
  },
];

const ObjectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 bg-[#FAFBFC]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] text-center leading-[1.12] tracking-[-0.02em] mb-14"
        >
          Why Operations Teams Switch to TrucksOnTheMap
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {objections.map((obj, i) => (
            <motion.div
              key={obj.objection}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:border-[#2563EB] hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] transition-all duration-200"
            >
              <p className="text-[17px] font-bold text-[#0F172A] mb-3">{obj.objection}</p>
              <p className="text-[15px] text-[#64748B] leading-[1.7]">
                {obj.response} <span className="font-semibold text-[#0F172A]">{obj.highlight}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
