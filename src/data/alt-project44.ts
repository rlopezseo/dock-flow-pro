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
    { question: "How does TrucksOnTheMap compare to project44's visibility?", answer: "project44 has excellent global visibility capabilities. Where we differ: TrucksOnTheMap combines visibility with a full operational suite — procurement, carrier matching, dock scheduling, and TMS. For European road freight specifically, our local expertise delivers more actionable insights." },
    { question: "Is project44 better for global supply chains?", answer: "If you need ocean, air, and rail visibility across multiple continents, project44 has broader global coverage. If European road freight is your primary mode, TrucksOnTheMap delivers deeper functionality, better CEE coverage, and a complete operational platform — not just tracking." },
    { question: "Can I migrate from project44 without disruption?", answer: "Yes. We handle the transition with parallel operations to ensure zero supply chain disruption. Most migrations complete within 2-3 weeks, with full support from our senior engineering team." },
    { question: "How does pricing compare?", answer: "project44 starts at $50K+/year with annual commitments. TrucksOnTheMap offers pay-per-use pricing with no minimums, no setup fees, and a free TMS. Most customers switching from project44 see significant cost savings." },
    { question: "What about project44's ML-powered ETAs?", answer: "Both platforms use AI/ML for predictive ETAs. Our multi-source approach combines telematics, traffic, weather, and historical corridor data specifically calibrated for European road networks — delivering highly accurate predictions." },
    { question: "Do you offer a trial?", answer: "Yes. We offer a full-featured pilot program with real shipments before committing. Book a demo and we'll set up a customized trial for your specific European corridors." },
  ],
};

export default config;
