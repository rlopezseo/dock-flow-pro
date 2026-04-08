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
    { question: "What is the best alternative to Shippeo for supply chain visibility in 2025?", answer: "TrucksOnTheMap is the top Shippeo alternative for European road freight visibility. While Shippeo focuses exclusively on tracking and analytics, TrucksOnTheMap combines real-time visibility with freight procurement, AI carrier matching, dock scheduling, and a free TMS. You get Shippeo-level tracking plus the operational tools to act on the data — all in one platform." },
    { question: "How does TrucksOnTheMap compare to Shippeo for real-time freight tracking?", answer: "Both platforms offer strong real-time tracking with predictive ETAs. The key difference: Shippeo is a visibility-only layer that sits on top of your existing tools. TrucksOnTheMap is a complete freight management platform — you don't need separate software for procurement, carrier management, or dock scheduling. One platform, one login, one data source." },
    { question: "Is TrucksOnTheMap cheaper than Shippeo?", answer: "Significantly. Shippeo starts at €5,000+/month with annual enterprise commitments and lengthy implementation. TrucksOnTheMap offers pay-per-use pricing with no minimums, no setup fees, and a free TMS included. Most companies switching from Shippeo report 40-50% savings on platform costs while gaining procurement and scheduling capabilities they didn't have before." },
    { question: "Can I migrate from Shippeo to TrucksOnTheMap without supply chain disruption?", answer: "Yes. Our migration team runs parallel operations during the transition — your visibility never goes dark. We handle data migration, carrier onboarding, and API reconnection. Most Shippeo-to-TrucksOnTheMap migrations complete within 2-3 weeks with zero shipment tracking gaps." },
    { question: "Does TrucksOnTheMap integrate with the same carriers as Shippeo?", answer: "Our API-first architecture connects with any carrier's telematics system — GPS devices, fleet management APIs, or our mobile driver app. While Shippeo advertises 150+ pre-built connectors, our approach ensures any carrier can connect within hours, not weeks. Quality of integration matters more than connector count." },
    { question: "Is TrucksOnTheMap suitable for enterprise logistics operations?", answer: "Absolutely. We handle millions of shipments for enterprises like Saint-Gobain and Apollo Tyres. ISO 27001 certified, fully GDPR compliant, 99.99% uptime SLA, and SOC 2 audit-ready. The difference from Shippeo: we're equally accessible to mid-market companies with no enterprise-only pricing gates." },
    { question: "Why are companies switching from Shippeo to TrucksOnTheMap?", answer: "Three drivers: (1) Platform consolidation — companies tired of paying for Shippeo plus a separate TMS, procurement tool, and scheduling system. (2) Cost savings — TrucksOnTheMap's pay-per-use model eliminates €60K+/year enterprise minimums. (3) CEE coverage — TrucksOnTheMap offers native Central & Eastern European corridor expertise that Shippeo's Western Europe focus lacks." },
    { question: "Does TrucksOnTheMap offer a free trial or pilot program?", answer: "Yes. We provide a full-featured pilot with real shipments before any commercial commitment. Unlike Shippeo's lengthy enterprise sales cycle, you can be running a live pilot within weeks. Book a free demo and we'll customize it for your specific European freight corridors and volumes." },
  ],
};

export default config;
