import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs Ontruck | Best Alternative for European Freight",
    description: "Compare TrucksOnTheMap vs Ontruck. EU-wide platform with full control vs Spain-only digital broker with uncertain future.",
  },
  competitor: {
    name: "Ontruck",
    shortName: "Ontruck",
    tagline: "Digital freight broker (Spain)",
    origin: "Madrid, Spain",
  },
  hero: {
    badge: "Best Ontruck Alternative",
    headline: "The Smarter Alternative to Ontruck is",
    subtext: "EU-wide coverage, full platform control, and a stable growth path. Not a regional broker with reduced operations — a complete freight management platform built for scale.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "Days (shippers)", winner: "tie" },
        { name: "Self-service onboarding", totm: true, competitor: true, winner: "tie" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "Neutral SaaS — shipper controls", competitor: "Broker — Ontruck intermediates", winner: "totm" },
      ]},
      { category: "Pricing & Transparency", features: [
        { name: "Pricing model", totm: "SaaS pay-per-use (transparent)", competitor: "Brokerage margin (10-20%, hidden)", winner: "totm" },
        { name: "Shipper sees carrier cost?", totm: true, competitor: false, winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: true, winner: "tie" },
        { name: "Long-distance pricing", totm: "Full EU coverage", competitor: "Only regional 200-300km", winner: "totm" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: true, winner: "tie" },
        { name: "Predictive ETA", totm: "AI-powered, multi-source", competitor: "Basic / limited", winner: "totm" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Clean shipper portal", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: "Limited API", winner: "totm" },
        { name: "Driver mobile app", totm: true, competitor: true, winner: "tie" },
      ]},
      { category: "Freight Operations & Control", features: [
        { name: "Shipper chooses own carrier", totm: true, competitor: false, winner: "totm" },
        { name: "Freight procurement / e-tendering", totm: true, competitor: false, winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: "Automated but opaque", winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "Regional FTL/LTL simplicity", totm: "Full-featured platform", competitor: "Simple, fast quoting (ES)", winner: "competitor" },
      ]},
      { category: "Coverage & Stability", features: [
        { name: "EU-wide coverage", totm: "Full EU + deep CEE", competitor: "Spain only (pulled back from UK/FR)", winner: "totm" },
        { name: "Spanish market presence", totm: "Growing EU-wide", competitor: "Strong Iberian brand", winner: "competitor" },
        { name: "Company stability", totm: "Growing, profitable path", competitor: "Restructured, reduced ops", winner: "totm" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Standard support", winner: "totm" },
        { name: "Long-term platform viability", totm: "Full-suite, expanding", competitor: "Uncertain after restructuring", winner: "totm" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 14 of 19 categories",
    summaryDetail: "Ontruck only stronger in Spanish brand & simple regional booking. TOTM wins on technology, scale, coverage, and platform control.",
  },
  switchReasons: [
    { icon: "Globe", title: "EU-Wide, Not Spain-Only", description: "Ontruck pulled back from the UK and France to focus solely on Spain. TrucksOnTheMap covers the entire EU with deep CEE expertise — your business isn't limited to 200-300km Iberian corridors." },
    { icon: "Shield", title: "Stable, Growing Platform", description: "Ontruck underwent significant restructuring in 2022 with reduced operations. TrucksOnTheMap is on a growth trajectory with expanding capabilities and investment in the platform." },
    { icon: "Eye", title: "Full Transparency & Control", description: "Ontruck is a broker — they control carrier selection and hide their margin. TrucksOnTheMap is a neutral SaaS platform where you see all costs and choose your own carriers." },
    { icon: "Layers", title: "Complete Platform, Not Just Booking", description: "Beyond simple spot quoting: get procurement, e-tendering, dock scheduling, real-time visibility with AI ETAs, and a free TMS in one integrated platform." },
    { icon: "Target", title: "Long-Distance & Cross-Border", description: "Ontruck focuses on regional FTL/LTL (200-300km). TrucksOnTheMap handles cross-border European freight across all distances and corridors." },
    { icon: "BarChart3", title: "Transparent SaaS Pricing", description: "No hidden brokerage margins eating into your freight budget. Clear pay-per-use pricing with no minimum commitments." },
  ],
  faq: [
    { question: "Is Ontruck still a viable option after their restructuring?", answer: "Ontruck significantly reduced operations after 2022 restructuring, pulling back from the UK and France to focus on Spain. For businesses needing a reliable long-term partner with EU-wide coverage, TrucksOnTheMap offers a more stable and expanding platform." },
    { question: "What if I only need freight within Spain?", answer: "Ontruck has strong Iberian brand recognition for regional freight. However, TrucksOnTheMap gives you Spanish coverage plus full EU reach, real-time visibility, procurement tools, and a complete TMS — future-proofing your operations as you grow." },
    { question: "How does TrucksOnTheMap handle regional short-distance freight?", answer: "Our platform supports all distances — from local deliveries to cross-border European freight. While Ontruck specializes in 200-300km corridors only, TrucksOnTheMap handles the full spectrum with the same premium tools." },
    { question: "Can I migrate from Ontruck easily?", answer: "Yes. Since Ontruck is a broker, migration means establishing direct carrier relationships. Our team helps onboard carriers quickly and set up your preferred network on our platform. Most transitions complete within 2 weeks." },
    { question: "Is TrucksOnTheMap suitable for small shippers?", answer: "Absolutely. Like Ontruck, we're accessible to SMEs — but with far more functionality. Pay-per-use pricing, no minimums, and a free TMS make it easy for businesses of any size to get started." },
    { question: "What's the key risk with Ontruck?", answer: "Platform viability. After raising €65M and subsequently restructuring, Ontruck's long-term stability is uncertain. TrucksOnTheMap is a growing platform with expanding features and a clear growth trajectory — a safer bet for your logistics operations." },
  ],
};

export default config;
