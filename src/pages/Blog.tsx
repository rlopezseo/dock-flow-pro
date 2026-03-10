import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/blog/blog-listing-hero.jpg";
import authorAvatar from "@/assets/blog/author-avatar.jpg";
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
    featured: true,
  },
  {
    slug: "reducing-empty-miles-european-freight",
    title: "How Real-Time Visibility Reduces Empty Miles in European Road Freight",
    excerpt: "Between 25 and 35 percent of all truck kilometres in Europe are driven empty. Learn how freight visibility platforms address this challenge through intelligent load matching.",
    category: "Freight Visibility",
    date: "Feb 28, 2026",
    readTime: "10 min read",
    image: relatedImg1,
    featured: false,
  },
  {
    slug: "eta-prediction-accuracy-logistics",
    title: "ETA Prediction in Logistics: What Determines Accuracy and Why It Matters",
    excerpt: "Dynamic ETA prediction uses current position, traffic data, historical corridor performance, and tachograph rules to predict arrivals within a 15-minute window.",
    category: "Technology",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    image: relatedImg2,
    featured: false,
  },
  {
    slug: "tms-integration-visibility-platforms",
    title: "Integrating Freight Visibility with Your TMS: A Practical Guide",
    excerpt: "Most shippers already operate a TMS or ERP. Learn how modern visibility platforms connect via REST API, EDI, and webhooks without replacing your existing systems.",
    category: "Technology",
    date: "Feb 15, 2026",
    readTime: "12 min read",
    image: contentImg1,
    featured: false,
  },
  {
    slug: "geofencing-freight-milestones",
    title: "Geofencing and Automated Milestones: Eliminating Manual Status Updates",
    excerpt: "A well-designed geofence infrastructure reduces the manual event confirmation workload on both the carrier and the shipper operations team to near zero.",
    category: "Fleet Management",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    image: imgDock,
    featured: false,
  },
  {
    slug: "csrd-carbon-reporting-freight",
    title: "How Freight Visibility Supports CSRD Carbon Reporting and ESG Compliance",
    excerpt: "The EU CSRD requires Scope 3 emissions reporting including transport. Freight visibility platforms provide actual distance data for accurate, auditable emissions figures.",
    category: "Industry Insights",
    date: "Feb 5, 2026",
    readTime: "9 min read",
    image: imgHighway,
    featured: false,
  },
  {
    slug: "post-brexit-uk-eu-freight-challenges",
    title: "UK-EU Cross-Border Freight Post-Brexit: Visibility Challenges and Solutions",
    excerpt: "Delays at Dover, Folkestone, and Calais are unpredictable and have a material impact on delivery schedules. How visibility platforms provide early warning of border delays.",
    category: "Industry Insights",
    date: "Jan 28, 2026",
    readTime: "11 min read",
    image: relatedImg1,
    featured: false,
  },
  {
    slug: "automotive-jit-freight-visibility",
    title: "Just-in-Time Automotive Supply Chains: Why 30-Minute Delivery Windows Need Real-Time Visibility",
    excerpt: "A supplier delivering engine components to a German OEM assembly line needs to arrive within a 30-minute window. If the truck is delayed, the assembly line stops.",
    category: "Supply Chain",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    image: relatedImg2,
    featured: false,
  },
  {
    slug: "carrier-fragmentation-europe",
    title: "Carrier Fragmentation in European Freight: Why Visibility Is Harder Than It Looks",
    excerpt: "A shipper moving 500 loads per month across Central and Western Europe may work with 40 to 80 different carriers, each operating a different TMS or no TMS at all.",
    category: "Supply Chain",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    image: contentImg1,
    featured: false,
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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

  const featuredArticle = articles.find((a) => a.featured);
  const gridArticles = filteredArticles.filter((a) => !a.featured || activeCategory !== "All" || searchQuery !== "");

  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)]">
      <Navbar />

      {/* Hero */}
      <div className="w-full h-[42vh] min-h-[300px] max-h-[420px] relative">
        <img src={heroImg} alt="TrucksOnTheMap Blog" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)] via-[hsl(220,20%,5%)]/70 to-[hsl(220,20%,5%)]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[12px] font-body font-normal tracking-[0.2em] uppercase text-[hsl(207,60%,60%)] mb-4">
            Blog & Insights
          </p>
          <h1 className="font-display font-extralight text-[hsl(0,0%,100%)] text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.01em] mb-4 max-w-[700px]">
            Freight Visibility Intelligence
          </h1>
          <p className="text-[14px] font-body font-normal text-[hsl(210,15%,70%)] max-w-[520px] leading-[1.8]">
            Expert analysis on real-time tracking, ETA prediction, and operational efficiency in European road freight.
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 py-8 border-b border-[hsl(220,12%,91%)]">
          {/* Search */}
          <div className="relative w-full md:w-[320px] shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(220,10%,55%)]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[hsl(220,12%,88%)] bg-[hsl(0,0%,100%)] text-[13px] font-body font-normal text-[hsl(220,20%,15%)] placeholder:text-[hsl(220,10%,60%)] focus:outline-none focus:border-[hsl(207,60%,30%)] focus:ring-1 focus:ring-[hsl(207,60%,30%)] transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[12px] font-body font-normal transition-all ${
                  activeCategory === cat
                    ? "bg-[hsl(207,60%,30%)] text-[hsl(0,0%,100%)]"
                    : "bg-[hsl(220,15%,96%)] text-[hsl(220,10%,40%)] hover:bg-[hsl(220,12%,91%)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article — only when no filter/search active */}
      {activeCategory === "All" && searchQuery === "" && featuredArticle && (
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-8 pt-12">
          <Link
            to={`/blog/${featuredArticle.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-[280px] lg:h-[360px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[hsl(207,60%,30%)] text-[hsl(0,0%,100%)] text-[11px] font-body font-medium rounded-sm uppercase tracking-[0.05em]">
                Featured
              </span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[hsl(220,15%,96%)] text-[hsl(207,60%,30%)] text-[11px] font-body font-medium rounded-sm mb-4 uppercase tracking-[0.05em]">
                {featuredArticle.category}
              </span>
              <h2 className="font-display font-extralight text-[hsl(220,20%,12%)] text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.01em] mb-4 group-hover:text-[hsl(207,60%,30%)] transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-[14px] font-body font-normal text-[hsl(220,10%,45%)] leading-[1.9] mb-6 line-clamp-3">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2.5">
                  <img src={authorAvatar} alt="Tamas Domonkos" className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-[12px] font-body font-medium text-[hsl(220,20%,15%)]">Tamas Domonkos</span>
                </div>
                <span className="text-[12px] font-body font-normal text-[hsl(220,10%,55%)]">{featuredArticle.date}</span>
                <span className="flex items-center gap-1 text-[12px] font-body font-normal text-[hsl(220,10%,55%)]">
                  <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Article Grid */}
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8 py-12 pb-20">
        {gridArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[18px] font-display font-extralight text-[hsl(220,10%,45%)]">No articles found</p>
            <p className="text-[13px] font-body font-normal text-[hsl(220,10%,60%)] mt-2">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article) => (
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
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-[hsl(220,20%,12%)] text-[hsl(0,0%,100%)] text-[11px] font-body font-normal rounded-sm">
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
                <h3 className="text-[16px] font-display font-light text-[hsl(220,20%,12%)] leading-[1.4] mb-2 group-hover:text-[hsl(207,60%,30%)] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[13px] font-body font-normal text-[hsl(220,10%,50%)] leading-[1.7] line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-[12px] font-body font-medium text-[hsl(207,60%,30%)] group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <section className="border-t border-[hsl(220,12%,91%)] bg-[hsl(220,15%,97%)]">
        <div className="container max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="font-display font-extralight text-[hsl(220,20%,12%)] text-[28px] mb-3">Stay informed</h2>
          <p className="text-[13px] font-body font-normal text-[hsl(220,10%,50%)] leading-[1.8] mb-8">
            Get the latest insights on freight visibility, ETA prediction, and European logistics operations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full border border-[hsl(220,12%,88%)] bg-[hsl(0,0%,100%)] text-[13px] font-body font-normal text-[hsl(220,20%,15%)] placeholder:text-[hsl(220,10%,60%)] focus:outline-none focus:border-[hsl(207,60%,30%)] focus:ring-1 focus:ring-[hsl(207,60%,30%)] transition-colors"
            />
            <button className="px-7 py-3 bg-[hsl(207,60%,30%)] text-[hsl(0,0%,100%)] text-[13px] font-body font-normal rounded-full hover:bg-[hsl(207,60%,35%)] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
