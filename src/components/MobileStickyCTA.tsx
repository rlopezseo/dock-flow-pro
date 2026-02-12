import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-[#E2E8F0] px-5 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] flex gap-3">
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-1 py-3.5 bg-[#2563EB] text-white font-bold text-sm rounded-[10px]"
      >
        Book a Demo <ArrowRight className="w-3.5 h-3.5" />
      </a>
      <a
        href="#features"
        className="flex-1 flex items-center justify-center gap-1 py-3.5 bg-white text-[#0F172A] font-semibold text-sm border-[1.5px] border-[#E2E8F0] rounded-[10px]"
      >
        Watch Tour <Play className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};

export default MobileStickyCTA;
