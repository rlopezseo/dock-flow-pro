import { Truck, Search, BarChart3, Zap, Globe, Shield, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, Clock, Users, DollarSign, Eye, Plug, Settings2, BellRing, ScanLine, Brain } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-load-matching.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Load Matching Software | Digital Freight Matching | TrucksOnTheMap",
    description: "Match available loads with qualified carriers in seconds. Reduce empty miles by 40% with digital freight matching from TrucksOnTheMap.",
    slug: "load-matching",
  },
  hero: {
    badge: "Load Matching Software",
    headline: (
      <>
        Load matching software
        <br />
        <span className="text-[#bbb]">that finds carriers</span>
        <br />
        before you pick up the phone
      </>
    ),
    subtext: "Match loads with qualified carriers in seconds, not hours. Fill trucks faster, cut empty miles, and reduce freight costs by up to 35%.",
    ctaPrimary: "START MATCHING",
    ctaSecondary: "See How It Works",
    image: heroImage,
  },
  trustBar: {
    kpis: [
      { target: 40, suffix: "%", label: "Fewer Empty Miles" },
      { target: 15, suffix: "sec", label: "Average Match Time" },
      { target: 500, suffix: "+", label: "Active Carriers" },
      { target: 98, suffix: "%", label: "Match Accuracy" },
    ],
  },
  problem: {
    label: "The Problem",
    headline: "Why manual load matching costs freight brokers thousands every week",
    subtext: "Freight brokers and shippers still rely on phone calls, email chains, and load boards to find carriers. It wastes hours, leaves trucks empty, and eats into margins.",
    items: [
      { icon: Clock, title: "Hours Spent on Phone Calls", description: "Dispatchers spend 3–4 hours a day calling carriers to fill loads. That's time and money you won't get back." },
      { icon: Truck, title: "Trucks Running Empty", description: "Industry average: 25–35% of truck miles are driven empty. Every empty mile is pure cost with zero revenue." },
      { icon: DollarSign, title: "Overpaying for Spot Rates", description: "Without live market rates, you overpay on spot freight because you can't benchmark fast enough." },
      { icon: Eye, title: "No Visibility into Carrier Capacity", description: "You don't know which carriers have available trucks, where they are, or when they're free until you start calling." },
      { icon: Users, title: "Carrier Relationship Fatigue", description: "Carriers stop answering because they're buried in requests. Your best carriers go to competitors who respond faster." },
      { icon: Search, title: "Load Board Overload", description: "Posting on multiple load boards and monitoring responses is fragmented, slow, and rarely gives you the best match." },
    ],
    cta: "Automate Your Load Matching",
  },
  outcomes: {
    label: "What You Get",
    headline: "How load matching software reduces empty miles and fills trucks faster",
    heroCard: {
      icon: Truck,
      target: 40,
      suffix: "%",
      sublabel: "fewer empty miles",
      title: "Cut deadhead miles with intelligent matching",
      description: "The system analyzes carrier location, capacity, lane preferences, and past performance to find the best match and eliminate wasted miles.",
    },
    cards: [
      { icon: Zap, target: 15, suffix: "s", sublabel: "match time", title: "Load-to-carrier match in seconds", description: "What used to take hours now takes seconds. Thousands of options evaluated simultaneously." },
      { icon: DollarSign, target: 35, suffix: "%", sublabel: "cost reduction", title: "Lower freight costs", description: "Benchmark rates in real time and match at the best price without overpaying on spot." },
      { icon: BarChart3, target: 95, suffix: "%", sublabel: "fill rate", title: "Higher load fill rate", description: "Fewer rejected tenders and cancellations. The right carrier for every load, every time." },
      { icon: Globe, target: 24, suffix: "/7", sublabel: "availability", title: "Digital freight marketplace", description: "Carriers browse, bid, and accept loads around the clock." },
      { icon: Shield, target: 100, suffix: "%", sublabel: "compliance", title: "Automated carrier vetting", description: "Insurance, authority, and safety scores verified before every match." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Load matching software features: matching engine, marketplace, and carrier management",
    groups: [
      { id: "matching", icon: Brain, title: "Matching Engine", subtitle: "Smart carrier-load pairing", features: ["Multi-factor scoring: lane history, on-time %, capacity, price", "Live carrier availability from GPS and TMS integration", "Automatic re-matching when carriers reject or cancel", "Configurable matching rules by shipper, lane, and commodity"] },
      { id: "marketplace", icon: Globe, title: "Digital Freight Marketplace", subtitle: "One platform for all loads", features: ["Centralized load board with live availability", "Carrier self-service: browse, bid, and accept loads 24/7", "Multi-modal support: FTL, LTL, intermodal, and last-mile", "Rate transparency with benchmark pricing per lane"] },
      { id: "carrier", icon: Users, title: "Carrier Management", subtitle: "Build a reliable network", features: ["Carrier onboarding with document verification", "Performance scorecards: on-time, claims, acceptance rate", "Preferred carrier lists and blacklist management", "Automated compliance and insurance expiry alerts"] },
      { id: "analytics", icon: BarChart3, title: "Rate & Lane Analytics", subtitle: "Better freight decisions", features: ["Lane-level rate benchmarking against market indices", "Spot vs. contract rate comparison dashboards", "Carrier performance trends and cost-per-mile analysis", "Exportable reports for RFP preparation and negotiations"] },
      { id: "integrations", icon: Plug, title: "TMS & ERP Integration", subtitle: "Connects to your stack", features: ["REST API and EDI connectivity for major TMS platforms", "SAP, Oracle, JDE, and Blue Yonder out-of-the-box", "GPS and telematics integration for live truck positions", "Webhook-based event notifications for automated workflows"] },
    ],
  },
  ctaBanner: {
    label: "Ready to fill every truck?",
    headline: (
      <>
        Match loads. <br />
        <span className="text-white/60">Not phone calls.</span>
      </>
    ),
    subtext: "Hundreds of shippers and brokers use TrucksOnTheMap to match freight digitally. Faster, cheaper, and with fewer empty miles.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Who uses load matching software? Brokers, shippers, 3PLs, and more",
    cases: [
      { id: "broker", icon: Package, label: "Freight Brokers", image: img3pl, headline: "Load matching for freight brokerages at scale", description: "Stop spending hours on the phone. Match thousands of daily loads with your carrier network automatically and focus on growing your business.", benefits: ["Instant carrier matching from your network", "Live rate benchmarking per lane", "Automated tender workflows", "Carrier performance tracking"] },
      { id: "shipper", icon: Factory, label: "Shippers & Manufacturers", image: imgManufacturing, headline: "Direct carrier matching for enterprise shippers", description: "Skip the broker markup. Connect directly with qualified carriers for your lanes and build long-term freight relationships that lower costs.", benefits: ["Direct shipper-to-carrier matching", "Contract vs. spot rate optimization", "Preferred carrier routing", "Built-in compliance verification"] },
      { id: "3pl", icon: ShoppingCart, label: "3PL Providers", image: imgRetail, headline: "Multi-client load matching for third-party logistics", description: "Manage load matching across multiple clients with separate rules, rates, and carrier pools, all from one platform.", benefits: ["Multi-tenant load management", "Client-specific carrier pools", "White-label matching portal", "Consolidated analytics per client"] },
      { id: "intermodal", icon: ArrowDownUp, label: "Intermodal & Cross-Border", image: imgInbound, headline: "Multi-modal freight matching across borders", description: "Match loads across road, rail, and intermodal corridors. Handle cross-border documentation and customs requirements in one workflow.", benefits: ["Road + rail + intermodal matching", "Cross-border compliance automation", "Multi-currency rate management", "Transit time optimization by mode"] },
      { id: "coldchain", icon: Snowflake, label: "Temperature-Controlled", image: imgColdchain, headline: "Specialized matching for cold chain freight", description: "Find carriers with temperature-controlled equipment, reefer certifications, and cold chain compliance matched to your commodity requirements.", benefits: ["Reefer-specific carrier matching", "Temperature compliance verification", "Equipment type filtering", "Cold chain documentation tracking"] },
    ],
    cta: "Get Started with Load Matching",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How does load matching software work? Five simple steps",
    steps: [
      { icon: Search, step: "01", title: "Post Your Load", description: "Enter load details (origin, destination, commodity, weight, pickup date) or import them from your TMS." },
      { icon: Brain, step: "02", title: "The System Finds the Best Match", description: "Every available carrier is scored on lane history, capacity, price, and performance. Results in under 15 seconds." },
      { icon: BellRing, step: "03", title: "Carrier Accepts & Confirms", description: "Top-matched carriers get notified instantly. They accept via the portal or app. No calls needed." },
      { icon: ScanLine, step: "04", title: "Track & Execute", description: "GPS tracking, milestone updates, and exception alerts from pickup to delivery keep you in control." },
      { icon: BarChart3, step: "05", title: "Analyze & Optimize", description: "Post-delivery analytics: cost-per-mile, carrier performance, lane trends. Every load makes the next match better." },
    ],
  },
  compare: {
    label: "Load Matching Software vs. Load Boards",
    headline: (
      <>
        Load matching software vs.<br className="hidden sm:block" /> traditional load boards and phone calls
      </>
    ),
    features: [
      "Intelligent carrier matching",
      "Live carrier availability",
      "Automated tender & booking",
      "Rate benchmarking per lane",
      "Carrier performance scoring",
      "Multi-modal support (FTL, LTL, intermodal)",
      "TMS / ERP integration",
      "Empty mile reduction analytics",
      "24/7 carrier self-service",
      "Match in under 15 seconds",
    ],
    oldWay: { title: "Phone Calls & Load Boards", subtitle: "The old way" },
    cta: "Switch to Smart Matching",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Load matching software FAQ: pricing, features, and how it works",
    items: [
      { q: "What is load matching software and how does it work?", a: "Load matching software automatically pairs available freight loads with qualified carriers based on location, capacity, lane history, price, and performance. It replaces manual phone calls and load board searches with fast, accurate matches that cut empty miles and freight costs." },
      { q: "How fast can load matching software find a carrier?", a: "TrucksOnTheMap finds the optimal carrier match in under 15 seconds. It evaluates thousands of options simultaneously, looking at lane history, live availability, pricing, and performance scores." },
      { q: "What is the difference between load matching software and a load board?", a: "Load boards are passive: you post a load and wait. Load matching software is active: it identifies the best carrier for each load based on multi-factor scoring. The result is faster matches, better rates, and fewer empty miles." },
      { q: "How does load matching software reduce empty miles?", a: "By analyzing carrier positions, available capacity, and upcoming loads, the platform identifies backhaul and triangulation opportunities that would be impossible to spot manually. This typically cuts empty miles by 30–40%." },
      { q: "Can load matching software integrate with my TMS?", a: "Yes. TrucksOnTheMap connects to major TMS platforms including SAP TM, Oracle OTM, Blue Yonder, Descartes, and MercuryGate via REST API or EDI. Load data flows automatically between systems." },
      { q: "Does load matching software support LTL and intermodal freight?", a: "Yes. The platform supports full truckload (FTL), less-than-truckload (LTL), intermodal, and specialized equipment types. Matching rules can be configured by mode, equipment, and commodity." },
      { q: "How much does load matching software cost?", a: "Pricing depends on your volume, number of users, and integration requirements. Most customers see ROI within the first month through reduced empty miles and lower spot rates. Contact us for a quote based on your freight volume." },
      { q: "Is load matching software suitable for small freight brokers?", a: "Yes. The platform scales from small brokerages handling 50 loads/day to enterprise shippers with thousands of daily shipments. Smaller operations often see the biggest gains because they're replacing the most manual work." },
      { q: "How do carriers join a load matching platform?", a: "Carriers self-register through the carrier portal. Onboarding includes document verification, insurance compliance checks, and authority validation. Most carriers are live within 24 hours. No software installation required." },
      { q: "What ROI can I expect from load matching software?", a: "Customers typically see 30–40% fewer empty miles, 35% lower freight costs, and 95%+ fill rates. The average payback period is under 3 months." },
    ],
  },
  ctaFinal: {
    label: "Ready to Match Smarter?",
    headline: "Let's talk freight matching",
    subtext: "Book a 30-minute demo. We'll show you how to match loads in seconds, cut empty miles, and build a more reliable carrier network.",
  },
};

export default config;