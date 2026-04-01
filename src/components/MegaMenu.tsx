import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck, Package, Factory, ShoppingCart, Pill, FlaskConical,
  BookOpen, Eye, Route, CalendarCheck, Mail, LogIn, UserPlus, CalendarDays,
  CalendarClock, BarChart3, Plug, Sparkles, ArrowRight,
  ChevronRight, Shield, Globe, Zap, Layers, MapPin
} from "lucide-react";

/* ─── Menu Data ─── */
type MenuItem = { icon: typeof Truck; title: string; desc: string; href: string };

const platformItems: MenuItem[] = [
  { icon: CalendarClock, title: "Dock Scheduling", desc: "Automated appointment booking & capacity management", href: "/dock-scheduling-software-for-distribution-centers" },
  { icon: Eye, title: "Freight Visibility", desc: "Real-time tracking from gate to departure", href: "/freight-management-software-for-shippers" },
  { icon: Truck, title: "Load Matching", desc: "Reduce empty miles with intelligent matching", href: "/freight-management-software-for-shippers" },
  { icon: Sparkles, title: "Backhaul Optimization", desc: "AI-powered optimization for return loads", href: "/freight-management-software-for-shippers" },
  { icon: BarChart3, title: "Predictive ETA", desc: "AI-powered freight arrival predictions", href: "/freight-management-software-for-shippers" },
  { icon: Plug, title: "Yard Management", desc: "Digital truck yard optimization", href: "/dock-scheduling-software-for-distribution-centers" },
];

const solutionsItems: MenuItem[] = [
  { icon: Package, title: "Shippers", desc: "End-to-end freight management & visibility", href: "/freight-management-software-for-shippers" },
  { icon: Eye, title: "Brokers", desc: "Real-time visibility for brokerage operations", href: "/freight-visibility-software-for-brokers" },
  { icon: Truck, title: "Carriers", desc: "Fleet visibility & capacity optimization", href: "/fleet-visibility-software-for-carriers" },
  { icon: CalendarCheck, title: "Distribution Centers", desc: "Dock scheduling & yard management", href: "/dock-scheduling-software-for-distribution-centers" },
];

const industriesItems: MenuItem[] = [
  { icon: Factory, title: "Industrial & Automotive", desc: "JIT supply chain precision", href: "/freight-visibility-for-industrial-and-automotive" },
  { icon: Package, title: "3PL Providers", desc: "Multi-client freight orchestration", href: "/freight-visibility-for-3pl-providers" },
  { icon: ShoppingCart, title: "Retail & FMCG", desc: "Peak season capacity planning", href: "/freight-visibility-for-retail-and-fmcg" },
  { icon: Pill, title: "Pharma", desc: "Compliance-ready cold chain scheduling", href: "/freight-visibility-for-pharma" },
  { icon: FlaskConical, title: "Chemical", desc: "ADR-certified freight coordination", href: "/freight-visibility-for-chemical-industry" },
];

const blogItems: MenuItem[] = [
  { icon: BookOpen, title: "Blog", desc: "All insights on freight & logistics", href: "/blog" },
  { icon: Eye, title: "Freight Visibility", desc: "Track & trace across European corridors", href: "/blog?category=Freight+Visibility" },
  { icon: Route, title: "Empty Miles", desc: "Reduce waste, optimize return loads", href: "/blog?category=Empty+Miles" },
  { icon: Truck, title: "Freight Booking", desc: "Digital capacity procurement", href: "/blog?category=Freight+Booking" },
];

const aboutItems: MenuItem[] = [
  { icon: Mail, title: "Contact", desc: "Get in touch with our team", href: "#contact" },
  { icon: LogIn, title: "Log In", desc: "Access your account", href: "#contact" },
  { icon: UserPlus, title: "Register", desc: "Create your free account", href: "#contact" },
  { icon: CalendarDays, title: "Book Free Consultation", desc: "Schedule a call with our experts", href: "#contact" },
];

/* ─── Featured badge configs ─── */
interface BadgeConfig {
  icon: typeof Truck;
  accentIcon: typeof Shield;
  gradient: string;
  accentColor: string;
}

interface PanelConfig {
  items: MenuItem[];
  featured: { title: string; desc: string; href: string; label: string };
  badge: BadgeConfig;
}

