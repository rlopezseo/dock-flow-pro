import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const platformLinksLeft = [
  { label: "Dock Scheduling", to: "/platform/dock-scheduling-software" },
  { label: "Freight Visibility", to: "/platform/freight-visibility-software" },
  { label: "Load Matching", to: "/platform/load-matching-software" },
  { label: "Freight Procurement", to: "/platform/freight-procurement-software" },
];

const platformLinksRight = [
  { label: "Predictive ETA", to: "/platform/predictive-eta-software" },
  { label: "Yard Management", to: "/platform/yard-management-software" },
  { label: "Backhaul Optimization", to: "/platform/backhaul-optimization-software" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-6">
          {/* Brand + Offices */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="TrucksOnTheMap" className="h-7 brightness-0 invert" />
            </Link>
            <p className="text-sm text-background/60 font-body leading-[1.8] max-w-sm mb-8">
              The all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-display font-semibold tracking-[0.1em] uppercase text-background/90 mb-1">London Office</p>
                <p className="text-[13px] text-background/50 font-body leading-relaxed">
                  128 City Road, London EC1V 2NX<br />
                  United Kingdom · Co. Reg. 9567296
                </p>
              </div>
              <div>
                <p className="text-xs font-display font-semibold tracking-[0.1em] uppercase text-background/90 mb-1">Hungary Office</p>
                <p className="text-[13px] text-background/50 font-body leading-relaxed">
                  Práter utca 9., 3. em 5.a<br />
                  Győr 9024, Hungary · Tax ID: 26205621-2-08
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Platform (2 cols) + Company + Legal */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
              {/* Platform col 1 */}
              <div>
                <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-5">Platform</p>
                <ul className="space-y-3">
                  {platformLinksLeft.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform col 2 */}
              <div>
                <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-5 opacity-0 pointer-events-none select-none" aria-hidden="true">—</p>
                <ul className="space-y-3">
                  {platformLinksRight.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-5">Company</p>
                <ul className="space-y-3">
                  <li><a href="#contact" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Contact</a></li>
                  <li><a href="#register" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Register</a></li>
                  <li><a href="#login" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Log In</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-5">Legal</p>
                <ul className="space-y-3">
                  <li><Link to="/terms" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Terms & Conditions</Link></li>
                  <li><Link to="/privacy" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-background/30 font-body tracking-wide">
            © {new Date().getFullYear()} TrucksOnTheMap Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-background/30 font-body tracking-wide">
            Made in Europe 🇬🇧 🇭🇺
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
