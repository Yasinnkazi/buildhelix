export default function ContactForm() {
  return (
    <div className="lg:col-span-7">
      <div className="p-8 md:p-12 rounded-lg relative overflow-hidden"
        style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
        />
        <div className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Full Name</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 font-body-md text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1">Company</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 font-body-md text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]" placeholder="Helix Systems" type="text" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant ml-1">Work Email</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 font-body-md text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]" placeholder="john@company.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant ml-1">Project Details</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 font-body-md text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-[#d0bcff] focus:shadow-[0_0_20px_rgba(208,188,255,0.15)] resize-none" placeholder="Tell us about your vision..." rows={5}></textarea>
          </div>
          <div className="flex items-center justify-between gap-6 pt-4">
            <p className="hidden md:block font-label-sm text-label-sm text-outline max-w-[200px]">By clicking send, you agree to our privacy protocols.</p>
            <button className="w-full md:w-auto bg-primary text-on-primary-container px-12 py-5 rounded-full font-label-md text-label-md font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:shadow-primary/40 transition-all duration-500 hover:scale-[1.02]" type="submit">
              Send Inquiry
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
