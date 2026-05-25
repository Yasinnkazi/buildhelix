import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items, title, subtitle }: { items: FAQItem[]; title?: string; subtitle?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-48 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        {subtitle && (
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block mb-4">
            {subtitle}
          </span>
        )}
        <h2 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter max-w-3xl">
          {title || "Frequently Asked Questions"}
        </h2>
      </motion.div>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300"
              style={{
                backdropFilter: "blur(16px)",
                background: open === i ? "rgba(208, 188, 255, 0.05)" : "rgba(255, 255, 255, 0.02)",
                border: open === i ? "1px solid rgba(208, 188, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-display-md text-display-md">{item.q}</span>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ${open === i ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body-md text-body-md text-on-surface-variant/70 leading-relaxed pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
