export default function MindsetGrid() {
  const items = [
    {
      icon: "alt_route",
      title: "Automation",
      description: "Eliminating human latency by building self-correcting logic into the core of every deployment.",
      tag: "01 / LOGIC DEPLOYMENT",
    },
    {
      icon: "hub",
      title: "Scalability",
      description: "Infrastructure that breathes. We design systems that expand laterally without compromising integrity.",
      tag: "02 / ELASTIC ARCHITECTURE",
      translate: true,
    },
    {
      icon: "dynamic_form",
      title: "Innovation",
      description: "Technical precision as a catalyst for creative breakthroughs. We solve the hard problems first.",
      tag: "03 / TECHNICAL FRONTIERS",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-48">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-lg text-white mb-4">Our Mindset</h2>
        <div className="h-px w-24 bg-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className={`p-10 rounded-lg flex flex-col justify-between group ${
              item.translate ? "md:translate-y-12" : ""
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
              <span className="material-symbols-outlined text-primary mb-8 text-4xl block">{item.icon}</span>
              <h3 className="font-display-lg text-display-lg text-white mb-4">{item.title}</h3>
              <p className="text-on-surface-variant font-body-md opacity-80 leading-relaxed">{item.description}</p>
            </div>
            <div className="mt-12 text-primary font-label-sm opacity-0 group-hover:opacity-100 transition-opacity">{item.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
