import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Package, Factory, ShoppingCart, Snowflake, ArrowDownUp } from "lucide-react";

const useCases = [
  {
    id: "3pl",
    icon: Package,
    label: "3PL & Logistics",
    headline: "Dock scheduling for third-party logistics providers",
    description: "Manage multi-client dock schedules across warehouses. Give each customer visibility into their own appointments while maintaining full control over shared dock capacity.",
    benefits: ["Multi-tenant scheduling", "Client-specific capacity rules", "Shared dock optimization", "White-label carrier portal"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    label: "Manufacturing",
    headline: "Warehouse dock scheduling for production facilities",
    description: "Synchronize inbound raw material deliveries with production schedules. Eliminate the bottleneck between receiving docks and the factory floor.",
    benefits: ["Production-synced scheduling", "Just-in-time delivery coordination", "Supplier self-service booking", "Line-side delivery tracking"],
  },
  {
    id: "retail",
    icon: ShoppingCart,
    label: "Retail Distribution",
    headline: "Loading dock appointment scheduling for retail DCs",
    description: "Handle high-volume inbound receiving with tight appointment windows. Ensure store replenishment flows smoothly from dock to distribution.",
    benefits: ["High-volume appointment management", "Vendor compliance tracking", "Cross-dock coordination", "Peak season capacity planning"],
  },
  {
    id: "coldchain",
    icon: Snowflake,
    label: "Cold Chain",
    headline: "Temperature-controlled dock door scheduling",
    description: "Minimize exposure time for temperature-sensitive goods with precision dock scheduling. Every minute at the dock matters when cold chain integrity is at stake.",
    benefits: ["Minimized dock exposure time", "Temperature zone scheduling", "Priority lane management", "Compliance documentation"],
  },
  {
    id: "inbound-outbound",
    icon: ArrowDownUp,
    label: "Inbound & Outbound",
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
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Yard management and dock scheduling for every industry
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveCase(uc.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-body font-normal transition-all duration-400 ${
                activeCase === uc.id
                  ? "bg-gradient-to-r from-primary to-[hsl(207,50%,35%)] text-primary-foreground shadow-lg shadow-primary/15"
                  : "bg-card card-elevated text-foreground"
              }`}
            >
              <uc.icon className="w-3.5 h-3.5" />
              {uc.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto bg-card rounded-xl p-8 md:p-10 card-elevated"
        >
          <h3 className="text-lg font-display font-light text-foreground mb-3">{active.headline}</h3>
          <p className="text-sm text-muted-foreground font-body font-normal leading-relaxed mb-8 max-w-2xl">{active.description}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {active.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/8">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[hsl(207,60%,45%)] shrink-0" />
                <span className="text-xs font-body font-normal text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
