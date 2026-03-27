import { ICPPageConfig } from "@/types/icp-page";
import hero3pl from "@/assets/hero-3pl-providers.jpg";
import imgDispatch from "@/assets/ind-3pl-dispatch.jpg";
import imgClient from "@/assets/ind-3pl-client.jpg";
import imgCrossdock from "@/assets/ind-3pl-crossdock.jpg";
import imgFullVisibility from "@/assets/cap-full-visibility-cropped.png";
import imgDashboard from "@/assets/cap-dashboard.jpg";
import imgNetwork from "@/assets/cap-network.jpg";
import imgAvailabilityMap from "@/assets/carrier-availability-map.png";
import imgFleet from "@/assets/cap-fleet.jpg";
import imgTracking from "@/assets/cap-tracking.jpg";
import imgIntegrations from "@/assets/cap-integrations.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Subcarrier Network Visibility for 3PL Freight Operations | TrucksOnTheMap",
    description: "TrucksOnTheMap gives 3PL operations teams a live map of subcarrier capacity across European corridors, pre-commitment workflows, and real-time tracking so SLAs hold without spot market exposure.",
    slug: "freight-visibility-for-3pl-providers",
  },
  hero: {
    badge: "For 3PL Providers",
    headline: "Your SLA Says Reliability.\nYour Subcarrier Network Says Maybe.",
    highlightedPart: "Close That Gap.",
    subtext: "TrucksOnTheMap gives 3PL operations teams a live map of subcarrier capacity across active corridors - five days forward - so dispatchers allocate jobs to confirmed trucks and SLAs hold without spot market exposure.",
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
    headline: "Your SLA Promises Reliability. Your Subcarrier Network Doesn't Guarantee It.",
    paragraphs: [
      "Shippers outsource freight to a 3PL because they want a single accountable party who guarantees capacity and delivers real-time visibility. Operationally, that reliability depends on a subcarrier network you cannot directly control.",
      "A dispatcher managing thirty subcarriers across fifteen European corridors doesn't have a unified view of who has trucks where next Tuesday. They have a contact list and tribal knowledge. That knowledge is a single point of failure when the dispatcher is unavailable or a corridor sees unexpected volume.",
      "TrucksOnTheMap replaces tribal knowledge with structured data. Every subcarrier publishes available capacity to a shared map. The dispatcher sees the entire network - five days forward - without making a single call.",
    ],
    image: imgDispatch,
  },
  comparison: {
    headline: "What 3PL Operations Look Like When You Can Actually See Your Network",
    subtext: "Three shifts that turn reactive dispatching into proactive freight management.",
    items: [
      { label: "Subcarrier Availability", without: "3PL dispatchers contact subcarriers individually each morning to establish which trucks are available on which corridors. The process consumes two to three hours of dispatcher time daily. Confirmations arrive at different times. Allocation decisions are made before the full picture is clear.", withTotm: "Every contracted subcarrier publishes their available capacity to a shared geographic map, updated continuously. The dispatcher opens one interface and sees the entire network - organised by corridor, vehicle type, and five-day forward window. Job allocation takes minutes, not a morning.", image: imgAvailabilityMap },
      { label: "SLA Protection", without: "When a subcarrier drops a job at short notice and the 3PL covers it on the spot market at 30 to 50 percent above contracted rates, the margin on that shipment disappears. If the client has a cost-plus contract, the invoice conversation follows. If they have a fixed-rate contract, the loss is absorbed entirely.", withTotm: "Pre-commitment workflows require subcarriers to confirm availability against upcoming jobs before the dispatcher needs to fill them. Jobs are covered before they become urgent. Spot market bookings become an exception. Capacity security reaches 99.9 percent.", image: imgDashboard },
      { label: "Client Reporting", without: "When a shipper client asks their account manager where a shipment is, the expected answer is immediate. \"I'll check and call you back\" is an answer that erodes client confidence over time, regardless of how accurate the eventual update is.", withTotm: "Live GPS tracking and calculated ETA for every active shipment across the subcarrier network. Account managers access current position and arrival time for any job without contacting the dispatcher or the driver. The client gets an answer while they are still on the call.", image: imgIntegrations },
    ],
  },
  features: {
    headline: "Built for 3PL Operations Teams. Not for IT Departments.",
    items: [
      { title: "Availability Forecast Map", description: "A unified geographic view of subcarrier capacity across all active corridors, updated continuously, covering a five-day forward window. Every contracted carrier's available trucks in one interface.", image: imgFullVisibility },
      { title: "99.9% Capacity Security", description: "Subcarrier pre-commitment workflows that guarantee job coverage before the booking window closes. Spot market exposure reduced to planned exceptions.", image: imgCrossdock },
      { title: "Real-Time Tracking with ETA per Drop", description: "Live position and arrival time data for every active shipment, accessible by dispatchers and account managers without contacting the subcarrier.", image: imgClient },
      { title: "PriceIndex — 90-Day Rate Intelligence", description: "Market rate benchmarking across your active corridors. Validate subcarrier rate cards against current market conditions before contract renewal.", image: imgDispatch },
      { title: "MassUpload", description: "Bulk job creation for high-frequency operations. Upload entire delivery schedules across multiple clients in a single action.", image: imgCrossdock },
      { title: "SAP / Oracle OTM Interface", description: "Direct integration with your clients' ERP and TMS systems. Freight bookings reflect without manual data entry. Full audit trail maintained.", image: imgClient },
    ],
  },
  stats: {
    headline: "Proven Results Across 3PL Operations in Europe",
    backgroundImage: imgCrossdock,
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
    backgroundImage: imgDispatch,
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
    backgroundImage: imgCrossdock,
  },
  sectionImages: {
    narrative: imgDispatch,
    comparison: imgCrossdock,
    features: imgClient,
  },
};

export default config;
