import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionBridge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] leading-[1.12] tracking-[-0.02em]">
            Dock Appointment Scheduling That Runs Itself
          </h2>
          <p className="text-lg text-[#64748B] leading-[1.7] max-w-[600px] mx-auto mt-6">
            TrucksOnTheMap replaces the whiteboard, the group chat, and the "who's coming when?" panic with one real-time scheduling platform. Carriers book their own slots. Your team sees every door, every truck, every arrival — before it happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionBridge;
