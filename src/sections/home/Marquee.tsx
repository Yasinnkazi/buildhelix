export default function Marquee() {
  const items = [
    "REACT", "NEXT.JS", "AI SYSTEMS", "DIGITAL INFRASTRUCTURE",
    "UI/UX ENGINEERING", "AUTOMATION",
  ];

  return (
    <section className="py-12 md:py-16 border-y border-outline-variant/10 bg-surface-container-lowest/50 relative overflow-hidden">
      <div className="flex w-max items-center gap-12 md:gap-32" style={{ animation: "marquee-scroll 40s linear infinite" }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display-lg text-display-lg text-outline opacity-20 tracking-tighter whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
