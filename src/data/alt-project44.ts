import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs project44 | Best Alternative for European Road Freight",
    description: "Compare TrucksOnTheMap vs project44. EU-native road freight platform with full operational suite vs US-first global visibility layer.",
  },
  competitor: {
    name: "project44",
    shortName: "project44",
    tagline: "Global visibility platform (USA/EU)",
    origin: "Chicago, USA",
  },
  hero: {
    badge: "Best project44 Alternative",
    headline: "The Smarter Alternative to project44 is",
    subtext: "Purpose-built for European road freight. Full operational suite — procurement, matching, dock scheduling — not just a visibility layer on top of your existing stack.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "6–12 weeks", winner: "totm" },
        { name: "Self-service onboarding", totm: true, competitor: false, winner: "totm" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "All-in-one EU SaaS", competitor: "Visibility-only layer", winner: "totm" },
      ]},
      { category: "Pricing & Flexibility", features: [
        { name: "Transparent pricing", totm: "Pay-per-use, no hidden fees", competitor: "Enterprise only ($50K+/year)", winner: "totm" },
        { name: "Minimum commitment", totm: "None", competitor: "Annual contracts", winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: true, winner: "tie" },
        { name: "Predictive ETA", totm: "AI-powered, multi-source", competitor: "Advanced ML models", winner: "tie" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Functional, data-heavy", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: true, winner: "tie" },
        { name: "Global multimodal coverage", totm: "EU road specialist", competitor: "Ocean, air, rail, road", winner: "competitor" },
      ]},
      { category: "Freight Operations", features: [
        { name: "Freight procurement / e-tendering", totm: true, competitor: false, winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: false, winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "Spot market access", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "European coverage", totm: "Full EU + deep CEE", competitor: "EU secondary to US market", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Minimal CEE focus", winner: "totm" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Tiered enterprise support", winner: "totm" },
        { name: "SLA compliance", totm: "99,99%", competitor: "Standard SLA", winner: "totm" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 14 of 19 categories",
    summaryDetail: "project44 dominates global multimodal. TOTM wins as purpose-built EU road freight platform with full operational suite.",
  },
  switchReasons: [
    { icon: "Globe", title: "EU-Native, Not US-First", description: "project44 was built for the American market and expanded to Europe. TrucksOnTheMap was built in Europe, for Europe — with native understanding of CEE corridors and regulations." },
    { icon: "Layers", title: "Full Platform, Not Just Visibility", description: "project44 is a visibility layer. TrucksOnTheMap is a complete freight management platform — procurement, matching, dock scheduling, and tracking in one product." },
    { icon: "BarChart3", title: "Accessible Pricing for All", description: "No $50K+/year enterprise gates. Pay-per-use pricing that works for SMEs and enterprises alike, with no minimum commitments." },
    { icon: "Zap", title: "Faster Implementation", description: "Go live in under 8 weeks with guided onboarding. No lengthy enterprise implementation projects or dedicated project teams required." },
    { icon: "Target", title: "Road Freight Specialist", description: "While project44 spreads across ocean, air, and rail, we focus exclusively on European road freight — delivering deeper functionality and better results." },
    { icon: "Users", title: "Direct Access to Senior Team", description: "No tiered support queues. Direct access to senior logistics experts who understand your corridors and your challenges." },
  ],
  faq: [
    { question: "What is the best European alternative to project44 for freight visibility?", answer: "TrucksOnTheMap is the leading EU-native alternative to project44. While project44 is a US-built global visibility platform, TrucksOnTheMap combines real-time tracking with freight procurement, AI carrier matching, dock scheduling, and a free TMS — purpose-built for European road freight. You get visibility plus the operational tools to act on it, at a fraction of the cost." },
    { question: "How does TrucksOnTheMap compare to project44 for real-time tracking and ETAs?", answer: "Both platforms offer AI/ML-powered predictive ETAs. TrucksOnTheMap's advantage for European road freight: our multi-source ETA engine is specifically calibrated for European road networks, combining telematics, live traffic, weather, and historical corridor data across 30+ EU countries. project44's ML models were primarily trained on US transportation patterns." },
    { question: "Is TrucksOnTheMap cheaper than project44?", answer: "Significantly. project44 starts at $50,000+/year with mandatory annual enterprise contracts and lengthy implementations. TrucksOnTheMap offers pay-per-use pricing with no minimums, no setup fees, and a free TMS included. Most companies switching from project44 report 50-70% savings on platform costs while gaining procurement and scheduling capabilities they didn't have." },
    { question: "Is project44 or TrucksOnTheMap better for European road freight?", answer: "For European road freight specifically, TrucksOnTheMap delivers deeper functionality. project44 excels at global multimodal visibility (ocean, air, rail, road) across continents. But if European road freight is your primary mode, TrucksOnTheMap offers native CEE corridor expertise, EU-specific regulatory compliance, and a complete operational platform — not just a visibility layer." },
    { question: "Can I migrate from project44 to TrucksOnTheMap without losing visibility?", answer: "Yes. Our migration team runs parallel operations during the transition — your shipment visibility never goes dark. We handle API reconnection, carrier onboarding, and data migration. Most project44-to-TrucksOnTheMap transitions complete within 2-3 weeks with zero tracking gaps and full support from our senior engineering team." },
    { question: "Does TrucksOnTheMap offer the same carrier integrations as project44?", answer: "Our API-first architecture connects with any carrier's telematics system within hours. While project44 has a large global connector library, TrucksOnTheMap focuses on deep, high-quality integrations with European carriers. Your carriers can connect via GPS, telematics API, or our driver app — no complex enterprise integration projects required." },
    { question: "Why are European companies switching from project44 to TrucksOnTheMap?", answer: "Three key drivers: (1) US-first vs EU-native — project44 was designed for American logistics and adapted for Europe; TrucksOnTheMap was built from the ground up for EU road freight. (2) Visibility-only vs full platform — project44 only tracks; TrucksOnTheMap also handles procurement, matching, and scheduling. (3) Enterprise pricing — project44's $50K+/year contracts price out mid-market companies." },
    { question: "Does TrucksOnTheMap offer a free trial or pilot program?", answer: "Yes. We offer a full-featured pilot with real shipments before any commitment — unlike project44's lengthy enterprise sales process. You can be running a live pilot within weeks, not months. Book a free demo and we'll customize it for your specific European corridors, carrier network, and freight volumes." },
  ],
};

export default config;
