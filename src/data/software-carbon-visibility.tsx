import { ICPPageConfig } from "@/types/icp-page";
import heroImage from "@/assets/hero-carbon-visibility.jpg";
import imgChallenge from "@/assets/cap-dashboard.jpg";
import imgMap from "@/assets/carrier-availability-map.png";
import imgTracking from "@/assets/cap-full-visibility-cropped.png";
import imgIntegrations from "@/assets/cap-integrations.jpg";

const config: ICPPageConfig = {
  meta: {
    title: "Carbon Visibility & CO2 Reporting Software for Road Freight | TrucksOnTheMap",
    description: "Calculate and report CO2 emissions per shipment aligned with GLEC v3.0 and ISO 14083. CSRD-ready carbon visibility for European road freight. Go live in 7 weeks.",
    slug: "carbon-visibility-software",
  },
  hero: {
    badge: "Carbon Visibility & Sustainability",
    headline: "Your CSRD Report Is Due.\nYour Scope 3 Data",
    highlightedPart: "Doesn't Exist Yet.",
    subtext: "TrucksOnTheMap calculates CO2 emissions per shipment in real time — aligned with GLEC v3.0, ISO 14083, and ready for CSRD reporting. Because spreadsheets and default factors won't survive an audit.",
    ctaPrimary: "See Your Emissions Dashboard",
    ctaSecondary: "How We Calculate",
    image: heroImage,
  },
  authorityBar: {
    items: [
      { value: "ISO 14083", label: "Compliant methodology" },
      { value: "WTW", label: "Well-to-Wheel reporting" },
      { value: "−15%", label: "Average CO2 reduction after visibility" },
      { value: "7 Weeks", label: "Guaranteed GO LIVE" },
    ],
  },
  narrative: {
    headline: "50,000 Companies Must Report Scope 3. Most Can't Even Measure It.",
    paragraphs: [
      "The CSRD is already in force. EU ETS 2 arrives in 2027. And your sustainability team is asking logistics for CO2 data per shipment — data you don't have.",
      "Your carriers know how much diesel they burn. Your ERP knows the weight and destination. But nobody connects these data points into an auditable emission figure per shipment. So you end up with a consultant, a spreadsheet, and default emission factors that would embarrass anyone who reads the methodology.",
      "Road freight accounts for ~6% of total EU greenhouse gas emissions — roughly 200-220 Mt CO2 per year. The average European truck emits 62-80 gCO2e per tonne-kilometre (Well-to-Wheel). And 25-30% of all truck-kilometres in Europe are driven empty.",
      "The companies that measure this first don't just comply — they find the corridors where emissions are highest, switch to greener carriers, consolidate loads, and reduce their actual environmental impact. Visibility isn't just compliance. It's the first real step toward decarbonisation.",
    ],
    image: imgChallenge,
  },
  comparison: {
    headline: "From Guessing Emissions to Measuring Them",
    subtext: "Three shifts that change how your company reports CO2 from freight.",
    items: [
      { label: "Emission Calculation", without: "You use industry-average default factors and a spreadsheet. Your auditor questions the methodology. Your sustainability report has an asterisk on every number.", withTotm: "Per-shipment CO2 calculation using actual distance, vehicle type, fuel type, and load factor. GLEC v3.0 / ISO 14083 compliant. Auditor-ready from day one.", image: imgMap },
      { label: "Carrier Benchmarking", without: "You have no idea which carriers emit more or less. You can't compare routes, vehicle types, or fuel strategies. Green procurement is a PowerPoint slide, not a reality.", withTotm: "Every carrier, every route, every vehicle class — benchmarked on gCO2e/tkm. Identify your greenest lanes and carriers. Make sustainability a procurement criterion, not a wish.", image: imgTracking },
      { label: "CSRD / ESG Reporting", without: "Your sustainability team manually collects data from 6 carriers, 3 forwarders, and 2 ERP systems. The report is 4 months late and the numbers are estimates.", withTotm: "Automated Scope 3 Category 4 data export. WTW methodology. API-ready for your ESG reporting platform. Your CSRD submission is a download, not a project.", image: imgIntegrations },
    ],
  },
  features: {
    headline: "Built on ISO 14083. Not on Guesswork.",
    items: [
      { title: "Per-Shipment CO2 Calculation", description: "Every freight job gets an emission figure in gCO2e — calculated from actual distance, vehicle type (rigid, articulated, van), Euro emission standard, fuel type (diesel, LNG, HVO, electric), and load factor. Not a default. A real number.", image: imgMap },
      { title: "WTW & TTW Reporting", description: "ISO 14083 requires Well-to-Wheel reporting (3.17 kgCO2e/litre diesel vs 2.70 TTW). We calculate both. Your CSRD report gets the methodology it needs. Electric vehicles show WTW > 0 based on grid mix — because honest reporting matters.", image: imgTracking },
      { title: "Carrier Sustainability Scoring", description: "Rank your carriers by emission intensity per tonne-kilometre. Identify who uses Euro VI vs older fleets, who runs HVO or LNG, who has the lowest empty running percentage. Green procurement backed by data.", image: imgChallenge },
      { title: "Lane-Level Carbon Benchmarking", description: "Compare CO2 per tkm across every corridor you operate. Find where consolidation, modal shift, or carrier switching would have the biggest emission impact. Prioritise decarbonisation where it matters most.", image: imgIntegrations },
      { title: "CSRD-Ready Data Export", description: "Scope 3 Category 4 (Upstream Transportation) data formatted for your ESG reporting platform. API available. No manual data collection from carriers. No spreadsheet gymnastics.", image: imgMap },
      { title: "EU ETS 2 Impact Simulation", description: "Model how the 2027 carbon pricing on road transport fuels will affect your freight costs per corridor. Understand the financial impact before it hits — and adjust your carrier mix and routes proactively.", image: imgTracking },
    ],
  },
  stats: {
    headline: "The Numbers Behind European Freight Emissions",
    backgroundImage: heroImage,
    items: [
      { value: "62-80", heroValue: "62-80", description: "gCO2e per tonne-km — average EU road freight emission intensity (WTW)." },
      { value: "3.17", description: "kgCO2e per litre of diesel — the Well-to-Wheel emission factor you should be using." },
      { value: "25-30%", description: "Of all truck-kilometres in Europe are driven empty. Visibility reduces this." },
      { value: "~50K", description: "Companies in the EU now required to report Scope 1, 2 and 3 emissions under CSRD." },
      { value: "2027", description: "EU ETS 2 starts — carbon pricing directly increases the cost of diesel for road freight." },
    ],
  },
  testimonial: {
    quote: "Having real CO2 data per shipment changed how we select carriers. We reduced emissions by 12% in the first year simply by choosing carriers with newer fleets and better load factors on our highest-volume corridors.",
    author: "Sustainability Director",
    role: "Head of Sustainability",
    company: "European Manufacturer",
    backgroundImage: heroImage,
  },
  objections: {
    headline: "You're Probably Thinking...",
    items: [
      { question: "\"Our carriers won't share fuel consumption data.\"", answer: "They don't need to. We calculate emissions using distance-based methodology with vehicle-specific factors — the method recommended by GLEC v3.0 for most use cases. When carriers do share fuel data, we use the more precise fuel-based method. Both are ISO 14083 compliant." },
      { question: "\"We already have a sustainability consultant handling this.\"", answer: "Consultants give you annual estimates based on spend or tonne-km averages. We give you per-shipment, per-carrier, per-route emission data in real time. Your consultant can use our data for the CSRD report — but now the numbers are real." },
      { question: "\"Default emission factors are good enough for compliance.\"", answer: "Today, maybe. But CountEmissions EU (~2027-2028) will mandate ISO 14083 methodology for transport emission calculations. Companies using carrier-specific data and actual distances will be ahead. Those using spend-based factors will need to re-do everything." },
      { question: "\"How accurate are the calculations without telematics data?\"", answer: "Distance-based with vehicle-specific factors is the most common and accepted methodology under GLEC v3.0. Accuracy improves with each data point: fuel type, Euro standard, load factor, route type. We're not guessing — we're calculating with the best available data, exactly as the standard intends." },
      { question: "\"What about multimodal shipments?\"", answer: "Our platform handles road freight CO2 natively. For multimodal, we provide the road leg calculation and API integration points for rail, sea, and air emission data from specialised providers. The road segment is where you have the most control and the most improvement potential." },
    ],
  },
  ctaBanner: {
    headline: "Your First CSRD Deadline Has Already Passed. Your Freight Emission Data Shouldn't Be an Asterisk.",
    subtext: "ISO 14083 compliant. GLEC v3.0 methodology. Per-shipment CO2 visibility. GO LIVE in 7 weeks.",
  },
  ctaFinal: {
    headline: "See Your Freight Emissions on a Dashboard. Not in a Spreadsheet.",
    subtext: "Book a 30-minute demo. We'll show you per-shipment CO2 calculation on your actual corridors — with real methodology, not marketing numbers.",
    ctaPrimary: "Book Your Carbon Demo",
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
