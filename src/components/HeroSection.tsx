import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-dock.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern logistics loading dock with automated scheduling"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* SEO keyword tag */}
          <span className="inline-block px-5 py-2 rounded-full text-xs font-body font-normal tracking-widest uppercase text-foreground border border-[hsl(210,10%,50%/0.4)] bg-[hsl(210,10%,25%/0.5)] backdrop-blur-sm mb-6">
            Dock Scheduling Software
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-display font-light leading-[1.08] tracking-tight mb-6 text-foreground">
            Dock scheduling is
            <br />
            <span className="text-muted-foreground">a cost center</span> until
            <br />
            you automate it
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-lg font-body font-normal leading-relaxed mb-10">
            Eliminate congestion. Reduce waiting times by 60%.
            <br />
            Optimize every loading dock slot, automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              LET'S TALK
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-foreground bg-[hsl(210,10%,30%/0.45)] backdrop-blur-sm border border-[hsl(210,10%,40%/0.3)] hover:bg-[hsl(210,10%,35%/0.6)] transition-all duration-300"
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
