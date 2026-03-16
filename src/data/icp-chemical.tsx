import { ICPPageConfig } from "@/types/icp-page";
import heroChemical from "@/assets/hero-chemical.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "ADR-Certified Carrier Visibility for Chemical Logistics | TrucksOnTheMap",
    description: "TrucksOnTheMap gives chemical logistics managers a live map of ADR-certified carrier capacity so hazardous goods move on compliant, pre-confirmed vehicles - not on whoever answered the phone this morning.",
    slug: "freight-visibility-for-chemical-industry",
  },
  hero: {
    badge: "For Chemical Industry",
    headline: "ADR Freight Doesn't Forgive\na Last-Minute Call.",
    highlightedPart: "To an Uncertified Carrier.",
    subtext: "TrucksOnTheMap gives chemical logistics managers a live map of ADR-certified carrier capacity so hazardous goods move on compliant, pre-confirmed vehicles - not on whoever answered the phone this morning.",
    ctaPrimary: "See Your Routes on the Map",
    ctaSecondary: "How It Works",
    image: heroChemical,
  },
  authorityBar: {
    items: [
      { value: "−7%", label: "Freight cost reduction" },
      { value: "7 Weeks", label: "Guaranteed GO LIVE" },
      { value: "99.9%", label: "Capacity security" },
      { value: "ISO 27001", label: "Certified platform" },
    ],
  },
  narrative: {
    headline: "You Know the UN Number. You Don't Know if the Truck Is Available.",
    paragraphs: [
      "Every shipment is classified by UN number, hazard class, and packing group. Every carrier holds ADR certification. Every vehicle carries the correct equipment code. Everything is documented. And then you try to book the truck - and your certified carrier has zero vehicles available on your corridor next Tuesday.",
      "Spot market ADR freight carries two risks simultaneously: cost and compliance. A carrier who can move quickly is not necessarily one whose certification, driver training, and equipment codes your HSE team has reviewed.",
      "TrucksOnTheMap makes ADR-certified capacity visible. A five-day map shows compliant carrier availability by corridor, hazard class, and vehicle equipment code. Book certified vehicles before urgency creates compliance pressure.",
    ],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What Compliant Freight Looks Like When You Can Actually See",
    subtext: "Three shifts that close the gap between ADR requirements and freight execution.",
    items: [
      { label: "ADR-Certified Carrier Availability", without: "You call certified carriers to check which vehicles are available on your hazardous corridors. Half confirm late. You plan with incomplete information and elevated compliance risk.", withTotm: "A 5-day map shows every ADR-certified carrier's compliant capacity by corridor, vehicle class, and hazard class coverage. Book the right vehicle before urgency creates compliance pressure.", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80&auto=format" },
      { label: "Regulatory Continuity", without: "When an ADR carrier drops a booking, the fallback is the spot market. One uncertified substitution is one HSE incident, one deviation report, one regulatory exposure.", withTotm: "99.9% capacity security. ADR-certified carriers pre-commit to your lanes. Compliant capacity locked before urgency develops. No uncertified alternatives. No exposure.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { label: "In-Transit Visibility", without: "You have no real-time position data on hazardous freight in transit. You find out about route deviations or delays when the driver calls - or when the consignee does.", withTotm: "Real-time tracking with live position and ETA at every drop-off point. Know where your ADR freight is at every moment, without waiting for a call.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for Chemical Logistics Teams. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "ADR-certified carrier capacity across hazardous corridors, filterable by hazard class, vehicle equipment code, and UN number compatibility. 5 days forward. Bookable from the map.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "ADR-certified carrier pre-commitment workflows that guarantee compliant coverage before the booking window closes. No uncertified substitutions. No regulatory exposure.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time for every hazardous freight shipment. Know where your ADR freight is at every moment without waiting for a call.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with ERP and TMS. Freight bookings reflect in your systems without manual data entry. Full hazmat documentation trail maintained.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "Proven Results Across Chemical Supply Chains",
    backgroundImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=85&auto=format",
    items: [
      { value: "−7%", description: "Reduction in total freight costs for chemical shippers who replaced last-minute ADR spot bookings with contracted carrier visibility." },
      { value: "−31%", description: "Reduction in empty kilometres across the ADR-certified carrier network." },
      { value: "99.9%", description: "Capacity security. ADR-certified carriers pre-committed to your lanes. No uncertified vehicle substitutions." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Fully operational on your hazardous freight corridors - with no additional burden on your HSE team." },
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
    headline: "Common Questions",
    items: [
      { question: "\"Our ADR carriers are approved through a formal HSE qualification process. We can't add carriers from a platform list.\"", answer: "TrucksOnTheMap doesn't replace your HSE qualification process. Only carriers already on your approved list appear on your availability map. The platform makes your existing approved network visible and bookable. No new carriers without your qualification." },
      { question: "\"We're integrated with SAP TM for hazmat documentation. We can't manage ADR compliance across two systems.\"", answer: "TrucksOnTheMap integrates directly with SAP and Oracle OTM. ADR bookings made on the platform write back to your TMS. No dual entry. No parallel compliance documentation. Implementation delivered within seven weeks." },
      { question: "\"How does the platform handle ADR class filtering across multiple UN numbers with different tunnel restriction codes?\"", answer: "Carrier profiles include ADR certification class, vehicle equipment type, tunnel restriction codes, and driver qualification data. Filtering by hazard class and tunnel code is built into the availability map. You see only compliant capacity for the specific classification you need." },
      { question: "\"What happens if a carrier's ADR certification lapses mid-contract?\"", answer: "Carrier certification status is managed on the platform. When a certification lapses, that carrier's capacity no longer appears on your availability map for the affected ADR classes. The platform reflects certification changes in real time." },
      { question: "\"What about GDPR and data sovereignty when freight crosses international ADR corridors?\"", answer: "TrucksOnTheMap is ISO 27001 certified and GDPR compliant. Data processing agreements are available for all carrier and shipper relationships. Cross-border data flows operate under standard contractual clauses." },
    ],
  },
  ctaBanner: {
    headline: "ADR-Certified Trucks. Pre-Confirmed Capacity. Live Tracking. Every Corridor.",
    subtext: "Compliant carrier visibility. 99.9% capacity security. Real-time tracking. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Your HSE Process Is Rigorous.\nYour Freight Visibility Should Be Too.",
    subtext: "Book a 30-minute demo. We'll show you a live map of ADR-certified carrier availability on your actual hazardous corridors - not a generic product tour.",
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
