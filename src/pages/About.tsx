import { useEffect } from "react";
import SEO from "../components/seo/SEO";
import Hero from "../sections/about/Hero";
import MindsetGrid from "../sections/about/MindsetGrid";
import Timeline from "../sections/about/Timeline";
import Team from "../sections/about/Team";

export default function About() {
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(208, 188, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles: Particle[] = [];
    function init() {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
      }
    }
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    resize();
    init();
    animate();
    const handleResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", handleResize);
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add("py-2");
        header.classList.remove("py-3");
      } else {
        header.classList.remove("py-2");
        header.classList.add("py-3");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative pt-40 pb-24 overflow-hidden">
      <canvas className="fixed inset-0 z-[-1] opacity-40 pointer-events-none" id="particleCanvas" />
      <SEO
        title="About — Digital Studio Mumbai"
        description="HELIX is a Mumbai-based digital studio specializing in modern website design and development for businesses, restaurants, gyms, and apparel brands."
        ogUrl="https://buildhelix.org/about"
      />
      <Hero />
      <MindsetGrid />
      <Timeline />
      <Team />
    </div>
  );
}
