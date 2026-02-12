import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import type { Easing } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full border border-primary/20">
            Dock Scheduling Software
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-4xl sm:text-5xl md:text-[58px] font-bold text-foreground leading-[1.08] tracking-[-0.03em] max-w-[780px] mx-auto font-display"
        >
          Dock Scheduling Software
          <br />
          <span className="text-primary">for Warehouses</span> & Distribution Centers
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[580px] mx-auto"
        >
          The time slot management platform that cuts driver wait times
          by 60% and pushes dock utilization past 85%. Go live in 5 days.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-primary-foreground font-bold text-base rounded-xl shadow-[0_4px_20px_hsl(217_91%_60%/0.3)] hover:shadow-[0_8px_30px_hsl(217_91%_60%/0.4)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-9 py-4 text-foreground font-semibold text-base border border-border rounded-xl hover:border-muted-foreground/30 hover:bg-secondary transition-all duration-200"
          >
            Watch Product Tour <Play className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 max-w-[960px] mx-auto"
        >
          <div
            className="rounded-[20px] border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden bg-gradient-to-br from-card to-surface aspect-video flex items-center justify-center"
            style={{
              transform: "perspective(1200px) rotateX(2deg)",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">Product Dashboard Preview</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Dock Schedule · Real-Time View</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: perspective(1200px) rotateX(2deg) translateY(0px); }
          50% { transform: perspective(1200px) rotateX(2deg) translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
