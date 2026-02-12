import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, Check, ArrowRight } from "lucide-react";

import img3pl from "@/assets/usecase-3pl.jpg";
import imgManufacturing from "@/assets/usecase-manufacturing.jpg";
import imgRetail from "@/assets/usecase-retail.jpg";
import imgColdchain from "@/assets/usecase-coldchain.jpg";
import imgInbound from "@/assets/usecase-inbound.jpg";

const useCases = [
  {
    id: "3pl",
    icon: Package,
    label: "3PL & Logistics",
    image: img3pl,
    headline: "Dock scheduling for third-party logistics providers",
    description: "Manage multi-client dock schedules across warehouses. Give each customer visibility into their own appointments while maintaining full control over shared dock capacity.",
    benefits: ["Multi-tenant scheduling", "Client-specific capacity rules", "Shared dock optimization", "White-label carrier portal"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    label: "Manufacturing",
    image: imgManufacturing,
    headline: "Warehouse dock scheduling for production facilities",
    description: "Synchronize inbound raw material deliveries with production schedules. Eliminate the bottleneck between receiving docks and the factory floor.",
    benefits: ["Production-synced scheduling", "Just-in-time delivery coordination", "Supplier self-service booking", "Line-side delivery tracking"],
  },
  {
    id: "retail",
    icon: ShoppingCart,
    label: "Retail Distribution",
    image: imgRetail,
    headline: "Loading dock appointment scheduling for retail DCs",
    description: "Handle high-volume inbound receiving with tight appointment windows. Ensure store replenishment flows smoothly from dock to distribution.",
    benefits: ["High-volume appointment management", "Vendor compliance tracking", "Cross-dock coordination", "Peak season capacity planning"],
  },
  {
    id: "coldchain",
    icon: Snowflake,
    label: "Cold Chain",
    image: imgColdchain,
    headline: "Temperature-controlled dock door scheduling",
    description: "Minimize exposure time for temperature-sensitive goods with precision dock scheduling. Every minute at the dock matters when cold chain integrity is at stake.",
    benefits: ["Minimized dock exposure time", "Temperature zone scheduling", "Priority lane management", "Compliance documentation"],
  },
  {
    id: "inbound-outbound",
    icon: ArrowDownUp,
    label: "Inbound & Outbound",
    image: imgInbound,
    headline: "Manage inbound and outbound dock operations",
    description: "Whether you're receiving or shipping, the same platform handles both flows. Set independent rules, capacity limits, and KPIs for each direction.",
    benefits: ["Separate inbound/outbound rules", "Direction-specific KPIs", "Unified dock visibility", "Balanced yard flow"],
  },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCase, setActiveCase] = useState("3pl");

  const active = useCases.find((u) => u.id === activeCase) || useCases[0];

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      {/* Header inside container */}
      <div className="container relative z-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Yard management and dock scheduling for every industry
          </h2>
        </motion.div>
      </div>

      {/* Full-width immersive block */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full"
        >
          {/* Full-bleed background image */}
          <div className="relative w-full h-[520px] md:h-[580px] overflow-hidden">
            <motion.img
              key={active.image}
              src={active.image}
              alt={active.label}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207,60%,12%)]/85 via-[hsl(207,60%,12%)]/60 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(207,60%,12%)]/40 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-xl">
                  <motion.div
                    key={active.id + "-content"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {/* Industry badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-body tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                      <active.icon className="w-3.5 h-3.5" />
                      {active.label}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-display font-light text-white mb-4 leading-snug">
                      {active.headline}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 font-body font-normal leading-relaxed mb-8 max-w-md">
                      {active.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {active.benefits.map((b, i) => (
                        <motion.div
                          key={b}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.06 * i + 0.2 }}
                          className="flex items-center gap-2.5"
                        >
                          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white/80" />
                          </div>
                          <span className="text-[12px] md:text-[13px] font-body font-normal text-white/90">{b}</span>
                        </motion.div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-body font-normal px-6 py-3 rounded-full transition-all duration-300 tracking-wide"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs bar at bottom, overlapping image */}
          <div className="relative z-10 -mt-8">
            <div className="container">
              <div className="flex flex-wrap justify-center gap-2">
                {useCases.map((uc) => (
                  <button
                    key={uc.id}
                    onClick={() => setActiveCase(uc.id)}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-body font-normal transition-all duration-400 shadow-lg ${
                      activeCase === uc.id
                        ? "bg-primary text-primary-foreground shadow-primary/25"
                        : "bg-card text-foreground hover:shadow-xl"
                    }`}
                  >
                    <uc.icon className="w-3.5 h-3.5" />
                    {uc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default UseCasesSection;
