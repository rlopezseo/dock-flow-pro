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
    { question: "What is the best alternative to TimoCom freight exchange in 2025?", answer: "TrucksOnTheMap is the top modern alternative to TimoCom. While TimoCom operates as a traditional freight board where you manually search through 50,000+ daily postings, TrucksOnTheMap uses AI to automatically match your loads with the best available carriers. You also get real-time tracking, dock scheduling, procurement tools, and a free TMS — capabilities that freight exchanges simply don't offer." },
    { question: "How does TrucksOnTheMap compare to TimoCom for German and DACH freight?", answer: "Both platforms serve the DACH market effectively. The difference: TimoCom is a freight board limited to load posting and manual search. TrucksOnTheMap is a complete freight management platform with AI carrier matching, automated procurement, real-time visibility, and dock scheduling. You get DACH coverage plus full EU reach, including deep Central & Eastern European corridors that TimoCom barely covers." },
    { question: "Is TrucksOnTheMap cheaper than TimoCom per user?", answer: "TimoCom charges €150-250/month per user for freight board access only — no tracking, no TMS, no AI matching, no dock scheduling. TrucksOnTheMap's pay-per-use model includes the entire platform suite at competitive pricing. For companies with multiple users, the total cost of ownership is often lower with TrucksOnTheMap while getting 10x more functionality." },
    { question: "Can I replace TimoCom with TrucksOnTheMap for spot freight?", answer: "Yes. TrucksOnTheMap handles both contract and spot freight with AI-powered matching, competitive bidding, and instant quoting. Instead of manually scrolling through thousands of freight board postings, our AI surfaces the best carrier matches based on route, capacity, price, and reliability. Many TimoCom users report finding better rates faster with less effort." },
    { question: "Does TrucksOnTheMap have a freight exchange or load board?", answer: "TrucksOnTheMap goes beyond the traditional load board model. Instead of posting loads and waiting for responses, our AI matching engine proactively connects your shipments with quality-vetted carriers. You also get procurement workflows, e-tendering, and a carrier marketplace — a complete upgrade from manual freight exchanges." },
    { question: "Can I use TrucksOnTheMap alongside TimoCom during transition?", answer: "Absolutely. Many customers run both platforms in parallel — using TimoCom for DACH spot freight while leveraging TrucksOnTheMap for core operations: contract freight, real-time tracking, procurement, and carrier management. Over time, most consolidate fully onto TrucksOnTheMap as they realize the AI matching outperforms manual board searching." },
    { question: "Why are freight companies switching from TimoCom to modern platforms?", answer: "Three reasons: (1) Manual inefficiency — scrolling through thousands of daily postings wastes hours that AI matching eliminates. (2) No visibility — TimoCom has zero shipment tracking; TrucksOnTheMap provides real-time GPS tracking with AI-powered ETAs. (3) Missing capabilities — modern freight operations need procurement tools, dock scheduling, and TMS integration that freight boards don't provide." },
    { question: "How quickly can I switch from TimoCom to TrucksOnTheMap?", answer: "Most migrations complete within 2-3 weeks. Our guided onboarding requires no IT project or technical resources. You can invite your existing carrier contacts to join the platform, and our team helps you set up AI matching rules for your specific lanes. Many customers are fully operational within days of starting." },
  ],
};

export default config;
