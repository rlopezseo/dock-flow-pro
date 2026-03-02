import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-16">
        {/* Main grid: Brand | Platform | Legal & Company */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5 pr-0 md:pr-8">
            <Link to="/">
              <img src={logo} alt="TrucksOnTheMap" className="h-7 mb-4 brightness-0" />
            </Link>
            <p className="text-[13px] text-muted-foreground font-body font-normal leading-relaxed">
              TrucksOnTheMap is the all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe. From inbound coordination to last-mile tracking, we bring transparency to every mile.
            </p>
          </div>

          {/* Platform */}
          <div className="col-span-1 md:col-span-3">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Platform</p>
            <ul className="space-y-2.5">
              <li><Link to="/platform/dock-scheduling-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Dock Scheduling</Link></li>
              <li><Link to="/platform/freight-visibility-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Freight Visibility</Link></li>
              <li><Link to="/platform/load-matching-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Load Matching</Link></li>
              <li><Link to="/platform/freight-procurement-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Freight Procurement</Link></li>
              <li><Link to="/platform/predictive-eta-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Predictive ETA</Link></li>
              <li><Link to="/platform/yard-management-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Yard Management</Link></li>
              <li><Link to="/platform/backhaul-optimization-software" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Backhaul Optimization</Link></li>
            </ul>
          </div>

          {/* Company & Auth */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#contact" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Contact</a></li>
              <li><a href="#register" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Register</a></li>
              <li><a href="#login" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Log In</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Legal</p>
            <ul className="space-y-2.5">
              <li><Link to="/terms" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Offices row */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10 pb-10 border-t border-b border-border pt-10">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-display font-normal text-foreground">London Office</p>
              <p className="text-xs text-muted-foreground font-body font-normal">128 City Road, EC1V 2NX, United Kingdom · Co. 9567296</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-display font-normal text-foreground">Hungary Office</p>
              <p className="text-xs text-muted-foreground font-body font-normal">Práter utca 9., 3. em 5.a, Győr 9024 · Tax ID: 26205621-2-08</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-body font-normal">
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <span className="text-xs text-muted-foreground font-body font-normal">© {new Date().getFullYear()} TrucksOnTheMap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
