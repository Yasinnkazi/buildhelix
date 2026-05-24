import { useEffect } from "react";
import Hero from "../sections/services/Hero";
import ServicePanels from "../sections/services/ServicePanels";
import CTASection from "../sections/services/CTA";

export default function Services() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-20");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".service-card").forEach((card) => {
      card.classList.add("opacity-0", "translate-y-20", "transition-all", "duration-1000");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pt-40 pb-24">
      <div className="noise-overlay fixed inset-0 z-[100]" />
      <Hero />
      <ServicePanels />
      <CTASection />
    </div>
  );
}
