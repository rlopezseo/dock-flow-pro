import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Package, Factory, ShoppingCart, Snowflake, ArrowDownUp, Check } from "lucide-react";

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
    <section className="relative py-28 bg-section-warm overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Yard management and dock scheduling for every industry
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveCase(uc.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-body font-normal transition-all duration-400 ${
                activeCase === uc.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                  : "bg-card card-elevated text-foreground hover:shadow-md"
              }`}
            >
              <uc.icon className="w-3.5 h-3.5" />
              {uc.label}
            </button>
          ))}
        </div>

        {/* Content: image left + text right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden card-elevated"
          >
            {/* Image */}
            <div className="relative h-64 md:h-auto md:min-h-[380px] overflow-hidden">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(0,0%,100%)]/10" />
              {/* Industry badge */}
              <div className="absolute top-5 left-5 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-body tracking-[0.15em] uppercase px-4 py-2 rounded-full flex items-center gap-2">
                <active.icon className="w-3 h-3" />
                {active.label}
              </div>
            </div>

            {/* Text content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-display font-light text-foreground mb-4 leading-snug">
                {active.headline}
              </h3>
              <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed mb-8">
                {active.description}
              </p>

              <div className="space-y-3">
                {active.benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 * i }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs font-body font-normal text-foreground">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCasesSection;
