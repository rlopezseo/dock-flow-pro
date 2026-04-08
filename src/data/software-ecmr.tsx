import { ICPPageConfig } from "@/types/icp-page";
import heroImage from "@/assets/hero-ecmr.jpg";
import imgChallenge from "@/assets/cap-dashboard.jpg";
import imgMap from "@/assets/carrier-availability-map.png";
import imgTracking from "@/assets/cap-tracking.jpg";
import imgIntegrations from "@/assets/cap-integrations.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "eCMR Electronic Consignment Note Software for Road Freight | TrucksOnTheMap",
    description: "Replace paper CMR with legally valid electronic consignment notes. eFTI compliant, eIDAS signatures, 70% less admin time. Go live in 7 weeks.",
    slug: "ecmr-electronic-consignment-note",
  },
  hero: {
    badge: "eCMR — Digital Transport Documents",
    headline: "300 Million Paper CMRs\nEvery Year in Europe.",
    highlightedPart: "Yours Can Be Digital.",
    subtext: "TrucksOnTheMap eCMR replaces paper consignment notes with legally valid electronic documents — signed, stored, and shared in real time. Because waiting 3-5 weeks for a signed copy to arrive by post is not a process. It's a relic.",
    ctaPrimary: "See eCMR in Action",
    ctaSecondary: "Legal Framework",
    image: heroImage,
  },
  authorityBar: {
    items: [
      { value: "−70%", label: "Admin time reduction" },
      { value: "€3-5", label: "Saved per consignment note" },
      { value: "0%", label: "Error rate (vs 10-25% paper)" },
      { value: "25+", label: "Countries ratified eCMR" },
    ],
  },
  narrative: {
    headline: "A 4-Copy Carbon Paper Form. In 2026. Seriously.",
    paragraphs: [
      "Every cross-border road freight shipment in Europe requires a CMR consignment note. The Convention dates from 1956, Geneva. The process hasn't changed much since: four copies, carbon paper, handwritten entries, and a 3-5 week cycle before the signed copy returns to the sender.",
      "10-25% of paper CMRs contain errors — wrong weights, missing signatures, illegible handwriting. Each error triggers a dispute, a delay, or a compliance gap. The administrative cost per paper CMR is €3-8 when you factor in printing, handling, filing, and postal return.",
      "The eCMR Protocol has been in force since 2011. Over 25 EU countries have ratified it. The eFTI Regulation (mandatory ~2026-2027) means authorities must accept electronic transport documents. The paper CMR's days are numbered — the question is whether you digitise now or scramble later.",
      "The real blocker isn't legal. It's interoperability. If your shipper uses Platform A and your carrier uses Platform B, they need to agree. TrucksOnTheMap solves this because both parties are already on the same platform — the CMR becomes a digital layer on top of the freight job that already exists.",
    ],
    image: imgChallenge,
  },
  comparison: {
    headline: "Paper CMR vs eCMR — The Shift That's Already Happening",
    subtext: "From carbon copies to real-time digital documents.",
    items: [
      { label: "Document Lifecycle", without: "4 paper copies printed. Driver carries them. Consignee signs and keeps one. Sender gets their signed copy back by post in 3-5 weeks. If it gets lost, you start over.", withTotm: "eCMR created digitally when the freight job is confirmed. Driver signs on mobile at pickup. Consignee signs at delivery. All parties see the completed document in real time. Cycle: minutes, not weeks.", image: imgTracking },
      { label: "Errors & Disputes", without: "10-25% of paper CMRs have errors — wrong weights, missing fields, illegible handwriting. Each error means a phone call, a correction, a delay in invoicing.", withTotm: "Mandatory field validation eliminates errors at creation. Weight, addresses, goods description — all validated before the document is issued. Error rate: ~0%. Disputes from documentation: eliminated.", image: imgIntegrations },
      { label: "Compliance & Audit", without: "Paper documents stored in filing cabinets. Finding a specific CMR from 6 months ago takes hours. Proving compliance to auditors means boxes of paper.", withTotm: "Every eCMR stored digitally with full audit trail. eIDAS-compliant electronic signatures. Search any document in seconds. eFTI-ready for when authorities require digital acceptance.", image: imgMap },
    ],
  },
  features: {
    headline: "Built on the CMR Convention. Ready for eFTI.",
    items: [
      { title: "Legally Valid eCMR", description: "Compliant with the 2008 eCMR Protocol. All 12 mandatory fields per Article 6 of the CMR Convention — sender, carrier, consignee, goods description, weights, charges — validated digitally. Same legal force as paper in 25+ ratified countries.", image: imgTracking },
      { title: "eIDAS Electronic Signatures", description: "Driver signs at pickup, consignee signs at delivery — using Advanced Electronic Signatures (AES) or Qualified Electronic Signatures (QES) as required by the eCMR Protocol. Legally binding across the EU under the eIDAS regulation.", image: imgIntegrations },
      { title: "Real-Time Document Status", description: "Know exactly where your CMR is in its lifecycle: created, signed at pickup, in transit, signed at delivery, completed. No waiting 3-5 weeks. No calling the carrier to ask 'did they sign it?'. Status visible to all parties instantly.", image: imgChallenge },
      { title: "Integrated with Your Freight Flow", description: "The eCMR is created automatically when a freight job is confirmed on TrucksOnTheMap. No separate system, no double entry. The document inherits shipment data — origin, destination, weight, goods — directly from the transport order.", image: imgMap },
      { title: "Reservations & Observations", description: "Drivers and consignees can add reservations and observations digitally — damaged goods, quantity discrepancies, temperature deviations. Timestamped, geolocated, and attached to the eCMR. Evidence that holds up in disputes.", image: imgTracking },
      { title: "Digital Archive & Search", description: "Every eCMR stored securely with full audit trail. Search by shipment number, date, carrier, route, or consignee. Generate compliance reports in seconds. No filing cabinets. No lost documents. No manual retrieval for auditors.", image: imgIntegrations },
    ],
  },
  stats: {
    headline: "The European eCMR Opportunity in Numbers",
    backgroundImage: heroImage,
    items: [
      { value: "300M", description: "CMR consignment notes issued per year in Europe — less than 2% are electronic today." },
      { value: "€3-5", description: "Savings per consignment note when switching from paper to eCMR (IRU estimate)." },
      { value: "70%", description: "Reduction in administrative time — proven in the Dutch TransFollow pilot." },
      { value: "3-5 wks", description: "Typical cycle for a signed paper CMR to return to the sender. eCMR: real time." },
      { value: "€20-27B", description: "Estimated EU-wide savings from digitising transport documents (EU Commission / eFTI)." },
    ],
  },
  testimonial: {
    quote: "Switching to eCMR eliminated our document backlog overnight. We used to wait weeks for signed CMRs to arrive. Now the document is complete before the truck leaves the delivery point. Our invoicing cycle dropped from 4 weeks to 3 days.",
    author: "Logistics Operations Manager",
    role: "Head of Transport Operations",
    company: "European FMCG Manufacturer",
    backgroundImage: heroImage,
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our carriers still use paper. They won't switch.\"", answer: "Carriers adopt eCMR because it eliminates their paperwork too. No printing, no carrying copies, no posting documents back. The driver signs on their phone. It takes 10 seconds instead of 10 minutes. Most carriers prefer it once they try it." },
      { question: "\"Is eCMR legally valid in all EU countries?\"", answer: "The eCMR Protocol has been ratified by 25+ countries including France, Spain, Germany, Netherlands, Belgium, and all major European freight corridors. For the remaining countries, the eFTI Regulation (~2026-2027) will require authorities to accept electronic transport documents." },
      { question: "\"What if one party doesn't have the app?\"", answer: "The consignee or driver can sign via a simple web link — no app installation required. We send a signing request with a secure link. Works on any smartphone browser. Zero friction for occasional users." },
      { question: "\"How does this work with customs and border controls?\"", answer: "eCMR under the Protocol has the same legal validity as paper. Border authorities in ratified countries accept it. The eFTI Regulation will further mandate digital acceptance. You can also generate a PDF version for any authority that requests a printout." },
      { question: "\"We already have a TMS that handles documents.\"", answer: "Most TMS systems generate a PDF of a CMR template. That's not an eCMR. A real eCMR requires electronic signatures (eIDAS), multi-party access (sender, carrier, consignee), real-time status updates, and digital archiving with audit trail. That's what TrucksOnTheMap provides." },
    ],
  },
  ctaBanner: {
    headline: "300 Million Paper CMRs. 10-25% Error Rate. 3-5 Week Return Cycle. There's a Better Way.",
    subtext: "eFTI-ready. eIDAS-compliant. Integrated with your freight flow. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "See Your Consignment Notes Go Digital. Not Into a Filing Cabinet.",
    subtext: "Book a 30-minute demo. We'll show you how eCMR works on a real freight flow — from booking to delivery signature.",
    ctaPrimary: "Book Your eCMR Demo",
    ctaSecondary: "GO LIVE in 7 weeks",
    backgroundImage: heroImage,
  },
  sectionImages: {
    narrative: imgChallenge,
    comparison: imgTracking,
    features: imgIntegrations,
  },
};

export default config;
