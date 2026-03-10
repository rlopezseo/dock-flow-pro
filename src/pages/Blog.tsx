import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/blog/blog-listing-hero.jpg";
import bgCtaFinal from "@/assets/bg-cta-final.jpg";
import blogHero from "@/assets/blog/blog-hero-service.jpg";
import relatedImg1 from "@/assets/blog/blog-related-1.jpg";
import relatedImg2 from "@/assets/blog/blog-related-2.jpg";
import contentImg1 from "@/assets/blog/blog-content-1.jpg";
import imgDock from "@/assets/blog/blog-dock-loading.jpg";
import imgHighway from "@/assets/blog/blog-highway-trucks.jpg";

const categories = [
  "All",
  "Freight Visibility",
  "Fleet Management",
  "Supply Chain",
  "Technology",
  "Industry Insights",
];

const articles = [
  {
    slug: "what-is-freight-visibility",
    title: "What Is Freight Visibility? A Complete Guide to Real-Time Tracking in European Road Freight",
    excerpt: "Freight visibility is the continuous, real-time awareness of where a shipment is, what condition it is in, what is likely to happen to it next, and why any deviation has occurred.",
    category: "Freight Visibility",
    date: "March 5, 2026",
    readTime: "15 min read",
    image: blogHero,
  },
  {
    slug: "reducing-empty-miles-european-freight",
    title: "How Real-Time Visibility Reduces Empty Miles in European Road Freight",
    excerpt: "Between 25 and 35 percent of all truck kilometres in Europe are driven empty. Learn how freight visibility platforms address this challenge through intelligent load matching.",
    category: "Freight Visibility",
    date: "Feb 28, 2026",
    readTime: "10 min read",
    image: relatedImg1,
  },
  {
    slug: "eta-prediction-accuracy-logistics",
    title: "ETA Prediction in Logistics: What Determines Accuracy and Why It Matters",
    excerpt: "Dynamic ETA prediction uses current position, traffic data, historical corridor performance, and tachograph rules to predict arrivals within a 15-minute window.",
    category: "Technology",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    image: relatedImg2,
  },
  {
    slug: "tms-integration-visibility-platforms",
    title: "Integrating Freight Visibility with Your TMS: A Practical Guide",
    excerpt: "Most shippers already operate a TMS or ERP. Learn how modern visibility platforms connect via REST API, EDI, and webhooks without replacing your existing systems.",
    category: "Technology",
    date: "Feb 15, 2026",
    readTime: "12 min read",
    image: contentImg1,
  },
  {
    slug: "geofencing-freight-milestones",
    title: "Geofencing and Automated Milestones: Eliminating Manual Status Updates",
    excerpt: "A well-designed geofence infrastructure reduces the manual event confirmation workload on both the carrier and the shipper operations team to near zero.",
    category: "Fleet Management",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    image: imgDock,
  },
  {
    slug: "csrd-carbon-reporting-freight",
    title: "How Freight Visibility Supports CSRD Carbon Reporting and ESG Compliance",
    excerpt: "The EU CSRD requires Scope 3 emissions reporting including transport. Freight visibility platforms provide actual distance data for accurate, auditable emissions figures.",
    category: "Industry Insights",
    date: "Feb 5, 2026",
    readTime: "9 min read",
    image: imgHighway,
  },
  {
    slug: "post-brexit-uk-eu-freight-challenges",
    title: "UK-EU Cross-Border Freight Post-Brexit: Visibility Challenges and Solutions",
    excerpt: "Delays at Dover, Folkestone, and Calais are unpredictable and have a material impact on delivery schedules. How visibility platforms provide early warning of border delays.",
    category: "Industry Insights",
    date: "Jan 28, 2026",
    readTime: "11 min read",
    image: relatedImg1,
  },
  {
    slug: "automotive-jit-freight-visibility",
    title: "Just-in-Time Automotive Supply Chains: Why 30-Minute Delivery Windows Need Real-Time Visibility",
    excerpt: "A supplier delivering engine components to a German OEM assembly line needs to arrive within a 30-minute window. If the truck is delayed, the assembly line stops.",
    category: "Supply Chain",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    image: relatedImg2,
  },
  {
    slug: "carrier-fragmentation-europe",
    title: "Carrier Fragmentation in European Freight: Why Visibility Is Harder Than It Looks",
    excerpt: "A shipper moving 500 loads per month across Central and Western Europe may work with 40 to 80 different carriers, each operating a different TMS or no TMS at all.",
    category: "Supply Chain",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    image: contentImg1,
  },
];

