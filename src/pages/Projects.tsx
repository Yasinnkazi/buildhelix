import { useEffect } from "react";
import Hero from "../sections/projects/Hero";
import ProjectShowcase from "../sections/projects/ProjectShowcase";
import CTASection from "../sections/projects/CTASection";

export default function Projects() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".project-card");
      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        const parent = card.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        let progress = -rect.top / windowHeight;
        progress = Math.max(0, Math.min(1, progress));

        if (progress > 0) {
          const scale = 1 - progress * 0.1;
          const opacity = 1 - progress * 0.5;
          const translateY = -progress * 50;
          (card as HTMLElement).style.transform = `scale(${scale}) translateY(${translateY}px)`;
          (card as HTMLElement).style.opacity = String(opacity);
        } else {
          (card as HTMLElement).style.transform = "scale(1) translateY(0px)";
          (card as HTMLElement).style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mesh-gradient">
      <Hero />
      <ProjectShowcase />
      <CTASection />
    </div>
  );
}
