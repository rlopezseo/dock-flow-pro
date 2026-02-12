import logo from "@/assets/logo-trucksonthemap.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "rgb(38, 48, 55)" }} className="text-white/70 py-20 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="TrucksOnTheMap" className="h-8 brightness-200" />
            <p className="text-[13px] text-white/40 mt-2">Modular, invite-only Transportation Management Platform</p>
            <div className="mt-6 text-xs space-y-1 text-white/40">
              <p>128 City Road</p>
              <p>London EC1V 2NX, United Kingdom</p>
              <p className="mt-2">Company Number 9567296</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/40 mb-4">Product</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/40 mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/40 mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +44 (20) 3807 8493</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> ihaveaquestion@trucksonthemap.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 gap-4">
          <p>© 2026 TrucksOnTheMap · <a href="#" className="hover:text-white transition-colors">Privacy</a> · <a href="#" className="hover:text-white transition-colors">Terms</a></p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
