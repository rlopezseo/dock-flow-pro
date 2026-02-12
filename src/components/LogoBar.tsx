const logos = [
  "Saint-Gobain", "Apollo Tyres", "Vredestein", "Kuehne+Nagel",
  "C.H. Robinson", "DHL", "DSV", "Ewals Cargo Care",
];

const LogoBar = () => {
  return (
    <section className="py-14 border-t border-b border-[hsl(var(--light-border))] light-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[hsl(var(--light-fg-muted))] text-center mb-6">
          Co-developed with industry leaders
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-logo-scroll gap-x-12 w-max">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-semibold text-[hsl(var(--light-fg-muted))]/60 hover:text-[hsl(var(--light-fg))] transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
