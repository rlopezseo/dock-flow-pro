import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Check, MapPin, Mail, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";
import featuresDock from "@/assets/features-dock.jpg";
import bgCapabilities from "@/assets/bg-capabilities.jpg";
import bgCtaBanner from "@/assets/bg-cta-banner.jpg";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import bgHowitworks from "@/assets/bg-howitworks.jpg";
import capDashboard from "@/assets/cap-dashboard.jpg";
import capFleet from "@/assets/cap-fleet.jpg";
import capNetwork from "@/assets/cap-network.jpg";
import capTracking from "@/assets/cap-tracking.jpg";
import capIntegrations from "@/assets/cap-integrations.jpg";
import heroDock from "@/assets/hero-dock.jpg";
import heroFreight from "@/assets/hero-freight-visibility.jpg";
import heroLoad from "@/assets/hero-load-matching.jpg";
import heroYard from "@/assets/hero-yard-management.jpg";
import usecaseRetail from "@/assets/usecase-retail.jpg";
import usecaseManuf from "@/assets/usecase-manufacturing.jpg";
import usecaseCold from "@/assets/usecase-coldchain.jpg";

/* ─── Fade helper ─── */
const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
};

/* ─── Animated counter ─── */
const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, target, { duration: 2, ease: [0.25, 0.46, 0.45, 0.94], onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => c.stop();
  }, [inView, target]);
  return <span>{display}{suffix}</span>;
};

/* ─── Progress bar ─── */
const ProgressBar = ({ label, percent, inView, delay = 0 }: { label: string; percent: number; inView: boolean; delay?: number }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2">
      <span className="text-[13px] font-body font-normal text-foreground">{label}</span>
      <span className="text-[13px] font-body font-normal text-muted-foreground">{percent}%</span>
    </div>
    <div className="h-[2px] bg-border overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : {}}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full bg-foreground"
      />
    </div>
  </div>
);

