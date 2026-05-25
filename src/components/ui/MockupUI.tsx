type MockupVariant =
  | "dashboard-hero" | "mobile-hero"
  | "threadforge" | "aura" | "apex" | "helix-digital" | "formspace"
  | "dev-tools" | "seo-local" | "ui-design" | "brand-system" | "hosting"
  | "about-helix";

function BrowserFrame({ children, url }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden flex flex-col" style={{ background: "#0a0a0a" }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04] shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        {url && (
          <span className="ml-auto mr-auto text-[7px] leading-none font-mono px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)", maxWidth: "60%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {url}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function GlassPanel({ children, className = "", style }: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-lg ${className}`} style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", ...style }}>
      {children}
    </div>
  );
}

/* ────────────── HERO PANELS ────────────── */

function DashboardHero() {
  return (
    <BrowserFrame url="app.helix.dev/dashboard">
      <div className="flex flex-1 min-h-0">
        <div className="w-12 sm:w-14 flex flex-col items-center gap-1.5 py-3 border-r border-white/[0.04]" style={{ background: "rgba(0,0,0,0.3)" }}>
          <span className="text-[6px] font-bold tracking-widest" style={{ color: "rgba(208,188,255,0.3)", writingMode: "vertical-lr" }}>HELIX</span>
          {["01", "02", "03", "04"].map((n, i) => (
            <span key={n} className="text-[6px] font-mono" style={{ color: i === 0 ? "rgba(208,188,255,0.6)" : "rgba(255,255,255,0.1)" }}>{n}</span>
          ))}
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.04]">
            <span className="text-[7px] font-semibold text-white/30">Dashboard</span>
            <span className="text-[6px] px-2 py-0.5 rounded-full bg-white/5 text-white/20">last 7 days</span>
          </div>
          <div className="flex-1 p-2 md:p-3 space-y-2 overflow-hidden">
            <div className="grid grid-cols-3 gap-1.5">
              <GlassPanel className="p-2">
                <span className="text-[5px] font-medium text-white/20">Total Users</span>
                <p className="text-[9px] md:text-[11px] font-bold mt-0.5" style={{ color: "rgba(208,188,255,0.8)" }}>12,432</p>
                <span className="text-[5px] text-green-400/40">+12.3%</span>
              </GlassPanel>
              <GlassPanel className="p-2">
                <span className="text-[5px] font-medium text-white/20">Revenue</span>
                <p className="text-[9px] md:text-[11px] font-bold mt-0.5 text-white/60">$84,290</p>
                <span className="text-[5px] text-green-400/40">+8.1%</span>
              </GlassPanel>
              <GlassPanel className="p-2">
                <span className="text-[5px] font-medium text-white/20">Conversion</span>
                <p className="text-[9px] md:text-[11px] font-bold mt-0.5" style={{ color: "rgba(208,188,255,0.8)" }}>3.24%</p>
                <span className="text-[5px] text-green-400/40">+2.4%</span>
              </GlassPanel>
            </div>
            <GlassPanel className="p-2 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[6px] font-medium text-white/20">Weekly Performance</span>
                <span className="text-[5px] text-white/10">view report →</span>
              </div>
              <div className="flex-1 flex items-end gap-0.5 min-h-[40px] md:min-h-[56px]">
                {[
                  { label: "Mon", v: 35, c: "rgba(255,255,255,0.06)" },
                  { label: "Tue", v: 55, c: "rgba(255,255,255,0.06)" },
                  { label: "Wed", v: 40, c: "rgba(255,255,255,0.06)" },
                  { label: "Thu", v: 70, c: "rgba(208,188,255,0.4)" },
                  { label: "Fri", v: 50, c: "rgba(255,255,255,0.06)" },
                  { label: "Sat", v: 85, c: "rgba(208,188,255,0.25)" },
                  { label: "Sun", v: 60, c: "rgba(255,255,255,0.06)" },
                ].map((d) => (
                  <div key={d.label} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                    <div className="w-full rounded-t" style={{ height: `${d.v}%`, background: d.c, minHeight: "4px" }} />
                    <span className="text-[4px] text-white/10">{d.label}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
            <GlassPanel className="p-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[6px] font-medium text-white/20">Recent Activity</span>
                <span className="text-[5px] text-white/10">view all</span>
              </div>
              {["New user registration", "Payment completed", "Server deploy #42", "Analytics sync"].map((a) => (
                <div key={a} className="flex items-center gap-1.5 py-0.5 border-b border-white/[0.02] last:border-0">
                  <span className="w-1 h-1 rounded-full" style={{ background: "rgba(208,188,255,0.3)" }} />
                  <span className="text-[5px] text-white/15">{a}</span>
                </div>
              ))}
            </GlassPanel>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function MobileHero() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden flex flex-col" style={{ background: "#0a0a0a", maxWidth: "100%" }}>
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[6px] font-semibold text-white/40">9:41</span>
        <div className="flex items-center gap-1">
          <span className="text-[5px] text-white/20">●●●●○</span>
          <span className="text-[5px] text-white/20">🔋</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/[0.04]">
        <span className="text-[6px] font-bold text-white/20">HELIX</span>
        <span className="ml-auto text-white/5 text-[5px]">•••</span>
      </div>
      <div className="flex-1 p-2.5 space-y-1.5 overflow-hidden">
        <div className="w-full rounded-lg overflow-hidden relative" style={{ aspectRatio: "2/1", background: "linear-gradient(135deg, rgba(208,188,255,0.15), rgba(208,188,255,0.02))" }}>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(208,188,255,0.1) 0%, transparent 60%)" }} />
          <div className="absolute bottom-2 left-2">
            <span className="text-[6px] font-semibold text-white/40">Welcome back</span>
            <p className="text-[9px] font-bold text-white/70">Your weekly report is ready</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <GlassPanel className="p-2">
            <span className="text-[5px] text-white/20">Revenue</span>
            <p className="text-[8px] font-bold text-white/50">$24.5K</p>
            <span className="text-[4px] text-green-400/40">+18%</span>
          </GlassPanel>
          <GlassPanel className="p-2">
            <span className="text-[5px] text-white/20">Users</span>
            <p className="text-[8px] font-bold text-white/50">1,847</p>
            <span className="text-[4px] text-green-400/40">+7%</span>
          </GlassPanel>
        </div>
        {["Project Alpha — Design Review", "Q2 Planning — Meeting Notes", "Server Migration — Status"].map((item) => (
          <GlassPanel key={item} className="px-2 py-1.5 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full" style={{ background: "rgba(208,188,255,0.3)" }} />
            <div className="flex-1">
              <span className="text-[6px] text-white/25">{item}</span>
            </div>
            <span className="text-[4px] text-white/10">→</span>
          </GlassPanel>
        ))}
      </div>
      <div className="flex items-center justify-around py-1.5 border-t border-white/[0.04]" style={{ background: "rgba(0,0,0,0.3)" }}>
        {["Home", "Search", "Activity", "Profile"].map((tab, i) => (
          <span key={tab} className="text-[5px] font-medium" style={{ color: i === 0 ? "rgba(208,188,255,0.5)" : "rgba(255,255,255,0.12)" }}>{tab}</span>
        ))}
      </div>
    </div>
  );
}

/* ────────────── PROJECT MOCKUPS ────────────── */

function ThreadForgeMockup() {
  const dot = "radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)";
  return (
    <BrowserFrame url="threadforge.buildhelix.org">
      <div className="flex flex-col h-full" style={{ background: "#080808" }}>
        <nav className="flex items-center justify-between px-4 py-2 border-b border-white/[0.04]">
          <span className="text-[8px] font-bold tracking-[0.15em] text-white/40">THREADFORGE</span>
          <div className="flex items-center gap-3">
            {["Shop", "New", "Collections", "About"].map((l, i) => (
              <span key={l} className="text-[6px] font-medium" style={{ color: i === 1 ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.15)" }}>{l}</span>
            ))}
          </div>
          <span className="text-[6px] text-white/10">Cart (0)</span>
        </nav>
        <div className="relative mx-3 mt-3 rounded-lg overflow-hidden" style={{ aspectRatio: "16/7", background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(124,58,237,0.03))" }}>
          <div className="absolute inset-0" style={{ backgroundImage: dot, backgroundSize: "16px 16px" }} />
          <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
            <div>
              <span className="text-[5px] font-semibold tracking-[0.15em]" style={{ color: "rgba(124,58,237,0.5)" }}>NEW SEASON</span>
              <p className="text-[9px] font-bold text-white/70 mt-0.5">Premium Streetwear Collection</p>
              <span className="inline-block mt-1 px-2 py-0.5 text-[5px] font-semibold rounded-full" style={{ background: "rgba(124,58,237,0.15)", color: "rgba(124,58,237,0.6)" }}>Shop Now →</span>
            </div>
            <span className="text-[5px] text-white/10">Featured</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 p-3 flex-1">
          {[
            { name: "Vanguard Hoodie", price: "₹1,299" },
            { name: "Titan Cargo Pants", price: "₹1,899" },
            { name: "Circuit Tee", price: "₹899" },
            { name: "Phantom Jacket", price: "₹2,499" },
          ].map((p) => (
            <GlassPanel key={p.name} className="overflow-hidden">
              <div style={{ aspectRatio: "1/1", background: "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(124,58,237,0.02))", backgroundImage: `${dot}, linear-gradient(135deg, rgba(124,58,237,0.06), rgba(124,58,237,0.02))` }} />
              <div className="p-1.5">
                <p className="text-[7px] font-medium text-white/40 truncate">{p.name}</p>
                <span className="text-[7px] font-bold" style={{ color: "rgba(124,58,237,0.5)" }}>{p.price}</span>
              </div>
            </GlassPanel>
          ))}
        </div>
        <div className="px-3 pb-2 flex items-center justify-between border-t border-white/[0.04] pt-1.5">
          <span className="text-[5px] text-white/10">© 2025 ThreadForge</span>
          <span className="text-[5px] text-white/15 tracking-wider">View All Products →</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function AuraMockup() {
  const dot = "radial-gradient(circle, rgba(6,182,212,0.1) 1px, transparent 1px)";
  return (
    <BrowserFrame url="aura.buildhelix.org">
      <div className="flex flex-col h-full" style={{ background: "#080808" }}>
        <nav className="flex items-center justify-between px-4 py-2 border-b border-white/[0.04]">
          <span className="text-[8px] font-bold tracking-[0.15em]" style={{ color: "rgba(6,182,212,0.5)" }}>AURA</span>
          <div className="flex items-center gap-3">
            {["Menu", "Reservations", "Gallery", "Contact"].map((l, i) => (
              <span key={l} className="text-[6px] font-medium" style={{ color: i === 0 ? "rgba(6,182,212,0.6)" : "rgba(255,255,255,0.15)" }}>{l}</span>
            ))}
          </div>
        </nav>
        <div className="relative mx-3 mt-3 rounded-lg overflow-hidden" style={{ aspectRatio: "16/6", background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(6,182,212,0.02))" }}>
          <div className="absolute inset-0" style={{ backgroundImage: dot, backgroundSize: "16px 16px" }} />
          <div className="absolute bottom-2 left-3">
            <span className="text-[5px] font-semibold tracking-[0.15em]" style={{ color: "rgba(6,182,212,0.5)" }}>MODERN INDIAN CUISINE</span>
            <p className="text-[9px] font-bold text-white/70 mt-0.5">Experience the taste of redefined tradition</p>
            <span className="inline-block mt-1 px-2 py-0.5 text-[5px] font-semibold rounded-full" style={{ background: "rgba(6,182,212,0.15)", color: "rgba(6,182,212,0.6)" }}>Reserve a Table →</span>
          </div>
        </div>
        <div className="px-3 py-2 flex items-center gap-1">
          <span className="text-[5px] text-white/15">★ 4.8</span>
          <span className="text-[5px] text-white/10">(287 reviews)</span>
          <span className="ml-auto text-[5px] text-white/10">Modern Indian · BKC, Mumbai</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-1.5 px-3 pb-3">
          {[
            { name: "Truffle Mushroom Risotto", price: "₹495", desc: "Woodland mushrooms, aged parmesan" },
            { name: "Butter Chicken", price: "₹395", desc: "Smoked tomato gravy, cream, fenugreek" },
            { name: "Lamb Raan", price: "₹695", desc: "Slow-roasted leg, aromatic spices" },
            { name: "Gulab Jamun Cheesecake", price: "₹295", desc: "Indian dessert reimagined" },
          ].map((d) => (
            <GlassPanel key={d.name} className="p-1.5 flex flex-col justify-between">
              <div>
                <p className="text-[7px] font-semibold text-white/40">{d.name}</p>
                <p className="text-[5px] text-white/15 mt-0.5">{d.desc}</p>
              </div>
              <span className="text-[7px] font-bold mt-1" style={{ color: "rgba(6,182,212,0.5)" }}>{d.price}</span>
            </GlassPanel>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ApexMockup() {
  const dot = "radial-gradient(circle, rgba(245,158,11,0.1) 1px, transparent 1px)";
  return (
    <BrowserFrame url="apex.buildhelix.org">
      <div className="flex flex-col h-full" style={{ background: "#080808" }}>
        <nav className="flex items-center justify-between px-4 py-2 border-b border-white/[0.04]">
          <span className="text-[8px] font-bold tracking-[0.15em]" style={{ color: "rgba(245,158,11,0.5)" }}>APEX</span>
          <div className="flex items-center gap-3">
            {["Programs", "Schedule", "Trainers", "Pricing"].map((l, i) => (
              <span key={l} className="text-[6px] font-medium" style={{ color: i === 1 ? "rgba(245,158,11,0.6)" : "rgba(255,255,255,0.15)" }}>{l}</span>
            ))}
          </div>
        </nav>
        <div className="relative mx-3 mt-3 rounded-lg overflow-hidden" style={{ aspectRatio: "16/6", background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))" }}>
          <div className="absolute inset-0" style={{ backgroundImage: dot, backgroundSize: "16px 16px" }} />
          <div className="absolute bottom-2 left-3">
            <span className="text-[5px] font-semibold tracking-[0.15em]" style={{ color: "rgba(245,158,11,0.5)" }}>TRAIN WITH PURPOSE</span>
            <p className="text-[9px] font-bold text-white/70 mt-0.5">Elite fitness training in Mumbai</p>
            <span className="inline-block mt-1 px-2 py-0.5 text-[5px] font-semibold rounded-full" style={{ background: "rgba(245,158,11,0.15)", color: "rgba(245,158,11,0.6)" }}>Start Free Trial →</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 mx-3 mt-2">
          {["12 Programs", "8 Trainers", "500+ Members"].map((s) => (
            <GlassPanel key={s} className="py-1 text-center">
              <span className="text-[6px] font-semibold text-white/30">{s}</span>
            </GlassPanel>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1 p-3">
          {[
            { time: "6:00 AM", name: "HIIT", trainer: "Rahul" },
            { time: "7:00 AM", name: "Yoga Flow", trainer: "Priya" },
            { time: "8:00 AM", name: "Strength", trainer: "Vikram" },
            { time: "5:00 PM", name: "CrossFit", trainer: "Rahul" },
            { time: "6:00 PM", name: "Boxing", trainer: "Arjun" },
            { time: "7:00 PM", name: "Zumba", trainer: "Neha" },
          ].map((s) => (
            <GlassPanel key={`${s.time}${s.name}`} className="p-1 text-center">
              <span className="text-[5px] text-white/15">{s.time}</span>
              <p className="text-[6px] font-semibold text-white/30 mt-0.5">{s.name}</p>
              <span className="text-[4px]" style={{ color: "rgba(245,158,11,0.3)" }}>{s.trainer}</span>
            </GlassPanel>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function HelixDigitalMockup() {
  return (
    <BrowserFrame url="studio.buildhelix.org">
      <div className="flex flex-col h-full" style={{ background: "#080808" }}>
        <nav className="flex items-center justify-between px-4 py-2 border-b border-white/[0.04]">
          <span className="text-[8px] font-bold tracking-[0.15em] text-white/40">HELIX</span>
          <div className="flex items-center gap-3">
            {["Work", "Services", "About", "Contact"].map((l, i) => (
              <span key={l} className="text-[6px] font-medium" style={{ color: i === 0 ? "rgba(208,188,255,0.6)" : "rgba(255,255,255,0.15)" }}>{l}</span>
            ))}
          </div>
        </nav>
        <div className="px-3 pt-3 pb-1 flex items-center justify-between">
          <div>
            <span className="text-[5px] font-semibold tracking-[0.15em]" style={{ color: "rgba(208,188,255,0.5)" }}>SELECTED WORK</span>
            <p className="text-[9px] font-bold text-white/70 mt-0.5">Digital experiences crafted with precision</p>
          </div>
          <span className="text-[5px] text-white/10">View All →</span>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1 p-3 pt-1">
          {[
            { title: "ThreadForge", cat: "E-Commerce" },
            { title: "Aura", cat: "Restaurant" },
            { title: "APEX", cat: "Fitness" },
            { title: "Form+Space", cat: "Architecture" },
            { title: "Rive", cat: "Fintech" },
            { title: "Nova", cat: "Healthcare" },
          ].map((p) => (
            <GlassPanel key={p.title} className="overflow-hidden">
              <div style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, rgba(208,188,255,0.06), rgba(208,188,255,0.02))" }} />
              <div className="p-1">
                <p className="text-[6px] font-semibold text-white/35">{p.title}</p>
                <span className="text-[4px] text-white/10">{p.cat}</span>
              </div>
            </GlassPanel>
          ))}
        </div>
        <div className="px-3 pb-2 border-t border-white/[0.04] pt-1.5 flex items-center justify-between">
          <span className="text-[5px] text-white/10">Let&apos;s build something together</span>
          <span className="text-[5px] tracking-wider" style={{ color: "rgba(208,188,255,0.4)" }}>Start a Project →</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function FormSpaceMockup() {
  const dot = "radial-gradient(circle, rgba(16,185,129,0.1) 1px, transparent 1px)";
  return (
    <BrowserFrame url="formspace.buildhelix.org">
      <div className="flex flex-col h-full" style={{ background: "#080808" }}>
        <nav className="flex items-center justify-between px-4 py-2 border-b border-white/[0.04]">
          <span className="text-[8px] font-bold tracking-[0.1em]" style={{ color: "rgba(16,185,129,0.5)" }}>FORM+SPACE</span>
          <div className="flex items-center gap-4">
            {["Projects", "Studio", " Journal", "Contact"].map((l, i) => (
              <span key={l} className="text-[6px] font-medium" style={{ color: i === 0 ? "rgba(16,185,129,0.6)" : "rgba(255,255,255,0.2)" }}>{l}</span>
            ))}
          </div>
        </nav>
        <div className="flex-1 flex gap-1 p-2 min-h-0">
          <div className="flex-[3] flex flex-col gap-1">
            <div className="flex-1 rounded-lg overflow-hidden relative" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02))" }}>
              <div className="absolute inset-0" style={{ backgroundImage: dot, backgroundSize: "20px 20px" }} />
              <div className="absolute bottom-2 left-2">
                <span className="text-[5px] font-medium text-white/20 tracking-wider">FEATURED PROJECT</span>
                <p className="text-[8px] font-bold text-white/60">The Tidal Pavilion</p>
                <span className="text-[5px] text-white/20">Mumbai, India · 2024</span>
              </div>
            </div>
            <div className="flex gap-1">
              <GlassPanel className="flex-1 p-1.5">
                <span className="text-[6px] font-semibold text-white/30">12+</span>
                <p className="text-[4px] text-white/15">Years of practice</p>
              </GlassPanel>
              <GlassPanel className="flex-1 p-1.5">
                <span className="text-[6px] font-semibold text-white/30">80+</span>
                <p className="text-[4px] text-white/15">Projects delivered</p>
              </GlassPanel>
              <GlassPanel className="flex-1 p-1.5">
                <span className="text-[6px] font-semibold text-white/30">6</span>
                <p className="text-[4px] text-white/15">Awards</p>
              </GlassPanel>
            </div>
          </div>
          <div className="flex-[2] flex flex-col gap-1">
            <GlassPanel className="flex-1 p-2 flex flex-col justify-center">
              <span className="text-[5px] font-medium text-white/20 tracking-wider">PHILOSOPHY</span>
              <p className="text-[6px] text-white/30 mt-1 leading-relaxed">Architecture is the interplay of form, light, and material — creating spaces that inspire.</p>
              <span className="text-[4px] text-white/10 mt-1">Read more →</span>
            </GlassPanel>
            <div className="flex-1 rounded-lg overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(16,185,129,0.02))" }}>
              <div className="absolute inset-0" style={{ backgroundImage: dot, backgroundSize: "20px 20px" }} />
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ────────────── SERVICE PANEL MOCKUPS ────────────── */

function DevToolsMockup() {
  return (
    <BrowserFrame url="localhost:5173">
      <div className="flex flex-1 min-h-0">
        <div className="w-1/4 border-r border-white/[0.04] p-1.5 space-y-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <span className="text-[5px] font-semibold text-white/15 tracking-wider block mb-1">EXPLORER</span>
          {[
            { name: "src", depth: 0 },
            { name: "components", depth: 1 },
            { name: "App.tsx", depth: 1 },
            { name: "pages", depth: 1 },
            { name: "styles", depth: 1 },
            { name: "package.json", depth: 0 },
          ].map((f) => (
            <div key={f.name} className="flex items-center gap-1" style={{ paddingLeft: `${f.depth * 6 + 4}px` }}>
              <span className="text-[4px]" style={{ color: f.name.includes(".") ? "rgba(208,188,255,0.2)" : "rgba(245,158,11,0.2)" }}>{f.name.includes(".") ? "📄" : "📁"}</span>
              <span className="text-[5px]" style={{ color: f.name === "App.tsx" ? "rgba(208,188,255,0.5)" : "rgba(255,255,255,0.15)" }}>{f.name}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          <div className="px-2 py-1 border-b border-white/[0.04] flex items-center gap-2">
            <span className="text-[5px] font-medium" style={{ color: "rgba(208,188,255,0.5)" }}>App.tsx</span>
            <span className="text-[4px] text-white/10">src/App.tsx</span>
            <span className="ml-auto text-[4px] text-white/10">UTF-8 · 12 lines</span>
          </div>
          <div className="flex-1 p-2 font-mono text-[5px] leading-relaxed overflow-hidden">
            {[
              { line: "import { HelixProvider } from './helix'", color: "rgba(255,255,255,0.2)" },
              { line: "import { Dashboard } from './pages'", color: "rgba(255,255,255,0.2)" },
              { line: "", color: "rgba(255,255,255,0.06)" },
              { line: "function App() {", color: "rgba(208,188,255,0.5)" },
              { line: "  return <HelixProvider>", color: "rgba(255,255,255,0.2)" },
              { line: "    <Dashboard />", color: "rgba(255,255,255,0.15)" },
              { line: "  </HelixProvider>", color: "rgba(255,255,255,0.2)" },
              { line: "}", color: "rgba(208,188,255,0.5)" },
              { line: "", color: "rgba(255,255,255,0.06)" },
              { line: "export default App", color: "rgba(255,255,255,0.2)" },
            ].map((l, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-[4px] text-white/5 w-3 text-right">{i + 1}</span>
                <span style={{ color: l.color }}>{l.line || " "}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SEOLocalMockup() {
  return (
    <BrowserFrame url="google.com/search?q=web+designer+mumbai">
      <div className="flex flex-col min-h-0" style={{ background: "#0a0a0a" }}>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
          <span className="text-[6px] font-semibold text-white/30">G</span>
          <div className="flex-1 py-0.5 px-2 rounded-full text-[5px]" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}>
            web designer mumbai
          </div>
        </div>
        <div className="flex-1 p-2 space-y-1.5">
          <span className="text-[4px] text-white/5 block">About 1,24,00,000 results (0.48 seconds)</span>
          {[
            { title: "Helix Digital Studio", url: "helix.design", desc: "Premium web design and development studio in Mumbai. We craft digital experiences that drive growth." },
            { title: "Top Web Designers Mumbai", url: "topdesigners.mumbai.in", desc: "Award-winning web design agency. Specializing in e-commerce, CMS, and custom web applications." },
            { title: "Website Design Mumbai", url: "websitedesignmumbai.co", desc: "Professional website design services in Mumbai. Responsive, SEO-optimized, modern designs." },
          ].map((r, i) => (
            <GlassPanel key={r.title} className="p-1.5 space-y-0.5">
              <span className="text-[4px] text-white/10">★ {(4.5 + i * 0.2).toFixed(1)} · Ad</span>
              <p className="text-[7px] font-semibold" style={{ color: "rgba(208,188,255,0.5)" }}>{r.title}</p>
              <span className="text-[4px] text-green-400/40 block">{r.url}</span>
              <span className="text-[5px] text-white/20 block">{r.desc}</span>
            </GlassPanel>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function UIDesignMockup() {
  return (
    <BrowserFrame url="studio.figma.com/file/helix-portfolio">
      <div className="flex flex-1 min-h-0">
        <div className="w-1/5 border-r border-white/[0.04] p-1 space-y-0.5" style={{ background: "rgba(0,0,0,0.2)" }}>
          <span className="text-[5px] font-medium text-white/15 block mb-1">Layers</span>
          {["Frame 1", "Hero Section", "Navigation", "Header", "Button", "Text Layer"].map((l) => (
            <div key={l} className="flex items-center gap-1 py-0.5">
              <span className="w-0.5 h-2 rounded-full" style={{ background: l === "Hero Section" ? "rgba(208,188,255,0.4)" : "rgba(255,255,255,0.06)" }} />
              <span className="text-[4px]" style={{ color: l === "Hero Section" ? "rgba(208,188,255,0.5)" : "rgba(255,255,255,0.15)" }}>{l}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          <div className="px-2 py-1 border-b border-white/[0.04] flex items-center gap-1.5">
            <span className="text-[4px] px-1 py-0.5 rounded" style={{ background: "rgba(208,188,255,0.1)", color: "rgba(208,188,255,0.4)" }}>Design</span>
            <span className="text-[4px] text-white/10">Prototype</span>
            <span className="text-[4px] text-white/10">Inspect</span>
          </div>
          <div className="flex-1 p-2 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="w-3/4 rounded-lg overflow-hidden" style={{ aspectRatio: "16/10", background: "#080808", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex items-center justify-center h-1/3 border-b border-white/[0.04] px-2" style={{ background: "rgba(208,188,255,0.03)" }}>
                <span className="text-[5px] font-bold text-white/30">HELIX PORTFOLIO</span>
              </div>
              <div className="flex items-center justify-center h-2/3 px-2">
                <span className="text-[6px] text-white/15">Canvas — Hero Section Mockup</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/6 border-l border-white/[0.04] p-1 space-y-1" style={{ background: "rgba(0,0,0,0.2)" }}>
          <span className="text-[5px] font-medium text-white/15 block mb-1">Properties</span>
          <div className="space-y-0.5">
            {["W: 1440", "H: 900", "Fill: None", "Radius: 0"].map((p) => (
              <div key={p} className="flex justify-between">
                <span className="text-[4px] text-white/10">{p.split(":")[0]}</span>
                <span className="text-[4px] text-white/20">{p.split(":")[1]}</span>
              </div>
            ))}
          </div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
          <div className="flex gap-0.5 flex-wrap">
            {["#D0BCFF", "#381E72", "#E8DEF8", "#4A4458"].map((c) => (
              <span key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function BrandSystemMockup() {
  return (
    <BrowserFrame url="helix.style/identity">
      <div className="flex flex-col min-h-0" style={{ background: "#080808" }}>
        <div className="px-3 py-2 border-b border-white/[0.04]">
          <span className="text-[6px] font-semibold text-white/30">HELIX — Design System</span>
        </div>
        <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
          <span className="text-[5px] font-medium text-white/20 tracking-wider block">COLORS</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { hex: "#D0BCFF", label: "Primary" },
              { hex: "#381E72", label: "Secondary" },
              { hex: "#4A4458", label: "Tertiary" },
            ].map((c) => (
              <GlassPanel key={c.hex} className="p-1.5">
                <div className="w-full h-4 md:h-5 rounded-md mb-1" style={{ background: c.hex }} />
                <span className="text-[4px] text-white/20 block">{c.label}</span>
                <span className="text-[4px] text-white/10 block font-mono">{c.hex}</span>
              </GlassPanel>
            ))}
          </div>
          <span className="text-[5px] font-medium text-white/20 tracking-wider block mt-1">TYPOGRAPHY</span>
          <GlassPanel className="p-2 space-y-1">
            {[
              { size: "Display", val: "36px / Bold" },
              { size: "Heading", val: "24px / Semi Bold" },
              { size: "Body", val: "16px / Regular" },
              { size: "Caption", val: "12px / Medium" },
            ].map((t) => (
              <div key={t.size} className="flex items-center justify-between">
                <span className="text-[5px] text-white/30">{t.size}</span>
                <span className="text-[4px] text-white/10">{t.val}</span>
              </div>
            ))}
          </GlassPanel>
          <span className="text-[5px] font-medium text-white/20 tracking-wider block mt-1">COMPONENTS</span>
          <div className="flex gap-1">
            <span className="text-[5px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(208,188,255,0.15)", color: "rgba(208,188,255,0.5)" }}>Button</span>
            <span className="text-[5px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}>Input</span>
            <span className="text-[5px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}>Card</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function HostingMockup() {
  return (
    <BrowserFrame url="vercel.com/helix/projects">
      <div className="flex flex-col min-h-0" style={{ background: "#080808" }}>
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.04]">
          <span className="text-[6px] font-semibold text-white/30">Projects</span>
          <span className="text-[5px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "rgba(34,197,94,0.5)" }}>All systems normal</span>
        </div>
        <div className="flex-1 p-2 space-y-1 overflow-hidden">
          {[
            { name: "helix-studio", status: "Ready", url: "helix.design" },
            { name: "threadforge", status: "Ready", url: "threadforge.buildhelix.org" },
            { name: "aura-restaurant", status: "Building", url: "aura.buildhelix.org" },
            { name: "apex-fitness", status: "Ready", url: "apex.buildhelix.org" },
          ].map((p) => (
            <GlassPanel key={p.name} className="p-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.status === "Ready" ? "rgba(34,197,94,0.6)" : "rgba(245,158,11,0.6)" }} />
                <div>
                  <span className="text-[6px] font-medium text-white/35">{p.name}</span>
                  <span className="text-[4px] text-white/10 block">{p.url}</span>
                </div>
              </div>
              <span className="text-[4px]" style={{ color: p.status === "Ready" ? "rgba(34,197,94,0.4)" : "rgba(245,158,11,0.4)" }}>{p.status}</span>
            </GlassPanel>
          ))}
          <GlassPanel className="p-1.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[5px] font-medium text-white/20">Deployment Frequency</span>
              <span className="text-[4px] text-white/10">Last 7 days</span>
            </div>
            <div className="flex items-end gap-0.5 h-4">
              {[3, 5, 2, 7, 4, 6, 1].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h * 12 + 4}%`, background: i === 5 ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.06)" }} />
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </BrowserFrame>
  );
}

function AboutHelixMockup() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center" style={{ background: "radial-gradient(circle at 50% 50%, rgba(208,188,255,0.08), transparent)" }}>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-14 h-14 rounded-full border border-primary/20" />
        <div className="absolute w-8 h-8 rounded-full border border-primary/10" />
        <span className="material-symbols-outlined text-2xl text-primary/50" style={{ fontVariationSettings: "'FILL' 1" }}>blur_on</span>
      </div>
    </div>
  );
}

/* ────────────── EXPORT ────────────── */

export default function MockupUI({ variant, className = "" }: { variant: MockupVariant; className?: string }) {
  const variants: Record<MockupVariant, React.ReactNode> = {
    "dashboard-hero": <DashboardHero />,
    "mobile-hero": <MobileHero />,
    threadforge: <ThreadForgeMockup />,
    aura: <AuraMockup />,
    apex: <ApexMockup />,
    "helix-digital": <HelixDigitalMockup />,
    formspace: <FormSpaceMockup />,
    "dev-tools": <DevToolsMockup />,
    "seo-local": <SEOLocalMockup />,
    "ui-design": <UIDesignMockup />,
    "brand-system": <BrandSystemMockup />,
    hosting: <HostingMockup />,
    "about-helix": <AboutHelixMockup />,
  };

  return (
    <div className={`w-full h-full ${className}`} style={{ filter: "grayscale(40%)" }}>
      {variants[variant]}
    </div>
  );
}
