export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-32">
      <div className="p-12 md:p-20 rounded-xl overflow-hidden relative"
        style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full rotate-12 scale-150"
            style={{
              background: "radial-gradient(at 0% 0%, rgba(208, 188, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(5, 102, 217, 0.1) 0px, transparent 50%)"
            }}
          />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display-lg text-display-lg text-white mb-8">Architects of the Invisible</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed mb-10">Our team consists of specialists in distributed systems, kernel engineering, and high-frequency data structures. We don't have titles; we have ownership over specific domains of the digital fabric.</p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: "developer_board", label: "Kernel Architects" },
                { icon: "cloud_sync", label: "Cloud Engineers" },
                { icon: "shield_with_heart", label: "Security Analysts" },
                { icon: "analytics", label: "Data Strategists" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">{item.icon}</span>
                  <span className="font-label-md text-on-surface">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <blockquote className="text-display-lg italic font-light text-on-surface-variant leading-tight opacity-50 relative">
              <span className="absolute -top-10 -left-10 text-[120px] text-primary/10 leading-none">&ldquo;</span>
              The complexity of the system should remain hidden behind the elegance of its output. That is the HELIX standard.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
