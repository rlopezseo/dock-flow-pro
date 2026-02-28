import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, Check, X, FileSpreadsheet, Mail, Quote } from "lucide-react";
import { ProductPageConfig } from "@/types/product-page";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoCarouselSection from "./LogoCarouselSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import heroImage from "@/assets/hero-dock.jpg";
import bgHowItWorks from "@/assets/bg-howitworks.jpg";
import bgCtaBanner from "@/assets/bg-cta-banner.jpg";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import bgOutcomes from "@/assets/bg-outcomes.jpg";
import bgCapabilities from "@/assets/bg-capabilities.jpg";
import bgCompare from "@/assets/bg-compare.jpg";
import bgTestimonials from "@/assets/bg-testimonials.jpg";
import iconTotm from "@/assets/icon-totm.png";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";

/* ─── Counter ─── */
const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);
  return <>{display}{suffix}</>;
};

/* ─── Section wrapper ─── */
const Section = ({ children, className = "", bg, id }: { children: React.ReactNode; className?: string; bg?: "light" | "alt" | "dark"; id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id={id} className={`relative py-28 overflow-hidden ${bg === "alt" ? "bg-[hsl(220,12%,96%)]" : ""} ${className}`} ref={ref}>
      {children}
    </section>
  );
};

const testimonials = [
  { quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control.", author: "Mr. T. Forray", role: "Head of Supply Chain", company: "Apollo Tyres HU", avatar: avatarForray },
  { quote: "The latest technology & beautiful design in every tool we create. So, road freight becomes fun again.", author: "Mr. T. Domonkos, MBA", role: "CEO", company: "TrucksOnTheMap", avatar: avatarDomonkos },
  { quote: "With the online procurement we managed to cut costs and minimize the risk of disruption in our supply chain.", author: "Mr. B. Rafaj", role: "Production and Logistics Manager", company: "Saint-Gobain Construction Products SK", avatar: avatarRafaj },
];

/* ═══════════════════════════════════════════ */
const ProductPageTemplate = ({ config }: { config: ProductPageConfig }) => {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <HeroBlock config={config} />

        <div className="light-sections bg-[hsl(0,0%,98%)]">
          {/* TRUST BAR */}
          <TrustBarBlock config={config} />

          {/* PROBLEM */}
          <ProblemBlock config={config} />

          {/* OUTCOMES */}
          <OutcomesBlock config={config} />

          {/* LOGOS */}
          <LogoCarouselSection />

          {/* CAPABILITIES */}
          <CapabilitiesBlock config={config} />

          {/* CTA BANNER */}
          <CTABannerBlock config={config} />

          {/* USE CASES */}
          <UseCasesBlock config={config} />

          {/* HOW IT WORKS */}
          <HowItWorksBlock config={config} />

          {/* PROOF */}
          <ProofBlock />

          {/* COMPARE */}
          <CompareBlock config={config} />

          {/* FAQ */}
          <FAQBlock config={config} />

          {/* CTA FINAL */}
          <CTAFinalBlock config={config} />

          <Footer />
        </div>
      </main>
    </>
  );
};

