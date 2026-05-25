import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="mt-24 md:mt-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-16 md:py-20 px-6 md:px-8 rounded-lg overflow-hidden"
        style={{ backdropFilter: "blur(24px)", background: "rgba(208, 188, 255, 0.05)", border: "1px solid rgba(208, 188, 255, 0.2)" }}
      >
        <div className="absolute w-[250px] md:w-[300px] h-[250px] md:h-[300px] rounded-full pointer-events-none -top-24 -left-24" style={{ background: "radial-gradient(circle, rgba(109, 59, 215, 0.15) 0%, transparent 70%)" }} />
        <div className="absolute w-[250px] md:w-[300px] h-[250px] md:h-[300px] rounded-full pointer-events-none -bottom-24 -right-24" style={{ background: "radial-gradient(circle, rgba(109, 59, 215, 0.15) 0%, transparent 70%)" }} />
        <h3 className="font-display-lg text-display-lg mb-4">Let's Build Something Together</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl mx-auto">
          Have a project in mind? Reach out and let's discuss how we can help bring your vision to life.
          <br />
          <span className="text-outline/60">Modern business websites starting from ₹15,000.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact" className="bg-primary text-on-primary-container px-8 py-4 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300">
            Start a Project
          </Link>
          <Link to="/projects" className="border border-white/10 bg-white/5 text-on-surface px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 active:bg-white/15 transition-all duration-300">
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
