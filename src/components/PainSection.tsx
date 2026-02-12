import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingDown, AlertTriangle } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Hours Lost at the Dock",
    description: "Trucks wait an average of 2+ hours at unscheduled docks. That's revenue bleeding out every single day.",
  },
  {
    icon: TrendingDown,
    title: "Dock Utilization Below 60%",
    description: "Without scheduling, loading bays sit empty while trucks queue outside. A massive waste of infrastructure.",
  },
  {
    icon: AlertTriangle,
    title: "Zero Visibility, Zero Control",
    description: "When you can't see who's coming and when, every dock becomes a bottleneck waiting to happen.",
  },
];

const PainSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.25em] uppercase mb-3">
            The Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            DOCK CONGESTION
            <br />
            <span className="text-muted-foreground">COSTS YOU MORE THAN YOU THINK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card border border-border rounded-sm p-8 hover:border-primary/30 transition-colors duration-500"
            >
              <pain.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">{pain.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
