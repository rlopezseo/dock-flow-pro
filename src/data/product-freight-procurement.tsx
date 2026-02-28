import { DollarSign, FileText, TrendingDown, Users, ShieldCheck, Globe, Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, Clock, Eye, BarChart3, Plug, Search, BellRing, ScanLine, Settings2, Handshake } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import heroImage from "@/assets/hero-freight-procurement.jpg";
import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const config: ProductPageConfig = {
  meta: {
    title: "Freight Procurement Software | Carrier Sourcing | TrucksOnTheMap",
    description: "Digitize your freight procurement process. Run RFPs, benchmark rates, and source carriers online. Cut procurement costs by 25% with TrucksOnTheMap.",
    slug: "freight-procurement",
  },
  hero: {
    badge: "Freight Procurement Software",
    headline: (
      <>
        Freight procurement software
        <br />
        <span className="text-[#bbb]">that replaces</span>
        <br />
        spreadsheet chaos
      </>
    ),
    subtext: "Digitize your entire freight procurement cycle — from RFP creation to carrier award. Benchmark rates, compare bids, and source the right carriers in days, not weeks.",
    ctaPrimary: "DIGITIZE PROCUREMENT",
    ctaSecondary: "Explore Features",
    image: heroImage,
  },
  trustBar: {
    kpis: [
      { target: 25, suffix: "%", label: "Cost Savings" },
      { target: 5, suffix: "x", label: "Faster RFP Cycles" },
      { target: 300, suffix: "+", label: "Carriers Evaluated per RFP" },
      { target: 98, suffix: "%", label: "Customer Retention" },
    ],
  },
  problem: {
    label: "The Problem",
    headline: "Why freight procurement software is replacing Excel tenders in 2025",
    subtext: "Most logistics teams still run freight tenders through Excel, email, and manual comparison. The inefficiency is staggering — and so is the cost.",
    items: [
      { icon: FileText, title: "Excel-Based RFPs", description: "Building and distributing RFPs via spreadsheets leads to version conflicts, data entry errors, and weeks of wasted time per tender cycle." },
      { icon: Clock, title: "Weeks-Long Tender Cycles", description: "Manual procurement cycles take 4–8 weeks. By the time you award, market rates have already shifted — and you've overpaid." },
      { icon: DollarSign, title: "No Rate Benchmarking", description: "Without real-time market data, you have no way to know if carrier bids are competitive. You award based on gut feel, not data." },
      { icon: Users, title: "Limited Carrier Pool", description: "Manual processes limit how many carriers you can realistically evaluate. Most tenders include <20 carriers — missing better options." },
      { icon: Eye, title: "Zero Procurement Visibility", description: "Leadership has no dashboard view of procurement status, spend by lane, or carrier award history. Reporting takes days." },
      { icon: ShieldCheck, title: "Compliance & Audit Gaps", description: "Email-based tenders leave no audit trail. Who submitted what, when, and what was the evaluation criteria? Nobody knows." },
    ],
    cta: "Modernize Your Procurement",
  },
  outcomes: {
    label: "What You Get",
    headline: "How freight procurement software cuts costs by 25% and speeds up RFPs 5x",
    heroCard: {
      icon: TrendingDown,
      target: 25,
      suffix: "%",
      sublabel: "average cost savings",
      title: "Cut freight costs with competitive digital tenders",
      description: "By inviting more carriers, benchmarking against market rates, and automating evaluation, you consistently achieve 20–30% savings vs. manual procurement.",
    },
    cards: [
      { icon: Clock, target: 5, suffix: "x", sublabel: "faster", title: "Accelerate RFP cycle time", description: "From 6 weeks to 6 days. Digital RFPs with automated evaluation slash procurement timelines." },
      { icon: Users, target: 300, suffix: "+", sublabel: "carriers per RFP", title: "Evaluate more carriers, effortlessly", description: "Digital distribution lets you reach hundreds of carriers simultaneously — without extra work." },
      { icon: BarChart3, target: 100, suffix: "%", sublabel: "audit trail", title: "Full procurement transparency", description: "Every bid, evaluation, and award decision is logged and reportable. Complete compliance at your fingertips." },
    ],
  },
  capabilities: {
    label: "Key Capabilities",
    headline: "Freight procurement software features: RFP builder, rate benchmarking, and carrier sourcing",
    groups: [
      { id: "rfp", icon: FileText, title: "Digital RFP Builder", subtitle: "Create tenders in minutes", features: ["Template library for recurring lanes and commodity types", "Custom evaluation criteria: price, transit time, service level", "Bulk lane upload from CSV or TMS export", "Multi-round bidding with revision tracking"] },
      { id: "benchmark", icon: BarChart3, title: "Rate Benchmarking", subtitle: "Know if the price is right", features: ["Real-time lane-level rate indices from market data", "Automatic bid scoring against benchmark rates", "Historical rate trend analysis per lane", "Spot vs. contract rate comparison tools"] },
      { id: "carrier", icon: Handshake, title: "Carrier Sourcing & Qualification", subtitle: "Find and vet the right carriers", features: ["Invite carriers from your network or discover new ones", "Automated compliance verification: insurance, authority, safety", "Carrier performance history integrated into bid evaluation", "Preferred and backup carrier assignment per lane"] },
      { id: "award", icon: DollarSign, title: "Award & Allocation", subtitle: "Data-driven decisions", features: ["Side-by-side bid comparison with weighted scoring", "Split award scenarios: primary, secondary, backup carriers", "One-click award notification and contract generation", "Rate card export to TMS for immediate execution"] },
      { id: "integrations", icon: Plug, title: "ERP & TMS Integration", subtitle: "Seamless data flow", features: ["Direct integration with SAP, Oracle, JDE, and more", "Automated lane data import from TMS", "Rate card sync to procurement and finance systems", "API-first architecture for custom workflows"] },
    ],
  },
  ctaBanner: {
    label: "Ready to transform procurement?",
    headline: (
      <>
        Source carriers. <br />
        <span className="text-white/60">Not spreadsheets.</span>
      </>
    ),
    subtext: "Join leading shippers who've cut freight costs by 25% and reduced procurement cycles from weeks to days with TrucksOnTheMap.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Register Free",
  },
  useCases: {
    label: "Use Cases",
    headline: "Freight procurement software for shippers, 3PLs, retail, and pharma",
    cases: [
      { id: "enterprise", icon: Factory, label: "Enterprise Shippers", image: imgManufacturing, headline: "Strategic freight procurement for large-scale operations", description: "Run multi-lane, multi-region tenders across your entire network. Consolidate carrier evaluation and award decisions in one platform.", benefits: ["Multi-region, multi-lane RFPs", "Weighted scoring by lane", "Split award management", "Executive procurement dashboards"] },
      { id: "3pl", icon: Package, label: "3PL Providers", image: img3pl, headline: "Carrier sourcing for third-party logistics operations", description: "Source carriers on behalf of your clients with separate rate cards, evaluation criteria, and award workflows per account.", benefits: ["Client-specific procurement workflows", "Separate carrier pools per account", "White-label RFP portal", "Margin and markup management"] },
      { id: "retail", icon: ShoppingCart, label: "Retail & FMCG", image: imgRetail, headline: "Freight procurement for high-volume retail distribution", description: "Manage seasonal volume swings with agile procurement. Source capacity for peak season months in advance while keeping spot costs low.", benefits: ["Seasonal capacity planning", "Volume commitment management", "Vendor compliance integration", "Cost-per-unit analytics"] },
      { id: "coldchain", icon: Snowflake, label: "Cold Chain & Pharma", image: imgColdchain, headline: "Specialized carrier sourcing for temperature-controlled freight", description: "Source carriers with reefer certifications, GDP compliance, and cold chain track records. Evaluate on more than just price.", benefits: ["Reefer certification verification", "GDP compliance scoring", "Temperature deviation history", "Lane-specific equipment matching"] },
      { id: "crossborder", icon: Globe, label: "Cross-Border & International", image: imgInbound, headline: "International freight procurement made simple", description: "Source carriers across borders with multi-currency support, customs documentation requirements, and cross-border compliance built in.", benefits: ["Multi-currency bidding", "Customs documentation support", "Cross-border compliance checks", "Transit time analysis by border crossing"] },
    ],
    cta: "Start Your Digital Procurement",
  },
  howItWorks: {
    label: "How It Works",
    headline: "How does freight procurement software work? Five steps to digital tenders",
    steps: [
      { icon: FileText, step: "01", title: "Create Your RFP", description: "Build your tender from templates or import lanes from your TMS. Define evaluation criteria, deadlines, and carrier requirements." },
      { icon: Users, step: "02", title: "Invite & Distribute", description: "Send the RFP to hundreds of carriers simultaneously. They bid through the portal — no email chains or spreadsheet attachments." },
      { icon: BarChart3, step: "03", title: "Evaluate & Benchmark", description: "AI-powered scoring compares bids against market rates, transit times, and carrier performance. Identify the best value instantly." },
      { icon: DollarSign, step: "04", title: "Award & Contract", description: "Make data-driven award decisions with split-award scenarios. Generate rate cards and send award notifications in one click." },
      { icon: Settings2, step: "05", title: "Execute & Optimize", description: "Export rate cards to your TMS. Track carrier adherence to awarded rates. Continuously optimize with procurement analytics." },
    ],
  },
  compare: {
    label: "Freight Procurement Software vs. Excel",
    headline: (
      <>
        Freight procurement software vs.<br className="hidden sm:block" /> spreadsheet-based carrier sourcing
      </>
    ),
    features: [
      "Digital RFP creation & distribution",
      "Real-time rate benchmarking",
      "Automated bid evaluation & scoring",
      "Carrier compliance verification",
      "Multi-round bidding support",
      "Split award management",
      "Full audit trail & compliance",
      "Lane-level analytics & reporting",
      "TMS / ERP rate card sync",
      "Complete in days, not weeks",
    ],
    oldWay: { title: "Excel & Email Tenders", subtitle: "The old way" },
    cta: "Switch to Digital Procurement",
  },
  faq: {
    label: "Frequently Asked Questions",
    headline: "Freight procurement software FAQ: costs, features, and implementation",
    items: [
      { q: "What is freight procurement software?", a: "Freight procurement software is a digital platform that replaces manual, spreadsheet-based tendering with automated RFP creation, carrier bidding, rate benchmarking, and award management — all in one place with full audit trail and compliance." },
      { q: "How much can freight procurement software save on freight costs?", a: "Customers typically achieve 20–30% freight cost savings through increased carrier competition, real-time rate benchmarking, and data-driven award decisions. The biggest savings come from evaluating 10x more carriers per lane than manual processes allow." },
      { q: "How long does a freight RFP take with procurement software?", a: "What used to take 4–8 weeks can be completed in 5–7 days. Automated distribution, online carrier bidding, and AI-powered evaluation eliminate the bottlenecks of manual freight procurement." },
      { q: "What is the best freight procurement software for shippers?", a: "The best freight procurement software combines digital RFP creation, real-time rate benchmarking, automated carrier evaluation, and TMS integration. TrucksOnTheMap offers all of these with enterprise-grade security and multi-region support." },
      { q: "Can freight procurement software benchmark carrier rates?", a: "Yes. Bids are automatically scored against real-time market rate indices for each lane. You'll see instantly if a carrier's bid is above, at, or below market — so you never overpay on freight." },
      { q: "Does freight procurement software integrate with SAP, Oracle, and other ERPs?", a: "Yes. Awarded rate cards can be exported directly to SAP, Oracle, JDE, Blue Yonder, and other TMS/ERP systems via API or EDI. Lane data can also be imported automatically for RFP creation." },
      { q: "How do carriers participate in digital freight procurement?", a: "Carriers receive an invitation link and bid through a secure online portal. No software installation required. They can view lane details, submit rates, track bid status, and manage multi-round bidding 24/7." },
      { q: "Is freight procurement software suitable for small to mid-size shippers?", a: "Absolutely. The platform scales from SMB shippers running 10-lane tenders to enterprise operations with 1,000+ lanes across multiple regions. Smaller shippers often see the highest ROI because they're replacing entirely manual processes." },
      { q: "What compliance features does freight procurement software offer?", a: "Every action — bid submission, evaluation criteria, award decision — is logged with timestamps and user attribution. Reports are exportable for compliance audits, management review, and regulatory requirements." },
      { q: "How long does it take to implement freight procurement software?", a: "Most implementations go live within 2–3 weeks including platform configuration, TMS/ERP integration, user training, and carrier onboarding. No hardware installation required." },
    ],
  },
  ctaFinal: {
    label: "Ready to Modernize?",
    headline: "Let's talk freight procurement",
    subtext: "Book a 30-minute discovery call. We'll show you how to cut procurement cycles from weeks to days and save 25% on freight spend.",
  },
};

export default config;
