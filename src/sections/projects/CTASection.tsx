import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-32 md:py-48 px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="max-w-3xl mx-auto space-y-8 relative z-10"
      >
        <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter leading-tight">
          Want a Website<br />
          <span className="text-primary-fixed-dim">Like These?</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto leading-relaxed">
          We'd love to hear about your project. Whether you're a restaurant,
          gym, apparel brand, or local business — let's build something great together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="bg-primary text-on-primary-container px-8 py-4 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Project
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
          <Link
            to="/services"
            className="border border-outline-variant text-on-surface px-8 py-4 rounded-full backdrop-blur hover:bg-white/5 active:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
          >
            See Our Services
            <span className="material-symbols-outlined">expand_more</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
