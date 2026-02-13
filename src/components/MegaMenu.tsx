import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarClock, Eye, Truck, BarChart3, Plug, DollarSign,
  Factory, ShoppingCart, Snowflake, Package, ArrowDownUp, Pill,
  HardHat, BookOpen, FileText, Calculator, Sparkles,
  Users, Shield, Handshake, Mail, ArrowRight, ChevronRight
} from "lucide-react";

import imgDock from "@/assets/features-dock.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";

/* ─── Menu Data ─── */
type MenuItem = { icon: typeof CalendarClock; title: string; desc: string; href: string };

const platformItems: MenuItem[] = [
  { icon: CalendarClock, title: "Dock Scheduling", desc: "Automated appointment booking & capacity management", href: "/dock-scheduling" },
  { icon: Eye, title: "Freight Visibility", desc: "Real-time tracking from gate to departure", href: "/freight-visibility" },
  { icon: Truck, title: "Load Matching", desc: "Reduce empty miles with intelligent matching", href: "/load-matching" },
  { icon: Sparkles, title: "Empty Miles Reduction", desc: "AI-powered optimization for return loads", href: "/empty-miles" },
  { icon: BarChart3, title: "Freight Analytics", desc: "Dashboards, KPIs & operational intelligence", href: "/freight-analytics" },
  { icon: Plug, title: "API & Integrations", desc: "Connect SAP, Oracle, WMS, TMS & more", href: "/api-integrations" },
];

const solutionsItems: MenuItem[] = [
  { icon: Package, title: "3PL & Logistics", desc: "Multi-client dock management at scale", href: "/solutions/3pl" },
  { icon: ArrowDownUp, title: "Inbound & Outbound", desc: "Unified scheduling for both directions", href: "/solutions/inbound-outbound" },
  { icon: Snowflake, title: "Cold Chain", desc: "Temperature-controlled dock operations", href: "/solutions/cold-chain" },
  { icon: Factory, title: "Manufacturing", desc: "JIT delivery synced with production lines", href: "/solutions/manufacturing" },
  { icon: ShoppingCart, title: "Retail Distribution", desc: "High-volume DC appointment management", href: "/solutions/retail" },
];

const industriesItems: MenuItem[] = [
  { icon: Factory, title: "Automotive & JIT", desc: "Just-in-time supply chain precision", href: "/industries/automotive" },
  { icon: Pill, title: "Pharmaceutical", desc: "Compliance-ready scheduling", href: "/industries/pharmaceutical" },
  { icon: ShoppingCart, title: "FMCG & Retail", desc: "Peak season capacity planning", href: "/industries/fmcg-retail" },
  { icon: HardHat, title: "Construction Materials", desc: "Heavy freight coordination", href: "/industries/construction" },
  { icon: Factory, title: "Manufacturing", desc: "Production-synced dock ops", href: "/industries/manufacturing" },
  { icon: Package, title: "3PL Providers", desc: "Multi-tenant warehouse scheduling", href: "/industries/3pl" },
];

const resourcesItems: MenuItem[] = [
  { icon: BookOpen, title: "Blog", desc: "Insights on dock scheduling & logistics", href: "/blog" },
  { icon: FileText, title: "Case Studies", desc: "Real results from real customers", href: "/resources/case-studies" },
  { icon: BookOpen, title: "Glossary", desc: "Logistics terminology explained", href: "/resources/glossary" },
  { icon: Calculator, title: "ROI Calculator", desc: "See your potential savings", href: "/tools/roi-calculator" },
  { icon: Calculator, title: "Empty Miles Calculator", desc: "Calculate your waste reduction", href: "/tools/empty-miles-calculator" },
];

const companyItems: MenuItem[] = [
  { icon: Users, title: "About Us", desc: "Our mission & team", href: "/about" },
  { icon: Users, title: "Careers", desc: "Join our growing team", href: "/careers" },
  { icon: Handshake, title: "Partners", desc: "Partner ecosystem", href: "/partners" },
  { icon: Shield, title: "Security", desc: "Enterprise-grade protection", href: "/security" },
  { icon: Mail, title: "Contact", desc: "Get in touch", href: "#contact" },
];

interface PanelConfig {
  items: MenuItem[];
  featured?: { image: string; title: string; desc: string; href: string; label: string };
  columns?: number;
  cta?: { icon: typeof DollarSign; text: string; href: string };
}

