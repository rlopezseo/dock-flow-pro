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
    title: "Predictive ETA Software | Freight Arrival Predictions | TrucksOnTheMap",
    description: "Predictive ETAs with 95% accuracy. Machine learning that factors traffic, weather, and driver behavior for freight arrival predictions that hold up.",
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
    subtext: "Machine learning ETAs that account for traffic, weather, driver behavior, and historical lane data. 95% accuracy. Continuously recalculated. Built for operations teams who can't afford surprises.",
    ctaPrimary: "GET ACCURATE ETAs",
    ctaSecondary: "See It in Action",
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
    headline: "Why GPS-only ETAs fail and predictive ETA software is the fix",
    subtext: "Basic GPS tracking tells you where a truck is, not when it will arrive. Simple distance-based ETAs ignore the factors that actually cause delays.",
    items: [
      { icon: Clock, title: "Distance ≠ Arrival Time", description: "GPS-based ETAs calculate distance/speed but ignore traffic patterns, rest stops, border crossings, and loading/unloading time." },
      { icon: CloudRain, title: "Weather Blindness", description: "A storm in the region can add 8 hours to a delivery. Basic tracking doesn't factor weather forecasts into arrival predictions." },
      { icon: Users, title: "Driver Behavior Unknown", description: "Every driver has different patterns, rest habits, and route preferences. Generic ETAs treat all drivers the same." },
      { icon: DollarSign, title: "Dock Labor Waste", description: "Without accurate ETAs, you either staff docks too early (wasting labor) or too late (paying truck detention)." },
      { icon: Eye, title: "Customer Trust Erosion", description: "Giving customers wrong delivery windows erodes trust. One bad ETA can cost you a contract." },
      { icon: Bell, title: "Late Delay Notifications", description: "By the time a basic system flags a delay, it's already too late to reroute, reschedule dock time, or notify the customer." },
    ],
    cta: "Upgrade Your ETAs",
  },
  outcomes: {
    label: "What You Get",
    headline: "How predictive ETA software achieves 95% accuracy and spots delays 4 hours early",
    heroCard: {
      icon: Brain,
      target: 95,
      suffix: "%",
      sublabel: "ETA accuracy",
      title: "Machine learning ETAs trained on millions of deliveries",
      description: "The system processes 50M+ data points per day: traffic, weather, HOS regulations, historical lane patterns, and driver behavior to predict arrivals with 95% accuracy.",
    },
    cards: [
      { icon: Zap, target: 4, suffix: "hrs", sublabel: "earlier detection", title: "Spot delays hours before they happen", description: "The system picks up delay signals (weather fronts, traffic buildup, HOS violations) on average 4 hours before impact." },
      { icon: DollarSign, target: 30, suffix: "%", sublabel: "labor savings", title: "Better dock labor scheduling", description: "When you know the real ETA, you staff docks precisely. No overtime. No idle crews." },
      { icon: TrendingUp, target: 60, suffix: "%", sublabel: "fewer late deliveries", title: "Proactive rerouting and rescheduling", description: "Early delay detection gives you time to reroute trucks, reassign docks, and notify customers before it's a problem." },
      { icon: CloudRain, target: 48, suffix: "hr", sublabel: "weather lookahead", title: "Weather-aware predictions", description: "48-hour weather forecasts factored into every ETA calculation." },
      { icon: Bell, target: 100, suffix: "%", sublabel: "automated", title: "Proactive customer alerts", description: "Customers notified automatically when delivery windows shift." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Predictive ETA software features: machine learning, weather analysis, and proactive alerts",
    groups: [
      { id: "ml-engine", icon: Brain, title: "Machine Learning Engine", subtitle: "ETAs that learn and improve", features: ["Deep learning model trained on 50M+ historical deliveries", "Continuous retraining with new data every 24 hours", "Lane-specific models that capture corridor-level patterns", "Accuracy tracking dashboard with confidence scores"] },
      { id: "factors", icon: CloudRain, title: "Multi-Factor Analysis", subtitle: "Every variable considered", features: ["Live traffic data from multiple sources", "Weather forecast integration (48-hour lookahead)", "Hours-of-service regulation modeling", "Driver-specific behavior patterns and rest predictions"] },
      { id: "alerts", icon: Bell, title: "Predictive Alerts", subtitle: "Act before delays happen", features: ["Configurable delay threshold alerts (15min, 30min, 1hr+)", "Escalation workflows: dispatcher → manager → customer", "Automated dock rescheduling based on ETA changes", "Customer notification triggers for delivery window updates"] },
      { id: "integration", icon: Plug, title: "Dock & WMS Integration", subtitle: "ETAs that drive action", features: ["Auto-update dock appointments when ETAs shift", "WMS labor planning sync based on predicted arrivals", "Yard management integration for gate sequencing", "Live dashboard for warehouse operations teams"] },
      { id: "analytics", icon: BarChart3, title: "ETA Analytics", subtitle: "Measure and improve", features: ["Accuracy tracking by lane, carrier, and day of week", "Delay root cause analysis: traffic, weather, driver, shipper", "Carrier reliability scoring based on ETA adherence", "Exportable reports for supply chain reviews"] },
    ],
  },
  ctaBanner: {
    label: "Ready for better ETAs?",
    headline: (
      <>
        Predict arrivals. <br />
        <span className="text-white/60">Not excuses.</span>
      </>
    ),
    subtext: "Logistics teams use TrucksOnTheMap to predict freight arrivals with 95% accuracy, hours before basic GPS systems catch up.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Predictive ETA software for warehouses, 3PLs, retail, JIT, and cold chain",
    cases: [
      { id: "warehouse", icon: Factory, label: "Warehouse Operations", image: imgManufacturing, headline: "Predictive ETAs for dock labor planning", description: "Know when trucks will arrive so you can staff docks accordingly. No more overtime from early staffing or detention from late readiness.", benefits: ["Dock labor optimization", "Automated appointment rescheduling", "Arrival sequence prediction", "Shift planning integration"] },
      { id: "3pl", icon: Package, label: "3PL Providers", image: img3pl, headline: "Predictive ETAs as a competitive advantage", description: "Give your clients delivery predictions they can count on. Better ETAs mean fewer 'where is my truck?' calls and a premium service.", benefits: ["Client-facing ETA dashboards", "Service level prediction", "Proactive delay notifications", "Carrier performance benchmarking"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & E-Commerce", image: imgRetail, headline: "Accurate delivery windows for customer satisfaction", description: "Give end customers delivery ETAs that are actually right. Fewer missed deliveries, better first-attempt rates, happier customers.", benefits: ["Customer-facing delivery ETAs", "Delivery window optimization", "First-attempt success improvement", "Last-mile prediction accuracy"] },
      { id: "jit", icon: ArrowDownUp, label: "JIT Manufacturing", image: imgInbound, headline: "Predictive ETAs for just-in-time supply chains", description: "In JIT manufacturing, every minute counts. Predictive ETAs give production planners the visibility to sequence lines and prevent stockouts.", benefits: ["Production line sequencing", "Stockout prevention alerts", "Supplier delivery prediction", "Buffer stock optimization"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Chain", image: imgColdchain, headline: "Time-critical ETAs for temperature-sensitive freight", description: "For cold chain, ETA accuracy directly impacts product quality. Know when reefer trucks arrive so you can minimize dock exposure time.", benefits: ["Dock-ready crew scheduling", "Exposure time minimization", "Temperature zone pre-staging", "Quality assurance integration"] },
    ],
    cta: "Get Predictive ETAs Now",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How does predictive ETA software work? Five steps",
    steps: [
      { icon: MapPin, step: "01", title: "Collect Live Data", description: "GPS, telematics, traffic feeds, weather APIs, and HOS data stream into the system in real time from every active shipment." },
      { icon: Brain, step: "02", title: "Analyze & Predict", description: "Machine learning models process 50M+ data points daily, combining live conditions with historical lane patterns to generate ETAs." },
      { icon: Clock, step: "03", title: "Continuous Recalculation", description: "ETAs are recalculated every 15 minutes as conditions change. Traffic spike or weather shift? Your ETA updates immediately." },
      { icon: Bell, step: "04", title: "Proactive Delay Alerts", description: "When a likely delay is detected, alerts go to dispatchers, dock managers, and customers on average 4 hours before impact." },
      { icon: BarChart3, step: "05", title: "Learn & Improve", description: "Every delivered shipment feeds back into the model. Accuracy improves continuously as the system learns your specific lanes and carriers." },
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
    cta: "Switch to Predictive ETAs",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Predictive ETA software FAQ: accuracy, model, and integration",
    items: [
      { q: "What is predictive ETA software and how is it different from GPS tracking?", a: "Predictive ETA software uses machine learning to analyze traffic patterns, weather forecasts, driver behavior, hours-of-service regulations, and historical lane data. It achieves 95% accuracy versus 60–70% for GPS-only distance/speed calculations." },
      { q: "How accurate is it?", a: "TrucksOnTheMap achieves 95% accuracy within a 30-minute window for deliveries predicted 4+ hours out. Accuracy reaches 98%+ within the final 2 hours as the shipment gets closer." },
      { q: "How does it detect delays before they happen?", a: "The system continuously analyzes traffic feeds, weather forecasts, and driver HOS data along the route. When conditions change (a storm, congestion, or mandatory rest stop), the ETA is recalculated and your team is alerted on average 4 hours before impact." },
      { q: "Does it work with any carrier?", a: "Yes. Any carrier with GPS, telematics, or ELD data can be tracked. Mobile app-based tracking is also available for carriers without installed devices." },
      { q: "Does it integrate with dock scheduling?", a: "Yes. When an ETA shifts significantly, the system can automatically update dock appointments, notify warehouse teams, and adjust labor schedules without manual intervention." },
      { q: "How does weather affect the calculations?", a: "48-hour weather forecasts along the entire shipment route are integrated. The model calculates the impact of specific conditions (snow, rain, fog, extreme heat) on transit times for each corridor." },
      { q: "How is the model trained?", a: "The model is trained on 50M+ historical deliveries across thousands of lanes. It learns corridor-specific patterns (which lanes see delays on Mondays, during certain seasons, etc.) and retrains daily with fresh data." },
      { q: "What is the ROI?", a: "Customers typically see 60% fewer late deliveries, 30% dock labor savings from better planning, and a significant drop in 'where is my truck?' calls. Most operations reach full ROI within 4 months." },
      { q: "Can it send delivery notifications to customers?", a: "Yes. Configurable triggers send automated ETA updates to customers via email, SMS, or branded tracking portals, reducing inbound status calls." },
      { q: "Does it improve over time?", a: "Yes. The model retrains daily with new delivery data from your network. Every completed shipment makes future predictions more accurate, especially for your specific lanes, carriers, and seasonal patterns." },
    ],
  },
  ctaFinal: {
    label: "Ready for Better ETAs?",
    headline: "Let's talk predictive ETAs",
    subtext: "Book a 30-minute demo. We'll show you how to predict freight arrivals with 95% accuracy and spot delays 4 hours before they hit.",
  },
};

export default config;