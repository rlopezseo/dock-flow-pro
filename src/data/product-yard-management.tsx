import { Warehouse, MapPin, Truck, ScanLine, Clock, Shield, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, DollarSign, Users, Eye, BarChart3, Plug, BellRing, Settings2, TrafficCone, Layers } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-dock.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Yard Management Software | Truck Yard Optimization | TrucksOnTheMap",
    description: "Digitize your truck yard operations. Real-time trailer tracking, gate automation, and dock-to-yard coordination. Reduce yard moves by 35% with TrucksOnTheMap.",
    slug: "yard-management",
  },
  hero: {
    badge: "Yard Management Software",
    headline: (
      <>
        Yard management software
        <br />
        <span className="text-[#bbb]">for the black hole</span>
        <br />
        of your supply chain
      </>
    ),
    subtext: "Real-time visibility into every truck, trailer, and container in your yard. Automated gate processes, intelligent dock assignment, and yard move optimization that cuts dwell time by 40%.",
    ctaPrimary: "OPTIMIZE YOUR YARD",
    ctaSecondary: "Explore Features",
    image: heroImage,
  },
  trustBar: {
    kpis: [
      { target: 35, suffix: "%", label: "Fewer Yard Moves" },
      { target: 40, suffix: "%", label: "Less Dwell Time" },
      { target: 100, suffix: "%", label: "Yard Visibility" },
      { target: 8, suffix: "min", label: "Avg Gate Time" },
    ],
  },
  problem: {
    label: "The Problem",
    headline: "Why most yards are the most inefficient part of the supply chain",
    subtext: "The yard is where trucks wait, trailers get lost, and dock schedules fall apart. Without a yard management system, it's organized chaos — at best.",
    items: [
      { icon: Eye, title: "Lost Trailers in the Yard", description: "With 50+ trailers parked across the yard, nobody knows which trailer is where, what's loaded, or which is ready for a dock door." },
      { icon: TrafficCone, title: "Gate Bottlenecks", description: "Manual gate check-in takes 15–20 minutes per truck. During peak hours, the queue extends onto public roads — creating safety risks." },
      { icon: Truck, title: "Excessive Yard Moves", description: "Spotters drive back and forth repositioning trailers because there's no intelligent assignment. Each unnecessary move costs $15–25." },
      { icon: Clock, title: "Truck Dwell Time", description: "Trucks sit in the yard waiting for dock doors because nobody coordinated arrival with door availability. Average dwell: 2+ hours." },
      { icon: DollarSign, title: "Detention Cost Disputes", description: "Without digital timestamps, you can't prove when a truck arrived, when it was docked, or how long it waited. Disputes are endless." },
      { icon: Users, title: "Manual Yard Checks", description: "Yard jockeys do physical trailer counts 2–3 times per shift. It takes 45 minutes each time — and the data is outdated before they finish." },
    ],
    cta: "Digitize Your Yard Now",
  },
  outcomes: {
    label: "What You Get",
    headline: "Know where every truck and trailer is — in real-time",
    heroCard: {
      icon: Warehouse,
      target: 35,
      suffix: "%",
      sublabel: "fewer yard moves",
      title: "Intelligent yard orchestration that eliminates wasted moves",
      description: "AI assigns optimal parking spots based on dock schedule, load priority, and departure time — reducing spotter moves by 35% and freeing up yard capacity.",
    },
    cards: [
      { icon: Clock, target: 40, suffix: "%", sublabel: "less dwell", title: "Cut truck dwell time dramatically", description: "Dock-to-yard coordination ensures trucks are docked as soon as doors are free — not 2 hours later." },
      { icon: ScanLine, target: 8, suffix: "min", sublabel: "gate time", title: "Automated gate processing", description: "Digital check-in with OCR, RFID, or driver app reduces gate time from 20 minutes to under 8." },
      { icon: BarChart3, target: 100, suffix: "%", sublabel: "visibility", title: "Complete yard inventory", description: "Real-time digital yard map showing every trailer position, status, and contents — no physical yard checks needed." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Yard management features for modern logistics operations",
    groups: [
      { id: "visibility", icon: MapPin, title: "Real-Time Yard Map", subtitle: "Digital twin of your yard", features: ["Interactive yard map with drag-and-drop trailer positioning", "Trailer status tracking: loaded, empty, ready, detained", "Color-coded by priority, dwell time, or customer", "Multi-yard support with centralized dashboard"] },
      { id: "gate", icon: ScanLine, title: "Automated Gate Management", subtitle: "Fast, accurate gate processes", features: ["OCR license plate recognition for automatic identification", "RFID and driver mobile app check-in options", "Appointment validation against dock schedule", "Digital document capture: BOL, seal numbers, driver ID"] },
      { id: "moves", icon: Truck, title: "Yard Move Optimization", subtitle: "Fewer moves, more efficiency", features: ["AI-powered spot assignment based on dock schedule", "Spotter task queue with priority sequencing", "Move distance minimization algorithms", "Real-time spotter location tracking and dispatch"] },
      { id: "dock", icon: Layers, title: "Dock-to-Yard Coordination", subtitle: "Seamless dock flow", features: ["Automatic dock assignment based on trailer readiness", "Pre-staging: position trailers near assigned docks before appointment time", "Live dock status board integrated with yard map", "Departure sequencing based on carrier schedules"] },
      { id: "analytics", icon: BarChart3, title: "Yard Analytics", subtitle: "Data-driven yard optimization", features: ["Dwell time analysis by trailer, carrier, and customer", "Yard utilization heatmaps by day and shift", "Gate throughput metrics and bottleneck identification", "Spotter efficiency tracking and move analytics"] },
    ],
  },
  ctaBanner: {
    label: "Ready to see your yard?",
    headline: (
      <>
        Orchestrate your yard. <br />
        <span className="text-white/60">Not guess it.</span>
      </>
    ),
    subtext: "Join logistics leaders who've reduced yard moves by 35%, cut gate times to 8 minutes, and eliminated manual trailer counts — with TrucksOnTheMap.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Yard management solutions for every facility",
    cases: [
      { id: "distribution", icon: Factory, label: "Distribution Centers", image: imgManufacturing, headline: "Yard management for high-volume distribution operations", description: "Handle hundreds of daily trailer moves with intelligent assignment. Coordinate inbound receiving and outbound shipping docks with yard positioning.", benefits: ["High-volume move management", "Inbound/outbound dock coordination", "Trailer pre-staging automation", "Peak volume capacity planning"] },
      { id: "3pl", icon: Package, label: "3PL Warehouses", image: img3pl, headline: "Multi-client yard management for shared facilities", description: "Manage yard space across multiple clients with separate visibility, priorities, and billing. Know whose trailer is where — always.", benefits: ["Client-specific yard zones", "Shared dock allocation rules", "Per-client dwell time tracking", "White-label yard visibility portal"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & Grocery", image: imgRetail, headline: "Yard optimization for high-frequency retail receiving", description: "Retail DCs process hundreds of deliveries daily. Yard management ensures trailers move from gate to dock to departure without bottlenecks.", benefits: ["Rapid gate processing", "Priority dock assignment by PO", "Vendor scorecarding by yard time", "Seasonal surge capacity management"] },
      { id: "manufacturing", icon: ArrowDownUp, label: "Manufacturing Plants", image: imgInbound, headline: "Yard management for JIT manufacturing facilities", description: "In manufacturing, the yard feeds the production line. Ensure raw material trailers are positioned at the right dock at the right time to prevent line stoppages.", benefits: ["Production-synced trailer positioning", "Raw material priority staging", "Empty trailer return management", "Supplier arrival coordination"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Storage", image: imgColdchain, headline: "Yard management for temperature-controlled facilities", description: "Minimize reefer dwell time in the yard. Prioritize temperature-sensitive trailers for immediate docking and track reefer fuel levels.", benefits: ["Reefer priority docking", "Fuel level monitoring", "Temperature zone assignment", "Exposure time minimization"] },
    ],
    cta: "Start Optimizing Your Yard",
  },
  howItWorks: {
    label: "How It Works",
    headline: "Yard management — digitized in five steps",
    steps: [
      { icon: ScanLine, step: "01", title: "Truck Arrives at Gate", description: "Driver checks in via OCR, RFID, or mobile app. The system validates the appointment, captures documents, and assigns a yard spot — in under 8 minutes." },
      { icon: MapPin, step: "02", title: "AI Assigns Yard Position", description: "Based on dock schedule, load priority, and departure time, the AI assigns the optimal parking spot to minimize future moves." },
      { icon: Truck, step: "03", title: "Spotter Executes Move", description: "The spotter receives the task on their mobile device with turn-by-turn directions. Move completion is logged automatically." },
      { icon: Layers, step: "04", title: "Dock-Ready Pre-Staging", description: "Before the dock appointment, the trailer is automatically queued for pre-staging near the assigned door. Zero waiting." },
      { icon: BarChart3, step: "05", title: "Analyze & Optimize", description: "Yard analytics reveal dwell time trends, spotter efficiency, gate bottlenecks, and utilization patterns for continuous improvement." },
    ],
  },
  compare: {
    label: "Compare",
    headline: (
      <>
        Digital yard management vs.<br className="hidden sm:block" /> clipboard and radio
      </>
    ),
    features: [
      "Real-time digital yard map",
      "Automated gate check-in (OCR/RFID)",
      "AI-powered spot assignment",
      "Spotter task optimization",
      "Trailer status tracking",
      "Dock-to-yard coordination",
      "Dwell time analytics",
      "Digital document capture",
      "Multi-yard centralized view",
      "Gate processing in 8 minutes",
    ],
    oldWay: { title: "Clipboards & Two-Way Radios", subtitle: "The old way" },
    cta: "Switch to Smart Yard Management",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Everything you need to know about yard management software",
    items: [
      { q: "What is a yard management system (YMS)?", a: "A yard management system digitizes the operations between a facility's gate and its dock doors. It tracks every truck and trailer in the yard, automates gate processes, optimizes spotter moves, and coordinates dock assignments — replacing manual yard checks with real-time digital visibility." },
      { q: "How does a YMS reduce yard moves?", a: "AI-powered spot assignment considers the dock schedule, load priority, and departure time when assigning parking spots. By placing trailers near their future dock doors, the system eliminates 35% of unnecessary repositioning moves." },
      { q: "What gate automation options are available?", a: "The platform supports OCR (optical character recognition) for license plates, RFID tags, and driver mobile app check-in. These methods reduce gate processing time from 15–20 minutes to under 8 minutes." },
      { q: "Can we manage multiple yards from one platform?", a: "Yes. The platform supports centralized multi-yard management with facility-specific rules, separate yard maps, and consolidated analytics across all locations." },
      { q: "How does dock-to-yard coordination work?", a: "The YMS communicates with the dock scheduling system to pre-stage trailers near assigned dock doors before appointments. When a dock door becomes available, the trailer is already in position — eliminating wait time." },
      { q: "Does it track reefer trailers?", a: "Yes. The system tracks reefer fuel levels, temperature status, and plug-in locations. Temperature-sensitive trailers are automatically prioritized for faster docking." },
      { q: "How long does implementation take?", a: "Most YMS implementations go live within 6–8 weeks, including gate hardware installation (if OCR/RFID), system configuration, integration with WMS/dock scheduling, and operator training." },
      { q: "What ROI can we expect?", a: "Typical ROI includes 35% fewer yard moves ($15–25 saved per move), 40% less truck dwell time (reducing detention costs), and 2 FTE savings from eliminating manual yard checks. Most facilities achieve full ROI within 6 months." },
    ],
  },
  ctaFinal: {
    label: "Ready to Optimize Your Yard?",
    headline: "Let's talk yard management",
    subtext: "Book a 30-minute demo. We'll show you how to digitize your yard, reduce moves by 35%, and eliminate manual trailer counts.",
  },
};

export default config;
