import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control.",
    author: "Mr. T. Forray",
    role: "Head of Supply Chain",
    company: "Apollo Tyres",
  },
  {
    quote: "\"Trucks\" is a must have for us. We can't imagine logistics without it, anymore.",
    author: "Mr. B. Rafaj",
    role: "Production & Logistics Manager",
    company: "Saint-Gobain Construction Products",
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm tracking-[0.25em] uppercase mb-3">
            What Our Clients Say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card border border-border rounded-sm p-8 flex flex-col justify-between"
            >
              <p className="text-foreground font-body text-sm leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-display font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground font-body">
                  {t.role}, {t.company}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
