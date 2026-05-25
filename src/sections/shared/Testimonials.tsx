import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  attribution: string;
  role: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The attention to detail in both design and development was impressive. Every interaction feels intentional, and the mobile experience is genuinely better than what we've seen from larger agencies.",
    attribution: "Brand Lead",
    role: "Apparel & Lifestyle",
    project: "ThreadForge",
  },
  {
    quote: "What stood out was how seamlessly the design process translated into the final build. The team understood our hospitality brand from day one and translated that into a digital experience that feels premium without being overwhelming.",
    attribution: "Operations Director",
    role: "Restaurant & Hospitality",
    project: "Aura",
  },
  {
    quote: "We needed a site that communicated performance before a visitor even read a word. The motion design and pacing delivered exactly that — clean, confident, and completely mobile-first.",
    attribution: "Founder",
    role: "Fitness & Coaching",
    project: "APEX",
  },
  {
    quote: "Clear communication throughout, realistic timelines, and a final product that punches above its weight. Exactly what an early-stage brand needs to establish credibility online.",
    attribution: "Studio Principal",
    role: "Creative Agency",
    project: "Brand Platform",
  },
  {
    quote: "The architecture portfolio they built for us balances minimalism with enough texture to keep visitors engaged. Spatial design is hard to communicate digitally, but the layout and pacing made it effortless.",
    attribution: "Design Director",
    role: "Architecture & Interiors",
    project: "Form + Space",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
          Client Feedback
        </span>
        <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter max-w-3xl">
          What partners say about working with us.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-6 md:p-8 rounded-2xl flex flex-col transition-all duration-500 group"
            style={{
              backdropFilter: "blur(24px)",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <blockquote className="flex-1">
              <p className="font-body-md text-body-md text-on-surface-variant/90 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-6 pt-4 border-t border-outline-variant/10 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(208, 188, 255, 0.1)",
                  border: "1px solid rgba(208, 188, 255, 0.15)",
                }}
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-primary text-lg">
                  format_quote
                </span>
              </div>
              <div className="min-w-0">
                <cite className="font-label-md text-label-md text-on-surface block not-italic truncate">
                  {t.attribution}
                </cite>
                <span className="font-label-sm text-label-sm text-outline/60 block truncate">
                  {t.role} &middot; {t.project}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
