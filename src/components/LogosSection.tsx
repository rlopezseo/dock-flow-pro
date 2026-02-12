import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "Rigips", sub: "SAINT-GOBAIN" },
  { name: "Isover", sub: "SAINT-GOBAIN" },
  { name: "Weber", sub: "SAINT-GOBAIN" },
  { name: "APOLLO TYRES", sub: "LTD" },
  { name: "VREDESTEIN", sub: "TIRES" },
  { name: "Ewals", sub: "Cargo Care" },
  { name: "DSV", sub: "" },
  { name: "C.H. ROBINSON", sub: "" },
  { name: "DHL", sub: "" },
  { name: "KUEHNE+NAGEL", sub: "" },
];

const LogoItem = ({ name, sub }: { name: string; sub: string }) => (
  <div className="flex-shrink-0 flex items-center justify-center px-10 py-6 min-w-[200px]">
    <div className="text-center">
      <span className="font-secondary font-normal text-lg tracking-wider text-foreground/70">
        {name}
      </span>
      {sub && (
        <span className="block text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
          {sub}
        </span>
      )}
    </div>
  </div>
);

const LogosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-background overflow-hidden" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-body text-sm tracking-wide mb-2">
            Co-developed with
          </p>
          <h2 className="text-2xl md:text-4xl font-secondary font-normal tracking-tight text-foreground">
            Industry Leaders
          </h2>
        </motion.div>
      </div>

      {/* Infinite scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-logo-scroll">
          {allLogos.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} sub={logo.sub} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LogosSection;
