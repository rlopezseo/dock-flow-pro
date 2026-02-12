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
    <section className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-3">
            Integrations & Implementation
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
            Connects to your existing stack — live in 7 weeks
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
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
                <div key={s.name} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/20 transition-colors">
                  <p className="text-sm font-display font-normal text-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase mt-1">{s.category}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-secondary/70 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-normal text-foreground">ISO 27001 certified infrastructure — enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-secondary/70 rounded-lg">
                <Layers className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-normal text-foreground">API-first architecture with full documentation and sandbox environment</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-secondary/70 rounded-lg">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-body font-normal text-foreground">Average time-to-value: 7 weeks from kickoff to full production</span>
              </div>
            </div>
          </motion.div>

          {/* Implementation timeline */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-sm font-display font-normal text-foreground mb-6">Implementation Roadmap</h3>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.step} className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-display text-primary">
                      {p.step}
                    </span>
                    <h4 className="text-sm font-display font-normal text-foreground">{p.title}</h4>
                    <span className="ml-auto text-[10px] font-body text-primary tracking-wider uppercase">{p.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed pl-10">{p.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
