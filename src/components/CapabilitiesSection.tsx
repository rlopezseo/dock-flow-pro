import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { CalendarClock, Users, ScanLine, Plug, BarChart3, Check } from "lucide-react";
import bgCapabilities from "@/assets/bg-capabilities.jpg";
import capTracking from "@/assets/cap-tracking.jpg";
import capDashboard from "@/assets/cap-dashboard.jpg";
import capFleet from "@/assets/cap-fleet.jpg";
import capIntegrations from "@/assets/cap-integrations.jpg";
import capNetwork from "@/assets/cap-network.jpg";

const capImages = [capTracking, capDashboard, capFleet, capIntegrations, capNetwork];

const groups = [
  {
    id: "appointments",
    icon: CalendarClock,
    title: "Appointment & Capacity Rules",
    subtitle: "Full control over every dock door",
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
    subtitle: "Zero friction for your carriers",
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
    subtitle: "Real-time operational awareness",
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
    subtitle: "Connects to your existing stack",
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
    subtitle: "Data-driven dock optimization",
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeGroup, setActiveGroup] = useState("appointments");

  const active = groups.find((g) => g.id === activeGroup) || groups[0];

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgCapabilities} alt="" className="w-full h-full object-cover opacity-[0.04]" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-4">
            Key Capabilities
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Dock door scheduling capabilities built for every operation
          </h2>
        </motion.div>

        {/* Icon row — clickable capability cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {groups.map((g, i) => (
            <motion.button
              key={g.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              onClick={() => setActiveGroup(g.id)}
              className={`relative rounded-xl p-5 text-center transition-all duration-400 group ${
                activeGroup === g.id
                  ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                  : "bg-card card-elevated text-foreground hover:shadow-lg hover:-translate-y-0.5"
              }`}
            >
              <g.icon className={`w-7 h-7 mx-auto mb-3 ${activeGroup === g.id ? "text-white" : "text-primary"}`} />
              <span className="block text-[11px] md:text-xs font-body font-normal leading-tight">
                {g.title.length > 25 ? g.title.split(" — ")[0] : g.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="bg-card rounded-2xl overflow-hidden shadow-[0_4px_24px_hsl(220_20%_50%/0.08),0_16px_48px_hsl(220_20%_50%/0.05)]"
          >
            <div className="grid md:grid-cols-2">
              {/* Left: visual info panel */}
              <div className="relative p-10 md:p-12 flex flex-col justify-center overflow-hidden">
                <img src={capImages[groups.indexOf(active) % capImages.length]} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(207,60%,28%)]/85 to-[hsl(207,45%,18%)]/90" />
                <div className="relative z-10">
                  <active.icon className="w-10 h-10 text-white/50 mb-6" />
                  <h3 className="text-2xl md:text-3xl font-display font-light text-white mb-3 leading-snug">
                    {active.title}
                  </h3>
                  <p className="text-sm text-white/60 font-body font-normal">
                    {active.subtitle}
                  </p>
                </div>
              </div>

              {/* Right: feature list */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-5">
                  {active.features.map((feat, i) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.07 * i + 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-body font-normal leading-relaxed">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
