import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const industries = [
  {
    tab: "Food & Beverage",
    content: [
      "Temperature-sensitive loads can't sit in your yard. A reefer waiting 90 minutes isn't just a scheduling failure — it's a food safety risk and a compliance violation.",
      "TrucksOnTheMap ensures cold chain shipments hit the dock within their receiving window. FIFO compliance starts with arrival sequence. We make sure the sequence is right.",
    ],
    capabilities: [
      "Priority scheduling for temp-controlled loads",
      "Receiving window enforcement with alerts",
      "Timestamped dock logs for FSMA traceability",
    ],
  },
  {
    tab: "Retail & eCommerce",
    content: [
      "Peak season doesn't care about your dock capacity. When 200 trucks need to deliver in 3 days, the difference between on-shelf and late-to-shelf is dock scheduling.",
      "TrucksOnTheMap lets you pre-schedule peak volume weeks in advance and enforce arrival windows that keep your DC flowing when every hour of delay costs revenue.",
    ],
    capabilities: [
      "Peak season pre-scheduling at scale",
      "Volume-based slot allocation",
      "Priority lanes for replenishment vs. new inventory",
    ],
  },
  {
    tab: "Manufacturing",
    content: [
      "JIT doesn't work when raw materials arrive whenever the carrier feels like it. A 2-hour delay on one inbound truck doesn't just slow one order — it stops the production line.",
      "TrucksOnTheMap syncs your dock schedule with your production calendar so materials arrive when the floor needs them. Not before. Not after. On time.",
    ],
    capabilities: [
      "Production-synced dock scheduling",
      "Supplier arrival enforcement",
      "Line-down risk alerts on late inbounds",
    ],
  },
  {
    tab: "3PL & Logistics",
    content: [
      "Multi-client. Multi-facility. Multi-carrier. And every one of them thinks their freight is the priority.",
      "TrucksOnTheMap gives you client-separated scheduling across every site from one dashboard. Each client sees only their appointments. You see everything. Bill dock time accurately. Report utilization by client. Scale without adding coordinators.",
    ],
    capabilities: [
      "Client-separated views and permissions",
      "Multi-facility scheduling from one dashboard",
      "Per-client dock utilization reporting",
    ],
  },
];

const IndustryTabs = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] leading-[1.12] tracking-[-0.02em]">
            Dock Scheduling Software Built for Your Operation
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <button
              key={ind.tab}
              onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-[#0F172A] text-white font-semibold"
                  : "border-[1.5px] border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1] hover:text-[#0F172A]"
              }`}
            >
              {ind.tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] border border-[#E2E8F0] aspect-[4/3] flex items-center justify-center">
            <p className="text-sm text-[#94A3B8]">{industries[active].tab} illustration</p>
          </div>

          <div>
            {industries[active].content.map((p, i) => (
              <p key={i} className="text-base text-[#64748B] leading-[1.7] mb-4">{p}</p>
            ))}

            <p className="text-sm font-bold text-[#0F172A] mt-6 mb-3">Key capabilities:</p>
            <ul className="space-y-2">
              {industries[active].capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-sm font-medium text-[#0F172A]">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTabs;
