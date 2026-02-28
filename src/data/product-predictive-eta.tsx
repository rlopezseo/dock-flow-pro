import { Brain, Clock, TrendingUp, Zap, CloudRain, Route, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, DollarSign, Users, Eye, BarChart3, Plug, BellRing, ScanLine, MapPin, Bell } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-predictive-eta.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Predictive ETA Software | AI Freight Tracking | TrucksOnTheMap",
    description: "AI-powered predictive ETAs with 95% accuracy. Machine learning that factors traffic, weather, and driver behavior for freight arrival predictions you can trust.",
    slug: "predictive-eta",
  },
  hero: {
    badge: "Predictive ETA Software",
    headline: (
      <>
        Predictive ETA software
        <br />
        <span className="text-[#bbb]">that turns guesses</span>
        <br />
        into guarantees
      </>
    ),
    subtext: "Machine learning ETAs that account for traffic, weather, driver behavior, and historical lane data. 95% accuracy. Continuously recalculated. Trusted by operations teams who can't afford surprises.",
    ctaPrimary: "GET ACCURATE ETAs",
    ctaSecondary: "See the AI in Action",
    image: heroImage,
  },
  trustBar: {
    kpis: [
      { target: 95, suffix: "%", label: "ETA Accuracy" },
      { target: 4, suffix: "hrs", label: "Earlier Delay Detection" },
      { target: 50, suffix: "M+", label: "Data Points Analyzed" },
      { target: 60, suffix: "%", label: "Fewer Late Deliveries" },
    ],
  },
  problem: {
    label: "The Problem",
    headline: "Why GPS-only ETAs fail and predictive ETA software is the answer",
    subtext: "Basic GPS tracking tells you where a truck is — not when it will arrive. Simple distance-based ETAs ignore the real-world factors that cause delays.",
    items: [
      { icon: Clock, title: "Distance ≠ Arrival Time", description: "GPS-based ETAs calculate distance/speed — ignoring traffic patterns, rest stops, border crossings, and loading/unloading time at destination." },
      { icon: CloudRain, title: "Weather Blindness", description: "A storm in the Midwest can add 8 hours to a delivery. Basic tracking systems don't factor weather forecasts into arrival predictions." },
      { icon: Users, title: "Driver Behavior Unknown", description: "Every driver has different driving patterns, rest habits, and route preferences. Generic ETAs assume all drivers are the same." },
      { icon: DollarSign, title: "Dock Labor Waste", description: "When you don't know the real ETA, you either staff docks too early (wasting labor) or too late (causing truck detention)." },
      { icon: Eye, title: "Customer Trust Erosion", description: "Giving customers inaccurate delivery windows erodes trust. One bad ETA can cost you a contract." },
      { icon: Bell, title: "Late Delay Notifications", description: "By the time a basic system flags a delay, it's already too late to reroute, rescheduled dock time, or notify the customer." },
    ],
    cta: "Upgrade to AI-Powered ETAs",
  },
  outcomes: {
    label: "What You Get",
    headline: "How predictive ETA software achieves 95% accuracy and detects delays 4 hours early",
    heroCard: {
      icon: Brain,
      target: 95,
      suffix: "%",
      sublabel: "ETA accuracy",
      title: "Machine learning ETAs trained on millions of deliveries",
      description: "Our AI analyzes 50M+ data points per day — traffic, weather, HOS regulations, historical lane patterns, and driver behavior — to predict arrivals with 95% accuracy.",
    },
    cards: [
      { icon: Zap, target: 4, suffix: "hrs", sublabel: "earlier detection", title: "Detect delays hours before they happen", description: "AI identifies delay signals — weather fronts, traffic congestion, HOS violations — 4 hours before impact." },
      { icon: DollarSign, target: 30, suffix: "%", sublabel: "labor savings", title: "Optimize dock labor scheduling", description: "When you know the real ETA, you staff docks precisely. No overtime. No idle crews." },
      { icon: TrendingUp, target: 60, suffix: "%", sublabel: "fewer late deliveries", title: "Proactive rerouting and rescheduling", description: "Early delay detection gives you time to reroute trucks, reassign docks, and notify customers proactively." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Predictive ETA software features: machine learning, weather analysis, and proactive alerts",
    groups: [
      { id: "ml-engine", icon: Brain, title: "Machine Learning Engine", subtitle: "ETAs that learn and improve", features: ["Deep learning model trained on 50M+ historical deliveries", "Continuous model retraining with new data every 24 hours", "Lane-specific models that capture corridor-level patterns", "Accuracy tracking dashboard with model confidence scores"] },
      { id: "factors", icon: CloudRain, title: "Multi-Factor Analysis", subtitle: "Every variable considered", features: ["Real-time traffic data from multiple sources", "Weather forecast integration (48-hour lookahead)", "Hours-of-service regulation modeling", "Driver-specific behavior patterns and rest predictions"] },
      { id: "alerts", icon: Bell, title: "Predictive Alerts", subtitle: "Act before delays happen", features: ["Configurable delay threshold alerts (15min, 30min, 1hr+)", "Escalation workflows: dispatcher → manager → customer", "Automated dock rescheduling based on ETA changes", "Customer notification triggers for delivery window updates"] },
      { id: "integration", icon: Plug, title: "Dock & WMS Integration", subtitle: "ETAs that drive action", features: ["Auto-update dock appointment times when ETAs shift", "WMS labor planning sync based on predicted arrivals", "Yard management integration for gate sequencing", "Real-time dashboard for warehouse operations teams"] },
      { id: "analytics", icon: BarChart3, title: "ETA Analytics", subtitle: "Measure and improve", features: ["ETA accuracy tracking by lane, carrier, and day of week", "Delay root cause analysis: traffic, weather, driver, shipper", "Carrier reliability scoring based on ETA adherence", "Exportable reports for supply chain performance reviews"] },
    ],
  },
  ctaBanner: {
    label: "Ready for smarter ETAs?",
    headline: (
      <>
        Predict arrivals. <br />
        <span className="text-white/60">Not excuses.</span>
      </>
    ),
    subtext: "Join forward-thinking logistics teams using AI to predict freight arrivals with 95% accuracy — hours before basic GPS systems.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Predictive ETA software for warehouses, 3PLs, retail, JIT, and cold chain",
    cases: [
      { id: "warehouse", icon: Factory, label: "Warehouse Operations", image: imgManufacturing, headline: "AI ETAs for dock labor planning and scheduling", description: "Know exactly when trucks will arrive so you can staff docks precisely. Eliminate the overtime costs of early staffing and the detention costs of late readiness.", benefits: ["Dock labor optimization", "Automated appointment rescheduling", "Arrival sequence prediction", "Shift planning integration"] },
      { id: "3pl", icon: Package, label: "3PL Providers", image: img3pl, headline: "Predictive ETAs as a competitive differentiator", description: "Offer your clients delivery predictions they can trust. AI-powered ETAs make your service premium — and reduce 'where is my truck?' calls by 60%.", benefits: ["Client-facing ETA dashboards", "Service level prediction", "Proactive delay notifications", "Carrier performance benchmarking"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & E-Commerce", image: imgRetail, headline: "Accurate delivery windows for customer satisfaction", description: "Give your end customers delivery ETAs that are actually accurate. Reduce missed deliveries, improve first-attempt success rates, and increase customer satisfaction.", benefits: ["Customer-facing delivery ETAs", "Delivery window optimization", "First-attempt success improvement", "Last-mile prediction accuracy"] },
      { id: "jit", icon: ArrowDownUp, label: "JIT Manufacturing", image: imgInbound, headline: "Predictive ETAs for just-in-time supply chains", description: "In JIT manufacturing, every minute matters. AI ETAs give production planners the visibility they need to sequence lines and prevent stockouts.", benefits: ["Production line sequencing", "Stockout prevention alerts", "Supplier delivery prediction", "Buffer stock optimization"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Chain", image: imgColdchain, headline: "Time-critical ETAs for temperature-sensitive freight", description: "For cold chain logistics, ETA accuracy directly impacts product quality. Know exactly when reefer trucks arrive to minimize dock exposure time.", benefits: ["Dock-ready crew scheduling", "Exposure time minimization", "Temperature zone pre-staging", "Quality assurance integration"] },
    ],
    cta: "Get Predictive ETAs Now",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How does predictive ETA software work? AI-powered in five steps",
    steps: [
      { icon: MapPin, step: "01", title: "Collect Real-Time Data", description: "GPS, telematics, traffic feeds, weather APIs, and HOS data stream into the AI engine in real-time from every active shipment." },
      { icon: Brain, step: "02", title: "AI Analyzes & Predicts", description: "Machine learning models process 50M+ data points daily — combining real-time conditions with historical lane patterns to generate ETAs." },
      { icon: Clock, step: "03", title: "Continuous Recalculation", description: "ETAs are recalculated every 15 minutes as conditions change. If traffic spikes or weather shifts, your ETA updates instantly." },
      { icon: Bell, step: "04", title: "Proactive Delay Alerts", description: "When the AI detects a likely delay, it triggers alerts to dispatchers, dock managers, and customers — 4 hours before impact on average." },
      { icon: BarChart3, step: "05", title: "Learn & Improve", description: "Every delivered shipment feeds back into the model. Accuracy improves continuously as the AI learns your specific lanes and carriers." },
    ],
  },
  compare: {
    label: "Predictive ETA Software vs. GPS",
    headline: (
      <>
        Predictive ETA software vs.<br className="hidden sm:block" /> basic GPS distance calculations
      </>
    ),
    features: [
      "Machine learning arrival prediction",
      "Weather & traffic factor analysis",
      "Driver behavior modeling",
      "4-hour early delay detection",
      "Continuous ETA recalculation",
      "Automated dock rescheduling",
      "Customer ETA notifications",
      "Lane-specific accuracy models",
      "HOS regulation modeling",
      "95% prediction accuracy",
    ],
    oldWay: { title: "GPS Distance Calculations", subtitle: "The basic way" },
    cta: "Switch to AI-Powered ETAs",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Predictive ETA software FAQ: accuracy, AI model, and integration",
    items: [
      { q: "What is predictive ETA software and how is it different from GPS tracking?", a: "Predictive ETA software uses machine learning to analyze traffic patterns, weather forecasts, driver behavior, hours-of-service regulations, and historical lane data — achieving 95% accuracy vs. 60–70% for GPS-only distance/speed calculations." },
      { q: "How accurate is predictive ETA software?", a: "TrucksOnTheMap's AI achieves 95% accuracy within a 30-minute window for deliveries predicted 4+ hours out. Accuracy improves as the shipment gets closer to destination, reaching 98%+ within the final 2 hours." },
      { q: "How does predictive ETA software detect delays before they happen?", a: "The AI continuously analyzes traffic feeds, weather forecasts, and driver HOS data along the route. When conditions change — a storm, congestion, or mandatory rest stop — it recalculates the ETA and alerts your team on average 4 hours before impact." },
      { q: "Can predictive ETA software work with any carrier?", a: "Yes. The platform is carrier-agnostic. Any carrier with GPS, telematics, or ELD data can be tracked. Mobile app-based tracking is also available for carriers without installed devices." },
      { q: "Does predictive ETA software integrate with dock scheduling?", a: "Absolutely. When an ETA changes significantly, the system can automatically update dock appointments, notify warehouse teams, and adjust labor schedules — without manual intervention. This is a key differentiator for warehouse operations." },
      { q: "How does weather affect predictive ETA software calculations?", a: "The platform integrates 48-hour weather forecasts along the entire shipment route. The AI models the impact of specific weather conditions (snow, rain, fog, extreme heat) on transit times for each specific corridor." },
      { q: "How is the predictive ETA AI model trained?", a: "The model is trained on 50M+ historical deliveries across thousands of lanes. It learns corridor-specific patterns — like which lanes experience delays on Mondays or during certain seasons — and retrains daily with new delivery data." },
      { q: "What is the ROI of predictive ETA software?", a: "Customers typically see 60% fewer late deliveries, 30% dock labor savings from better arrival planning, and significant reduction in customer 'where is my truck?' calls. Most operations achieve full ROI within 4 months." },
      { q: "Can predictive ETA software send delivery notifications to customers?", a: "Yes. Configurable notification triggers can send automated ETA updates to customers via email, SMS, or branded tracking portals — improving customer satisfaction and reducing inbound status inquiry calls." },
      { q: "Does predictive ETA software improve over time?", a: "Yes. The machine learning model retrains daily with new delivery data from your network. Every completed shipment makes future predictions smarter — especially for your specific lanes, carriers, and seasonal patterns." },
    ],
  },
  ctaFinal: {
    label: "Ready for AI-Powered ETAs?",
    headline: "Let's talk predictive ETAs",
    subtext: "Book a 30-minute demo. We'll show you how AI can predict freight arrivals with 95% accuracy and detect delays 4 hours before they impact delivery.",
  },
};

export default config;
