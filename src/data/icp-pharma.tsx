import { ICPPageConfig } from "@/types/icp-page";
import heroPharma from "@/assets/hero-pharma.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "GDP-Compliant Carrier Visibility for Pharma Supply Chains | TrucksOnTheMap",
    description: "TrucksOnTheMap gives pharmaceutical supply chain managers a live map of qualified carrier capacity so temperature-sensitive freight moves on compliant trucks - tracked in real time, every kilometre.",
    slug: "freight-visibility-for-pharma",
  },
  hero: {
    badge: "For Pharma Logistics & Supply Chain Managers",
    headline: "GDP Compliance Doesn't End\nat the Warehouse Door.",
    highlightedPart: "It Continues on the Road.",
    subtext: "TrucksOnTheMap gives pharmaceutical supply chain managers a live map of qualified carrier capacity so temperature-sensitive freight moves on compliant trucks - tracked in real time, every kilometre.",
    ctaPrimary: "See Your Routes on the Map",
    ctaSecondary: "How It Works",
    image: heroPharma,
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
    headline: "Your QA Team Approved the Carrier. Nobody Knows Where the Truck Is Right Now.",
    paragraphs: [
      "You manage logistics for a pharmaceutical manufacturer or distributor. Every shipment you release has passed quality control, been packed to specification, and released by QP sign-off. And then it leaves your facility in a truck you can't see.",
      "GDP requires documented control over the cold chain - from dispatch to delivery. In practice, you're relying on carrier confirmation calls, driver WhatsApp messages, and temperature logger downloads that arrive after the goods do. When a deviation happens en route, you find out at the destination. The investigation that follows takes weeks. The batch may already be distributed.",
      "Your approved carrier list is in the QMS. Real-time GPS position of those carriers' trucks is not. Your transport manager knows which carriers are GDP-qualified. They don't know which of those carriers has a reefer truck available on your lane next Monday until they call and ask.",
      "That's not a transport problem. That's a visibility problem - and in pharma, visibility problems become quality events.",
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What Compliant Freight Looks Like When You Can Actually See",
    subtext: "Three shifts that close the gap between GDP requirements and freight execution.",
    items: [
      { label: "Qualified Carrier Availability", without: "Your transport planner calls approved carriers every Monday to check reefer availability. Two can't confirm until Wednesday. You plan on incomplete data - and compliance risk.", withTotm: "A 5-day availability map shows every GDP-qualified carrier's free reefer capacity across your lanes. Book the right truck - compliant, documented, confirmed - in 3 minutes.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80&auto=format" },
      { label: "Cold Chain Continuity", without: "When a qualified carrier drops a booking, your backup is an unvetted spot market carrier. One compliant carrier short means one non-compliant deviation report.", withTotm: "99.9% capacity security. Contracted GDP-qualified carriers pre-commit to your lanes. Cold chain continuity guaranteed. No unqualified substitutions.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { label: "Real-Time Cold Chain Monitoring", without: "You find out about a temperature excursion when the driver arrives and hands over the data logger. The batch is at the customer. The deviation has already happened.", withTotm: "Real-time freight tracking shows live position and ETA per delivery point. Know what's happening on the road before it becomes a quality event.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for Pharma Supply Chain Teams. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "See which GDP-qualified carriers have compliant capacity on your lanes - 5 days out, before you need to confirm the shipment. Visual, auditable, bookable.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with enterprise resource planning and transport management systems. Freight bookings reflect in ERP without manual data entry. Full audit trail maintained.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "MassUpload", description: "Bulk job creation for high-frequency pharma distribution cycles. Upload entire delivery schedules across multiple lanes in a single action.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "GDP-qualified carrier pre-commitment workflows that guarantee compliant coverage before the booking window closes. No unqualified substitutions.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time for every temperature-sensitive shipment. Know what's happening on the road before it becomes a quality event.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "PriceIndex - 90-Day Rate Intelligence", description: "Market rate benchmarking across your active corridors. Validate GDP-carrier rate cards against current market conditions before contract renewal.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "Proven Results Across Pharmaceutical Supply Chains",
    backgroundImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=85&auto=format",
    items: [
      { value: "−7%", description: "Reduction in total freight costs for pharma shippers using qualified carrier visibility." },
      { value: "−31%", description: "Reduction in empty kilometres across the GDP-qualified carrier network." },
      { value: "99.9%", description: "Capacity security. Temperature-sensitive freight covered by pre-committed qualified carriers." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Operational before your next audit cycle." },
      { value: "ISO 27001", description: "Certified. Enterprise-grade security and GDPR compliance for pharmaceutical freight data." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our approved carrier list is managed by QA. We can't onboard new platforms without a qualification process.\"", answer: "TrucksOnTheMap doesn't replace your QA-approved carrier list. It makes it visible and executable. Only carriers already on your approved list appear on your availability map. The qualification process remains yours." },
      { question: "\"We already have a validated TMS. Adding systems requires change control.\"", answer: "TrucksOnTheMap integrates with your existing TMS via SAP and Oracle OTM interfaces. It adds the real-time qualified carrier availability layer your TMS was never designed to provide. Implementation is scoped and delivered within seven weeks." },
      { question: "\"How does the platform support GDP documentation and audit trail requirements?\"", answer: "Every booking, confirmation, and tracking event on the platform is logged with timestamps and user attribution. Export-ready for audit purposes. The platform supports your existing GDP documentation workflow, it doesn't replace it." },
      { question: "\"What happens if a carrier's qualification status changes mid-contract?\"", answer: "Carrier qualification status is managed by your QA team. When a carrier is removed from your approved list, their availability no longer appears on your map. The platform reflects your qualification decisions in real time." },
      { question: "\"What about data security and GDPR for patient-adjacent freight data?\"", answer: "TrucksOnTheMap is ISO 27001 certified and GDPR compliant. Freight data remains within your contracted carrier network. Data processing agreements are available for all relationships on the platform." },
    ],
  },
  ctaBanner: {
    headline: "Compliant Trucks. Confirmed Capacity. Cold Chain Visibility. Every Kilometre.",
    subtext: "GDP-qualified carrier visibility. 99.9% capacity security. Real-time tracking. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Your QA Process Is Rigorous.\nYour Freight Visibility Should Be Too.",
    subtext: "Book a 30-minute demo. We'll show you a live map of GDP-qualified carrier availability on your actual corridors - not a generic product tour.",
    ctaPrimary: "Book Your Live Map Demo",
    ctaSecondary: "Calculate My ROI",
    backgroundImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;
