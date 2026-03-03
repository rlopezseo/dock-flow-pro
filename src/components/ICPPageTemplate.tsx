import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight, Check, X, ChevronDown } from "lucide-react";
import { ICPPageConfig } from "@/types/icp-page";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoCarouselSection from "./LogoCarouselSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import bgCtaBanner from "@/assets/bg-cta-banner.jpg";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import bgHowitworks from "@/assets/bg-howitworks.jpg";
import bgOutcomes from "@/assets/bg-outcomes.jpg";
import bgTestimonials from "@/assets/bg-testimonials.jpg";
import bgCompare from "@/assets/bg-compare.jpg";
import avatarForray from "@/assets/avatar-forray.jpg";

/* ─── Fade wrapper ─── */
const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════ */
const ICPPageTemplate = ({ config }: { config: ICPPageConfig }) => {
  useEffect(() => {
    document.title = config.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", config.meta.description);
  }, [config.meta]);

  return (
    <>
      <Navbar />
      <main>
        <HeroBlock config={config} />
        <div className="light-sections bg-[hsl(0,0%,98%)]">
          <NarrativeBlock config={config} />
          <ComparisonBlock config={config} />
          <LogoCarouselSection />
          <FeaturesBlock config={config} />
          <StatsBlock config={config} />
          <TestimonialBlock config={config} />
          <ObjectionsBlock config={config} />
          <CTAFinalBlock config={config} />
          <Footer />
        </div>
      </main>
    </>
  );
};

