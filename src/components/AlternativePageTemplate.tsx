import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowUpRight, Check, X, Zap, Shield, BarChart3, Globe, Clock, Users, Truck, Eye, Quote, ChevronRight, Layers, Target, Award, Lock, Cpu, Map } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { AlternativePageConfig } from "@/types/alternative-page";

import heroImg from "@/assets/hero-alternative.jpg";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import bgHowItWorks from "@/assets/bg-howitworks.jpg";
import logoTotm from "@/assets/logo-totm-dark.png";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";

import weberLogo from "@/assets/logos/weber.png";
import vredesteinLogo from "@/assets/logos/vredestein.png";
import rigipsLogo from "@/assets/logos/rigips.png";
import kuehneNagelLogo from "@/assets/logos/kuehne-nagel.png";
import isoverLogo from "@/assets/logos/isover.png";

const iconMap: Record<string, React.ElementType> = {
  Zap, Shield, BarChart3, Globe, Clock, Users, Truck, Eye, Layers, Target, Award, Lock, Cpu, Map,
};

const clientLogos = [
  { src: weberLogo, alt: "Weber Saint-Gobain" },
  { src: vredesteinLogo, alt: "Vredestein Tires" },
  { src: rigipsLogo, alt: "Rigips Saint-Gobain" },
  { src: kuehneNagelLogo, alt: "Kuehne + Nagel" },
  { src: isoverLogo, alt: "Isover Saint-Gobain" },
];

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

/* ═══════════ MAIN TEMPLATE ═══════════ */
interface Props {
  config: AlternativePageConfig;
  competitorLogo?: string;
}

const AlternativePageTemplate = ({ config, competitorLogo }: Props) => {
  useEffect(() => {
    document.title = config.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", config.meta.description);

    // FAQPage JSON-LD structured data for Google rich snippets
    const existingLd = document.querySelector('script[data-faq-ld]');
    if (existingLd) existingLd.remove();

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-ld", "true");
    script.textContent = JSON.stringify(faqLd);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-faq-ld]');
      if (el) el.remove();
    };
  }, [config]);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection config={config} competitorLogo={competitorLogo} />
        <div className="light-sections bg-[hsl(0,0%,98%)]">
          <LogoBannerStrip />
          <ComparisonTableSection config={config} competitorLogo={competitorLogo} />
          <WhySwitchSection config={config} />
          <TestimonialSection />
          <FAQSection config={config} />
          <CTAFinalSection competitorName={config.competitor.name} />
          <Footer />
        </div>
      </main>
    </>
  );
};

/* ═══════════ HERO ═══════════ */
const HeroSection = ({ config, competitorLogo }: { config: AlternativePageConfig; competitorLogo?: string }) => (
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
            {config.hero.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.1rem] font-display font-extralight leading-[1.55] tracking-tight mb-5 text-white">
            {config.hero.headline}
            <br /><span className="text-white/40">Trucks On The Map</span>
          </h1>
          <p className="text-[13px] sm:text-sm text-white/65 max-w-xl font-body font-normal leading-[1.9] mb-10">
            {config.hero.subtext}
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

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center self-center">
          <div className="relative w-full flex flex-col items-center gap-10">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex items-center justify-center">
              <img src={logoTotm} alt="TrucksOnTheMap" className="h-20 w-auto brightness-0 invert drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]" />
            </motion.div>
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <span className="text-base font-display font-bold text-white/80">VS</span>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex items-center justify-center opacity-30">
              {competitorLogo ? (
                <img src={competitorLogo} alt={config.competitor.name} className="h-24 md:h-32 w-auto brightness-0 invert" />
              ) : (
                <span className="text-2xl font-display font-light text-white tracking-wide">{config.competitor.name}</span>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════ COMPARISON TABLE ═══════════ */
const ComparisonTableSection = ({ config, competitorLogo }: { config: AlternativePageConfig; competitorLogo?: string }) => {
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
              We believe in transparency. Here's how TrucksOnTheMap stacks up against {config.competitor.name} across the dimensions that matter most.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="hidden md:grid grid-cols-12 gap-4 mb-6 px-6">
            <div className="col-span-5" />
            <div className="col-span-3 flex items-center justify-center gap-2">
              <img src={logoTotm} alt="TrucksOnTheMap" className="h-4 w-auto opacity-80" />
            </div>
            <div className="col-span-3 flex items-center justify-center gap-2">
              {competitorLogo ? (
                <img src={competitorLogo} alt={config.competitor.name} className="h-4 w-auto opacity-50" />
              ) : (
                <span className="text-xs font-display font-medium text-muted-foreground/50">{config.competitor.shortName}</span>
              )}
            </div>
            <div className="col-span-1" />
          </div>
        </FadeUp>

        <div className="space-y-8">
          {config.comparison.categories.map((category, catIdx) => (
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

        <FadeUp delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/[0.06] border border-primary/10">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground/80">{config.comparison.summary}</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ WHY SWITCH ═══════════ */
const WhySwitchSection = ({ config }: { config: AlternativePageConfig }) => {
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
              {config.switchReasons.length} Reasons to Make the Move
            </h2>
            <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed">
              We're not trying to replace every feature. We're focused on what European shippers and carriers actually need — done exceptionally well.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.switchReasons.map((reason, i) => {
            const Icon = iconMap[reason.icon] || Zap;
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
            <a href="#contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_30px_hsl(207,60%,30%/0.15)]">
              Start Your Migration <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ TESTIMONIALS ═══════════ */
const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[hsl(210,20%,88%)]" />
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-[0.3]" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-[hsl(210,15%,92%)]/75 backdrop-blur-[2px]" />
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
const FAQSection = ({ config }: { config: AlternativePageConfig }) => (
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
                Real concerns from real logistics teams considering the switch from {config.competitor.name}.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-3">
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {config.faq.map((item, i) => (
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
const CTAFinalSection = ({ competitorName }: { competitorName: string }) => {
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
            <span className="text-white/40">Start in Weeks.</span>
          </h2>
          <p className="text-white/50 font-body font-normal text-sm mb-10 leading-relaxed">
            Book a 15-minute demo and see why logistics leaders across Europe are switching from {competitorName} to TrucksOnTheMap. Free migration support included.
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

export default AlternativePageTemplate;
