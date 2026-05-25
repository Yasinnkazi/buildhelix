import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../../components/seo/SEO";
import { INSIGHTS, INSIGHT_CATEGORIES } from "../../data/insights";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? INSIGHTS.filter((a) => a.category === activeCategory)
    : INSIGHTS;

  return (
    <>
      <SEO
        title="Insights — Web Design & Digital Strategy"
        description="Expert insights on web design, local SEO, and digital strategy for businesses in Mumbai. Practical guides for restaurants, gyms, apparel brands, and startups."
        ogUrl="https://buildhelix.org/insights"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-32 md:py-48 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
              Insights
            </span>
            <h1 className="font-display-2xl text-display-2xl mb-6 max-w-3xl tracking-tighter leading-tight">
              Guides & perspectives on building <span className="text-primary-fixed-dim">digital brands.</span>
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
              Practical advice on web design, local SEO, and digital strategy for
              Mumbai businesses. No fluff — just actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all duration-300 ${
              activeCategory === null
                ? "bg-primary text-on-primary-container"
                : "border border-white/10 text-on-surface-variant/60 hover:bg-white/5"
            }`}
          >
            All
          </button>
          {INSIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-on-primary-container"
                  : "border border-white/10 text-on-surface-variant/60 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-8 md:py-16 pb-32 md:pb-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link
                to={`/insights/${article.slug}`}
                className="block p-6 rounded-2xl h-full transition-all duration-500 group"
                style={{
                  backdropFilter: "blur(24px)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-label-sm text-label-sm text-primary">{article.category}</span>
                  <span className="text-outline/40">·</span>
                  <span className="font-label-sm text-label-sm text-outline/40">{article.readTime}</span>
                </div>
                <h2 className="font-display-md text-display-md mb-3 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 mt-5 text-primary font-label-sm text-label-sm">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-body-md text-body-md text-on-surface-variant/60 text-center py-16">
            No articles in this category yet. Check back soon.
          </p>
        )}
      </section>
    </>
  );
}
