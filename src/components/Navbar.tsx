import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-secondary/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-1.5 text-xs text-muted-foreground">
          <span className="hidden sm:block font-body">
            TrucksOnTheMap — modular, invite-only Transportation Management Platform
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+442038078493" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
            </a>
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="hidden sm:flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-display font-bold tracking-tight">
              trucks<span className="text-primary">O</span>n<span className="text-muted-foreground font-light">the</span>map
              <span className="text-primary text-xs align-super">✳</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground font-body">
            <span>capacity</span>
            <span className="text-border">|</span>
            <span>visibility</span>
            <span className="text-border">|</span>
            <span>schedule</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              home
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              get in contact
            </a>
            <a href="#contact" className="flex items-center gap-1 px-4 py-2 border border-border rounded-sm text-sm font-body hover:bg-secondary transition-colors">
              register <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#contact" className="flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-sm text-sm font-display font-semibold hover:bg-primary/90 transition-colors">
              log in <ArrowUpRight className="w-3 h-3" />
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
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              <a href="#contact" className="text-foreground font-body py-2">home</a>
              <a href="#contact" className="text-foreground font-body py-2">get in contact</a>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 border border-border rounded-sm text-sm font-body">
                  register
                </a>
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 bg-primary text-primary-foreground rounded-sm text-sm font-display font-semibold">
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
