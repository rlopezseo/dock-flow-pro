import { MapPin } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-16">
        {/* Main grid: Brand | Platform | Industries | Resources | Company */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 pr-0 md:pr-8">
            <img src={logo} alt="TrucksOnTheMap" className="h-7 mb-4 brightness-0" />
            <p className="text-[13px] text-muted-foreground font-body font-normal leading-relaxed">
              TrucksOnTheMap is the all-in-one logistics platform that helps shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise time slot management across Europe. From inbound coordination to last-mile tracking, we bring transparency to every mile.
            </p>
          </div>

          {/* Platform */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Platform</p>
            <ul className="space-y-2.5">
              <li><a href="/dock-scheduling" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Dock Scheduling</a></li>
              <li><a href="/freight-visibility" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Freight Visibility</a></li>
              <li><a href="/load-matching" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Load Matching</a></li>
              <li><a href="/empty-miles" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Empty Miles Reduction</a></li>
              <li><a href="/freight-analytics" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Freight Analytics</a></li>
              <li><a href="/api-integrations" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">API & Integrations</a></li>
              <li><a href="/pricing" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Industries</p>
            <ul className="space-y-2.5">
              <li><a href="/industries/automotive" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Automotive & JIT</a></li>
              <li><a href="/industries/pharmaceutical" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Pharmaceutical</a></li>
              <li><a href="/industries/fmcg-retail" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">FMCG & Retail</a></li>
              <li><a href="/industries/construction" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Construction Materials</a></li>
              <li><a href="/industries/manufacturing" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Manufacturing</a></li>
              <li><a href="/industries/3pl" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">3PL Providers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Resources</p>
            <ul className="space-y-2.5">
              <li><a href="/blog" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Blog</a></li>
              <li><a href="/resources/case-studies" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Case Studies</a></li>
              <li><a href="/resources/glossary" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Glossary</a></li>
              <li><a href="/tools/roi-calculator" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">ROI Calculator</a></li>
              <li><a href="/tools/empty-miles-calculator" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Empty Miles Calculator</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="/about" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Careers</a></li>
              <li><a href="/partners" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Partners</a></li>
              <li><a href="/security" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Security</a></li>
              <li><a href="#contact" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Contact</a></li>
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
            <a href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/security" className="hover:text-foreground transition-colors">Security</a>
          </div>
          <span className="text-xs text-muted-foreground font-body font-normal">©2025 TrucksOnTheMap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
