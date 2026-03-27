import { ICPPageConfig } from "@/types/icp-page";
import heroIndustrialAutomotive from "@/assets/hero-industrial-automotive.jpg";
import imgPlanning from "@/assets/ind-automotive-planning.jpg";
import imgJit from "@/assets/ind-automotive-jit.jpg";
import imgTracking from "@/assets/ind-automotive-tracking.jpg";
import imgAllOnOne from "@/assets/cap-all-on-one-industrial-cropped.png";
import imgFullVisibility from "@/assets/cap-full-visibility-cropped.png";
import imgCarrierAvailability from "@/assets/carrier-availability-map.png";

const config: ICPPageConfig = {
  meta: {
    title: "Carrier Capacity Visibility for Industrial & Automotive Logistics | TrucksOnTheMap",
    description: "TrucksOnTheMap gives industrial manufacturing and automotive logistics managers a live map of carrier availability, SAP integration, and 99.9% capacity security for just-in-time supply chains.",
    slug: "freight-visibility-for-industrial-and-automotive",
  },
  hero: {
    badge: "For Industrial & Automotive",
    headline: "Your ERP Plans Production.\nNot Carrier Availability.",
    highlightedPart: "We Fix That Gap.",
    subtext: "TrucksOnTheMap gives industrial and automotive logistics managers a live map of contracted carrier availability - five days forward, across every active corridor - so inbound components arrive before the line stops.",
    ctaPrimary: "See Your Capacity Map",
    ctaSecondary: "How It Works",
    image: heroIndustrialAutomotive,
  },
  authorityBar: {
    items: [
      { value: "−7%", label: "Freight cost per unit" },
      { value: "−31%", label: "Empty kilometres" },
      { value: "99.9%", label: "Capacity security" },
      { value: "ISO 27001", label: "Certified platform" },
    ],
  },
  narrative: {
    headline: "Your ERP Models Production. Not Carrier Capacity.",
    paragraphs: [
      "SAP tells you what needs to ship. It tells you nothing about which carriers have trucks available on your corridors next Tuesday. That gap is where production delays begin.",
      "The morning call round - four to eight carriers, contacted sequentially, confirmations arriving over two to four hours - means the optimal booking window for the best trucks on priority lanes has often closed by the time you have the full picture.",
      "TrucksOnTheMap eliminates the call round. A five-day forecast map shows contracted carrier capacity by corridor, vehicle class, and load type. Book inbound and outbound in under ten minutes.",
    ],
    image: imgPlanning,
  },
  comparison: {
    headline: "What Planning Looks Like When You Can Actually See",
    subtext: "Three shifts that close the gap between production scheduling and freight execution.",
    items: [
      { label: "Carrier Availability", without: "Industrial logistics planners allocate freight based on carrier confirmations collected through sequential phone calls. Confirmations arrive incomplete, arrive late, or do not arrive. Planning proceeds on partial data.", withTotm: "A geographic availability map shows every contracted carrier's free vehicles across inbound component corridors and outbound finished goods lanes - not for today, but for the next five working days. Planners see capacity before they need it.", image: imgPlanning },
      { label: "Capacity Security", without: "Spot market bookings - triggered when contracted carriers cannot confirm capacity in time - cost between 30 and 50 percent above contracted rates. On high-volume corridors running daily or weekly cycles, repeated spot exposure collapses the freight cost model.", withTotm: "Carriers confirm availability against upcoming jobs before the planner needs to ask. Capacity security reaches 99.9 percent across active platform users. Freight cost per unit drops. The spot market becomes an exception, not a weekly occurrence.", image: imgJit },
      { label: "Real-Time Tracking", without: "Production lines require inbound components to arrive within defined time windows. OEM partners require outbound deliveries at confirmed dock slots. The logistics planner needs current shipment position data - not end-of-day confirmations, not driver callbacks.", withTotm: "Live GPS position and calculated ETA for every drop-off point on the route. When a component delivery is running forty minutes behind schedule, the planner knows before the line supervisor does. Delivery confirmations take ten seconds.", image: imgTracking },
    ],
  },
  features: {
    headline: "Built for Industrial and Automotive Logistics. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "A geographic map of contracted carrier capacity across inbound and outbound corridors, updated continuously, covering a five-day forward window. Organised by vehicle class, load type, and lane.", image: imgFullVisibility },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with enterprise resource planning and transport management systems. Freight bookings reflect in ERP without manual data entry. No parallel workflows.", image: imgAllOnOne },
      { title: "99.9% Capacity Security", description: "Contracted carrier pre-commitment workflows that close the gap between scheduled demand and confirmed supply before the booking window opens.", image: imgAllOnOne },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position data and arrival time calculation for every shipment, every drop-off point, updated continuously throughout transit.", image: imgAllOnOne },
      { title: "MassUpload", description: "Upload entire production schedules in a single file. The platform allocates shipments across your carrier network by corridor, vehicle class, and availability.", image: imgAllOnOne },
      { title: "PriceIndex — 90-Day Rate Intelligence", description: "Market rate benchmarking across your inbound and outbound corridors. Validate carrier rate cards against current market conditions before contract renewal.", image: imgAllOnOne },
    ],
  },
  stats: {
    headline: "Proven Results Across Industrial and Automotive Supply Chains",
    backgroundImage: imgTracking,
    items: [
      { value: "−7%", description: "Reduction in freight costs per unit shipped across industrial and automotive manufacturers on the platform." },
      { value: "−31%", description: "Reduction in empty kilometres driven across the carrier network. Fewer deadhead runs mean lower cost per tonne." },
      { value: "99.9%", description: "Capacity security. Inbound components and outbound finished goods covered by contracted carriers, every production week." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Operational before your next quarterly review." },
      { value: "ISO 27001", description: "Certified. Enterprise-grade security and compliance for your freight and production data." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: imgPlanning,
  },
  objections: {
    headline: "Common Questions",
    items: [
      { question: "\"Our tier-1 suppliers manage their own outbound carriers. We don't control that leg.\"", answer: "Supplier-managed transport is a separate freight flow. TrucksOnTheMap covers the legs your team books - inbound collection from supplier facilities and outbound dispatch from your plant. Both are visible on the same map." },
      { question: "\"We're integrated with SAP TM. We cannot add platforms that require parallel data entry.\"", answer: "TrucksOnTheMap integrates directly with SAP and Oracle OTM. Bookings made on the platform write back to your TMS. No dual entry. Implementation is scoped and delivered within seven weeks." },
      { question: "\"Our procurement team negotiates carrier contracts annually. This is not a day-to-day operations decision.\"", answer: "Carrier contract performance - actual vs contracted rate, capacity fulfilment rate, empty-run frequency - is tracked and reported on the platform. That data strengthens the procurement team's position in the next carrier negotiation." },
      { question: "\"How do we know carriers will share real availability data and not just confirm everything?\"", answer: "Carriers on the platform have a financial incentive to share accurate availability: confirmed jobs they cannot fulfil damage their performance score and reduce future job allocation. Accuracy is self-reinforcing." },
      { question: "\"What about ISO 27001 and GDPR compliance for production and freight data?\"", answer: "TrucksOnTheMap is ISO 27001 certified. Freight data remains within your contracted carrier network. No data is shared with carriers outside your approved list." },
    ],
  },
  ctaBanner: {
    headline: "See Carrier Capacity Across Your Inbound and Outbound Corridors. Live.",
    subtext: "SAP integration included. 99.9% capacity security. GO LIVE guaranteed in 7 weeks.",
  },
  ctaFinal: {
    headline: "Your Production Schedule Is Precise.\nYour Freight Visibility Should Be Too.",
    subtext: "Book a 30-minute demo. We'll show you a live map of carrier availability on your actual corridors - not a generic product tour.",
    ctaPrimary: "Book Your Live Map Demo",
    ctaSecondary: "Calculate My ROI",
    backgroundImage: imgTracking,
  },
  sectionImages: {
    narrative: imgPlanning,
    comparison: imgJit,
    features: imgAllOnOne,
  },
};

export default config;
