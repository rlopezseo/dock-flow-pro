import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionBridge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative light-section" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-[40px] font-light text-[hsl(var(--light-fg))] leading-[1.12] tracking-[-0.02em]">
            We Add the <span className="text-primary">4th Dimension</span> to Your Freight Management
          </h2>
          <p className="text-lg text-[hsl(var(--light-fg-muted))] leading-[1.7] max-w-[600px] mx-auto mt-6">
            Capacity. Visibility. Schedule. All three on one map. TrucksOnTheMap replaces guesswork with a real-time scheduling platform where carriers book their own slots, your team sees every door and every truck — before it arrives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionBridge;
