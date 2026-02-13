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

/* ─── Menu Data ─── */
const platformItems = [
  { icon: CalendarClock, title: "Dock Scheduling", desc: "Automated appointment booking & capacity management", href: "/dock-scheduling" },
  { icon: Eye, title: "Freight Visibility", desc: "Real-time tracking from gate to departure", href: "/freight-visibility" },
  { icon: Truck, title: "Load Matching", desc: "Reduce empty miles with intelligent matching", href: "/load-matching" },
  { icon: Sparkles, title: "Empty Miles Reduction", desc: "AI-powered optimization for return loads", href: "/empty-miles" },
  { icon: BarChart3, title: "Freight Analytics", desc: "Dashboards, KPIs & operational intelligence", href: "/freight-analytics" },
  { icon: Plug, title: "API & Integrations", desc: "Connect SAP, Oracle, WMS, TMS & more", href: "/api-integrations" },
];

const solutionsItems = [
  { icon: Package, title: "3PL & Logistics", desc: "Multi-client dock management at scale", href: "/solutions/3pl" },
  { icon: ArrowDownUp, title: "Inbound & Outbound", desc: "Unified scheduling for both directions", href: "/solutions/inbound-outbound" },
  { icon: Snowflake, title: "Cold Chain", desc: "Temperature-controlled dock operations", href: "/solutions/cold-chain" },
  { icon: Factory, title: "Manufacturing", desc: "JIT delivery synced with production lines", href: "/solutions/manufacturing" },
  { icon: ShoppingCart, title: "Retail Distribution", desc: "High-volume DC appointment management", href: "/solutions/retail" },
];

const industriesItems = [
  { icon: Factory, title: "Automotive & JIT", desc: "Just-in-time supply chain precision", href: "/industries/automotive" },
  { icon: Pill, title: "Pharmaceutical", desc: "Compliance-ready scheduling", href: "/industries/pharmaceutical" },
  { icon: ShoppingCart, title: "FMCG & Retail", desc: "Peak season capacity planning", href: "/industries/fmcg-retail" },
  { icon: HardHat, title: "Construction Materials", desc: "Heavy freight coordination", href: "/industries/construction" },
  { icon: Factory, title: "Manufacturing", desc: "Production-synced dock ops", href: "/industries/manufacturing" },
  { icon: Package, title: "3PL Providers", desc: "Multi-tenant warehouse scheduling", href: "/industries/3pl" },
];

const resourcesItems = [
  { icon: BookOpen, title: "Blog", desc: "Insights on dock scheduling & logistics", href: "/blog" },
  { icon: FileText, title: "Case Studies", desc: "Real results from real customers", href: "/resources/case-studies" },
  { icon: BookOpen, title: "Glossary", desc: "Logistics terminology explained", href: "/resources/glossary" },
  { icon: Calculator, title: "ROI Calculator", desc: "See your potential savings", href: "/tools/roi-calculator" },
  { icon: Calculator, title: "Empty Miles Calculator", desc: "Calculate your waste reduction", href: "/tools/empty-miles-calculator" },
];

const companyItems = [
  { icon: Users, title: "About Us", desc: "Our mission & team", href: "/about" },
  { icon: Users, title: "Careers", desc: "Join our growing team", href: "/careers" },
  { icon: Handshake, title: "Partners", desc: "Partner ecosystem", href: "/partners" },
  { icon: Shield, title: "Security", desc: "Enterprise-grade protection", href: "/security" },
  { icon: Mail, title: "Contact", desc: "Get in touch", href: "#contact" },
];

type MenuItem = { icon: typeof CalendarClock; title: string; desc: string; href: string };

interface MenuConfig {
  items: MenuItem[];
  featured?: { image: string; title: string; desc: string; href: string; label: string };
  columns?: number;
}