/* ─── Pill button component ─── */
const PillButton = ({ children, href = "#", variant = "dark" }: { children: React.ReactNode; href?: string; variant?: "dark" | "light" | "sage" }) => {
  const styles = {
    dark: "border-border text-foreground hover:bg-foreground hover:text-background",
    light: "border-white/30 text-white hover:bg-white hover:text-[hsl(220,20%,7%)]",
    sage: "bg-[hsl(200,12%,40%)] text-white border-transparent hover:bg-[hsl(200,12%,35%)]",
  };
  return (
    <a href={href} className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-[11px] font-body font-normal tracking-[0.08em] uppercase transition-all duration-300 ${styles[variant]}`}>
      {children} <ArrowUpRight className="w-3 h-3" />
    </a>
  );
};

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });
  const progressRef = useRef(null);
  const progressInView = useInView(progressRef, { once: true, margin: "-40px" });

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <div className="light-sections bg-[hsl(0,0%,98%)]">

          {/* ═══════════════════════════════════════════════════
              SECTION 1 · BENTO GRID (3 columns, bordered)
          ═══════════════════════════════════════════════════ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
                {/* Col 1 — Text block */}
                <div className="p-10 md:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
                  <FadeUp>
                    <h2 className="text-[1.6rem] sm:text-[1.85rem] font-display font-extralight leading-[1.25] tracking-tight text-foreground mb-5">
                      The best solution<br />for your business
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-8">
                      Lorem ipsum dolor sit amet, nihil audiam nam no, ei eos exerci nostro.
                    </p>
                    <PillButton variant="dark">View More</PillButton>
                  </FadeUp>
                </div>

                {/* Col 2 — Image + stat overlay */}
                <div className="relative border-b md:border-b-0 md:border-r border-border overflow-hidden min-h-[380px]">
                  <img src={bgCapabilities} alt="" className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/40" />
                  <div className="absolute bottom-0 left-0 p-10 md:p-12" ref={statsRef}>
                    <FadeUp>
                      <p className="text-[4.5rem] font-display font-extralight text-white leading-none mb-1">
                        <Counter target={7} suffix="K+" inView={statsInView} />
                      </p>
                      <p className="text-[14px] font-display font-extralight text-white/90 leading-[1.5] mb-6">
                        Unique & new<br />business tips for our clients
                      </p>
                      <PillButton variant="light">View More</PillButton>
                    </FadeUp>
                  </div>
                </div>

                {/* Col 3 — Text + small image */}
                <div className="flex flex-col">
                  <div className="p-10 md:p-14 flex-1 flex flex-col justify-center border-b border-border">
                    <FadeUp>
                      <h3 className="text-[1.3rem] sm:text-[1.5rem] font-display font-extralight leading-[1.3] text-foreground mb-6">
                        The best way to<br />boost your potential
                      </h3>
                      <PillButton variant="dark">View More</PillButton>
                    </FadeUp>
                  </div>
                  <div className="h-[220px]">
                    <img src={capDashboard} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 2 · TWO IMAGES + TEXT + PROGRESS BARS
          ═══════════════════════════════════════════════════ */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left — two stacked images with offset */}
                <FadeUp>
                  <div className="grid grid-cols-2 gap-5">
                    <img src={heroFreight} alt="" className="w-full aspect-[3/4] object-cover" />
                    <img src={heroYard} alt="" className="w-full aspect-[3/4] object-cover mt-16" />
                  </div>
                </FadeUp>

                {/* Right — subtitle + title + text + progress + subsections */}
                <div>
                  {/* Top right small image */}
                  <FadeUp>
                    <div className="flex justify-end mb-6">
                      <img src={capTracking} alt="" className="w-[220px] h-[120px] object-cover" />
                    </div>
                    <p className="text-[1.1rem] font-display font-extralight text-foreground leading-[1.4] mb-3">
                      Unlock success with professional business solutions
                    </p>
                    <div className="mb-8">
                      <PillButton variant="dark">View More</PillButton>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.08}>
                    <h2 className="text-[1.75rem] sm:text-[2.25rem] font-display font-extralight leading-[1.15] tracking-tight text-foreground mb-5">
                      Achieve goals & coach fast
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eam.
                    </p>
                  </FadeUp>

                  <div ref={progressRef}>
                    <FadeUp delay={0.12}>
                      <ProgressBar label="Analysis" percent={47} inView={progressInView} delay={0.2} />
                      <ProgressBar label="User Experience" percent={64} inView={progressInView} delay={0.4} />
                      <ProgressBar label="Development" percent={79} inView={progressInView} delay={0.6} />
                    </FadeUp>
                  </div>

                  {/* Sub-section: Analysis */}
                  <FadeUp delay={0.25}>
                    <div className="mt-14">
                      <h3 className="text-[16px] font-display font-light text-foreground mb-3">Analysis</h3>
                      <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {["Web & Mobile Responsive", "Web & Mobile Responsive", "Custom Domain Support", "Web & Mobile Responsive", "Web & Mobile Responsive", "Custom Domain Support"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <Check className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                            <span className="text-[12px] font-body font-normal text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeUp>

                  {/* Sub-section: Monitoring */}
                  <FadeUp delay={0.3}>
                    <div className="mt-14">
                      <h3 className="text-[16px] font-display font-light text-foreground mb-3">Monitoring Information</h3>
                      <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 3 · TESTIMONIAL SLIDER (sage/dark muted green)
          ═══════════════════════════════════════════════════ */}
          <section className="bg-[hsl(200,12%,40%)] py-24 md:py-28">
            <div className="container max-w-4xl">
              <FadeUp>
                <div className="text-white/20 text-[5rem] font-serif leading-none mb-4 select-none">"</div>
                <blockquote className="text-[1.35rem] sm:text-[1.65rem] font-display font-extralight leading-[1.4] text-white mb-12">
                  Laudem aperiri oportere nec ad, vel et ceteros nominati et nula disputationi sed ea lorem vis prompta vis, ad mutat luptatum euripidis.
                </blockquote>
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-4">
                    <img src={avatarDomonkos} alt="" className="w-14 h-14 rounded-full object-cover grayscale" />
                    <div>
                      <div className="flex gap-0.5 mb-1.5">
                        {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
                      </div>
                      <p className="text-[14px] font-display font-light text-white">Raymond Cole,</p>
                      <p className="text-[11px] text-white/50 font-body">CEO Director</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all duration-300">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all duration-300">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 4 · FULL-WIDTH DARK — 16+ stat (split)
          ═══════════════════════════════════════════════════ */}
          <section className="relative overflow-hidden">
            {/* Dark top strip */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-[hsl(220,20%,10%)] z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[550px] md:min-h-[650px]">
              {/* Left — image */}
              <div className="relative min-h-[300px]">
                <img src={bgCtaBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[hsl(200,10%,30%)]/50" />
              </div>
              {/* Right — dark panel */}
              <div className="relative bg-[hsl(200,10%,32%)] flex items-end p-12 md:p-16 lg:p-20">
                <FadeUp>
                  <p className="text-[6rem] md:text-[8rem] font-display font-extralight text-white/15 leading-none mb-2">16+</p>
                  <h3 className="text-[1.5rem] font-display font-extralight text-white leading-[1.3] mb-6">
                    Growth-focused<br />solutions
                  </h3>
                  <PillButton variant="light">View More</PillButton>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 5 · IMAGE + TEXT — "Thriving business"
          ═══════════════════════════════════════════════════ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left — image with play button */}
                <FadeUp>
                  <div className="relative">
                    <img src={capFleet} alt="" className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* Right — text */}
                <FadeUp delay={0.1}>
                  <h2 className="text-[1.75rem] sm:text-[2.15rem] font-display font-extralight leading-[1.2] tracking-tight text-foreground">
                    Thriving business with<br /><span className="text-muted-foreground">true professionals</span>
                  </h2>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mt-8 mb-6">
                    Sed ut Perspiciatis unde Omnis Iste Sed ut Pers piciatis unde Omnis Iste Sed ut Perspiciatis unde Omnis Iste
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-body font-normal text-foreground border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity">
                    View More <ArrowUpRight className="w-3 h-3" />
                  </a>
                </FadeUp>
              </div>

              {/* 3-column bottom row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-20 pt-14 border-t border-border">
                <FadeUp>
                  <h3 className="text-[16px] font-display font-light text-foreground mb-4">Work organization</h3>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[2]">
                    Lorem ipsum dolor sit amet, quod ectetur adipiscing elit, sed do eium smod tempor incididunt ut labore.
                  </p>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <h3 className="text-[16px] font-display font-light text-foreground mb-4">Data analytics</h3>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[2]">
                    Lorem ipsum dolor sit amet, quo ectetur adipiscing elit, sed dom eium smod tempor incididunt.
                  </p>
                </FadeUp>
                <FadeUp delay={0.16}>
                  <ul className="space-y-4">
                    {["Eos an semper pertinax", "Dicit everti incorrupte vis no", "Qui an vitae eloquentiam"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        <span className="text-[13px] font-body font-normal text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 6 · HOW DOES IT WORK? (image + steps on sage bg)
          ═══════════════════════════════════════════════════ */}
          <section className="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[750px]">
              {/* Left — image */}
              <div className="relative min-h-[400px] lg:min-h-0">
                <img src={heroFreight} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Right — sage/mint steps */}
              <div className="bg-[hsl(160,12%,90%)] p-12 md:p-16 lg:p-20 flex flex-col justify-center">
                <FadeUp>
                  <h2 className="text-[1.75rem] sm:text-[2.15rem] font-display font-extralight leading-[1.2] tracking-tight text-[hsl(220,20%,15%)] mb-16">
                    How does it work?
                  </h2>
                </FadeUp>

                <div className="space-y-0 relative">
                  {/* Vertical line */}
                  <div className="absolute left-[3px] top-8 bottom-8 w-px bg-[hsl(220,15%,75%)]" />

                  {[
                    { num: "01", title: "People", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." },
                    { num: "02", title: "Strategies", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." },
                    { num: "03", title: "Analysis", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." },
                  ].map((step, i) => (
                    <FadeUp key={step.num} delay={i * 0.1}>
                      <div className="flex gap-7 relative pb-10">
                        {/* Dot on the line */}
                        <div className="flex flex-col items-center shrink-0 z-10 pt-1">
                          <div className="w-[7px] h-[7px] rounded-full bg-[hsl(220,15%,65%)]" />
                        </div>
                        <div>
                          {/* Small decorative icon */}
                          <div className="mb-3 text-[hsl(220,15%,65%)]">
                            {i === 0 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 20c0 0 2-6 8-6s8 6 8 6M12 10a4 4 0 100-8 4 4 0 000 8z" /></svg>}
                            {i === 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>}
                            {i === 2 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>}
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-body text-[hsl(220,15%,55%)] tracking-[0.12em]">{step.num}</span>
                            <h3 className="text-[16px] font-display font-light text-[hsl(220,20%,15%)]">{step.title}</h3>
                          </div>
                          <p className="text-[12px] text-[hsl(220,15%,50%)] font-body font-normal leading-[1.9]">{step.text}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 7 · TEAM OF SPECIALISTS (title + 3 per row, 2 rows)
          ═══════════════════════════════════════════════════ */}
          <section className="py-28 md:py-36">
            <div className="container">
              {/* First row: title + 3 members */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
                {/* Left — title */}
                <FadeUp>
                  <div className="lg:pr-4">
                    <h2 className="text-[1.75rem] sm:text-[2.15rem] font-display font-extralight leading-[1.2] tracking-tight text-foreground mb-5">
                      Team of<br />specialists
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-8">
                      Duo ei ullum inani senserit, in tempo ribus pers persequeris idque omne.
                    </p>
                    <PillButton variant="dark">View More</PillButton>
                  </div>
                </FadeUp>

                {/* Team row 1 */}
                {[
                  { name: "Domonkos Forray", role: "CEO", image: avatarDomonkos },
                  { name: "Ádám Forray", role: "CTO", image: avatarForray },
                  { name: "Attila Rafaj", role: "Business Manager", image: avatarRafaj },
                ].map((m, i) => (
                  <FadeUp key={m.name} delay={i * 0.08}>
                    <div>
                      <div className="overflow-hidden mb-4">
                        <img src={m.image} alt={m.name} className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[14px] font-display font-light text-foreground">{m.name}</p>
                          <p className="text-[11px] text-muted-foreground font-body mt-0.5">{m.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[8px] text-muted-foreground">in</span>
                          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[8px] text-muted-foreground">𝕏</span>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Second row: 3 more members offset */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 mt-12 lg:ml-[25%]">
                {[
                  { name: "Sophie White", role: "Head of Consulting", image: heroLoad },
                  { name: "Paul Goto", role: "Manager", image: heroDock },
                  { name: "Toby Young", role: "Legal Officer", image: capNetwork },
                ].map((m, i) => (
                  <FadeUp key={m.name} delay={i * 0.08}>
                    <div>
                      <div className="overflow-hidden mb-4">
                        <img src={m.image} alt={m.name} className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[14px] font-display font-light text-foreground">{m.name}</p>
                          <p className="text-[11px] text-muted-foreground font-body mt-0.5">{m.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[8px] text-muted-foreground">in</span>
                          <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-[8px] text-muted-foreground">𝕏</span>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 8 · DARK CINEMATIC BANNER — 28K+ stat
          ═══════════════════════════════════════════════════ */}
          <section className="relative py-36 md:py-48 overflow-hidden">
            <div className="absolute inset-0">
              <img src={bgCtaFinal} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/55" />
            </div>
            <div className="container relative z-10 flex flex-col justify-between min-h-[300px]">
              <FadeUp>
                <p className="text-[7rem] md:text-[9rem] font-display font-extralight text-white/12 leading-none mb-2">
                  28K+
                </p>
                <h3 className="text-[1.4rem] font-display font-extralight text-white leading-[1.35] mb-8">
                  Successful projects<br />delivered
                </h3>
                <PillButton variant="light">View More</PillButton>
              </FadeUp>
              {/* Bottom right label */}
              <div className="absolute bottom-0 right-0 text-right">
                <p className="text-[15px] font-display font-light text-white">Digital Marketing</p>
                <p className="text-[11px] text-white/45 font-body mt-1 leading-[1.6]">Libeer mea dictas eirmod scripserit,<br />iisque vivendum eu usu.</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 9 · LATEST NEWS — 3 blog cards
          ═══════════════════════════════════════════════════ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <FadeUp>
                <h2 className="text-[1.75rem] sm:text-[2.15rem] font-display font-extralight leading-[1.2] tracking-tight text-foreground mb-14">
                  Latest news coming
                </h2>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { image: usecaseRetail, cat: "Business | Research", title: "Making innovative strategies for outstanding future results" },
                  { image: usecaseManuf, cat: "Business | Economy", title: "Our business thrives to contribute global initiatives" },
                  { image: usecaseCold, cat: "Business | Investment", title: "Discover a better way of redefining company goals" },
                ].map((post, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden mb-5">
                        <img src={post.image} alt="" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                        {/* Date badge */}
                        <div className="absolute top-4 left-4 bg-[hsl(200,12%,40%)] text-white px-3.5 py-2.5 text-center leading-none">
                          <p className="text-[16px] font-display font-light leading-none">06</p>
                          <p className="text-[9px] font-body uppercase mt-1 tracking-wider">Feb</p>
                        </div>
                      </div>
                      <p className="text-[10px] text-muted-foreground font-body tracking-[0.08em] uppercase mb-3">{post.cat}</p>
                      <h3 className="text-[16px] font-display font-light text-foreground leading-[1.4] mb-5">{post.title}</h3>
                      <PillButton variant="sage">Read More</PillButton>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 10 · CONTACT — map bg + form card
          ═══════════════════════════════════════════════════ */}
          <section id="contact" className="relative overflow-hidden">
            {/* Dark top strip */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-[hsl(220,20%,10%)] z-10" />
            
            <div className="relative min-h-[700px]">
              {/* Map background */}
              <div className="absolute inset-0 bg-[hsl(180,10%,78%)]">
                {/* World map SVG pattern */}
                <svg viewBox="0 0 1200 600" className="w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.8" fill="hsl(200,10%,55%)" />
                    </pattern>
                  </defs>
                  <rect width="1200" height="600" fill="url(#dots)" />
                  {/* Simplified continent shapes */}
                  <ellipse cx="350" cy="250" rx="180" ry="120" fill="hsl(180,8%,70%)" opacity="0.5" />
                  <ellipse cx="700" cy="220" rx="200" ry="140" fill="hsl(180,8%,70%)" opacity="0.5" />
                  <ellipse cx="950" cy="280" rx="120" ry="100" fill="hsl(180,8%,70%)" opacity="0.4" />
                </svg>
                {/* Map pins */}
                <div className="absolute top-[35%] left-[25%]">
                  <MapPin className="w-6 h-6 text-[hsl(220,20%,15%)] fill-[hsl(220,20%,15%)]" />
                </div>
                <div className="absolute top-[55%] left-[18%]">
                  <MapPin className="w-6 h-6 text-[hsl(220,20%,15%)] fill-[hsl(220,20%,15%)]" />
                </div>
              </div>

              <div className="container relative z-10 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                  {/* Left — empty (map visible) */}
                  <div />

                  {/* Right — form card */}
                  <FadeUp>
                    <div className="bg-[hsl(0,0%,98%)] p-10 md:p-14 shadow-xl">
                      <h2 className="text-[1.65rem] sm:text-[2rem] font-display font-extralight leading-[1.2] tracking-tight text-[hsl(220,20%,15%)] mb-1">
                        Get in touch or <span className="text-[hsl(200,12%,50%)]">visit us</span>
                      </h2>
                      <div className="space-y-2.5 mt-6 mb-12">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[hsl(220,15%,40%)] shrink-0" />
                          <span className="text-[12.5px] font-body text-[hsl(220,15%,40%)]">128 City Road, London EC1V 2NX, United Kingdom</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-[hsl(220,15%,40%)] shrink-0" />
                          <span className="text-[12.5px] font-body text-[hsl(220,15%,40%)]">ihaveaquestion@trucksonthemap.com, +44 (20) 3807 84 93</span>
                        </div>
                      </div>

                      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <label className="text-[11px] text-[hsl(220,15%,50%)] font-body mb-3 block tracking-wide">Name</label>
                            <input type="text" className="w-full border-b border-[hsl(220,12%,85%)] pb-2 text-[13px] font-body text-[hsl(220,20%,15%)] bg-transparent focus:outline-none focus:border-[hsl(220,15%,50%)] transition-colors" />
                          </div>
                          <div>
                            <label className="text-[11px] text-[hsl(220,15%,50%)] font-body mb-3 block tracking-wide">E-mail address</label>
                            <input type="email" className="w-full border-b border-[hsl(220,12%,85%)] pb-2 text-[13px] font-body text-[hsl(220,20%,15%)] bg-transparent focus:outline-none focus:border-[hsl(220,15%,50%)] transition-colors" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[11px] text-[hsl(220,15%,50%)] font-body mb-3 block tracking-wide">Message</label>
                          <textarea rows={3} className="w-full border-b border-[hsl(220,12%,85%)] pb-2 text-[13px] font-body text-[hsl(220,20%,15%)] bg-transparent focus:outline-none focus:border-[hsl(220,15%,50%)] transition-colors resize-none" />
                        </div>
                        <button type="submit" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[hsl(220,12%,85%)] text-[11px] font-body font-normal tracking-[0.08em] uppercase text-[hsl(220,20%,15%)] hover:bg-[hsl(220,20%,15%)] hover:text-white transition-all duration-300">
                          Send <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </form>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 11 · RESOURCES BAR
          ═══════════════════════════════════════════════════ */}
          <section className="py-5 border-b border-border">
            <div className="container flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-8">
                {["Resources", "Documentation", "Developers", "Portfolio"].map((item) => (
                  <a key={item} href="#" className="text-[12px] font-body font-normal text-foreground hover:text-muted-foreground transition-colors">{item}</a>
                ))}
              </div>
              <div className="flex items-center gap-6 text-[12px] text-muted-foreground font-body">
                <span>+44 (20) 3807 84 93</span>
                <span>ihaveaquestion@trucksonthemap.com</span>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default About;
