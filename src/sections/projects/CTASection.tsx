import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-48 px-margin-mobile md:px-margin-desktop text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="font-display-lg text-display-lg tracking-tighter italic">Ready to build your legacy?</h2>
        <Link to="/contact" className="inline-flex items-center gap-6 group">
          <span className="font-display-2xl text-display-2xl tracking-tighter hover:text-primary transition-colors duration-500">Let's Connect</span>
          <div className="w-24 h-24 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
            <span className="material-symbols-outlined text-4xl">north_east</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
