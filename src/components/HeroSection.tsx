import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-dock.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="container relative z-10 flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl text-right"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold leading-[1.05] tracking-tight mb-6">
            Don't look at this site
            <br />
            if <span className="text-primary">your docks</span> are
            <br />
            running smoothly
          </h1>

          <p className="text-base sm:text-lg text-secondary-foreground max-w-xl ml-auto font-body font-normal leading-relaxed mb-8">
            We believe dock scheduling is a service for efficiency, NOT JUST A TASK
          </p>

          <div className="flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-muted/60 backdrop-blur-sm text-foreground font-body font-normal text-sm rounded-full border border-border/50 hover:bg-muted/80 transition-all duration-300"
            >
              turn your docks into profit
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
