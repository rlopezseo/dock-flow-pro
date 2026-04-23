import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes, Eye, CalendarClock, Shuffle, Sparkles, Plug, BarChart3, ChevronRight
} from "lucide-react";

import imgCapacity from "@/assets/modules/pillar-capacity.png";
import imgVisibility from "@/assets/modules/pillar-visibility.png";
import imgSchedule from "@/assets/modules/pillar-schedule.png";

type ModuleItem = {
  icon: typeof Boxes;
  title: string;
  desc: string;
  href: string;
  pillar: "capacity" | "visibility" | "schedule";
};

const modules: ModuleItem[] = [
  {
    icon: Boxes,
    title: "Freight Allocation",
    desc: "Freight management & load distribution system",
    href: "/freight-management-software-for-shippers",
    pillar: "capacity",
  },
  {
    icon: Shuffle,
    title: "Freight & Truck Matching",
    desc: "Capacity utilisation & backhaul optimisation",
    href: "/freight-management-software-for-shippers",
    pillar: "capacity",
  },
  {
    icon: Sparkles,
    title: "AI Freight Processing",
    desc: "AI dispatcher & intelligent RFQ automation",
    href: "/freight-visibility-software-for-brokers",
    pillar: "capacity",
  },
  {
    icon: Eye,
    title: "Real-time Cargo Tracking",
    desc: "Live freight visibility from gate to delivery",
    href: "/freight-management-software-for-shippers",
    pillar: "visibility",
  },
  {
    icon: BarChart3,
    title: "Freight Analytics",
    desc: "Dashboards, control tower & reporting",
    href: "/freight-management-software-for-shippers",
    pillar: "visibility",
  },
  {
    icon: Plug,
    title: "EDI / API Integrations",
    desc: "Bidirectional with SAP TM, Oracle OTM & ERPs",
    href: "/freight-management-software-for-shippers",
    pillar: "visibility",
  },
  {
    icon: CalendarClock,
    title: "Time Slot Management",
    desc: "Dock scheduling & yard management",
    href: "/dock-scheduling-software-for-distribution-centers",
    pillar: "schedule",
  },
];

const pillars = [
  {
    key: "capacity" as const,
    label: "Capacity",
    image: imgCapacity,
    title: "Capacity",
    desc: "Allocate freight, match capacity and let AI process loads at scale.",
    href: "/freight-management-software-for-shippers",
  },
  {
    key: "visibility" as const,
    label: "Visibility",
    image: imgVisibility,
    title: "Visibility",
    desc: "Track every load in real time and connect data across systems.",
    href: "/freight-management-software-for-shippers",
  },
  {
    key: "schedule" as const,
    label: "Schedule",
    image: imgSchedule,
    title: "Schedule",
    desc: "Coordinate gates, docks and yard operations with precision.",
    href: "/dock-scheduling-software-for-distribution-centers",
  },
];

const ModulesPanel = () => {
  const [activePillar, setActivePillar] = useState<"capacity" | "visibility" | "schedule">("capacity");
  const current = pillars.find((p) => p.key === activePillar)!;
  const filtered = modules.filter((m) => m.pillar === activePillar);

  return (
    <div className="grid grid-cols-5 min-h-[380px]">
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
              className={`relative px-3 py-2 text-[12px] font-body transition-colors duration-200 ${
                activePillar === p.key
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {p.label}
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

        {/* Module list filtered by pillar */}
        <div className="flex-1 space-y-0.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="space-y-0.5"
            >
              {filtered.map((m) => (
                <a
                  key={m.title}
                  href={m.href}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[hsl(220,15%,95%)] transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                    <m.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-display font-normal text-[hsl(207,30%,12%)] group-hover:text-primary transition-colors duration-200">
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
      </div>

      {/* Right: Pillar preview */}
      <div className="col-span-2 bg-white p-6 flex flex-col border-l border-gray-100">
        <div className="rounded-xl overflow-hidden flex-1 mb-4 bg-white flex items-center justify-center p-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
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
        <div>
          <p className="text-sm font-display font-normal text-[hsl(207,30%,12%)] mb-1.5">
            {current.title}
          </p>
          <p className="text-[11px] text-[hsl(207,15%,50%)] font-body leading-relaxed mb-4">
            {current.desc}
          </p>
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
