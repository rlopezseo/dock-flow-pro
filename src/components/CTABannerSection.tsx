import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgCtaBanner from "@/assets/bg-cta-banner.jpg";

const CTABannerSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="relative w-full py-24 md:py-32">
        <img
          src={bgCtaBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Same dark overlay as navbar/hero */}
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-5">
              Ready to transform your docks?
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight mb-5">
              Put every truck on the map.<br />
              <span className="text-white/60">On one map.</span>
            </h2>
            <p className="text-base md:text-lg text-white/50 font-body font-normal leading-relaxed mb-10 max-w-xl mx-auto">
              Join 500+ companies using TrucksOnTheMap to bring order to their docks, cut wait times, and get full visibility from gate to departure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-body font-normal px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                Book a Demo
              </a>
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white text-sm font-body font-normal px-8 py-4 rounded-full border border-white/15 transition-all duration-300"
              >
                Register Free
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