const menuConfigs: Record<string, MenuConfig> = {
  platform: {
    items: platformItems,
    featured: {
      image: imgDock,
      title: "See the platform in action",
      desc: "Watch how TrucksOnTheMap transforms dock scheduling from chaos to clockwork.",
      href: "#contact",
      label: "Request a Demo",
    },
  },
  solutions: {
    items: solutionsItems,
    featured: {
      image: imgRetail,
      title: "Find your use case",
      desc: "Every operation is different. Discover the solution built for yours.",
      href: "/solutions",
      label: "Explore Solutions",
    },
  },
  industries: {
    items: industriesItems,
    columns: 2,
  },
  blog: {
    items: resourcesItems,
  },
  about: {
    items: companyItems,
  },
};

/* ─── Component ─── */
const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const handlePanelEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const menuKeys = ["platform", "solutions", "industries", "blog", "about"];

  return (
    <div className="hidden lg:flex items-center gap-1 relative">
      {menuKeys.map((key) => (
        <div
          key={key}
          onMouseEnter={() => handleEnter(key)}
          onMouseLeave={handleLeave}
          className="relative"
        >
          <button
            className={`px-3 py-2 text-xs font-body font-normal transition-colors duration-200 rounded-md ${
              activeMenu === key
                ? "text-foreground bg-white/10"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {key}
          </button>
        </div>
      ))}

      {/* Dropdown Panel */}
      <AnimatePresence>
        {activeMenu && menuConfigs[activeMenu] && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleLeave}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-[100]"
            style={{ minWidth: menuConfigs[activeMenu].featured ? "720px" : "420px" }}
          >
            {/* Arrow */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 rounded-sm shadow-sm" />

            <div className="bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden">
              {menuConfigs[activeMenu].featured ? (
                <FeaturedPanel config={menuConfigs[activeMenu]} />
              ) : (
                <SimplePanel config={menuConfigs[activeMenu]} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Panel with Featured Image ─── */
const FeaturedPanel = ({ config }: { config: MenuConfig }) => (
  <div className="grid grid-cols-5">
    {/* Links */}
    <div className="col-span-3 p-5">
      <div className="space-y-0.5">
        {config.items.map((item) => (
          <MenuLink key={item.title} item={item} />
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <a href="/pricing" className="flex items-center gap-2 px-3 py-2 text-xs font-body text-primary hover:text-primary/80 transition-colors">
          <DollarSign className="w-3.5 h-3.5" /> View Pricing <ArrowRight className="w-3 h-3 ml-auto" />
        </a>
      </div>
    </div>

    {/* Featured card */}
    <div className="col-span-2 bg-gray-50 p-5 flex flex-col">
      <div className="rounded-xl overflow-hidden mb-4 flex-shrink-0">
        <img
          src={config.featured!.image}
          alt={config.featured!.title}
          className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="text-sm font-display font-normal text-gray-900 mb-1.5">{config.featured!.title}</p>
      <p className="text-[11px] text-gray-500 font-body leading-relaxed mb-4">{config.featured!.desc}</p>
      <a
        href={config.featured!.href}
        className="mt-auto inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-body rounded-full hover:bg-primary/90 transition-colors w-fit"
      >
        {config.featured!.label} <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  </div>
);

/* ─── Simple Panel ─── */
const SimplePanel = ({ config }: { config: MenuConfig }) => (
  <div className="p-5">
    <div className={`grid gap-0.5 ${config.columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
      {config.items.map((item) => (
        <MenuLink key={item.title} item={item} />
      ))}
    </div>
  </div>
);

/* ─── Shared Link Row ─── */
const MenuLink = ({ item }: { item: MenuItem }) => (
  <a
    href={item.href}
    className="flex items-start gap-3.5 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
  >
    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors duration-200">
      <item.icon className="w-4 h-4 text-primary" />
    </div>
    <div className="min-w-0">
      <p className="text-[13px] font-display font-normal text-gray-900 group-hover:text-primary transition-colors duration-200">
        {item.title}
      </p>
      <p className="text-[11px] text-gray-400 font-body leading-snug mt-0.5">{item.desc}</p>
    </div>
  </a>
);

export default MegaMenu;
