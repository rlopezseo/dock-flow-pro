import { ArrowRight } from "lucide-react";

const LeadMagnet = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-surface" />
      <div className="max-w-[640px] mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[20px] p-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-accent">📄 Free Download</p>
          <h3 className="text-2xl font-light text-foreground mt-3">The 2026 <span className="text-primary font-normal">Dock Scheduling</span> Playbook</h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed mt-3">
            How the top-performing warehouses reduced driver wait times by 60% and eliminated detention charges. 14 pages. Includes benchmarks, implementation checklist, and carrier communication templates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-7">
            <input
              type="email"
              placeholder="Work Email"
              className="w-full sm:w-[260px] px-4 py-3.5 bg-background border border-border rounded-[10px] text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="w-full sm:w-auto px-7 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-[10px] hover:shadow-[0_4px_16px_hsl(217_91%_60%/0.3)] transition-all flex items-center justify-center gap-2">
              Download Free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-muted-foreground/50 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
