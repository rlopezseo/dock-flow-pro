import { ICPPageConfig } from "@/types/icp-page";
import heroRetailFmcg from "@/assets/hero-retail-fmcg.jpg";
import imgDc from "@/assets/ind-retail-dc.jpg";
import imgShelves from "@/assets/ind-retail-shelves.jpg";
import imgDelivery from "@/assets/ind-retail-delivery.jpg";
import imgFullVisibility from "@/assets/cap-full-visibility-cropped.png";

const config: ICPPageConfig = {
  meta: {
    title: "Carrier Capacity Visibility for Retail & FMCG Supply Chains | TrucksOnTheMap",
    description: "TrucksOnTheMap gives retail and FMCG supply chain planners a live map of carrier capacity so shelves are full on promotion day - not three days after. 99.9% capacity security.",
    slug: "freight-visibility-for-retail-and-fmcg",
  },
  hero: {
    badge: "For Retail & FMCG",
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
    headline: "The Campaign Is Planned. The Carrier Found Out This Morning.",
    paragraphs: [
      "You've coordinated the promotion, confirmed the slot with the retailer, briefed the warehouse. The only thing between a successful campaign and an empty shelf is getting the product there on time. And freight is still the variable you can't control.",
      "You don't know whether your carrier has trucks on that corridor until you call. When capacity fails mid-campaign, you find out at the last moment - and the spot market is your only option. Penalty charges, lost shelf space, delisted SKUs compound fast.",
      "TrucksOnTheMap makes carrier capacity visible before you need it. A five-day availability map across your distribution corridors means you secure trucks the week before peak, not the night before.",
    ],
    image: imgDc,
  },
  comparison: {
    headline: "What Planning Looks Like When You Can Actually See",
    subtext: "Three shifts that turn reactive freight scrambles into proactive supply chain execution.",
    items: [
      { label: "Promotion Readiness", without: "You confirm carrier capacity two days before the promotion. By then, the best trucks are gone. You scramble or you pay spot rates.", withTotm: "A 5-day availability map shows carrier capacity across your distribution corridors before you need to commit. Secure trucks the week before peak. Not the night before.", image: imgDc },
      { label: "Replenishment Continuity", without: "Mid-campaign, a carrier drops a run. You find out when the depot calls. Shelves empty. Retailer penalises. Margin evaporates.", withTotm: "99.9% capacity security. Contracted carriers pre-commit to your replenishment schedule for the full campaign window. No gaps. No spot market exposure.", image: imgShelves },
      { label: "Inbound & Outbound Visibility", without: "You have no idea when the truck will arrive at the DC or the store. Your answer to the retailer is: \"We're checking.\"", withTotm: "Live tracking with ETA per drop-off point. Confirm delivery windows to retailers in 10 seconds. Not after three calls.", image: imgDelivery },
    ],
  },
  features: {
    headline: "Built for Supply Chain Planners. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "See carrier capacity across your distribution network - 5 days forward, by corridor. Know what's available before the promotion window opens.", image: imgFullVisibility },
      { title: "99.9% Capacity Security", description: "Contracted carriers pre-commit to your replenishment and promotion schedules. Spot market exposure reduced to planned exceptions only.", image: imgShelves },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time for every shipment, every delivery point. Answer retailer delivery questions in 10 seconds, not 10 minutes.", image: imgDelivery },
      { title: "MassUpload", description: "Bulk job creation for high-frequency replenishment cycles. Upload entire promotion delivery schedules across multiple DCs in a single action.", image: imgDc },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with ERP and WMS. Freight bookings reflect in your systems without manual data entry. Full delivery documentation maintained.", image: imgShelves },
      { title: "PriceIndex — 90-Day Rate Intelligence", description: "Market rate benchmarking across your distribution corridors. Validate carrier rate cards against current conditions before contract renewal.", image: imgDelivery },
    ],
  },
  stats: {
    headline: "Proven Results Across Retail and FMCG Supply Chains",
    backgroundImage: imgDc,
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
    backgroundImage: imgShelves,
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
    backgroundImage: imgDelivery,
  },
  sectionImages: {
    narrative: imgDc,
    comparison: imgShelves,
    features: imgDelivery,
  },
};

export default config;