/* ═══════════ HERO ═══════════ */
const HeroBlock = ({ config }: { config: ProductPageConfig }) => {
  const c = config.hero;
  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={c.image || heroImage} alt={config.meta.title} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)]/92 via-[hsl(220,20%,7%)]/40 to-[hsl(220,20%,7%)]/60" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[hsl(220,20%,7%)]/85 via-[hsl(220,20%,7%)]/55 to-transparent" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-3xl">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-body font-normal tracking-widest uppercase text-white/90 border border-white/15 bg-white/10 backdrop-blur-md mb-6">
            {c.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-display font-extralight leading-[1.08] tracking-tight mb-6 text-foreground">
            {c.headline}
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-lg font-body font-normal leading-relaxed mb-10">{c.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300">
              {c.ctaPrimary} <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-foreground bg-[hsl(210,10%,30%/0.45)] backdrop-blur-sm border border-[hsl(210,10%,40%/0.3)] hover:bg-[hsl(210,10%,35%/0.6)] transition-all duration-300">
              {c.ctaSecondary} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ TRUST BAR ═══════════ */
const TrustBarBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <section className="relative py-14 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 accent-line" />
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-y-8">
          {config.trustBar.kpis.map((kpi, i) => (
            <motion.div key={kpi.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 * i }} className="flex flex-col items-center text-center flex-1 min-w-[140px] relative">
              {i > 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border hidden lg:block" />}
              <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-light tracking-tight number-accent leading-none mb-2">
                <Counter target={kpi.target} suffix={kpi.suffix} inView={inView} />
              </span>
              <span className="text-[11px] md:text-xs font-body font-normal text-muted-foreground tracking-[0.15em] uppercase mt-1">{kpi.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

/* ═══════════ PROBLEM ═══════════ */
const ProblemBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const c = config.problem;
  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgHowItWorks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-2xl mb-16">
          <div className="accent-line w-12 mb-6" />
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">{c.headline}</h2>
          <p className="text-muted-foreground font-body font-normal text-sm leading-relaxed max-w-lg">{c.subtext}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 * i }} className="bg-card rounded-xl p-7 card-elevated transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/15 group-hover:to-primary/8 transition-all duration-500">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-[13px] font-display font-normal text-foreground mb-2.5 tracking-wide">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="text-center mt-14">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {c.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ OUTCOMES ═══════════ */
const OutcomesBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const c = config.outcomes;
  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgOutcomes} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-2xl mb-16">
          <div className="accent-line w-12 mb-6" />
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">{c.headline}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          {/* Hero card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="md:col-span-7 bg-gradient-to-br from-[hsl(207,60%,28%)] to-[hsl(207,45%,22%)] rounded-2xl p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -right-8 -bottom-20 w-48 h-48 rounded-full bg-white/3" />
            <div className="relative z-10">
              <c.heroCard.icon className="w-7 h-7 text-white/60 mb-6" />
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl md:text-7xl font-display font-light text-white leading-none">
                  <Counter target={c.heroCard.target} suffix={c.heroCard.suffix} inView={inView} />
                </span>
                <span className="text-sm font-body font-normal text-white/50 mb-2">{c.heroCard.sublabel}</span>
              </div>
              <h3 className="text-lg md:text-xl font-display font-light text-white mb-3">{c.heroCard.title}</h3>
              <p className="text-sm text-white/60 font-body font-normal leading-relaxed max-w-md">{c.heroCard.description}</p>
            </div>
          </motion.div>

          {/* First secondary card (5 cols) */}
          {c.cards[0] && (() => {
            const Card0Icon = c.cards[0].icon;
            return (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }} className="md:col-span-5 bg-card rounded-2xl p-8 card-elevated transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <Card0Icon className="w-6 h-6 text-primary/40 mb-5" />
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-display font-light number-accent leading-none">
                    <Counter target={c.cards[0].target} suffix={c.cards[0].suffix} inView={inView} />
                  </span>
                </div>
                <h3 className="text-[13px] font-display font-normal text-foreground mb-2">{c.cards[0].title}</h3>
                <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">{c.cards[0].description}</p>
              </motion.div>
            );
          })()}

          {/* Middle cards (4 cols each) */}
          {c.cards.slice(1, 3).map((card, i) => {
            const CardIcon = card.icon;
            return (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.16 + 0.08 * i }} className="md:col-span-4 bg-card rounded-2xl p-7 card-elevated transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <CardIcon className="w-6 h-6 text-primary/40 mb-4" />
                <span className="block text-4xl font-display font-light number-accent leading-none mb-2">
                  <Counter target={card.target} suffix={card.suffix} inView={inView} />
                </span>
                <p className="text-[10px] font-body text-muted-foreground tracking-wider uppercase mb-3">{card.sublabel}</p>
                <h3 className="text-[13px] font-display font-normal text-foreground mb-1.5">{card.title}</h3>
                <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">{card.description}</p>
              </motion.div>
            );
          })}

          {/* Stacked pair (4 cols, 2 cards) */}
          {c.cards.length >= 5 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.32 }} className="md:col-span-4 flex flex-col gap-4">
              {c.cards.slice(3, 5).map((card) => {
                const StackIcon = card.icon;
                return (
                  <div key={card.title} className="bg-card rounded-2xl p-6 card-elevated flex-1 relative overflow-hidden transition-all duration-500">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <StackIcon className="w-5 h-5 text-primary/40 mb-3" />
                    <span className="block text-2xl font-display font-light number-accent leading-none mb-1">
                      <Counter target={card.target} suffix={card.suffix} inView={inView} />
                    </span>
                    <h3 className="text-[12px] font-display font-normal text-foreground mb-1">{card.title}</h3>
                    <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-body font-normal text-primary hover:text-primary/80 transition-colors">
            See how it works <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ CAPABILITIES ═══════════ */
const CapabilitiesBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeGroup, setActiveGroup] = useState(config.capabilities.groups[0]?.id || "");
  const active = config.capabilities.groups.find((g) => g.id === activeGroup) || config.capabilities.groups[0];

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgCapabilities} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">{config.capabilities.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">{config.capabilities.headline}</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {config.capabilities.groups.map((g, i) => (
            <motion.button key={g.id} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.06 * i }} onClick={() => setActiveGroup(g.id)} className={`relative rounded-xl p-5 text-center transition-all duration-400 group ${activeGroup === g.id ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20" : "bg-card card-elevated text-foreground hover:shadow-lg hover:-translate-y-0.5"}`}>
              <g.icon className={`w-7 h-7 mx-auto mb-3 ${activeGroup === g.id ? "text-white" : "text-primary"}`} />
              <span className="block text-[11px] md:text-xs font-body font-normal leading-tight">{g.title.length > 25 ? g.title.split(" — ")[0] : g.title}</span>
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="relative rounded-2xl overflow-hidden shadow-[0_4px_24px_hsl(220_20%_50%/0.08),0_16px_48px_hsl(220_20%_50%/0.05)]">
            {/* Full-card background image */}
            <img src={bgCapabilities} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207,60%,28%)]/95 via-[hsl(207,45%,18%)]/85 to-[hsl(210,20%,97%)]/97" />
            <div className="relative z-10 grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center relative">
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5" />
                <div className="absolute -left-10 -bottom-16 w-48 h-48 rounded-full bg-white/3" />
                <div className="relative z-10">
                  <active.icon className="w-10 h-10 text-white/50 mb-6" />
                  <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-3 leading-snug">{active.title}</h3>
                  <p className="text-sm text-white/60 font-body font-normal">{active.subtitle}</p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-card/90 backdrop-blur-sm">
                <div className="space-y-5">
                  {active.features.map((feat, i) => (
                    <motion.div key={feat} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.07 * i + 0.1 }} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-body font-normal leading-relaxed">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ═══════════ CTA BANNER ═══════════ */
const CTABannerBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const c = config.ctaBanner;
  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="relative w-full py-24 md:py-32">
        <img src={bgCtaBanner} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
            <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-5">{c.label}</p>
            <h2 className="text-3xl md:text-5xl font-display font-light text-white leading-tight mb-5">{c.headline}</h2>
            <p className="text-base md:text-lg text-white/50 font-body font-normal leading-relaxed mb-10 max-w-xl mx-auto">{c.subtext}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-body font-normal px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary/25">{c.ctaPrimary}</a>
              <a href="#register" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white text-sm font-body font-normal px-8 py-4 rounded-full border border-white/15 transition-all duration-300">{c.ctaSecondary}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════ USE CASES ═══════════ */
const UseCasesBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCase, setActiveCase] = useState(config.useCases.cases[0]?.id || "");
  const active = config.useCases.cases.find((u) => u.id === activeCase) || config.useCases.cases[0];

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">{config.useCases.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">{config.useCases.headline}</h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {config.useCases.cases.map((uc) => (
            <button key={uc.id} onClick={() => setActiveCase(uc.id)} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-body font-normal transition-all duration-400 ${activeCase === uc.id ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-card card-elevated text-foreground hover:shadow-md"}`}>
              <uc.icon className="w-3.5 h-3.5" /> {uc.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_24px_hsl(220_20%_50%/0.08),0_16px_56px_hsl(220_20%_50%/0.06)]">
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-[500px] overflow-hidden">
                <motion.img key={active.image} src={active.image} alt={active.label} className="absolute inset-0 w-full h-full object-cover" initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden" />
                <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-body tracking-[0.15em] uppercase px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <active.icon className="w-3.5 h-3.5" /> {active.label}
                </div>
              </div>
              <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
                <motion.div key={active.id + "-text"} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                  <h3 className="text-xl md:text-[1.75rem] font-display font-light text-foreground mb-4 leading-snug">{active.headline}</h3>
                  <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed mb-8">{active.description}</p>
                  <div className="space-y-3.5 mb-8">
                    {active.benefits.map((b, i) => (
                      <motion.div key={b} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.06 * i + 0.15 }} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-[13px] font-body font-normal text-foreground">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-2 text-xs font-body font-normal text-primary hover:text-primary/80 transition-colors tracking-wide">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mt-14">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            {config.useCases.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ HOW IT WORKS ═══════════ */
const HowItWorksBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const steps = config.howItWorks.steps;
  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgHowItWorks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">{config.howItWorks.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">{config.howItWorks.headline}</h2>
        </motion.div>
        {/* Desktop */}
        <div className="hidden lg:block relative max-w-3xl mx-auto">
          {steps.map((item, i) => {
            const isLast = i === steps.length - 1;
            return (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.12 * i }} className="relative flex gap-10 pb-14 last:pb-0">
                <div className="flex flex-col items-center shrink-0 w-16">
                  <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.12 * i + 0.1, type: "spring", stiffness: 200 }} className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25 relative z-10">
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  {!isLast && <motion.div className="w-px flex-1 mt-0 bg-gradient-to-b from-primary/30 to-primary/10" initial={{ scaleY: 0, originY: 0 }} animate={inView ? { scaleY: 1 } : {}} transition={{ duration: 0.6, delay: 0.12 * i + 0.3 }} />}
                </div>
                <div className="flex-1 pt-1">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-7 border border-white/60 shadow-[0_2px_12px_hsl(220_20%_50%/0.05),0_8px_24px_hsl(220_20%_50%/0.04)] hover:shadow-[0_4px_20px_hsl(207_60%_30%/0.08)] hover:-translate-y-0.5 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">Step {item.step}</span>
                      <div className="h-px flex-1 bg-primary/10" />
                    </div>
                    <h3 className="text-base font-display font-light text-foreground mb-2">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Mobile */}
        <div className="lg:hidden relative">
          {steps.map((item, i) => {
            const isLast = i === steps.length - 1;
            return (
              <motion.div key={item.step} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.08 * i }} className="relative flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20 relative z-10">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary/25 to-primary/5" />}
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-[0_2px_12px_hsl(220_20%_50%/0.05)]">
                    <span className="text-[10px] font-body tracking-[0.2em] text-primary/50 uppercase">Step {item.step}</span>
                    <h3 className="text-[13px] font-display font-light text-foreground mt-1 mb-1.5">{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ PROOF ═══════════ */
const ProofBlock = () => {
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
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">Trusted by logistics leaders across Europe</h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * i }} className="bg-card rounded-2xl p-10 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-7"><Quote className="w-5 h-5 text-primary" /></div>
              <p className="text-base md:text-lg font-display font-light text-foreground leading-relaxed mb-10 flex-1">"{t.quote}"</p>
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

/* ═══════════ COMPARE ═══════════ */
const CompareBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const c = config.compare;
  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgCompare} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">{c.headline}</h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="grid md:grid-cols-2 gap-6">
          {/* Old way */}
          <div className="rounded-2xl border border-border/60 bg-card p-8 relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-xl bg-[hsl(140,55%,92%)] flex items-center justify-center shadow-sm"><FileSpreadsheet className="w-5 h-5 text-[hsl(140,60%,32%)]" strokeWidth={1.8} /></div>
                <div className="w-11 h-11 rounded-xl bg-[hsl(0,65%,94%)] flex items-center justify-center shadow-sm"><Mail className="w-5 h-5 text-[hsl(0,70%,48%)]" strokeWidth={1.8} /></div>
              </div>
              <div>
                <p className="text-sm font-display font-normal text-foreground">{c.oldWay.title}</p>
                <p className="text-xs font-body font-normal text-muted-foreground">{c.oldWay.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              {c.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted/80 flex items-center justify-center flex-shrink-0"><X className="w-3 h-3 text-muted-foreground/40" /></div>
                  <span className="text-sm font-body font-normal text-muted-foreground line-through decoration-muted-foreground/20">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          {/* TrucksOnTheMap */}
          <div className="rounded-2xl border border-primary/25 bg-card p-8 relative shadow-lg shadow-primary/5">
            <div className="absolute -top-3 left-8"><span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-[0.65rem] font-body font-normal tracking-widest uppercase">Recommended</span></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden"><img src={iconTotm} alt="TrucksOnTheMap" className="w-7 h-7 object-contain" /></div>
              <div>
                <p className="text-sm font-display font-normal text-foreground">TrucksOnTheMap</p>
                <p className="text-xs font-body font-normal text-primary">The smart way</p>
              </div>
            </div>
            <div className="space-y-4">
              {c.features.map((feature, i) => (
                <motion.div key={feature} initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-primary" /></div>
                  <span className="text-sm font-body font-normal text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border/40">
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-body font-normal text-primary hover:text-primary/80 transition-colors">Switch to TrucksOnTheMap <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="text-center mt-14">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">{c.cta} <ArrowRight className="w-4 h-4" /></a>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ FAQ ═══════════ */
const FAQBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgHowItWorks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">{config.faq.label}</p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">{config.faq.headline}</h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {config.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl px-7 py-1 shadow-sm hover:shadow-md data-[state=open]:shadow-lg transition-all duration-300 border border-border/40 data-[state=open]:border-primary/20">
                <AccordionTrigger className="text-[0.925rem] font-display font-normal text-foreground hover:no-underline py-5 [&[data-state=open]]:text-primary transition-colors">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground font-body font-normal leading-[1.85] pb-6 pr-8">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ CTA FINAL ═══════════ */
const CTAFinalBlock = ({ config }: { config: ProductPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const c = config.ctaFinal;
  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <img src={bgCtaFinal} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />
      <div className="container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-xl mx-auto">
          <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-white mb-5 leading-tight">{c.headline}</h2>
          <p className="text-white/50 font-body font-normal text-sm mb-10 leading-relaxed">{c.subtext}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:ihaveaquestion@trucksonthemap.com" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-body font-normal text-sm rounded-full shadow-lg shadow-primary/25 transition-all duration-300">
              Get in Contact <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="tel:+442038078493" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-body font-normal text-sm rounded-full border border-white/15 transition-all duration-300">
              +44 (20) 3807 84 93
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPageTemplate;
