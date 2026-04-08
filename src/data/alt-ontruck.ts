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
    { question: "What is the best alternative to Ontruck for digital freight in Spain and Europe?", answer: "TrucksOnTheMap is the top alternative to Ontruck for European road freight. While Ontruck operates as a regional freight broker limited to Spain after pulling back from the UK and France, TrucksOnTheMap is a full-featured SaaS platform covering the entire EU. You get AI carrier matching, real-time visibility, dock scheduling, procurement tools, and a free TMS — not just a booking intermediary." },
    { question: "Is Ontruck still operational after their 2022 restructuring?", answer: "Ontruck significantly reduced operations after raising €65M and subsequently restructuring in 2022. They withdrew from the UK and France to focus solely on Spanish regional freight (200-300km corridors). For businesses needing a reliable long-term logistics technology partner with EU-wide coverage, TrucksOnTheMap offers a more stable and actively expanding platform." },
    { question: "How does TrucksOnTheMap compare to Ontruck for Spanish freight?", answer: "Ontruck has Iberian brand recognition for regional FTL/LTL freight. TrucksOnTheMap gives you Spanish coverage plus full EU reach, real-time tracking with AI-powered ETAs, procurement tools, dock scheduling, and a complete TMS. If you operate only within Spain today but plan to grow, TrucksOnTheMap future-proofs your operations without platform migration later." },
    { question: "Is TrucksOnTheMap a freight broker like Ontruck?", answer: "No — that's the fundamental difference. Ontruck is a digital freight broker: they control carrier selection and take a hidden margin on every shipment. TrucksOnTheMap is a neutral SaaS platform where you maintain direct carrier relationships, see all costs transparently, and pay a predictable platform fee. You choose your carriers, not a broker." },
    { question: "Can I migrate from Ontruck to TrucksOnTheMap easily?", answer: "Yes. Since Ontruck intermediates carrier relationships, migration means re-establishing direct carrier connections. Our onboarding team helps you identify and invite carriers within 2 weeks. Many carriers previously hidden behind Ontruck's brokerage layer are eager for direct shipper relationships with better visibility and faster payments." },
    { question: "Is TrucksOnTheMap suitable for small shippers who used Ontruck?", answer: "Absolutely. Like Ontruck, TrucksOnTheMap is accessible to SMEs — but with significantly more functionality. Pay-per-use pricing with no minimums, no annual commitments, and a free TMS included. You get enterprise-grade freight management technology regardless of your shipment volume." },
    { question: "Does TrucksOnTheMap handle short-distance regional freight like Ontruck?", answer: "Yes. Our platform supports all distances — from local 50km deliveries to 2,000km+ cross-border European freight. While Ontruck specializes only in 200-300km Spanish corridors, TrucksOnTheMap handles the full spectrum with AI matching, real-time tracking, and procurement tools optimized for every distance and corridor." },
    { question: "What are the risks of staying with Ontruck vs switching to TrucksOnTheMap?", answer: "Key Ontruck risks: (1) Platform viability — after raising €65M and restructuring, long-term stability remains uncertain. (2) Limited coverage — Spain-only after UK/France withdrawal. (3) Broker dependency — you don't own carrier relationships. TrucksOnTheMap mitigates all three: growing platform with expanding features, full EU coverage, and direct carrier control." },
  ],
};

export default config;
