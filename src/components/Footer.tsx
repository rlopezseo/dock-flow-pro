import logo from "@/assets/logo-trucksonthemap.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-10">
        {/* Top row: Logo + Nav links + Auth buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <Link to="/">
            <img src={logo} alt="TrucksOnTheMap" className="h-6 brightness-0" />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#platform" className="text-[13px] text-muted-foreground hover:text-foreground font-body transition-colors">
              Platform
            </a>
            <Link to="/terms" className="text-[13px] text-muted-foreground hover:text-foreground font-body transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-[13px] text-muted-foreground hover:text-foreground font-body transition-colors">
              Privacy Policy
            </Link>
            <a href="#contact" className="text-[13px] text-muted-foreground hover:text-foreground font-body transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="text-[13px] font-body font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Register
            </a>
            <a
              href="#login"
              className="inline-flex items-center justify-center h-9 px-5 rounded-md bg-primary text-primary-foreground text-[13px] font-body font-medium hover:bg-primary/90 transition-colors"
            >
              Log In
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-border pt-6 text-center">
          <span className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} TrucksOnTheMap. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
