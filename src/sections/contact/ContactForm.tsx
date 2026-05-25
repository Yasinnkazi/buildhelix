import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { trackFormSubmission, trackBookingCall } from "../../utils/analytics";

const EMAIL_SUBJECT = encodeURIComponent("Project Inquiry — HELIX");
const COOLDOWN = 30;
const MAX_RATE = 5;
const DETAILS_MIN = 10;
const DETAILS_MAX = 2000;
const SPAM_PATTERNS = [
  /buy\s+now/i, /click\s+here/i, /free\s+money/i,
  /act\s+now/i, /limited\s+offer/i, /congratulations/i,
  /you.ve\s+won/i, /casino/i, /crypto/i,
];
const RATE_STORAGE_KEY = "helix_submissions";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function isSpammy(text: string) {
  const urls = (text.match(/https?:\/\//g) || []).length;
  if (urls > 2) return true;
  if (text.length > 40 && text === text.toUpperCase() && /\s/.test(text)) return true;
  return SPAM_PATTERNS.some((p) => p.test(text));
}

function loadRateData(): number[] {
  try {
    const raw = sessionStorage.getItem(RATE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRateData(timestamps: number[]) {
  try {
    sessionStorage.setItem(RATE_STORAGE_KEY, JSON.stringify(timestamps));
  } catch { /* noop */ }
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cooldown, setCooldown] = useState(0);
  const [ack, setAck] = useState(false);

  const honeypot = useRef<HTMLInputElement>(null);
  const lastSub = useRef(0);
  const intRef = useRef<number | null>(null);

  const clearInt = useCallback(() => {
    if (intRef.current !== null) { clearInterval(intRef.current); intRef.current = null; }
  }, []);

  useEffect(() => {
    return clearInt;
  }, [clearInt]);

  function startCooldown() {
    lastSub.current = Date.now();
    setCooldown(COOLDOWN);
    clearInt();
    intRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) { clearInt(); return 0; }
        return prev - 1;
      });
    }, 1000);
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    const trimmed = (v: string) => v.trim();

    if (!trimmed(name) || trimmed(name).length < 2) e.name = "Enter your name";
    else if (isSpammy(name)) e.name = "Invalid name";

    if (!isValidEmail(trimmed(email))) e.email = "Enter a valid email";

    if (!trimmed(details)) e.details = `Describe your project (min ${DETAILS_MIN} chars)`;
    else if (trimmed(details).length < DETAILS_MIN) e.details = `Minimum ${DETAILS_MIN} characters`;
    else if (details.length > DETAILS_MAX) e.details = `Maximum ${DETAILS_MAX} characters`;
    else if (isSpammy(details)) e.details = "Remove spam-like content";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function isRateLimited(): boolean {
    const now = Date.now();
    const timestamps = loadRateData().filter((t) => now - t < 3600000);
    if (timestamps.length >= MAX_RATE) return true;
    return false;
  }

  function recordSubmission() {
    const now = Date.now();
    const timestamps = loadRateData().filter((t) => now - t < 3600000);
    timestamps.push(now);
    saveRateData(timestamps);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.current?.value) return;

    if (cooldown > 0) return;

    if (!validate()) return;

    if (isRateLimited()) {
      setErrors({ _form: "Too many submissions. Try again later." });
      return;
    }

    trackFormSubmission({ project_type: projectType, budget, timeline });

    const body = encodeURIComponent(
      [
        "Hello HELIX,",
        "",
        "I visited your website and would like to discuss a project.",
        "",
        `Name: ${name}`,
        `Business / Brand: ${company}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        `Budget Range: ${budget}`,
        `Timeline: ${timeline}`,
        "",
        "Project Requirements:",
        details || "(not specified)",
        "",
        "—",
        "Sent from HELIX website inquiry form",
      ].join("\n")
    );

    window.location.href = `mailto:buildhelix@gmail.com?subject=${EMAIL_SUBJECT}&body=${body}`;

    recordSubmission();
    startCooldown();
    setAck(true);
    setTimeout(() => setAck(false), 5000);
  };

  const fieldClass = (field: string) =>
    `w-full bg-white/5 border ${errors[field] ? "border-primary/40" : "border-white/10"} rounded-full px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]`;

  const selectClass = (field: string) =>
    `w-full bg-white/5 border ${errors[field] ? "border-primary/40" : "border-white/10"} rounded-full px-5 py-4 font-body-md text-on-surface transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]`;

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

        {ack && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-5 p-3 rounded-lg text-center border border-primary/20"
            style={{ background: "rgba(208, 188, 255, 0.05)" }}
          >
            <p className="font-label-md text-label-md text-primary/70">
              Your email client has been opened. Don&apos;t forget to send!
            </p>
          </motion.div>
        )}

        {errors._form && (
          <div className="mb-5 p-3 rounded-lg text-center border border-primary/20"
            style={{ background: "rgba(208, 188, 255, 0.05)" }}
          >
            <p className="font-label-md text-label-md text-primary/70">{errors._form}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10" noValidate>
          {/* Honeypot — invisible to humans */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" ref={honeypot} tabIndex={-1} autoComplete="off" />
          </div>

          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Your Name <span className="text-primary/60">*</span>
              </label>
              <input
                id="name" name="name" required type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((prev) => { const n = { ...prev }; delete n.name; return n; }); }}
                className={fieldClass("name")}
                placeholder="Your Name"
              />
              {errors.name && <p className="font-label-sm text-label-sm text-primary/50 ml-1 mt-1">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Business / Brand
              </label>
              <input
                id="company" name="company" type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(208,188,255,0.15)]"
                placeholder="Your brand or company"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="font-label-md text-label-md text-on-surface-variant ml-1">
              Email Address <span className="text-primary/60">*</span>
            </label>
            <input
              id="email" name="email" required type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((prev) => { const n = { ...prev }; delete n.email; return n; }); }}
              className={fieldClass("email")}
              placeholder="you@yourbrand.com"
            />
            {errors.email && <p className="font-label-sm text-label-sm text-primary/50 ml-1 mt-1">{errors.email}</p>}
          </div>

          {/* Project Type + Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="projectType" className="font-label-md text-label-md text-on-surface-variant ml-1">
                Project Type
              </label>
              <select
                id="projectType" name="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className={selectClass("projectType")}
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
                id="budget" name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={selectClass("budget")}
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
              id="timeline" name="timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className={selectClass("timeline")}
            >
              <option value="" disabled className="bg-background text-outline">Select timeline</option>
              <option value="ASAP" className="bg-background">ASAP</option>
              <option value="1–2 Months" className="bg-background">1–2 Months</option>
              <option value="2–4 Months" className="bg-background">2–4 Months</option>
              <option value="4+ Months" className="bg-background">4+ Months</option>
              <option value="Not Sure" className="bg-background">Not Sure</option>
            </select>
          </div>

          {/* Booking Call */}
          <div className="space-y-2">
            <label className="font-label-md text-label-md text-on-surface-variant ml-1">
              Prefer a call instead? <span className="text-primary/60">book a slot</span>
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => trackBookingCall("contact_form_call_request")}
                className="group inline-flex items-center gap-2 border border-primary/30 text-on-surface px-5 py-3 rounded-full font-label-md text-label-md hover:bg-primary/10 active:bg-primary/20 transition-all duration-300 text-sm"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">call</span>
                Request a Call Back
              </button>
              <span className="font-label-sm text-label-sm text-outline/50 self-center">
                Projects starting from ₹15K+
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <label htmlFor="details" className="font-label-md text-label-md text-on-surface-variant ml-1">
              Requirements <span className="text-primary/60">*</span>
            </label>
            <textarea
              id="details" name="details" required
              value={details}
              onChange={(e) => { setDetails(e.target.value); if (errors.details) setErrors((prev) => { const n = { ...prev }; delete n.details; return n; }); }}
              className={`w-full bg-white/5 border ${errors.details ? "border-primary/40" : "border-white/10"} rounded-xl px-5 py-4 font-body-md placeholder:text-outline/50 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(208,188,255,0.15)] resize-none`}
              placeholder="Tell us about your project — goals, features, pages, design preferences, or anything we should know."
              rows={4}
            />
            {errors.details && <p className="font-label-sm text-label-sm text-primary/50 ml-1 mt-1">{errors.details}</p>}
            <div className="flex justify-end">
              <span className="font-label-sm text-label-sm text-outline/30">{details.length}/{DETAILS_MAX}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
            <div>
              <p className="font-label-sm text-label-sm text-outline/60 max-w-[240px]">
                We&apos;ll respond within 24 hours.
              </p>
              {cooldown > 0 && (
                <p className="font-label-sm text-label-sm text-primary/40 mt-1">
                  You can send another inquiry in {cooldown}s
                </p>
              )}
            </div>
            <button
              className={`w-full md:w-auto bg-primary text-on-primary-container px-10 py-4 rounded-full font-label-md text-label-md font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all duration-300 ${
                cooldown > 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-primary/30 hover:scale-[1.02] active:scale-95"
              }`}
              type="submit"
              disabled={cooldown > 0}
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
