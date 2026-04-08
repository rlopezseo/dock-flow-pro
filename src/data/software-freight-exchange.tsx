import { ICPPageConfig } from "@/types/icp-page";
import heroImage from "@/assets/hero-freight-exchange.jpg";
import imgChallenge from "@/assets/brokers-narrative.png";
import imgMap from "@/assets/carrier-availability-map.png";
import imgTracking from "@/assets/cap-full-visibility-cropped.png";
import imgDashboard from "@/assets/cap-dashboard.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Freight Exchange & Spot Market Platform for European Road Freight | TrucksOnTheMap",
    description: "Reduce empty running and find freight or trucks across Europe. AI carrier matching, real-time tracking, eCMR integration. Not a load board — a complete freight marketplace.",
    slug: "freight-exchange-spot-market",
  },
  hero: {
    badge: "Freight Exchange & Spot Market",
    headline: "25% of European Trucks\nDrive Empty.",
    highlightedPart: "Yours Don't Have To.",
    subtext: "TrucksOnTheMap connects carriers with available capacity to shippers with freight — across all of Europe. AI matching, instant booking, real-time tracking, and transparent pricing. Not a classified board from 1997. A marketplace built for 2026.",
    ctaPrimary: "Find Freight or Trucks Now",
    ctaSecondary: "How Matching Works",
    image: heroImage,
  },
  authorityBar: {
    items: [
      { value: "€400B+", label: "EU road freight market" },
      { value: "20-25%", label: "Of truck-km driven empty" },
      { value: "600K+", label: "Road freight companies in EU" },
      { value: "7 Weeks", label: "Guaranteed GO LIVE" },
    ],
  },
  narrative: {
    headline: "You Post a Load. You Wait for Phone Calls. You Hope Someone Has a Truck.",
    paragraphs: [
      "The European road freight spot market is worth €30-50 billion per year. And most of it still runs on classified-style load boards where forwarders post loads and carriers scroll through lists looking for a match. Then they call. Then they negotiate. Then they agree via email. Then nobody tracks anything.",
      "TIMOCOM processes 750K-1M offers per day. Trans.eu handles 300-500K. Teleroute (Alpega) adds another 150K+. These are enormous platforms — but they're digital bulletin boards. The shipper posts. The carrier searches. Everything after the match is manual: phone call, email, paper CMR, no tracking, invoice 30-60 days later.",
      "Meanwhile, 20-25% of all truck-kilometres in Europe are driven empty. That's not just wasted fuel — at €1.10-1.40/km on major corridors, it's billions of euros in lost revenue for carriers and unnecessary cost for shippers.",
      "The market is consolidating fast. Trimble bought Transporeon for €1.88B. Sennder absorbed InstaFreight and Uber Freight EU. Alpega integrated Wtransnet, Sixfold, and Transwide. The endgame is clear: the freight exchange of the future is a managed marketplace with AI matching, instant booking, real-time tracking, eCMR, and integrated payment. That's what we're building.",
    ],
    image: imgChallenge,
  },
  comparison: {
    headline: "Load Board vs Freight Marketplace — The Evolution",
    subtext: "From classified ads to intelligent matching.",
    items: [
      { label: "Finding Freight / Trucks", without: "You scroll through thousands of listings. You filter by origin and destination. You find 12 options. You call 8. Three answer. One has the right truck. Total time: 45 minutes for one load.", withTotm: "AI analyses your lane history, pricing patterns, vehicle requirements, and carrier performance. It suggests the 3 best matches. You click to book. Total time: 3 minutes. And the match is better.", image: imgMap },
      { label: "Booking & Documentation", without: "You agree on price by phone. You confirm by email. The driver gets a paper CMR. You have no visibility once the truck leaves. The signed CMR arrives by post in 3-5 weeks. Invoicing starts then.", withTotm: "Instant booking with digital confirmation. eCMR generated automatically. Real-time tracking from pickup to delivery. Digital POD. Invoice triggered at delivery. Payment in days, not months.", image: imgTracking },
      { label: "Rate Transparency", without: "You don't know if €1.20/km on Germany→Spain is good or bad. The broker adds their margin. The carrier discounts to win the load. Nobody has benchmark data. Every negotiation starts from zero.", withTotm: "90-day rate intelligence per corridor. Know the average, low, and spot rate before you negotiate. Benchmark every quote against market data. No hidden margins. Transparent pricing that benefits both sides.", image: imgDashboard },
    ],
  },
  features: {
    headline: "Not a Load Board. A Complete Freight Marketplace.",
    items: [
      { title: "AI Carrier Matching", description: "Our algorithm analyses lane history, carrier performance scores, vehicle availability, and pricing patterns to suggest the optimal carrier for every load. Not a keyword search — intelligent matching that improves with every transaction.", image: imgMap },
      { title: "Instant Booking", description: "See the price, see the carrier's rating, click to book. No phone calls, no email chains, no 'I'll check and call you back'. The carrier gets the job notification instantly. Confirmation in seconds, not hours.", image: imgTracking },
      { title: "Real-Time Tracking Included", description: "Every booked load is tracked automatically. Live position, predictive ETA, exception alerts. The shipper sees where their freight is. The carrier proves their service quality. No separate visibility tool needed.", image: imgTracking },
      { title: "Integrated eCMR", description: "Digital consignment note created automatically at booking. Driver signs at pickup, consignee signs at delivery. No paper. No postal return. No 3-5 week document cycle. eFTI-ready and eIDAS-compliant.", image: imgDashboard },
      { title: "90-Day Rate Intelligence", description: "The PriceIndex shows average, low, and spot market rates for every European corridor over the past 90 days. Negotiate from data, not instinct. Know immediately when you're overpaying — or when a carrier is undercutting the market.", image: imgChallenge },
      { title: "Carrier Scoring & Vetting", description: "Continuous performance scoring: on-time percentage, damage claims, documentation quality, response time. Not just a credit check at signup — ongoing quality metrics that help shippers choose and carriers differentiate.", image: imgMap },
    ],
  },
  stats: {
    headline: "The European Freight Exchange Market in Numbers",
    backgroundImage: heroImage,
    items: [
      { value: "€400B+", description: "Total European road freight market — with 10-20% moving through spot channels." },
      { value: "750K-1M", description: "Load and truck offers per day on TIMOCOM alone — the largest EU freight exchange." },
      { value: "20-25%", description: "Of all truck-kilometres in Europe driven empty — the problem freight exchanges exist to solve." },
      { value: "€1.88B", description: "What Trimble paid for Transporeon in 2023 — showing how valuable freight platforms have become." },
      { value: "600K+", description: "Road freight companies in the EU — the vast majority with fewer than 10 trucks." },
    ],
  },
  testimonial: {
    quote: "We used to spend 3 hours every morning calling carriers for spot loads. Now the platform matches us with trucks in minutes. Our empty running dropped from 28% to 14% in the first quarter. The ROI was obvious within weeks.",
    author: "Freight Operations Manager",
    role: "Head of Spot Freight",
    company: "European Forwarder",
    backgroundImage: heroImage,
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"We already use TIMOCOM / Trans.eu. Why switch?\"", answer: "You don't have to switch — you can use TrucksOnTheMap alongside existing exchanges. But our platform goes beyond classified listings: AI matching, instant booking, real-time tracking, eCMR, and integrated payment. It's the difference between a bulletin board and a marketplace." },
      { question: "\"Our carriers prefer phone and email.\"", answer: "So did everyone's. Until they tried a platform that books faster, pays faster, and eliminates the admin. Carriers who use digital booking report 60-70% less time per transaction. They're not nostalgic about phone calls — they're busy running trucks." },
      { question: "\"Spot market rates are always worse than contract.\"", answer: "Spot rates are 10-20% higher on average, yes. But our rate intelligence helps you benchmark contract rates against real market data. Many users find their 'contract rates' are actually above spot on certain corridors. Knowledge is leverage." },
      { question: "\"How do you verify carrier quality on a marketplace?\"", answer: "Every carrier is vetted: insurance, licenses, fleet age, and operating history. Then continuous scoring on on-time performance, damage claims, and documentation quality. Bad carriers don't last. Good carriers get priority. It's Darwinian — by design." },
      { question: "\"The big exchanges have network effects. How can you compete?\"", answer: "Network effects matter — and we're building ours fast by offering something the incumbents don't: a complete end-to-end workflow from matching to payment. Load boards that stop at the phone call are leaving value on the table. We capture it." },
    ],
  },
  ctaBanner: {
    headline: "25% Empty Running. €30-50B Spot Market. 750K Offers/Day You Can't Search Efficiently. There's a Smarter Way.",
    subtext: "AI matching. Instant booking. Real-time tracking. eCMR. Transparent pricing. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "Find the Right Truck for Every Load. Or the Right Load for Every Truck.",
    subtext: "Book a 30-minute demo. We'll show you live matching on your actual corridors — with real carriers, real rates, and real availability.",
    ctaPrimary: "Book Your Marketplace Demo",
    ctaSecondary: "GO LIVE in 7 weeks",
    backgroundImage: heroImage,
  },
  sectionImages: {
    narrative: imgChallenge,
    comparison: imgMap,
    features: imgTracking,
  },
};

export default config;
