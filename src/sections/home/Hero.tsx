import { Link } from "react-router-dom";
import MockupUI from "../../components/ui/MockupUI";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 overflow-hidden px-margin-mobile md:px-margin-desktop">
      {/* Atmospheric Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 text-center max-w-5xl mx-auto">
        <h1 className="font-display-2xl text-display-2xl mb-8 leading-[1.15] text-gradient tracking-tight"
            style={{ fontSize: "clamp(30px, 8vw, 72px)" }}
        >
          BUILDING DIGITAL SYSTEMS<br />
          FOR MODERN BUSINESSES
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 opacity-80">
          Websites, automation, branding, and scalable systems designed for the next generation of businesses.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
          <span className="font-label-sm text-label-sm text-outline/60 tracking-wider flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            Mumbai-Based Studio
          </span>
          <span className="font-label-sm text-label-sm text-outline/60 tracking-wider flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            Modern React Architecture
          </span>
          <span className="font-label-sm text-label-sm text-outline/60 tracking-wider flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            Performance Optimised
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Start Your Journey{" "}
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-0.5">
              arrow_right_alt
            </span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-outline-variant text-on-surface font-label-md text-label-md px-10 py-4 rounded-full backdrop-blur hover:bg-white/5 transition-all duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Visual: Floating Panels */}
      <div className="relative w-full max-w-7xl h-[260px] sm:h-[360px] md:h-[400px] mt-12 md:mt-16 z-10" style={{ perspective: "1000px" }}>
        <div
          className="parallax-panel absolute top-6 sm:top-10 left-0 md:left-20 w-[55%] max-w-[300px] md:max-w-[450px] aspect-video rounded-xl shadow-2xl p-2 md:p-4"
          style={{
            backdropFilter: "blur(24px)",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="w-full h-full rounded-lg overflow-hidden bg-surface-container-high/40">
            <MockupUI variant="dashboard-hero" />
          </div>
        </div>

        <div
          className="parallax-panel absolute bottom-6 sm:bottom-10 right-0 md:right-20 w-[50%] max-w-[280px] md:max-w-[400px] aspect-video rounded-xl shadow-2xl p-2 md:p-4"
          style={{
            backdropFilter: "blur(24px)",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="w-full h-full rounded-lg overflow-hidden bg-surface-container-high/40">
            <MockupUI variant="mobile-hero" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] md:w-[200px] aspect-square bg-primary/10 rounded-full blur-[40px] z-20 pointer-events-none" />
      </div>
    </section>
  );
}
