import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="mt-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto text-center">
      <div className="relative py-20 px-8 rounded-lg overflow-hidden"
        style={{ backdropFilter: "blur(24px)", background: "rgba(208, 188, 255, 0.05)", border: "1px solid rgba(208, 188, 255, 0.2)" }}
      >
        <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none -top-24 -left-24" style={{ background: "radial-gradient(circle, rgba(109, 59, 215, 0.15) 0%, transparent 70%)" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none -bottom-24 -right-24" style={{ background: "radial-gradient(circle, rgba(109, 59, 215, 0.15) 0%, transparent 70%)" }} />
        <h3 className="font-display-lg text-display-lg mb-6">Ready to upgrade your system?</h3>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Join the ranks of high-performance digital entities leveraging HELIX systems.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-primary text-on-primary-container px-10 py-4 rounded-full font-label-md text-label-md hover:scale-105 transition-all">Start Project</Link>
          <Link to="/projects" className="border border-white/10 bg-white/5 text-on-surface px-10 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all">View Our Work</Link>
        </div>
      </div>
    </section>
  );
}
