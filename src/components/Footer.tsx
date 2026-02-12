const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-sm text-muted-foreground font-body">
          <div>
            <p className="font-display font-semibold text-foreground mb-2">
              trucks<span className="text-primary font-bold">ON</span><span className="font-light text-muted-foreground">the</span>map
            </p>
            <p>128 City Road</p>
            <p>London EC1V 2NX, United Kingdom</p>
            <p className="mt-1">Company Number 9567296</p>
          </div>
          <div>
            <p className="font-display font-semibold text-foreground mb-2">Hungary Office</p>
            <p>Práter utca 9., 3. em 5.a</p>
            <p>Győr 9024, Hungary</p>
            <p className="mt-1">Tax ID: 26205621-2-08</p>
          </div>
          <div>
            <p className="font-display font-semibold text-foreground mb-2">Links</p>
            <a href="#" className="block hover:text-foreground transition-colors">Terms and conditions</a>
            <a href="#" className="block hover:text-foreground transition-colors">Privacy policy</a>
            <p className="mt-3 text-xs">©2025 TrucksOnTheMap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
