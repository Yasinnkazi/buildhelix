import { motion } from "framer-motion";

const industries = [
  "Fitness & Gym",
  "Restaurant & Hospitality",
  "Apparel & Printing",
  "Startups",
  "Architecture",
];

const tech = [
  "React",
  "TypeScript",
  "Node.js",
  "Framer Motion",
  "TailwindCSS",
];

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 p-6 md:p-8 rounded-2xl"
        style={{
          backdropFilter: "blur(16px)",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Industries
          </span>
          <div className="flex flex-wrap gap-2">
            {industries.map((item) => (
              <span
                key={item}
                className="font-label-sm text-label-sm text-outline/70 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Technology
          </span>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="font-label-sm text-label-sm text-outline/70 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
