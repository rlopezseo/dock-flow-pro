import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plug, ShieldCheck, Clock, Layers } from "lucide-react";

const stack = [
  { name: "SAP", category: "ERP" },
  { name: "Oracle TMS", category: "TMS" },
  { name: "Blue Yonder", category: "WMS" },
  { name: "Manhattan", category: "WMS" },
  { name: "Descartes", category: "TMS" },
  { name: "Custom API", category: "REST/EDI" },
];

const phases = [
  { step: "1", title: "Discovery & Configuration", duration: "Week 1–2", description: "We map your dock operations, define capacity rules, and configure the platform." },
  { step: "2", title: "Integration & Data Migration", duration: "Week 3–4", description: "Connect to your WMS/TMS/ERP. Import carrier data, dock configurations, and historical schedules." },
  { step: "3", title: "Training & Pilot", duration: "Week 5–6", description: "On-site or remote training for operations teams and carriers. Pilot with one facility." },
  { step: "4", title: "Go-Live & Optimization", duration: "Week 7", description: "Full rollout with dedicated support. Continuous optimization based on real data." },
];

const IntegrationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Integrations & Implementation
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            WMS, TMS, and ERP integration — go live in 7 weeks
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-sm font-display font-normal text-foreground mb-6 flex items-center gap-2">
              <Plug className="w-4 h-4 text-primary" /> Compatible Systems
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {stack.map((s) => (
                <div key={s.name} className="bg-card rounded-xl p-5 text-center card-elevated transition-all duration-500">
                  <p className="text-sm font-display font-normal text-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase mt-1">{s.category}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                { icon: ShieldCheck, text: "ISO 27001 certified infrastructure — enterprise-grade security" },
                { icon: Layers, text: "API-first architecture with full documentation and sandbox environment" },
                { icon: Clock, text: "Average time-to-value: 7 weeks from kickoff to full production" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 px-5 py-3.5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/8">
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-body font-normal text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Implementation timeline */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-sm font-display font-normal text-foreground mb-6">Implementation Roadmap</h3>
            <div className="space-y-3.5">
              {phases.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.08 * i }}
                  className="bg-card rounded-xl p-5 card-elevated transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center text-xs font-display text-primary">
                      {p.step}
                    </span>
                    <h4 className="text-[13px] font-display font-normal text-foreground">{p.title}</h4>
                    <span className="ml-auto text-[10px] font-body number-accent tracking-wider uppercase">{p.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed pl-11">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
