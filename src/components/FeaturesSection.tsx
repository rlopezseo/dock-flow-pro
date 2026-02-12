import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Eye, CalendarClock, Plug } from "lucide-react";
import featuresImage from "@/assets/features-dock.jpg";

const features = [
  {
    icon: Zap,
    label: "CAPACITY",
    stat: "20×",
    statLabel: "QUICKER",
    description: "Book freight capacity 20 times faster than traditional methods. Automated matching eliminates manual calls and emails.",
  },
  {
    icon: Eye,
    label: "VISIBILITY",
    stat: "100%",
    statLabel: "REAL-TIME",
    description: "Full haul visibility from pickup to delivery. Track every truck, every dock, every time slot — in real time.",
  },
  {
    icon: CalendarClock,
    label: "SCHEDULE",
    stat: "80%",
    statLabel: "LESS WAITING",
    description: "Smart time-slot management reduces gate waiting by 80%. Automated scheduling ensures loading with no gaps.",
  },
  {
    icon: Plug,
    label: "INTEGRATION",
    stat: "API",
    statLabel: "CONNECTED",
    description: "Seamless API connections to SAP, Oracle TMS, and your GPS system of choice. Interfaced with ISO 27001 certified infrastructure.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background" ref={ref}>
      {/* Background image faded */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={featuresImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.25em] uppercase mb-3">
            The Latest Freight-Tech
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight mb-4 text-foreground">
            TO BOOK, SCHEDULE
            <br />
            <span className="text-primary">& TRACK TRUCKLOAD</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Get all 3 in just 7 weeks — capacity, visibility, and scheduling on one platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <feat.icon className="w-6 h-6 text-primary" />
                  <span className="text-xs font-display tracking-[0.2em] text-muted-foreground uppercase">{feat.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-display font-semibold text-foreground">{feat.stat}</span>
                  <p className="text-[10px] font-display tracking-wider text-primary uppercase">{feat.statLabel}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
