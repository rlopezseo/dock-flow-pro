import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 font-normal">
            Dock Scheduling Software
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-light leading-[0.95] tracking-tight mb-6">
            DOCK SCHEDULING
            <br />
            <span className="text-primary">&amp; TIME SLOT</span>
            <br />
            MANAGEMENT
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-body font-normal leading-relaxed mb-8">
            Eliminate dock congestion with automated scheduling.
            <br />
            <span className="text-foreground">Reduce waiting times by 60%</span> and optimize loading dock utilization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-normal text-sm rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              LET'S TALK
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-muted/60 backdrop-blur-sm text-foreground font-body font-normal text-sm rounded-full border border-border/50 hover:bg-muted/80 transition-all duration-300"
            >
              Explore Features
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
