import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 relative bg-[hsl(220,20%,7%)] text-white" ref={ref}>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.25em] uppercase mb-4">
            We Understand Logistics
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-white">
            LET'S TALK
          </h2>
          <p className="text-[hsl(210,15%,55%)] font-body max-w-lg mx-auto mb-10 text-lg">
            Get in touch today and start to innovate now.
            <br />
            On-time delivery starts with on-time departures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-display font-semibold text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(207,90%,42%,0.3)]"
            >
              GET IN CONTACT <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+442038078493"
              className="inline-flex items-center gap-2 px-10 py-4 border border-[hsl(220,15%,25%)] text-white font-body text-sm rounded-sm hover:bg-[hsl(220,15%,16%)] transition-colors"
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
