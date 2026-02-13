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
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative bg-[hsl(220,20%,7%)] py-14 overflow-hidden">
      <p className="text-center text-xs font-body font-normal tracking-[0.25em] uppercase text-white/40 mb-10">
        Trusted by Industry Leaders
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[hsl(220,20%,7%)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[hsl(220,20%,7%)] to-transparent pointer-events-none" />

      <div className="flex animate-logo-scroll items-center">
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-12 md:px-20"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCarouselSection;
