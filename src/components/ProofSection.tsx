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
    <section className="relative py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            Customer Stories
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight">
            Trusted by supply chain leaders across Europe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-8 flex flex-col justify-between card-elevated transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

              <div>
                <Quote className="w-6 h-6 text-primary/20 mb-5" />
                <p className="text-sm text-foreground font-body font-normal leading-[1.8] mb-6">
                  {t.quote}
                </p>
              </div>
              <div>
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/8 to-primary/4 rounded-full mb-5 border border-primary/10">
                  <span className="text-[10px] font-display text-primary tracking-wider uppercase">{t.metric}</span>
                </div>
                <footer>
                  <p className="text-[13px] font-display font-normal text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
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