const ARTICLES_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  // Reset page when filters change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)]">
      <Navbar />

      {/* Hero with Search */}
      <div className="w-full h-[48vh] min-h-[360px] max-h-[480px] relative">
        <img src={heroImg} alt="TrucksOnTheMap Blog" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)] via-[hsl(220,20%,5%)]/70 to-[hsl(220,20%,5%)]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[12px] font-body font-normal tracking-[0.2em] uppercase text-[hsl(207,60%,60%)] mb-4">
            Blog & Insights
          </p>
          <h1 className="font-display font-extralight text-[hsl(0,0%,100%)] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.01em] mb-4 max-w-[700px]">
            Freight Visibility Intelligence
          </h1>
          <p className="text-[14px] font-body font-normal text-[hsl(210,15%,70%)] max-w-[520px] leading-[1.8] mb-8">
            Expert analysis on real-time tracking, ETA prediction, and operational efficiency in European road freight.
          </p>

          {/* Search bar */}
          <div className="relative w-full max-w-[480px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(0,0%,100%)]/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full bg-[hsl(0,0%,100%)]/10 backdrop-blur-md border border-[hsl(0,0%,100%)]/15 text-[13px] font-body font-normal text-[hsl(0,0%,100%)] placeholder:text-[hsl(0,0%,100%)]/40 focus:outline-none focus:border-[hsl(0,0%,100%)]/30 focus:bg-[hsl(0,0%,100%)]/15 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 py-6 border-b border-[hsl(220,12%,91%)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-[12px] font-body font-normal transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-[hsl(220,15%,96%)] text-[hsl(220,10%,40%)] hover:bg-[hsl(220,12%,91%)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8 py-12 pb-20">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[18px] font-display font-extralight text-[hsl(220,10%,45%)]">No articles found</p>
            <p className="text-[13px] font-body font-normal text-[hsl(220,10%,60%)] mt-2">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-[11px] font-body font-normal rounded-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)]">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[hsl(220,12%,80%)]" />
                  <span className="flex items-center gap-1 text-[11px] font-body font-normal text-[hsl(220,10%,55%)]">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-[16px] font-display font-light text-[hsl(220,20%,12%)] leading-[1.4] mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[13px] font-body font-normal text-[hsl(220,10%,50%)] leading-[1.7] line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-[12px] font-body font-medium text-primary group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden" ref={ctaRef}>
        <img src={bgCtaFinal} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[hsl(220,20%,7%)]/75" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-[hsl(0,0%,100%)]/40 font-body text-xs tracking-[0.25em] uppercase mb-4">
              Stay Ahead
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-[hsl(0,0%,100%)] mb-5 leading-tight">
              Ready to Transform Your Freight Operations?
            </h2>
            <p className="text-[hsl(0,0%,100%)]/50 font-body font-normal text-sm mb-10 leading-relaxed">
              See how TrucksOnTheMap delivers real-time visibility, dynamic ETA prediction, and load matching for European road freight.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ihaveaquestion@trucksonthemap.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-[hsl(0,0%,100%)] font-body font-normal text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                Get in Contact <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+442038078493"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[hsl(0,0%,100%)]/10 hover:bg-[hsl(0,0%,100%)]/15 backdrop-blur-sm text-[hsl(0,0%,100%)] font-body font-normal text-sm rounded-full border border-[hsl(0,0%,100%)]/15 transition-all duration-300"
              >
                +44 (20) 3807 84 93
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;