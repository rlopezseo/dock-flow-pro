export interface ComparisonFeature {
  name: string;
  totm: string | boolean;
  competitor: string | boolean;
  winner: "totm" | "competitor" | "tie";
}

export interface ComparisonCategory {
  category: string;
  features: ComparisonFeature[];
}

export interface SwitchReason {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AlternativePageConfig {
  meta: {
    title: string;
    description: string;
  };
  competitor: {
    name: string;
    shortName: string;
    logo?: string; // optional logo import path
    tagline: string; // e.g. "Enterprise freight platform (Germany)"
    origin: string; // e.g. "Ulm, Germany"
  };
  hero: {
    badge: string;
    headline: string; // part before competitor name
    subtext: string;
  };
  comparison: {
    categories: ComparisonCategory[];
    summary: string; // e.g. "TrucksOnTheMap wins in 13 of 18 categories"
    summaryDetail: string; // e.g. "Transporeon matches on tracking..."
  };
  switchReasons: {
    icon: string;
    title: string;
    description: string;
  }[];
  faq: FAQItem[];
}
