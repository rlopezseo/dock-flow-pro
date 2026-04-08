import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs Shippeo | Best Alternative for European Freight",
    description: "Compare TrucksOnTheMap vs Shippeo. All-in-one platform with procurement, carrier matching & SME access vs visibility-only enterprise solution.",
  },
  competitor: {
    name: "Shippeo",
    shortName: "Shippeo",
    tagline: "Enterprise visibility platform (France)",
    origin: "Paris, France",
  },
  hero: {
    badge: "Best Shippeo Alternative",
    headline: "The Smarter Alternative to Shippeo is",
    subtext: "Same enterprise-grade visibility plus full freight operations. Procurement, carrier matching, and TMS included — without the enterprise-only pricing.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "4–8 weeks", winner: "totm" },
        { name: "Self-service onboarding", totm: true, competitor: false, winner: "totm" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "All-in-one SaaS", competitor: "Visibility-only SaaS", winner: "totm" },
      ]},
      { category: "Pricing & Flexibility", features: [
        { name: "Transparent pricing", totm: "Pay-per-use, no hidden fees", competitor: "Custom quotes (€5K+/month)", winner: "totm" },
        { name: "Minimum commitment", totm: "None", competitor: "12+ month contracts", winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: true, winner: "tie" },
        { name: "Predictive ETA", totm: "AI-powered, multi-source", competitor: "AI-powered (industry-leading)", winner: "tie" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Clean enterprise dashboard", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: true, winner: "tie" },
        { name: "Carrier integrations", totm: "Growing ecosystem", competitor: "150+ pre-built connectors", winner: "competitor" },
      ]},
      { category: "Freight Operations", features: [
        { name: "Freight procurement / e-tendering", totm: true, competitor: false, winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: false, winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "Spot market access", totm: true, competitor: false, winner: "totm" },
        { name: "Multimodal (ocean, rail, air)", totm: "Road specialist", competitor: "Road, rail, ocean", winner: "competitor" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "European coverage", totm: "Full EU + deep CEE", competitor: "Western EU focused", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Limited CEE presence", winner: "totm" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Enterprise account teams", winner: "totm" },
        { name: "SLA compliance", totm: "99,99%", competitor: "Enterprise SLA", winner: "totm" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 12 of 19 categories",
    summaryDetail: "Shippeo excels in visibility depth & carrier integrations. TOTM wins as all-in-one platform with procurement, matching & SME access.",
  },
  switchReasons: [
    { icon: "Layers", title: "All-in-One vs Visibility-Only", description: "Shippeo tracks your shipments. TrucksOnTheMap manages your entire freight operation — procurement, matching, dock scheduling, and visibility in one platform." },
    { icon: "BarChart3", title: "Transparent, Predictable Pricing", description: "No €5K+/month minimums. Pay only for what you use with clear per-shipment pricing that scales with your business." },
    { icon: "Zap", title: "Go Live in Weeks, Not Months", description: "Self-service onboarding gets you operational fast. No dedicated project team required — our guided setup handles the complexity." },
    { icon: "Globe", title: "Deep CEE Corridor Expertise", description: "While Shippeo focuses on Western Europe, TrucksOnTheMap offers native expertise across Central & Eastern European logistics corridors." },
    { icon: "Users", title: "Built for SMEs and Enterprises", description: "Shippeo gates out smaller companies. TrucksOnTheMap delivers enterprise-grade capabilities accessible to businesses of all sizes." },
    { icon: "Eye", title: "Procurement + Visibility Combined", description: "Why use two platforms? Get carrier matching, e-tendering, and real-time tracking in a single unified experience." },
  ],
  faq: [
    { question: "How does TrucksOnTheMap compare to Shippeo's visibility capabilities?", answer: "Shippeo is a strong visibility platform — we acknowledge that. Where TrucksOnTheMap differs is scope: we combine real-time tracking with freight procurement, carrier matching, dock scheduling, and a free TMS. You get visibility plus the operational tools to act on it." },
    { question: "Can I migrate from Shippeo without disruption?", answer: "Yes. Our team handles data migration and carrier onboarding. We maintain parallel operations during the transition so there's zero disruption to your supply chain. Most migrations complete within 2-3 weeks." },
    { question: "Is TrucksOnTheMap suitable for enterprise-scale operations?", answer: "Absolutely. We handle millions of shipments for companies like Saint-Gobain and Apollo Tyres. ISO 27001 certified, GDPR compliant, and built for 99.99% uptime across all European corridors." },
    { question: "What about Shippeo's 150+ carrier integrations?", answer: "Our API-first architecture connects with any carrier's telematics system. We're growing our pre-built connector library while ensuring quality over quantity. Your existing carriers can connect via GPS, telematics API, or our driver app — no complex integrations required." },
    { question: "How does pricing compare to Shippeo?", answer: "Significantly more accessible. Shippeo starts at €5K+/month with annual commitments. We offer pay-per-use pricing with no minimums, no setup fees, and a free TMS included. Most customers see 40-50% savings on platform costs." },
    { question: "Do you support multimodal shipments?", answer: "We're specialists in European road freight — and we do it exceptionally well. For ocean, air, or rail, we integrate with dedicated platforms. If road freight is your primary mode, TrucksOnTheMap delivers deeper functionality than any generalist." },
  ],
};

export default config;
