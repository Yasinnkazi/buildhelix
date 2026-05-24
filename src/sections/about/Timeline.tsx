export default function Timeline() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-48 overflow-visible">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3 sticky top-32">
          <h2 className="font-display-lg text-display-lg text-white mb-6">Helix Evolution</h2>
          <p className="text-on-surface-variant">Trace our trajectory from a specialized infrastructure firm to a global leader in high-performance digital systems.</p>
        </div>
        <div className="md:w-2/3 space-y-12">
          {[
            { date: "2020 — GENESIS", title: "The Proto-Engine", desc: "HELIX was founded on a single premise: existing cloud frameworks were too fragile. We launched with a proprietary kernel for high-load fintech applications.", active: true },
            { date: "2022 — EXPANSION", title: "Universal Infrastructure", desc: "Migration from fintech to a multi-sector platform. Our systems began powering autonomous logistics and decentralized computation networks.", active: false },
            { date: "2024 — THE HORIZON", title: "Self-Learning Fabrics", desc: "Integration of large-scale predictive models into the infrastructure core, enabling pre-emptive resource allocation and zero-downtime evolution.", active: false },
          ].map((e) => (
            <div key={e.title} className="relative pl-12 border-l border-white/10 pb-12 last:pb-0">
              <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full ${e.active ? "bg-primary shadow-[0_0_10px_#d0bcff]" : "bg-surface-variant"}`} />
              <span className={`font-label-md ${e.active ? "text-primary" : "text-on-surface-variant/60"} mb-2 block`}>{e.date}</span>
              <h4 className="font-headline-lg text-headline-lg text-white mb-4">{e.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
