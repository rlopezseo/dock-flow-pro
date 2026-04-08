import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs Alpega Group | Best Alternative for European Freight",
    description: "Compare TrucksOnTheMap vs Alpega Group (Teleroute, Wtransnet). Modern unified platform vs fragmented legacy freight exchanges.",
  },
  competitor: {
    name: "Alpega Group",
    shortName: "Alpega",
    tagline: "Freight exchange: Teleroute + Wtransnet (Belgium)",
    origin: "Brussels, Belgium",
  },
  hero: {
    badge: "Best Alpega Alternative",
    headline: "The Smarter Alternative to Alpega Group is",
    subtext: "One unified platform replacing three legacy products. Modern technology, AI-powered matching, and full freight management — not just a freight board.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "Days (exchange access only)", winner: "tie" },
        { name: "Self-service onboarding", totm: true, competitor: true, winner: "tie" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "Unified all-in-one SaaS", competitor: "3 separate legacy products", winner: "totm" },
      ]},
      { category: "Pricing & Value", features: [
        { name: "Pricing model", totm: "Pay-per-use", competitor: "€100–300/month per seat", winner: "totm" },
        { name: "Value per euro", totm: "Full TMS + visibility + matching", competitor: "Freight board access only", winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: true, winner: "tie" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: "Partial / basic", winner: "totm" },
        { name: "Predictive ETA (AI)", totm: "AI-powered, multi-source", competitor: false, winner: "totm" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Legacy, dated interface", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: false, winner: "totm" },
        { name: "Workflow automation", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Freight Operations", features: [
        { name: "Freight procurement / e-tendering", totm: true, competitor: "Basic spot posting", winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: "Manual search only", winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "Freight exchange network size", totm: "Growing network", competitor: "Large legacy network (30+ years)", winner: "competitor" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "European coverage", totm: "Full EU + deep CEE", competitor: "Western EU + Iberia", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Weak in CEE", winner: "totm" },
        { name: "Iberian market strength", totm: "Growing presence", competitor: "Wtransnet dominant in ES/PT", winner: "competitor" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Standard support", winner: "totm" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 13 of 17 categories",
    summaryDetail: "Alpega has legacy network size & Iberian dominance. TOTM wins on tech, UX, capabilities, and platform unification.",
  },
  switchReasons: [
    { icon: "Layers", title: "One Platform, Not Three", description: "Alpega runs Teleroute, Wtransnet, and inet-logistics as separate products. TrucksOnTheMap is one unified platform with consistent UX, shared data, and integrated workflows." },
    { icon: "Cpu", title: "Modern Tech vs Legacy Systems", description: "Alpega's products were built 30+ years ago. TrucksOnTheMap is built with modern architecture — AI matching, real-time APIs, and a premium interface designed for 2024." },
    { icon: "Eye", title: "Real-Time Visibility Built In", description: "Alpega is a freight board. TrucksOnTheMap gives you end-to-end visibility with AI-powered ETAs, live tracking, and proactive exception alerts." },
    { icon: "BarChart3", title: "More Value Per Euro", description: "For what you pay per seat on Teleroute (freight board only), TrucksOnTheMap gives you a full TMS, visibility, procurement tools, and carrier matching." },
    { icon: "Target", title: "AI Matching vs Manual Search", description: "Stop scrolling through freight boards manually. Our AI matches your loads with the best available carriers based on route, capacity, price, and reliability." },
    { icon: "Globe", title: "Full EU + CEE Coverage", description: "Alpega is strong in Western Europe and Iberia but weak in CEE. TrucksOnTheMap covers the entire EU with native Central & Eastern European expertise." },
  ],
  faq: [
    { question: "What is the best alternative to Alpega Teleroute for European freight in 2025?", answer: "TrucksOnTheMap is the leading Alpega alternative for European road freight. Unlike Teleroute's manual freight board model, TrucksOnTheMap provides AI-powered carrier matching, automated procurement, real-time shipment tracking, dock scheduling, and a free TMS — all in one unified platform. Companies switching from Alpega typically reduce manual workload by 70% while gaining end-to-end visibility." },
    { question: "How does TrucksOnTheMap compare to Alpega Teleroute and Wtransnet?", answer: "Alpega operates three separate legacy products (Teleroute, Wtransnet, inet-logistics) each with different interfaces and data silos. TrucksOnTheMap consolidates freight procurement, visibility, carrier management, and dock scheduling into a single modern platform. You get consistent UX, shared data across workflows, and AI-powered automation — not three disconnected freight boards." },
    { question: "Is TrucksOnTheMap cheaper than Alpega Teleroute?", answer: "Yes. Alpega charges €100-300/month per seat for freight board access only — no tracking, no TMS, no AI matching. TrucksOnTheMap offers pay-per-use pricing that includes the full platform suite: TMS, real-time visibility, procurement, AI carrier matching, and dock scheduling. Most companies switching from Alpega report 30-50% lower total logistics software costs with significantly more functionality." },
    { question: "Can I migrate my carrier network from Teleroute to TrucksOnTheMap?", answer: "Absolutely. You can invite your existing Teleroute carriers to join TrucksOnTheMap directly. Our onboarding team handles carrier migration with zero disruption. Many modern carriers actually prefer our platform's automated workflows and mobile-first design over legacy freight boards. Most network migrations complete within 2-3 weeks." },
    { question: "Does TrucksOnTheMap support spot freight like Teleroute?", answer: "Yes — and far more effectively. While Teleroute requires manual load posting and searching, TrucksOnTheMap uses AI to automatically match your spot loads with the best available carriers based on route, capacity, price, and reliability history. You also get competitive bidding, instant quoting, and transparent pricing — a complete upgrade from bulletin-board freight exchanges." },
    { question: "Why are logistics companies switching from Alpega to TrucksOnTheMap?", answer: "Three main reasons: (1) Technology gap — Alpega's products were built 30+ years ago and lack modern capabilities like AI matching and real-time tracking. (2) Platform fragmentation — managing Teleroute, Wtransnet, and inet-logistics separately creates data silos and inefficiency. (3) Value — TrucksOnTheMap delivers more functionality at lower total cost with pay-per-use pricing and no per-seat fees." },
    { question: "Does TrucksOnTheMap cover Central and Eastern European freight corridors?", answer: "Yes. While Alpega is strongest in Western Europe and Iberia, TrucksOnTheMap offers native coverage across the full EU including deep expertise in Central & Eastern European corridors (PL, CZ, SK, HU, RO, BG, HR, SI). Our local team understands CEE regulations, carrier networks, and cross-border logistics challenges that Alpega's legacy platforms don't address." },
    { question: "Can I try TrucksOnTheMap before cancelling my Alpega subscription?", answer: "Yes. We offer a full-featured pilot program with real shipments — no commitment required. Many customers run TrucksOnTheMap alongside Alpega during evaluation, then consolidate once they see the results. Book a free demo and we'll set up a customized trial for your specific lanes and freight volumes." },
  ],
};

export default config;
