import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,7%)] text-white/80">
      <div className="container pt-20 pb-16">
        {/* Logo + description */}
        <div className="mb-14 max-w-2xl">
          <Link to="/" className="inline-block mb-5">
            <img src={logo} alt="TrucksOnTheMap" className="h-7 brightness-0 invert" />
          </Link>
          <p className="text-[13px] text-white/45 font-body leading-[1.85]">
            The all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe. From inbound coordination to last-mile tracking, we bring transparency to every mile.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {/* Registered in the UK */}
          <div>
            <p className="text-sm text-white/60 font-body italic mb-4">Registered in the UK:</p>
            <div className="text-[13px] text-white/80 font-body leading-[1.9] space-y-0.5">
              <p>128 City Road</p>
              <p>London EC1V 2NX</p>
              <p>United Kingdom</p>
              <p>Company Number 9567296</p>
            </div>
          </div>

          {/* Registered in Hungary */}
          <div>
            <p className="text-sm text-white/60 font-body italic mb-4">Registered in Hungary:</p>
            <div className="text-[13px] text-white/80 font-body leading-[1.9] space-y-0.5">
              <p>Práter utca 9., 3. em 5.a</p>
              <p>Győr 9024</p>
              <p>Hungary</p>
              <p>Company Number 08-09-029600</p>
              <p>Tax ID: 26205621-2-08</p>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-sm text-white/60 font-body italic mb-4">Platform:</p>
            <ul className="text-[13px] text-white/80 font-body leading-[1.9] space-y-0.5">
              <li><Link to="/platform/dock-scheduling-software" className="hover:text-white transition-colors">Dock Scheduling</Link></li>
              <li><Link to="/platform/freight-visibility-software" className="hover:text-white transition-colors">Freight Visibility</Link></li>
              <li><Link to="/platform/load-matching-software" className="hover:text-white transition-colors">Load Matching</Link></li>
              <li><Link to="/platform/freight-procurement-software" className="hover:text-white transition-colors">Freight Procurement</Link></li>
              <li><Link to="/platform/predictive-eta-software" className="hover:text-white transition-colors">Predictive ETA</Link></li>
              <li><Link to="/platform/yard-management-software" className="hover:text-white transition-colors">Yard Management</Link></li>
              <li><Link to="/platform/backhaul-optimization-software" className="hover:text-white transition-colors">Backhaul Optimization</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm text-white/60 font-body italic mb-4">Links:</p>
            <ul className="text-[13px] text-white/80 font-body leading-[1.9] space-y-0.5">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
              <li><a href="#login" className="hover:text-white transition-colors">Log In</a></li>
            </ul>

            <p className="text-[13px] text-white/40 font-body mt-6">
              © {new Date().getFullYear()} TrucksOnTheMap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
