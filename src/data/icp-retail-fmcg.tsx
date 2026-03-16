import { ICPPageConfig } from "@/types/icp-page";
import heroRetailFmcg from "@/assets/hero-retail-fmcg.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Carrier Capacity Visibility for Retail & FMCG Supply Chains | TrucksOnTheMap",
    description: "TrucksOnTheMap gives retail and FMCG supply chain planners a live map of carrier capacity so shelves are full on promotion day - not three days after. 99.9% capacity security.",
    slug: "freight-visibility-for-retail-and-fmcg",
  },
  hero: {
    badge: "For Retail & FMCG Supply Chain Teams",
    headline: "Promotions Don't Wait\nfor Trucks. Yours Are Late.",
    highlightedPart: "Fix That Today.",
    subtext: "TrucksOnTheMap gives retail and FMCG supply chain planners a live map of carrier capacity so your shelves are full on promotion day - not three days after.",
    ctaPrimary: "See Your Routes on the Map",
    ctaSecondary: "How It Works",
    image: heroRetailFmcg,
  },
  authorityBar: {
    items: [
      { value: "−7%", label: "Freight cost reduction" },
      { value: "−31%", label: "Empty kilometres" },
      { value: "99.9%", label: "Capacity security" },
      { value: "7 Weeks", label: "Guaranteed GO LIVE" },
    ],
  },
  narrative: {
    headline: "You Planned the Campaign Six Weeks Ago. The Carrier Found Out This Morning.",
    paragraphs: [
      "You run supply chain for a retail or FMCG brand. You've coordinated the promotion, confirmed the slot with the retailer, briefed the warehouse. The only thing standing between a successful campaign and an empty shelf is getting the product there on time.",
      "And yet freight is still the variable you can't control. You know when the promotion starts. You don't know whether your carrier has trucks available on that corridor that week until you call them. You don't know if capacity will hold through the peak until it doesn't. When it fails, you find out at the last moment - and by then, the spot market is your only option.",
      "Retail doesn't forgive late deliveries. Penalty charges, lost shelf space, delisted SKUs - the cost of a missed delivery window compounds fast. The problem isn't your logistics team. It's that freight capacity is invisible until it becomes a crisis.",
      "TrucksOnTheMap makes carrier capacity visible before you need it. A five-day availability map across your distribution corridors means you secure trucks the week before peak, not the night before.",
    ],
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What Planning Looks Like When You Can Actually See",
    subtext: "Three shifts that turn reactive freight scrambles into proactive supply chain execution.",
    items: [
      { label: "Promotion Readiness", without: "You confirm carrier capacity two days before the promotion. By then, the best trucks are gone. You scramble or you pay spot rates.", withTotm: "A 5-day availability map shows carrier capacity across your distribution corridors before you need to commit. Secure trucks the week before peak. Not the night before.", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80&auto=format" },
      { label: "Replenishment Continuity", without: "Mid-campaign, a carrier drops a run. You find out when the depot calls. Shelves empty. Retailer penalises. Margin evaporates.", withTotm: "99.9% capacity security. Contracted carriers pre-commit to your replenishment schedule for the full campaign window. No gaps. No spot market exposure.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { label: "Inbound & Outbound Visibility", without: "You have no idea when the truck will arrive at the DC or the store. Your answer to the retailer is: \"We're checking.\"", withTotm: "Live tracking with ETA per drop-off point. Confirm delivery windows to retailers in 10 seconds. Not after three calls.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for Supply Chain Planners. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "See carrier capacity across your distribution network - 5 days forward, by corridor. Know what's available before the promotion window opens.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with enterprise resource planning and transport management systems. Freight bookings reflect in ERP without manual data entry. No parallel workflows.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "MassUpload", description: "Bulk job creation for high-frequency replenishment cycles. Upload entire promotion delivery schedules across multiple DCs in a single action.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "Contracted carriers pre-commit to your replenishment and promotion schedules. Spot market exposure reduced to planned exceptions only.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time for every shipment, every delivery point. Answer retailer delivery questions in 10 seconds, not 10 minutes.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "PriceIndex - 90-Day Rate Intelligence", description: "Market rate benchmarking across your active corridors. Know whether your contracted rates reflect current conditions before the next carrier negotiation.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "Proven Results Across Retail and FMCG Supply Chains",
    backgroundImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=85&auto=format",
    items: [
      { value: "−7%", description: "Reduction in total freight costs for retail and FMCG shippers on the platform." },
      { value: "−31%", description: "Reduction in empty kilometres across the carrier network. Lower deadhead rates mean lower cost per pallet." },
      { value: "99.9%", description: "Capacity security. Promotion and replenishment freight covered by contracted carriers, every campaign." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Operational before your next promotion cycle." },
      { value: "ISO 27001", description: "Certified. Enterprise-grade security and compliance for your freight and retail data." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our carriers already have preferred status agreements. We can't just switch systems.\"", answer: "TrucksOnTheMap doesn't replace your carrier agreements. It makes them visible and executable. Your preferred carriers join the platform at no cost and get fewer empty runs in return. The relationship stays yours. The visibility becomes shared." },
      { question: "\"We're already integrated with our WMS and ERP. We don't need more.\"", answer: "TrucksOnTheMap integrates directly with SAP and Oracle OTM. It adds the real-time carrier availability and tracking layer your existing systems were never designed to provide. One additional screen for your planner. No parallel workflows." },
      { question: "\"Seasonality makes our freight too unpredictable to model 5 days out.\"", answer: "The 5-day availability map doesn't predict your demand. It shows you which carriers have trucks available on your corridors. When demand spikes, you see capacity options before the phone round. When it drops, you avoid overcommitting." },
      { question: "\"How do we manage carrier data across different retail customer accounts?\"", answer: "Each retail account operates within a separate data environment on the platform. Carrier capacity data is visible only to the operations team managing that account. Cross-account data exposure is not possible by platform design." },
      { question: "\"What about GDPR when we share delivery data with retail partners?\"", answer: "TrucksOnTheMap is ISO 27001 certified and GDPR compliant. Data processing agreements are available for all carrier and retailer relationships on the platform." },
    ],
  },
  ctaBanner: {
    headline: "Full Shelves on Promotion Day. Not Three Days After.",
    subtext: "5-day carrier visibility. 99.9% capacity security. Real-time tracking. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Your Promotion Is Planned.\nYour Freight Should Be Too.",
    subtext: "Book a 30-minute demo. We'll show you a live map of carrier availability on your actual distribution corridors - not a generic product tour.",
    ctaPrimary: "Book Your Live Map Demo",
    ctaSecondary: "Calculate My ROI",
    backgroundImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;
