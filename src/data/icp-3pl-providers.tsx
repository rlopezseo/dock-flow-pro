import { ICPPageConfig } from "@/types/icp-page";
import hero3pl from "@/assets/hero-3pl-providers.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Subcarrier Network Visibility for 3PL Freight Operations | TrucksOnTheMap",
    description: "TrucksOnTheMap gives 3PL operations teams a live map of subcarrier capacity across European corridors, pre-commitment workflows, and real-time tracking so SLAs hold without spot market exposure.",
    slug: "freight-visibility-for-3pl-providers",
  },
  hero: {
    badge: "For 3PL Operations Directors & Account Managers",
    headline: "Your SLA Says Reliability.\nYour Subcarrier Network Says Maybe.",
    highlightedPart: "Close That Gap.",
    subtext: "TrucksOnTheMap gives 3PL operations teams a live map of subcarrier capacity across active corridors - five days forward - so dispatchers allocate jobs to confirmed trucks, SLAs hold without spot market exposure, and account managers answer client questions in real time.",
    ctaPrimary: "See Your Network on the Map",
    ctaSecondary: "How It Works",
    image: hero3pl,
  },
  authorityBar: {
    items: [
      { value: "−7%", label: "Total freight costs" },
      { value: "−31%", label: "Empty kilometres" },
      { value: "99.9%", label: "Capacity security" },
      { value: "ISO 27001", label: "Certified platform" },
    ],
  },
  narrative: {
    headline: "The Gap Between Your SLA and Your Subcarrier Network Is Where Client Relationships Break",
    paragraphs: [
      "A 3PL's commercial value proposition is reliability. Shippers outsource freight to a 3PL because they want a single accountable party who guarantees capacity, manages carrier relationships, and delivers real-time visibility - the things they cannot efficiently build themselves.",
      "Operationally, that reliability depends on a subcarrier network that the 3PL cannot directly control. Subcontracted carriers have their own fleet management constraints, their own booking cycles, their own communication habits. When a large shipper asks their 3PL account manager where a shipment is, the account manager asks the dispatcher, who calls the subcarrier, who calls the driver. The answer that reaches the client is three steps removed from the source and arrives after the conversation should have ended.",
      "The deeper problem is capacity visibility. A 3PL dispatcher managing thirty active subcarriers across fifteen European corridors does not have a unified view of which carriers have available trucks on which lanes next Tuesday. They have a contact list and a history of who tends to have capacity on which routes. That tribal knowledge is valuable. It is also a single point of failure when the dispatcher is unavailable, when a carrier changes their operating patterns, or when a client corridor sees unexpected volume.",
      "TrucksOnTheMap replaces tribal knowledge with structured data. Every subcarrier in the network publishes their available capacity to a shared map. The dispatcher sees who has trucks where, five days forward, without making a single call.",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What 3PL Operations Look Like When You Can Actually See Your Network",
    subtext: "Three shifts that turn reactive dispatching into proactive freight management.",
    items: [
      { label: "Subcarrier Availability", without: "3PL dispatchers contact subcarriers individually each morning to establish which trucks are available on which corridors. The process consumes two to three hours of dispatcher time daily. Confirmations arrive at different times. Allocation decisions are made before the full picture is clear.", withTotm: "Every contracted subcarrier publishes their available capacity to a shared geographic map, updated continuously. The dispatcher opens one interface and sees the entire network - organised by corridor, vehicle type, and five-day forward window. Job allocation takes minutes, not a morning.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { label: "SLA Protection", without: "When a subcarrier drops a job at short notice and the 3PL covers it on the spot market at 30 to 50 percent above contracted rates, the margin on that shipment disappears. If the client has a cost-plus contract, the invoice conversation follows. If they have a fixed-rate contract, the loss is absorbed entirely.", withTotm: "Pre-commitment workflows require subcarriers to confirm availability against upcoming jobs before the dispatcher needs to fill them. Jobs are covered before they become urgent. Spot market bookings become an exception. Capacity security reaches 99.9 percent.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { label: "Client Reporting", without: "When a shipper client asks their account manager where a shipment is, the expected answer is immediate. \"I'll check and call you back\" is an answer that erodes client confidence over time, regardless of how accurate the eventual update is.", withTotm: "Live GPS tracking and calculated ETA for every active shipment across the subcarrier network. Account managers access current position and arrival time for any job without contacting the dispatcher or the driver. The client gets an answer while they are still on the call.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "Built for 3PL Operations Teams. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "A unified geographic view of subcarrier capacity across all active corridors, updated continuously, covering a five-day forward window. Every contracted carrier's available trucks in one interface. No calls required.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "SAP / Oracle OTM Interface", description: "Integration with existing TMS and ERP systems used by the 3PL and their shipper clients. Bookings flow between platforms without manual reconciliation.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "MassUpload", description: "Bulk job upload for 3PLs managing high-frequency dispatch across multiple client accounts simultaneously.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "99.9% Capacity Security", description: "Subcarrier pre-commitment workflows that guarantee job coverage before the booking window closes. Spot market exposure reduced to planned exceptions.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time data for every active shipment, accessible by dispatchers and account managers without contacting the subcarrier.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "PriceIndex - 90-Day Rate Intelligence", description: "Market rate benchmarking across your active corridors. Validate subcarrier rate cards against current market conditions before contract renewal.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "Proven Results Across 3PL Operations in Europe",
    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85&auto=format",
    items: [
      { value: "−7%", description: "Reduction in total freight costs for 3PLs that replaced morning call rounds with live subcarrier availability data." },
      { value: "−31%", description: "Reduction in empty kilometres across the subcarrier network. Lower deadhead rates mean better per-kilometre margins." },
      { value: "99.9%", description: "Capacity security. Subcarrier jobs covered by pre-committed contracted carriers, on every client corridor." },
      { value: "7 Weeks", description: "Guaranteed GO LIVE. Operational before your next quarterly review." },
      { value: "ISO 27001", description: "Certified. Enterprise-grade security and GDPR compliance for all freight and client data." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "Common Questions",
    items: [
      { question: "\"Our subcarriers won't adopt another platform. They already use three systems.\"", answer: "Subcarrier onboarding on TrucksOnTheMap is managed by the platform's carrier success team, not by your operations staff. The average subcarrier is operational within the platform in under two hours. The financial incentive - more confirmed jobs from a single interface - drives adoption without requiring your team to manage it." },
      { question: "\"We already have a TMS. Another system creates more complexity, not less.\"", answer: "TrucksOnTheMap integrates with existing TMS platforms via SAP and Oracle OTM interfaces. The availability map and pre-commitment layer sit on top of your existing booking workflow. Dispatchers use one additional screen. No parallel system. No data reconciliation." },
      { question: "\"Our clients have their own visibility portals. They'll never see this.\"", answer: "Client-facing visibility is separate from operational visibility. TrucksOnTheMap gives your dispatchers the data they need to answer client portal queries accurately and instantly - regardless of which visibility tool the client uses." },
      { question: "\"How do we maintain data separation across different client freight accounts?\"", answer: "Each client account operates within a separate data environment on the platform. Subcarrier capacity data is visible only to the operations team managing that account. Cross-client data exposure is not possible by platform design." },
      { question: "\"What about GDPR when freight and position data crosses international borders?\"", answer: "TrucksOnTheMap is ISO 27001 certified and GDPR compliant. Data processing agreements are available for all carrier and shipper relationships on the platform. Cross-border data flows operate under standard contractual clauses." },
    ],
  },
  ctaBanner: {
    headline: "See Your Entire Subcarrier Network on One Map. Allocate in Minutes, Not Mornings.",
    subtext: "Pre-committed capacity. Real-time tracking. Client-ready reporting. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Your Clients Expect Reliability.\nYour Network Should Deliver It.",
    subtext: "Book a 30-minute demo. We'll show you a live map of subcarrier availability on your actual corridors - not a generic product tour.",
    ctaPrimary: "Book Your Live Map Demo",
    ctaSecondary: "Calculate My ROI",
    backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;
