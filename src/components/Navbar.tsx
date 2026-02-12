import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#0C1222] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-1.5 text-xs text-slate-400">
          <span className="hidden sm:block">
            A Platform for Freight Management, Transportation Visibility and Time Slot Management
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+442038078493" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3" /> +44 (20) 3807 8493
            </a>
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-[#0C1222]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-3">
          <a href="/" className="text-xl tracking-tight text-white">
            <span className="font-normal">trucks</span>
            <span className="font-semibold text-[#2563EB]">ON</span>
            <span className="font-light text-slate-500">the</span>
            <span className="font-normal">map</span>
            <span className="text-[#2563EB] ml-0.5 text-lg">✳</span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-xs text-slate-500 tracking-wider">
            <span>capacity</span>
            <span className="text-slate-700">|</span>
            <span>visibility</span>
            <span className="text-slate-700">|</span>
            <span>schedule</span>
            <span className="text-[10px] ml-2 text-slate-600">on.one.map</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors underline underline-offset-4">home</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">get in contact</a>
            <a href="#contact" className="flex items-center gap-1 px-5 py-2 border border-slate-700 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              register <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#contact" className="flex items-center gap-1 px-5 py-2 bg-[#2563EB] text-white rounded-md text-sm font-semibold hover:bg-[#1D4ED8] transition-colors">
              log in <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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
            className="md:hidden bg-[#0C1222]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a href="#" className="text-white py-2">home</a>
              <a href="#contact" className="text-white py-2">get in contact</a>
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 border border-slate-700 rounded-md text-sm text-white">register</a>
                <a href="#contact" className="flex-1 text-center px-4 py-2.5 bg-[#2563EB] text-white rounded-md text-sm font-semibold">log in</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
