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
  authorityBar: {
    items: { value: string; label: string }[];
  };
  narrative: {
    headline: string;
    paragraphs: string[];
    image: string;
  };
  comparison: {
    headline: string;
    subtext?: string;
    items: { without: string; withTotm: string; image: string; label: string }[];
  };
  features: {
    headline: string;
    subtext?: string;
    items: {
      title: string;
      description: string;
      image?: string;
    }[];
  };
  stats: {
    headline: string;
    backgroundImage: string;
    items: { value: string; description: string }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    backgroundImage: string;
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
    backgroundImage: string;
  };
  sectionImages: {
    narrative: string;
    comparison: string;
    features: string;
  };
}
