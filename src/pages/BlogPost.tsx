import { Link } from "react-router-dom";
import { Clock, Calendar, User, ChevronRight, ArrowLeft, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo-trucksonthemap.png";
import heroImg from "@/assets/blog/blog-hero-service.jpg";
import contentImg1 from "@/assets/blog/blog-content-1.jpg";
import contentImg2 from "@/assets/blog/blog-content-2.jpg";
import authorAvatar from "@/assets/blog/author-avatar.jpg";
import relatedImg1 from "@/assets/blog/blog-related-1.jpg";
import relatedImg2 from "@/assets/blog/blog-related-2.jpg";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)]">
      <Navbar />

      {/* Hero image — full width */}
      <div className="w-full h-[60vh] min-h-[400px] max-h-[600px] relative mt-[100px]">
        <img
          src={heroImg}
          alt="Providing better service for customers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content area */}
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 pt-12 pb-20">

          {/* ============ LEFT COLUMN — Article ============ */}
          <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] font-body font-normal text-[hsl(220,10%,55%)] mb-6">
              <Link to="/blog" className="hover:text-[hsl(207,60%,30%)] transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-[hsl(207,60%,30%)] transition-colors">Supply Chain</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[hsl(220,15%,35%)]">Transport</span>
            </nav>

            {/* Title */}
            <h1 className="font-display font-extralight text-[hsl(220,20%,12%)] text-[36px] md:text-[44px] leading-[1.15] tracking-[-0.01em] mb-8">
              Providing better service for customers
            </h1>

            {/* Author / Date / Reading Time bar */}
            <div className="flex flex-wrap items-center gap-6 pb-8 mb-10 border-b border-[hsl(220,12%,91%)]">
              <div className="flex items-center gap-3">
                <img src={authorAvatar} alt="Ingrid Vulk" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-[13px] font-body font-medium text-[hsl(220,20%,15%)]">Ingrid Vulk</p>
                  <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)]">Logistics Editor</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-body font-normal text-[hsl(220,10%,55%)]">
                <Calendar className="w-3.5 h-3.5" />
                March 5, 2026
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-body font-normal text-[hsl(220,10%,55%)]">
                <Clock className="w-3.5 h-3.5" />
                8 min read
              </div>
            </div>

            {/* Article body */}
            <div className="prose-custom">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget massa hendrerit vulputate. Ut finibus porttitor tellus, id fermentum nulla vehicula in. Maecenas condimentum nisl sit amet ligula auctor, in fringilla eros dignissim. Aenean bibendum lacinia libero, vitae pretium lorem venenatis id. Cras porttitor pretium tellus, vitae ullamcorper ante egestas at. Fusce commodo sapien a ipsum faucibus, a sollicitudin arcu aliquam.
              </p>

              <blockquote>
                "Organized work, positive results, and proper team coordination are what turn a simple delivery into a customer success story. Every transaction is a chance to build trust."
              </blockquote>

              <p>
                Vivamus eget faucibus mi. In vitae lacinia odio. Fusce rhoncus erat at accumsan molestie. Proin facilisis dictum eros, vel consequat ligula accumsan eu. Sed tincidunt consequat lacus, vel consectetur ante pellentesque vel. Integer hendrerit eros eu urna aliquet, at aliquam turpis viverra. Phasellus pretium velit quis erat porttitor, sit amet tincidunt ipsum congue.
              </p>

              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
              </p>

              <img src={contentImg1} alt="Logistics conference room discussion" className="w-full rounded-sm my-8" />

              <p className="text-[11px] text-[hsl(220,10%,55%)] -mt-4 mb-8 font-body font-normal italic">
                Supply chain professionals collaborating on new optimization strategies.
              </p>

              <h2>Conference for new design</h2>

              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
              </p>

              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div>
                  <img src={contentImg2} alt="Warehouse digital monitoring" className="w-full rounded-sm" />
                  <p className="text-[11px] text-[hsl(220,10%,55%)] mt-2 font-body font-normal italic">Warehouse digital monitoring in action.</p>
                </div>
                <div>
                  <img src={contentImg1} alt="Team strategy session" className="w-full rounded-sm" />
                  <p className="text-[11px] text-[hsl(220,10%,55%)] mt-2 font-body font-normal italic">Collaborative strategy sessions drive results.</p>
                </div>
              </div>

              <p>
                Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              </p>

              <h2>Final thoughts and something more</h2>

              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.
              </p>

              <p>
                Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.
              </p>
            </div>

            {/* Tags + Share */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-10 border-t border-[hsl(220,12%,91%)]">
              <div className="flex flex-wrap gap-2">
                {["Logistics", "Customer Service", "Delivery"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-[11px] font-body font-normal text-[hsl(220,10%,45%)] bg-[hsl(220,12%,95%)] rounded-sm hover:bg-[hsl(220,12%,90%)] transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)]">Share ▸</span>
            </div>

            {/* Author bio box */}
            <div className="mt-10 p-8 bg-[hsl(220,15%,96%)] rounded-sm">
              <div className="flex items-start gap-5">
                <img src={authorAvatar} alt="Ingrid Vulk" className="w-20 h-20 rounded-full object-cover shrink-0" />
                <div>
                  <p className="text-[15px] font-display font-light text-[hsl(220,20%,15%)] mb-1">Ingrid Vulk</p>
                  <p className="text-[12px] font-body font-normal text-[hsl(220,10%,55%)] leading-[1.8]">
                    Logistics editor and supply chain analyst with over 10 years of experience in European freight and transport operations. Passionate about technology-driven efficiency in modern logistics.
                  </p>
                </div>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-[hsl(220,12%,91%)]">
              <Link to="/blog" className="flex items-center gap-2 text-[13px] font-body font-normal text-[hsl(220,10%,45%)] hover:text-[hsl(207,60%,30%)] transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Post
              </Link>
              <Link to="/blog" className="flex items-center gap-2 text-[13px] font-body font-normal text-[hsl(220,10%,45%)] hover:text-[hsl(207,60%,30%)] transition-colors">
                Next Post <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* ============ RIGHT COLUMN — Sidebar ============ */}
          <aside className="lg:pt-0">
            {/* Search */}
            <div className="relative mb-10">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-[hsl(220,12%,88%)] bg-[hsl(0,0%,100%)] text-[13px] font-body font-normal text-[hsl(220,20%,15%)] px-4 py-3 pr-10 rounded-sm focus:outline-none focus:border-[hsl(207,60%,30%)] transition-colors"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(220,10%,60%)]" />
            </div>

            {/* Categories */}
            <div className="mb-10">
              <h3 className="text-[13px] font-display font-light tracking-[0.15em] uppercase text-[hsl(220,20%,15%)] mb-5">Categories</h3>
              <ul className="space-y-3">
                {["Supply Chain", "Fleet Management", "Dock Scheduling", "Freight Visibility", "Industry News"].map(cat => (
                  <li key={cat}>
                    <Link to="/blog" className="text-[13px] font-body font-normal text-[hsl(220,10%,45%)] hover:text-[hsl(207,60%,30%)] transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="mb-10">
              <h3 className="text-[13px] font-display font-light tracking-[0.15em] uppercase text-[hsl(220,20%,15%)] mb-5">Latest Posts</h3>
              <div className="space-y-5">
                {[
                  { img: relatedImg1, title: "Embracing new fleet technologies", date: "Feb 28, 2026" },
                  { img: relatedImg2, title: "Logistics tools that transform the world", date: "Feb 15, 2026" },
                  { img: contentImg1, title: "Don't miss a plan milestone", date: "Jan 30, 2026" },
                ].map((post, i) => (
                  <Link to="/blog" key={i} className="flex gap-4 group">
                    <img src={post.img} alt={post.title} className="w-[70px] h-[70px] object-cover rounded-sm shrink-0" />
                    <div>
                      <p className="text-[12.5px] font-body font-normal text-[hsl(220,20%,15%)] leading-[1.5] group-hover:text-[hsl(207,60%,30%)] transition-colors">{post.title}</p>
                      <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)] mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ===== CTA Sidebar — TrucksOnTheMap ===== */}
            <div className="bg-[hsl(207,30%,12%)] rounded-sm p-8 text-center">
              <img src={logo} alt="TrucksOnTheMap" className="h-7 mx-auto mb-5" />
              <p className="text-[20px] font-display font-extralight text-[hsl(0,0%,100%)] leading-[1.3] mb-3">
                Take control of your freight operations
              </p>
              <p className="text-[12px] font-body font-normal text-[hsl(210,15%,65%)] leading-[1.7] mb-6">
                Real-time visibility, dock scheduling, and predictive ETAs in one single platform built for European logistics.
              </p>
              <a
                href="#contact"
                className="inline-block w-full px-6 py-3 bg-[hsl(207,60%,30%)] text-[hsl(0,0%,100%)] text-[13px] font-body font-normal rounded-full hover:bg-[hsl(207,60%,35%)] transition-colors mb-3"
              >
                Request a Demo
              </a>
              <a
                href="#contact"
                className="inline-block w-full px-6 py-3 border border-[hsl(0,0%,100%,0.2)] text-[hsl(0,0%,100%)] text-[13px] font-body font-normal rounded-full hover:bg-[hsl(0,0%,100%,0.05)] transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Tags cloud */}
            <div className="mt-10">
              <h3 className="text-[13px] font-display font-light tracking-[0.15em] uppercase text-[hsl(220,20%,15%)] mb-5">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["Logistics", "Transport", "Tracking", "Fleet", "Visibility", "Scheduling", "ETA", "Freight"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-[11px] font-body font-normal text-[hsl(220,10%,45%)] border border-[hsl(220,12%,88%)] rounded-sm hover:border-[hsl(207,60%,30%)] hover:text-[hsl(207,60%,30%)] transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ============ "You may also like" Section ============ */}
      <section className="border-t border-[hsl(220,12%,91%)] bg-[hsl(0,0%,100%)]">
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-[28px] font-display font-extralight text-[hsl(220,20%,12%)] mb-10">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related post 1 */}
            <Link to="/blog" className="group">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img src={relatedImg1} alt="Fleet management innovations" className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-[hsl(220,20%,12%)] text-[hsl(0,0%,100%)] text-[11px] font-body font-normal rounded-sm">
                  Fleet Management
                </span>
              </div>
              <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)] mb-2">March 1, 2026</p>
              <p className="text-[17px] font-display font-light text-[hsl(220,20%,12%)] group-hover:text-[hsl(207,60%,30%)] transition-colors">
                Innovative ideas for small businesses
              </p>
            </Link>

            {/* Related post 2 — with quote style */}
            <Link to="/blog" className="group">
              <div className="relative overflow-hidden rounded-sm mb-4 bg-[hsl(207,60%,30%)] p-8 h-[240px] flex flex-col justify-center">
                <span className="text-[60px] leading-none text-[hsl(0,0%,100%,0.2)] font-display font-extralight absolute top-4 right-6">"</span>
                <p className="text-[10px] font-body font-normal text-[hsl(0,0%,100%,0.6)] uppercase tracking-[0.15em] mb-3">What Experts Forecast</p>
                <p className="text-[18px] font-display font-extralight text-[hsl(0,0%,100%)] leading-[1.4]">
                  Sed ut Perspiciatis unde Omnis Iste piciatis unde
                </p>
                <p className="text-[12px] font-body font-normal text-[hsl(0,0%,100%,0.6)] mt-3">by Ingrid Vulk</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Article styles */}
      <style>{`
        .prose-custom p {
          font-family: 'Roboto', system-ui, sans-serif;
          font-weight: 400;
          font-size: 14.5px;
          line-height: 2;
          color: hsl(220, 10%, 35%);
          margin-bottom: 1.5em;
          letter-spacing: 0.01em;
        }
        .prose-custom h2 {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 200;
          font-size: 26px;
          color: hsl(220, 20%, 12%);
          margin-top: 2.5em;
          margin-bottom: 1em;
          line-height: 1.25;
        }
        .prose-custom blockquote {
          border-left: 3px solid hsl(207, 60%, 30%);
          padding: 1em 0 1em 1.5em;
          margin: 2em 0;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 200;
          font-size: 18px;
          line-height: 1.7;
          color: hsl(220, 15%, 25%);
          font-style: italic;
        }
        .prose-custom img {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
