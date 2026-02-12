const logos = [
  "Saint-Gobain", "Apollo Tyres", "Vredestein", "Kuehne+Nagel",
  "C.H. Robinson", "DHL", "DSV", "Ewals Cargo Care",
];

const LogoBar = () => {
  return (
    <section className="py-14 border-t border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#94A3B8] text-center mb-6">
          Trusted by logistics teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-[#94A3B8] grayscale opacity-40 hover:opacity-100 hover:grayscale-0 hover:text-[#0F172A] transition-all duration-300 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
