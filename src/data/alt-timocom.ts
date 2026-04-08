import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs TimoCom | Best Alternative for European Freight",
    description: "Compare TrucksOnTheMap vs TimoCom. Full freight management platform vs DACH freight exchange. Modern tech, AI matching, and EU-wide coverage.",
  },
  competitor: {
    name: "TimoCom",
    shortName: "TimoCom",
    tagline: "DACH freight exchange (Germany)",
    origin: "Düsseldorf, Germany",
  },
  hero: {
    badge: "Best TimoCom Alternative",
    headline: "The Smarter Alternative to TimoCom is",
    subtext: "Upgrade from a freight board to a complete platform. AI-powered matching, real-time visibility, and full TMS — not just 50,000 daily load postings.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "Days", winner: "tie" },
        { name: "Self-service onboarding", totm: true, competitor: true, winner: "tie" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "All-in-one SaaS platform", competitor: "Freight exchange only", winner: "totm" },
      ]},
      { category: "Pricing & Value", features: [
        { name: "Pricing model", totm: "Pay-per-use", competitor: "€150–250/month per user", winner: "totm" },
        { name: "Value per euro", totm: "Full platform suite", competitor: "Board access only", winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: true, winner: "tie" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: false, winner: "totm" },
        { name: "Predictive ETA (AI)", totm: "AI-powered, multi-source", competitor: false, winner: "totm" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Functional, dated", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: false, winner: "totm" },
        { name: "Workflow automation", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Freight Operations", features: [
        { name: "Freight procurement / e-tendering", totm: true, competitor: false, winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: "Manual board search", winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "DACH spot market volume", totm: "Growing", competitor: "50K+ daily offers (dominant)", winner: "competitor" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "DACH market dominance", totm: "Strong presence", competitor: "#1 freight exchange in DACH", winner: "competitor" },
        { name: "Full EU coverage", totm: "Full EU + deep CEE", competitor: "DACH-centric, DE/AT/PL/CZ", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Only via DACH-CEE routes", winner: "totm" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Standard support", winner: "totm" },
        { name: "Verified company network", totm: "Quality-vetted carriers", competitor: "45,000+ verified companies", winner: "competitor" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 13 of 18 categories",
    summaryDetail: "TimoCom dominates DACH marketplace volume. TOTM wins on technology, capabilities, and EU-wide coverage.",
  },
  switchReasons: [
    { icon: "Cpu", title: "Platform vs Freight Board", description: "TimoCom is a marketplace where you search manually. TrucksOnTheMap is a complete freight management platform with AI matching, automated procurement, real-time tracking, and a free TMS." },
    { icon: "Eye", title: "Real-Time Visibility", description: "TimoCom offers no shipment tracking. TrucksOnTheMap gives you live tracking with AI-powered ETAs, exception alerts, and full end-to-end visibility." },
    { icon: "Target", title: "AI Matching vs Manual Search", description: "Stop scrolling through 50,000 daily postings. Our AI matches your loads with the best carriers based on route, capacity, price, and historical reliability." },
    { icon: "Globe", title: "EU-Wide, Not DACH-Only", description: "TimoCom is strong in DACH but limited beyond DE/AT/PL/CZ. TrucksOnTheMap covers the full EU with deep expertise in every major corridor." },
    { icon: "BarChart3", title: "More Value for Your Money", description: "For what TimoCom charges per user for board access, TrucksOnTheMap delivers a complete suite — TMS, visibility, procurement, matching, and dock scheduling." },
    { icon: "Zap", title: "Automated Workflows", description: "Eliminate manual processes. Automated carrier selection, booking confirmation, document management, and exception handling — things a freight board simply can't offer." },
  ],
  faq: [
    { question: "TimoCom has 50,000+ daily offers. How does TrucksOnTheMap compete?", answer: "TimoCom's volume is impressive for a marketplace model. TrucksOnTheMap takes a different approach: instead of scrolling through thousands of postings, our AI matches your loads with the best available carriers automatically. Quality over quantity — with better results and far less manual work." },
    { question: "Is TrucksOnTheMap suitable for DACH freight?", answer: "Absolutely. We have strong coverage in DACH markets with growing presence. The advantage: you get DACH coverage plus full EU reach, real-time tracking, and complete freight management tools — not just a load board." },
    { question: "Can I use both TimoCom and TrucksOnTheMap?", answer: "Yes. Some customers use TimoCom for spot DACH freight while relying on TrucksOnTheMap for their core operations — contract freight, visibility, procurement, and carrier management. Over time, most find they can consolidate onto TrucksOnTheMap entirely." },
    { question: "What about TimoCom's verified company network?", answer: "Our carrier network is quality-vetted with rigorous verification. While TimoCom has a larger total network from 30+ years, our carriers are actively engaged, digitally connected, and integrated into real-time tracking — not just listed in a directory." },
    { question: "How does pricing compare?", answer: "TimoCom charges €150-250/month per user for freight board access only. TrucksOnTheMap's pay-per-use model includes the full platform — TMS, visibility, AI matching, procurement, dock scheduling. Significantly more value at competitive pricing." },
    { question: "Do I need technical resources to switch?", answer: "No. Our guided onboarding handles everything. You can be operational within weeks with full support from our team. No IT project, no complex integration — just better freight management." },
  ],
};

export default config;
