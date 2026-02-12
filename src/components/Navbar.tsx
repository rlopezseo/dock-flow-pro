import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav className="bg-background/40 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <img src={logo} alt="TrucksOnTheMap" className="h-6 sm:h-7" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-foreground font-body font-normal underline underline-offset-4 transition-colors">
              home
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground font-body font-normal transition-colors">
              get in contact
            </a>
            <a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-2 border border-border rounded-full text-sm font-body font-normal text-foreground hover:bg-secondary transition-colors">
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
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              <a href="/" className="text-foreground font-body font-normal py-2">home</a>
              <a href="#contact" className="text-foreground font-body font-normal py-2">get in contact</a>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 border border-border rounded-full text-sm font-body font-normal">
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
