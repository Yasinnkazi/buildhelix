import { useEffect } from "react";
import Hero from "../sections/contact/Hero";
import ContactForm from "../sections/contact/ContactForm";

export default function Contact() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic-btn");
    buttons.forEach((btn) => {
      const el = btn as HTMLElement;
      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
      };
      const handleLeave = () => {
        el.style.transform = "translate(0, 0) scale(1)";
      };
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    });
  }, []);

  return (
    <div className="relative pt-40 pb-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        />
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-secondary-container/10 blur-[100px]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite", animationDelay: "-4s" }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <Hero />
        <ContactForm />
      </div>
    </div>
  );
}
