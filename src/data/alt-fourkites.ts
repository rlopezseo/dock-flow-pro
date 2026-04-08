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
    { question: "How does TrucksOnTheMap compare to FourKites' analytics?", answer: "FourKites has excellent cross-chain analytics capabilities. TrucksOnTheMap focuses on actionable freight-specific analytics combined with operational tools. We don't just show you data — we give you the tools to act on it through procurement, matching, and scheduling." },
    { question: "Is FourKites better for global supply chains?", answer: "If you need ocean, air, and rail visibility with advanced cross-chain analytics, FourKites has broader scope. For European road freight specifically, TrucksOnTheMap delivers deeper functionality, better CEE coverage, and a complete operational platform." },
    { question: "What about FourKites' yard management?", answer: "Both platforms offer yard management capabilities. TrucksOnTheMap also includes advanced dock scheduling, carrier coordination, and integration with the broader freight management workflow — not just yard visibility." },
    { question: "Can I migrate from FourKites easily?", answer: "Yes. We handle the transition with parallel operations. Most migrations complete within 2-3 weeks with full support from our senior team. Zero supply chain disruption guaranteed." },
    { question: "How does pricing compare?", answer: "FourKites starts at $30K+/year with annual commitments. TrucksOnTheMap offers pay-per-use pricing with no minimums and a free TMS included. Most switching customers see significant savings." },
    { question: "Do you offer a trial?", answer: "Yes. Full-featured pilot with real shipments before any commitment. Book a demo and we'll customize it for your specific European freight operations." },
  ],
};

export default config;
