import { motion } from "framer-motion";

export default function MindsetGrid() {
  const items = [
    {
      icon: "design_services",
      title: "Design First",
      description: "We believe great design is the foundation of any successful website. Every project starts with understanding your brand, your audience, and what makes you different.",
      tag: "01 / DESIGN PHILOSOPHY",
    },
    {
      icon: "code",
      title: "Clean Code",
      description: "We write modern, maintainable code using tools like React, Vite, and Tailwind CSS. Our focus is on performance, responsiveness, and reliability — not unnecessary complexity.",
      tag: "02 / TECHNICAL APPROACH",
      translate: true,
    },
    {
      icon: "handshake",
      title: "Client Focused",
      description: "We keep things straightforward. Clear communication, realistic timelines, and transparent pricing. No jargon, no fluff — just honest work that delivers results.",
      tag: "03 / HOW WE WORK",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-32 md:mb-48">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="font-headline-lg text-headline-lg mb-3">How We Think</h2>
        <div className="h-px w-20 bg-primary" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`p-8 md:p-10 rounded-lg flex flex-col justify-between group ${
              item.translate ? "md:translate-y-8" : ""
            }`}
            style={{
              backdropFilter: "blur(24px)",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)"; }}
          >
            <div>
              <span className="material-symbols-outlined text-primary mb-6 text-3xl md:text-4xl block">{item.icon}</span>
              <h3 className="font-display-lg text-display-lg mb-3">{item.title}</h3>
              <p className="text-on-surface-variant font-body-md opacity-80 leading-relaxed">{item.description}</p>
            </div>
            <div className="mt-8 md:mt-12 text-primary font-label-sm opacity-0 group-hover:opacity-100 transition-opacity">{item.tag}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
