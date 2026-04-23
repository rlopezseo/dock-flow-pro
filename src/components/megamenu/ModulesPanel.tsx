import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes, Eye, CalendarClock, Shuffle, ChevronRight,
  Map, Activity, DollarSign, Users, LineChart, Upload,
  Radio, Clock, Bell, FileCheck, Smartphone, AlertTriangle,
  CalendarCheck, Layers, PackageCheck, Globe2, RefreshCw,
  Sparkles, Repeat, Wrench, Gauge,
} from "lucide-react";

import imgCapacity from "@/assets/modules/pillar-capacity.png";
import imgVisibility from "@/assets/modules/pillar-visibility.png";
import imgSchedule from "@/assets/modules/pillar-schedule.png";

type PillarKey = "capacity" | "visibility" | "schedule" | "match";

type SubModule = {
  icon: typeof Boxes;
  title: string;
  desc: string;
};

type Pillar = {
  key: PillarKey;
  label: string;
  badge?: string;
  image: string;
  title: string;
  desc: string;
  href: string;
  modules: SubModule[];
  stats: { value: string; label: string }[];
  footnote: string;
};

const pillars: Pillar[] = [
  {
    key: "capacity",
    label: "Capacity",
    image: imgCapacity,
    title: "Capacity",
    desc: "Forecast availability, secure quotes and access trusted carrier networks.",
    href: "/freight-management-software-for-shippers",
    modules: [
      { icon: Activity, title: "Availability Forecast", desc: "Predict capacity windows" },
      { icon: Map, title: "Future-Day Map", desc: "Tomorrow's truck positions" },
      { icon: DollarSign, title: "Spot Quote Engine", desc: "Instant market pricing" },
      { icon: Users, title: "Trusted Carrier Network", desc: "Vetted European partners" },
      { icon: LineChart, title: "PriceIndex 90-day", desc: "Lane benchmark trends" },
      { icon: Upload, title: "MassUpload", desc: "Bulk freight onboarding" },
    ],
    stats: [
      { value: "12k+", label: "Carriers" },
      { value: "32", label: "Countries" },
      { value: "90d", label: "Forecast" },
    ],
    footnote: "Connected to SAP TM, Oracle OTM and major European TMS.",
  },
  {
    key: "visibility",
    label: "TrucksVisibility",
    image: imgVisibility,
    title: "TrucksVisibility",
    desc: "Track every load in real time across carriers, devices and corridors.",
    href: "/freight-management-software-for-shippers",
    modules: [
      { icon: Radio, title: "Live Multi-Carrier Tracking", desc: "Unified GPS feed" },
      { icon: Clock, title: "Predictive ETA", desc: "AI arrival forecasts" },
      { icon: Bell, title: "Customer Notifications", desc: "Auto status updates" },
      { icon: FileCheck, title: "ePOD / Proof of Delivery", desc: "Digital receipts" },
      { icon: Smartphone, title: "Driver App", desc: "On-route mobile companion" },
      { icon: AlertTriangle, title: "Exception Alerts", desc: "Delays & incident triggers" },
    ],
    stats: [
      { value: "98%", label: "Track rate" },
      { value: "30s", label: "Refresh" },
      { value: "200+", label: "Telematics" },
    ],
    footnote: "ISO 27001 compliant. GDPR ready. Trusted by Tier-1 shippers.",
  },
  {
    key: "schedule",
    label: "TrucksSlot",
    image: imgSchedule,
    title: "TrucksSlot",
    desc: "Coordinate gates, docks and yard with precision booking.",
    href: "/dock-scheduling-software-for-distribution-centers",
    modules: [
      { icon: CalendarCheck, title: "Dock Scheduler", desc: "Smart appointment booking" },
      { icon: Eye, title: "Yard Helicopter View", desc: "Live yard occupancy" },
      { icon: Layers, title: "Dynamic Loading Plan", desc: "Optimised dock sequencing" },
      { icon: PackageCheck, title: "Carrier Self-Booking", desc: "Driver-side reservations" },
      { icon: RefreshCw, title: "Real-time Status Updates", desc: "Live ops sync" },
      { icon: Globe2, title: "Any-Device Access", desc: "Mobile, tablet & desktop" },
    ],
    stats: [
      { value: "-42%", label: "Wait time" },
      { value: "24/7", label: "Self-service" },
      { value: "5min", label: "Setup" },
    ],
    footnote: "Designed for distribution centers, plants and cross-docks.",
  },
  {
    key: "match",
    label: "TrucksMatch",
    badge: "NEW",
    image: imgCapacity,
    title: "TrucksMatch",
    desc: "Match carriers to return loads and unlock revenue per truck.",
    href: "/fleet-visibility-software-for-carriers",
    modules: [
      { icon: Sparkles, title: "Smart Job Matching", desc: "AI-driven freight pairing" },
      { icon: Repeat, title: "Return Load Optimization", desc: "Cut empty backhauls" },
      { icon: Wrench, title: "Free Carrier TMS", desc: "Zero-cost dispatch suite" },
      { icon: Smartphone, title: "Driver App (free)", desc: "Mobile execution layer" },
      { icon: Gauge, title: "Revenue-per-Truck Dashboard", desc: "Fleet profitability KPIs" },
      { icon: LineChart, title: "90-day PriceIndex", desc: "Spot market benchmark" },
    ],
    stats: [
      { value: "+18%", label: "Revenue/truck" },
      { value: "-27%", label: "Empty miles" },
      { value: "Free", label: "For carriers" },
    ],
    footnote: "Built for carriers and brokers across European corridors.",
  },
];

