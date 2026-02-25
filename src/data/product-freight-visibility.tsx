import { Eye, MapPin, Bell, Clock, Truck, Shield, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, DollarSign, Users, BarChart3, Plug, Search, BellRing, ScanLine, Satellite, Radio } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-dock.jpg";
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
    subtext: "Real-time visibility across every shipment, every carrier, every mode. Proactive alerts, live ETAs, and exception management that keeps your supply chain on track.",
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
    headline: "Why most supply chains still operate in the dark",
    subtext: "Without real-time visibility, every delayed shipment becomes a crisis. Your team spends more time chasing status updates than solving problems.",
    items: [
      { icon: Eye, title: "Blind Spots Everywhere", description: "Once a truck leaves the warehouse, you lose visibility until it arrives — or doesn't. No live tracking means no proactive management." },
      { icon: Clock, title: "Manual Status Check Calls", description: "Operations teams make dozens of calls daily asking 'Where is my truck?' Each call takes time and rarely provides accurate ETAs." },
      { icon: Bell, title: "Reactive Exception Management", description: "You find out about delays when customers complain — not when the delay actually occurs. By then, it's too late to act." },
      { icon: Users, title: "Customer Service Overload", description: "45% of customer service inquiries are 'Where is my order?' calls. Without visibility tools, your team can't answer confidently." },
      { icon: DollarSign, title: "Detention & Demurrage Surprises", description: "Without tracking, you can't prove arrival times or dwell durations. Detention disputes become expensive he-said-she-said arguments." },
      { icon: MapPin, title: "Multi-Carrier Fragmentation", description: "Each carrier has its own tracking portal, login, and data format. Consolidating visibility across 50+ carriers is operationally impossible." },
    ],
    cta: "Get Full Visibility Now",
  },
  outcomes: {
    label: "What You Get",
    headline: "See every shipment, every mile, in real-time",
    heroCard: {
      icon: Eye,
      target: 99,
      suffix: "%",
      sublabel: "tracking coverage",
      title: "Carrier-agnostic visibility across your entire network",
      description: "One platform to track every shipment regardless of carrier, mode, or region. GPS, telematics, and EDI data unified in a single live dashboard.",
    },
    cards: [
      { icon: Bell, target: 45, suffix: "%", sublabel: "fewer calls", title: "Proactive exception alerts", description: "AI detects delays before they happen and triggers automated alerts to your team and customers." },
      { icon: Clock, target: 92, suffix: "%", sublabel: "ETA accuracy", title: "Machine-learning ETAs", description: "Predictive ETAs that account for traffic, weather, driver behavior, and historical patterns — not just GPS distance." },
      { icon: BarChart3, target: 100, suffix: "%", sublabel: "data capture", title: "Complete shipment data", description: "Every milestone, timestamp, and exception logged automatically. Full audit trail without manual data entry." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Freight visibility features for complete supply chain control",
    groups: [
      { id: "tracking", icon: Satellite, title: "Multi-Source Tracking", subtitle: "Every data point, one view", features: ["GPS, telematics, ELD, and mobile app tracking sources", "Carrier-agnostic: works with any carrier, any fleet", "15-minute update intervals with configurable refresh rates", "Map-based visualization with route replay"] },
      { id: "alerts", icon: Bell, title: "Proactive Alert Engine", subtitle: "Know before it's a problem", features: ["Configurable alert rules: late departure, route deviation, geofence breach", "Multi-channel notifications: email, SMS, webhook, in-app", "Escalation workflows with role-based routing", "Customer-facing alerts for downstream visibility"] },
      { id: "eta", icon: Clock, title: "Predictive ETA Engine", subtitle: "ETAs you can trust", features: ["Machine learning model trained on millions of shipments", "Accounts for traffic, weather, hours-of-service, and historical patterns", "Continuous ETA recalculation as conditions change", "Dock scheduling integration: auto-update appointment times"] },
      { id: "dashboard", icon: BarChart3, title: "Operations Dashboard", subtitle: "Command center for logistics", features: ["Live shipment map with status filtering and search", "KPI widgets: on-time %, in-transit count, exceptions", "Carrier performance scorecards with trend analysis", "Custom views by region, customer, or business unit"] },
      { id: "integrations", icon: Plug, title: "Universal Connectivity", subtitle: "Plug into everything", features: ["200+ carrier integrations out of the box", "TMS, WMS, and ERP connectivity via API and EDI", "Customer portal with branded tracking pages", "IoT sensor integration for temperature and humidity"] },
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
    subtext: "Join 500+ companies using TrucksOnTheMap for real-time freight visibility across their entire carrier network.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Real-time visibility for every supply chain scenario",
    cases: [
      { id: "shipper", icon: Factory, label: "Enterprise Shippers", image: imgManufacturing, headline: "End-to-end visibility for manufacturing supply chains", description: "Track inbound raw materials and outbound finished goods across your entire carrier network. Proactively manage exceptions before they impact production.", benefits: ["Multi-carrier, multi-mode tracking", "Production-synced delivery visibility", "Supplier performance analytics", "Automated exception escalation"] },
      { id: "3pl", icon: Package, label: "3PL Providers", image: img3pl, headline: "Client-facing visibility for logistics service providers", description: "Give your clients real-time tracking with branded portals while maintaining operational control. Differentiate your service with superior visibility.", benefits: ["White-label tracking portals", "Client-specific dashboards", "SLA monitoring and reporting", "Multi-client shipment management"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & E-Commerce", image: imgRetail, headline: "Last-mile and distribution center visibility", description: "Track inbound shipments to DCs, monitor store replenishment deliveries, and provide customers with accurate delivery ETAs.", benefits: ["DC inbound arrival predictions", "Store delivery tracking", "Customer notification automation", "Peak season capacity monitoring"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Chain", image: imgColdchain, headline: "Temperature-monitored freight visibility", description: "Track not just location but temperature, humidity, and door-open events. Ensure cold chain integrity from origin to destination.", benefits: ["IoT temperature sensor integration", "Temperature excursion alerts", "Chain of custody documentation", "Compliance reporting for audits"] },
      { id: "crossborder", icon: ArrowDownUp, label: "Cross-Border", image: imgInbound, headline: "International shipment visibility across borders", description: "Track shipments across borders with customs milestone tracking, multi-leg visibility, and cross-border transit time analytics.", benefits: ["Multi-leg international tracking", "Customs clearance milestones", "Border crossing time analytics", "Multi-carrier handoff visibility"] },
    ],
    cta: "Get Started with Visibility",
  },
  howItWorks: {
    label: "How It Works",
    headline: "Real-time freight visibility — in five steps",
    steps: [
      { icon: Plug, step: "01", title: "Connect Your Carriers", description: "Integrate your carrier network via GPS, telematics, API, or our 200+ pre-built carrier connections. Most carriers connect in under 24 hours." },
      { icon: Satellite, step: "02", title: "Track Automatically", description: "Every shipment is tracked automatically from pickup to delivery. GPS pings every 15 minutes with configurable update frequency." },
      { icon: Bell, step: "03", title: "Receive Proactive Alerts", description: "AI monitors every shipment for anomalies — late departures, route deviations, ETA changes — and alerts your team before issues escalate." },
      { icon: Eye, step: "04", title: "Manage Exceptions", description: "Drill into any exception from the live dashboard. See root cause, impact analysis, and recommended actions. Resolve before your customer even notices." },
      { icon: BarChart3, step: "05", title: "Analyze & Improve", description: "Carrier scorecards, on-time analytics, and trend reports help you identify systemic issues and continuously improve delivery performance." },
    ],
  },
  compare: {
    label: "Compare",
    headline: (
      <>
        Real-time visibility vs.<br className="hidden sm:block" /> manual tracking by phone & email
      </>
    ),
    features: [
      "Real-time GPS tracking",
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
    cta: "Switch to Real-Time Visibility",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Everything you need to know about freight visibility",
    items: [
      { q: "What is real-time freight visibility?", a: "Real-time freight visibility provides live tracking of shipments across your entire supply chain — regardless of carrier, mode, or region. It replaces manual status check calls with automated GPS tracking, proactive alerts, and predictive ETAs." },
      { q: "How many carriers can you track?", a: "TrucksOnTheMap has 200+ pre-built carrier integrations and supports GPS, telematics, ELD, and mobile app tracking. Any carrier with a GPS device or smartphone can be tracked on the platform." },
      { q: "How accurate are the predictive ETAs?", a: "Our machine-learning ETA engine achieves 92% accuracy by analyzing real-time traffic, weather, driver behavior, hours-of-service regulations, and historical delivery patterns for each lane." },
      { q: "Can we share tracking with our customers?", a: "Yes. You can set up branded customer-facing tracking portals where your clients see real-time shipment status, ETAs, and milestone updates. Automated email and SMS notifications keep them informed." },
      { q: "Does it support temperature monitoring?", a: "Yes. The platform integrates with IoT temperature and humidity sensors. You'll receive alerts for temperature excursions, door-open events, and cold chain compliance documentation." },
      { q: "How long does integration take?", a: "Most carrier integrations are live within 24 hours using our pre-built connections. TMS and ERP integrations typically take 2–4 weeks depending on your system configuration." },
      { q: "What happens when a delay is detected?", a: "The system triggers an immediate alert via your configured channels (email, SMS, webhook). The operations dashboard shows the exception with root cause analysis, estimated impact, and recommended actions." },
      { q: "Can we track multi-modal shipments?", a: "Yes. The platform supports road, rail, ocean, and air freight tracking. Multi-leg shipments are unified into a single tracking view with handoff visibility between modes." },
    ],
  },
  ctaFinal: {
    label: "Ready to See Everything?",
    headline: "Let's talk freight visibility",
    subtext: "Book a 30-minute demo. We'll show you how to track every shipment in real-time, reduce exception response time, and improve on-time delivery.",
  },
};

export default config;
