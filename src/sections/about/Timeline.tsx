import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-32 md:mb-48 overflow-visible">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        <div className="md:w-1/3 md:sticky md:top-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display-lg text-display-lg mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-on-surface-variant font-body-md leading-relaxed"
          >
            From our first project to our fifth — here's how HELIX has grown.
          </motion.p>
        </div>
        <div className="md:w-2/3 space-y-10 md:space-y-12">
          {[
            { date: "2024 — BEGINNINGS", title: "First Projects", desc: "HELIX started as a small frontend-focused studio. Our early work focused on helping local businesses build modern websites that actually worked well on mobile devices.", active: true },
            { date: "2024 — GROWTH", title: "Expanding Our Portfolio", desc: "We began working with a wider range of clients — from restaurants and gyms to apparel brands and creative studios. Each project taught us something new about design, development, and how to better serve our clients.", active: false },
            { date: "2025 — ONWARD", title: "Refining Our Craft", desc: "Today we continue to focus on what we do best: building high-quality websites and brand experiences. We're selective about the projects we take on and committed to delivering work we're genuinely proud of.", active: false },
          ].map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative pl-10 md:pl-12 border-l border-white/10 pb-10 md:pb-12 last:pb-0"
            >
              <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full ${e.active ? "bg-primary shadow-[0_0_8px_#d0bcff]" : "bg-surface-variant"}`} />
              <span className={`font-label-md ${e.active ? "text-primary" : "text-on-surface-variant/60"} mb-1 block`}>{e.date}</span>
              <h4 className="font-headline-lg text-headline-lg mb-3">{e.title}</h4>
              <p className="text-on-surface-variant font-body-md leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
