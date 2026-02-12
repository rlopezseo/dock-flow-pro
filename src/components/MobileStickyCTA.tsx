import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

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
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-[hsl(var(--light-border))] px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex gap-3">
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-1 py-3.5 bg-primary text-white font-medium text-sm rounded-[10px]"
      >
        Let's Talk <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};

export default MobileStickyCTA;
