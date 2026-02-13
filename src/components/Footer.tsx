import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-16">
        {/* Top section: Logo + description | 3 link columns */}
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14 pb-14 border-b border-border">
          {/* Brand */}
          <div>
            <img src={logo} alt="TrucksOnTheMap" className="h-7 mb-4 brightness-0" />
            <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed mb-4">
              TrucksOnTheMap is the all-in-one freight management platform for dock scheduling, transportation visibility, and time slot management. We help logistics teams across Europe eliminate dock chaos, reduce empty miles, and gain full supply chain control — on.one.map.
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Platform
            </p>
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
          <div>
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Industries
            </p>
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
          <div>
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Resources
            </p>
            <ul className="space-y-2.5">
              <li><a href="/blog" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Blog</a></li>
              <li><a href="/resources/case-studies" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Case Studies</a></li>
              <li><a href="/resources/whitepapers" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Whitepapers</a></li>
              <li><a href="/resources/webinars" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Webinars</a></li>
              <li><a href="/resources/glossary" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Glossary</a></li>
              <li><a href="/tools/roi-calculator" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">ROI Calculator</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section: Solutions, Compare, Company + Offices */}
        <div className="grid md:grid-cols-[1fr_1fr_1fr_1.4fr] gap-10 mb-14 pb-14 border-b border-border">
          {/* Solutions */}
          <div>
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Solutions
            </p>
            <ul className="space-y-2.5">
              <li><a href="/solutions/reduce-empty-miles" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Reduce Empty Miles</a></li>
              <li><a href="/solutions/eliminate-dock-waiting" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Eliminate Dock Waiting</a></li>
              <li><a href="/solutions/supply-chain-visibility" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Supply Chain Visibility</a></li>
              <li><a href="/solutions/freight-cost-reduction" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Freight Cost Reduction</a></li>
              <li><a href="/solutions/sustainability" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Sustainability & ESG</a></li>
            </ul>
          </div>

          {/* Compare */}
          <div>
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Compare
            </p>
            <ul className="space-y-2.5">
              <li><a href="/alternative/transporeon" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">vs Transporeon</a></li>
              <li><a href="/alternative/project44" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">vs Project44</a></li>
              <li><a href="/alternative/fourkites" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">vs FourKites</a></li>
              <li><a href="/alternative/goramp" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">vs GoRamp</a></li>
              <li><a href="/alternative/shippeo" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">vs Shippeo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              <li><a href="/about" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Careers</a></li>
              <li><a href="/partners" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Partners</a></li>
              <li><a href="/press" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Press</a></li>
              <li><a href="/security" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Security</a></li>
              <li><a href="#contact" className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Offices */}
          <div className="space-y-4">
            <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
              Offices
            </p>
            <div className="flex items-start gap-3 p-5 bg-secondary/50 rounded-xl">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-display font-normal text-foreground mb-1">London</p>
                <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">
                  128 City Road, EC1V 2NX, UK
                </p>
                <a href="tel:+442038078493" className="inline-flex items-center gap-1 text-xs text-primary font-body font-normal mt-1.5">
                  <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-secondary/50 rounded-xl">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-display font-normal text-foreground mb-1">Győr, Hungary</p>
                <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">
                  Práter utca 9., 3. em 5.a, 9024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
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
