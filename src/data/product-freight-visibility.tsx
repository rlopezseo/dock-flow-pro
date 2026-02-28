import { Eye, MapPin, Bell, Clock, Truck, Shield, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, DollarSign, Users, BarChart3, Plug, Search, BellRing, ScanLine, Satellite, Radio } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-freight-visibility.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Real-Time Freight Visibility Platform | TrucksOnTheMap",
    description: "Track every shipment in real-time across your supply chain. Proactive exception management, live ETAs, and carrier-agnostic visibility from TrucksOnTheMap.",
    slug: "freight-visibility",
  },
  hero: {
    badge: "Real-Time Freight Visibility Platform",
    headline: (
      <>
        Real-time freight visibility
        <br />
        <span className="text-[#bbb]">for what you can't</span>
        <br />
        afford to lose sight of
      </>
    ),
    subtext: "TrucksOnTheMap gives you live visibility across every shipment, every carrier, every mode. Proactive alerts, accurate ETAs, and exception management that keeps your supply chain moving.",
    ctaPrimary: "GET VISIBILITY",
    ctaSecondary: "Explore Features",
    image: heroImage,
  },
  trustBar: {
    kpis: [
      { target: 99, suffix: "%", label: "Tracking Coverage" },
      { target: 45, suffix: "%", label: "Fewer Customer Calls" },
      { target: 3, suffix: "M+", label: "Shipments Tracked" },
      { target: 15, suffix: "min", label: "Update Frequency" },
    ],
  },
  problem: {
    label: "The Problem",
    headline: "Why supply chains without freight visibility lose money and customers",
    subtext: "Without live tracking, every delayed shipment becomes a crisis. Your team spends more time chasing updates than solving problems.",
    items: [
      { icon: Eye, title: "Blind Spots Everywhere", description: "Once a truck leaves the warehouse, you lose visibility until it arrives or doesn't. No live tracking means no way to manage proactively." },
      { icon: Clock, title: "Manual Status Check Calls", description: "Operations teams make dozens of calls daily asking 'Where is my truck?' Each call takes time and rarely gives accurate ETAs." },
      { icon: Bell, title: "Reactive Exception Management", description: "You find out about delays when customers complain, not when the delay actually happens. By then, it's too late to fix anything." },
      { icon: Users, title: "Customer Service Overload", description: "45% of customer service inquiries are 'Where is my order?' calls. Without tracking tools, your team can't give a confident answer." },
      { icon: DollarSign, title: "Detention & Demurrage Surprises", description: "Without tracking, you can't prove arrival times or dwell durations. Detention disputes turn into expensive back-and-forth." },
      { icon: MapPin, title: "Multi-Carrier Fragmentation", description: "Each carrier has its own tracking portal, login, and data format. Consolidating visibility across 50+ carriers manually is impractical." },
    ],
    cta: "Get Full Visibility Now",
  },
  outcomes: {
    label: "What You Get",
    headline: "How TrucksOnTheMap delivers 99% tracking coverage and proactive alerts",
    heroCard: {
      icon: Eye,
      target: 99,
      suffix: "%",
      sublabel: "tracking coverage",
      title: "Carrier-agnostic visibility across your entire network",
      description: "TrucksOnTheMap tracks every shipment regardless of carrier, mode, or region. GPS, telematics, and EDI data unified in a single live dashboard.",
    },
    cards: [
      { icon: Bell, target: 45, suffix: "%", sublabel: "fewer calls", title: "Proactive exception alerts", description: "Our platform detects delays before they happen and triggers alerts to your team and customers automatically." },
      { icon: Clock, target: 92, suffix: "%", sublabel: "ETA accuracy", title: "Machine-learning ETAs", description: "Predictive ETAs that factor in traffic, weather, driver behavior, and historical patterns. Not just GPS distance." },
      { icon: BarChart3, target: 100, suffix: "%", sublabel: "data capture", title: "Complete shipment data", description: "Every milestone, timestamp, and exception logged automatically. Full audit trail without manual entry." },
      { icon: Satellite, target: 200, suffix: "+", sublabel: "integrations", title: "Carrier-agnostic connectivity", description: "Pre-built connections to 200+ carriers. No setup required." },
      { icon: Shield, target: 24, suffix: "/7", sublabel: "monitoring", title: "Non-stop shipment monitoring", description: "Continuous tracking and escalation workflows around the clock." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Visibility features built into TrucksOnTheMap",
    groups: [
      { id: "tracking", icon: Satellite, title: "Multi-Source Tracking", subtitle: "Every data point, one view", features: ["GPS, telematics, ELD, and mobile app tracking sources", "Works with any carrier, any fleet", "15-minute update intervals with configurable refresh rates", "Map-based visualization with route replay"] },
      { id: "alerts", icon: Bell, title: "Proactive Alert Engine", subtitle: "Know before it's a problem", features: ["Configurable alert rules: late departure, route deviation, geofence breach", "Multi-channel notifications: email, SMS, webhook, in-app", "Escalation workflows with role-based routing", "Customer-facing alerts for downstream visibility"] },
      { id: "eta", icon: Clock, title: "Predictive ETA Engine", subtitle: "ETAs that hold up", features: ["Machine learning trained on millions of shipments", "Factors traffic, weather, hours-of-service, and historical patterns", "Continuous recalculation as conditions change", "Dock scheduling integration: auto-update appointment times"] },
      { id: "dashboard", icon: BarChart3, title: "Operations Dashboard", subtitle: "Your logistics command center", features: ["Live shipment map with status filtering and search", "KPI widgets: on-time %, in-transit count, exceptions", "Carrier performance scorecards with trend analysis", "Custom views by region, customer, or business unit"] },
      { id: "integrations", icon: Plug, title: "Universal Connectivity", subtitle: "Connects to everything", features: ["200+ carrier integrations out of the box", "TMS, WMS, and ERP connectivity via API and EDI", "Customer portal with branded tracking pages", "IoT sensor integration for temperature and humidity"] },
    ],
  },
  ctaBanner: {
    label: "Ready to see everything?",
    headline: (
      <>
        Track every truck. <br />
        <span className="text-white/60">On one map.</span>
      </>
    ),
    subtext: "500+ companies use TrucksOnTheMap for live freight visibility across their entire carrier network.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Who uses TrucksOnTheMap for freight visibility?",
    cases: [
      { id: "shipper", icon: Factory, label: "Enterprise Shippers", image: imgManufacturing, headline: "End-to-end visibility for manufacturing supply chains", description: "Track inbound raw materials and outbound finished goods across your entire carrier network with TrucksOnTheMap. Manage exceptions before they hit production.", benefits: ["Multi-carrier, multi-mode tracking", "Production-synced delivery visibility", "Supplier performance analytics", "Automated exception escalation"] },
      { id: "3pl", icon: Package, label: "3PL Providers", image: img3pl, headline: "Client-facing visibility for logistics service providers", description: "Give your clients live tracking with branded portals while keeping operational control. Stand out with the visibility TrucksOnTheMap provides.", benefits: ["White-label tracking portals", "Client-specific dashboards", "SLA monitoring and reporting", "Multi-client shipment management"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & E-Commerce", image: imgRetail, headline: "Last-mile and distribution center visibility", description: "Track inbound shipments to DCs, monitor store replenishment deliveries, and give customers accurate delivery ETAs.", benefits: ["DC inbound arrival predictions", "Store delivery tracking", "Customer notification automation", "Peak season capacity monitoring"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Chain", image: imgColdchain, headline: "Temperature-monitored freight visibility", description: "Track location, temperature, humidity, and door-open events. Ensure cold chain integrity from origin to destination.", benefits: ["IoT temperature sensor integration", "Temperature excursion alerts", "Chain of custody documentation", "Compliance reporting for audits"] },
      { id: "crossborder", icon: ArrowDownUp, label: "Cross-Border", image: imgInbound, headline: "International shipment visibility across borders", description: "Track shipments across borders with customs milestone tracking, multi-leg visibility, and cross-border transit time analytics.", benefits: ["Multi-leg international tracking", "Customs clearance milestones", "Border crossing time analytics", "Multi-carrier handoff visibility"] },
    ],
    cta: "Get Started with TrucksOnTheMap",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How TrucksOnTheMap provides freight visibility in five steps",
    steps: [
      { icon: Plug, step: "01", title: "Connect Your Carriers", description: "Integrate your carrier network via GPS, telematics, API, or our 200+ pre-built connections. Most carriers are live in under 24 hours." },
      { icon: Satellite, step: "02", title: "Track Automatically", description: "Every shipment is tracked from pickup to delivery inside TrucksOnTheMap. GPS pings every 15 minutes, configurable to your needs." },
      { icon: Bell, step: "03", title: "Receive Proactive Alerts", description: "Our platform monitors every shipment for late departures, route deviations, and ETA changes, and alerts your team before issues escalate." },
      { icon: Eye, step: "04", title: "Manage Exceptions", description: "Drill into any exception from the live dashboard. See root cause, impact, and recommended actions. Resolve before your customer notices." },
      { icon: BarChart3, step: "05", title: "Analyze & Improve", description: "Carrier scorecards, on-time analytics, and trend reports help you spot patterns and continuously improve delivery performance." },
    ],
  },
  compare: {
    label: "TrucksOnTheMap vs. Manual Tracking",
    headline: (
      <>
        TrucksOnTheMap visibility vs.<br className="hidden sm:block" /> manual tracking by phone and carrier portals
      </>
    ),
    features: [
      "Live GPS tracking",
      "Proactive exception alerts",
      "Predictive ETA engine",
      "Carrier-agnostic (200+ integrations)",
      "Automated milestone logging",
      "Customer-facing tracking portals",
      "Temperature & IoT monitoring",
      "On-time delivery analytics",
      "Multi-mode visibility",
      "Updates every 15 minutes",
    ],
    oldWay: { title: "Phone Calls & Carrier Portals", subtitle: "The old way" },
    cta: "Switch to TrucksOnTheMap",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "TrucksOnTheMap freight visibility FAQ",
    items: [
      { q: "What is a real-time freight visibility platform?", a: "It's a platform that provides live GPS tracking of shipments across your entire supply chain, regardless of carrier, mode, or region. TrucksOnTheMap replaces manual 'where is my truck?' calls with automated tracking, proactive alerts, and predictive ETAs." },
      { q: "How many carriers can TrucksOnTheMap track?", a: "TrucksOnTheMap has 200+ pre-built carrier integrations and supports GPS, telematics, ELD, and mobile app tracking. Any carrier with a GPS device or smartphone can be tracked." },
      { q: "How accurate are the ETAs?", a: "Our machine-learning ETA engine achieves 92% accuracy by analyzing live traffic, weather, driver behavior, hours-of-service regulations, and historical patterns for each lane. Far more accurate than basic GPS distance calculations." },
      { q: "Can TrucksOnTheMap share tracking with our customers?", a: "Yes. You can set up branded tracking portals where your clients see live shipment status, ETAs, and milestones. Automated notifications by email and SMS keep them informed without manual work." },
      { q: "Does TrucksOnTheMap support temperature monitoring?", a: "Yes. Our platform integrates with IoT temperature and humidity sensors for cold chain freight. You get alerts for temperature excursions, door-open events, and compliance documentation." },
      { q: "How long does setup take?", a: "Most carrier integrations are live within 24 hours using pre-built connections. TMS and ERP integrations typically take 2–4 weeks. You can start tracking from day one while deeper integrations are configured." },
      { q: "What happens when a delay is detected?", a: "TrucksOnTheMap triggers an alert via your configured channels (email, SMS, webhook). The dashboard shows the exception with root cause, estimated impact, and recommended actions so you can act before customers notice." },
      { q: "Can TrucksOnTheMap track multi-modal and international shipments?", a: "Yes. Road, rail, ocean, and air freight tracking are supported. Multi-leg and cross-border shipments show up in a single view with customs milestones and carrier handoff visibility." },
      { q: "What is the ROI?", a: "Customers typically see 45% fewer 'where is my truck?' calls, 30% lower detention costs from better arrival predictions, and measurable on-time delivery improvements within 90 days." },
      { q: "How is TrucksOnTheMap different from TMS tracking?", a: "TMS tracking is usually limited to your own system's carriers and relies on EDI updates. TrucksOnTheMap aggregates live GPS data from any carrier, adds predictive intelligence, and provides proactive alerts across all carriers." },
    ],
  },
  ctaFinal: {
    label: "Ready to See Everything?",
    headline: "Let's talk about TrucksOnTheMap",
    subtext: "Book a 30-minute demo. We'll show you how our platform tracks every shipment live, cuts exception response time, and improves on-time delivery.",
  },
};

export default config;