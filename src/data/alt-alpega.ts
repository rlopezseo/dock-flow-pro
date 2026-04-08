import type { AlternativePageConfig } from "@/types/alternative-page";

const config: AlternativePageConfig = {
  meta: {
    title: "TrucksOnTheMap vs Alpega Group | Best Alternative for European Freight",
    description: "Compare TrucksOnTheMap vs Alpega Group (Teleroute, Wtransnet). Modern unified platform vs fragmented legacy freight exchanges.",
  },
  competitor: {
    name: "Alpega Group",
    shortName: "Alpega",
    tagline: "Freight exchange: Teleroute + Wtransnet (Belgium)",
    origin: "Brussels, Belgium",
  },
  hero: {
    badge: "Best Alpega Alternative",
    headline: "The Smarter Alternative to Alpega Group is",
    subtext: "One unified platform replacing three legacy products. Modern technology, AI-powered matching, and full freight management — not just a freight board.",
  },
  comparison: {
    categories: [
      { category: "Setup & Onboarding", features: [
        { name: "Time to go live", totm: "Under 8 weeks", competitor: "Days (exchange access only)", winner: "tie" },
        { name: "Self-service onboarding", totm: true, competitor: true, winner: "tie" },
        { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
        { name: "Platform type", totm: "Unified all-in-one SaaS", competitor: "3 separate legacy products", winner: "totm" },
      ]},
      { category: "Pricing & Value", features: [
        { name: "Pricing model", totm: "Pay-per-use", competitor: "€100–300/month per seat", winner: "totm" },
        { name: "Value per euro", totm: "Full TMS + visibility + matching", competitor: "Freight board access only", winner: "totm" },
        { name: "SME-friendly", totm: true, competitor: true, winner: "tie" },
      ]},
      { category: "Technology & UX", features: [
        { name: "Real-time tracking", totm: true, competitor: "Partial / basic", winner: "totm" },
        { name: "Predictive ETA (AI)", totm: "AI-powered, multi-source", competitor: false, winner: "totm" },
        { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Legacy, dated interface", winner: "totm" },
        { name: "API-first architecture", totm: true, competitor: false, winner: "totm" },
        { name: "Workflow automation", totm: true, competitor: false, winner: "totm" },
      ]},
      { category: "Freight Operations", features: [
        { name: "Freight procurement / e-tendering", totm: true, competitor: "Basic spot posting", winner: "totm" },
        { name: "AI carrier matching", totm: true, competitor: "Manual search only", winner: "totm" },
        { name: "Dock & yard management", totm: true, competitor: false, winner: "totm" },
        { name: "Freight exchange network size", totm: "Growing network", competitor: "Large legacy network (30+ years)", winner: "competitor" },
      ]},
      { category: "Coverage & Support", features: [
        { name: "European coverage", totm: "Full EU + deep CEE", competitor: "Western EU + Iberia", winner: "totm" },
        { name: "CEE corridor expertise", totm: "Native, local knowledge", competitor: "Weak in CEE", winner: "totm" },
        { name: "Iberian market strength", totm: "Growing presence", competitor: "Wtransnet dominant in ES/PT", winner: "competitor" },
        { name: "Support quality", totm: "Direct, senior-level team", competitor: "Standard support", winner: "totm" },
      ]},
    ],
    summary: "TrucksOnTheMap wins in 13 of 17 categories",
    summaryDetail: "Alpega has legacy network size & Iberian dominance. TOTM wins on tech, UX, capabilities, and platform unification.",
  },
  switchReasons: [
    { icon: "Layers", title: "One Platform, Not Three", description: "Alpega runs Teleroute, Wtransnet, and inet-logistics as separate products. TrucksOnTheMap is one unified platform with consistent UX, shared data, and integrated workflows." },
    { icon: "Cpu", title: "Modern Tech vs Legacy Systems", description: "Alpega's products were built 30+ years ago. TrucksOnTheMap is built with modern architecture — AI matching, real-time APIs, and a premium interface designed for 2024." },
    { icon: "Eye", title: "Real-Time Visibility Built In", description: "Alpega is a freight board. TrucksOnTheMap gives you end-to-end visibility with AI-powered ETAs, live tracking, and proactive exception alerts." },
    { icon: "BarChart3", title: "More Value Per Euro", description: "For what you pay per seat on Teleroute (freight board only), TrucksOnTheMap gives you a full TMS, visibility, procurement tools, and carrier matching." },
    { icon: "Target", title: "AI Matching vs Manual Search", description: "Stop scrolling through freight boards manually. Our AI matches your loads with the best available carriers based on route, capacity, price, and reliability." },
    { icon: "Globe", title: "Full EU + CEE Coverage", description: "Alpega is strong in Western Europe and Iberia but weak in CEE. TrucksOnTheMap covers the entire EU with native Central & Eastern European expertise." },
  ],
  faq: [
    { question: "How is TrucksOnTheMap different from a freight exchange like Teleroute?", answer: "Teleroute is a marketplace where you post loads and search for trucks manually. TrucksOnTheMap is a complete freight management platform — AI carrier matching, automated procurement, real-time tracking, dock scheduling, and a free TMS. Think of it as upgrading from a bulletin board to a smart operations center." },
    { question: "Can I access the same carrier network?", answer: "Our growing carrier network is quality-vetted and integrated into the platform. While Alpega has a large legacy network from 30+ years, many modern carriers prefer our platform's UX and automated workflows. You can also invite your existing carriers to join." },
    { question: "Is TrucksOnTheMap suitable for spot freight?", answer: "Absolutely. Our procurement tools support both contract and spot freight with intelligent matching, competitive bidding, and transparent pricing — far more sophisticated than posting on a freight board." },
    { question: "What about Wtransnet's dominance in Spain/Portugal?", answer: "If your freight is exclusively Iberian, Wtransnet has strong local network effects. But if you operate across Europe, TrucksOnTheMap delivers broader coverage with deeper technology — and our Iberian presence is growing." },
    { question: "How does pricing compare?", answer: "Alpega charges €100-300/month per seat for freight board access only. TrucksOnTheMap's pay-per-use model includes the full platform suite — TMS, visibility, procurement, matching — often at lower total cost with far more functionality." },
    { question: "Can I try before committing?", answer: "Yes. We offer a full-featured pilot program with real shipments. Book a demo and we'll set up a customized trial for your specific lanes and corridors." },
  ],
};

export default config;
