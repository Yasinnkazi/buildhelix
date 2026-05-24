import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop pt-32 md:pt-48 pb-16 md:pb-24 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-[-15%] left-[-8%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="space-y-5 relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] block"
        >
          Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl tracking-tighter leading-tight max-w-4xl"
        >
          Websites We've<br />
          <span className="text-primary-fixed-dim">Built & Delivered.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-body-md text-body-md text-on-surface-variant max-w-xl opacity-80 leading-relaxed"
        >
          Five live projects spanning restaurants, gyms, apparel brands,
          architecture studios, and our own studio presence. Each one built
          with care and attention to detail.
        </motion.p>
      </motion.div>
    </section>
  );
}
