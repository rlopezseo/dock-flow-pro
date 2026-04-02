import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Check, X, Zap, Shield, BarChart3, Globe, Clock, Users, Truck, Eye, Quote, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroImg from "@/assets/hero-shippers.jpg";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import bgHowItWorks from "@/assets/bg-howitworks.jpg";
import bgTestimonials from "@/assets/bg-testimonials.jpg";
import logoTotm from "@/assets/logo-totm-dark.png";
import logoTransporeon from "@/assets/logo-transporeon.png";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";

import weberLogo from "@/assets/logos/weber.png";
import vredesteinLogo from "@/assets/logos/vredestein.png";
import rigipsLogo from "@/assets/logos/rigips.png";
import kuehneNagelLogo from "@/assets/logos/kuehne-nagel.png";
import isoverLogo from "@/assets/logos/isover.png";

const clientLogos = [
  { src: weberLogo, alt: "Weber Saint-Gobain" },
  { src: vredesteinLogo, alt: "Vredestein Tires" },
  { src: rigipsLogo, alt: "Rigips Saint-Gobain" },
  { src: kuehneNagelLogo, alt: "Kuehne + Nagel" },
  { src: isoverLogo, alt: "Isover Saint-Gobain" },
];

/* ─── Helpers ─── */
const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
};

const AnimatedValue = ({ value, inView }: { value: string; inView: boolean }) => {
  const match = value.match(/([+-−]?)(\d+[.,]?\d*)(.*)/);
  const [display, setDisplay] = useState(0);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2]?.replace(",", ".") ?? "0";
  const suffix = match?.[3] ?? "";
  const target = Number.parseFloat(numStr);
  const useComma = match?.[2]?.includes(",") ?? false;
  const decimalPlaces = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  useEffect(() => {
    if (!inView || !match || Number.isNaN(target)) return;
    let completed = false;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(v),
      onComplete: () => { completed = true; setDisplay(target); },
    });
    return () => { controls.stop(); if (!completed) setDisplay(target); };
  }, [inView, target, value]);

  if (!match || Number.isNaN(target)) return <span>{value}</span>;
  const formatted = decimalPlaces === 0 ? Math.round(display).toString() : display.toFixed(decimalPlaces);
  const displayStr = useComma ? formatted.replace(".", ",") : formatted;
  return <span>{prefix}{displayStr}{suffix}</span>;
};

const LogoBannerStrip = () => {
  const logos = [...clientLogos, ...clientLogos];
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mb-6">
        <p className="text-xs md:text-sm font-body font-normal tracking-[0.2em] uppercase text-muted-foreground/50 text-center">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, i) => (
            <img key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} className="h-8 md:h-11 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity duration-500 flex-shrink-0" loading="lazy" />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

/* ═══════════ COMPARISON DATA ═══════════ */
const comparisonFeatures = [
  { category: "Setup & Onboarding", features: [
    { name: "Time to go live", totm: "Days", competitor: "Weeks to months", winner: "totm" },
    { name: "Onboarding complexity", totm: "Self-service, guided setup", competitor: "Dedicated project team required", winner: "totm" },
    { name: "Free TMS included", totm: true, competitor: false, winner: "totm" },
    { name: "No credit card required", totm: true, competitor: false, winner: "totm" },
  ]},
  { category: "Pricing & Flexibility", features: [
    { name: "Transparent pricing", totm: "Pay-per-use, no hidden fees", competitor: "Enterprise licensing, complex tiers", winner: "totm" },
    { name: "Minimum commitment", totm: "None", competitor: "12–36 month contracts", winner: "totm" },
    { name: "SME-friendly", totm: true, competitor: false, winner: "totm" },
  ]},
  { category: "Technology & UX", features: [
    { name: "Modern UI/UX", totm: "Premium, intuitive design", competitor: "Legacy interface", winner: "totm" },
    { name: "Real-time tracking", totm: true, competitor: true, winner: "tie" },
    { name: "Predictive ETA", totm: "AI-powered, multi-source", competitor: "Basic GPS-based", winner: "totm" },
    { name: "API-first architecture", totm: true, competitor: "Limited", winner: "totm" },
  ]},
  { category: "Coverage & Network", features: [
    { name: "European coverage", totm: "Full EU + CEE focus", competitor: "Global but diluted", winner: "totm" },
    { name: "Carrier network", totm: "Curated, quality-vetted", competitor: "Large but unvetted", winner: "tie" },
    { name: "Multi-modal support", totm: "Road-focused specialist", competitor: "Multi-modal generalist", winner: "tie" },
  ]},
  { category: "Support", features: [
    { name: "Customer support", totm: "Direct, senior-level team", competitor: "Tiered support, slow escalation", winner: "totm" },
    { name: "SLA compliance", totm: "99,99%", competitor: "Standard SLA", winner: "totm" },
    { name: "Dedicated account manager", totm: "All plans", competitor: "Enterprise only", winner: "totm" },
  ]},
];

