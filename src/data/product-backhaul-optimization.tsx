import { RotateCcw, Truck, TrendingDown, MapPin, DollarSign, Eye, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, Clock, Users, BarChart3, Plug, Search, BellRing, ScanLine, Brain, Leaf } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-dock.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Backhaul Optimization Software | Return Load Matching | TrucksOnTheMap",
    description: "Eliminate empty return trips with AI-powered backhaul matching. Reduce deadhead miles by 45%, lower carbon emissions, and turn return trips into revenue.",
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
    subtext: "AI-powered backhaul matching that fills return trips automatically. Reduce deadhead miles by 45%, cut transport costs, and lower your carbon footprint — all without a single phone call.",
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
    headline: "Why 35% of all trucks on the road are driving empty",
    subtext: "The return trip is the most wasted resource in freight transport. Without backhaul optimization, trucks drive empty — burning fuel, increasing emissions, and destroying margins.",
    items: [
      { icon: Truck, title: "Trucks Running Empty", description: "Industry average: 25–35% of all truck miles are driven without cargo. That's billions of euros in wasted fuel, driver time, and vehicle wear." },
      { icon: DollarSign, title: "Margin Erosion", description: "Empty return trips mean you're paying for fuel, tolls, and driver wages with zero revenue. Every deadhead mile eats directly into your margin." },
      { icon: Leaf, title: "Unnecessary Carbon Emissions", description: "Empty trucks produce the same CO₂ as loaded ones. Your sustainability targets are impossible to hit with 35% deadhead rates." },
      { icon: Clock, title: "Manual Backhaul Search", description: "Dispatchers spend hours calling around to find return loads. By the time they find one, the truck is already halfway home — empty." },
      { icon: Eye, title: "No Visibility into Available Loads", description: "You don't know what loads are available near your truck's delivery point. Load boards are fragmented and slow. Opportunities are missed daily." },
      { icon: Users, title: "Network Silos", description: "Your inbound and outbound freight operate in silos. Loads that could be backhauled by your own fleet are given to external carriers instead." },
    ],
    cta: "Start Filling Empty Trucks",
  },
  outcomes: {
    label: "What You Get",
    headline: "Turn empty return trips into profitable hauls",
    heroCard: {
      icon: RotateCcw,
      target: 45,
      suffix: "%",
      sublabel: "fewer empty miles",
      title: "AI finds the perfect backhaul for every return trip",
      description: "Our algorithm matches return trips with available loads based on delivery point, timing, equipment type, and driver HOS — automatically filling trucks that would otherwise drive home empty.",
    },
    cards: [
      { icon: DollarSign, target: 30, suffix: "%", sublabel: "cost savings", title: "Reduce total transport costs", description: "Backhaul revenue offsets outbound costs. Every filled return trip turns a pure cost center into a profit contributor." },
      { icon: Leaf, target: 28, suffix: "%", sublabel: "CO₂ reduction", title: "Lower your carbon footprint", description: "Fewer empty miles = fewer emissions. Hit sustainability targets while improving your bottom line." },
      { icon: BarChart3, target: 85, suffix: "%", sublabel: "fill rate", title: "Maximize fleet utilization", description: "Push return trip fill rates above 85% — turning your fleet from a cost center into a revenue asset." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Backhaul optimization features built for maximum fill rates",
    groups: [
      { id: "matching", icon: Brain, title: "AI Backhaul Engine", subtitle: "Smart return load pairing", features: ["Multi-factor matching: location, timing, equipment, HOS compliance", "Triangulation support: match loads that aren't direct backhauls", "Continuous re-optimization as new loads become available", "Configurable matching rules: max detour distance, time windows"] },
      { id: "network", icon: RotateCcw, title: "Network Optimization", subtitle: "Your own loads first", features: ["Cross-reference inbound and outbound freight within your network", "Identify internal backhaul opportunities before going to market", "Multi-shipper collaboration for shared lane optimization", "Round-trip and triangular route planning"] },
      { id: "marketplace", icon: Search, title: "Load Marketplace", subtitle: "Fill gaps with external loads", features: ["Access to available loads near delivery points in real-time", "Rate comparison and margin calculation before acceptance", "Carrier self-service: browse and accept backhaul opportunities", "Quality filters: shipper rating, payment terms, commodity type"] },
      { id: "sustainability", icon: Leaf, title: "Sustainability Reporting", subtitle: "Measure your green impact", features: ["CO₂ savings calculator per backhaul match", "Empty mile reduction tracking against baselines", "ESG-ready reporting for sustainability disclosures", "Carbon offset equivalent visualization"] },
      { id: "analytics", icon: BarChart3, title: "Backhaul Analytics", subtitle: "Optimize continuously", features: ["Fill rate dashboards by lane, region, and carrier", "Revenue per mile analysis: outbound vs. return", "Opportunity cost reporting: missed backhauls quantified", "Lane-level deadhead trend analysis"] },
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
    subtext: "Join logistics leaders who've cut empty miles by 45% and turned return trips from pure cost into revenue — with TrucksOnTheMap backhaul optimization.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Backhaul optimization for every type of operation",
    cases: [
      { id: "fleet", icon: Truck, label: "Private Fleets", image: imgManufacturing, headline: "Backhaul optimization for company-owned fleets", description: "Your trucks deliver outbound loads and drive home empty. Our AI finds return loads that fit your schedule, equipment, and driver availability — turning every return trip into revenue.", benefits: ["Return load matching for owned trucks", "Driver HOS compliance checking", "Equipment type filtering", "Revenue per trip optimization"] },
      { id: "3pl", icon: Package, label: "3PL & Brokers", image: img3pl, headline: "Backhaul matching to maximize carrier utilization", description: "Offer your carriers backhaul opportunities that keep their trucks full. Improve carrier retention, reduce rates, and earn margins on both legs.", benefits: ["Carrier backhaul portal", "Both-leg margin management", "Carrier satisfaction improvement", "Network-wide optimization"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & FMCG", image: imgRetail, headline: "Backhaul optimization for retail distribution networks", description: "Retail delivery trucks make hundreds of daily stops and return empty. Fill return trips with vendor pickups, store returns, or external freight.", benefits: ["Store delivery backhaul matching", "Vendor pickup coordination", "Reverse logistics integration", "Seasonal volume balancing"] },
      { id: "manufacturing", icon: Factory, label: "Manufacturing", image: imgInbound, headline: "Round-trip optimization for manufacturing supply chains", description: "Match outbound finished goods deliveries with inbound raw material pickups. Create closed-loop routes that maximize fleet utilization.", benefits: ["Outbound-to-inbound matching", "Supplier pickup scheduling", "Closed-loop route creation", "JIT backhaul coordination"] },
      { id: "intermodal", icon: ArrowDownUp, label: "Intermodal & Cross-Border", image: imgColdchain, headline: "Cross-border backhaul matching", description: "Find return loads across borders. Handle customs requirements, multi-currency rates, and cross-border regulations for backhaul loads.", benefits: ["Cross-border load matching", "Customs documentation support", "Multi-currency rate management", "Transit time optimization"] },
    ],
    cta: "Start Filling Return Trips",
  },
  howItWorks: {
    label: "How It Works",
    headline: "Backhaul optimization — in five steps",
    steps: [
      { icon: MapPin, step: "01", title: "Truck Completes Delivery", description: "When your truck delivers its load, the AI immediately scans for available return loads near the delivery point — within seconds." },
      { icon: Brain, step: "02", title: "AI Finds the Best Match", description: "The algorithm evaluates loads by proximity, timing, equipment compatibility, driver HOS, and profitability — scoring thousands of options in 12 seconds." },
      { icon: BellRing, step: "03", title: "Driver Gets Notified", description: "The best-matched backhaul is sent to the driver's app. They review details, accept, and navigate to pickup — no dispatcher calls needed." },
      { icon: ScanLine, step: "04", title: "Execute & Track", description: "The backhaul load is tracked in real-time just like any other shipment. Full visibility from pickup to final delivery." },
      { icon: BarChart3, step: "05", title: "Measure & Improve", description: "Post-delivery analytics show revenue earned, miles saved, and CO₂ reduced. Every completed backhaul makes future matching smarter." },
    ],
  },
  compare: {
    label: "Compare",
    headline: (
      <>
        AI backhaul matching vs.<br className="hidden sm:block" /> manual load searching
      </>
    ),
    features: [
      "AI-powered return load matching",
      "12-second match time",
      "Network-first optimization",
      "Driver HOS compliance checking",
      "Triangulation & multi-stop matching",
      "CO₂ savings tracking",
      "Real-time load availability",
      "Revenue per mile analytics",
      "Cross-border backhaul support",
      "Automated driver notifications",
    ],
    oldWay: { title: "Phone Calls & Load Boards", subtitle: "The old way" },
    cta: "Switch to Smart Backhaul Matching",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Everything you need to know about backhaul optimization",
    items: [
      { q: "What is backhaul optimization?", a: "Backhaul optimization uses AI to find freight loads for trucks that would otherwise drive empty on their return trip. By matching available loads with returning trucks, it eliminates deadhead miles, reduces costs, and generates revenue from return trips." },
      { q: "How fast does the AI find a backhaul match?", a: "On average, the AI identifies and scores the best backhaul option in 12 seconds. It evaluates proximity, timing, equipment requirements, driver hours-of-service, and profitability simultaneously." },
      { q: "What's the difference between backhaul and triangulation?", a: "A backhaul is a direct return load from your delivery point back to your origin. Triangulation involves picking up a load that's not directly on your return route but reduces overall empty miles when combined with other loads. Our AI handles both." },
      { q: "Does it check driver hours-of-service?", a: "Yes. Every backhaul match is validated against the driver's remaining HOS. The system will never suggest a load that would cause an HOS violation." },
      { q: "Can we prioritize our own network loads?", a: "Absolutely. The system cross-references your inbound and outbound freight first, identifying internal backhaul opportunities before looking at external loads. This maximizes your own fleet utilization." },
      { q: "How does it help with sustainability reporting?", a: "Every backhaul match includes a CO₂ savings calculation based on miles saved. The platform generates ESG-ready reports showing empty mile reduction, carbon savings, and fleet efficiency improvements." },
      { q: "What fill rates can we expect?", a: "Customers typically achieve return trip fill rates of 75–85%, up from 40–50% without optimization. Results depend on your network density, lane structure, and equipment types." },
      { q: "Does it work for cross-border freight?", a: "Yes. The platform supports cross-border backhaul matching with customs documentation requirements, multi-currency rates, and transit time calculations that account for border crossing delays." },
    ],
  },
  ctaFinal: {
    label: "Ready to Fill Every Truck?",
    headline: "Let's talk backhaul optimization",
    subtext: "Book a 30-minute demo. We'll show you how to cut empty miles by 45%, reduce costs by 30%, and turn return trips into revenue.",
  },
};

export default config;
