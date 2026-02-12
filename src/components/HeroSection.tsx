import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-dock.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern logistics loading dock with automated scheduling"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Dock Scheduling Software
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-6">
            DOCK SCHEDULING
            <br />
            <span className="text-gradient">&amp; TIME SLOT</span>
            <br />
            MANAGEMENT
          </h1>

          <p className="text-lg sm:text-xl text-secondary-foreground max-w-xl font-body font-light leading-relaxed mb-8">
            Eliminate dock congestion with automated scheduling.
            <br />
            <strong className="text-foreground font-medium">Reduce waiting times by 60%</strong> and optimize loading dock utilization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(207,90%,54%,0.3)]"
            >
              LET'S TALK
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-body text-sm rounded-sm hover:bg-secondary transition-colors"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
