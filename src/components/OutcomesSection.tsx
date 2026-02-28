import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, BarChart3, UserCheck, Users, Truck, CalendarCheck, ArrowUpRight } from "lucide-react";
import bgOutcomes from "@/assets/bg-outcomes.jpg";

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);
  return <>{display}{suffix}</>;
};

const OutcomesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={bgOutcomes} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(210,20%,97%)]/88" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="accent-line w-12 mb-6" />
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            What You Get
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            How TrucksOnTheMap reduces truck wait times and maximizes dock utilization
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">

          {/* HERO CARD — Reduce Wait Times (spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-gradient-to-br from-[hsl(207,60%,28%)] to-[hsl(207,45%,22%)] rounded-2xl p-8 md:p-10 relative overflow-hidden group"
          >
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -right-8 -bottom-20 w-48 h-48 rounded-full bg-white/3" />

            <div className="relative z-10">
              <Clock className="w-7 h-7 text-white/60 mb-6" />
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl md:text-7xl font-display font-light text-white leading-none">
                  <Counter target={60} suffix="%" inView={inView} />
                </span>
                <span className="text-sm font-body font-normal text-white/50 mb-2">less dwell time</span>
              </div>
              <h3 className="text-lg md:text-xl font-display font-light text-white mb-3">
                Cut carrier dwell time with automated time slot management
              </h3>
              <p className="text-sm text-white/60 font-body font-normal leading-relaxed max-w-md">
                TrucksOnTheMap staggers arrivals, enforces buffer times, and assigns docks intelligently to bring average wait down from 2+ hours to under 50 minutes.
              </p>
            </div>
          </motion.div>

          {/* Dock Utilization (spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-5 bg-card rounded-2xl p-8 card-elevated transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <BarChart3 className="w-6 h-6 text-primary/40 mb-5" />
            <div className="flex items-end gap-2 mb-3">
              <span className="text-5xl font-display font-light number-accent leading-none">
                <Counter target={85} suffix="%+" inView={inView} />
              </span>
            </div>
            <h3 className="text-[13px] font-display font-normal text-foreground mb-2">Keep dock doors busy</h3>
            <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">
              Fill idle gaps and use every loading bay. Push utilization above 85% by removing scheduling blind spots.
            </p>
          </motion.div>

          {/* No-Shows (spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="md:col-span-4 bg-card rounded-2xl p-7 card-elevated transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <UserCheck className="w-6 h-6 text-primary/40 mb-4" />
            <span className="block text-4xl font-display font-light number-accent leading-none mb-2">
              <Counter target={0} suffix="%" inView={inView} />
            </span>
            <p className="text-[10px] font-body text-muted-foreground tracking-wider uppercase mb-3">no-show rate</p>
            <h3 className="text-[13px] font-display font-normal text-foreground mb-1.5">Fewer carrier no-shows</h3>
            <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">
              Automated reminders and carrier accountability drive no-show rates to near zero.
            </p>
          </motion.div>

          {/* Labor Planning (spans 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="md:col-span-4 bg-card rounded-2xl p-7 card-elevated transition-all duration-500 relative overflow-hidden"
          >
            <Users className="w-6 h-6 text-primary/40 mb-4" />
            <span className="block text-4xl font-display font-light number-accent leading-none mb-2">
              <Counter target={30} suffix="%" inView={inView} />
            </span>
            <p className="text-[10px] font-body text-muted-foreground tracking-wider uppercase mb-3">labor savings</p>
            <h3 className="text-[13px] font-display font-normal text-foreground mb-1.5">Smarter workforce planning</h3>
            <p className="text-xs text-muted-foreground font-body font-normal leading-[1.7]">
              Know exactly when trucks arrive. Staff docks precisely — no overtime surprises.
            </p>
          </motion.div>

          {/* Carrier Portal + Appointment Control (spans 4 cols, stacked) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="md:col-span-4 flex flex-col gap-4"
          >
            <div className="bg-card rounded-2xl p-6 card-elevated flex-1 relative overflow-hidden transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <Truck className="w-5 h-5 text-primary/40 mb-3" />
              <span className="block text-2xl font-display font-light number-accent leading-none mb-1">24/7</span>
              <h3 className="text-[12px] font-display font-normal text-foreground mb-1">Carrier self-service portal</h3>
              <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">
                Book, reschedule, check in — no phone calls.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 card-elevated flex-1 relative overflow-hidden transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <CalendarCheck className="w-5 h-5 text-primary/40 mb-3" />
              <span className="block text-2xl font-display font-light number-accent leading-none mb-1">100%</span>
              <h3 className="text-[12px] font-display font-normal text-foreground mb-1">Appointment control</h3>
              <p className="text-[11px] text-muted-foreground font-body font-normal leading-relaxed">
                Enforce capacity rules by load type and dock door.
              </p>
            </div>
          </motion.div>

        </div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-body font-normal text-primary hover:text-primary/80 transition-colors"
          >
            See how it works <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>

  );
};

export default OutcomesSection;
