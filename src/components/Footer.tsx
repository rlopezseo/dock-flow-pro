import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-trucksonthemap.png";

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "Dock Scheduling", href: "/dock-scheduling" },
      { label: "Freight Visibility", href: "/freight-visibility" },
      { label: "Load Matching", href: "/load-matching" },
      { label: "Empty Miles Reduction", href: "/empty-miles" },
      { label: "Freight Procurement", href: "/freight-procurement" },
      { label: "Freight Analytics", href: "/freight-analytics" },
      { label: "API & Integrations", href: "/api-integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Reduce Empty Miles", href: "/solutions/reduce-empty-miles" },
      { label: "Eliminate Dock Waiting", href: "/solutions/eliminate-dock-waiting" },
      { label: "Supply Chain Visibility", href: "/solutions/supply-chain-visibility" },
      { label: "Freight Cost Reduction", href: "/solutions/freight-cost-reduction" },
      { label: "Carrier Performance", href: "/solutions/carrier-performance" },
      { label: "Sustainability & ESG", href: "/solutions/sustainability" },
    ],
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Automotive & JIT", href: "/industries/automotive" },
      { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
      { label: "FMCG & Retail", href: "/industries/fmcg-retail" },
      { label: "Construction Materials", href: "/industries/construction" },
      { label: "Chemical Industry", href: "/industries/chemical" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "3PL Providers", href: "/industries/3pl" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Empty Miles Calculator", href: "/tools/empty-miles-calculator" },
      { label: "ROI Calculator", href: "/tools/roi-calculator" },
    ],
  },
  compare: {
    title: "Compare",
    links: [
      { label: "vs Transporeon", href: "/alternative/transporeon" },
      { label: "vs Project44", href: "/alternative/project44" },
      { label: "vs FourKites", href: "/alternative/fourkites" },
      { label: "vs GoRamp", href: "/alternative/goramp" },
      { label: "vs Alpega", href: "/alternative/alpega" },
      { label: "vs Shippeo", href: "/alternative/shippeo" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press", href: "/press" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-16">
        {/* Top row: logo + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14 pb-10 border-b border-border">
          <div>
            <img src={logo} alt="TrucksOnTheMap" className="h-7 mb-3 brightness-0" />
            <p className="text-sm text-muted-foreground font-body font-normal max-w-sm">
              Freight management, transportation visibility and time slot management — on.one.map
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-body font-normal rounded-full transition-all duration-300"
            >
              Book a Demo <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground text-sm font-body font-normal rounded-full border border-border transition-all duration-300"
            >
              Register Free
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <p className="text-xs font-display font-normal text-foreground tracking-[0.15em] uppercase mb-4">
                {section.title}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-muted-foreground hover:text-primary font-body font-normal transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14 pb-14 border-b border-border">
          <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-display font-normal text-foreground mb-1">London Office</p>
              <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">
                128 City Road, London EC1V 2NX<br />United Kingdom · Company No. 9567296
              </p>
              <div className="flex items-center gap-4 mt-3">
                <a href="tel:+442038078493" className="inline-flex items-center gap-1.5 text-xs text-primary font-body font-normal hover:text-primary/80 transition-colors">
                  <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
                </a>
                <a href="mailto:ihaveaquestion@trucksonthemap.com" className="inline-flex items-center gap-1.5 text-xs text-primary font-body font-normal hover:text-primary/80 transition-colors">
                  <Mail className="w-3 h-3" /> Email
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-display font-normal text-foreground mb-1">Hungary Office</p>
              <p className="text-xs text-muted-foreground font-body font-normal leading-relaxed">
                Práter utca 9., 3. em 5.a<br />Győr 9024, Hungary · Tax ID: 26205621-2-08
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
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
