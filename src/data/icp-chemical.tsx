import { ICPPageConfig } from "@/types/icp-page";
import heroChemical from "@/assets/hero-chemical.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "ADR-Certified Carrier Visibility for Chemical Logistics | TrucksOnTheMap",
    description: "TrucksOnTheMap gives chemical logistics managers a live map of ADR-certified carrier capacity so hazardous freight moves on compliant, tracked vehicles - with no guesswork and no regulatory exposure.",
    slug: "freight-visibility-for-chemical-industry",
  },
  hero: {
    badge: "For Chemical Logistics & HSE Managers",
    headline: "ADR Freight Doesn't Forgive\nGaps in Carrier Visibility.",
    highlightedPart: "Close Them Now.",
    subtext: "TrucksOnTheMap gives chemical industry logistics managers a live map of ADR-certified carrier capacity so hazardous freight moves on compliant, tracked vehicles - with no guesswork and no regulatory exposure.",
    ctaPrimary: "See Your Routes on the Map",
    ctaSecondary: "How It Works",
    image: heroChemical,
  },
  authorityBar: {
    items: [
      { value: "−7%", label: "Freight cost reduction" },
      { value: "99.9%", label: "Capacity security" },
      { value: "−31%", label: "Empty kilometres" },
      { value: "ISO 27001", label: "Certified platform" },
    ],
  },
  narrative: {
    headline: "You Know the Regulation. You Don't Know Where the Truck Is Right Now.",
    paragraphs: [
      "You manage logistics for a chemical manufacturer or distributor. Every shipment is classified, documented, and released to a carrier with the right ADR certification, the right vehicle equipment, the right driver training. And then it disappears into a road network you can't see.",
      "Regulatory compliance in chemical logistics doesn't end at the gate. ADR requires documented control over the entire transport chain. In practice, you're managing that chain with phone calls, email confirmations, and a nervous wait for the delivery confirmation. When something goes wrong - a vehicle breakdown, a route deviation, a delayed border crossing - you find out when it's already a problem.",
      "The deeper issue isn't carrier quality. Your approved carriers know what they're doing. The problem is that you can't see their ADR-certified capacity in advance. You find out a certified tanker is unavailable on your corridor on the day you need to book - not five days earlier when you could have acted.",
      "That gap between what's available and what's visible is where your planning hours, your regulatory exposure, and your safety margin quietly disappear.",
    ],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What Compliant Freight Looks Like When You Can Actually See",
    subtext: "Three shifts that close the gap between ADR requirements and freight execution.",
    items: [
      { label: "ADR Carrier Availability", without: "You call ADR-certified carriers every week to check which vehicles are available on your lanes. Half confirm late. You plan with incomplete information and higher risk.", withTotm: "A 5-day availability map shows every ADR-certified carrier's compliant capacity across your corridors. Book the right vehicle - certified, equipped, documented - in 3 minutes.", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80&auto=format" },
      { label: "Regulatory Continuity", without: "When an ADR carrier drops a booking, your fallback is the spot market. One non-certified substitution is one regulatory event - and one HSE investigation.", withTotm: "99.9% capacity security. Contracted ADR carriers pre-commit to your lanes. Compliant capacity guaranteed. No uncertified substitutions. No exposure.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { label: "Live Shipment Monitoring", without: "You have no real-time position data on hazardous freight in transit. You find out about delays when the driver calls - or when the consignee does.", withTotm: "Real-time tracking with live position and ETA at every drop-off point. Know where your ADR freight is at every moment - without waiting for a call.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for Chemical Logistics Teams. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "See ADR-certified carrier capacity across your lanes - 5 days forward, by corridor. Know what compliant vehicles are available before you need to book them.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with enterprise resource planning and transport management systems. Freight bookings reflect in ERP without manual data entry. Full hazmat documentation trail maintained.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "MassUpload", description: "Bulk job creation for high-frequency chemical distribution cycles. Upload entire delivery schedules across multiple ADR corridors in a single action.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "ADR-certified carrier pre-commitment workflows that guarantee compliant coverage before the booking window closes. No uncertified substitutions.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time for every hazardous freight shipment. Know where your ADR freight is at every moment without waiting for a call.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "PriceIndex - 90-Day Rate Intelligence", description: "Market rate benchmarking across your active ADR corridors. Validate certified carrier rate cards against current market conditions before contract renewal.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "Proven Results Across Chemical Supply Chains",
    backgroundImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=85&auto=format",
    items: [
      { value: "−7%", description: "Reduction in total freight costs for chemical shippers using ADR-certified carrier visibility." },
      { value: "−31%", description: "Reduction in empty kilometres across the ADR-certified carrier network." },
      { value: "99.9%", description: "Capacity security. Hazardous freight covered by pre-committed certified carriers, every corridor." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Operational before your next compliance audit." },
      { value: "ISO 27001", description: "Certified. Enterprise-grade security and GDPR compliance for chemical freight data." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our ADR carriers are pre-approved through a formal qualification process. We can't just add platforms.\"", answer: "TrucksOnTheMap doesn't replace your qualification process. It makes your approved carrier list visible and executable. Only carriers already on your approved list appear on your availability map. The qualification process remains yours." },
      { question: "\"We're already integrated with SAP TM for hazmat documentation. We don't want more systems.\"", answer: "TrucksOnTheMap integrates directly with SAP and Oracle OTM. It adds the real-time ADR-certified carrier availability layer your TMS was never designed to provide. Implementation is scoped and delivered within seven weeks." },
      { question: "\"How does the platform handle ADR class filtering when we're booking across multiple UN numbers?\"", answer: "Carrier profiles on the platform include ADR certification class, vehicle equipment type, and driver qualification data. Filtering by ADR class is built into the availability map. You see only compliant capacity for the specific classification you need." },
      { question: "\"What happens if a carrier's ADR certification lapses mid-contract?\"", answer: "Carrier certification status is managed on the platform. When a certification lapses, that carrier's capacity no longer appears on your availability map for the affected ADR classes. The platform reflects certification changes in real time." },
      { question: "\"What about GDPR and data sovereignty when freight data crosses international borders?\"", answer: "TrucksOnTheMap is ISO 27001 certified and GDPR compliant. Data processing agreements are available for all carrier and shipper relationships. Cross-border data flows operate under standard contractual clauses." },
    ],
  },
  ctaBanner: {
    headline: "ADR-Certified Trucks. Confirmed Capacity. Live Tracking. Every Corridor.",
    subtext: "Compliant carrier visibility. 99.9% capacity security. Real-time tracking. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Your ADR Process Is Rigorous.\nYour Freight Visibility Should Be Too.",
    subtext: "Book a 30-minute demo. We'll show you a live map of ADR-certified carrier availability on your actual corridors - not a generic product tour.",
    ctaPrimary: "Book Your Live Map Demo",
    ctaSecondary: "Calculate My ROI",
    backgroundImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;
