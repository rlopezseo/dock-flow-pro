import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className={`border-b border-white/10 transition-colors duration-300 ${scrolled ? "bg-[hsl(207,35%,12%)]" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-1.5 text-xs text-muted-foreground font-body font-normal">
          <span className="hidden sm:block">
            A Platform for Freight Management, Transportation Visibility and Time Slot Management
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+442038078493" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
            </a>
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="hidden sm:flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`border-b border-white/15 transition-colors duration-300 ${scrolled ? "bg-[hsl(207,35%,12%)]" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center">
              <img src={logo} alt="TrucksOnTheMap" className="h-6 sm:h-7" />
            </a>
            <div className="hidden md:flex items-center gap-6 text-xs text-muted-foreground font-body font-normal">
              <a href="/platform" className="hover:text-foreground transition-colors">platform</a>
              <a href="/solutions" className="hover:text-foreground transition-colors">solutions</a>
              <a href="/industries" className="hover:text-foreground transition-colors">industries</a>
              <a href="/blog" className="hover:text-foreground transition-colors">blog</a>
              <a href="/about" className="hover:text-foreground transition-colors">about</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm text-foreground font-body font-normal underline underline-offset-4 transition-colors">
              home
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground font-body font-normal transition-colors">
              get in contact
            </a>
            <a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-2 border border-white/20 rounded-full text-sm font-body font-normal text-foreground hover:bg-white/5 transition-colors">
              register <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal hover:bg-primary/90 transition-colors">
              log in <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
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
            className="md:hidden bg-[hsl(207,35%,12%)] border-b border-white/15"
          >
            <div className="container py-6 flex flex-col gap-4">
              <a href="/" className="text-foreground font-body font-normal py-2">home</a>
              <a href="#contact" className="text-muted-foreground font-body font-normal py-2">get in contact</a>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 border border-white/20 rounded-full text-sm font-body font-normal text-foreground">
                  register
                </a>
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal">
                  log in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
