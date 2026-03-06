import { ICPPageConfig } from "@/types/icp-page";

const config: ICPPageConfig = {
  meta: {
    title: "Dock Scheduling Software for Distribution Centers | TrucksSlot",
    description: "TrucksSlot gives warehouse managers and DC operations teams real-time dock scheduling, carrier self-booking, and live inbound freight visibility. +80% truck arrival accuracy.",
    slug: "dock-scheduling-software-for-distribution-centers",
  },
  hero: {
    badge: "For Distribution Centers & Warehouses",
    headline: "Trucks Queuing on the Main Road Again?",
    highlightedPart: "That Ends Today.",
    subtext: "TrucksSlot gives warehouse managers and distribution center operations teams real-time dock scheduling software where carriers book their own time slots — so your yard stays orderly, your staff stays productive, and your plant manager stops calling.",
    ctaPrimary: "See TrucksSlot With Your Dock Layout",
    ctaSecondary: "How It Works",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85&auto=format",
  },
  authorityBar: {
    items: [
      { value: "+80%", label: "Truck arrival accuracy" },
      { value: "~Zero", label: "Queuing incidents" },
      { value: "7 wks", label: "Guaranteed GO LIVE" },
      { value: "4.7★", label: "User rating" },
    ],
  },
  narrative: {
    headline: "Your Dock Schedule Is Built on Promises. Reality Walks In 45 Minutes Late.",
    paragraphs: [
      "You built the schedule. You allocated the forklift teams. You positioned dock staff across the morning shift. And then three trucks arrived simultaneously — two of them weren't on the schedule for this morning — and one is still queuing on the public road outside the gate.",
      "The police have been called before. The plant manager has walked out to the yard before. The health and safety incident report is still on your desk.",
      "Inbound freight visibility is the gap at the core of this problem. Your dock schedule tells you what should happen. It tells you nothing about what is actually approaching. The shipper knows. The carrier knows. The driver knows. By the time you find out, the truck is already at your gate.",
      "Your distribution center is the last physical bottleneck in the entire supply chain. Every delay upstream arrives at your dock and expects you to absorb it. What you actually need is to see it coming before it arrives.",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What Your Dock Looks Like When You Know What's Coming Before It Arrives",
    subtext: "Three shifts that turn a reactive loading dock into a precision operation.",
    items: [
      { label: "Dock Queuing", without: "Trucks queue on public roads. Police get called. Plant management walks out to the yard. The same chaos every peak day.", withTotm: "Every truck has a pre-booked slot, arrives at its assigned gate on time, and moves in without queuing. Zero yard congestion.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format" },
      { label: "ETA Accuracy", without: "One late truck cascades into three disrupted dock slots, an overtime shift, and a forklift team standing idle.", withTotm: "Live ETA updates trigger automatic dock rescheduling before the delay reaches your yard. Your team responds, not reacts.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { label: "Slot Booking", without: "Every carrier time slot goes through the coordinator manually. 40 calls per day just to book dock windows.", withTotm: "Carriers book their own slots through a self-service portal. The coordinator manages exceptions, not every booking.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "One Screen. Every Truck. Every Dock. Live.",
    items: [
      { title: "Interactive Dock Scheduling Board", description: "Drag-and-drop visual plan of every dock slot — inbound and outbound, all shifts, all gates simultaneously. Works on tablet, phone, or desktop. The shift supervisor has the same real-time view as the logistics director.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { title: "Carrier Self-Booking — TrucksSlot", description: "Carriers log into their own time slot booking portal and select available dock windows. They see open slots. They book what fits their route. Your coordinator reviews, confirms exceptions, and focuses on operations — not on taking booking calls.", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format" },
      { title: "Live ETA Monitoring", description: "From the moment a truck is assigned to a booking, TrucksSlot tracks its position and estimated arrival time in real time. Delays are visible hours before they arrive at your yard. Your team has time to respond — not just react.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "Automated Rescheduling Alerts", description: "When a truck's ETA changes beyond threshold, the system flags affected dock slots automatically. You get an alert with the option to reschedule, notify the next driver, or redistribute dock staff.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format" },
      { title: "SAP / Oracle / WMS Integration", description: "TrucksSlot works standalone or as the real-time execution layer on top of your existing WMS or ERP. One integration connects your inbound purchase orders to live truck arrivals.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format" },
      { title: "Full Digital Dock Audit Trail", description: "Every truck arrival, loading start, loading completion, and departure — timestamped, logged automatically, exportable in one click. Carrier performance reviews take minutes. Compliance audits have a defensible record.", image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "What DC Managers Are Seeing After GO LIVE",
    backgroundImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85&auto=format",
    items: [
      { value: "+80%", description: "More accurate truck arrivals — dock utilization rate transforms when you know what's arriving." },
      { value: "0", description: "Truck queuing incidents — carriers arrive when their dock slot is ready." },
      { value: "7", description: "Weeks guaranteed GO LIVE — operational before your next quarterly operations review." },
      { value: "4.7", description: "Star user rating — warehouse floor staff adopt it because it removes daily uncertainty." },
      { value: "100%", description: "Digital audit trail — every arrival, loading start, and departure timestamped." },
    ],
  },
  testimonial: {
    quote: "I would highlight the TrucksSlot time slot management solution, where our suppliers and carriers book their own time slots. This has significantly improved truck arrival accuracy, which is essential for keeping operations smooth. In the past, it was common for several trucks to arrive at the same time, causing congestion and unnecessary waiting. With TrucksSlot, these situations have almost completely disappeared.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Carriers won't bother booking their own slots.\"", answer: "Apollo Tyres ran exactly this scenario. Carriers adopted self-booking faster than the internal team, because predictable dock times mean their drivers don't wait three hours in a queue. When you remove friction from their day, they do it willingly." },
      { question: "\"Our dock schedule is too complex for a standard system.\"", answer: "TrucksSlot handles multi-gate, multi-shift, simultaneous inbound and outbound scheduling. The drag-and-drop interface runs on a phone from the warehouse floor. If Apollo Tyres' operation fits, yours does too." },
      { question: "\"We need this to integrate with our WMS and ERP.\"", answer: "TrucksSlot interfaces with SAP, Oracle, and custom APIs. It runs standalone or as the real-time inbound visibility layer on top of your existing warehouse management system. Your IT team gets a documented API, not a year-long project." },
      { question: "\"Our warehouse staff won't adopt new software.\"", answer: "4.7-star user rating. Apollo Tyres reports that warehouse floor staff actively prefer TrucksSlot because the live arrival view removes the \"who's next?\" uncertainty from every shift. Adoption is days. Training is hours." },
      { question: "\"We tried a TMS before and it didn't stick.\"", answer: "TrucksSlot is not a TMS. It is a single-purpose dock scheduling and inbound freight visibility tool. One screen. One job. There's nothing to learn except where to look. Staff are operational on day one." },
    ],
  },
  ctaBanner: {
    headline: "Show Us Your Dock Layout. We'll Build It in TrucksSlot Before the Call.",
    subtext: "Carrier self-booking, live ETA monitoring, and zero queuing. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Show Us Your Dock Layout. We'll Build It in TrucksSlot Before the Demo.",
    subtext: "We don't do generic product tours. Send us your gate layout before the call and we'll configure TrucksSlot around your actual dock structure. You see your own operation running without queues in 30 minutes.",
    ctaPrimary: "Book a Personalised Dock Demo",
    ctaSecondary: "GO LIVE in 7 weeks",
    backgroundImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
  },
};

export default config;
