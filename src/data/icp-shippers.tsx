import { ICPPageConfig } from "@/types/icp-page";
import heroShippers from "@/assets/hero-shippers.jpg";
import imgChallenge from "@/assets/shippers-challenge.png";
import imgFreightMap from "@/assets/carrier-availability-map.png";
import imgCapacitySecurity from "@/assets/capacity-security.png";
import imgCarrierVisibility from "@/assets/carrier-visibility.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Carrier Capacity Visibility Software for Transport Planners | TrucksOnTheMap",
    description: "TrucksOnTheMap gives transport planners in manufacturing a live map of carrier availability, SAP integration, and 99.9% capacity security. Stop planning freight on phone calls. GO LIVE in 7 weeks.",
    slug: "freight-management-software-for-shippers",
  },
  hero: {
    badge: "For Shippers & Transport Planners",
    headline: "You Still Plan Freight\non Phone Calls.",
    highlightedPart: "There's a Better Way.",
    subtext: "TrucksOnTheMap gives transport planners and logistics managers in manufacturing a live map of carrier capacity so you stop guessing and start booking.",
    ctaPrimary: "See Your Routes on the Map",
    ctaSecondary: "How It Works",
    image: heroShippers,
  },
  authorityBar: {
    items: [
      { value: "−7%", label: "Freight cost reduction" },
      { value: "€170K", label: "Saved year one (Saint-Gobain)" },
      { value: "99.9%", label: "Capacity security" },
      { value: "7 Weeks", label: "Guaranteed GO LIVE" },
    ],
  },
  narrative: {
    headline: "Monday Morning Still Starts With 6 Phone Calls, Doesn't It?",
    paragraphs: [
      "You're a senior logistics professional. You manage freight for a company that ships millions of euros of goods every year. And your first task every Monday morning is picking up the phone and asking the same question to the same six carriers: \"Do you have trucks available this week?\"",
      "They might know. They might not. They'll call you back. Or they won't. And you build your week's freight plan on that.",
      "SAP tells you what should happen. It tells you nothing about what will happen on the road. When capacity runs short, you fall back to spot market at 30-50% above contracted rates. When a truck is late, you find out when the driver calls. When management asks \"where are our trucks?\" the honest answer is: you don't know until you call.",
      "Most transport management problems aren't management problems. They're information asymmetry problems. Your carriers know exactly where their trucks will be next Monday. You don't. That gap is where your freight costs, your planning hours, and your professional authority quietly disappear every week.",
    ],
    image: imgChallenge,
  },
  comparison: {
    headline: "What Planning Looks Like When You Can Actually See",
    subtext: "From guessing to knowing - three shifts that change how freight gets planned.",
    items: [
      { label: "Carrier Availability", without: "Every morning you call 3 carriers per load to check who has trucks. Half don't answer. You plan freight on incomplete information.", withTotm: "A 7+ days availability forecast map shows every trusted carrier's free trucks across your routes. Book the best one in 3 minutes.", image: imgFreightMap },
      { label: "Capacity Security", without: "When capacity runs short, you pay 30-50% more on the spot market. Your budget is a fiction by Thursday.", withTotm: "99.9% capacity security. Contracted carriers pre-commit to your jobs before you need to ask. Freight cost per tonne drops.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { label: "Live Tracking", without: "You have no idea where the truck is until the driver calls. Management asks 'where are our trucks?' and you don't know.", withTotm: "Real-time freight tracking shows live position and ETA at every drop-off point. Answer delivery questions in 10 seconds.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for Transport Planners. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "See a geographic map of where every trusted carrier will have free trucks, not today, but for the next 5 days. Visual, actionable, bookable. You see capacity before you need it.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Your ERP sends the freight job. TrucksOnTheMap allocates it to the best available carrier and confirms back. No double entry. No manual handoff. The execution layer SAP was always missing.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "MassUpload", description: "Upload 50 freight jobs in a single file. The platform allocates them across your carrier network based on availability, route, and contracted rates, automatically. What took a morning takes 4 minutes.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "Your contracted carriers see your upcoming freight demand in advance. They pre-commit capacity to your jobs before you need to ask. Your freight cost per tonne drops. Your on-time delivery rate goes up.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Actual live position, actual ETA at each delivery point, visible to your transport planning team and to your customer service. Answer delivery questions in 10 seconds, not 10 minutes.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "PriceIndex - 90-Day Rate Intelligence", description: "The average, low, and spot market rate for every corridor you operate over the past 90 days. You negotiate carrier contracts from data, not instinct. You know immediately when you're overpaying.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "The Numbers That Matter to a Transport Planner",
    backgroundImage: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=85&auto=format",
    items: [
      { value: "−7%", description: "Reduction in total freight costs for manufacturers on the platform." },
      { value: "€170K", description: "Saved in year one by Saint-Gobain's logistics team across their carrier network." },
      { value: "99.9%", description: "Capacity security. Freight jobs covered by contracted carriers, every time." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Operational before your next quarterly review." },
      { value: "ISO 27001", description: "Certified. Your freight data stays within your trusted carrier network." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our carriers won't adopt another platform.\"", answer: "Carriers join TrucksOnTheMap because it eliminates their empty runs and gives them a free TMS at no cost to them. DHL and DSV are already on it. Your carriers will move faster than you expect, because this platform solves their problem too." },
      { question: "\"We're already integrated with SAP. We don't need more systems.\"", answer: "TrucksOnTheMap is the execution layer your SAP integration always needed. It receives freight jobs from SAP, allocates them to the best available carrier, and confirms back. It doesn't replace your TMS. It makes it work in the real world." },
      { question: "\"Implementation will take months and distract my team.\"", answer: "GO LIVE is guaranteed within 7 weeks. Apollo Tyres was generating ROI before their next quarterly review. Your IT team gets an API, not a year-long integration project." },
      { question: "\"How do we know carriers will share real availability data?\"", answer: "This is an invite-only trusted network, not an open load board. Your carriers share availability because they benefit directly: fewer empty runs, higher fleet utilization, better rate intelligence. They don't share with strangers. They share with you." },
      { question: "\"What about data security and GDPR compliance?\"", answer: "ISO 27001 certified. 99.9% uptime SLA. Your freight data, your carrier network, your routes, visible only to the partners you invite. No third-party data sharing." },
    ],
  },
  ctaBanner: {
    headline: "See Your Carrier Capacity on a Live Map. Book in 3 Minutes, Not 30 Calls.",
    subtext: "SAP integration included. 99.9% capacity security. GO LIVE guaranteed in 7 weeks.",
  },
  ctaFinal: {
    headline: "See Your Routes on a Live Map. Not in a Spreadsheet.",
    subtext: "Book a 30-minute demo. We'll show you a live map of carrier availability on your actual corridors, not a generic product tour.",
    ctaPrimary: "Book Your Live Map Demo",
    ctaSecondary: "GO LIVE in 7 weeks",
    backgroundImage: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;