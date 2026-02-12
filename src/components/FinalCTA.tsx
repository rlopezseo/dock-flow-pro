import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-[1000px] mx-auto">
        <div className="relative bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl px-8 md:px-16 py-20 text-center overflow-hidden shadow-[0_32px_64px_rgba(37,99,235,0.2)]">
          <div className="absolute inset-0 dot-grid-light" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.15]">
              Your Dock Has a Scheduling Problem.
              <br />
              Fix It This Week.
            </h2>
            <p className="text-base md:text-[17px] text-white/80 leading-relaxed max-w-[540px] mx-auto mt-5">
              Every hour a truck waits in your yard costs money, burns a carrier relationship, and slows your throughput. TrucksOnTheMap gives you the control to fix it — starting in 5 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <a
                href="mailto:ihaveaquestion@trucksonthemap.com"
                className="inline-flex items-center gap-2 px-9 py-4 bg-white text-[#2563EB] font-bold text-base rounded-xl hover:bg-[#F8FAFC] hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-9 py-4 text-white font-semibold text-base border-2 border-white/30 rounded-xl hover:border-white/60 transition-all duration-200"
              >
                Watch Product Tour <Play className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[13px] text-white/50 mt-5">
              No credit card required · Live in 5 days · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
