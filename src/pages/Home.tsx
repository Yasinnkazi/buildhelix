import { useEffect } from "react";
import SEO from "../components/seo/SEO";
import Hero from "../sections/home/Hero";
import Marquee from "../sections/home/Marquee";
import Process from "../sections/home/Process";
import ContactPreview from "../sections/home/ContactPreview";
import FeaturedProjects from "../sections/home/FeaturedProjects";
import Stats from "../sections/home/Stats";
import Testimonials from "../sections/shared/Testimonials";
import TrustBar from "../sections/shared/TrustBar";

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

    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <SEO
        title="Website Designer Mumbai — Modern Business Websites"
        description="Website designer in Mumbai building modern websites for restaurants, gyms, apparel brands, and startups. Responsive, premium, and built to convert."
        ogUrl="https://buildhelix.org"
      />
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <Marquee />
      <Process />
      <TrustBar />
      <ContactPreview />
    </>
  );
}
