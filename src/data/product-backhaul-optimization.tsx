import { RotateCcw, Truck, TrendingDown, MapPin, DollarSign, Eye, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, Clock, Users, BarChart3, Plug, Search, BellRing, ScanLine, Brain, Leaf } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-backhaul-optimization.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Backhaul Optimization Software | Return Load Matching | TrucksOnTheMap",
    description: "Stop empty return trips. Reduce deadhead miles by 45%, lower emissions, and turn return trips into revenue with TrucksOnTheMap backhaul optimization.",
    slug: "backhaul-optimization",
  },
  hero: {
    badge: "Backhaul Optimization Software",
    headline: (
      <>
        Backhaul optimization software
        <br />
        <span className="text-[#bbb]">that stops trucks</span>
        <br />
        burning money on the way back
      </>
    ),
    subtext: "TrucksOnTheMap fills return trips automatically. Cut deadhead miles by 45%, lower transport costs, and reduce your carbon footprint. No phone calls required.",
    ctaPrimary: "FILL EMPTY TRUCKS",
    ctaSecondary: "See How It Works",
    image: heroImage,
  },
  trustBar: {
    kpis: [
      { target: 45, suffix: "%", label: "Fewer Empty Miles" },
      { target: 30, suffix: "%", label: "Cost Reduction" },
      { target: 28, suffix: "%", label: "Lower CO₂ Emissions" },
      { target: 12, suffix: "sec", label: "Match Time" },
    ],
  },
  problem: {
    label: "The Problem",
    headline: "Why 35% of trucks drive empty without backhaul optimization",
    subtext: "The return trip is the most wasted resource in freight transport. Without backhaul optimization, trucks drive empty: burning fuel, increasing emissions, and destroying margins.",
    items: [
      { icon: Truck, title: "Trucks Running Empty", description: "Industry average: 25–35% of all truck miles are driven without cargo. That's billions in wasted fuel, driver time, and vehicle wear." },
      { icon: DollarSign, title: "Margin Erosion", description: "Empty return trips mean paying for fuel, tolls, and driver wages with zero revenue. Every deadhead mile eats directly into your margin." },
      { icon: Leaf, title: "Unnecessary Carbon Emissions", description: "Empty trucks produce the same CO₂ as loaded ones. Sustainability targets are out of reach with 35% deadhead rates." },
      { icon: Clock, title: "Manual Backhaul Search", description: "Dispatchers spend hours calling around for return loads. By the time they find one, the truck is already halfway home, empty." },
      { icon: Eye, title: "No Visibility into Available Loads", description: "You don't know what loads are available near your truck's delivery point. Load boards are fragmented and slow. Opportunities missed daily." },
      { icon: Users, title: "Network Silos", description: "Inbound and outbound freight operate in silos. Loads that could be backhauled by your own fleet get handed to external carriers." },
    ],
    cta: "Start Filling Empty Trucks",
  },
  outcomes: {
    label: "What You Get",
    headline: "How TrucksOnTheMap cuts empty miles by 45% and boosts revenue",
    heroCard: {
      icon: RotateCcw,
      target: 45,
      suffix: "%",
      sublabel: "fewer empty miles",
      title: "The right backhaul for every return trip",
      description: "TrucksOnTheMap matches return trips with available loads based on delivery point, timing, equipment type, and driver HOS. Trucks that would drive home empty get filled automatically.",
    },
    cards: [
      { icon: DollarSign, target: 30, suffix: "%", sublabel: "cost savings", title: "Lower total transport costs", description: "Backhaul revenue offsets outbound costs. Every filled return trip turns a pure cost into a profit contributor." },
      { icon: Leaf, target: 28, suffix: "%", sublabel: "CO₂ reduction", title: "Lower your carbon footprint", description: "Fewer empty miles means fewer emissions. Hit sustainability targets while improving your bottom line." },
      { icon: BarChart3, target: 85, suffix: "%", sublabel: "fill rate", title: "Higher fleet utilization", description: "Push return trip fill rates above 85%. Your fleet goes from cost center to revenue generator." },
      { icon: Brain, target: 100, suffix: "%", sublabel: "automated", title: "Automated matching engine", description: "Multi-factor matching: location, timing, equipment, HOS." },
      { icon: Search, target: 24, suffix: "/7", sublabel: "marketplace", title: "Load marketplace access", description: "Browse available loads near delivery points in real time." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Backhaul optimization features built into TrucksOnTheMap",
    groups: [
      { id: "matching", icon: Brain, title: "Backhaul Engine", subtitle: "Smart return load pairing", features: ["Multi-factor matching: location, timing, equipment, HOS compliance", "Triangulation support: match loads that aren't direct backhauls", "Continuous re-optimization as new loads become available", "Configurable rules: max detour distance, time windows"] },
      { id: "network", icon: RotateCcw, title: "Network Optimization", subtitle: "Your own loads first", features: ["Cross-reference inbound and outbound freight within your network", "Spot internal backhaul opportunities before going to market", "Multi-shipper collaboration for shared lane optimization", "Round-trip and triangular route planning"] },
      { id: "marketplace", icon: Search, title: "Load Marketplace", subtitle: "Fill gaps with external loads", features: ["Available loads near delivery points in real time", "Rate comparison and margin calculation before acceptance", "Carrier self-service: browse and accept backhaul opportunities", "Quality filters: shipper rating, payment terms, commodity type"] },
      { id: "sustainability", icon: Leaf, title: "Sustainability Reporting", subtitle: "Measure your green impact", features: ["CO₂ savings calculator per backhaul match", "Empty mile reduction tracking against baselines", "ESG-ready reporting for sustainability disclosures", "Carbon offset equivalent visualization"] },
      { id: "analytics", icon: BarChart3, title: "Backhaul Analytics", subtitle: "Improve continuously", features: ["Fill rate dashboards by lane, region, and carrier", "Revenue per mile analysis: outbound vs. return", "Opportunity cost reporting: missed backhauls quantified", "Lane-level deadhead trend analysis"] },
    ],
  },
  ctaBanner: {
    label: "Ready to fill empty trucks?",
    headline: (
      <>
        Every mile loaded. <br />
        <span className="text-white/60">Every trip profitable.</span>
      </>
    ),
    subtext: "Logistics leaders have cut empty miles by 45% and turned return trips from pure cost into revenue with TrucksOnTheMap.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Who uses TrucksOnTheMap for backhaul optimization?",
    cases: [
      { id: "fleet", icon: Truck, label: "Private Fleets", image: imgManufacturing, headline: "Backhaul optimization for company-owned fleets", description: "Your trucks deliver outbound loads and drive home empty. TrucksOnTheMap finds return loads that fit your schedule, equipment, and driver availability. Every return trip becomes revenue.", benefits: ["Return load matching for owned trucks", "Driver HOS compliance checking", "Equipment type filtering", "Revenue per trip optimization"] },
      { id: "3pl", icon: Package, label: "3PL & Brokers", image: img3pl, headline: "Backhaul matching to keep carriers' trucks full", description: "Offer your carriers backhaul opportunities through TrucksOnTheMap that keep their trucks loaded. Better carrier retention, lower rates, and margin on both legs.", benefits: ["Carrier backhaul portal", "Both-leg margin management", "Carrier satisfaction improvement", "Network-wide optimization"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & FMCG", image: imgRetail, headline: "Backhaul optimization for retail distribution networks", description: "Retail delivery trucks make hundreds of daily stops and return empty. Fill return trips with vendor pickups, store returns, or external freight.", benefits: ["Store delivery backhaul matching", "Vendor pickup coordination", "Reverse logistics integration", "Seasonal volume balancing"] },
      { id: "manufacturing", icon: Factory, label: "Manufacturing", image: imgInbound, headline: "Round-trip optimization for manufacturing supply chains", description: "Match outbound finished goods deliveries with inbound raw material pickups. TrucksOnTheMap creates closed-loop routes that get more out of your fleet.", benefits: ["Outbound-to-inbound matching", "Supplier pickup scheduling", "Closed-loop route creation", "JIT backhaul coordination"] },
      { id: "intermodal", icon: ArrowDownUp, label: "Intermodal & Cross-Border", image: imgColdchain, headline: "Cross-border backhaul matching", description: "Find return loads across borders. Handle customs requirements, multi-currency rates, and cross-border regulations for backhaul loads.", benefits: ["Cross-border load matching", "Customs documentation support", "Multi-currency rate management", "Transit time optimization"] },
    ],
    cta: "Start with TrucksOnTheMap",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How TrucksOnTheMap optimizes backhaul in five steps",
    steps: [
      { icon: MapPin, step: "01", title: "Truck Completes Delivery", description: "When your truck delivers its load, TrucksOnTheMap immediately scans for available return loads near the delivery point." },
      { icon: Brain, step: "02", title: "Best Match Found", description: "Loads are evaluated by proximity, timing, equipment compatibility, driver HOS, and profitability. Thousands scored in 12 seconds." },
      { icon: BellRing, step: "03", title: "Driver Gets Notified", description: "The best backhaul option is sent to the driver's app. They review, accept, and navigate to pickup. No dispatcher calls needed." },
      { icon: ScanLine, step: "04", title: "Execute & Track", description: "The backhaul load is tracked in real time like any other shipment inside TrucksOnTheMap. Full visibility from pickup to delivery." },
      { icon: BarChart3, step: "05", title: "Measure & Improve", description: "Post-delivery analytics show revenue earned, miles saved, and CO₂ reduced. Every completed backhaul improves future matching." },
    ],
  },
  compare: {
    label: "TrucksOnTheMap vs. Load Boards",
    headline: (
      <>
        TrucksOnTheMap backhaul optimization vs.<br className="hidden sm:block" /> manual load searching and phone calls
      </>
    ),
    features: [
      "Automated return load matching",
      "12-second match time",
      "Network-first optimization",
      "Driver HOS compliance checking",
      "Triangulation & multi-stop matching",
      "CO₂ savings tracking",
      "Live load availability",
      "Revenue per mile analytics",
      "Cross-border backhaul support",
      "Automated driver notifications",
    ],
    oldWay: { title: "Phone Calls & Load Boards", subtitle: "The old way" },
    cta: "Switch to TrucksOnTheMap",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "TrucksOnTheMap backhaul optimization FAQ",
    items: [
      { q: "What is backhaul optimization software?", a: "Backhaul optimization software automatically finds freight loads for trucks that would otherwise drive empty on their return trip. TrucksOnTheMap matches available loads with returning trucks based on location, timing, and equipment, eliminating deadhead miles and generating revenue from return trips." },
      { q: "How fast does TrucksOnTheMap find a return load?", a: "TrucksOnTheMap identifies and scores the best backhaul option in 12 seconds on average. It evaluates proximity, timing, equipment requirements, driver hours-of-service, and profitability across thousands of available loads." },
      { q: "What is the difference between backhaul matching and triangulation?", a: "Backhaul matching finds a direct return load from your delivery point back toward your origin. Triangulation involves picking up a load that isn't directly on your return route but reduces overall empty miles when combined with other loads. TrucksOnTheMap handles both." },
      { q: "Does TrucksOnTheMap check driver hours-of-service?", a: "Yes. Every match is validated against the driver's remaining HOS before being suggested. Our software won't recommend a load that would cause an HOS violation." },
      { q: "Can TrucksOnTheMap prioritize loads from my own network?", a: "Yes. Our platform cross-references your inbound and outbound freight first, finding internal backhaul opportunities within your own network before looking at external marketplace loads." },
      { q: "How does TrucksOnTheMap help with ESG and sustainability?", a: "Every match includes a CO₂ savings calculation based on miles saved. TrucksOnTheMap generates ESG-ready reports showing empty mile reduction, carbon savings, and fleet efficiency improvements for corporate disclosures." },
      { q: "What fill rates can TrucksOnTheMap achieve?", a: "Customers typically reach return trip fill rates of 75–85%, up from an industry average of 40–50% without optimization. Results depend on your network density, lane structure, equipment types, and geographic coverage." },
      { q: "Does TrucksOnTheMap work for cross-border freight?", a: "Yes. Cross-border backhaul matching is supported with customs documentation requirements, multi-currency rate management, and transit time calculations that account for border crossing delays." },
      { q: "What is the ROI?", a: "Customers typically see 45% fewer empty miles, 30% lower total transport costs, and 28% fewer CO₂ emissions. Revenue from previously empty return trips often pays for the platform within 2 months." },
      { q: "How is TrucksOnTheMap different from a load board?", a: "Load boards are passive: you search and hope. TrucksOnTheMap is proactive: our software identifies the best return load for each truck based on location, timing, HOS, and profitability, then notifies the driver." },
    ],
  },
  ctaFinal: {
    label: "Ready to Fill Every Truck?",
    headline: "Let's talk about TrucksOnTheMap",
    subtext: "Book a 30-minute demo. We'll show you how our platform cuts empty miles by 45%, reduces costs by 30%, and turns return trips into revenue.",
  },
};

export default config;