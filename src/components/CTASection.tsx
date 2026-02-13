import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background image */}
      <img
        src={bgCtaFinal}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay matching navbar/hero */}
      <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-4">
            Ready to Optimize?
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-white mb-5 leading-tight">
            Let's talk dock scheduling
          </h2>
          <p className="text-white/50 font-body font-normal text-sm mb-10 leading-relaxed">
            Book a 30-minute discovery call. We'll show you how to reduce carrier dwell time, maximize dock utilization, and go live in 7 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-body font-normal text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Get in Contact <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+442038078493"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-body font-normal text-sm rounded-full border border-white/15 transition-all duration-300"
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
