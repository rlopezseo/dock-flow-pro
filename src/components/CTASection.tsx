import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-primary/5" />
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <div className="accent-line w-12 mx-auto mb-8" />
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Ready to Optimize?
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-foreground mb-5 leading-tight">
            Let's talk dock scheduling
          </h2>
          <p className="text-muted-foreground font-body font-normal text-sm mb-10 leading-relaxed">
            Book a 30-minute discovery call. We'll show you how to reduce carrier dwell time, maximize dock utilization, and go live in 7 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-[hsl(207,50%,35%)] text-primary-foreground font-body font-normal text-sm rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-400"
            >
              Get in Contact <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+442038078493"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-card card-elevated text-foreground font-body font-normal text-sm rounded-full hover:shadow-lg transition-all duration-400"
            >
              +44 (20) 3807 84 93
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
