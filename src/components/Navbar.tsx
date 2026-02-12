import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[hsl(220,20%,10%)] border-b border-[hsl(220,15%,18%)]">
        <div className="container flex items-center justify-between py-1.5 text-xs text-[hsl(210,20%,70%)]">
          <span className="hidden sm:block font-body">
            A Platform for Freight Management, Transportation Visibility and Time Slot Management
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+442038078493" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
            </a>
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[hsl(220,20%,7%/0.85)] backdrop-blur-xl border-b border-[hsl(220,15%,18%/0.5)]">
        <div className="container flex items-center justify-between py-3">
          {/* Real logo */}
          <a href="/" className="flex items-center gap-3">
            <span className="text-xl font-display tracking-tight text-white">
              <span className="font-normal">trucks</span><span className="font-semibold text-primary">ON</span><span className="font-light text-[hsl(210,15%,60%)]">the</span><span className="font-normal">map</span><span className="text-primary ml-0.5 text-lg">✳</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-xs text-[hsl(210,15%,55%)] font-body tracking-wider">
            <span>capacity</span>
            <span className="text-[hsl(220,15%,30%)]">|</span>
            <span>visibility</span>
            <span className="text-[hsl(220,15%,30%)]">|</span>
            <span>schedule</span>
            <span className="block text-[10px] ml-2 text-[hsl(210,15%,45%)]">on.one.map</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-[hsl(210,20%,80%)] hover:text-white transition-colors font-body underline underline-offset-4">
              home
            </a>
            <a href="#contact" className="text-sm text-[hsl(210,20%,80%)] hover:text-white transition-colors font-body">
              get in contact
            </a>
            <a href="#contact" className="flex items-center gap-1 px-5 py-2 border border-[hsl(220,15%,25%)] rounded-sm text-sm font-body text-[hsl(210,20%,80%)] hover:bg-[hsl(220,15%,16%)] transition-colors">
              register <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#contact" className="flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-sm text-sm font-display font-semibold hover:bg-primary/90 transition-colors">
              log in <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button
            className="md:hidden text-white"
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
            className="md:hidden bg-[hsl(220,20%,7%/0.95)] backdrop-blur-xl border-b border-[hsl(220,15%,18%)]"
          >
            <div className="container py-6 flex flex-col gap-4">
              <a href="#" className="text-white font-body py-2">home</a>
              <a href="#contact" className="text-white font-body py-2">get in contact</a>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 border border-[hsl(220,15%,25%)] rounded-sm text-sm font-body text-white">
                  register
                </a>
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 bg-primary text-white rounded-sm text-sm font-display font-semibold">
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
