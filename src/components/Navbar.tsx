import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";
import MegaMenu from "./MegaMenu";
import { useBookDemo } from "./BookDemoDialog";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openBookDemo } = useBookDemo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(207,30%,12%)] shadow-lg shadow-black/20" : ""}`}>
      {/* Top bar — hidden on mobile */}
      <div className={`hidden lg:block border-b transition-colors duration-500 ${scrolled ? "border-white/10" : "border-transparent"}`}>
        <div className="container flex items-center justify-between py-1.5 text-xs text-muted-foreground font-body font-normal">
          <span>
            A Platform for Freight Management, Transportation Visibility and Time Slot Management
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+442038078493" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
            </a>
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`border-b transition-colors duration-500 ${scrolled ? "border-white/10" : "border-white/5"}`}>
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex items-center shrink-0">
            <img src={logo} alt="TrucksOnTheMap" className="h-6 sm:h-7" />
          </a>

          {/* Centered nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <MegaMenu />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button onClick={openBookDemo} className="text-sm text-muted-foreground hover:text-foreground font-body font-normal transition-colors">
              get in contact
            </button>
            <button onClick={openBookDemo} className="inline-flex items-center gap-1.5 px-5 py-2 border border-white/20 rounded-full text-sm font-body font-normal text-foreground hover:bg-white/5 transition-colors">
              register <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button onClick={openBookDemo} className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal hover:bg-primary/90 transition-colors">
              book a demo <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[hsl(207,30%,12%)] border-b border-white/10"
          >
            <div className="container py-8 flex flex-col gap-1">
              <a href="/" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">platform</a>
              <a href="/load-matching" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">load matching</a>
              <a href="/freight-procurement" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">freight procurement</a>
              <a href="/freight-visibility" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">freight visibility</a>
              <a href="/predictive-eta" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">predictive ETA</a>
              <a href="/yard-management" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">yard management</a>
              <a href="/backhaul-optimization" className="text-muted-foreground font-body font-normal py-3 border-b border-white/5">backhaul optimization</a>
              <button onClick={() => { openBookDemo(); setMenuOpen(false); }} className="text-left text-muted-foreground font-body font-normal py-3">get in contact</button>
              <div className="flex gap-3 pt-4">
                <button onClick={() => { openBookDemo(); setMenuOpen(false); }} className="flex-1 text-center px-4 py-3 border border-white/20 rounded-full text-sm font-body font-normal text-foreground">
                  register
                </button>
                <button onClick={() => { openBookDemo(); setMenuOpen(false); }} className="flex-1 text-center px-4 py-3 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal">
                  book a demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
