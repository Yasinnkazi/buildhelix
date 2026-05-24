import { motion } from "framer-motion";

const stats = [
  { value: "5", suffix: "", label: "Projects Delivered" },
  { value: "4", suffix: "+", label: "Industries Served" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
  { value: "24/7", suffix: "", label: "Support" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center group"
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="font-display-2xl text-display-2xl tracking-tighter text-primary-fixed-dim leading-none transition-all duration-500 group-hover:text-primary group-hover:drop-shadow-[0_0_12px_var(--color-primary)]">
              {stat.value}
              <span className="text-display-lg text-primary/50">{stat.suffix}</span>
            </div>
            <div className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
