import { ICPPageConfig } from "@/types/icp-page";

const config: ICPPageConfig = {
  meta: {
    title: "Freight Visibility Software for Brokers & Freight Forwarders | TrucksOnTheMap",
    description: "TrucksOnTheMap gives freight brokers and speditions auto-allocation, real-time shipment visibility, subcontractor tracking, and a 90-day PriceIndex. Process 70% more jobs with the same team.",
    slug: "freight-visibility-software-for-brokers",
  },
  hero: {
    badge: "For Freight Brokers & Speditions",
    headline: "Your Competitors Process\n70% More Jobs. Same Team.",
    highlightedPart: "Do You?",
    subtext: "TrucksOnTheMap gives freight brokers, speditions, and freight forwarders the speed, shipment visibility, and margin intelligence to stop losing jobs to faster operators — and start scaling without hiring.",
    ctaPrimary: "Calculate My ROI",
    ctaSecondary: "See How It Works",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=85&auto=format",
  },
  authorityBar: {
    items: [
      { value: "+70%", label: "More jobs processed" },
      { value: "+12%", label: "Profit per job" },
      { value: "−30%", label: "Carrier empty runs" },
      { value: "4.7★", label: "User rating" },
    ],
  },
  narrative: {
    headline: "Every Minute a Job Sits Unallocated Is Margin Walking Out the Door",
    paragraphs: [
      "Here's your morning: a shipper sends a job. You paste it into your system. You message three carriers on WhatsApp. Two don't reply before 9am. One says maybe. You call the fourth. They're booked.",
      "Meanwhile, a competitor with a smarter setup confirmed the same job in 8 minutes. You didn't lose on price. You lost on speed. Now multiply that by 30 jobs per day, per planner.",
      "Freight visibility in brokerage isn't just about knowing where a truck is. It's about having the data to confirm faster, allocate smarter, and give your shipper clients the real-time shipment tracking they expect from a 3PL — even when you're running a 20-person operation.",
      "Your team is talented. They know freight. They know your carriers. But 80% of their day is admin — copy-paste, WhatsApp follow-ups, status calls, manual load matching — that should be automated. The brokerages growing fastest in Central Europe aren't smarter than yours. They've just stopped doing those things manually.",
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=85&auto=format",
  },
  comparison: {
    headline: "What a Brokerage Looks Like When Speed Becomes Your Weapon",
    subtext: "Three upgrades that turn a phone-and-email brokerage into a platform company.",
    items: [
      { label: "Job Throughput", without: "Planners process 30 jobs per day through phone, email, and WhatsApp. 80% of their time is admin, not selling.", withTotm: "The same planner handles 50+ jobs per day — auto-matching, auto-confirmation, automated freight allocation. Speed is your moat.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format" },
      { label: "Shipment Visibility", without: "You have no visibility once the truck leaves. Shippers call for updates and your team loses 2 hours a day answering.", withTotm: "Real-time tracking on every job with automated status notifications. Your team touches exceptions, not every update.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { label: "Rate Intelligence", without: "You negotiate carrier rates from memory and habit. You don't know if you're overpaying until the margin report arrives.", withTotm: "90-day PriceIndex shows average, low, and spot market rates per lane. You negotiate from data, not gut feel.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
    ],
  },
  features: {
    headline: "How Brokers Use TrucksOnTheMap to Process More, Earn More, Stress Less",
    items: [
      { title: "Carrier Availability Map", description: "Your trusted carrier network's available trucks — on a live map, updated in real time. No more WhatsApp chains at 7am. You see which carriers have capacity before you need to ask.", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&auto=format" },
      { title: "Auto-Match and Bidding Engine", description: "A freight job arrives from the shipper. The platform identifies best-fit carriers based on route, truck type, and live availability. Carriers respond. You confirm. This replaces the WhatsApp group.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format" },
      { title: "PriceIndex — 90-Day Rate Intelligence", description: "Know the average, low, and spot market rate for every lane you operate. Stop negotiating carrier rates from memory. Start winning margin because you know the number before you pick up the phone.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format" },
      { title: "Real-Time Shipment Visibility & Notifications", description: "Shippers get automatic status updates at every milestone. Your team doesn't touch routine updates. Customer service calls drop. You look like a platform company, not a phone-and-email operation.", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format" },
      { title: "Subcontractor Tracking API", description: "When you use subcontractors to cover volume peaks, freight visibility doesn't end. The API extends real-time tracking to your full subcontractor network. You remain accountable — now you can actually see what's happening.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format" },
      { title: "Your Private Carrier Network", description: "Invite-only. Your carrier relationships stay yours. This is not a freight marketplace where you compete with anonymous brokers on price. It's your existing operation, made visible and fast.", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format" },
    ],
  },
  stats: {
    headline: "What Brokers Who Switched Are Seeing",
    backgroundImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=85&auto=format",
    items: [
      { value: "+70%", description: "More freight jobs processed with the same team size." },
      { value: "+12%", description: "Higher profit per job through better rate intelligence and faster allocation." },
      { value: "−30%", description: "Fewer empty runs in your carrier network, which directly reduces your freight costs." },
      { value: "4.7★", description: "User rating from logistics planners and dispatchers across Central Europe." },
      { value: "10 min", description: "To get your first truck on the platform. No complex onboarding." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=85&auto=format",
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our carriers won't adopt another app.\"", answer: "Carriers get a free mobile driver app and a free TMS — at no cost. They adopt it because it helps them eliminate empty runs and fill their trucks faster. DHL rolled it out to hundreds of drivers across multiple corridors." },
      { question: "\"This sounds like just another load board.\"", answer: "It's the structural opposite. A load board is an open commodity marketplace where your relationships mean nothing and price is everything. TrucksOnTheMap is an invite-only private network where your carrier relationships are the asset — digitized, not replaced." },
      { question: "\"We have our own freight management system.\"", answer: "TrucksOnTheMap connects via API or SAP/Oracle interface. It adds the real-time freight visibility and auto-allocation layer your current system was never designed to provide. You keep what works. You add what's missing." },
      { question: "\"Too expensive for an operation our size.\"", answer: "The ROI is +12% profit per job. For a brokerage processing 500 jobs per month at €150 average margin, that's €9,000 in additional monthly profit. The maths close themselves in the first quarter." },
    ],
  },
  ctaBanner: {
    headline: "Process 70% More Jobs With the Same Team. Start Your Free Pilot Today.",
    subtext: "Auto-matching, real-time visibility, and 90-day rate intelligence. No credit card required.",
  },
  ctaFinal: {
    headline: "Your Next Shipper Contract Is Going to Someone Faster Than You. Unless.",
    subtext: "Start with one lane, one corridor, your five best carriers. See the difference in the first week. No long onboarding. Your first truck on the platform in under 10 minutes.",
    ctaPrimary: "Start Your Free Pilot",
    ctaSecondary: "Calculate My ROI",
    backgroundImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=85&auto=format",
  },
  sectionImages: {
    narrative: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=85&auto=format",
    comparison: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format",
    features: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&auto=format",
  },
};

export default config;
