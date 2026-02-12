import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-surface" />
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-primary to-[hsl(222_47%_20%)] rounded-3xl px-8 md:px-16 py-20 text-center overflow-hidden shadow-[0_32px_64px_hsl(217_91%_60%/0.2)]">
          <div className="absolute inset-0 dot-grid-light" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-white leading-[1.15]">
              Your Dock Has a <span className="font-normal text-white/90">Scheduling Problem.</span>
              <br />
              Fix It <span className="font-normal text-white/90">This Week.</span>
            </h2>
            <p className="text-base md:text-[17px] text-white/80 leading-relaxed max-w-[540px] mx-auto mt-5">
              Every hour a truck waits in your yard costs money, burns a carrier relationship, and slows your throughput. TrucksOnTheMap gives you the control to fix it — starting in 5 days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <a
                href="mailto:ihaveaquestion@trucksonthemap.com"
                className="inline-flex items-center gap-2 px-9 py-4 bg-white text-primary font-bold text-base rounded-xl hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200"
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
