import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, ArrowRight, FileSpreadsheet, Mail } from "lucide-react";
import iconTotm from "@/assets/icon-totm.png";
import bgCompare from "@/assets/bg-compare.jpg";

const features = [
  "Automated dock scheduling",
  "Real-time dock visibility",
  "Carrier self-service booking",
  "Capacity enforcement rules",
  "Automated reminders & no-show reduction",
  "Audit trail & compliance",
  "WMS / TMS / ERP integration",
  "Wait time & utilization analytics",
  "Multi-site support",
  "Go-live in 7 weeks",
];

const CompareSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgCompare} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/90" />
      </div>
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Compare
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Automated dock scheduling vs.<br className="hidden sm:block" /> spreadsheets and email
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>

        {/* Two-column comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Manual / Old way */}
          <div className="rounded-2xl border border-border/60 bg-card p-8 relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-[hsl(140,55%,92%)] flex items-center justify-center shadow-sm">
                  <FileSpreadsheet className="w-5.5 h-5.5 text-[hsl(140,60%,32%)]" strokeWidth={1.8} />
                </div>
                <div className="w-11 h-11 rounded-xl bg-[hsl(0,65%,94%)] flex items-center justify-center shadow-sm">
                  <Mail className="w-5.5 h-5.5 text-[hsl(0,70%,48%)]" strokeWidth={1.8} />
                </div>
              </div>
              <div>
                <p className="text-sm font-display font-normal text-foreground">Spreadsheets & Email</p>
                <p className="text-xs font-body font-normal text-muted-foreground">The old way</p>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted/80 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-muted-foreground/40" />
                  </div>
                  <span className="text-sm font-body font-normal text-muted-foreground line-through decoration-muted-foreground/20">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TrucksOnTheMap */}
          <div className="rounded-2xl border border-primary/25 bg-card p-8 relative shadow-lg shadow-primary/5">
            {/* Recommended badge */}
            <div className="absolute -top-3 left-8">
              <span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-[0.65rem] font-body font-normal tracking-widest uppercase">
                Recommended
              </span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={iconTotm} alt="TrucksOnTheMap" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <p className="text-sm font-display font-normal text-foreground">TrucksOnTheMap</p>
                <p className="text-xs font-body font-normal text-primary">The smart way</p>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-body font-normal text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA inside card */}
            <div className="mt-8 pt-6 border-t border-border/40">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-body font-normal text-primary hover:text-primary/80 transition-colors"
              >
                Switch to TrucksOnTheMap <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Switch to Smart Scheduling <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CompareSection;
