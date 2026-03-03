import { LucideIcon } from "lucide-react";

export interface ICPPageConfig {
  meta: {
    title: string;
    description: string;
    slug: string;
  };
  hero: {
    badge: string;
    headline: string;
    highlightedPart?: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    image: string;
  };
  narrative: {
    headline: string;
    paragraphs: string[];
  };
  comparison: {
    headline: string;
    items: { without: string; withTotm: string }[];
  };
  features: {
    headline: string;
    subtext?: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  stats: {
    headline: string;
    items: { value: string; description: string }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  objections: {
    headline: string;
    items: { question: string; answer: string }[];
  };
  ctaFinal: {
    headline: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary?: string;
  };
}
