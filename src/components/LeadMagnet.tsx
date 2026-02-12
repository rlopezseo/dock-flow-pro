import { ArrowRight } from "lucide-react";

const LeadMagnet = () => {
  return (
    <section className="py-24 bg-[#FAFBFC]">
      <div className="max-w-[640px] mx-auto px-6">
        <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#F97316]">📄 Free Download</p>
          <h3 className="text-2xl font-extrabold text-[#0F172A] mt-3">The 2026 Dock Scheduling Playbook</h3>
          <p className="text-[15px] text-[#64748B] leading-relaxed mt-3">
            How the top-performing warehouses reduced driver wait times by 60% and eliminated detention charges. 14 pages. Includes benchmarks, implementation checklist, and carrier communication templates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-7">
            <input
              type="email"
              placeholder="Work Email"
              className="w-full sm:w-[260px] px-4 py-3.5 border-[1.5px] border-[#E2E8F0] rounded-[10px] text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
            />
            <button className="w-full sm:w-auto px-7 py-3.5 bg-[#2563EB] text-white font-bold text-sm rounded-[10px] hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-2">
              Download Free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-[#94A3B8] mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
