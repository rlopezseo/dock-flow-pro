import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-36 relative" style={{ background: "rgb(38, 48, 55)" }}>
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white leading-[1.15]">
            Looking for That <span className="text-primary">"Plus"</span>
            <br />
            for Your Business?
          </h2>
          <p className="text-base md:text-[17px] text-white/70 leading-relaxed max-w-[540px] mx-auto mt-5">
            Get in touch today and start to innovate now. Our experts have helped hundreds of shippers and carriers adopt the latest digital freight technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-white font-medium text-base rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[13px] text-white/40 mt-5">
            No commitment · We pay attention to detail
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
