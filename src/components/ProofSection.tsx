import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ArrowRight } from "lucide-react";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";

const testimonials = [
  {
    quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control.",
    author: "Mr. T. Forray",
    role: "Head of Supply Chain",
    company: "Apollo Tyres HU",
    avatar: avatarForray,
  },
  {
    quote: "The latest technology & beautiful design in every tool we create. So, road freight becomes fun again.",
    author: "Mr. T. Domonkos, MBA",
    role: "CEO",
    company: "TrucksOnTheMap",
    avatar: avatarDomonkos,
  },
  {
    quote: "With the online procurement we managed to cut costs and minimize the risk of disruption in our supply chain.",
    author: "Mr. B. Rafaj",
    role: "Production and Logistics Manager",
    company: "Saint-Gobain Construction Products SK",
    avatar: avatarRafaj,
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
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-4">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-display font-light tracking-tight text-foreground leading-tight mb-5">
            Trusted by logistics leaders across Europe
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-2xl p-10 border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-7">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Quote text */}
              <p className="text-base md:text-lg font-display font-light text-foreground leading-relaxed mb-10 flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-7 border-t border-border/40">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <p className="text-sm font-display font-normal text-foreground">{t.author}</p>
                  <p className="text-xs text-primary font-body font-normal">{t.role}</p>
                  <p className="text-xs text-muted-foreground font-body font-normal">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See more reviews button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/30 text-primary hover:bg-primary/5 font-body font-normal text-sm rounded-full transition-all duration-300"
          >
            See More Reviews <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
