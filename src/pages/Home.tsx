import { useEffect } from "react";
import Hero from "../sections/home/Hero";
import Marquee from "../sections/home/Marquee";
import Process from "../sections/home/Process";
import ContactPreview from "../sections/home/ContactPreview";

export default function Home() {
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const panels = document.querySelectorAll(".parallax-panel");
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      panels.forEach((panel, i) => {
        const speed = (i + 1) * 0.5;
        (panel as HTMLElement).style.transform = `perspective(1000px) rotateY(${x * speed}deg) rotateX(${y * speed}deg) translateZ(${i * 10}px)`;
      });
    };

    const timelineGrow = () => {
      const el = document.getElementById("timeline-glow");
      if (!el) return;
      let progress = 0;
      const animate = () => {
        progress += 0.2;
        if (progress > 100) progress = -20;
        el.style.background = `linear-gradient(90deg, transparent, #d0bcff ${progress}%, transparent ${progress + 20}%)`;
        requestAnimationFrame(animate);
      };
      animate();
    };

    document.addEventListener("mousemove", handleMouse);
    const timer = setTimeout(timelineGrow, 100);

    return () => {
      document.removeEventListener("mousemove", handleMouse);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <Process />
      <ContactPreview />
    </>
  );
}
