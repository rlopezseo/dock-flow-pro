const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-20 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="text-foreground text-base font-bold">
              trucks<span className="text-primary">ON</span><span className="font-light text-muted-foreground/50">the</span>map
            </p>
            <p className="text-[13px] text-muted-foreground/60 mt-2">Dock scheduling software for modern warehouses</p>
            <div className="mt-6 text-xs space-y-1 text-muted-foreground/50">
              <p>128 City Road</p>
              <p>London EC1V 2NX, United Kingdom</p>
              <p className="mt-2">Company Number 9567296</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground/60 mb-4">Product</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground/60 mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground/60 mb-4">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Playbook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/50 gap-4">
          <p>© 2026 TrucksOnTheMap · <a href="#" className="hover:text-foreground transition-colors">Privacy</a> · <a href="#" className="hover:text-foreground transition-colors">Terms</a></p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
