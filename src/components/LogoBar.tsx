const logos = [
  "Saint-Gobain", "Apollo Tyres", "Vredestein", "Kuehne+Nagel",
  "C.H. Robinson", "DHL", "DSV", "Ewals Cargo Care",
];

const LogoBar = () => {
  return (
    <section className="py-14 border-t border-b border-border bg-background/80">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground/60 text-center mb-6">
          Trusted by logistics teams at
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-logo-scroll gap-x-12 w-max">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-sm font-semibold text-muted-foreground/40 hover:text-foreground transition-all duration-300 cursor-default whitespace-nowrap"
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
