import { ICPPageConfig } from "@/types/icp-page";
import heroImage from "@/assets/hero-time-slot.jpg";
import imgChallenge from "@/assets/features-dock.jpg";
import imgMap from "@/assets/carrier-availability-map.png";
import imgTracking from "@/assets/cap-tracking.jpg";
import imgDashboard from "@/assets/cap-dashboard.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Time Slot Management Software for Warehouses & DCs | TrucksOnTheMap",
    description: "Digital dock scheduling and time slot booking for carriers. Reduce truck waiting time by 75%, increase dock utilisation to 85%. Loi Macron compliant. Go live in 7 weeks.",
    slug: "time-slot-management-software",
  },
  hero: {
    badge: "Time Slot Management — TrucksSlot",
    headline: "Your Trucks Wait 2 Hours\nat Every Warehouse.",
    highlightedPart: "That Costs You €2M/Year.",
    subtext: "TrucksSlot by TrucksOnTheMap gives carriers a digital slot booking system so trucks arrive at the right dock, at the right time. No queues. No detention costs. No Loi Macron penalties.",
    ctaPrimary: "See Slot Booking in Action",
    ctaSecondary: "Calculate Your Savings",
    image: heroImage,
  },
  authorityBar: {
    items: [
      { value: "−75%", label: "Reduction in waiting time" },
      { value: "85%", label: "Dock utilisation achieved" },
      { value: "+50%", label: "More trucks processed per dock" },
      { value: "7 Weeks", label: "Guaranteed GO LIVE" },
    ],
  },
  narrative: {
    headline: "78 Minutes. That's the Average Wait Before a Truck Even Reaches the Dock.",
    paragraphs: [
      "Every day, across thousands of European warehouses, trucks arrive and wait. Not 10 minutes. Not 20. The average waiting time in German warehouses is 78 minutes (Fraunhofer IML). In France and Spain, it's often worse.",
      "A truck standing still costs €80-120 per hour. For a fleet of 100 trucks, that's roughly €2 million per year in pure waiting costs — calculated as just one extra hour per truck per day, 250 working days. And that's conservative.",
      "But the real cost isn't just money. Under EU Regulation 561/2006, waiting time counts as 'other work' on the tachograph — not rest. Three hours waiting means three fewer hours available for driving. It can force a mandatory rest period and add an entire day to the delivery. Your supply chain doesn't just slow down. It breaks.",
      "In France (Loi Macron), carriers are legally entitled to €50-75/hour compensation for waiting beyond 1 hour for loading and 30 minutes for unloading. In Spain (LOTT), the thresholds are 1 hour each. Time slot management isn't just efficiency — it's legal compliance.",
    ],
    image: imgChallenge,
  },
  comparison: {
    headline: "Chaos at the Dock vs Controlled Flow",
    subtext: "The difference between first-come-first-served and intelligent scheduling.",
    items: [
      { label: "Truck Arrival", without: "Trucks arrive whenever they want — or whenever traffic allows. 6 trucks at 8am, none at 10am, 4 more at lunch. The yard is chaos. Drivers wait in their cabs for hours.", withTotm: "Carriers book a 30-minute slot before departure. They arrive knowing which dock, which time, and which unloading procedure. No queuing. No guessing. Waiting time drops from 90 minutes to under 20.", image: imgTracking },
      { label: "Dock Utilisation", without: "Docks are either empty or overwhelmed. Average utilisation: 45-55%. You have 10 docks but effectively use 5. When it's busy, trucks queue. When it's quiet, docks sit idle.", withTotm: "Intelligent slot distribution across docks and time windows. Utilisation jumps to 70-85%. Same number of docks, 50-75% more trucks processed per day. No capital expenditure — just better scheduling.", image: imgMap },
      { label: "Legal Compliance", without: "Detention invoices arrive from carriers citing Loi Macron, LOTT, or contractual Standgeld. Your accounting team disputes half of them. The other half you pay because you can't prove the waiting time was shorter.", withTotm: "Digital timestamps for arrival, dock assignment, loading start, and departure. Irrefutable evidence of actual waiting times. Automatic compliance calculation for Loi Macron and LOTT. Disputes eliminated.", image: imgDashboard },
    ],
  },
  features: {
    headline: "Built for Warehouses. Used by Carriers. Loved by Both.",
    items: [
      { title: "Digital Slot Booking Portal", description: "Carriers see available time slots for each facility and book online — hours or days in advance. The booking confirms dock number, expected duration, and any special instructions (ADR, temperature, forklift requirements). No phone calls. No emails.", image: imgTracking },
      { title: "Real-Time Yard Overview", description: "See every truck in your yard: arrived, checked in, at dock, loading/unloading, departed. Live status board for warehouse managers. Identify bottlenecks before they become queues. React in minutes, not hours.", image: imgDashboard },
      { title: "Automatic Dock Assignment", description: "The system assigns trucks to the optimal dock based on load type, vehicle size, product category, and dock equipment. No manual whiteboard scheduling. No conflicts. No wasted dock capacity.", image: imgMap },
      { title: "Penalty & Bonus System", description: "Automatic tracking of on-time arrivals. Late carriers get flagged. Consistently punctual carriers get priority slots and better scheduling windows. Performance data feeds into carrier scorecards and procurement decisions.", image: imgChallenge },
      { title: "Loi Macron & LOTT Compliance", description: "Automated calculation of waiting time compensation based on French and Spanish legislation. Digital timestamps provide irrefutable evidence. Generate compliance reports per carrier, per facility, per period. Your legal team will thank you.", image: imgTracking },
      { title: "Carrier Self-Service & Notifications", description: "Carriers receive booking confirmations, reminders, and gate instructions via email or SMS. They can reschedule or cancel slots within your defined rules. No back-and-forth. No admin overhead. Carriers love the transparency.", image: imgDashboard },
    ],
  },
  stats: {
    headline: "The Hard Numbers Behind Dock Scheduling",
    backgroundImage: heroImage,
    items: [
      { value: "78 min", description: "Average truck waiting time at German warehouses before slot management (Fraunhofer IML)." },
      { value: "€80-120", description: "Cost per hour of a truck standing still — driver, vehicle, opportunity cost." },
      { value: "−60%", description: "Truck waiting time reduction — P&G Europe after implementing TSM across European DCs." },
      { value: "85%", description: "Dock utilisation achievable with digital slot management (vs 45-55% without)." },
      { value: "€50-75/h", description: "Detention compensation carriers can claim under Loi Macron in France." },
    ],
  },
  testimonial: {
    quote: "Before TrucksSlot, we had 15-20 trucks queuing every morning. Drivers were frustrated, our dock team was overwhelmed, and we were paying thousands in detention claims. Now every truck has a slot, every dock has a schedule, and our throughput increased by 40% without adding a single bay.",
    author: "Warehouse Operations Director",
    role: "Director of DC Operations",
    company: "European 3PL Provider",
    backgroundImage: heroImage,
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our carriers won't use a booking system.\"", answer: "Carriers adopt slot booking because it eliminates their biggest frustration: unpredictable waiting. A guaranteed 30-minute slot at 10:00 is infinitely better than arriving at 8:00 and waiting until 11:00. Most carriers prefer digital booking within the first week." },
      { question: "\"We already manage this with Excel and phone calls.\"", answer: "And how's that working? If your docks are above 70% utilisation and your average waiting time is under 30 minutes, you're fine. If not — which is statistically almost certain — you're leaving money on the table and creating carrier frustration every single day." },
      { question: "\"Our warehouse has irregular volumes. Fixed slots don't work.\"", answer: "Our slot system is dynamic, not rigid. Slot durations, availability windows, and dock assignments adapt based on day of week, season, product type, and historical patterns. You're not forcing reality into a grid — you're giving structure to chaos." },
      { question: "\"What about trucks that arrive without a booking?\"", answer: "Unbooked trucks get assigned to available slots in real time — or wait until a slot opens. The system handles walk-ins gracefully, but incentivises pre-booking. After the first month, 90%+ of arrivals are pre-booked because carriers learn it's faster." },
      { question: "\"How does this integrate with our WMS?\"", answer: "API integration with all major WMS platforms. The slot booking feeds inbound scheduling, dock preparation, and labour planning. Your WMS knows what's arriving, when, and at which dock — before the truck leaves the origin." },
    ],
  },
  ctaBanner: {
    headline: "78 Minutes Average Wait. €80-120/Hour Cost. €50-75/Hour Penalties. It's Time to Schedule.",
    subtext: "Digital slot booking. Real-time yard visibility. Loi Macron compliant. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "See Your Docks Run Like Clockwork. Not Like a Car Park.",
    subtext: "Book a 30-minute demo. We'll show you how TrucksSlot transforms dock operations at your actual facility — with your volumes and your carriers.",
    ctaPrimary: "Book Your Slot Demo",
    ctaSecondary: "GO LIVE in 7 weeks",
    backgroundImage: heroImage,
  },
  sectionImages: {
    narrative: imgChallenge,
    comparison: imgTracking,
    features: imgDashboard,
  },
};

export default config;
