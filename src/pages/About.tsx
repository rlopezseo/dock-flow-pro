import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Check, MapPin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
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
  <div className="mb-6">
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
              SECTION 1 · BENTO GRID (3 columns)
          ═══════════════════════════════════════════════════ */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
                {/* Col 1 — Text block */}
                <div className="p-10 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
                  <FadeUp>
                    <h2 className="text-[1.5rem] sm:text-[1.75rem] font-display font-extralight leading-[1.3] tracking-tight text-foreground mb-5">
                      The best solution
                      <br />for your business
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-8">
                      Our platform has managed millions of freight movements, helping businesses reduce costs and increase efficiency across Europe.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-[11px] font-body font-normal tracking-[0.08em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300 self-start">
                      View More <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </FadeUp>
                </div>

                {/* Col 2 — Image + stat overlay */}
                <div className="relative border-b md:border-b-0 md:border-r border-border overflow-hidden">
                  <img src={bgCapabilities} alt="" className="w-full h-full min-h-[320px] object-cover" />
                  <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/40" />
                  <div className="absolute bottom-0 left-0 p-10">
                    <FadeUp>
                      <p className="text-[4rem] font-display font-extralight text-white leading-none mb-1" ref={statsRef}>
                        <Counter target={7} suffix="K+" inView={statsInView} />
                      </p>
                      <p className="text-[14px] font-display font-extralight text-white/90 leading-[1.5] mb-6">
                        Unique & new
                        <br />business tips for our clients
                      </p>
                      <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-[11px] font-body font-normal tracking-[0.08em] uppercase text-white hover:bg-white hover:text-[hsl(220,20%,7%)] transition-all duration-300">
                        View More <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </FadeUp>
                  </div>
                </div>

                {/* Col 3 — Text + small image */}
                <div className="flex flex-col">
                  <div className="p-10 md:p-12 flex-1 flex flex-col justify-center border-b border-border">
                    <FadeUp>
                      <h3 className="text-[1.25rem] sm:text-[1.4rem] font-display font-extralight leading-[1.3] text-foreground mb-6">
                        The best way to
                        <br />boost your potential
                      </h3>
                      <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-[11px] font-body font-normal tracking-[0.08em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300 self-start">
                        View More <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </FadeUp>
                  </div>
                  <div className="h-[200px]">
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
                {/* Left — two stacked images */}
                <FadeUp>
                  <div className="grid grid-cols-2 gap-4">
                    <img src={heroFreight} alt="" className="w-full aspect-[3/4] object-cover" />
                    <img src={heroYard} alt="" className="w-full aspect-[3/4] object-cover mt-12" />
                  </div>
                </FadeUp>

                {/* Right — title + text + progress */}
                <div>
                  <FadeUp>
                    <p className="text-[13px] text-muted-foreground font-body font-normal leading-[1.8] mb-4">
                      Unlock success with professional business solutions
                    </p>
                    <h2 className="text-[1.75rem] sm:text-[2.25rem] font-display font-extralight leading-[1.15] tracking-tight text-foreground mb-6">
                      Achieve goals & coach fast
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-10">
                      Our dock scheduling and freight visibility platform helps shippers, carriers, and warehouses coordinate operations seamlessly. From inbound coordination to last-mile tracking, we bring transparency to every mile.
                    </p>
                  </FadeUp>

                  <div ref={progressRef}>
                    <FadeUp delay={0.1}>
                      <ProgressBar label="Analysis" percent={91} inView={progressInView} delay={0.2} />
                      <ProgressBar label="User Experience" percent={82} inView={progressInView} delay={0.4} />
                      <ProgressBar label="Development" percent={72} inView={progressInView} delay={0.6} />
                    </FadeUp>
                  </div>

                  {/* Sub-sections */}
                  <FadeUp delay={0.3}>
                    <div className="mt-14">
                      <h3 className="text-[16px] font-display font-light text-foreground mb-3">Analysis</h3>
                      <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-6">
                        Deep freight market intelligence provides real-time rate benchmarking, carrier performance analytics, and demand forecasting to optimize procurement.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {["Real-Time Tracking", "Dock Scheduling", "Carrier Management", "Route Optimization", "Custom Integrations", "API Support"].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-[12px] font-body font-normal text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.4}>
                    <div className="mt-14">
                      <h3 className="text-[16px] font-display font-light text-foreground mb-3">Monitoring Information</h3>
                      <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9]">
                        Real-time monitoring of all freight movements with predictive analytics, automated alerts, and comprehensive reporting dashboards.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 3 · TESTIMONIAL SLIDER (dark)
          ═══════════════════════════════════════════════════ */}
          <section className="bg-[hsl(200,12%,40%)] py-20 md:py-24">
            <div className="container max-w-4xl">
              <FadeUp>
                <div className="text-white/30 text-5xl font-display leading-none mb-6">"</div>
                <blockquote className="text-[1.3rem] sm:text-[1.6rem] font-display font-extralight leading-[1.45] text-white mb-10">
                  The platform transformed our inbound logistics entirely. We reduced dock wait times by 55% in the first quarter, saving thousands in carrier detention fees and increasing throughput across all facilities.
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={avatarDomonkos} alt="" className="w-12 h-12 rounded-full object-cover grayscale" />
                    <div>
                      <div className="flex gap-1 mb-1">
                        {[1,2,3,4,5].map(i => <span key={i} className="text-white/60 text-xs">★</span>)}
                      </div>
                      <p className="text-[13px] font-display font-light text-white">Raymond Cole,</p>
                      <p className="text-[11px] text-white/50 font-body">CEO Director</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 4 · FULL-WIDTH DARK IMAGE — 16+ stat
          ═══════════════════════════════════════════════════ */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(200,10%,30%)]" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px]">
              {/* Dark top strip */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-[hsl(220,20%,7%)]/80 z-10" />
              {/* Image */}
              <div className="relative">
                <img src={bgCtaBanner} alt="" className="w-full h-full object-cover opacity-60" />
              </div>
              {/* Right panel */}
              <div className="relative flex items-end p-12 md:p-16">
                <FadeUp>
                  <p className="text-[5rem] md:text-[7rem] font-display font-extralight text-white/20 leading-none mb-2">16+</p>
                  <h3 className="text-[1.4rem] font-display font-extralight text-white leading-[1.35] mb-6">
                    Growth-focused
                    <br />solutions
                  </h3>
                  <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-[11px] font-body font-normal tracking-[0.08em] uppercase text-white hover:bg-white hover:text-[hsl(220,20%,7%)] transition-all duration-300">
                    View More <ArrowUpRight className="w-3 h-3" />
                  </a>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 5 · IMAGE + TEXT — "Thriving business"
          ═══════════════════════════════════════════════════ */}
          <section className="py-20 md:py-28">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left — image with play button */}
                <FadeUp>
                  <div className="relative">
                    <img src={capFleet} alt="" className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* Right — text */}
                <FadeUp delay={0.1}>
                  <h2 className="text-[1.65rem] sm:text-[2rem] font-display font-extralight leading-[1.2] tracking-tight text-foreground mb-2">
                    Thriving business with
                    <br /><span className="text-muted-foreground">true professionals</span>
                  </h2>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mt-8 mb-6">
                    We help shippers, carriers, and warehouses coordinate dock scheduling, gain real-time freight visibility, and optimise operations across Europe.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-body font-normal text-foreground border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity">
                    View More <ArrowUpRight className="w-3 h-3" />
                  </a>
                </FadeUp>
              </div>

              {/* 3-column bottom row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mt-20 pt-12 border-t border-border">
                <FadeUp>
                  <h3 className="text-[15px] font-display font-light text-foreground mb-4">Work organization</h3>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[2]">
                    Our platform adapts to your unique supply chain workflows, offering configurable modules that scale with your operations.
                  </p>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <h3 className="text-[15px] font-display font-light text-foreground mb-4">Data analytics</h3>
                  <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[2]">
                    Deep freight market intelligence provides real-time rate benchmarking and carrier performance analytics.
                  </p>
                </FadeUp>
                <FadeUp delay={0.16}>
                  <ul className="space-y-3">
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
              SECTION 6 · HOW DOES IT WORK? (image + steps on mint bg)
          ═══════════════════════════════════════════════════ */}
          <section className="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
              {/* Left — image */}
              <div className="relative min-h-[400px] lg:min-h-0">
                <img src={heroFreight} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Right — sage/mint steps */}
              <div className="bg-[hsl(160,12%,90%)] p-12 md:p-16 lg:p-20 flex flex-col justify-center">
                <FadeUp>
                  <h2 className="text-[1.65rem] sm:text-[2rem] font-display font-extralight leading-[1.2] tracking-tight text-[hsl(220,20%,15%)] mb-14">
                    How does it work?
                  </h2>
                </FadeUp>

                <div className="space-y-10 relative">
                  {/* Vertical line */}
                  <div className="absolute left-[14px] top-8 bottom-8 w-px bg-[hsl(220,15%,75%)]" />

                  {[
                    { num: "01", title: "People", text: "Building the right team to handle your logistics operations with precision and care." },
                    { num: "02", title: "Strategies", text: "Developing data-driven approaches to optimize every aspect of your supply chain." },
                    { num: "03", title: "Analysis", text: "Measuring results and continuously improving performance through advanced analytics." },
                  ].map((step, i) => (
                    <FadeUp key={step.num} delay={i * 0.1}>
                      <div className="flex gap-6 relative">
                        <div className="flex flex-col items-center shrink-0 z-10">
                          <span className="text-[10px] font-body text-[hsl(220,15%,55%)] tracking-[0.1em]">{step.num}</span>
                        </div>
                        <div>
                          <h3 className="text-[15px] font-display font-light text-[hsl(220,20%,15%)] mb-2">{step.title}</h3>
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
              SECTION 7 · TEAM OF SPECIALISTS
          ═══════════════════════════════════════════════════ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
                {/* Left — title */}
                <FadeUp>
                  <div className="lg:pr-8">
                    <h2 className="text-[1.65rem] sm:text-[2rem] font-display font-extralight leading-[1.2] tracking-tight text-foreground mb-5">
                      Team of
                      <br />specialists
                    </h2>
                    <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[1.9] mb-8">
                      Duo ei ullum inani senserit, in temporibus pers persequeris idque omne.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-[11px] font-body font-normal tracking-[0.08em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                      View More <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </FadeUp>

                {/* Team grid — 3 cols */}
                {[
                  { name: "Domonkos Forray", role: "CEO", image: avatarDomonkos },
                  { name: "Ádám Forray", role: "CTO", image: avatarForray },
                  { name: "Attila Rafaj", role: "Operations", image: avatarRafaj },
                ].map((m, i) => (
                  <FadeUp key={m.name} delay={i * 0.08}>
                    <div>
                      <img src={m.image} alt={m.name} className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 mb-4" />
                      <p className="text-[13px] font-display font-light text-foreground">{m.name}</p>
                      <p className="text-[11px] text-muted-foreground font-body mt-0.5">{m.role}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 8 · DARK CINEMATIC BANNER — 28K+ stat
          ═══════════════════════════════════════════════════ */}
          <section className="relative py-32 md:py-44 overflow-hidden">
            <div className="absolute inset-0">
              <img src={bgCtaFinal} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/60" />
            </div>
            <div className="container relative z-10">
              <FadeUp>
                <p className="text-[6rem] md:text-[8rem] font-display font-extralight text-white/15 leading-none mb-2">
                  28K+
                </p>
                <h3 className="text-[1.3rem] font-display font-extralight text-white leading-[1.4] mb-8">
                  Successful projects
                  <br />delivered
                </h3>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-[11px] font-body font-normal tracking-[0.08em] uppercase text-white hover:bg-white hover:text-[hsl(220,20%,7%)] transition-all duration-300">
                  View More <ArrowUpRight className="w-3 h-3" />
                </a>
              </FadeUp>
              {/* Bottom right label */}
              <div className="absolute bottom-12 right-8 text-right">
                <p className="text-[14px] font-display font-light text-white">Digital Marketing</p>
                <p className="text-[11px] text-white/50 font-body mt-1">Libeer mea dictas eirmod scripserit,<br />iisque vivendum eu usu.</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 9 · LATEST NEWS — 3 blog cards
          ═══════════════════════════════════════════════════ */}
          <section className="py-20 md:py-28">
            <div className="container">
              <FadeUp>
                <h2 className="text-[1.65rem] sm:text-[2rem] font-display font-extralight leading-[1.2] tracking-tight text-foreground mb-12">
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
                        <div className="absolute top-4 left-4 bg-[hsl(200,12%,40%)] text-white px-3 py-2 text-center">
                          <p className="text-[14px] font-display font-light leading-none">06</p>
                          <p className="text-[10px] font-body uppercase mt-0.5">Feb</p>
                        </div>
                      </div>
                      <p className="text-[10px] text-muted-foreground font-body tracking-[0.08em] uppercase mb-2">{post.cat}</p>
                      <h3 className="text-[15px] font-display font-light text-foreground leading-[1.4] mb-5">{post.title}</h3>
                      <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[hsl(200,12%,40%)] text-white text-[10px] font-body tracking-[0.08em] uppercase hover:bg-[hsl(200,12%,35%)] transition-colors">
                        Read More <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 10 · CONTACT — map bg + form
          ═══════════════════════════════════════════════════ */}
          <section className="relative py-20 md:py-28 overflow-hidden bg-[hsl(200,12%,40%)]">
            <div className="absolute inset-0 opacity-20">
              {/* Simple map-like pattern */}
              <div className="w-full h-full bg-[hsl(180,10%,75%)]" />
            </div>
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left — spacer (map area) */}
                <div />

                {/* Right — form card */}
                <FadeUp>
                  <div className="bg-[hsl(0,0%,98%)] p-10 md:p-12">
                    <h2 className="text-[1.65rem] sm:text-[2rem] font-display font-extralight leading-[1.2] tracking-tight text-[hsl(220,20%,15%)] mb-2">
                      Get in touch or <span className="text-[hsl(200,12%,50%)]">visit us</span>
                    </h2>
                    <div className="space-y-2 mt-6 mb-10">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-3.5 h-3.5 text-[hsl(220,15%,40%)]" />
                        <span className="text-[12.5px] font-body text-[hsl(220,15%,40%)]">128 City Road, London EC1V 2NX, United Kingdom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-3.5 h-3.5 text-[hsl(220,15%,40%)]" />
                        <span className="text-[12.5px] font-body text-[hsl(220,15%,40%)]">ihaveaquestion@trucksonthemap.com, +44 (20) 3807 84 93</span>
                      </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-[11px] text-[hsl(220,15%,50%)] font-body mb-2 block">Name</label>
                          <input type="text" className="w-full border-b border-[hsl(220,12%,85%)] pb-2 text-[13px] font-body text-[hsl(220,20%,15%)] bg-transparent focus:outline-none focus:border-[hsl(220,15%,50%)] transition-colors" />
                        </div>
                        <div>
                          <label className="text-[11px] text-[hsl(220,15%,50%)] font-body mb-2 block">E-mail address</label>
                          <input type="email" className="w-full border-b border-[hsl(220,12%,85%)] pb-2 text-[13px] font-body text-[hsl(220,20%,15%)] bg-transparent focus:outline-none focus:border-[hsl(220,15%,50%)] transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] text-[hsl(220,15%,50%)] font-body mb-2 block">Message</label>
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
          </section>

          {/* ═══════════════════════════════════════════════════
              SECTION 11 · FOOTER BAR (Resources row)
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
