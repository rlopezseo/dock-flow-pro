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
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)]/85 via-[hsl(220,20%,7%)]/50 to-[hsl(220,20%,7%)]/30" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* SEO keyword tag */}
          <span className="inline-block px-5 py-2 rounded-full text-xs font-body font-normal tracking-widest uppercase text-white/90 border border-white/15 bg-white/10 backdrop-blur-md mb-6">
            Dock Scheduling Software
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-display font-extralight leading-[1.08] tracking-tight mb-6 text-foreground">
            Dock scheduling is
            <br />
            <span className="text-[#bbb]">a cost center</span> until
            <br />
            you automate it
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-lg font-body font-normal leading-relaxed mb-10">
            TrucksOnTheMap reduces carrier dwell time by 60%. Fill every dock slot without a single phone call. Full visibility from gate check-in to departure.
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
