import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is dock scheduling software?", a: "Dock scheduling software is a platform that lets warehouses, distribution centers, and logistics facilities manage loading dock appointments through automated time slot management. Instead of coordinating truck arrivals by phone, email, or spreadsheet, teams assign specific dock doors and arrival windows to carriers digitally — reducing congestion, eliminating wait times, and cutting operational waste." },
  { q: "How does it reduce truck wait times?", a: "By assigning each carrier a specific arrival window and dock door in advance, the first-come-first-served bottleneck disappears. Trucks arrive when a door is ready for them. TrucksOnTheMap customers see an average 80% reduction in driver wait times within 30 days." },
  { q: "Can carriers book dock appointments themselves?", a: "Yes. TrucksOnTheMap includes a carrier self-service portal where drivers and dispatchers view available time slots and book their own appointments around the clock. This eliminates the back-and-forth of manual scheduling." },
  { q: "How long does implementation take?", a: "Most customers go fully live within 5 business days. The platform is cloud-based with no hardware requirements. Our onboarding team handles facility configuration, scheduling rule setup, carrier portal invitations, and team training." },
  { q: "Does it integrate with WMS and TMS?", a: "TrucksOnTheMap offers API integrations with leading warehouse management systems, transportation management systems, and ERP platforms. Appointment data flows into your existing workflows automatically." },
  { q: "What industries use dock scheduling software?", a: "Any facility that receives or ships truckload freight benefits from dock scheduling. The highest adoption is in food & beverage, retail & eCommerce, manufacturing, and 3PL providers." },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 relative light-section" ref={ref}>
      <div className="max-w-[720px] mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-light text-[hsl(var(--light-fg))] text-center leading-[1.12] tracking-[-0.02em] mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b border-[hsl(var(--light-border))]">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between py-6 text-left">
                <span className="text-base font-medium text-[hsl(var(--light-fg))] pr-4">{faq.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-[hsl(var(--light-fg-muted))] shrink-0" /> : <Plus className="w-5 h-5 text-[hsl(var(--light-fg-muted))] shrink-0" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <p className="text-[15px] text-[hsl(var(--light-fg-muted))] leading-[1.7] pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
        }),
      }} />
    </section>
  );
};

export default FAQSection;
