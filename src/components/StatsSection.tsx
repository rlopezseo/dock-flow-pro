import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "60%", label: "Reduction in Waiting Times" },
  { value: "20×", label: "Faster Capacity Booking" },
  { value: "80%", label: "Less Waiting at Gates" },
  { value: "7", label: "Weeks to Go Live", suffix: "wks" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[hsl(220,20%,7%)] text-white" ref={ref}>
      <div className="container">
        <div className="glow-line mb-16 mx-auto max-w-md" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="text-center"
            >
              <span className="block text-4xl md:text-6xl font-display font-semibold text-white stat-glow">
                {stat.value}
              </span>
              <p className="text-xs md:text-sm text-[hsl(210,15%,55%)] font-body mt-2 tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="glow-line mt-16 mx-auto max-w-md" />
      </div>
    </section>
  );
};

export default StatsSection;