const ModulesPanel = () => {
  const [activePillar, setActivePillar] = useState<PillarKey>("capacity");
  const current = pillars.find((p) => p.key === activePillar)!;

  return (
    <div className="grid grid-cols-5 min-h-[420px]">
      {/* Left: Tabs + module list */}
      <div className="col-span-3 p-6 flex flex-col">
        <p className="text-[10px] font-body font-normal tracking-[0.2em] uppercase text-gray-400 mb-3 px-3">
          Modules
        </p>

        {/* Pillar tabs */}
        <div className="flex items-center gap-1 px-3 mb-4 border-b border-gray-100">
          {pillars.map((p) => (
            <button
              key={p.key}
              onMouseEnter={() => setActivePillar(p.key)}
              onClick={() => setActivePillar(p.key)}
              className={`relative px-2.5 py-2 text-[12px] font-body transition-colors duration-200 flex items-center gap-1.5 ${
                activePillar === p.key
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {p.label}
              {p.badge && (
                <span className="text-[8px] font-body tracking-[0.1em] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {p.badge}
                </span>
              )}
              {activePillar === p.key && (
                <motion.div
                  layoutId="modules-tab-underline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Module list filtered by pillar — 2 column grid */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-2 gap-x-2 gap-y-1"
            >
              {current.modules.map((m) => (
                <a
                  key={m.title}
                  href={current.href}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[hsl(220,15%,95%)] transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200 mt-0.5">
                    <m.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-display font-normal text-[hsl(207,30%,12%)] group-hover:text-primary transition-colors duration-200 leading-tight">
                      {m.title}
                    </p>
                    <p className="text-[11px] text-[hsl(207,15%,55%)] font-body leading-snug mt-0.5">
                      {m.desc}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footnote bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`fn-${activePillar}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 pt-3 border-t border-gray-100 px-3"
          >
            <p className="text-[10px] font-body text-[hsl(207,15%,50%)] leading-relaxed">
              {current.footnote}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Pillar preview */}
      <div className="col-span-2 bg-white p-6 flex flex-col border-l border-gray-100">
        <div className="rounded-xl overflow-hidden mb-4 bg-white flex items-center justify-center p-3 h-[140px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image + current.key}
              src={current.image}
              alt={current.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <p className="text-sm font-display font-normal text-[hsl(207,30%,12%)]">
              {current.title}
            </p>
            {current.badge && (
              <span className="text-[8px] font-body tracking-[0.1em] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                {current.badge}
              </span>
            )}
          </div>
          <p className="text-[11px] text-[hsl(207,15%,50%)] font-body leading-relaxed mb-4">
            {current.desc}
          </p>

          {/* Stats row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${activePillar}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-gray-100"
            >
              {current.stats.map((s) => (
                <div key={s.label} className="text-left">
                  <p className="text-[15px] font-display font-normal text-primary leading-none">
                    {s.value}
                  </p>
                  <p className="text-[9px] font-body tracking-[0.05em] uppercase text-[hsl(207,15%,55%)] mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <a
          href={current.href}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-primary-foreground text-[11px] font-body rounded-full hover:bg-primary/90 transition-colors w-fit"
        >
          Explore {current.label} <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default ModulesPanel;
