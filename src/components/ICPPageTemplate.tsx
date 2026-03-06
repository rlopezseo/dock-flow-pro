import { motion, useInView, animate } from "framer-motion";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import bgHowItWorks from "@/assets/bg-howitworks.jpg";
import narrativeImg from "@/assets/narrative-challenge.jpg";
import bgTestimonials from "@/assets/bg-testimonials.jpg";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Check, X, TrendingUp, Zap, Shield, BarChart3, Truck, Clock, Users, Target, Eye, Quote } from "lucide-react";
import { ICPPageConfig } from "@/types/icp-page";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LogoCarouselSection from "./LogoCarouselSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-11 w-auto object-contain grayscale opacity-25 hover:opacity-50 transition-opacity duration-500 flex-shrink-0"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

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
  const match = value.match(/([+-−]?)(\d+\.?\d*)(.*)/);
  const [display, setDisplay] = useState(0);

  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "0";
  const suffix = match?.[3] ?? "";
  const target = Number.parseFloat(numStr);

  useEffect(() => {
    if (!inView || !match || Number.isNaN(target)) return;

    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(v),
    });

    return () => controls.stop();
  }, [inView, target, value]);

  if (!match || Number.isNaN(target)) return <span>{value}</span>;

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
          <LogoBannerStrip />
          <NarrativeBlock config={config} />
          <ComparisonBlock config={config} />
          <CTABannerBlock config={config} />
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
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)] via-[hsl(220,20%,7%)]/75 to-[hsl(220,20%,7%)]/55" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[hsl(220,20%,5%)]/80 to-transparent" />
        {/* Clean bottom edge */}
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
                <><br /><span className="text-white/40">{c.highlightedPart}</span></>
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

