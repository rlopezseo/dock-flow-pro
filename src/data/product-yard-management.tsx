import { Warehouse, MapPin, Truck, ScanLine, Clock, Shield, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, DollarSign, Users, Eye, BarChart3, Plug, BellRing, Settings2, TrafficCone, Layers } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-yard-management.jpg";
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
    subtext: "Live visibility into every truck, trailer, and container in your yard. Automated gate processes, intelligent dock assignment, and yard move optimization that cuts dwell time by 40%.",
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
    headline: "Why facilities without yard management software lose hours and thousands daily",
    subtext: "The yard is where trucks wait, trailers get lost, and dock schedules fall apart. Without a yard management system, it's organized chaos at best.",
    items: [
      { icon: Eye, title: "Lost Trailers in the Yard", description: "With 50+ trailers parked across the yard, nobody knows which trailer is where, what's loaded, or which is ready for a dock door." },
      { icon: TrafficCone, title: "Gate Bottlenecks", description: "Manual gate check-in takes 15–20 minutes per truck. During peak hours, the queue extends onto public roads, creating safety risks." },
      { icon: Truck, title: "Excessive Yard Moves", description: "Spotters drive back and forth repositioning trailers with no intelligent assignment. Each unnecessary move costs €15–25." },
      { icon: Clock, title: "Truck Dwell Time", description: "Trucks sit in the yard waiting for dock doors because nobody coordinated arrival with door availability. Average dwell: 2+ hours." },
      { icon: DollarSign, title: "Detention Cost Disputes", description: "Without digital timestamps, you can't prove when a truck arrived, when it was docked, or how long it waited. Disputes are endless." },
      { icon: Users, title: "Manual Yard Checks", description: "Yard jockeys do physical trailer counts 2–3 times per shift. It takes 45 minutes each time, and the data is outdated before they finish." },
    ],
    cta: "Digitize Your Yard Now",
  },
  outcomes: {
    label: "What You Get",
    headline: "How yard management software cuts dwell time by 40% and eliminates lost trailers",
    heroCard: {
      icon: Warehouse,
      target: 35,
      suffix: "%",
      sublabel: "fewer yard moves",
      title: "Smart yard orchestration that eliminates wasted moves",
      description: "The system assigns optimal parking spots based on dock schedule, load priority, and departure time, cutting spotter moves by 35% and freeing up yard capacity.",
    },
    cards: [
      { icon: Clock, target: 40, suffix: "%", sublabel: "less dwell", title: "Cut truck dwell time dramatically", description: "Dock-to-yard coordination means trucks get docked as soon as doors are free, not 2 hours later." },
      { icon: ScanLine, target: 8, suffix: "min", sublabel: "gate time", title: "Automated gate processing", description: "Digital check-in with OCR, RFID, or driver app cuts gate time from 20 minutes to under 8." },
      { icon: BarChart3, target: 100, suffix: "%", sublabel: "visibility", title: "Complete yard inventory", description: "Live digital yard map showing every trailer position, status, and contents. No physical yard checks needed." },
      { icon: Truck, target: 24, suffix: "/7", sublabel: "spotter dispatch", title: "Automated move orchestration", description: "Priority-based spotter tasks dispatched in real time." },
      { icon: Layers, target: 100, suffix: "%", sublabel: "dock sync", title: "Dock-to-yard coordination", description: "Trailers pre-staged near assigned docks before appointments." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Yard management software features: yard map, gate automation, and move optimization",
    groups: [
      { id: "visibility", icon: MapPin, title: "Live Yard Map", subtitle: "Digital twin of your yard", features: ["Interactive yard map with drag-and-drop trailer positioning", "Trailer status tracking: loaded, empty, ready, detained", "Color-coded by priority, dwell time, or customer", "Multi-yard support with centralized dashboard"] },
      { id: "gate", icon: ScanLine, title: "Automated Gate Management", subtitle: "Fast, accurate gate processes", features: ["OCR license plate recognition for automatic identification", "RFID and driver mobile app check-in options", "Appointment validation against dock schedule", "Digital document capture: BOL, seal numbers, driver ID"] },
      { id: "moves", icon: Truck, title: "Yard Move Optimization", subtitle: "Fewer moves, more done", features: ["Smart spot assignment based on dock schedule", "Spotter task queue with priority sequencing", "Move distance minimization", "Live spotter location tracking and dispatch"] },
      { id: "dock", icon: Layers, title: "Dock-to-Yard Coordination", subtitle: "Smooth dock flow", features: ["Automatic dock assignment based on trailer readiness", "Pre-staging: position trailers near assigned docks before appointment time", "Live dock status board integrated with yard map", "Departure sequencing based on carrier schedules"] },
      { id: "analytics", icon: BarChart3, title: "Yard Analytics", subtitle: "Numbers that drive improvement", features: ["Dwell time analysis by trailer, carrier, and customer", "Yard utilization heatmaps by day and shift", "Gate throughput metrics and bottleneck identification", "Spotter efficiency tracking and move analytics"] },
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
    subtext: "Logistics leaders have cut yard moves by 35%, gate times to 8 minutes, and eliminated manual trailer counts with TrucksOnTheMap.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Yard management software for distribution centers, 3PLs, retail, and manufacturing",
    cases: [
      { id: "distribution", icon: Factory, label: "Distribution Centers", image: imgManufacturing, headline: "Yard management for high-volume distribution operations", description: "Handle hundreds of daily trailer moves with smart assignment. Coordinate inbound receiving and outbound shipping docks with yard positioning.", benefits: ["High-volume move management", "Inbound/outbound dock coordination", "Trailer pre-staging automation", "Peak volume capacity planning"] },
      { id: "3pl", icon: Package, label: "3PL Warehouses", image: img3pl, headline: "Multi-client yard management for shared facilities", description: "Manage yard space across multiple clients with separate visibility, priorities, and billing. Know whose trailer is where, always.", benefits: ["Client-specific yard zones", "Shared dock allocation rules", "Per-client dwell time tracking", "White-label yard visibility portal"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & Grocery", image: imgRetail, headline: "Yard optimization for high-frequency retail receiving", description: "Retail DCs process hundreds of deliveries daily. Yard management keeps trailers moving from gate to dock to departure without bottlenecks.", benefits: ["Rapid gate processing", "Priority dock assignment by PO", "Vendor scorecarding by yard time", "Seasonal surge capacity management"] },
      { id: "manufacturing", icon: ArrowDownUp, label: "Manufacturing Plants", image: imgInbound, headline: "Yard management for JIT manufacturing facilities", description: "In manufacturing, the yard feeds the production line. Raw material trailers need to be at the right dock at the right time to prevent line stoppages.", benefits: ["Production-synced trailer positioning", "Raw material priority staging", "Empty trailer return management", "Supplier arrival coordination"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Storage", image: imgColdchain, headline: "Yard management for temperature-controlled facilities", description: "Minimize reefer dwell time in the yard. Prioritize temperature-sensitive trailers for immediate docking and track reefer fuel levels.", benefits: ["Reefer priority docking", "Fuel level monitoring", "Temperature zone assignment", "Exposure time minimization"] },
    ],
    cta: "Start Optimizing Your Yard",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How does yard management software work? Five steps to a digital yard",
    steps: [
      { icon: ScanLine, step: "01", title: "Truck Arrives at Gate", description: "Driver checks in via OCR, RFID, or mobile app. The system validates the appointment, captures documents, and assigns a yard spot in under 8 minutes." },
      { icon: MapPin, step: "02", title: "System Assigns Yard Position", description: "Based on dock schedule, load priority, and departure time, the optimal parking spot is assigned to minimize future moves." },
      { icon: Truck, step: "03", title: "Spotter Executes Move", description: "The spotter gets the task on their mobile device with directions. Move completion is logged automatically." },
      { icon: Layers, step: "04", title: "Dock-Ready Pre-Staging", description: "Before the dock appointment, the trailer is automatically queued for pre-staging near the assigned door. Zero waiting." },
      { icon: BarChart3, step: "05", title: "Analyze & Optimize", description: "Yard analytics reveal dwell time trends, spotter efficiency, gate bottlenecks, and utilization patterns for continuous improvement." },
    ],
  },
  compare: {
    label: "Yard Management Software vs. Manual",
    headline: (
      <>
        Yard management software vs.<br className="hidden sm:block" /> clipboards, radios, and manual yard checks
      </>
    ),
    features: [
      "Live digital yard map",
      "Automated gate check-in (OCR/RFID)",
      "Smart spot assignment",
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
    headline: "Yard management software FAQ: features, ROI, and implementation",
    items: [
      { q: "What is yard management software (YMS)?", a: "Yard management software digitizes operations between a facility's gate and its dock doors. It tracks every truck and trailer in the yard in real time, automates gate check-in, optimizes spotter moves, and coordinates dock assignments. It replaces manual clipboard-based yard checks." },
      { q: "How does it reduce trailer moves?", a: "Smart spot assignment considers the dock schedule, load priority, and departure time when parking trailers. By placing them near their future dock doors from arrival, unnecessary repositioning drops by 35%." },
      { q: "What gate automation is supported?", a: "OCR (optical character recognition) for license plates, RFID scanning, and driver mobile app check-in. These methods cut gate processing from 15–20 minutes to under 8 per truck." },
      { q: "Can it manage multiple yards?", a: "Yes. Enterprise YMS platforms support centralized multi-yard management with facility-specific rules, separate yard maps, and consolidated analytics across all locations from one dashboard." },
      { q: "How does it coordinate with dock scheduling?", a: "The YMS communicates with the dock scheduling system to pre-stage trailers near assigned doors before appointments. When a door becomes available, the trailer is already in position." },
      { q: "Does it track reefer trailers?", a: "Yes. Advanced YMS platforms track reefer fuel levels, temperature status, and plug-in locations. Temperature-sensitive trailers are prioritized for faster docking." },
      { q: "How long does implementation take?", a: "Most implementations go live within 6–8 weeks, including gate hardware installation (if needed), configuration, WMS and dock scheduling integration, and operator training." },
      { q: "What ROI can I expect?", a: "Typical results: 35% fewer yard moves (€15–25 saved per move), 40% less truck dwell time (lower detention costs), and 2 FTE savings from eliminating manual yard checks. Most facilities reach full ROI within 6 months." },
      { q: "What is the difference between a YMS and a WMS?", a: "A WMS manages operations inside the warehouse (inventory, picking, packing). A YMS manages operations outside (gate check-in, trailer positioning, dock coordination). The two work together for smooth facility operations." },
      { q: "Is it worth it for small facilities?", a: "Yes. Even facilities with 20–30 dock doors and 50+ daily trailer moves benefit significantly. Automating gate processing, trailer tracking, and dock coordination saves time and removes the chaos of manual yard management." },
    ],
  },
  ctaFinal: {
    label: "Ready to Optimize Your Yard?",
    headline: "Let's talk yard management",
    subtext: "Book a 30-minute demo. We'll show you how to digitize your yard, cut moves by 35%, and stop counting trailers by hand.",
  },
};

export default config;