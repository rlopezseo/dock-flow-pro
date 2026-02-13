import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { CalendarClock, Users, ScanLine, Plug, BarChart3, Check } from "lucide-react";
import bgCapabilities from "@/assets/bg-capabilities.jpg";

const groups = [
  {
    id: "appointments",
    icon: CalendarClock,
    title: "Appointment & Capacity Rules",
    features: [
      "Define time slots per dock door, load type, and direction",
      "Set maximum concurrent appointments and enforce buffer times",
      "Block-out periods for maintenance, shifts, or special operations",
      "Multi-site support with location-specific capacity rules",
    ],
  },
  {
    id: "carrier",
    icon: Users,
    title: "Carrier Self-Service Portal",
    features: [
      "24/7 online booking — no phone calls or emails required",
      "Carriers can reschedule, cancel, and view appointment history",
      "Automated confirmation emails and SMS reminders",
      "Multi-language support for international carrier networks",
    ],
  },
  {
    id: "checkin",
    icon: ScanLine,
    title: "Check-In/Out & Visibility",
    features: [
      "Digital gate check-in with driver ID and document capture",
      "Real-time dock status board: available, occupied, delayed",
      "Automated timestamp logging for compliance and audit trails",
      "Yard visibility — know exactly where every truck is, always",
    ],
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Integrations — WMS, TMS, ERP",
    features: [
      "API-first architecture for seamless WMS and TMS connectivity",
      "EDI support for legacy ERP systems (SAP, Oracle, JDE)",
      "GPS and telematics integration for live ETA updates",
      "Webhook notifications for event-driven workflows",
    ],
  },
  {
    id: "reporting",
    icon: BarChart3,
    title: "Reporting & Analytics",
    features: [
      "Wait time dashboards: average dwell, peak hours, bottlenecks",
      "Dock utilization heatmaps by day, shift, and door",
      "Carrier adherence scorecards and on-time performance",
      "Exportable reports for operational reviews and KPI tracking",
    ],
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeGroup, setActiveGroup] = useState("appointments");

  const active = groups.find((g) => g.id === activeGroup) || groups[0];

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      {/* Header */}
      <div className="container relative z-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            Key Capabilities
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Dock door scheduling capabilities built for every operation
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
          <div className="relative w-full h-[520px] md:h-[560px] overflow-hidden">
            <motion.img
              src={bgCapabilities}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207,60%,10%)]/90 via-[hsl(207,60%,10%)]/70 to-[hsl(207,60%,10%)]/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-xl">
                  <motion.div
                    key={active.id + "-content"}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                  >
                    {/* Active capability badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-body tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                      <active.icon className="w-3.5 h-3.5" />
                      {active.title}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-8 leading-snug">
                      {active.title}
                    </h3>

                    <div className="space-y-4">
                      {active.features.map((feat, i) => (
                        <motion.div
                          key={feat}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.06 * i + 0.15 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white/80" />
                          </div>
                          <span className="text-[13px] md:text-sm font-body font-normal text-white/85 leading-relaxed">{feat}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs overlapping bottom */}
          <div className="relative z-10 -mt-7">
            <div className="container">
              <div className="flex flex-wrap justify-center gap-2">
                {groups.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setActiveGroup(g.id)}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-body font-normal transition-all duration-400 shadow-lg ${
                      activeGroup === g.id
                        ? "bg-primary text-primary-foreground shadow-primary/25"
                        : "bg-card text-foreground hover:shadow-xl"
                    }`}
                  >
                    <g.icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{g.title}</span>
                    <span className="sm:hidden">{g.title.split(" ")[0]}</span>
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

export default CapabilitiesSection;
