import { ICPPageConfig } from "@/types/icp-page";
import heroImage from "@/assets/hero-load-matching.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Freight Visibility Software for Brokers & Freight Forwarders | TrucksOnTheMap",
    description: "TrucksOnTheMap gives freight brokers and speditions auto-allocation, real-time shipment visibility, subcontractor tracking, and a 90-day PriceIndex. Process 70% more jobs with the same team.",
    slug: "freight-visibility-software-for-brokers",
  },
  hero: {
    badge: "For Freight Brokers & Speditions",
    headline: "Your Competitors Are Processing 70% More Jobs With the Same Team.",
    highlightedPart: "Are You?",
    subtext: "TrucksOnTheMap gives freight brokers, speditions, and freight forwarders the speed, shipment visibility, and margin intelligence to stop losing jobs to faster operators — and start scaling without hiring.",
    ctaPrimary: "Calculate My ROI",
    ctaSecondary: "See How It Works",
    image: heroImage,
  },
  narrative: {
    headline: "Every Minute a Job Sits Unallocated Is Margin Walking Out the Door",
    paragraphs: [
      "Here's your morning: a shipper sends a job. You paste it into your system. You message three carriers on WhatsApp. Two don't reply before 9am. One says maybe. You call the fourth. They're booked.",
      "Meanwhile, a competitor with a smarter setup confirmed the same job in 8 minutes. You didn't lose on price. You lost on speed. Now multiply that by 30 jobs per day, per planner.",
      "Freight visibility in brokerage isn't just about knowing where a truck is. It's about having the data to confirm faster, allocate smarter, and give your shipper clients the real-time shipment tracking they expect from a 3PL — even when you're running a 20-person operation.",
      "Your team is talented. They know freight. They know your carriers. But 80% of their day is admin — copy-paste, WhatsApp follow-ups, status calls, manual load matching — that should be automated. The brokerages growing fastest in Central Europe aren't smarter than yours. They've just stopped doing those things manually.",
    ],
  },
  comparison: {
    headline: "What a Brokerage Looks Like When Speed Becomes Your Weapon",
    items: [
      { without: "Planners process 30 jobs per day through phone and email.", withTotm: "The same planner handles 50+ jobs per day — auto-matching, auto-confirmation, automated freight allocation." },
      { without: "You have no shipment visibility once the truck leaves your yard.", withTotm: "Real-time freight tracking on every job — answer customer calls in 10 seconds, not 10 minutes." },
      { without: "You negotiate carrier rates from memory and habit.", withTotm: "A 90-day PriceIndex shows average, low, and spot market rates per lane — you negotiate from data, not gut feel." },
      { without: "Subcontractors are invisible once they leave with the load.", withTotm: "Tracking API extends full shipment visibility to your entire subcontractor network." },
      { without: "You lose freight jobs to faster competitors.", withTotm: "You process 70% more jobs — your speed of allocation becomes your market position." },
      { without: "Shippers call for status updates and your team loses 2 hours a day answering.", withTotm: "Automated customer notifications handle booked → loaded → in transit → delivered. Your team touches exceptions, not every update." },
      { without: "Growing means hiring more coordinators.", withTotm: "Freight volume scales without headcount scaling — the platform handles the admin layer." },
    ],
  },
  features: {
    headline: "How Brokers Use TrucksOnTheMap to Process More, Earn More, Stress Less",
    items: [
      { title: "Carrier Availability Map", description: "Your trusted carrier network's available trucks — on a live map, updated in real time. No more WhatsApp chains at 7am. You see which carriers have capacity before you need to ask." },
      { title: "Auto-Match and Bidding Engine", description: "A freight job arrives from the shipper. The platform identifies best-fit carriers based on route, truck type, and live availability. Carriers respond. You confirm. This replaces the WhatsApp group." },
      { title: "PriceIndex — 90-Day Rate Intelligence", description: "Know the average, low, and spot market rate for every lane you operate. Stop negotiating carrier rates from memory. Start winning margin because you know the number before you pick up the phone." },
      { title: "Real-Time Shipment Visibility & Notifications", description: "Shippers get automatic status updates at every milestone. Your team doesn't touch routine updates. Customer service calls drop. You look like a platform company, not a phone-and-email operation." },
      { title: "Subcontractor Tracking API", description: "When you use subcontractors to cover volume peaks, freight visibility doesn't end. The API extends real-time tracking to your full subcontractor network. You remain accountable — now you can actually see what's happening." },
      { title: "Your Private Carrier Network", description: "Invite-only. Your carrier relationships stay yours. This is not a freight marketplace where you compete with anonymous brokers on price. It's your existing operation, made visible and fast." },
    ],
  },
  stats: {
    headline: "What Brokers Who Switched Are Seeing",
    items: [
      { value: "+70%", description: "More freight jobs processed with the same team size." },
      { value: "+12%", description: "Higher profit per job through better freight allocation and rate intelligence." },
      { value: "−30%", description: "Fewer empty runs in carrier networks — which reduces your carrier costs directly." },
      { value: "4.7★", description: "User rating — your team will adopt it, not fight it." },
      { value: "DHL & DSV", description: "Already on the network — your best carriers are likely already here." },
    ],
  },
  testimonial: {
    quote: "The TrucksOnTheMap transport management module has been proving its value at our company for years. It enables efficient and transparent, real-time communication with multiple carriers we work with, saving our transport planners a huge amount of energy and countless phone calls.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
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
  ctaFinal: {
    headline: "Your Next Shipper Contract Is Going to Someone Faster Than You. Unless.",
    subtext: "Start with one lane, one corridor, your five best carriers. See the difference in the first week. No long onboarding. Your first truck on the platform in under 10 minutes.",
    ctaPrimary: "Start Your Free Pilot",
    ctaSecondary: "Calculate My ROI",
  },
};

export default config;