/* ═══════════ HERO ═══════════ */
const HeroBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.hero;
  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={c.image} alt={config.meta.title} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)]/92 via-[hsl(220,20%,7%)]/40 to-[hsl(220,20%,7%)]/60" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[hsl(220,20%,7%)]/85 via-[hsl(220,20%,7%)]/55 to-transparent" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-3xl">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-body font-normal tracking-widest uppercase text-white/90 border border-white/15 bg-white/10 backdrop-blur-md mb-6">
            {c.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[3.8rem] font-display font-extralight leading-[1.08] tracking-tight mb-4 text-foreground">
            {c.headline}
            {c.highlightedPart && (
              <><br /><span className="text-[hsl(210,15%,65%)]">{c.highlightedPart}</span></>
            )}
          </h1>
          <p className="text-sm sm:text-base text-white/75 max-w-xl font-body font-normal leading-relaxed mb-10">{c.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300">
              {c.ctaPrimary} <ArrowUpRight className="w-4 h-4" />
            </a>
            {c.ctaSecondary && (
              <a href="#features" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-foreground bg-[hsl(210,10%,30%/0.45)] backdrop-blur-sm border border-[hsl(210,10%,40%/0.3)] hover:bg-[hsl(210,10%,35%/0.6)] transition-all duration-300">
                {c.ctaSecondary} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ NARRATIVE ═══════════ */
const NarrativeBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.narrative;
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgHowitworks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/90" />
      </div>
      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-3xl mx-auto">
            <div className="accent-line w-12 mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15] mb-10">
              {c.headline}
            </h2>
            <div className="space-y-6">
              {c.paragraphs.map((p, i) => (
                <p key={i} className="text-[13px] sm:text-sm text-muted-foreground font-body font-normal leading-[1.9]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ COMPARISON ═══════════ */
const ComparisonBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.comparison;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref} id="comparison">
      <div className="absolute inset-0">
        <img src={bgCompare} alt="" className="w-full h-full object-cover opacity-[0.03]" loading="lazy" />
      </div>
      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <div className="accent-line w-12 mb-6" />
            <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Before & After</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15]">
              {c.headline}
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-0">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-1">
            <div className="bg-[hsl(0,60%,96%)] rounded-tl-xl p-5">
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-[hsl(0,60%,50%)]" />
                <span className="text-xs font-body font-normal text-[hsl(0,30%,40%)] tracking-[0.1em] uppercase">Without TrucksOnTheMap</span>
              </div>
            </div>
            <div className="bg-[hsl(150,30%,95%)] rounded-tr-xl p-5">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[hsl(150,50%,35%)]" />
                <span className="text-xs font-body font-normal text-[hsl(150,30%,30%)] tracking-[0.1em] uppercase">With TrucksOnTheMap</span>
              </div>
            </div>
          </div>

          {/* Items */}
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
            >
              <div className={`p-5 md:p-6 border-b border-[hsl(0,20%,90%)] bg-[hsl(0,40%,97%)] ${i === c.items.length - 1 ? "rounded-bl-xl" : ""}`}>
                <p className="text-[12.5px] font-body font-normal text-[hsl(0,15%,45%)] leading-[1.7]">{item.without}</p>
              </div>
              <div className={`p-5 md:p-6 border-b border-[hsl(150,15%,90%)] bg-[hsl(150,20%,97%)] ${i === c.items.length - 1 ? "rounded-br-xl" : ""}`}>
                <p className="text-[12.5px] font-body font-normal text-[hsl(150,20%,30%)] leading-[1.7]">{item.withTotm}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ FEATURES ═══════════ */
const FeaturesBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.features;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref} id="features">
      <div className="absolute inset-0">
        <img src={bgOutcomes} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <div className="accent-line w-12 mb-6" />
            <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Key Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15] mb-4">
              {c.headline}
            </h2>
            {c.subtext && (
              <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed max-w-lg">{c.subtext}</p>
            )}
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="bg-card rounded-xl p-7 card-elevated transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-[14px] font-display font-light text-foreground mb-3 tracking-wide">{item.title}</h3>
              <p className="text-[12px] text-muted-foreground font-body font-normal leading-[1.8]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ STATS ═══════════ */
const StatsBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.stats;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgCtaBanner} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />
      </div>
      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-white/40 font-display text-xs tracking-[0.25em] uppercase mb-4">Results</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-white leading-[1.15]">
              {c.headline}
            </h2>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-xl p-7"
            >
              <p className="text-2xl sm:text-3xl font-display font-extralight text-white mb-3 leading-none">{item.value}</p>
              <p className="text-[12px] text-white/60 font-body font-normal leading-[1.8]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ TESTIMONIAL ═══════════ */
const TestimonialBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.testimonial;
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgTestimonials} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/80" />
      </div>
      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-3xl mx-auto">
            <div className="text-white/15 text-[5rem] font-serif leading-none mb-4 select-none">"</div>
            <blockquote className="text-lg sm:text-xl md:text-[1.5rem] font-display font-extralight leading-[1.45] text-white mb-10">
              {c.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <img src={avatarForray} alt={c.author} className="w-12 h-12 rounded-full object-cover grayscale" />
              <div>
                <p className="text-[14px] font-display font-light text-white">{c.author}</p>
                <p className="text-[11px] text-white/50 font-body">{c.role}, {c.company}</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ OBJECTIONS ═══════════ */
const ObjectionsBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.objections;
  return (
    <section className="py-28">
      <div className="container">
        <FadeUp>
          <div className="max-w-2xl mb-14">
            <div className="accent-line w-12 mb-6" />
            <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Common Questions</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15]">
              {c.headline}
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {c.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border overflow-hidden">
                  <AccordionTrigger className="px-7 py-5 text-[13px] sm:text-sm font-display font-light text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-7 pb-6 text-[12.5px] text-muted-foreground font-body font-normal leading-[1.8]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ CTA FINAL ═══════════ */
const CTAFinalBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.ctaFinal;
  return (
    <section className="relative py-32 md:py-40 overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <img src={bgCtaFinal} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/70" />
      </div>
      <div className="container relative z-10 text-center">
        <FadeUp>
          <p className="text-white/40 font-display text-xs tracking-[0.25em] uppercase mb-6">Get Started</p>
          <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-display font-extralight text-white tracking-tight leading-[1.12] mb-5 max-w-2xl mx-auto">
            {c.headline}
          </h2>
          <p className="text-sm text-white/60 font-body font-normal leading-relaxed max-w-lg mx-auto mb-10">{c.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300">
              {c.ctaPrimary} <ArrowUpRight className="w-4 h-4" />
            </a>
            {c.ctaSecondary && (
              <a href="#" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-body font-normal text-white bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 transition-all duration-300">
                {c.ctaSecondary} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ICPPageTemplate;
