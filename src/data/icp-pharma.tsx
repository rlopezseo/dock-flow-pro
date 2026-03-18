import { ICPPageConfig } from "@/types/icp-page";
import heroPharma from "@/assets/hero-pharma.jpg";
import imgColdchain from "@/assets/ind-pharma-coldchain.jpg";
import imgQa from "@/assets/ind-pharma-qa.jpg";
import imgTransit from "@/assets/ind-pharma-transit.jpg";
import imgFullVisibility from "@/assets/cap-full-visibility-cropped.png";
import imgDashboard from "@/assets/cap-dashboard.jpg";
import imgNetwork from "@/assets/cap-network.jpg";
import imgIntegrations from "@/assets/cap-integrations.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "GDP-Compliant Carrier Visibility for Pharma Supply Chains | TrucksOnTheMap",
    description: "TrucksOnTheMap gives pharmaceutical supply chain managers a live map of qualified carrier capacity so temperature-sensitive freight moves on compliant trucks - tracked in real time, every kilometre.",
    slug: "freight-visibility-for-pharma",
  },
  hero: {
    badge: "For Pharmaceutical Industry",
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
    headline: "QA Approved the Carrier. Nobody Knows Where the Truck Is.",
    paragraphs: [
      "Every shipment you release has passed quality control and QP sign-off. Then it leaves your facility in a truck you can't see. GDP requires documented cold chain control from dispatch to delivery - but in practice, you rely on driver WhatsApp messages and temperature loggers that arrive after the goods do.",
      "Your approved carrier list is in the QMS. Real-time GPS position of those carriers' trucks is not. Your transport manager knows which carriers are GDP-qualified - but not which has a reefer available on your lane next Monday until they call.",
      "TrucksOnTheMap makes qualified carrier capacity visible. A five-day availability map shows GDP-certified reefer capacity across your lanes. Book compliant trucks in three minutes, not three phone calls.",
    ],
    image: imgQa,
  },
  comparison: {
    headline: "What Compliant Freight Looks Like When You Can Actually See",
    subtext: "Three shifts that close the gap between GDP requirements and freight execution.",
    items: [
      { label: "Qualified Carrier Availability", without: "Your transport planner calls approved carriers every Monday to check reefer availability. Two can't confirm until Wednesday. You plan on incomplete data - and compliance risk.", withTotm: "A 5-day availability map shows every GDP-qualified carrier's free reefer capacity across your lanes. Book the right truck - compliant, documented, confirmed - in 3 minutes.", image: imgNetwork },
      { label: "Cold Chain Continuity", without: "When a qualified carrier drops a booking, your backup is an unvetted spot market carrier. One compliant carrier short means one non-compliant deviation report.", withTotm: "99.9% capacity security. Contracted GDP-qualified carriers pre-commit to your lanes. Cold chain continuity guaranteed. No unqualified substitutions.", image: imgDashboard },
      { label: "Real-Time Cold Chain Monitoring", without: "You find out about a temperature excursion when the driver arrives and hands over the data logger. The batch is at the customer. The deviation has already happened.", withTotm: "Real-time freight tracking shows live position and ETA per delivery point. Know what's happening on the road before it becomes a quality event.", image: imgIntegrations },
    ],
  },
  features: {
    headline: "Built for Pharma Supply Chain Teams. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "See which GDP-qualified carriers have compliant capacity on your lanes - 5 days out, before you need to confirm the shipment. Visual, auditable, bookable.", image: imgFullVisibility },
      { title: "99.9% Capacity Security", description: "GDP-qualified carrier pre-commitment workflows that guarantee compliant coverage before the booking window closes. No unqualified substitutions.", image: imgQa },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time for every temperature-sensitive shipment. Know what's happening on the road before it becomes a quality event.", image: imgTransit },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with ERP and TMS. Freight bookings reflect in your systems without manual data entry. Full audit trail maintained.", image: imgQa },
      { title: "MassUpload", description: "Upload entire shipment schedules in a single file. The platform allocates them across your GDP-qualified carrier network by corridor and availability.", image: imgTransit },
      { title: "PriceIndex — 90-Day Rate Intelligence", description: "Market rate benchmarking across your pharma corridors. Validate qualified carrier rate cards against current conditions before contract renewal.", image: imgColdchain },
    ],
  },
  stats: {
    headline: "Proven Results Across Pharmaceutical Supply Chains",
    backgroundImage: imgTransit,
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
    backgroundImage: imgColdchain,
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
    backgroundImage: imgTransit,
  },
  sectionImages: {
    narrative: imgQa,
    comparison: imgDashboard,
    features: imgTransit,
  },
};

export default config;
