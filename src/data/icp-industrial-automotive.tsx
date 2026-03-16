import { ICPPageConfig } from "@/types/icp-page";
import heroIndustrialAutomotive from "@/assets/hero-industrial-automotive.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Carrier Capacity Visibility for Industrial & Automotive Logistics | TrucksOnTheMap",
    description: "TrucksOnTheMap gives industrial manufacturing and automotive logistics managers a live map of carrier availability, SAP integration, and 99.9% capacity security for just-in-time supply chains.",
    slug: "freight-visibility-for-industrial-and-automotive",
  },
  hero: {
    badge: "For Industrial Manufacturing & Automotive Production",
    headline: "Your ERP Plans Production.\nNot Carrier Availability.",
    highlightedPart: "We Fix That Gap.",
    subtext: "TrucksOnTheMap gives industrial and automotive logistics managers a live geographic map of contracted carrier availability - five days forward, across every active corridor - so inbound components arrive before the line stops and outbound shipments leave before the dock fills.",
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
    headline: "The Information Gap Between Your ERP and Your Carrier Network Is Where Production Delays Begin",
    paragraphs: [
      "Industrial and automotive logistics managers operate enterprise resource planning systems - SAP, Oracle, or equivalent - that model production schedules, component demand, and outbound dispatch timing with precision. What ERP systems do not model is the real-time availability of the road freight capacity required to execute those schedules.",
      "Carrier availability in road freight is a dynamic attribute. A contracted carrier operating on a Stuttgart-to-Barcelona corridor may have three available tractor units on a given Monday and zero on the following Wednesday. That availability is known to the carrier's fleet manager the moment a prior booking is confirmed. It is not known to the industrial logistics planner until they call and ask.",
      "The standard response to this information asymmetry is the morning call round: four to eight contracted carriers, contacted sequentially, asked the same question about the same corridors, producing confirmations that arrive across a two-to-four-hour window. By the time the planner has complete availability data, the optimal booking window for the cheapest certified trucks on the highest-priority lanes has often closed.",
      "TrucksOnTheMap eliminates the call round by making carrier availability a visible, bookable data layer. The platform aggregates truck availability from contracted carriers into a five-day forecast map organised by corridor, load type, and vehicle class. A transport planner managing inbound aluminium castings from a Czech supplier and outbound finished axle assemblies to a French OEM sees both carrier pools on the same map, books both in under ten minutes, and moves to the next task.",
    ],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What Planning Looks Like When You Can Actually See",
    subtext: "Three shifts that close the gap between production scheduling and freight execution.",
    items: [
      { label: "Carrier Availability", without: "Industrial logistics planners allocate freight based on carrier confirmations collected through sequential phone calls. Confirmations arrive incomplete, arrive late, or do not arrive. Planning proceeds on partial data.", withTotm: "A geographic availability map shows every contracted carrier's free vehicles across inbound component corridors and outbound finished goods lanes - not for today, but for the next five working days. Planners see capacity before they need it.", image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80&auto=format" },
      { label: "Capacity Security", without: "Spot market bookings - triggered when contracted carriers cannot confirm capacity in time - cost between 30 and 50 percent above contracted rates. On high-volume corridors running daily or weekly cycles, repeated spot exposure collapses the freight cost model.", withTotm: "Carriers confirm availability against upcoming jobs before the planner needs to ask. Capacity security reaches 99.9 percent across active platform users. Freight cost per unit drops. The spot market becomes an exception, not a weekly occurrence.", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80&auto=format" },
      { label: "Real-Time Tracking", without: "Production lines require inbound components to arrive within defined time windows. OEM partners require outbound deliveries at confirmed dock slots. The logistics planner needs current shipment position data - not end-of-day confirmations, not driver callbacks.", withTotm: "Live GPS position and calculated ETA for every drop-off point on the route. When a component delivery is running forty minutes behind schedule, the planner knows before the line supervisor does. Delivery confirmations take ten seconds.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for Industrial and Automotive Logistics. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "A geographic map of contracted carrier capacity across inbound and outbound corridors, updated continuously, covering a five-day forward window. Organised by vehicle class, load type, and lane. Visual, filterable, bookable without leaving the interface.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with enterprise resource planning and transport management systems. Freight bookings made on TrucksOnTheMap reflect in ERP without manual data entry. No parallel workflows. No reconciliation overhead.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "MassUpload", description: "Bulk job creation for high-frequency dispatch operations. Industrial shippers running daily or weekly cycles across multiple plants upload entire job schedules in a single action.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "Contracted carrier pre-commitment workflows that close the gap between scheduled demand and confirmed supply before the booking window opens.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position data and arrival time calculation for every shipment, every drop-off point, updated continuously throughout transit.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "PriceIndex - 90-Day Rate Intelligence", description: "Market rate benchmarking across your active corridors. Know whether your contracted rates reflect current market conditions before the next carrier negotiation.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "Proven Results Across Industrial and Automotive Supply Chains",
    backgroundImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=85&auto=format",
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
    backgroundImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=85&auto=format",
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
    backgroundImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;
