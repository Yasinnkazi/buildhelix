import { useEffect, useRef } from "react";

const STEPS = [
  { icon: "search", label: "Discover", description: "Deep dive into goals." },
  { icon: "pen_size_2", label: "Design", description: "High-fidelity vision." },
  { icon: "code", label: "Build", description: "Pixel-perfect code." },
  { icon: "bolt", label: "Optimize", description: "Speed & Performance." },
  { icon: "rocket_launch", label: "Scale", description: "Future-proof growth." },
];

export default function Process() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let progress = 0;
    let rafId: number;
    const animate = () => {
      progress += 0.2;
      if (progress > 100) progress = -20;
      el.style.background = `linear-gradient(90deg, transparent, var(--color-primary, #d0bcff) ${progress}%, transparent ${progress + 20}%)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <h2 className="font-headline-lg text-headline-lg mb-4">OUR PROCESS</h2>
        <div className="w-24 h-1 bg-primary" />
      </div>

      {/* Desktop grid */}
      <div className="relative hidden md:grid md:grid-cols-5 gap-8">
        {/* Centered connector line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 z-0 pointer-events-none overflow-hidden">
          <div ref={glowRef} className="w-full h-full" />
        </div>

        {STEPS.map((step, i) => {
          const isAccent = i % 2 === 0;
          return (
            <div key={step.label} className="relative z-10 flex flex-col items-center text-center group">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${
                  isAccent ? "border border-primary/20" : ""
                }`}
                style={{
                  backdropFilter: "blur(24px)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: isAccent ? "1px solid rgba(208, 188, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className={`material-symbols-outlined text-2xl ${isAccent ? "text-primary" : "text-on-surface"}`}>
                  {step.icon}
                </span>
              </div>
              <h3 className={`font-label-md text-label-md mb-2 uppercase tracking-widest ${isAccent ? "text-primary" : "text-on-surface"}`}>
                {step.label}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tablet: 2-column */}
      <div className="hidden sm:grid md:hidden grid-cols-2 gap-10 gap-y-14">
        {STEPS.map((step, i) => {
          const isAccent = i % 2 === 0;
          return (
            <div key={step.label} className="flex flex-col items-center text-center group">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ${
                  isAccent ? "border border-primary/20" : ""
                }`}
                style={{
                  backdropFilter: "blur(24px)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: isAccent ? "1px solid rgba(208, 188, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span className={`material-symbols-outlined text-xl ${isAccent ? "text-primary" : "text-on-surface"}`}>
                  {step.icon}
                </span>
              </div>
              <h3 className={`font-label-md text-label-md mb-2 uppercase tracking-widest ${isAccent ? "text-primary" : "text-on-surface"}`}>
                {step.label}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical stacked */}
      <div className="sm:hidden">
        <div className="relative pl-12">
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-outline-variant/30" />

          {STEPS.map((step, i) => {
            const isAccent = i % 2 === 0;
            return (
              <div key={step.label} className="relative mb-10 last:mb-0 group">
                <div
                  className={`absolute -left-12 top-0 w-[44px] h-[44px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${
                    isAccent ? "border border-primary/20" : ""
                  }`}
                  style={{
                    backdropFilter: "blur(24px)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: isAccent ? "1px solid rgba(208, 188, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span className={`material-symbols-outlined text-lg ${isAccent ? "text-primary" : "text-on-surface"}`}>
                    {step.icon}
                  </span>
                </div>
                <h3 className={`font-label-md text-label-md mb-1 uppercase tracking-widest ${isAccent ? "text-primary" : "text-on-surface"}`}>
                  {step.label}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
