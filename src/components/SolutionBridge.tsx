import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SolutionBridge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-[40px] font-light text-foreground leading-[1.12] tracking-[-0.02em]">
            Dock Appointment Scheduling That <span className="text-primary font-normal">Runs Itself</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.7] max-w-[600px] mx-auto mt-6">
            TrucksOnTheMap replaces the whiteboard, the group chat, and the "who's coming when?" panic with one real-time scheduling platform. Carriers book their own slots. Your team sees every door, every truck, every arrival — before it happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionBridge;
