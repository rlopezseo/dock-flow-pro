import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control — exactly what we needed.",
    author: "Mr. T. Forray",
    role: "Head of Supply Chain",
    company: "Apollo Tyres",
    metric: "60% faster dock turnaround",
  },
  {
    quote: "\"Trucks\" is a must have for us. We can't imagine logistics without it, anymore. Our dock scheduling went from chaos to clockwork.",
    author: "Mr. B. Rafaj",
    role: "Production & Logistics Manager",
    company: "Saint-Gobain Construction Products",
    metric: "Zero scheduling conflicts",
  },
  {
    quote: "The carrier self-service portal eliminated hundreds of phone calls per week. Our operations team finally focuses on what matters.",
    author: "Logistics Director",
    role: "Operations",
    company: "European 3PL Provider",
    metric: "85% dock utilization achieved",
  },
];

const ProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-3">
            Customer Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground">
            Trusted by supply chain leaders across Europe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-7 flex flex-col justify-between hover:shadow-lg hover:border-primary/15 transition-all duration-400"
            >
              <div>
                <Quote className="w-5 h-5 text-primary/30 mb-4" />
                <p className="text-sm text-foreground font-body font-normal leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-primary/8 rounded-full mb-4">
                  <span className="text-[10px] font-display text-primary tracking-wider uppercase">{t.metric}</span>
                </div>
                <footer>
                  <p className="text-sm font-display font-normal text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground font-body">
                    {t.role}, {t.company}
                  </p>
                </footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
