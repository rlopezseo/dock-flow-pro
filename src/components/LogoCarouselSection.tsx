import weberLogo from "@/assets/logos/weber.png";
import vredesteinLogo from "@/assets/logos/vredestein.png";
import rigipsLogo from "@/assets/logos/rigips.png";
import kuehneNagelLogo from "@/assets/logos/kuehne-nagel.png";
import isoverLogo from "@/assets/logos/isover.png";

const logos = [
  { src: weberLogo, alt: "Weber Saint-Gobain" },
  { src: vredesteinLogo, alt: "Vredestein Tires" },
  { src: rigipsLogo, alt: "Rigips Saint-Gobain" },
  { src: kuehneNagelLogo, alt: "Kuehne + Nagel" },
  { src: isoverLogo, alt: "Isover Saint-Gobain" },
];

const LogoCarouselSection = () => {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative bg-[hsl(207,60%,30%)] py-10 overflow-hidden">
      <p className="text-center text-[11px] font-body font-medium tracking-[0.25em] uppercase text-white/60 mb-8">
        Trusted by Industry Leaders
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[hsl(207,60%,30%)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[hsl(207,60%,30%)] to-transparent pointer-events-none" />

      <div className="flex animate-logo-scroll">
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-10 md:px-14"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-7 md:h-9 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarouselSection;
