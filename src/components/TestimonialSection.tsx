import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control.",
    name: "Mr. T. Forray",
    title: "Head of Supply Chain",
    company: "Apollo Tyres",
    initials: "TF",
  },
  {
    quote: "The latest technology & beautiful design in every tool we create. So, road freight becomes fun again.",
    name: "Mr. T. Domonkos, MBA",
    title: "Founder - CEO",
    company: "TrucksOnTheMap",
    initials: "TD",
  },
  {
    quote: "\"Trucks\" is must have for us. We can't imagine logistics without it, anymore. …and we enjoy the Feedback-Friday-Talks too.",
    name: "Mr. B. Rafaj",
    title: "Production and Logistics Manager",
    company: "Saint-Gobain Construction Products",
    initials: "BR",
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 relative light-section" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-light text-[hsl(var(--light-fg))] text-center leading-[1.12] tracking-[-0.02em] mb-14"
        >
          First Hand — <span className="text-primary">About TrucksOnTheMap</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="light-card rounded-2xl p-9 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-5xl text-[hsl(var(--light-border))] font-serif leading-none">"</span>
              <p className="text-base text-[hsl(var(--light-fg))] leading-[1.7] italic mt-2">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[hsl(var(--light-fg))]">{t.name}</p>
                  <p className="text-[13px] text-[hsl(var(--light-fg-muted))]">{t.title}</p>
                  <p className="text-[11px] font-medium text-primary">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
