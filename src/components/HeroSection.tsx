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
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold tracking-wider uppercase rounded-full">
            Dock Scheduling Software
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-4xl sm:text-5xl md:text-[58px] font-extrabold text-[#0F172A] leading-[1.08] tracking-[-0.03em] max-w-[780px] mx-auto"
        >
          Dock Scheduling Software
          <br />
          for Warehouses & Distribution Centers
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-5 text-base sm:text-lg md:text-xl text-[#64748B] leading-relaxed max-w-[580px] mx-auto"
        >
          The time slot management platform that cuts driver wait times
          by 60% and pushes dock utilization past 85%. Go live in 5 days.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#2563EB] text-white font-bold text-base rounded-xl shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all duration-200"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-9 py-4 text-[#0F172A] font-semibold text-base border-[1.5px] border-[#E2E8F0] rounded-xl hover:border-[#CBD5E1] hover:bg-[#F8FAFC] transition-all duration-200"
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
            className="rounded-[20px] border border-[#E2E8F0] shadow-[0_32px_64px_-16px_rgba(12,18,34,0.18)] overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] aspect-video flex items-center justify-center"
            style={{
              transform: "perspective(1200px) rotateX(2deg)",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-[#2563EB] ml-1" />
              </div>
              <p className="text-sm text-[#64748B] font-medium">Product Dashboard Preview</p>
              <p className="text-xs text-[#94A3B8] mt-1">Dock Schedule · Real-Time View</p>
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
