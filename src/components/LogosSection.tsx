import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Saint-Gobain",
  "Apollo Tyres",
  "Vredestein",
  "Kuehne+Nagel",
  "C.H. Robinson",
  "Cargo Care",
  "Ewald's",
  "Haberer's",
];

const LogosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.25em] uppercase mb-3">
            Co-Developed With Industry
          </p>
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight">
            JOIN THE RANKS OF
            <br />
            <span className="text-muted-foreground">SATISFIED CUSTOMERS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center py-6 px-4 bg-card border border-border rounded-sm hover:border-primary/20 transition-colors duration-500"
            >
              <span className="font-display font-semibold text-sm text-muted-foreground tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogosSection;
