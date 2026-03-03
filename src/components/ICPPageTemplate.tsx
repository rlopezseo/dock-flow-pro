import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Check, X, TrendingUp, Zap, Shield, BarChart3, Truck, Clock, Users, Target, Eye } from "lucide-react";
import { ICPPageConfig } from "@/types/icp-page";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoCarouselSection from "./LogoCarouselSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ─── Fade wrapper ─── */
const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
};

/* ─── Animated Counter ─── */
const AnimatedValue = ({ value, inView }: { value: string; inView: boolean }) => {
  const numMatch = value.match(/([+-−]?)(\d+\.?\d*)(.*)/);
  if (!numMatch) return <span>{value}</span>;

  const [prefix, numStr, suffix] = [numMatch[1], numMatch[2], numMatch[3]];
  const target = parseFloat(numStr);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(v),
    });
    return controls.stop;
  }, [inView, target]);

  const formatted = target % 1 === 0 ? Math.round(display).toString() : display.toFixed(1);
  return <span>{prefix}{formatted}{suffix}</span>;
};

/* ─── Feature icons mapping ─── */
const featureIcons = [Target, Eye, Zap, BarChart3, Shield, Users, Truck, Clock, TrendingUp];

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
    <section className="relative min-h-[100vh] flex items-end pb-20 md:pb-28 pt-32 overflow-hidden">
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <img src={c.image} alt={config.meta.title} className="w-full h-full object-cover scale-105" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)] via-[hsl(220,20%,7%)]/60 to-[hsl(220,20%,7%)]/40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[hsl(220,20%,5%)]/80 to-transparent" />
        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-end">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="lg:col-span-3">
            <span className="inline-block px-5 py-2 rounded-full text-[11px] font-body font-normal tracking-[0.2em] uppercase text-white/90 border border-white/15 bg-white/[0.08] backdrop-blur-xl mb-7">
              {c.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-extralight leading-[1.08] tracking-tight mb-5 text-white">
              {c.headline}
              {c.highlightedPart && (
                <><br /><span className="bg-gradient-to-r from-[hsl(207,70%,65%)] to-[hsl(190,60%,55%)] bg-clip-text text-transparent">{c.highlightedPart}</span></>
              )}
            </h1>
            <p className="text-[13px] sm:text-sm text-white/65 max-w-xl font-body font-normal leading-[1.9] mb-10">{c.subtext}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_30px_hsl(207,60%,30%/0.3)]">
                {c.ctaPrimary} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              {c.ctaSecondary && (
                <a href="#features" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-white/90 bg-white/[0.06] backdrop-blur-lg border border-white/[0.12] hover:bg-white/[0.12] transition-all duration-500">
                  {c.ctaSecondary}
                </a>
              )}
            </div>
          </motion.div>

          {/* Hero stat cards */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="lg:col-span-2 hidden lg:flex flex-col gap-3">
            {config.stats.items.slice(0, 3).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 hover:bg-white/[0.1] transition-all duration-500"
              >
                <p className="text-xl font-display font-extralight text-white mb-1">{stat.value}</p>
                <p className="text-[11px] text-white/50 font-body leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════ NARRATIVE — Split Photo ═══════════ */
const NarrativeBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.narrative;
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Photo side */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img src={c.image} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(0,0%,98%)]/20 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,98%)] to-transparent lg:hidden" />
        </div>

        {/* Text side */}
        <div className="flex items-center py-16 lg:py-24 px-8 lg:px-16">
          <FadeUp>
            <div className="max-w-lg">
              <div className="accent-line w-16 mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-display font-extralight tracking-tight text-foreground leading-[1.2] mb-8">
                {c.headline}
              </h2>
              <div className="space-y-5">
                {c.paragraphs.map((p, i) => (
                  <p key={i} className="text-[13px] text-muted-foreground font-body font-normal leading-[1.95]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

/* ═══════════ COMPARISON — Visual Cards ═══════════ */
const ComparisonBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.comparison;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref} id="comparison">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <img src={config.sectionImages.comparison} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Before & After</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15]">
              {c.headline}
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Without column */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="w-8 h-8 rounded-full bg-[hsl(0,70%,95%)] flex items-center justify-center">
                <X className="w-4 h-4 text-[hsl(0,60%,50%)]" />
              </div>
              <span className="text-xs font-body font-medium text-[hsl(0,30%,40%)] tracking-[0.1em] uppercase">Without TrucksOnTheMap</span>
            </div>
            {c.items.map((item, i) => (
              <motion.div
                key={`without-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="bg-[hsl(0,30%,97%)] border border-[hsl(0,20%,92%)] rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[12.5px] font-body font-normal text-[hsl(0,10%,40%)] leading-[1.75]">{item.without}</p>
              </motion.div>
            ))}
          </div>

          {/* With column */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="w-8 h-8 rounded-full bg-[hsl(150,50%,94%)] flex items-center justify-center">
                <Check className="w-4 h-4 text-[hsl(150,50%,35%)]" />
              </div>
              <span className="text-xs font-body font-medium text-[hsl(150,30%,30%)] tracking-[0.1em] uppercase">With TrucksOnTheMap</span>
            </div>
            {c.items.map((item, i) => (
              <motion.div
                key={`with-${i}`}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="bg-[hsl(150,20%,97%)] border border-[hsl(150,20%,90%)] rounded-xl p-5 hover:shadow-md hover:border-[hsl(150,30%,80%)] transition-all duration-300"
              >
                <p className="text-[12.5px] font-body font-normal text-[hsl(150,20%,25%)] leading-[1.75]">{item.withTotm}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════ FEATURES — Visual Cards with Icons & Images ═══════════ */
const FeaturesBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.features;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref} id="features">
      {/* Background photo wash */}
      <div className="absolute inset-0">
        <img src={config.sectionImages.features} alt="" className="w-full h-full object-cover opacity-[0.05]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/95" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Key Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15] mb-4">
              {c.headline}
            </h2>
            {c.subtext && (
              <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed">{c.subtext}</p>
            )}
          </div>
        </FadeUp>

        {/* Bento grid - first 2 large, rest smaller */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.items.map((item, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            const isLarge = i < 2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className={`group relative bg-card rounded-2xl overflow-hidden card-elevated transition-all duration-500 ${isLarge ? "md:col-span-1 lg:row-span-1" : ""}`}
              >
                {/* Feature image background on hover */}
                {item.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="relative z-10 p-7 lg:p-8">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/[0.14] transition-colors duration-500">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-[15px] font-display font-light text-foreground mb-3 tracking-wide leading-snug">{item.title}</h3>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.85]">{item.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ STATS — Full-bleed photo + animated counters ═══════════ */
const StatsBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.stats;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Full photo background */}
      <div className="absolute inset-0">
        <img src={c.backgroundImage} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,25%,8%)]/80 backdrop-blur-[2px]" />
        {/* Top/bottom edge gradients for depth */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(220,25%,5%)] to-transparent" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-white/35 font-display text-xs tracking-[0.25em] uppercase mb-4">Proven Results</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-white leading-[1.15]">
              {c.headline}
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 lg:p-7 text-center hover:bg-white/[0.09] hover:border-white/[0.14] transition-all duration-500 group"
            >
              <p className="text-2xl sm:text-3xl lg:text-[2.2rem] font-display font-extralight text-white mb-3 leading-none stat-glow">
                <AnimatedValue value={item.value} inView={inView} />
              </p>
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-3 group-hover:w-12 transition-all duration-500" />
              <p className="text-[11px] text-white/50 font-body font-normal leading-[1.7]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ TESTIMONIAL — Cinematic ═══════════ */
const TestimonialBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.testimonial;
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={c.backgroundImage} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/85" />
      </div>
      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            {/* Giant decorative quote mark */}
            <div className="text-primary/20 text-[8rem] font-serif leading-none mb-0 select-none h-20 overflow-hidden">"</div>
            <blockquote className="text-lg sm:text-xl md:text-[1.6rem] font-display font-extralight leading-[1.5] text-white mb-10">
              {c.quote}
            </blockquote>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6" />
            <p className="text-[14px] font-display font-light text-white/90">{c.author}</p>
            <p className="text-[12px] text-white/45 font-body mt-1">{c.role}, {c.company}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

/* ═══════════ OBJECTIONS — Clean FAQ ═══════════ */
const ObjectionsBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.objections;
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-2">
            <FadeUp>
              <div className="lg:sticky lg:top-32">
                <div className="accent-line w-16 mb-8" />
                <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Common Questions</p>
                <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-display font-extralight tracking-tight text-foreground leading-[1.15] mb-6">
                  {c.headline}
                </h2>
                <p className="text-[13px] text-muted-foreground font-body leading-[1.8]">
                  Real concerns from real decision-makers. We've heard them all — and every one of them has been resolved in production.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-3">
            <FadeUp delay={0.1}>
              <Accordion type="single" collapsible className="space-y-3">
                {c.items.map((item, i) => (
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
};

/* ═══════════ CTA FINAL — Cinematic ═══════════ */
const CTAFinalBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.ctaFinal;
  return (
    <section className="relative py-32 md:py-44 overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <img src={c.backgroundImage} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,5%)]/75" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(0,0%,98%)] to-transparent" />
      </div>
      <div className="container relative z-10 text-center">
        <FadeUp>
          <p className="text-white/35 font-display text-xs tracking-[0.25em] uppercase mb-6">Get Started</p>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-display font-extralight text-white tracking-tight leading-[1.12] mb-5 max-w-3xl mx-auto">
            {c.headline}
          </h2>
          <p className="text-sm text-white/55 font-body font-normal leading-relaxed max-w-lg mx-auto mb-12">{c.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_40px_hsl(207,60%,30%/0.4)]">
              {c.ctaPrimary} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            {c.ctaSecondary && (
              <a href="#" className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-sm font-body font-normal text-white/90 bg-white/[0.08] backdrop-blur-lg border border-white/[0.12] hover:bg-white/[0.15] transition-all duration-500">
                {c.ctaSecondary}
              </a>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default ICPPageTemplate;