const switchReasons = [
  { icon: Zap, title: "Go Live in Days, Not Months", description: "No lengthy implementation projects. Our guided onboarding gets you operational within days, with full support from senior engineers." },
  { icon: Shield, title: "Enterprise Security, Startup Speed", description: "ISO 27001 certified, GDPR compliant, and SOC2 ready. All the security guarantees without the bureaucratic overhead." },
  { icon: BarChart3, title: "Transparent, Predictable Pricing", description: "No hidden fees, no surprise invoices. Pay only for what you use with clear per-shipment pricing that scales with your business." },
  { icon: Globe, title: "European Road Freight Specialist", description: "Purpose-built for European logistics corridors. Deep understanding of CEE routes, regulations, and carrier networks." },
  { icon: Users, title: "Direct Access to Decision Makers", description: "No ticket queues, no chatbots. Direct access to senior team members who understand logistics, not just software." },
  { icon: Eye, title: "Real-Time Visibility That Actually Works", description: "Multi-source tracking with AI-powered ETAs. Not just a dot on a map — actionable intelligence for every shipment." },
];

/* ═══════════ PAGE ═══════════ */
const AlternativeTransporeon = () => {
  useEffect(() => {
    document.title = "TrucksOnTheMap vs Transporeon | Best Alternative for European Freight";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Compare TrucksOnTheMap vs Transporeon. Faster setup, transparent pricing, premium UX, and dedicated support for European road freight.");
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="light-sections bg-[hsl(0,0%,98%)]">
          <LogoBannerStrip />
          <ComparisonTableSection />
          <WhySwitchSection />
          <StatsSection />
          <TestimonialSection />
          <FAQSection />
          <CTAFinalSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

/* ═══════════ HERO ═══════════ */
const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-end pb-20 md:pb-28 pt-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="European freight operations" className="w-full h-full object-cover scale-105" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)] via-[hsl(220,20%,7%)]/75 to-[hsl(220,20%,7%)]/55" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[hsl(220,20%,5%)]/80 to-transparent" />
    </div>

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-5 gap-12 items-end">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="lg:col-span-3">
          <span className="inline-block px-5 py-2 rounded-full text-[11px] font-body font-normal tracking-[0.2em] uppercase text-white/90 border border-white/15 bg-white/[0.08] backdrop-blur-xl mb-7">
            Alternative to Transporeon
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.1rem] font-display font-extralight leading-[1.28] tracking-tight mb-5 text-white">
            The Smarter Alternative{"\n"}to Transporeon
            <br /><span className="text-white/40">for European Road Freight</span>
          </h1>
          <p className="text-[13px] sm:text-sm text-white/65 max-w-xl font-body font-normal leading-[1.9] mb-10">
            Same enterprise-grade visibility. Faster implementation. Transparent pricing. Premium UX. Go live in days, not months — without the complexity of legacy platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_30px_hsl(207,60%,30%/0.3)]">
              Book Free Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#comparison" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-white/90 bg-white/[0.06] backdrop-blur-lg border border-white/[0.12] hover:bg-white/[0.12] transition-all duration-500">
              See Full Comparison
            </a>
          </div>
        </motion.div>

        {/* Right column — Logo comparison graphic */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="lg:col-span-2 hidden lg:flex flex-col items-center justify-start pt-4">
          <div className="relative w-full flex flex-col items-center gap-10">
            {/* TOTM Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <img src={logoTotm} alt="TrucksOnTheMap" className="h-20 w-auto brightness-0 invert drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]" />
            </motion.div>

            {/* VS divider */}
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <span className="text-base font-display font-bold text-white/80">VS</span>
              </div>
            </div>

            {/* Transporeon Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center opacity-30"
            >
              <img src={logoTransporeon} alt="Transporeon" className="h-14 w-auto brightness-0 invert" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════ COMPARISON TABLE ═══════════ */
const ComparisonTableSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-white" ref={ref} id="comparison">
      <div className="container relative z-10">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-5">Feature-by-Feature</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-display font-extralight tracking-tight text-foreground leading-[1.12] mb-5">
              Honest Comparison,{" "}
              <span className="text-muted-foreground/50">No Marketing Spin</span>
            </h2>
            <p className="text-sm md:text-[15px] text-muted-foreground font-body font-normal leading-relaxed">
              We believe in transparency. Here's how TrucksOnTheMap stacks up against Transporeon across the dimensions that matter most.
            </p>
          </div>
        </FadeUp>

        {/* Table header */}
        <FadeUp>
          <div className="hidden md:grid grid-cols-12 gap-4 mb-6 px-6">
            <div className="col-span-5" />
            <div className="col-span-3 flex items-center justify-center gap-2">
              <img src={logoTotm} alt="TrucksOnTheMap" className="h-4 w-auto opacity-80" />
            </div>
            <div className="col-span-3 flex items-center justify-center gap-2">
              <img src={logoTransporeon} alt="Transporeon" className="h-4 w-auto opacity-50" />
            </div>
            <div className="col-span-1" />
          </div>
        </FadeUp>

        {/* Comparison rows */}
        <div className="space-y-8">
          {comparisonFeatures.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * catIdx }}
            >
              <p className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-primary mb-3 px-6">{category.category}</p>
              <div className="rounded-2xl border border-border/50 overflow-hidden bg-card">
                {category.features.map((feat, i) => (
                  <div
                    key={feat.name}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 items-center ${
                      i < category.features.length - 1 ? "border-b border-border/30" : ""
                    } hover:bg-primary/[0.02] transition-colors duration-300`}
                  >
                    <div className="md:col-span-5">
                      <p className="text-[13px] font-body font-normal text-foreground">{feat.name}</p>
                    </div>
                    <div className="md:col-span-3 flex items-center justify-start md:justify-center gap-2">
                      {typeof feat.totm === "boolean" ? (
                        feat.totm ? (
                          <div className="w-6 h-6 rounded-full bg-[hsl(150,50%,40%)]/10 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-[hsl(150,50%,40%)]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[hsl(0,50%,50%)]/10 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-[hsl(0,50%,50%)]" />
                          </div>
                        )
                      ) : (
                        <span className="text-[12px] font-body text-foreground/80 font-medium">{feat.totm}</span>
                      )}
                    </div>
                    <div className="md:col-span-3 flex items-center justify-start md:justify-center gap-2">
                      {typeof feat.competitor === "boolean" ? (
                        feat.competitor ? (
                          <div className="w-6 h-6 rounded-full bg-[hsl(150,50%,40%)]/10 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-[hsl(150,50%,40%)]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[hsl(0,50%,50%)]/10 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-[hsl(0,50%,50%)]" />
                          </div>
                        )
                      ) : (
                        <span className="text-[12px] font-body text-muted-foreground">{feat.competitor}</span>
                      )}
                    </div>
                    <div className="md:col-span-1 flex justify-end">
                      {feat.winner === "totm" && (
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <FadeUp delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/[0.06] border border-primary/10">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground/80">TrucksOnTheMap wins in 13 of 16 categories</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ WHY SWITCH ═══════════ */
const WhySwitchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgHowItWorks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-5">Why Switch</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-display font-extralight tracking-tight text-foreground leading-[1.12] mb-5">
              6 Reasons to Make the Move
            </h2>
            <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed">
              We're not trying to replace every feature. We're focused on what European shippers and carriers actually need — done exceptionally well.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {switchReasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="group bg-card rounded-2xl p-8 border border-border/40 shadow-sm hover:shadow-lg hover:border-primary/15 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-6 group-hover:bg-primary/[0.12] transition-colors duration-500">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[15px] font-display font-light text-foreground mb-3 tracking-wide">{reason.title}</h3>
                <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.85]">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <FadeUp delay={0.3}>
          <div className="flex justify-center mt-14">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_30px_hsl(207,60%,30%/0.15)]"
            >
              Start Your Migration <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ STATS ═══════════ */
const stats = [
  { value: "−31%", description: "Empty-run reduction for carriers switching from legacy platforms" },
  { value: "3x", description: "Faster implementation compared to Transporeon's typical onboarding" },
  { value: "99,99%", description: "SLA compliance maintained across all European corridors" },
  { value: "47%", description: "Average cost saving on platform fees vs. Transporeon licensing" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[hsl(210,20%,88%)]" />
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-[0.3]" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-[hsl(210,15%,92%)]/75 backdrop-blur-[2px]" />

      <div className="container relative z-10">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-5">The Numbers</p>
            <h2 className="text-3xl md:text-[2.75rem] font-display font-extralight tracking-tight text-foreground leading-[1.12] mb-5">
              Real Results from Real Migrations
            </h2>
            <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed max-w-lg mx-auto">
              Companies that switched from Transporeon to TrucksOnTheMap report measurable improvements across every KPI.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative rounded-2xl overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/50 shadow-sm hover:shadow-lg hover:bg-white/55 transition-all duration-500 p-7 text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <p className="text-3xl sm:text-4xl font-display font-extralight leading-none tracking-tight text-primary mb-3">
                <AnimatedValue value={stat.value} inView={inView} />
              </p>
              <p className="text-[11px] sm:text-[12px] text-muted-foreground font-body font-normal leading-[1.8]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ TESTIMONIALS ═══════════ */
const testimonials = [
  {
    quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control.",
    author: "Mr. T. Forray",
    role: "Head of Supply Chain",
    company: "Apollo Tyres HU",
    avatar: avatarForray,
  },
  {
    quote: "The latest technology & beautiful design in every tool we create. So, road freight becomes fun again.",
    author: "Mr. T. Domonkos, MBA",
    role: "CEO",
    company: "TrucksOnTheMap",
    avatar: avatarDomonkos,
  },
  {
    quote: "With the online procurement we managed to cut costs and minimize the risk of disruption in our supply chain.",
    author: "Mr. B. Rafaj",
    role: "Production and Logistics Manager",
    company: "Saint-Gobain Construction Products SK",
    avatar: avatarRafaj,
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgTestimonials} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">What Our Clients Say</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Companies That Already Made the Switch
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-10 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-7">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              <p className="text-base md:text-lg font-display font-light text-foreground leading-relaxed mb-10 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-7 border-t border-border/40">
                <img src={t.avatar} alt={t.author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10" />
                <div>
                  <p className="text-sm font-display font-normal text-foreground">{t.author}</p>
                  <p className="text-xs text-primary font-body font-normal">{t.role}</p>
                  <p className="text-xs text-muted-foreground font-body font-normal">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ FAQ ═══════════ */
const faqItems = [
  { question: "How long does it take to migrate from Transporeon?", answer: "Most companies complete the migration within 1–2 weeks. Our team handles data migration, carrier onboarding, and integration setup. You maintain parallel operations during the transition so there's zero disruption to your supply chain." },
  { question: "Can I keep my existing carrier network?", answer: "Absolutely. We integrate with your existing carriers regardless of what platform they use. Our API-first architecture means your carriers can connect via their preferred telematics or even basic GPS — no app installation required." },
  { question: "Is the platform suitable for enterprise-scale operations?", answer: "Yes. We handle millions of shipments for companies like Saint-Gobain and Apollo Tyres. Our infrastructure is ISO 27001 certified, GDPR compliant, and built for 99.99% uptime across all European corridors." },
  { question: "What about multi-modal shipments?", answer: "We're specialists in European road freight — and we do it exceptionally well. If you need a platform that's laser-focused on road logistics with deep CEE expertise, TrucksOnTheMap is the right choice. For ocean or air freight, we integrate with dedicated platforms." },
  { question: "How does pricing compare to Transporeon?", answer: "Our customers typically report 40–50% savings on platform fees. We offer transparent per-shipment pricing with no minimum commitments, no setup fees, and a free TMS included. No hidden costs, no surprise invoices." },
  { question: "Do you offer a trial period?", answer: "Yes. We offer a full-featured pilot program where you can test the platform with real shipments before committing. Book a demo and we'll set up a customized trial for your specific use case." },
];

const FAQSection = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <FadeUp>
            <div className="lg:sticky lg:top-32">
              <div className="accent-line w-16 mb-8" />
              <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-display font-extralight tracking-tight text-foreground leading-[1.15] mb-6">
                Switching Made Simple
              </h2>
              <p className="text-[13px] text-muted-foreground font-body leading-[1.8]">
                Real concerns from real logistics teams considering the switch. Every question here has been answered in production.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-3">
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <AccordionTrigger className="px-7 py-6 text-[13px] sm:text-sm font-display font-light text-foreground hover:no-underline [&[data-state=open]]:text-primary transition-colors duration-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-7 pb-6 text-[12.5px] text-muted-foreground font-body font-normal leading-[1.85]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════ CTA FINAL ═══════════ */
const CTAFinalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden" id="contact" ref={ref}>
      <img src={bgCtaFinal} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />

      <div className="container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-xl mx-auto">
          <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-4">Ready to Switch?</p>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-white mb-5 leading-tight">
            Leave Legacy Behind.{" "}
            <span className="text-white/40">Start in Days.</span>
          </h2>
          <p className="text-white/50 font-body font-normal text-sm mb-10 leading-relaxed">
            Book a 15-minute demo and see why logistics leaders across Europe are switching to TrucksOnTheMap. Free migration support included.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-body font-normal text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Book Free Demo <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+442038078493"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-body font-normal text-sm rounded-full border border-white/15 transition-all duration-300"
            >
              +44 (20) 3807 84 93
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlternativeTransporeon;
