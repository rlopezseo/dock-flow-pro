import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is dock scheduling software?",
    a: "Dock scheduling software is a digital platform that automates the process of booking, managing, and optimizing loading dock appointments. It replaces manual scheduling methods like phone calls, emails, and spreadsheets with a centralized system that enforces capacity rules, reduces wait times, and provides real-time visibility into dock operations.",
  },
  {
    q: "How does dock door scheduling reduce truck wait times?",
    a: "By staggering arrivals through automated time slot management, dock door scheduling eliminates the clustering of trucks at gates. Carriers receive specific appointment windows, and the system enforces buffer times between loads — resulting in up to 60% less dwell time at the facility.",
  },
  {
    q: "How do you handle delays, late arrivals, and no-shows?",
    a: "The platform sends automated reminders before each appointment. If a carrier is running late, live ETA tracking (via GPS/telematics integration) allows operations teams to proactively reassign dock slots. No-show carriers are flagged in adherence scorecards for accountability.",
  },
  {
    q: "Can we enforce capacity rules by load type or dock door?",
    a: "Yes. You can define granular capacity rules per dock door, load type (full truckload, LTL, container), direction (inbound vs. outbound), and time window. The system automatically validates every booking request against these rules before confirmation.",
  },
  {
    q: "How long does it take to implement loading dock appointment scheduling?",
    a: "Most implementations go live within 7 weeks. This includes discovery, system configuration, WMS/TMS/ERP integration, carrier onboarding, training, and a pilot phase — followed by full production rollout with dedicated support.",
  },
  {
    q: "Do you support both inbound and outbound dock scheduling?",
    a: "Absolutely. The platform handles inbound receiving and outbound shipping with independent rules, capacity limits, and KPIs for each direction. Both flows share a unified dock visibility dashboard so operations teams see everything in one place.",
  },
  {
    q: "What is a yard management system and how does it relate to dock scheduling?",
    a: "A yard management system (YMS) tracks the location and status of trucks and trailers within a facility's yard. TrucksOnTheMap integrates yard visibility with dock scheduling so you know not just when a truck is coming, but where it is from gate check-in through departure.",
  },
  {
    q: "Does the carrier self-service portal work for international carriers?",
    a: "Yes. The carrier self-service portal supports multiple languages and allows carriers to book, reschedule, cancel, and view appointment history 24/7 — without phone calls. It works for domestic and international carrier networks alike.",
  },
  {
    q: "What systems does TrucksOnTheMap integrate with?",
    a: "The platform connects to major WMS (Blue Yonder, Manhattan), TMS (Oracle, Descartes), and ERP (SAP, JDE) systems via REST API or EDI. GPS and telematics integrations provide live ETA updates. A full sandbox environment is available for custom integrations.",
  },
  {
    q: "How does warehouse dock scheduling improve labor planning?",
    a: "When you know exactly which trucks are arriving and when, you can staff docks precisely — no more overstaffing during slow periods or scrambling during unexpected surges. The result is typically 30% savings in dock labor costs.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24" ref={ref}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-display text-xs tracking-[0.25em] uppercase mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground">
            Everything you need to know about dock scheduling
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-sm font-display font-normal text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground font-body font-normal leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