/* ═══════════ AUTHORITY BAR — Corporate stats strip ═══════════ */
const AuthorityBar = ({ config }: { config: ICPPageConfig }) => {
  const items = config.authorityBar.items;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section className="relative bg-[hsl(220,20%,7%)] border-t border-white/[0.04] overflow-hidden" ref={ref}>
      {/* Subtle gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`text-center py-4 lg:py-0 ${i < items.length - 1 ? "lg:border-r lg:border-white/[0.06]" : ""}`}
            >
              <p className="text-2xl sm:text-3xl lg:text-[2rem] font-display font-extralight text-white tracking-tight leading-none mb-1.5">
                <AnimatedValue value={item.value} inView={inView} />
              </p>
              <p className="text-[10px] text-white/35 font-body font-normal tracking-[0.12em] uppercase">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NarrativeBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.narrative;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      {/* Same background as HowItWorks */}
      <div className="absolute inset-0">
        <img src={bgHowItWorks} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/85" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
                {c.headline}
              </h2>
            </motion.div>

            <div className="space-y-5">
              {c.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + 0.08 * i }}
                  className={`text-[13px] font-body font-normal leading-[1.9] ${i === 0 ? 'text-foreground/75 text-sm' : 'text-muted-foreground'}`}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_30px_hsl(207,60%,30%/0.15)]"
              >
                Book Free Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-normal text-foreground/80 bg-transparent border border-border hover:bg-muted/50 transition-all duration-500"
              >
                Register
              </a>
            </motion.div>
          </div>

          {/* Right — Premium floating image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_hsl(207_60%_30%/0.15),0_8px_24px_hsl(220_20%_50%/0.08)]">
              <img
                src={narrativeImg}
                alt="Fleet tracking control room"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)]/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-xl p-5 shadow-[0_8px_30px_hsl(220_20%_50%/0.12)] border border-white/80"
            >
              <p className="text-2xl font-display font-light text-primary leading-none mb-1">25–35%</p>
              <p className="text-[11px] text-muted-foreground font-body">of kilometres driven empty</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════ COMPARISON — Premium Visual Before & After ═══════════ */
const ComparisonBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.comparison;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-white" ref={ref} id="comparison">
      <div className="container relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-5">Before & After</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-display font-extralight tracking-tight text-foreground leading-[1.12] mb-5">
              {c.headline}
            </h2>
            {c.subtext && (
              <p className="text-sm md:text-[15px] text-muted-foreground font-body font-normal leading-relaxed">{c.subtext}</p>
            )}
          </div>
        </FadeUp>

        {/* Comparison cards — alternating image/content */}
        <div className="space-y-16 lg:space-y-24">
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
                {/* Image side */}
                <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 0 ? 'lg:col-span-6' : 'lg:col-span-6 lg:col-start-7'}`}>
                  <div className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,7%)]/50 to-transparent" />
                  </div>
                  {/* Floating label */}
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-xs font-display font-medium text-white tracking-[0.15em] uppercase shadow-lg">
                      {String(i + 1).padStart(2, '0')} — {item.label}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`flex flex-col justify-center ${i % 2 === 0 ? 'lg:col-span-6 lg:pl-12 xl:pl-16' : 'lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:pr-12 xl:pr-16'}`}>
                  {/* Before */}
                  <div className="relative mb-8 p-6 rounded-xl bg-[hsl(0,30%,97%)] border border-[hsl(0,20%,90%)]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-[hsl(0,60%,45%)]/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-3.5 h-3.5 text-[hsl(0,55%,55%)]" />
                      </div>
                      <span className="text-[10px] font-display font-semibold text-[hsl(0,30%,55%)] tracking-[0.2em] uppercase">Without TrucksOnTheMap</span>
                    </div>
                    <p className="text-[13px] font-body text-muted-foreground leading-[1.85] pl-10">
                      {item.without}
                    </p>
                  </div>

                  {/* Connector */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-px h-6 bg-border" />
                  </div>

                  {/* After */}
                  <div className="relative p-6 rounded-xl bg-[hsl(150,25%,97%)] border border-[hsl(150,20%,88%)] shadow-sm shadow-[hsl(150,30%,80%)]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-[hsl(150,50%,40%)]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[hsl(150,50%,40%)]" />
                      </div>
                      <span className="text-[10px] font-display font-semibold text-[hsl(150,35%,40%)] tracking-[0.2em] uppercase">With TrucksOnTheMap</span>
                    </div>
                    <p className="text-[13.5px] font-body font-normal text-foreground/85 leading-[1.85] pl-10">
                      {item.withTotm}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════ CTA BANNER — Mid-page conversion point ═══════════ */
const CTABannerBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.ctaFinal;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      <img src={bgCtaFinal} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-4">
            Ready to Optimize?
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-white mb-5 leading-tight">
            {config.ctaBanner?.headline || "Add Your First Truck in 10 Minutes. Start Filling Empty Runs This Week."}
          </h2>
          <p className="text-white/50 font-body font-normal text-sm mb-10 leading-relaxed">
            {config.ctaBanner?.subtext || "Free TMS included. No credit card required. GO LIVE in days, not weeks."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-body font-normal text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {c.ctaPrimary} <ArrowUpRight className="w-4 h-4" />
            </a>
            {c.ctaSecondary && (
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-white/80 font-body font-normal text-sm rounded-full border border-white/15 hover:bg-white/[0.06] transition-all duration-300"
              >
                {c.ctaSecondary}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════ FEATURES — Showcase Accordion + Image ═══════════ */
const FeaturesBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.features;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeFeature, setActiveFeature] = useState(0);
  const activeItem = c.items[activeFeature];
  const ActiveIcon = featureIcons[activeFeature % featureIcons.length];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref} id="features">
      {/* Subtle background texture */}
      <div className="absolute inset-0">
        <img src={config.sectionImages.features} alt="" className="w-full h-full object-cover opacity-[0.03]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,15%,97%)]/97" />
      </div>

      <div className="container relative z-10">
        <FadeUp>
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">Key Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-display font-extralight tracking-tight text-foreground leading-[1.15] mb-4">
              {c.headline}
            </h2>
            {c.subtext && (
              <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed max-w-lg">{c.subtext}</p>
            )}
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left — Showcase image panel */}
          <FadeUp className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[hsl(220,20%,10%)]">
              <motion.img
                key={activeItem.image || activeFeature}
                src={activeItem.image || config.sectionImages.features}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              {/* Overlay with active feature info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,5%)]/90 via-[hsl(220,25%,5%)]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.12] backdrop-blur-md flex items-center justify-center mb-4">
                    <ActiveIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[15px] font-display font-light text-white leading-snug mb-2">{activeItem.title}</p>
                  <div className="flex items-center gap-2 mt-4">
                    {c.items.map((_, i) => (
                      <div
                        key={i}
                        className={`h-[2px] rounded-full transition-all duration-500 ${i === activeFeature ? "w-8 bg-white" : "w-3 bg-white/25"}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeUp>

          {/* Right — Feature accordion list */}
          <div className="lg:col-span-3 space-y-3">
            {c.items.map((item, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              const isActive = i === activeFeature;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 * i }}
                >
                  <button
                    onClick={() => setActiveFeature(i)}
                    className={`w-full text-left rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "bg-card border-primary/20 shadow-[0_4px_24px_hsl(207,60%,30%/0.08)]"
                        : "bg-card/60 border-border hover:bg-card hover:border-border/80 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-4 p-5 lg:p-6">
                      {/* Number + Icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-primary/[0.06] text-primary"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className={`text-[14px] font-display font-light tracking-wide transition-colors duration-300 ${
                            isActive ? "text-foreground" : "text-foreground/70"
                          }`}>
                            {item.title}
                          </h3>
                          <span className={`text-[11px] font-body text-muted-foreground/50 tabular-nums flex-shrink-0`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Expandable description */}
                        <motion.div
                          initial={false}
                          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.85] mt-3 pr-4">
                            {item.description}
                          </p>
                          {/* Progress-like accent bar */}
                          <div className="mt-4 h-[2px] rounded-full bg-border overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-[hsl(190,60%,50%)] rounded-full"
                              initial={{ width: "0%" }}
                              animate={{ width: isActive ? "100%" : "0%" }}
                              transition={{ duration: 3, ease: "linear" }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════ STATS — Cinematic dark glassmorphism cards ═══════════ */

const MiniBarChart = ({ color = "hsl(45,70%,50%)" }: { color?: string }) => (
  <svg viewBox="0 0 120 40" className="w-full h-10 mt-auto opacity-50">
    <rect x="5" y="30" width="14" height="10" rx="2" fill="hsl(220,15%,22%)" />
    <rect x="25" y="22" width="14" height="18" rx="2" fill="hsl(220,15%,25%)" />
    <rect x="45" y="14" width="14" height="26" rx="2" fill={color} opacity="0.5" />
    <rect x="65" y="6" width="14" height="34" rx="2" fill={color} opacity="0.75" />
  </svg>
);

const MiniLineDown = ({ color = "hsl(145,60%,50%)" }: { color?: string }) => (
  <svg viewBox="0 0 120 40" className="w-full h-10 mt-auto opacity-50">
    <path d="M5 8 Q30 12 50 20 T95 30 L115 34" stroke={color} strokeWidth="2" fill="none" />
    <path d="M5 8 Q30 12 50 20 T95 30 L115 34 L115 40 L5 40Z" fill={color} opacity="0.08" />
  </svg>
);

const MiniLineUp = ({ color = "hsl(195,70%,55%)" }: { color?: string }) => (
  <svg viewBox="0 0 120 40" className="w-full h-10 mt-auto opacity-50">
    <path d="M5 34 Q20 30 40 24 T80 14 L115 6" stroke={color} strokeWidth="2" fill="none" />
    <path d="M5 34 Q20 30 40 24 T80 14 L115 6 L115 40 L5 40Z" fill={color} opacity="0.08" />
  </svg>
);

const MiniDots = ({ color = "hsl(45,80%,55%)" }: { color?: string }) => (
  <div className="flex items-center gap-1.5 mt-auto pt-2">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color, opacity: 0.15 + i * 0.2 }} />
    ))}
  </div>
);

const cardMeta = [
  { color: "hsl(207,60%,35%)", label: "Revenue uplift", badge: "Freight matching data", chart: "lineUp" },
  { color: "hsl(207,50%,40%)", label: "Validated result", badge: "DHL case study", chart: "bar" },
  { color: "hsl(200,55%,38%)", label: "No cost to join", badge: "No credit card required", chart: "dots" },
  { color: "hsl(210,45%,42%)", label: "Onboarding speed", badge: "Median across fleets", chart: "lineUp" },
];

const StatsBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.stats;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const heroStat = c.items[0];
  const gridStats = c.items.slice(1, 5);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Background — visible image with frosted overlay for glassmorphism effect */}
      <div className="absolute inset-0 bg-[hsl(210,20%,88%)]" />
      <div className="absolute inset-0">
        <img src={config.hero.image} alt="" className="w-full h-full object-cover opacity-[0.3]" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-[hsl(210,15%,92%)]/75 backdrop-blur-[2px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN: Narrative + hero stat ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-5">Proven Results</p>
            <h2 className="text-3xl md:text-[2.75rem] font-display font-extralight tracking-tight text-foreground leading-[1.12] mb-6">
              {c.headline}
            </h2>
            <p className="text-[13px] text-muted-foreground font-body font-normal leading-[1.9] max-w-lg mb-12">
              Every metric below is drawn from live platform data and third-party validation. No projections. No marketing estimates. Real results from real carriers.
            </p>

            {/* Hero stat card — glassmorphism on light */}
            <div className="relative rounded-2xl overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/50 shadow-sm p-8">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <p className="text-[10px] font-body font-normal tracking-[0.2em] uppercase text-muted-foreground mb-2">The single biggest lever</p>

              <p className="text-5xl md:text-6xl font-display font-extralight leading-none tracking-tight mb-3 text-primary">
                {heroStat.value}
              </p>

              <p className="text-[13px] text-muted-foreground font-body font-normal leading-[1.85] mb-8 max-w-md">
                {heroStat.description}
              </p>

              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/[0.06] border border-primary/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-body text-muted-foreground">Platform average across active carriers</span>
                </span>
              </div>

              {/* Mini chart */}
              <div className="relative">
                <p className="text-[10px] font-body text-muted-foreground/70 tracking-[0.1em] uppercase mb-3">
                  Empty-run rate trend<span className="text-primary ml-2">↓ 31% over 12 mo.</span>
                </p>
                <svg viewBox="0 0 400 80" className="w-full h-16 opacity-70">
                  <defs>
                    <linearGradient id="statsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(207,60%,30%)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="hsl(207,60%,30%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 60 Q40 55 80 52 T160 44 T240 34 T320 22 T400 14 L400 80 L0 80Z" fill="url(#statsGrad)" />
                  <path d="M0 60 Q40 55 80 52 T160 44 T240 34 T320 22 T400 14" stroke="hsl(207,60%,30%)" strokeWidth="2" fill="none" />
                  {[[0,60],[40,55],[80,52],[120,48],[160,44],[200,40],[240,34],[280,28],[320,22],[360,18],[400,14]].map(([cx,cy],di) => (
                    <circle key={di} cx={cx} cy={cy} r="2.5" fill="hsl(207,60%,30%)" opacity="0.7" />
                  ))}
                </svg>
                <div className="flex justify-between mt-1.5">
                  {["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                    <span key={m} className="text-[9px] font-body text-muted-foreground/50">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: 2×2 data cards ── */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {gridStats.map((item, i) => {
              const meta = cardMeta[i] || cardMeta[0];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + 0.1 * i }}
                  className="group relative rounded-2xl overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/50 shadow-sm hover:shadow-lg hover:bg-white/55 transition-all duration-500 flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${meta.color}30, transparent)` }} />

                  <div className="p-6 sm:p-7 pb-2 flex flex-col flex-1">
                    <p className="text-[10px] font-body font-normal tracking-[0.2em] uppercase text-muted-foreground/70 mb-5">
                      {meta.label}
                    </p>

                    <p className="text-3xl sm:text-4xl font-display font-extralight leading-none tracking-tight mb-3" style={{ color: meta.color }}>
                      <AnimatedValue value={item.value} inView={inView} />
                    </p>

                    <div className="w-8 h-[2px] rounded-full mb-3 opacity-60" style={{ backgroundColor: meta.color }} />

                    <p className="text-[11px] sm:text-[12px] text-muted-foreground font-body font-normal leading-[1.8] mb-5">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      {meta.chart === "lineDown" && <MiniLineDown color={meta.color} />}
                      {meta.chart === "lineUp" && <MiniLineUp color={meta.color} />}
                      {meta.chart === "bar" && <MiniBarChart color={meta.color} />}
                      {meta.chart === "dots" && <MiniDots color={meta.color} />}
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-5 pt-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/[0.03] border border-border/30">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meta.color }} />
                      <span className="text-[10px] font-body text-muted-foreground/70">{meta.badge}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════ TESTIMONIAL — Light premium grid (matches ProofSection) ═══════════ */
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

const TestimonialBlock = ({ config }: { config: ICPPageConfig }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgTestimonials} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Trusted by logistics leaders across Europe
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
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <p className="text-sm font-display font-normal text-foreground">{t.author}</p>
                  <p className="text-xs text-primary font-body font-normal">{t.role}</p>
                  <p className="text-xs text-muted-foreground font-body font-normal">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/30 text-primary hover:bg-primary/5 font-body font-normal text-sm rounded-full transition-all duration-300"
          >
            See More Reviews <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
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

/* ═══════════ CTA FINAL — Matches Software Page CTA ═══════════ */
const CTAFinalBlock = ({ config }: { config: ICPPageConfig }) => {
  const c = config.ctaFinal;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden" id="contact" ref={ref}>
      <img src={bgCtaFinal} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-white/40 font-body text-xs tracking-[0.25em] uppercase mb-4">
            Your Fleet, Your Revenue
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-white mb-5 leading-tight">
            {c.headline}
          </h2>
          <p className="text-white/50 font-body font-normal text-sm mb-10 leading-relaxed">
            {c.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ihaveaquestion@trucksonthemap.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white font-body font-normal text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Get in Contact <ArrowUpRight className="w-4 h-4" />
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

export default ICPPageTemplate;
