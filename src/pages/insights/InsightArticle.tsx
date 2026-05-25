import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import { INSIGHTS } from "../../data/insights";

const WHATSAPP_NUMBER = "919004556455";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello HELIX, I read your article and would like to discuss a project."
);

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-margin-mobile gap-6">
        <h1 className="font-display-lg text-display-lg">Article not found</h1>
        <Link to="/insights" className="text-primary font-label-md text-label-md hover:underline">
          Back to Insights
        </Link>
      </div>
    );
  }

  const related = INSIGHTS.filter((a) => article.relatedSlugs.includes(a.slug));

  return (
    <>
      <SEO
        title={`${article.title} — Insights`}
        description={article.description}
        ogUrl={`https://buildhelix.org/insights/${article.slug}`}
      />

      <article className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-label-sm text-label-sm text-primary">{article.category}</span>
            <span className="text-outline/40">·</span>
            <span className="font-label-sm text-label-sm text-outline/40">{article.readTime}</span>
            <span className="text-outline/40">·</span>
            <span className="font-label-sm text-label-sm text-outline/40">{article.publishedAt}</span>
          </div>
          <h1 className="font-display-2xl text-display-2xl mb-6 tracking-tighter leading-tight">
            {article.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant/70 max-w-2xl leading-relaxed mb-12">
            {article.description}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          {article.content.map((paragraph, i) => (
            <p
              key={i}
              className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 md:p-12 rounded-2xl"
          style={{
            backdropFilter: "blur(24px)",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <h2 className="font-display-lg text-display-lg mb-4">Ready to build your website?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant/70 mb-6 leading-relaxed">
            We help Mumbai businesses build modern websites that attract customers and drive growth.
            Get in touch for a free consultation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-primary text-on-primary-container px-5 py-3 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <span>Get a Free Quote</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-full font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
            >
              <span>Chat on WhatsApp</span>
              <svg viewBox="0 0 24 24" fill="var(--color-primary, #d0bcff)" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display-lg text-display-lg mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/insights/${r.slug}`}
                  className="p-6 rounded-2xl transition-all duration-500 group"
                  style={{
                    backdropFilter: "blur(24px)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span className="font-label-sm text-label-sm text-primary block mb-2">{r.category}</span>
                  <h3 className="font-display-md text-display-md mb-2 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed line-clamp-2">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
