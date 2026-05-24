import { Link } from "react-router-dom";

export default function ContactPreview() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto rounded-xl md:rounded-lg p-16 md:p-32 text-center relative overflow-hidden group"
        style={{
          backdropFilter: "blur(24px)",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <h2 className="font-display-2xl text-display-2xl mb-12 relative z-10">LET'S BUILD SOMETHING MODERN</h2>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          <Link
            to="/contact"
            className="group flex items-center gap-4 text-primary font-display-lg text-display-lg hover:translate-x-4 transition-transform duration-500"
          >
            HELLO@HELIX.SYSTEMS
            <span className="material-symbols-outlined text-display-lg">north_east</span>
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}
