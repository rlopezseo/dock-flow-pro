import { ICPPageConfig } from "@/types/icp-page";
import capFullVisibility from "@/assets/cap-full-visibility.png";
import capAllOnOne from "@/assets/cap-all-on-one.png";
import heroCarriers from "@/assets/hero-carriers.jpg";
import narrativeTrucksIdle from "@/assets/carriers/narrative-trucks-idle.jpg";
import compEmptyRuns from "@/assets/carriers/comp-empty-runs.jpg";
import compFleetVisibility from "@/assets/carriers/comp-fleet-visibility.jpg";
import compFreightMatching from "@/assets/carriers/comp-freight-matching.jpg";
import featTrucksmatch from "@/assets/carriers/feat-trucksmatch.jpg";
import featTms from "@/assets/carriers/feat-tms.jpg";
import featDriverApp from "@/assets/carriers/feat-driver-app.jpg";
import featPriceindex from "@/assets/carriers/feat-priceindex.jpg";
import featNetwork from "@/assets/carriers/feat-network.jpg";
import statsBg from "@/assets/carriers/stats-bg.jpg";
import testimonialBg from "@/assets/carriers/testimonial-bg.jpg";
import ctaFinalBg from "@/assets/carriers/cta-final-bg.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Fleet Visibility Software for Trucking Companies | TrucksOnTheMap",
    description: "TrucksOnTheMap helps trucking companies and fleet operators cut empty runs by 30%, match trucks to freight automatically, and get shippers to come looking for their capacity. Free TMS included.",
    slug: "fleet-visibility-software-for-carriers",
  },
  hero: {
    badge: "For Carriers & Fleet Operators",
    headline: "A Quarter of Your Kilometres\nAre Earning Nothing.",
    highlightedPart: "Fix That.",
    subtext: "TrucksOnTheMap gives trucking companies and asset-based carriers fleet visibility software that eliminates empty runs, matches trucks to freight automatically, and gets shippers to come looking for your capacity.",
    ctaPrimary: "Calculate My Empty-Run Cost",
    ctaSecondary: "See How It Works",
    image: heroCarriers,
  },
  authorityBar: {
    items: [
      { value: "30%", label: "Empty-run reduction" },
      { value: "Free TMS", label: "No cost to join" },
      { value: "2-6 wks", label: "To measurable ROI" },
      { value: "4.7★", label: "Driver app rating" },
    ],
  },
  narrative: {
    headline: "You Have the Jobs. You Can't Match Them to the Trucks.",
    paragraphs: [
      "Asset-based carriers often have access to freight jobs, but they can't always match trucks with jobs that load in the same location. So trucks travel empty to the pickup point. Not because there's no freight, but because the transport planner has limited visibility of which trucks unload where, and which available jobs start where and when.",
      "Nobody drives all the way back empty from Rotterdam to Budapest. Instead, the driver waits until a job that fits more or less is secured. But this introduces another massive cost beyond empty running: the most valuable asset, the truck driver's time, is wasted sitting idle.",
      "TrucksOnTheMap was built from inside the road freight industry, for carriers who own the trucks and feel every empty kilometre and every idle hour in their cash flow.",
    ],
    image: narrativeTrucksIdle,
  },
  comparison: {
    headline: "What Your Fleet Looks Like When Trucks Match Freight, Not the Other Way Around",
    subtext: "Three changes that transform a trucking company from cost-center to profit machine.",
    items: [
      { label: "Empty Runs", without: "25-35% of kilometres driven empty. Fuel burned, drivers paid, zero revenue. Your biggest invisible cost.", withTotm: "Empty run ratio drops 30%. TrucksMatch AI finds return loads before your truck reaches the drop-off. Every kilometre earns.", image: compEmptyRuns },
      { label: "Fleet Visibility", without: "Your fleet availability lives in your dispatcher's head and a WhatsApp group. Shippers can't find you. You can't find freight.", withTotm: "Live availability map shows your free trucks to trusted shippers and brokers. They book directly, no calls, no middlemen.", image: compFleetVisibility },
      { label: "Freight Matching", without: "Finding a backhaul means load boards, 10 phone calls, and racing anonymous competitors on price. The lowest bid wins.", withTotm: "AI matches freight to your trucks by position, route preference, and cargo type, at contracted rates, not spot-market scraps.", image: compFreightMatching },
    ],
  },
  features: {
    headline: "Practical Tools for Fleet Operators Who Don't Have Time for Complex Software",
    items: [
      { title: "Availability Forecast - Share Once, Earn Always", description: "Input where your trucks will be and when. The platform shares your capacity with your trusted shipper and broker network automatically. Set your availability and let contracted freight come to you.", image: capAllOnOne },
      { title: "TrucksMatch - AI-Powered Freight Matching", description: "When a truck completes a delivery, TrucksMatch instantly identifies the best-fit backhaul freight job based on current location, route preference, cargo type, and your pricing floor. The return load problem becomes a notification.", image: featTrucksmatch },
      { title: "Free TMS for Carriers", description: "Full transport management functionality: job overview, driver communication, document management, proof of delivery, included at no extra cost. If your current dispatch software doesn't match you with freight automatically, TrucksOnTheMap replaces it. Free.", image: featTms },
      { title: "Driver App - Built for One-Handed Truck Cab Use", description: "Job updates, turn-by-turn navigation, proof of delivery capture, and status confirmation in one screen, designed for drivers who are driving. DHL rolled this out to hundreds of drivers. Training time: under one hour.", image: featDriverApp },
      { title: "PriceIndex - 90-Day Market Rate Intelligence", description: "See average, low, and spot freight rates for every corridor you operate, updated continuously. Know the market rate before every negotiation. Stop taking below-market rates.", image: featPriceindex },
      { title: "Invite-Only Network", description: "You control exactly which shippers and brokers see your fleet data. Your capacity is visible to your trusted partners, nobody else. This is not a load board where you race anonymous competitors on price.", image: featNetwork },
    ],
  },
  stats: {
    headline: "Numbers That Fleet Owners Care About",
    backgroundImage: statsBg,
    items: [
      { value: "−30%", description: "Empty runs, the single biggest cost reduction lever for any asset-based carrier." },
      { value: "+7%", description: "Higher profit per freight job through better freight matching and rate intelligence." },
      { value: "85%", description: "Of matched backhaul freight accepted by carriers within 4 hours of notification." },
      { value: "2-6", description: "Weeks to measurable ROI. Fastest of any user group on the platform." },
      { value: "Free", description: "No cost to join, full transport management functionality from day one." },
    ],
  },
  testimonial: {
    quote: "With the online procurement we managed to cut costs and minimize the risk of disruption in our supply chain. The platform gives us the visibility we never had before.",
    author: "Tamás Forray",
    role: "Division Head (Logistics)",
    company: "Apollo Tyres Hungary",
    backgroundImage: testimonialBg,
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"My drivers won't use another app.\"", answer: "The TrucksOnTheMAPP driver app was designed for one-handed use in a moving truck cab. DHL deployed it across hundreds of drivers in multiple countries. One hour of training per driver. The app does less than a smartphone, which is exactly why drivers use it." },
      { question: "\"I don't want shippers seeing my fleet data.\"", answer: "You control exactly who sees your availability. Invite-only. Your capacity data is visible only to the partners you choose. No shipper outside your trusted network sees anything." },
      { question: "\"Load boards work fine for backhaul freight.\"", answer: "Load boards are a commodity auction. Every load goes to the lowest price. TrucksOnTheMap matches you with contracted shippers at negotiated rates, not anonymous spot cargo at rock-bottom margins. You stop competing and start choosing." },
      { question: "\"We're too small to justify the investment.\"", answer: "A 10-truck fleet losing 30% to empty runs loses €150,000-€200,000 per year. The platform costs less than 10% of that. The ROI calculation closes itself in 4 minutes." },
      { question: "\"We already have a TMS.\"", answer: "If your current TMS shows you a live revenue-per-truck dashboard, matches incoming freight jobs to your available trucks automatically, and lets shippers book your capacity without a phone call, keep it. If it doesn't, TrucksOnTheMap does all three. Free." },
    ],
  },
  ctaBanner: {
    headline: "Add Your First Truck in 10 Minutes. Start Filling Empty Runs This Week.",
    subtext: "Free TMS included. No credit card required. GO LIVE in days, not weeks.",
  },
  ctaFinal: {
    headline: "TrucksOnTheMap Gives Carriers the Tools to Compete and Win.",
    subtext: "Fleet visibility, freight matching, rate intelligence, and a free TMS. No credit card. Live in days, not weeks.",
    ctaPrimary: "Add My First Truck Free",
    ctaSecondary: "Calculate My Empty-Run Cost",
    backgroundImage: ctaFinalBg,
  },
  sectionImages: {
    narrative: narrativeTrucksIdle,
    comparison: compFreightMatching,
    features: capFullVisibility,
  },
};

export default config;
