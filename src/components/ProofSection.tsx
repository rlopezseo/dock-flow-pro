import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import bgTestimonials from "@/assets/bg-testimonials.jpg";
import avatarForray from "@/assets/avatar-forray.jpg";
import avatarDomonkos from "@/assets/avatar-domonkos.jpg";
import avatarRafaj from "@/assets/avatar-rafaj.jpg";

const testimonials = [
  {
    quote: "TrucksOnTheMap made our freight management best-in-class. Speed, transparency and premium control.",
    author: "Mr. T. Forray,",
    role: "Head of Supply Chain, Apollo Tyres HU",
    avatar: avatarForray,
  },
  {
    quote: "The latest technology & beautiful design in every tool we create. So, road freight becomes fun again.",
    author: "Mr. T. Domonkos, MBA,",
    role: "CEO, TrucksOnTheMap",
    avatar: avatarDomonkos,
  },
  {
    quote: "With the online procurement we managed to cut costs and minimize the risk of disruption in our supply chain.",
    author: "Mr. B. Rafaj,",
    role: "Production and Logistics Manager, Saint-Gobain Construction Products SK",
    avatar: avatarRafaj,
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-white/60 text-white/60" />
    ))}
  </div>
);

const ProofSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Full-width background image */}
      <div className="relative w-full py-24 md:py-32">
        <img
          src={bgTestimonials}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[hsl(207,60%,10%)]/75" />

        <div className="container relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white/50 font-body text-xs tracking-[0.25em] uppercase mb-14"
          >
            About TrucksOnTheMap firsthand
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * i }}
                className="flex flex-col"
              >
                {/* Quote mark */}
                <span className="text-5xl font-display font-light text-white/30 leading-none mb-4">"</span>

                <p className="text-lg md:text-xl font-display font-light text-white leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>

                <Stars />

                <div className="flex items-center gap-3 mt-2">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="text-sm font-body font-normal text-white">{t.author}</p>
                    <p className="text-xs text-white/50 font-body font-normal leading-snug">{t.role}</p>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
