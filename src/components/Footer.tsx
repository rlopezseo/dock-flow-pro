import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const platformLinks = [
  { label: "Dock Scheduling", to: "/platform/dock-scheduling-software" },
  { label: "Freight Visibility", to: "/platform/freight-visibility-software" },
  { label: "Load Matching", to: "/platform/load-matching-software" },
  { label: "Freight Procurement", to: "/platform/freight-procurement-software" },
  { label: "Predictive ETA", to: "/platform/predictive-eta-software" },
  { label: "Yard Management", to: "/platform/yard-management-software" },
  { label: "Backhaul Optimization", to: "/platform/backhaul-optimization-software" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main content */}
      <div className="container pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="TrucksOnTheMap" className="h-7 brightness-0 invert" />
            </Link>
            <p className="text-sm text-background/60 font-body leading-[1.8] max-w-md mb-8">
              The all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe. From inbound coordination to last-mile tracking, we bring transparency to every mile.
            </p>

            {/* Offices */}
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

          {/* Platform column */}
          <div className="md:col-span-3 md:pl-4">
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-6">Platform</p>
            <ul className="space-y-3.5">
              {platformLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-6">Company</p>
            <ul className="space-y-3.5">
              <li><a href="#contact" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Contact</a></li>
              <li><a href="#register" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Register</a></li>
              <li><a href="#login" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Log In</a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-background/40 mb-6">Legal</p>
            <ul className="space-y-3.5">
              <li><Link to="/terms" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-[13px] text-background/70 hover:text-background font-body transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
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
