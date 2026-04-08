import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs FourKites | Best Alternative for European Road Freight",
    description: "Compare TrucksOnTheMap vs FourKites. EU-native road freight platform with procurement & matching vs US-first global visibility & analytics.",
  },
  competitor: {
    name: "FourKites",
    shortName: "FourKites",
    tagline: "Supply chain visibility (USA/EU)",
    origin: "Chicago, USA",
  },
  hero: {
    badge: "Best FourKites Alternative",
    headline: "The Smarter Alternative to FourKites is",
    subtext: "EU-native road freight expertise with full operational capabilities. Procurement, carrier matching, and dock scheduling — not just visibility and analytics.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "4–10 weeks", winner: "totm" },
        { name: "Self-service onboarding", totm: true, competitor: false, winner: "totm" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "All-in-one EU SaaS", competitor: "Visibility + yard module", winner: "totm" },
      ]},
      { category: "Pricing & Flexibility", features: [
        { name: "Transparent pricing", totm: "Pay-per-use, no hidden fees", competitor: "Enterprise only ($30K+/year)", winner: "totm" },
        { name: "Minimum commitment", totm: "None", competitor: "Annual contracts", winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: true, winner: "tie" },
        { name: "Predictive ETA", totm: "AI-powered, multi-source", competitor: "ML-based (strong)", winner: "tie" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Enterprise dashboard (good)", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: true, winner: "tie" },
        { name: "Supply chain analytics", totm: "Freight-focused analytics", competitor: "Advanced cross-chain analytics", winner: "competitor" },
      ]},
      { category: "Freight Operations", features: [
        { name: "Freight procurement / e-tendering", totm: true, competitor: false, winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: false, winner: "totm" },
        { name: "Dock scheduling", totm: true, competitor: "Basic dock appointments", winner: "totm" },
        { name: "Yard management", totm: true, competitor: true, winner: "tie" },
        { name: "Global multimodal", totm: "EU road specialist", competitor: "Ocean, air, rail, road", winner: "competitor" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "European coverage", totm: "Full EU + deep CEE", competitor: "EU growing, US primary", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Minimal CEE focus", winner: "totm" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Tiered enterprise support", winner: "totm" },
        { name: "SLA compliance", totm: "99,99%", competitor: "Enterprise SLA", winner: "totm" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 12 of 19 categories",
    summaryDetail: "FourKites excels in analytics & global multimodal. TOTM wins on EU road freight depth, procurement, and SME accessibility.",
  },
  switchReasons: [
    { icon: "Globe", title: "EU-Native, Not US-First", description: "FourKites was built for the American market. TrucksOnTheMap was built in Europe, for Europe — with native understanding of CEE corridors, regulations, and carrier networks." },
    { icon: "Layers", title: "Full Operations, Not Just Visibility", description: "FourKites tracks and analyzes. TrucksOnTheMap lets you act — with integrated procurement, carrier matching, dock scheduling, and a free TMS." },
    { icon: "BarChart3", title: "Accessible to All Business Sizes", description: "No $30K+/year enterprise gates. Pay-per-use pricing that works for mid-market companies and enterprises alike." },
    { icon: "Target", title: "Road Freight Specialist", description: "While FourKites spreads across ocean, air, and rail, we focus on European road freight — delivering deeper functionality and better local results." },
    { icon: "Zap", title: "Faster, Simpler Implementation", description: "Go live in under 8 weeks with self-service onboarding. No lengthy enterprise integration projects required." },
    { icon: "Users", title: "Direct Senior-Level Support", description: "No tiered support queues or chatbots. Direct access to logistics experts who understand European road freight." },
  ],
  faq: [
    { question: "What is the best alternative to FourKites for European freight visibility in 2025?", answer: "TrucksOnTheMap is the leading FourKites alternative for European road freight. While FourKites focuses on global supply chain visibility and analytics, TrucksOnTheMap combines real-time tracking with freight procurement, AI carrier matching, dock scheduling, and a free TMS. For EU road freight specifically, you get deeper operational capabilities at a fraction of the cost." },
    { question: "How does TrucksOnTheMap compare to FourKites for supply chain analytics?", answer: "FourKites excels at cross-chain analytics across ocean, air, rail, and road globally. TrucksOnTheMap focuses on actionable freight-specific analytics paired with operational tools. The key difference: we don't just show you data and dashboards — we give you the tools to act on insights through integrated procurement, AI matching, and automated scheduling." },
    { question: "Is TrucksOnTheMap cheaper than FourKites?", answer: "Significantly. FourKites starts at $30,000+/year with mandatory annual enterprise contracts. TrucksOnTheMap offers pay-per-use pricing with no minimums, no setup fees, and a free TMS included. Most companies switching from FourKites report 40-60% savings on platform costs while gaining procurement and scheduling capabilities that FourKites doesn't offer." },
    { question: "Is FourKites or TrucksOnTheMap better for European road freight?", answer: "For European road freight, TrucksOnTheMap delivers deeper functionality. FourKites was built in Chicago for the US market and expanded globally — its strengths are in multimodal analytics and ocean/rail visibility. TrucksOnTheMap was built in Europe, for Europe, with native CEE corridor expertise, EU regulatory compliance, and a complete road freight operations platform." },
    { question: "Can I migrate from FourKites to TrucksOnTheMap without disruption?", answer: "Yes. Our migration team handles the transition with parallel operations — your visibility never goes dark. We manage carrier reconnection, data migration, and API integration. Most FourKites-to-TrucksOnTheMap migrations complete within 2-3 weeks with zero supply chain disruption and full senior-level support." },
    { question: "Does TrucksOnTheMap offer yard management like FourKites?", answer: "Yes. Both platforms offer yard management capabilities. TrucksOnTheMap goes further with advanced dock scheduling, carrier coordination, time slot management, and full integration with the procurement and visibility workflow. You get yard management as part of a complete freight operations platform, not as a standalone module." },
    { question: "Why are logistics companies switching from FourKites to TrucksOnTheMap?", answer: "Three main reasons: (1) US-first limitation — FourKites was designed for American supply chains; TrucksOnTheMap is EU-native with deep CEE expertise. (2) Visibility-only vs full operations — FourKites tracks and analyzes; TrucksOnTheMap lets you act with procurement, matching, and scheduling. (3) Accessibility — FourKites' $30K+/year enterprise gates exclude mid-market companies that TrucksOnTheMap serves at pay-per-use pricing." },
    { question: "Does TrucksOnTheMap offer a free demo or pilot program?", answer: "Yes. We provide a full-featured pilot with real shipments before any commitment — no lengthy enterprise sales cycles. Unlike FourKites' multi-month implementation, you can be running a live pilot within weeks. Book a free demo and we'll customize it for your European freight operations, corridors, and carrier network." },
  ],
};

export default config;