const panels: Record<string, PanelConfig> = {
  platform: {
    items: platformItems,
    featured: { image: imgDock, title: "See the platform in action", desc: "Watch how TrucksOnTheMap transforms dock scheduling from chaos to clockwork.", href: "#contact", label: "Request a Demo" },
    cta: { icon: DollarSign, text: "View Pricing", href: "/pricing" },
  },
  solutions: {
    items: solutionsItems,
    featured: { image: imgRetail, title: "Find your use case", desc: "Every operation is different. Discover the solution built for yours.", href: "/solutions", label: "Explore Solutions" },
  },
  industries: {
    items: industriesItems,
    columns: 2,
    featured: { image: imgManufacturing, title: "Industry expertise", desc: "Dock scheduling solutions tailored to your sector's unique demands.", href: "/industries", label: "All Industries" },
  },
  blog: {
    items: resourcesItems,
    featured: { image: imgColdchain, title: "Latest insights", desc: "Stay ahead with logistics intelligence, case studies, and tools.", href: "/blog", label: "Read the Blog" },
  },
  about: {
    items: companyItems,
    featured: { image: img3pl, title: "Our story", desc: "Built by logistics professionals, for logistics professionals.", href: "/about", label: "Learn More" },
  },
};

const menuKeys = ["platform", "solutions", "industries", "blog", "about"];

/* ─── Component ─── */
const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const open = useCallback((key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  }, []);

  const close = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const isOpen = activeMenu !== null;

  return (
    <div ref={containerRef} className="hidden lg:flex items-center gap-0.5 relative" onMouseLeave={close}>
      {/* Nav buttons */}
      {menuKeys.map((key) => (
        <button
          key={key}
          onMouseEnter={() => open(key)}
          className={`px-3.5 py-2 text-xs font-body font-normal transition-colors duration-200 rounded-md ${
            activeMenu === key
              ? "text-foreground bg-white/10"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {key}
        </button>
      ))}

      {/* Single fixed-size panel — content crossfades */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={cancelClose}
            onMouseLeave={close}
            className="fixed left-1/2 -translate-x-1/2 mt-1 z-[100]"
            style={{ top: containerRef.current ? containerRef.current.getBoundingClientRect().bottom + window.scrollY : 80, width: "780px" }}
          >
            <div className="bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden">
              <AnimatePresence mode="wait">
                {activeMenu && (
                  <motion.div
                    key={activeMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <PanelContent config={panels[activeMenu]} menuKey={activeMenu} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Universal Panel Layout ─── */
const PanelContent = ({ config, menuKey }: { config: PanelConfig; menuKey: string }) => (
  <div className="grid grid-cols-5 min-h-[340px]">
    {/* Left — Links */}
    <div className="col-span-3 p-6 flex flex-col">
      <p className="text-[10px] font-body font-normal tracking-[0.2em] uppercase text-gray-400 mb-3 px-3">
        {menuKey}
      </p>
      <div className={`flex-1 ${config.columns === 2 ? "grid grid-cols-2 gap-x-2 gap-y-0.5 content-start" : "space-y-0.5"}`}>
        {config.items.map((item) => (
          <MenuLink key={item.title} item={item} />
        ))}
      </div>
      {config.cta && (
        <div className="mt-auto pt-3 border-t border-gray-100">
          <a href={config.cta.href} className="flex items-center gap-2 px-3 py-2 text-xs font-body text-primary hover:text-primary/80 transition-colors">
            <config.cta.icon className="w-3.5 h-3.5" /> {config.cta.text} <ArrowRight className="w-3 h-3 ml-auto" />
          </a>
        </div>
      )}
    </div>

    {/* Right — Featured visual */}
    <div className="col-span-2 bg-[hsl(220,15%,97%)] p-6 flex flex-col justify-between">
      {config.featured && (
        <>
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={config.featured.image}
              alt={config.featured.title}
              className="w-full h-36 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <p className="text-sm font-display font-normal text-foreground mb-1.5">{config.featured.title}</p>
            <p className="text-[11px] text-muted-foreground font-body leading-relaxed mb-5">{config.featured.desc}</p>
          </div>
          <a
            href={config.featured.href}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-body rounded-full hover:bg-primary/90 transition-colors w-fit"
          >
            {config.featured.label} <ChevronRight className="w-3 h-3" />
          </a>
        </>
      )}
    </div>
  </div>
);

/* ─── Link Row ─── */
const MenuLink = ({ item }: { item: MenuItem }) => (
  <a
    href={item.href}
    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[hsl(220,15%,95%)] transition-colors duration-200 group"
  >
    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
      <item.icon className="w-4 h-4 text-primary" />
    </div>
    <div className="min-w-0">
      <p className="text-[13px] font-display font-normal text-foreground group-hover:text-primary transition-colors duration-200">
        {item.title}
      </p>
      <p className="text-[11px] text-muted-foreground font-body leading-snug mt-0.5">{item.desc}</p>
    </div>
  </a>
);

export default MegaMenu;
