import { LucideIcon } from "lucide-react";

export interface ProductPageConfig {
  meta: {
    title: string;
    description: string;
    slug: string;
  };
  hero: {
    badge: string;
    headline: React.ReactNode;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  trustBar: {
    kpis: { target: number; suffix: string; label: string }[];
  };
  problem: {
    label: string;
    headline: string;
    subtext: string;
    items: { icon: LucideIcon; title: string; description: string }[];
    cta: string;
  };
  outcomes: {
    label: string;
    headline: string;
    heroCard: {
      icon: LucideIcon;
      target: number;
      suffix: string;
      sublabel: string;
      title: string;
      description: string;
    };
    cards: {
      icon: LucideIcon;
      target: number;
      suffix: string;
      sublabel: string;
      title: string;
      description: string;
    }[];
  };
  capabilities: {
    label: string;
    headline: string;
    groups: {
      id: string;
      icon: LucideIcon;
      title: string;
      subtitle: string;
      features: string[];
    }[];
  };
  ctaBanner: {
    label: string;
    headline: React.ReactNode;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  useCases: {
    label: string;
    headline: string;
    cases: {
      id: string;
      icon: LucideIcon;
      label: string;
      image: string;
      headline: string;
      description: string;
      benefits: string[];
    }[];
    cta: string;
  };
  howItWorks: {
    label: string;
    headline: string;
    steps: {
      icon: LucideIcon;
      step: string;
      title: string;
      description: string;
    }[];
  };
  compare: {
    label: string;
    headline: React.ReactNode;
    features: string[];
    oldWay: { title: string; subtitle: string };
    cta: string;
  };
  faq: {
    label: string;
    headline: string;
    items: { q: string; a: string }[];
  };
  ctaFinal: {
    label: string;
    headline: string;
    subtext: string;
  };
}
