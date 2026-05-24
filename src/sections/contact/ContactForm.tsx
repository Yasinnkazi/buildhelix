import { motion } from "framer-motion";

const EMAIL_SUBJECT = encodeURIComponent("Project Inquiry — HELIX");

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fields = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value || "",
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement)?.value || "",
      budget: (form.elements.namedItem("budget") as HTMLSelectElement)?.value || "",
      timeline: (form.elements.namedItem("timeline") as HTMLSelectElement)?.value || "",
      details: (form.elements.namedItem("details") as HTMLTextAreaElement)?.value || "",
    };

    const body = encodeURIComponent(
      [
        "Hello HELIX,",
        "",
        "I visited your website and would like to discuss a project.",
        "",
        `Name: ${fields.name}`,
        `Business / Brand: ${fields.company}`,
        `Email: ${fields.email}`,
        `Project Type: ${fields.projectType}`,
        `Budget Range: ${fields.budget}`,
        `Timeline: ${fields.timeline}`,
        "",
        "Project Requirements:",
        fields.details || "(not specified)",
        "",
        "—",
        "Sent from HELIX website inquiry form",
      ].join("\n")
    );

    window.location.href = `mailto:buildhelix@gmail.com?subject=${EMAIL_SUBJECT}&body=${body}`;
  };

  return (
    <div className="lg:col-span-7">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="p-6 md:p-12 rounded-lg relative overflow-hidden"
        style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
        />
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Your Name <span className="text-primary/60">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
                placeholder="Yasin Kazi"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Business / Brand
              </label>
              <input
                id="company"
                name="company"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
                placeholder="Your brand or company"
                type="text"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant ml-1">
              Email Address <span className="text-primary/60">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
              placeholder="you@yourbrand.com"
              type="email"
            />
          </div>

          {/* Project Type + Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="projectType" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md text-on-surface transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
              >
                <option value="" disabled className="bg-background text-outline">Select type</option>
                <option value="Website" className="bg-background">Website</option>
                <option value="Brand Identity" className="bg-background">Brand Identity</option>
                <option value="E-commerce" className="bg-background">E-commerce</option>
                <option value="Web Application" className="bg-background">Web Application</option>
                <option value="Redesign" className="bg-background">Redesign</option>
                <option value="Other" className="bg-background">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="budget" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md text-on-surface transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
              >
                <option value="" disabled className="bg-background text-outline">Select range</option>
                <option value="Under ₹10K" className="bg-background">Under ₹10K</option>
                <option value="₹10K – ₹20K" className="bg-background">₹10K – ₹20K</option>
                <option value="₹20K – ₹30K" className="bg-background">₹20K – ₹30K</option>
                <option value="₹30K – ₹50K" className="bg-background">₹30K – ₹50K</option>
                <option value="Let's Discuss" className="bg-background">Let's Discuss</option>
              </select>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <label htmlFor="timeline" className="font-label-md text-label-md text-on-surface-variant ml-1">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md text-on-surface transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
            >
              <option value="" disabled className="bg-background text-outline">Select timeline</option>
              <option value="ASAP" className="bg-background">ASAP</option>
              <option value="1–2 Months" className="bg-background">1–2 Months</option>
              <option value="2–4 Months" className="bg-background">2–4 Months</option>
              <option value="4+ Months" className="bg-background">4+ Months</option>
              <option value="Not Sure" className="bg-background">Not Sure</option>
            </select>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <label htmlFor="details" className="font-label-md text-label-md text-on-surface-variant ml-1">
              Requirements <span className="text-primary/60">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)] resize-none"
              placeholder="Tell us about your project — goals, features, pages, design preferences, or anything we should know."
              rows={4}
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
            <p className="font-label-sm text-label-sm text-outline/60 max-w-[240px]">
              We'll respond within 24 hours.
            </p>
            <button
              className="w-full md:w-auto bg-primary text-on-primary-container px-10 py-4 rounded-full font-label-md text-label-md font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              type="submit"
            >
              Send Inquiry
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
