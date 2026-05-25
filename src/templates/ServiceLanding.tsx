import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import FAQ from "../sections/shared/FAQ";
import MockupUI from "../components/ui/MockupUI";
import { PROJECTS } from "../data/projects";
import { LANDING_FAQ } from "../data/landingPages";
import { INSIGHTS } from "../data/insights";
import type { LandingPageContent } from "../data/landingPages";

const WHATSAPP_NUMBER = "919004556455";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello HELIX, I visited your website and would like to discuss a project."
);

export default function ServiceLanding({ content }: { content: LandingPageContent }) {
  const relatedProject = PROJECTS.find((p) => p.id === content.projectLinkId);

  return (
    <>
      <SEO
        title={content.metaTitle}
        description={content.metaDescription}
        ogUrl={content.ogUrl}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center py-32 md:py-48 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
              {content.subtitle}
            </span>
            <h1 className="font-display-2xl text-display-2xl mb-6 max-w-4xl tracking-tighter leading-tight">
              {content.h1}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed mb-10">
              {content.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-on-primary-container px-6 py-3 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>{content.ctaText}</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">arrow_forward</span>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
              >
                <span>Chat on WhatsApp</span>
                <svg viewBox="0 0 24 24" fill="var(--color-primary, #d0bcff)" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {content.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display-lg text-display-lg md:text-[40px] tracking-tighter text-primary-fixed-dim leading-none">
                {stat.value}
              </div>
              <div className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 md:py-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
            What We Build
          </span>
          <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter max-w-3xl">
            Everything your <span className="text-primary-fixed-dim">{content.targetIndustry}</span> brand needs.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {content.offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl transition-all duration-500 group"
              style={{
                backdropFilter: "blur(24px)",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-lg">check</span>
              </div>
              <h3 className="font-display-md text-display-md mb-3">{item.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose / Benefits */}
      <section className="relative py-24 md:py-48 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-secondary-container/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
              Why HELIX
            </span>
            <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter max-w-3xl">
              Built for <span className="text-primary-fixed-dim">real results.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {content.benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className="font-display-lg text-display-lg text-primary/20 tracking-tighter block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display-md text-display-md mb-3">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
            Our Process
          </span>
          <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter max-w-3xl">
            From brief to <span className="text-primary-fixed-dim">launch.</span>
          </h2>
        </motion.div>
        <div className="space-y-8 md:space-y-12">
          {content.processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col md:flex-row gap-4 md:gap-12"
            >
              <span className="font-display-lg text-display-lg text-primary/20 tracking-tighter shrink-0 w-16">
                {step.step}
              </span>
              <div className="flex-1 pb-8 md:pb-12 border-b border-outline-variant/10">
                <h3 className="font-display-md text-display-md mb-3">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {LANDING_FAQ[content.slug] && (
        <FAQ
          items={LANDING_FAQ[content.slug]}
          subtitle="Common Questions"
          title={`${content.targetIndustry} website questions, answered.`}
        />
      )}

      {/* Related Insights */}
      {(() => {
        const related = INSIGHTS.filter(
          (a) => a.slug !== content.slug && a.category !== content.targetIndustry
        ).slice(0, 2);
        if (related.length === 0) return null;
        return (
          <section className="py-24 md:py-32 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
                Learn More
              </span>
              <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter">
                Related insights
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/insights/${article.slug}`}
                    className="block p-6 md:p-8 rounded-2xl transition-all duration-300 h-full"
                    style={{
                      backdropFilter: "blur(24px)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span className="font-label-sm text-label-sm text-primary/60 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3 className="font-display-md text-display-md mt-2 mb-2">{article.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary mt-4">
                      Read more
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* Case Study Reference */}
      {relatedProject && (
        <section className="py-24 md:py-32 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl overflow-hidden relative"
            style={{
              backdropFilter: "blur(24px)",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-2">
                  Related Project
                </span>
                <h3 className="font-display-lg text-display-lg md:text-[44px] tracking-tight leading-tight mb-3">
                  {relatedProject.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant/80 mb-2">
                  {relatedProject.tagline}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant/60 leading-relaxed mb-6">
                  {content.projectCta}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/projects#case-study-${relatedProject.id}`}
                    className="flex items-center gap-2 bg-primary text-on-primary-container px-5 py-3 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <a
                    href={relatedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/10 px-5 py-3 rounded-full font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
              <div className="md:w-80 lg:w-96 h-48 md:h-auto relative overflow-hidden">
                <MockupUI variant={relatedProject.id as any} />
                <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-background/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-48 px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display-2xl text-display-2xl mb-6 tracking-tighter leading-tight">
              READY TO START?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant/70 max-w-lg mx-auto mb-2 leading-relaxed">
              Tell us about your project. We'll respond within 24 hours with a
              clear timeline and estimate.
            </p>
            <p className="font-label-sm text-label-sm text-outline/60 mb-10">
              Projects starting from ₹15,000
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-on-primary-container px-8 py-4 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>Get a Free Quote</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">arrow_forward</span>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-white/10 px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
              >
                <span>Quick Question? WhatsApp Us</span>
                <svg viewBox="0 0 24 24" fill="var(--color-primary, #d0bcff)" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
