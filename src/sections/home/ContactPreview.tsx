import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "919004556455";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello HELIX, I visited your website and would like to discuss a project."
);

export default function ContactPreview() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="max-w-7xl mx-auto rounded-xl p-10 md:p-32 text-center relative overflow-hidden group"
        style={{
          backdropFilter: "blur(24px)",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

        <p className="font-label-sm text-label-sm text-outline/60 mb-4 relative z-10">
          Projects starting from ₹15,000
        </p>
        <h2 className="font-display-2xl text-display-2xl mb-12 relative z-10 leading-tight">
          LET'S BUILD SOMETHING MODERN
        </h2>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <Link
            to="/contact"
            className="group flex items-center gap-4 text-primary font-display-lg text-display-lg hover:translate-x-4 transition-transform duration-500"
          >
            buildhelix@gmail.com
            <span className="material-symbols-outlined text-display-lg transition-transform duration-300 group-hover:translate-x-1">
              north_east
            </span>
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-label-md text-label-md transition-all duration-300"
            style={{
              backdropFilter: "blur(24px)",
              background: "var(--glass-bg, rgba(255,255,255,0.03))",
              border: "1px solid var(--glass-border, rgba(255,255,255,0.08))",
            }}
          >
            <svg viewBox="0 0 24 24" fill="var(--color-primary, #d0bcff)" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-on-surface-variant/80">WhatsApp</span>
          </a>
        </div>

        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-secondary-container/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </motion.div>
    </section>
  );
}
