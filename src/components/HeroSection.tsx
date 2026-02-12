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
        {/* Dark overlay matching the site */}
        <div className="absolute inset-0 bg-[hsl(210,20%,10%/0.55)]" />
      </div>

      <div className="container relative z-10 flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl text-right"
        >
          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-display font-light leading-[1.1] tracking-tight mb-6 text-foreground">
            Dock scheduling is
            <br />
            <span className="text-muted-foreground">a cost center</span> until
            <br />
            you automate it
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-lg ml-auto font-body font-normal leading-relaxed mb-8">
            Eliminate congestion. Reduce waiting times by 60%. Optimize every loading dock slot, automatically.
          </p>

          <div className="flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-body font-normal text-foreground bg-[hsl(210,10%,30%/0.5)] backdrop-blur-sm border border-[hsl(210,10%,40%/0.3)] hover:bg-[hsl(210,10%,35%/0.6)] transition-all duration-300"
            >
              find out how
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