const panels: Record<string, PanelConfig> = {
  platform: {
    items: platformItems,
    featured: { title: "See the platform in action", desc: "Watch how TrucksOnTheMap transforms freight operations from chaos to clockwork.", href: "#contact", label: "Request a Demo" },
    badge: { icon: Layers, accentIcon: Zap, gradient: "from-primary/15 to-primary/5", accentColor: "text-primary" },
  },
  solutions: {
    items: solutionsItems,
    featured: { title: "Find your solution", desc: "Every operation is different. Discover the freight management solution built for yours.", href: "/freight-management-software-for-shippers", label: "Explore Solutions" },
    badge: { icon: Globe, accentIcon: Shield, gradient: "from-[hsl(200,60%,92%)] to-[hsl(200,40%,96%)]", accentColor: "text-[hsl(200,60%,45%)]" },
  },
  industries: {
    items: industriesItems,
    featured: { title: "Industry expertise", desc: "Freight visibility solutions tailored to your sector's unique demands.", href: "/freight-visibility-for-industrial-and-automotive", label: "All Industries" },
    badge: { icon: Factory, accentIcon: Shield, gradient: "from-[hsl(160,40%,90%)] to-[hsl(160,30%,95%)]", accentColor: "text-[hsl(160,50%,38%)]" },
  },
  blog: {
    items: blogItems,
    featured: { title: "Latest insights", desc: "Stay ahead with logistics intelligence, European freight trends, and operational best practices.", href: "/blog", label: "Read the Blog" },
    badge: { icon: BookOpen, accentIcon: Sparkles, gradient: "from-[hsl(270,40%,92%)] to-[hsl(270,30%,96%)]", accentColor: "text-[hsl(270,50%,50%)]" },
  },
  about: {
    items: aboutItems,
    featured: { title: "Let's talk freight", desc: "Book a free consultation and discover how TrucksOnTheMap can transform your logistics operations.", href: "#contact", label: "Book a Demo" },
    badge: { icon: MapPin, accentIcon: Globe, gradient: "from-[hsl(30,50%,92%)] to-[hsl(30,40%,96%)]", accentColor: "text-[hsl(30,60%,45%)]" },
  },
};

const menuLabels: Record<string, string> = {
  platform: "Platform",
  solutions: "Solutions",
  industries: "Industries",
  blog: "Blog",
  about: "About",
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
    timeoutRef.current = setTimeout(() => { setActiveMenu(null); }, 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const isOpen = activeMenu !== null;

  return (
    <div ref={containerRef} className="hidden lg:flex items-center gap-0.5 relative" onMouseLeave={close}>
      {menuKeys.map((key) => (
        <button
          key={key}
          onMouseEnter={() => open(key)}
          className={`px-3.5 py-2 text-xs font-body font-normal transition-colors duration-200 rounded-md capitalize ${
            activeMenu === key
              ? "text-foreground bg-white/10"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {menuLabels[key]}
        </button>
      ))}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={cancelClose}
            onMouseLeave={close}
            className="fixed z-[100]"
            style={{
              top: containerRef.current ? containerRef.current.getBoundingClientRect().bottom + 4 : 80,
              left: "50%",
              marginLeft: "-390px",
              width: "780px",
            }}
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
                    <PanelContent
                      config={panels[activeMenu]}
                      menuKey={activeMenu}
                    />
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

/* ─── Decorative Badge ─── */
const FeaturedBadge = ({ badge }: { badge: BadgeConfig }) => {
  const MainIcon = badge.icon;
  const AccentIcon = badge.accentIcon;

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center flex-1 relative overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '20px 20px',
      }} />
      
      {/* Shield outline */}
      <div className="relative">
        <div className={`w-20 h-20 rounded-2xl border-2 border-current/10 flex items-center justify-center ${badge.accentColor} relative`}>
          <MainIcon className="w-10 h-10 opacity-80" strokeWidth={1.5} />
          
          {/* Accent badge */}
          <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center`}>
            <AccentIcon className={`w-3.5 h-3.5 ${badge.accentColor}`} />
          </div>
        </div>
        
        {/* Decorative ring */}
        <div className="absolute -inset-4 rounded-3xl border border-current/5" />
        <div className="absolute -inset-8 rounded-[2rem] border border-current/[0.03]" />
      </div>
    </div>
  );
};

/* ─── Universal Panel Layout ─── */
const PanelContent = ({
  config,
  menuKey,
}: {
  config: PanelConfig;
  menuKey: string;
}) => (
  <div className="grid grid-cols-5 min-h-[320px]">
    <div className="col-span-3 p-6 flex flex-col">
      <p className="text-[10px] font-body font-normal tracking-[0.2em] uppercase text-muted-foreground mb-3 px-3">
        {menuLabels[menuKey]}
      </p>
      <div className="flex-1 space-y-0.5">
        {config.items.map((item) => (
          <MenuLink key={item.title} item={item} />
        ))}
      </div>
    </div>

    <div className="col-span-2 bg-muted/50 p-6 flex flex-col">
      <FeaturedBadge badge={config.badge} />
      <div className="mt-4">
        <p className="text-sm font-display font-normal text-foreground mb-1.5">{config.featured.title}</p>
        <p className="text-[11px] text-muted-foreground font-body leading-relaxed mb-4">{config.featured.desc}</p>
      </div>
      <a
        href={config.featured.href}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-body rounded-full hover:bg-primary/90 transition-colors w-fit"
      >
        {config.featured.label} <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  </div>
);

/* ─── Link Row ─── */
const MenuLink = ({ item }: { item: MenuItem }) => (
  <a
    href={item.href}
    className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-muted/80 transition-colors duration-200 group"
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
