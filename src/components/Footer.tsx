import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-4 pr-0 md:pr-6">
            <Link to="/">
              <img src={logo} alt="TrucksOnTheMap" className="h-7 mb-5 brightness-0" />
            </Link>
            <p className="text-[13px] text-muted-foreground font-body leading-relaxed max-w-sm">
              The all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe.
            </p>
          </div>

          {/* Platform */}
          <div className="md:col-span-3">
            <p className="text-xs font-display font-semibold text-foreground tracking-[0.15em] uppercase mb-5">Platform</p>
            <ul className="space-y-3">
              <li><Link to="/platform/dock-scheduling-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Dock Scheduling</Link></li>
              <li><Link to="/platform/freight-visibility-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Freight Visibility</Link></li>
              <li><Link to="/platform/load-matching-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Load Matching</Link></li>
              <li><Link to="/platform/freight-procurement-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Freight Procurement</Link></li>
              <li><Link to="/platform/predictive-eta-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Predictive ETA</Link></li>
              <li><Link to="/platform/yard-management-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Yard Management</Link></li>
              <li><Link to="/platform/backhaul-optimization-software" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Backhaul Optimization</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-xs font-display font-semibold text-foreground tracking-[0.15em] uppercase mb-5">Company</p>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Contact</a></li>
              <li><a href="#register" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Register</a></li>
              <li><a href="#login" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Log In</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <p className="text-xs font-display font-semibold text-foreground tracking-[0.15em] uppercase mb-5">Legal</p>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-[13px] text-muted-foreground hover:text-primary font-body transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Offices */}
        <div className="flex flex-col sm:flex-row gap-8 py-8 border-t border-border">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <p className="text-xs text-muted-foreground font-body">
              <span className="text-foreground font-medium">London</span> · 128 City Road, EC1V 2NX · Co. 9567296
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <p className="text-xs text-muted-foreground font-body">
              <span className="text-foreground font-medium">Győr</span> · Práter utca 9., 3. em 5.a, 9024 · Tax ID: 26205621-2-08
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-body text-center">
            © {new Date().getFullYear()} TrucksOnTheMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
