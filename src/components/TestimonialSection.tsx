import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "We went from 40 scheduling calls a week to zero. Literally zero. Carriers book themselves and our receiving team finally knows what's coming before it shows up at the gate.",
    name: "James Thornton",
    title: "Warehouse Operations Manager",
    scale: "3 facilities · 80+ trucks/day",
    initials: "JT",
  },
  {
    quote: "Dock utilization went from 52% to 88% in six weeks. We delayed a $2M dock expansion because we didn't need it anymore. TrucksOnTheMap paid for itself before the first invoice.",
    name: "Maria Chen",
    title: "VP Supply Chain",
    scale: "8 distribution centers",
    initials: "MC",
  },
  {
    quote: "We used to be the facility carriers avoided. Now they request us because they know they'll get a slot, get in, and get out. The self-service portal changed the entire relationship.",
    name: "David Kowalski",
    title: "Logistics Director",
    scale: "200+ daily truck movements",
    initials: "DK",
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 relative" ref={ref}>
      <div className="absolute inset-0 bg-background" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-light text-foreground text-center leading-[1.12] tracking-[-0.02em] mb-14"
        >
          What Operations Teams Say After <span className="text-primary font-normal">90 Days</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card rounded-2xl p-9 hover:border-primary/20 transition-colors"
            >
              <span className="text-6xl text-border font-serif leading-none">"</span>
              <p className="text-base font-medium text-foreground leading-[1.7] italic mt-2">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-[13px] text-muted-foreground">{t.title}</p>
                  <p className="text-[11px] font-semibold text-accent">{t.scale}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/50 text-center mt-8 italic">
          *Results represent averages across TrucksOnTheMap customers in their first 90 days of operation.
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
