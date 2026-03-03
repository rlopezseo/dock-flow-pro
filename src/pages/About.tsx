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
  { id: "requirements", label: "Requirements" },
  { id: "implementation", label: "Implementation" },
  { id: "optimization", label: "Optimization" },
];

/* ─── Services (3-col text) ─── */
const services = [
  {
    title: "Flexibility & Adaptability",
    text: "Our platform adapts to your unique supply chain workflows, offering configurable modules that scale with your logistics operations across all regions.",
  },
  {
    title: "Market Analysis & Research",
    text: "Deep freight market intelligence provides real-time rate benchmarking, carrier performance analytics, and demand forecasting to optimize procurement decisions.",
  },
  {
    title: "Customer Care & Support",
    text: "Dedicated account management with 24/7 technical support ensures seamless onboarding, training, and continuous platform optimization for your team.",
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

const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
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
          {/* ═══ HORIZONTAL TABS BAR ═══ */}
          <section className="border-b border-[hsl(220,12%,91%)]">
            <div className="container">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[140px] py-5 text-[13px] font-body font-normal tracking-[0.08em] uppercase text-center transition-all duration-300 border-b-2 ${
                      activeTab === tab.id
                        ? "border-[hsl(207,30%,12%)] text-[hsl(207,30%,12%)]"
                        : "border-transparent text-[hsl(220,15%,55%)] hover:text-[hsl(207,30%,12%)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ STAT + IMAGE SECTION ═══ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left — big stat */}
                <FadeUp>
                  <p className="text-[11px] font-body font-normal tracking-[0.2em] uppercase text-[hsl(220,15%,55%)] mb-6">
                    Trusted by industry leaders
                  </p>
                  <h2 className="text-6xl sm:text-7xl md:text-[5.5rem] font-display font-extralight leading-[1] tracking-tight text-[hsl(207,30%,12%)] mb-8">
                    8,506K+
                  </h2>
                  <p className="text-[15px] text-[hsl(220,15%,45%)] font-body font-normal leading-[1.9] max-w-md mb-10">
                    Trust the process & make your business grow. Our platform has managed millions of freight movements, helping businesses reduce costs and increase operational efficiency across Europe.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-[hsl(207,30%,12%)] text-white rounded-full text-[13px] font-body font-normal hover:bg-[hsl(207,30%,18%)] transition-colors"
                  >
                    Discover More
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </FadeUp>

                {/* Right — image */}
                <FadeUp delay={0.15}>
                  <div className="relative">
                    <img
                      src={capDashboard}
                      alt="Platform dashboard overview"
                      className="w-full aspect-[4/3] object-cover grayscale"
                    />
                    {/* Overlapping small stat card */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
                      <p className="text-3xl font-display font-extralight text-[hsl(207,30%,12%)]">24K</p>
                      <p className="text-[11px] text-[hsl(220,15%,55%)] font-body tracking-[0.1em] uppercase mt-1">Active Shipments</p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ═══ 3-COLUMN TEXT SERVICES ═══ */}
          <section className="py-20 border-t border-[hsl(220,12%,91%)]">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                {services.map((s, i) => (
                  <FadeUp key={s.title} delay={i * 0.1}>
                    <h3 className="text-[15px] font-display font-normal tracking-[0.02em] text-[hsl(207,30%,12%)] mb-4">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-[hsl(220,15%,50%)] font-body font-normal leading-[2]">
                      {s.text}
                    </p>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ FULL-WIDTH DARK PHOTO BANNER ═══ */}
          <section className="relative py-32 md:py-44 overflow-hidden">
            <div className="absolute inset-0">
              <img src={bgCapabilities} alt="" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/70" />
            </div>
            <div className="container relative z-10">
              <FadeUp>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extralight leading-[1.15] tracking-tight text-white max-w-xl">
                  From strategy to delivery, we're here for your business.
                </h2>
              </FadeUp>
            </div>
          </section>

          {/* ═══ INNOVATIVE IDEAS — QUOTE CARDS ═══ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <FadeUp>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-display font-extralight tracking-tight text-[hsl(207,30%,12%)]">
                    Introducing innovative
                    <br />
                    ideas for business
                  </h2>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                {[
                  {
                    quote: "The platform transformed our inbound logistics. We reduced dock wait times by 55% in the first quarter, saving us thousands in carrier detention fees.",
                    name: "Fleet Manager",
                    role: "FMCG",
                    image: avatarDomonkos,
                  },
                  {
                    quote: "A true end-to-end visibility solution. We can now track every shipment in real-time and proactively manage exceptions before they become costly delays.",
                    name: "Supply Chain Director",
                    role: "Automotive",
                    image: avatarForray,
                  },
                ].map((q, i) => (
                  <FadeUp key={i} delay={i * 0.12}>
                    <div className="flex gap-5 items-start">
                      <img
                        src={q.image}
                        alt={q.name}
                        className="w-14 h-14 rounded-full object-cover grayscale shrink-0"
                      />
                      <div>
                        <p className="text-[13px] text-[hsl(220,15%,40%)] font-body font-normal leading-[1.9] mb-4">
                          "{q.quote}"
                        </p>
                        <p className="text-[13px] font-display font-normal text-[hsl(207,30%,12%)]">{q.name}</p>
                        <p className="text-[11px] text-[hsl(220,15%,55%)] font-body">{q.role}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ DARK CHECKLIST SECTION ═══ */}
          <section className="relative py-28 md:py-36 overflow-hidden">
            <div className="absolute inset-0">
              <img src={bgCtaBanner} alt="" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />
            </div>
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div />
                <FadeUp>
                  <div className="space-y-6">
                    {checklistItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white/80" />
                        </div>
                        <span className="text-[14px] text-white/90 font-body font-normal tracking-[0.02em]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* ═══ TEAM SECTION ═══ */}
          <section className="py-24 md:py-32">
            <div className="container">
              <FadeUp>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-display font-extralight tracking-tight text-[hsl(207,30%,12%)]">
                    Meet our team
                    <br />
                    of experts
                  </h2>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 max-w-4xl mx-auto">
                {team.map((member, i) => (
                  <FadeUp key={member.name} delay={i * 0.1}>
                    <div className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-[3/4] object-cover grayscale mb-5"
                      />
                      <p className="text-[14px] font-display font-normal text-[hsl(207,30%,12%)]">{member.name}</p>
                      <p className="text-[11px] text-[hsl(220,15%,55%)] font-body tracking-[0.08em] uppercase mt-1">{member.role}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ LOGO BAR ═══ */}
          <section className="py-14 border-t border-b border-[hsl(220,12%,91%)]">
            <div className="container">
              <div className="flex items-center justify-between gap-8 flex-wrap">
                <FadeUp>
                  <div>
                    <p className="text-[14px] font-display font-extralight text-[hsl(207,30%,12%)] leading-[1.4]">
                      Connecting businesses
                      <br />
                      and ideas for the future
                    </p>
                  </div>
                </FadeUp>
                {logos.map((logo, i) => (
                  <FadeUp key={i} delay={i * 0.05}>
                    <img
                      src={logo}
                      alt="Client logo"
                      className="h-8 md:h-10 opacity-40 grayscale object-contain"
                    />
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ DARK CTA + CONTACT FORM ═══ */}
          <section className="relative py-28 md:py-36 overflow-hidden">
            <div className="absolute inset-0">
              <img src={featuresDock} alt="" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/80" />
            </div>
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left text */}
                <FadeUp>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extralight leading-[1.15] tracking-tight text-white">
                    Let us help you
                    <br />
                    create a lasting new
                    <br />
                    image for your
                    <br />
                    brand
                  </h2>
                </FadeUp>

                {/* Right form */}
                <FadeUp delay={0.15}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 md:p-10">
                    <p className="text-[11px] font-display font-light tracking-[0.3em] uppercase text-white/60 mb-8">
                      Connect With Us
                    </p>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-[13px] text-white/90 font-body placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-[13px] text-white/90 font-body placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                      />
                      <textarea
                        placeholder="Message"
                        rows={3}
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-[13px] text-white/90 font-body placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[hsl(207,30%,12%)] text-[13px] font-body font-normal hover:bg-white/90 transition-colors mt-4"
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
