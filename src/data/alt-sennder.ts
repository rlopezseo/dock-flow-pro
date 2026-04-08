import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs Sennder | Best Alternative for European Freight",
    description: "Compare TrucksOnTheMap vs Sennder. Neutral SaaS platform with full transparency vs digital freight broker with hidden margins.",
  },
  competitor: {
    name: "Sennder",
    shortName: "Sennder",
    tagline: "Digital freight broker (Germany)",
    origin: "Berlin, Germany",
  },
  hero: {
    badge: "Best Sennder Alternative",
    headline: "The Smarter Alternative to Sennder is",
    subtext: "Keep control of your carrier relationships. Transparent pricing with no hidden brokerage margins — a neutral SaaS platform where you decide, not an intermediary.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "Days (shippers)", winner: "tie" },
        { name: "Self-service onboarding", totm: true, competitor: true, winner: "tie" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "Neutral SaaS — you control", competitor: "Broker — Sennder controls", winner: "totm" },
      ]},
      { category: "Pricing & Transparency", features: [
        { name: "Pricing model", totm: "SaaS pay-per-use (transparent)", competitor: "Brokerage margin (10-20%, hidden)", winner: "totm" },
        { name: "Shipper sees carrier cost?", totm: true, competitor: false, winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: "Carriers yes, shippers limited", winner: "totm" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: true, winner: "tie" },
        { name: "Predictive ETA", totm: "AI-powered, multi-source", competitor: "Basic tracking-based", winner: "totm" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Modern, functional", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: "Partial", winner: "totm" },
        { name: "Driver mobile app", totm: true, competitor: true, winner: "tie" },
      ]},
      { category: "Freight Operations & Control", features: [
        { name: "Shipper chooses own carrier", totm: true, competitor: false, winner: "totm" },
        { name: "Freight procurement / e-tendering", totm: true, competitor: false, winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "Instant spot quoting", totm: "Via procurement tools", competitor: "Core strength — instant price", winner: "competitor" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "European coverage", totm: "Full EU + deep CEE", competitor: "DE, FR, IT, PL, ES", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Growing but limited", winner: "totm" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Account managers for key clients", winner: "totm" },
        { name: "Carrier network size", totm: "Curated, quality-vetted", competitor: "Large (Uber Freight EU + own)", winner: "competitor" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 12 of 17 categories",
    summaryDetail: "Sennder excels in instant spot quoting & carrier volume. TOTM wins on transparency, control, and full platform capabilities.",
  },
  switchReasons: [
    { icon: "Shield", title: "SaaS Platform, Not a Broker", description: "Sennder is an intermediary that controls your carrier relationships and takes a hidden margin. TrucksOnTheMap is a neutral platform where you maintain full control and visibility over costs." },
    { icon: "Eye", title: "Full Cost Transparency", description: "With Sennder, you never see the actual carrier cost — their 10-20% margin is hidden. With TrucksOnTheMap, every cost is visible and every decision is yours." },
    { icon: "Layers", title: "Complete Platform, Not Just Booking", description: "Beyond spot quoting: get procurement tools, e-tendering, dock scheduling, real-time visibility, and a free TMS in one integrated platform." },
    { icon: "Globe", title: "Wider European Coverage", description: "Sennder focuses on DE, FR, IT, PL, ES. TrucksOnTheMap covers the full EU with deep expertise in Central & Eastern European corridors." },
    { icon: "Target", title: "Choose Your Own Carriers", description: "On Sennder, the broker picks the carrier. On TrucksOnTheMap, you choose from quality-vetted carriers and build lasting relationships." },
    { icon: "BarChart3", title: "Predictable SaaS Pricing", description: "No hidden brokerage margins. Clear pay-per-use pricing that you can budget for — not variable margins that eat into your freight savings." },
  ],
  faq: [
    { question: "What is the best alternative to Sennder for digital freight in Europe?", answer: "TrucksOnTheMap is the leading alternative to Sennder for European road freight. The fundamental difference: Sennder is a digital freight broker that controls your carrier relationships and takes a hidden 10-20% margin. TrucksOnTheMap is a neutral SaaS platform — you maintain full control of carriers, see all costs transparently, and pay a predictable platform fee instead of brokerage commissions." },
    { question: "Is TrucksOnTheMap cheaper than Sennder for freight management?", answer: "Yes, for most shippers. Sennder's hidden brokerage margin of 10-20% on every shipment adds up significantly — on a €1M annual freight spend, that's €100K-200K in hidden fees. TrucksOnTheMap's transparent pay-per-use SaaS pricing means you pay a predictable platform fee and negotiate carrier rates directly. Most companies switching report 15-25% lower total freight costs." },
    { question: "What is the difference between a digital freight broker and a freight SaaS platform?", answer: "A digital freight broker like Sennder acts as an intermediary: they select the carrier, set the price (with their margin built in), and own the carrier relationship. A freight SaaS platform like TrucksOnTheMap gives you the technology to manage freight yourself — AI carrier matching, procurement, visibility, dock scheduling — while you maintain direct carrier relationships and full cost transparency." },
    { question: "Can I bring my own carriers to TrucksOnTheMap instead of using Sennder's network?", answer: "Absolutely — that's a core advantage over Sennder. You invite and manage your preferred carriers directly on the platform while also accessing our quality-vetted carrier marketplace. Unlike Sennder where the broker assigns carriers, you choose who hauls your freight based on price, reliability, and relationship history." },
    { question: "How do I migrate from Sennder to TrucksOnTheMap?", answer: "Since Sennder intermediates your carrier relationships, migration involves re-establishing direct carrier connections. Our onboarding team helps you identify and invite carriers who were previously hidden behind Sennder's brokerage layer. Most companies are surprised to find their carriers eager for direct relationships. Full migration typically completes within 2-3 weeks." },
    { question: "Does TrucksOnTheMap offer instant spot freight quoting like Sennder?", answer: "Yes. Our procurement tools support instant spot quoting with AI-powered carrier matching. The difference: you see all carrier bids transparently, compare rates directly, and choose the best option yourself — rather than accepting a broker's pre-selected and marked-up rate. You get speed plus transparency." },
    { question: "Is Sennder or TrucksOnTheMap better for small and medium shippers?", answer: "TrucksOnTheMap is significantly more accessible. Sennder primarily targets larger shippers with high volumes. TrucksOnTheMap offers pay-per-use pricing with no minimum shipment volumes, no annual commitments, and a free TMS included — making enterprise-grade freight technology accessible to SMEs across Europe." },
    { question: "Why are shippers leaving Sennder for SaaS freight platforms?", answer: "Three main reasons: (1) Cost transparency — shippers discover they've been paying 10-20% hidden margins on every shipment. (2) Carrier control — companies want to choose and build relationships with their carriers, not have a broker decide. (3) Platform capabilities — SaaS platforms like TrucksOnTheMap offer procurement, visibility, dock scheduling, and TMS in one tool, while Sennder only handles booking." },
  ],
};

export default config;
