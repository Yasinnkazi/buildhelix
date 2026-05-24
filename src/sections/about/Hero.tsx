export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-32">
      <div className="grid md:grid-cols-12 gap-gutter items-end">
        <div className="md:col-span-8">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 text-primary font-label-sm text-label-sm mb-6 tracking-widest uppercase">Infrastructure First</span>
          <h1 className="font-display-2xl text-display-2xl md:text-[88px] leading-[0.95] mb-8 text-white">
            The Systems<br /><span className="text-primary/80">Philosophy</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant/80">
            We don't build features; we engineer digital nervous systems. At HELIX, we believe that scalable infrastructure is the only sustainable path to innovation. Our methodology replaces generic corporate workflows with autonomous, precision-tuned logic.
          </p>
        </div>
        <div className="md:col-span-4 hidden md:block">
          <div className="p-8 rounded-lg aspect-square flex items-center justify-center relative group overflow-hidden"
            style={{ backdropFilter: "blur(24px)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
          >
            <img
              className="w-full h-full object-contain opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="Abstract System Identity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt-nKxypIZFp0bDcdI4EGraGqdPjzCdjN6N8FrMm1eOApu-UJ3KpmYt3sijFVn8-Rs0asmYFneb5pUeIwdKBRq3vPABFx-_NI1FpyDQlYBdazrNs4VDJlFOLRfAK_hPw0oCHY_s0BQkGAJ4zknzXa_JQ70XC9NMPSX1181TCLm1HqrFMHVEA7tVkdPHhlpvQeXqejc49gP_YuvyYrlfnhejqk6oVj0Kk-lvkgj-opedtJaOM9aOIEuW1CEg66JoYlvuKh4KCwAJ3-W"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
