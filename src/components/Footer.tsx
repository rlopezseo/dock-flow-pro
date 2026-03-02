import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[hsl(220,12%,91%)]">
      {/* Upper footer */}
      <div className="container">
        <div className="pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side — brand */}
          <div>
            <Link to="/" className="inline-block mb-8">
              <img src={logo} alt="TrucksOnTheMap" className="h-12 brightness-0" />
            </Link>
            <p className="text-[13px] text-[hsl(220,15%,45%)] font-body font-normal leading-[2] tracking-[0.02em] max-w-lg">
              The all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe. From inbound coordination to last-mile tracking, we bring transparency to every mile.
            </p>
          </div>

          {/* Right side — nav columns */}
          <div className="grid grid-cols-3 gap-8 lg:gap-12 lg:pt-1">
            <nav>
              <p className="text-[10px] font-display font-light tracking-[0.3em] uppercase text-[hsl(207,30%,12%)] mb-6">Platform</p>
              <ul className="space-y-[10px]">
                {[
                  ["Dock Scheduling", "/platform/dock-scheduling-software"],
                  ["Freight Visibility", "/platform/freight-visibility-software"],
                  ["Load Matching", "/platform/load-matching-software"],
                  ["Freight Procurement", "/platform/freight-procurement-software"],
                  ["Predictive ETA", "/platform/predictive-eta-software"],
                  ["Yard Management", "/platform/yard-management-software"],
                  ["Backhaul Optimization", "/platform/backhaul-optimization-software"],
                ].map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-[12px] text-[hsl(220,15%,45%)] hover:text-[hsl(207,60%,30%)] font-body font-normal tracking-[0.02em] transition-colors duration-300">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <p className="text-[10px] font-display font-light tracking-[0.3em] uppercase text-[hsl(207,30%,12%)] mb-6">Company</p>
              <ul className="space-y-[10px]">
                <li><a href="#contact" className="text-[12px] text-[hsl(220,15%,45%)] hover:text-[hsl(207,60%,30%)] font-body font-normal tracking-[0.02em] transition-colors duration-300">Contact</a></li>
                <li><a href="#register" className="text-[12px] text-[hsl(220,15%,45%)] hover:text-[hsl(207,60%,30%)] font-body font-normal tracking-[0.02em] transition-colors duration-300">Register</a></li>
                <li><a href="#login" className="text-[12px] text-[hsl(220,15%,45%)] hover:text-[hsl(207,60%,30%)] font-body font-normal tracking-[0.02em] transition-colors duration-300">Log In</a></li>
              </ul>
            </nav>

            <nav>
              <p className="text-[10px] font-display font-light tracking-[0.3em] uppercase text-[hsl(207,30%,12%)] mb-6">Legal</p>
              <ul className="space-y-[10px]">
                <li><Link to="/terms" className="text-[12px] text-[hsl(220,15%,45%)] hover:text-[hsl(207,60%,30%)] font-body font-normal tracking-[0.02em] transition-colors duration-300">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-[12px] text-[hsl(220,15%,45%)] hover:text-[hsl(207,60%,30%)] font-body font-normal tracking-[0.02em] transition-colors duration-300">Privacy Policy</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[hsl(220,12%,91%)]" />

        {/* Lower footer — offices + copyright */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div>
            <p className="text-[10px] font-display font-light tracking-[0.3em] uppercase text-[hsl(207,30%,12%)] mb-3">United Kingdom</p>
            <p className="text-[11.5px] text-[hsl(220,12%,55%)] font-body font-normal leading-[1.9] tracking-[0.02em]">
              128 City Road, London EC1V 2NX<br />
              Co. 9567296
            </p>
          </div>

          <div>
            <p className="text-[10px] font-display font-light tracking-[0.3em] uppercase text-[hsl(207,30%,12%)] mb-3">Hungary</p>
            <p className="text-[11.5px] text-[hsl(220,12%,55%)] font-body font-normal leading-[1.9] tracking-[0.02em]">
              Práter utca 9., 3. em 5.a, Győr 9024<br />
              Co. 08-09-029600 · Tax ID: 26205621-2-08
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-[11px] text-[hsl(220,10%,80%)] font-body font-normal tracking-[0.1em]">
              © {new Date().getFullYear()} TrucksOnTheMap Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
