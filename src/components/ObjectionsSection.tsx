import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const objections = [
  {
    objection: "\"My carriers won't use a portal.\"",
    response: "They will. The booking flow is simpler than reserving a table online. Carriers prefer a 15-minute slot over 3 hours blind in your yard.",
    highlight: "94% carrier adoption within 14 days.",
  },
  {
    objection: "\"We're too busy to implement right now.\"",
    response: "That's exactly why you need it.",
    highlight: "Implementation takes 5 business days. We handle the configuration. You keep running your dock.",
  },
  {
    objection: "\"Our operation has too many exceptions.\"",
    response: "Multi-site, multi-client, cross-dock, temp-controlled, hazmat, live unload — we've configured all of it.",
    highlight: "The platform adapts to how you operate.",
  },
  {
    objection: "\"We already have a WMS.\"",
    response: "Keep it. TrucksOnTheMap manages what happens at the dock boundary — carrier arrivals, door assignments, yard flow.",
    highlight: "We integrate via API. Complementary, not competing.",
  },
];

const ObjectionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 relative light-section-alt" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-light text-[hsl(var(--light-fg))] text-center leading-[1.12] tracking-[-0.02em] mb-14"
        >
          We Understand <span className="text-primary">Logistics</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {objections.map((obj, i) => (
            <motion.div
              key={obj.objection}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="light-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <p className="text-[17px] font-medium text-[hsl(var(--light-fg))] mb-3">{obj.objection}</p>
              <p className="text-[15px] text-[hsl(var(--light-fg-muted))] leading-[1.7]">
                {obj.response} <span className="font-medium text-[hsl(var(--light-fg))]">{obj.highlight}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
