import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-24 md:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 md:p-20 rounded-xl overflow-hidden relative"
        style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full rotate-12 scale-150"
            style={{
              background: "radial-gradient(at 0% 0%, rgba(208, 188, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(5, 102, 217, 0.1) 0px, transparent 50%)"
            }}
          />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-display-lg text-display-lg mb-6">Who We Are</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-8">
              We're a small team of designers and developers who care about quality.
              We don't do bureaucracy, corporate tactics, or unnecessary complexity.
              We build great websites and brand experiences — plain and simple.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "code", label: "Frontend Dev" },
                { icon: "design_services", label: "UI/UX Design" },
                { icon: "palette", label: "Brand Design" },
                { icon: "support", label: "Client Support" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg shrink-0">{item.icon}</span>
                  <span className="font-label-md text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <blockquote className="text-display-lg italic font-light text-on-surface-variant leading-tight opacity-50 relative">
              <span className="absolute -top-8 -left-6 text-[80px] text-primary/10 leading-none">&ldquo;</span>
              Good design is invisible. Great design makes an impact. We aim for the latter.
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
