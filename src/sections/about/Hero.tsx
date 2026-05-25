import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-24 md:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="grid md:grid-cols-12 gap-8 md:gap-gutter items-end"
      >
        <div className="md:col-span-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary font-label-sm text-label-sm mb-5 tracking-widest uppercase"
          >
            About HELIX
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display-2xl text-display-2xl md:text-[72px] leading-[0.95] mb-6"
          >
            A Small Studio<br /><span className="text-primary/80">with Big Ideas.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body-md md:font-body-lg text-body-md md:text-body-lg max-w-2xl text-on-surface-variant/80 leading-relaxed"
          >
            We're a small team focused on building modern websites and brand experiences
            for businesses that want to stand out. We work with restaurants, gyms, apparel
            brands, studios, and local businesses across Mumbai, Navi Mumbai, and Thane —
            helping them build a digital presence they can be proud of.
          </motion.p>
        </div>
        <div className="md:col-span-4 hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="p-8 rounded-lg aspect-square flex items-center justify-center relative group overflow-hidden"
            style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
          >
            <img
              className="w-full h-full object-contain opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="Abstract shape representing HELIX design philosophy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt-nKxypIZFp0bDcdI4EGraGqdPjzCdjN6N8FrMm1eOApu-UJ3KpmYt3sijFVn8-Rs0asmYFneb5pUeIwdKBRq3vPABFx-_NI1FpyDQlYBdazrNs4VDJlFOLRfAK_hPw0oCHY_s0BQkGAJ4zknzXa_JQ70XC9NMPSX1181TCLm1HqrFMHVEA7tVkdPHhlpvQeXqejc49gP_YuvyYrlfnhejqk6oVj0Kk-lvkgj-opedtJaOM9aOIEuW1CEg66JoYlvuKh4KCwAJ3-W"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
