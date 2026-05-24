const STEPS = [
  { icon: "search", label: "Discover", description: "Deep dive into goals.", primary: true },
  { icon: "pen_size_2", label: "Design", description: "High-fidelity vision.", primary: false },
  { icon: "code", label: "Build", description: "Pixel-perfect code.", primary: true },
  { icon: "bolt", label: "Optimize", description: "Speed & Performance.", primary: false },
  { icon: "rocket_launch", label: "Scale", description: "Future-proof growth.", primary: true },
];

export default function Process() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <div className="mb-24">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">OUR PROCESS</h2>
        <div className="w-24 h-1 bg-primary" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 z-0">
          <div className="glow-line" id="timeline-glow" />
        </div>

        {STEPS.map((step) => (
          <div key={step.label} className="relative z-10 flex flex-col items-center text-center group">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${
                step.primary ? "border-primary/20" : ""
              }`}
              style={{
                backdropFilter: "blur(24px)",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span className={`material-symbols-outlined ${step.primary ? "text-primary" : "text-on-surface"}`}>
                {step.icon}
              </span>
            </div>
            <h3 className={`font-label-md text-label-md mb-2 uppercase tracking-widest ${step.primary ? "text-primary" : "text-on-surface"}`}>
              {step.label}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-60">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
