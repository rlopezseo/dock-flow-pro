import { createContext, useContext, useState, ReactNode, FormEvent } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ShieldCheck, Users, Award, CalendarCheck, ArrowUpRight, CheckCircle2, Phone, Mail } from "lucide-react";

type Ctx = { open: () => void; close: () => void };
const BookDemoCtx = createContext<Ctx | null>(null);

export const useBookDemo = () => {
  const ctx = useContext(BookDemoCtx);
  if (!ctx) throw new Error("useBookDemo must be used within BookDemoProvider");
  return ctx;
};

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "aol.com", "proton.me", "protonmail.com", "gmx.com",
  "yandex.com", "mail.com", "zoho.com", "msn.com",
];

const schema = z.object({
  firstName: z.string().trim().min(2, "First name is required").max(60),
  lastName: z.string().trim().min(2, "Last name is required").max(60),
  company: z.string().trim().min(2, "Company name is required").max(120),
  jobTitle: z.string().trim().min(2, "Job title is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160)
    .refine((v) => {
      const domain = v.split("@")[1]?.toLowerCase() ?? "";
      return !FREE_EMAIL_DOMAINS.includes(domain);
    }, "Please use your business email"),
  phone: z.string().trim().min(6, "Phone number is required").max(30),
  country: z.string().trim().min(2, "Country is required").max(60),
  fleetSize: z.string().min(1, "Select your operation size"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
  consent: z.literal("on", { errorMap: () => ({ message: "You must accept the Terms & Privacy Policy" }) }),
});

const trustItems = [
  { icon: ShieldCheck, title: "Safe & Secure Platform", desc: "ISO 27001 compliant. GDPR ready. Enterprise-grade infrastructure trusted by Tier-1 shippers." },
  { icon: Users, title: "Invite-Only Carrier Network", desc: "Vetted European carriers across 32 countries. No spam loadboards. Quality over quantity." },
  { icon: Award, title: "25+ Years in Logistics", desc: "Built by freight operators, not generic software vendors. Real industry know-how baked in." },
  { icon: CalendarCheck, title: "Free Expert Consultation", desc: "30-minute working session with a freight logistics expert. Tailored to your operation. No sales pitch." },
];

export const BookDemoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const open = () => { setSubmitted(false); setErrors({}); setIsOpen(true); };
  const close = () => setIsOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      firstName: String(form.get("firstName") || ""),
      lastName: String(form.get("lastName") || ""),
      company: String(form.get("company") || ""),
      jobTitle: String(form.get("jobTitle") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      country: String(form.get("country") || ""),
      fleetSize: String(form.get("fleetSize") || ""),
      message: String(form.get("message") || ""),
      consent: form.get("consent") ? "on" : "",
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (k && !fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    // Simulated submit (no backend wired). Replace with API call when ready.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
    toast({ title: "Request received", description: "A freight expert will reach out within one business day." });
  };

  return (
    <BookDemoCtx.Provider value={{ open, close }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 gap-0 border-white/10 bg-[hsl(220,8%,12%)] overflow-hidden max-h-[92vh]">
          <div className="grid lg:grid-cols-[1fr_1.05fr] max-h-[92vh]">
            {/* LEFT — trust signals */}
            <div className="relative p-5 lg:p-6 bg-gradient-to-br from-[hsl(220,10%,18%)] via-[hsl(220,8%,13%)] to-[hsl(220,12%,9%)] border-r border-white/10">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle at 20% 10%, hsl(0,0%,80%) 0, transparent 40%), radial-gradient(circle at 80% 90%, hsl(0,0%,80%) 0, transparent 40%)" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-[11px] font-body text-foreground/80 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Free 30-min consultation
                </div>
                <h2 className="font-heading text-xl lg:text-2xl text-foreground leading-tight mb-2">
                  Book a free working session with a freight logistics expert
                </h2>
                <p className="text-xs text-muted-foreground font-body mb-4 leading-relaxed">
                  No slide decks. No generic demos. A real conversation about your lanes, your carriers, and where TrucksOnTheMap fits.
                </p>

                <div className="space-y-2">
                  {trustItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-2.5 p-2.5 rounded-lg border border-white/8 bg-white/[0.04] backdrop-blur-sm"
                    >
                      <div className="shrink-0 w-7 h-7 rounded-md bg-white/10 border border-white/15 flex items-center justify-center">
                        <item.icon className="w-3.5 h-3.5 text-foreground/90" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-heading text-foreground leading-tight">{item.title}</div>
                        <div className="text-[11px] text-muted-foreground font-body leading-snug mt-0.5">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-1 text-[11px] text-muted-foreground font-body">
                  <a href="tel:+442038078493" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                    <Phone className="w-3 h-3" /> +44 (20) 3807 84 93
                  </a>
                  <a href="mailto:ihaveaquestion@trucksonthemap.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="w-3 h-3" /> ihaveaquestion@trucksonthemap.com
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="p-5 lg:p-6 overflow-y-auto">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">Request received</h3>
                  <p className="text-xs text-muted-foreground font-body max-w-sm">
                    A freight logistics expert will reach out within one business day to schedule your consultation.
                  </p>
                  <Button onClick={close} variant="outline" className="mt-5 rounded-full border-white/20 bg-transparent">
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-xl text-foreground mb-1">Tell us about your operation</h3>
                  <p className="text-[11px] text-muted-foreground font-body mb-3">All fields marked * are required. We respond within one business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-2.5" noValidate>
                    <div className="grid grid-cols-2 gap-2.5">
                      <Field label="First name *" name="firstName" placeholder="Anna" error={errors.firstName} />
                      <Field label="Last name *" name="lastName" placeholder="Müller" error={errors.lastName} />
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <Field label="Company name *" name="company" placeholder="Your company GmbH" error={errors.company} />
                      <Field label="Job title *" name="jobTitle" placeholder="Head of Logistics" error={errors.jobTitle} />
                    </div>
                    <Field label="Business email *" name="email" type="email" placeholder="anna@yourcompany.com" error={errors.email} hint="No personal email domains (gmail, hotmail...)." />
                    <div className="grid grid-cols-2 gap-2.5">
                      <Field label="Phone *" name="phone" type="tel" placeholder="+49 ..." error={errors.phone} />
                      <Field label="Country *" name="country" placeholder="Germany" error={errors.country} />
                    </div>

                    <div>
                      <label className="text-[11px] font-body text-muted-foreground mb-1 block">Operation size *</label>
                      <select
                        name="fleetSize"
                        defaultValue=""
                        className="flex h-9 w-full rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <option value="" disabled className="bg-[hsl(220,8%,12%)]">Select your monthly volume</option>
                        <option value="<100" className="bg-[hsl(220,8%,12%)]">Less than 100 shipments / month</option>
                        <option value="100-500" className="bg-[hsl(220,8%,12%)]">100 - 500 shipments / month</option>
                        <option value="500-2000" className="bg-[hsl(220,8%,12%)]">500 - 2,000 shipments / month</option>
                        <option value="2000-10000" className="bg-[hsl(220,8%,12%)]">2,000 - 10,000 shipments / month</option>
                        <option value="10000+" className="bg-[hsl(220,8%,12%)]">10,000+ shipments / month</option>
                      </select>
                      {errors.fleetSize && <p className="text-[11px] text-destructive mt-1 font-body">{errors.fleetSize}</p>}
                    </div>

                    <label className="flex items-start gap-2 pt-1 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border border-white/25 bg-white/5 accent-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                      <span className="text-[11px] text-muted-foreground font-body leading-snug">
                        I agree to the{" "}
                        <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/80 underline underline-offset-2 decoration-white/20 hover:text-foreground hover:decoration-white/40 transition-colors">Terms &amp; Conditions</a>
                        {" "}and{" "}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/80 underline underline-offset-2 decoration-white/20 hover:text-foreground hover:decoration-white/40 transition-colors">Privacy Policy</a>
                        , and consent to be contacted by TrucksOnTheMap.
                      </span>
                    </label>
                    {errors.consent && <p className="text-[11px] text-destructive font-body">{errors.consent}</p>}

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 text-sm font-body mt-1"
                    >
                      {submitting ? "Sending..." : (
                        <>Book my free consultation <ArrowUpRight className="w-4 h-4" /></>
                      )}
                    </Button>

                  </form>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BookDemoCtx.Provider>
  );
};

const Field = ({
  label, name, type = "text", placeholder, error, hint,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string; hint?: string }) => (
  <div>
    <label className="text-xs font-body text-muted-foreground mb-1.5 block">{label}</label>
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      className="bg-white/5 border-white/15 text-foreground placeholder:text-muted-foreground/60 h-10"
    />
    {error ? (
      <p className="text-xs text-destructive mt-1 font-body">{error}</p>
    ) : hint ? (
      <p className="text-[11px] text-muted-foreground/60 mt-1 font-body">{hint}</p>
    ) : null}
  </div>
);
