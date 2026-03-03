import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";
import featuresDock from "@/assets/features-dock.jpg";
import bgCapabilities from "@/assets/bg-capabilities.jpg";
import bgCtaBanner from "@/assets/bg-cta-banner.jpg";
import capDashboard from "@/assets/cap-dashboard.jpg";
import capFleet from "@/assets/cap-fleet.jpg";

import logoIsover from "@/assets/logos/isover.png";
import logoKuehne from "@/assets/logos/kuehne-nagel.png";
import logoRigips from "@/assets/logos/rigips.png";
import logoVredestein from "@/assets/logos/vredestein.png";
import logoWeber from "@/assets/logos/weber.png";

/* ─── Tabs ─── */
const tabs = [
  { id: "analysis", label: "Analysis" },
  { id: "requirements", label: "HR Requirements" },
  { id: "content", label: "Content Treatment" },
  { id: "measuring", label: "Measuring of results" },
];

/* ─── Services ─── */
const services = [
  {
    title: "Flexibility & Adaptability",
    text: "Our platform adapts to your unique supply chain workflows, offering configurable modules that scale with your logistics operations across all regions and verticals.",
  },
  {
    title: "Market Analysis & Research",
    text: "Deep freight market intelligence provides real-time rate benchmarking, carrier performance analytics, and demand forecasting to optimize every procurement decision.",
  },
  {
    title: "Customer Care & Support",
    text: "Dedicated account management with around-the-clock technical support ensures seamless onboarding, training, and continuous platform optimization for your entire team.",
  },
];

/* ─── Checklist ─── */
const checklistItems = [
  "Real-time freight events",
  "Development & design",
  "Analytics",
  "Collaboration with carriers",
];

/* ─── Team ─── */
const team = [
  { name: "Domonkos Forray", role: "Co-Founder & CEO", image: avatarDomonkos },
  { name: "Ádám Forray", role: "Co-Founder & CTO", image: avatarForray },
  { name: "Attila Rafaj", role: "Head of Operations", image: avatarRafaj },
];

/* ─── Logos ─── */
const logos = [logoIsover, logoKuehne, logoRigips, logoVredestein, logoWeber];

