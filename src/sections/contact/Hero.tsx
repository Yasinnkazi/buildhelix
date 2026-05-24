export default function Hero() {
  return (
    <div className="lg:col-span-5 space-y-12">
      <div className="space-y-4">
        <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Connect with us</span>
        <h1 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl leading-tight">LET'S BUILD SOMETHING MODERN.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          Transforming high-performance concepts into cinematic digital realities. Reach out via the form or our direct channels.
        </p>
      </div>
      <div className="space-y-8">
        <a href="mailto:buildhelix@gmail.com" className="group flex items-center gap-6 p-6 rounded-lg"
          style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-outline uppercase">Email Address</p>
            <p className="font-body-lg text-body-lg text-on-surface">buildhelix@gmail.com</p>
          </div>
        </a>
        <a href="tel:+919004556455" className="group flex items-center gap-6 p-6 rounded-lg"
          style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">call</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-outline uppercase">Direct Line</p>
            <p className="font-body-lg text-body-lg text-on-surface">+91 90045 56455</p>
          </div>
        </a>
      </div>
      <div className="flex flex-wrap gap-4 pt-4">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full"
          style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <span className="material-symbols-outlined text-green-400 text-[20px]">chat</span>
          <span className="font-label-md text-label-md">WhatsApp</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-full"
          style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <span className="material-symbols-outlined text-primary text-[20px]">alternate_email</span>
          <span className="font-label-md text-label-md">Direct Email</span>
        </button>
      </div>
    </div>
  );
}
