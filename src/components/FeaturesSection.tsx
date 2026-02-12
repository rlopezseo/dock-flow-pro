import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GripVertical, Users, MonitorDot, Bell, MapPin, BarChart3 } from "lucide-react";

const features = [
  {
    icon: GripVertical,
    title: "Drag-and-Drop Time Slot Management",
    description: "Build your dock schedule in minutes, not hours. Set slot durations by load type, commodity, or carrier tier. Drag to reschedule. Click to reassign doors. The schedule updates for your whole team and every carrier in real time. Double-bookings become physically impossible.",
  },
  {
    icon: Users,
    title: "Carrier Self-Service Booking Portal",
    description: "Your carriers get a branded portal with your logo, your rules, and your available slots. They book. They get confirmed. Automatically. No email chains. No phone tag. No \"can you check if Wednesday at 10 works.\" Carrier adoption rate across our customers: 94% in 2 weeks.",
  },
  {
    icon: MonitorDot,
    title: "Real-Time Dock Door Visibility",
    description: "One screen. Every door. Color-coded by status — open, occupied, running late, next up. Know what's happening at every dock position without walking the floor. See what's coming in the next hour, the next shift, the next day.",
  },
  {
    icon: Bell,
    title: "Automated Driver Notifications",
    description: "SMS and email confirmations on booking. Reminders 24 hours before arrival. Check-in alerts when the truck hits your geofence. Late warnings when they're off-track. No-show flags when they don't appear. Your team reacts to data, not surprises.",
  },
  {
    icon: MapPin,
    title: "Yard & Gate Management",
    description: "Track every truck from gate check-in to dock door assignment to departure. See your entire yard in real time on a visual map. Assign parking spots, manage queues, log timestamps. No more windshield walks. No more walkie-talkie chaos.",
  },
  {
    icon: BarChart3,
    title: "Dock Utilization Analytics",
    description: "Utilization by door, by day, by hour. Carrier on-time rates. Average dwell and turnaround times. Bottleneck identification. Exportable reports. Automated weekly summaries. The data your ops team needs to optimize — and your leadership needs to see.",
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-28 md:py-36 bg-[#FAFBFC]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] leading-[1.12] tracking-[-0.02em]">
            Loading Dock Management Features
            <br className="hidden md:block" />
            That Actually Get Used
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[40%_60%] gap-8">
          {/* Tabs */}
          <div className="space-y-1">
            {features.map((feat, i) => (
              <button
                key={feat.title}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 border-l-[3px] transition-all duration-200 ${
                  active === i
                    ? "bg-white border-l-[#2563EB] rounded-r-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                    : "border-l-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <feat.icon className={`w-4 h-4 ${active === i ? "text-[#2563EB]" : "text-[#94A3B8]"}`} />
                  <span className={`text-[15px] ${active === i ? "font-bold text-[#0F172A]" : "font-semibold text-[#64748B]"}`}>
                    {feat.title}
                  </span>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-[#64748B] leading-relaxed mt-2 md:hidden"
                    >
                      {feat.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Visual */}
          <div className="hidden md:flex flex-col">
            <div className="rounded-2xl border border-[#E2E8F0] shadow-[0_16px_48px_rgba(0,0,0,0.08)] bg-white p-8 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {(() => { const Icon = features[active].icon; return <Icon className="w-6 h-6 text-[#2563EB]" />; })()}
                    <h3 className="text-xl font-bold text-[#0F172A]">{features[active].title}</h3>
                  </div>
                  <p className="text-[15px] text-[#64748B] leading-[1.7]">{features[active].description}</p>
                  <div className="mt-8 rounded-xl bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] border border-[#E2E8F0] aspect-video flex items-center justify-center">
                    <p className="text-sm text-[#94A3B8]">Feature screenshot placeholder</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
