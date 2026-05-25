import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary font-label-sm text-label-sm mb-5 uppercase tracking-widest"
        >
          What We Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl mb-6 leading-tight"
        >
          Modern Websites &<br />
          <span className="text-primary-fixed-dim">Brand Experiences.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed"
        >
          We build responsive websites, design brand identities, and help businesses
          establish a strong digital presence — from restaurants and gyms to apparel
          brands and creative studios across Mumbai, Navi Mumbai, and Thane.
        </motion.p>
      </motion.div>
    </section>
  );
}