/* ─── Fade helper ─── */
const FadeUp = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("analysis");

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <div className="light-sections bg-[hsl(0,0%,98%)]">

          {/* ════════════════════════════════════════════
              1 · HORIZONTAL TAB BAR
          ════════════════════════════════════════════ */}
          <nav className="border-b border-border sticky top-0 z-30 bg-[hsl(0,0%,98%)]">
            <div className="container">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-[18px] text-[11px] sm:text-[12px] font-body font-normal tracking-[0.12em] uppercase text-center transition-all duration-300 border-b-[2px] -mb-px whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-foreground text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* ════════════════════════════════════════════
              2 · LARGE STAT + IMAGE
          ════════════════════════════════════════════ */}
          <section className="pt-28 pb-24 md:pt-36 md:pb-32">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
                {/* Left */}
                <FadeUp>
                  <div className="lg:pt-4">
                    <h2 className="text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] font-display font-extralight leading-[0.95] tracking-tight text-foreground mb-4">
                      8,506K+
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-foreground font-display font-extralight leading-[1.6] mb-3">
                      Trust the process & make your
                      <br />
                      business grow
                    </p>
                    <p className="text-[13px] text-muted-foreground font-body font-normal leading-[1.95] max-w-sm mb-10">
                      Our platform has managed millions of freight movements, helping businesses reduce costs and increase operational efficiency across twelve European markets.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-background text-[12px] font-body font-normal tracking-[0.06em] uppercase hover:opacity-90 transition-opacity"
                    >
                      Discover More
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </FadeUp>

                {/* Right — image with overlapping stat */}
                <FadeUp delay={0.12}>
                  <div className="relative">
                    <img
                      src={capDashboard}
                      alt="Platform dashboard"
                      className="w-full aspect-[4/3] object-cover grayscale"
                    />
                    {/* Overlap card */}
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-2 bg-card p-5 shadow-lg border border-border">
                      <div className="flex items-end gap-6">
                        <div>
                          <p className="text-2xl font-display font-extralight text-foreground leading-none">24K</p>
                          <p className="text-[10px] text-muted-foreground font-body tracking-[0.12em] uppercase mt-1">Active Shipments</p>
                        </div>
                        <div>
                          <p className="text-2xl font-display font-extralight text-foreground leading-none">98%</p>
                          <p className="text-[10px] text-muted-foreground font-body tracking-[0.12em] uppercase mt-1">Retention Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              3 · THREE-COLUMN TEXT (no icons, no boxes)
          ════════════════════════════════════════════ */}
          <section className="py-20 md:py-24 border-t border-border">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                {services.map((s, i) => (
                  <FadeUp key={s.title} delay={i * 0.08}>
                    <div>
                      <h3 className="text-[14px] font-display font-light tracking-[0.01em] text-foreground mb-4 leading-[1.3]">
                        {s.title}
                      </h3>
                      <div className="w-8 h-px bg-border mb-5" />
                      <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[2]">
                        {s.text}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              4 · FULL-WIDTH CINEMATIC BANNER
          ════════════════════════════════════════════ */}
          <section className="relative py-36 md:py-48 overflow-hidden">
            <div className="absolute inset-0">
              <img src={bgCapabilities} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/65" />
            </div>
            <div className="container relative z-10 flex items-end">
              <FadeUp>
                <h2 className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] font-display font-extralight leading-[1.2] tracking-tight text-white max-w-lg">
                  From strategy to delivery,
                  <br />
                  we're here for your business.
                </h2>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-10 text-[11px] font-body font-normal tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/30 pb-1"
                >
                  Latest insights & news
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </FadeUp>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              5 · QUOTE CARDS — "Introducing innovative ideas"
          ════════════════════════════════════════════ */}
          <section className="py-24 md:py-32">
            <div className="container max-w-5xl">
              <FadeUp>
                <h2 className="text-center text-[1.65rem] sm:text-3xl md:text-[2.25rem] font-display font-extralight tracking-tight text-foreground leading-[1.25] mb-20">
                  Introducing innovative
                  <br />
                  ideas for business
                </h2>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                {[
                  {
                    quote:
                      "The platform transformed our inbound logistics. We reduced dock wait times by 55% in the first quarter, saving thousands in carrier detention fees and increasing throughput.",
                    name: "Fleet Manager",
                    role: "FMCG",
                    image: avatarDomonkos,
                  },
                  {
                    quote:
                      "A true end-to-end visibility solution. We can now track every shipment in real-time and proactively manage exceptions before they become costly delays for our customers.",
                    name: "Supply Chain Director",
                    role: "Automotive",
                    image: avatarForray,
                  },
                ].map((q, i) => (
                  <FadeUp key={i} delay={i * 0.1}>
                    <div className="flex gap-5">
                      <img
                        src={q.image}
                        alt={q.name}
                        className="w-16 h-16 rounded-full object-cover grayscale shrink-0 mt-1"
                      />
                      <div>
                        <p className="text-[12.5px] text-muted-foreground font-body font-normal leading-[2] mb-5">
                          {q.quote}
                        </p>
                        <div className="w-6 h-px bg-border mb-3" />
                        <p className="text-[13px] font-display font-light text-foreground">{q.name}</p>
                        <p className="text-[11px] text-muted-foreground font-body mt-0.5">{q.role}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp>
                <div className="flex justify-center mt-16">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-foreground" />
                    <span className="text-[11px] font-body text-muted-foreground tracking-[0.1em] uppercase">01 / 04</span>
                    <div className="w-6 h-px bg-border" />
                  </div>
                </div>
              </FadeUp>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              6 · DARK SECTION — CHECKLIST
          ════════════════════════════════════════════ */}
          <section className="relative py-32 md:py-40 overflow-hidden">
            <div className="absolute inset-0">
              <img src={bgCtaBanner} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />
            </div>
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left — empty (image shows through) */}
                <div />
                {/* Right — checklist */}
                <FadeUp>
                  <ul className="space-y-7">
                    {checklistItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-5 group">
                        <span className="w-1 h-1 rounded-full bg-white/50 group-hover:bg-white transition-colors" />
                        <span className="text-[14px] text-white/85 font-body font-normal tracking-[0.03em] group-hover:text-white transition-colors">
                          {item}
                        </span>
                        <div className="flex-1 h-px bg-white/10 ml-4" />
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              7 · TEAM
          ════════════════════════════════════════════ */}
          <section className="py-24 md:py-32">
            <div className="container max-w-5xl">
              <FadeUp>
                <h2 className="text-center text-[1.65rem] sm:text-3xl md:text-[2.25rem] font-display font-extralight tracking-tight text-foreground leading-[1.25] mb-16">
                  Meet our team
                  <br />
                  of experts
                </h2>
              </FadeUp>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-8">
                {team.map((m, i) => (
                  <FadeUp key={m.name} delay={i * 0.08}>
                    <div>
                      <div className="overflow-hidden mb-4">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <p className="text-[13px] font-display font-light text-foreground">{m.name}</p>
                      <p className="text-[10.5px] text-muted-foreground font-body tracking-[0.08em] uppercase mt-1">{m.role}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              8 · LOGO BAR
          ════════════════════════════════════════════ */}
          <section className="py-12 border-t border-border">
            <div className="container">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <FadeUp>
                  <p className="text-[14px] font-display font-extralight text-foreground leading-[1.5] shrink-0">
                    Connecting businesses
                    <br className="hidden sm:block" />
                    and ideas for the future
                  </p>
                </FadeUp>
                <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
                  {logos.map((l, i) => (
                    <FadeUp key={i} delay={i * 0.04}>
                      <img src={l} alt="Client" className="h-7 md:h-9 opacity-30 grayscale object-contain" />
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════
              9 · DARK CTA + CONTACT FORM
          ════════════════════════════════════════════ */}
          <section className="relative py-28 md:py-36 overflow-hidden">
            <div className="absolute inset-0">
              <img src={featuresDock} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/80" />
            </div>
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left */}
                <FadeUp>
                  <h2 className="text-[1.65rem] sm:text-3xl md:text-[2.5rem] font-display font-extralight leading-[1.2] tracking-tight text-white">
                    Let us help you
                    <br />
                    create a lasting new
                    <br />
                    image for your
                    <br />
                    brand
                  </h2>
                </FadeUp>

                {/* Right — form */}
                <FadeUp delay={0.12}>
                  <div className="bg-white/[0.07] backdrop-blur-lg border border-white/[0.08] p-8 sm:p-10">
                    <p className="text-[10px] font-display font-light tracking-[0.3em] uppercase text-white/50 mb-8">
                      Connect With Us
                    </p>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-white/15 pb-3 text-[12.5px] text-white/90 font-body placeholder:text-white/35 focus:outline-none focus:border-white/40 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-white/15 pb-3 text-[12.5px] text-white/90 font-body placeholder:text-white/35 focus:outline-none focus:border-white/40 transition-colors"
                      />
                      <textarea
                        placeholder="Message"
                        rows={3}
                        className="w-full bg-transparent border-b border-white/15 pb-3 text-[12.5px] text-white/90 font-body placeholder:text-white/35 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[hsl(220,20%,15%)] text-[12px] font-body font-normal tracking-[0.06em] uppercase hover:bg-white/90 transition-colors mt-2"
                      >
                        Send
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                </FadeUp>
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
