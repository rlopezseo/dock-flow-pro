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
    { question: "What's the fundamental difference between TrucksOnTheMap and Sennder?", answer: "Sennder is a digital freight broker — they act as an intermediary, control carrier selection, and take a margin on every shipment. TrucksOnTheMap is a neutral SaaS platform — you maintain control of your carrier relationships, see all costs transparently, and pay a predictable platform fee." },
    { question: "Is Sennder cheaper since they handle everything?", answer: "It may seem simpler, but Sennder's hidden 10-20% brokerage margin means you're often paying significantly more per shipment. With TrucksOnTheMap's transparent pricing, most shippers find their total freight costs decrease while gaining more operational control." },
    { question: "Can I bring my own carriers to TrucksOnTheMap?", answer: "Absolutely — that's a core advantage. Unlike Sennder where the broker assigns carriers, you invite and manage your preferred carrier network on TrucksOnTheMap while also accessing our quality-vetted marketplace." },
    { question: "What about Sennder's instant spot quoting?", answer: "We offer procurement tools including spot quoting capabilities. The difference: you see all bids transparently and choose the best option yourself, rather than accepting a broker's pre-selected (and marked-up) rate." },
    { question: "Is TrucksOnTheMap suitable for small shippers?", answer: "Yes. Unlike Sennder which primarily targets larger shippers, TrucksOnTheMap is accessible to businesses of all sizes with pay-per-use pricing and no minimum commitments." },
    { question: "How do I migrate from Sennder?", answer: "Since Sennder controls carrier relationships, migration means rebuilding direct carrier connections. Our team helps you onboard carriers quickly, often reactivating relationships that were intermediated by Sennder. Most transitions complete within 2-3 weeks." },
  ],
};

export default config;
