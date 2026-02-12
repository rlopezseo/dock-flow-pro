import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CalendarClock, Users, ScanLine, Plug, BarChart3, ChevronRight } from "lucide-react";

const groups = [
  {
    id: "appointments",
    icon: CalendarClock,
    title: "Appointment & Capacity Rules",
    features: [
      "Define time slots per dock door, load type, and direction (inbound/outbound)",
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
    <section className="relative py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <div className="accent-line w-12 mb-6" />
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Key Capabilities
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Dock door scheduling capabilities built for every operation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-5">
          {/* Tab nav */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left text-sm font-body font-normal transition-all duration-400 shrink-0 ${
                  activeGroup === g.id
                    ? "bg-gradient-to-r from-primary to-[hsl(207,50%,35%)] text-primary-foreground shadow-lg shadow-primary/15"
                    : "bg-card card-elevated text-foreground hover:shadow-lg"
                }`}
              >
                <g.icon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap text-[13px]">{g.title}</span>
                {activeGroup === g.id && <ChevronRight className="w-3.5 h-3.5 ml-auto shrink-0" />}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-xl p-8 md:p-10 card-elevated"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <active.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-light text-foreground">{active.title}</h3>
            </div>
            <ul className="space-y-5">
              {active.features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 * i }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-[hsl(207,60%,45%)] shrink-0" />
                  <span className="text-sm text-muted-foreground font-body font-normal leading-relaxed">{feat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
