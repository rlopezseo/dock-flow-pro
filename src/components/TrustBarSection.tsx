import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Clock, BarChart3, Truck, ShieldCheck } from "lucide-react";

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

const kpis = [
  { icon: TrendingDown, label: "60% Less Dwell Time" },
  { icon: Clock, label: "80% Less Gate Waiting" },
  { icon: BarChart3, label: "85%+ Dock Utilization" },
  { icon: Truck, label: "20× Faster Booking" },
  { icon: ShieldCheck, label: "ISO 27001 Certified" },
];

const TrustBarSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 border-b border-border" ref={ref}>
      <div className="container">
        {/* KPI Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary rounded-full border border-border"
            >
              <kpi.icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-body font-normal text-foreground tracking-wide">
                {kpi.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-center text-xs font-body font-normal text-muted-foreground tracking-[0.2em] uppercase mb-8">
            Co-developed with industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {logos.map((name) => (
              <span
                key={name}
                className="text-sm font-display font-normal text-muted-foreground/70 tracking-wide hover:text-foreground transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBarSection;
