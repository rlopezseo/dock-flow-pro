import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,7%)]">
      <div className="container pt-20 pb-10">
        {/* Top: Logo+description left, Platform+Links right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left: Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="TrucksOnTheMap" className="h-6 brightness-0 invert opacity-70" />
            </Link>
            <p className="text-[13px] text-white/35 font-body font-normal leading-[1.9] tracking-wide max-w-md">
              The all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe. From inbound coordination to last-mile tracking, we bring transparency to every mile.
            </p>
          </div>

          {/* Right: Platform + Links */}
          <div className="lg:col-span-7 flex justify-end">
            <div className="grid grid-cols-2 gap-x-20 gap-y-10">
              {/* Platform */}
              <div>
                <p className="text-[11px] font-display font-extralight tracking-[0.25em] uppercase text-white/25 mb-5">Platform</p>
                <ul className="text-[12.5px] text-white/50 font-body font-normal leading-[2] tracking-wide">
                  <li><Link to="/platform/dock-scheduling-software" className="hover:text-white/80 transition-colors duration-300">Dock Scheduling</Link></li>
                  <li><Link to="/platform/freight-visibility-software" className="hover:text-white/80 transition-colors duration-300">Freight Visibility</Link></li>
                  <li><Link to="/platform/load-matching-software" className="hover:text-white/80 transition-colors duration-300">Load Matching</Link></li>
                  <li><Link to="/platform/freight-procurement-software" className="hover:text-white/80 transition-colors duration-300">Freight Procurement</Link></li>
                  <li><Link to="/platform/predictive-eta-software" className="hover:text-white/80 transition-colors duration-300">Predictive ETA</Link></li>
                  <li><Link to="/platform/yard-management-software" className="hover:text-white/80 transition-colors duration-300">Yard Management</Link></li>
                  <li><Link to="/platform/backhaul-optimization-software" className="hover:text-white/80 transition-colors duration-300">Backhaul Optimization</Link></li>
                </ul>
              </div>

              {/* Links */}
              <div>
                <p className="text-[11px] font-display font-extralight tracking-[0.25em] uppercase text-white/25 mb-5">Links</p>
                <ul className="text-[12.5px] text-white/50 font-body font-normal leading-[2] tracking-wide">
                  <li><a href="#contact" className="hover:text-white/80 transition-colors duration-300">Contact</a></li>
                  <li><a href="#register" className="hover:text-white/80 transition-colors duration-300">Register</a></li>
                  <li><a href="#login" className="hover:text-white/80 transition-colors duration-300">Log In</a></li>
                  <li className="pt-1"><Link to="/terms" className="hover:text-white/80 transition-colors duration-300">Terms & Conditions</Link></li>
                  <li><Link to="/privacy" className="hover:text-white/80 transition-colors duration-300">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-12" />

        {/* Bottom: Offices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          {/* UK */}
          <div>
            <p className="text-[11px] font-display font-extralight tracking-[0.25em] uppercase text-white/25 mb-4">Registered in the UK</p>
            <div className="text-[12.5px] text-white/50 font-body font-normal leading-[2] tracking-wide">
              <p>128 City Road</p>
              <p>London EC1V 2NX</p>
              <p>United Kingdom</p>
              <p className="mt-1.5 text-white/30">Co. 9567296</p>
            </div>
          </div>

          {/* Hungary */}
          <div>
            <p className="text-[11px] font-display font-extralight tracking-[0.25em] uppercase text-white/25 mb-4">Registered in Hungary</p>
            <div className="text-[12.5px] text-white/50 font-body font-normal leading-[2] tracking-wide">
              <p>Práter utca 9., 3. em 5.a</p>
              <p>Győr 9024, Hungary</p>
              <p className="mt-1.5 text-white/30">Co. 08-09-029600</p>
              <p className="text-white/30">Tax ID: 26205621-2-08</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="h-px bg-white/[0.06]" />
      <div className="container py-6">
        <p className="text-[11px] text-white/20 font-body font-normal tracking-[0.15em] text-center">
          © {new Date().getFullYear()} TrucksOnTheMap Ltd · Made in Europe
        </p>
      </div>
    </footer>
  );
};

export default Footer;
