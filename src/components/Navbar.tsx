import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[hsl(229,57%,7%)] border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-1.5 text-xs text-muted-foreground">
          <span className="hidden sm:block">
            A Platform for Freight Management, Transportation Visibility and Time Slot Management
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+442038078493" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Phone className="w-3 h-3" /> +44 (20) 3807 8493
            </a>
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="hidden sm:flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-3">
          <a href="/">
            <img src={logo} alt="TrucksOnTheMap" className="h-8 md:h-10" />
          </a>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">home</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">get in contact</a>
            <a href="#contact" className="flex items-center gap-1 px-5 py-2 border border-border rounded-md text-sm text-muted-foreground hover:bg-secondary transition-colors">
              register <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#contact" className="flex items-center gap-1 px-5 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
              log in <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a href="#" className="text-foreground py-2">home</a>
              <a href="#contact" className="text-foreground py-2">get in contact</a>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 border border-border rounded-md text-sm text-foreground">register</a>
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold">log in</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
