import { motion } from "framer-motion";
import { trackWhatsAppClick, trackEmailClick } from "../../utils/analytics";

const WHATSAPP_NUMBER = "919004556455";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello HELIX, I visited your website and would like to discuss a project."
);

const EMAIL_SUBJECT = encodeURIComponent("Project Inquiry — HELIX");
const EMAIL_BODY = encodeURIComponent(
  `Hello HELIX,

I visited your website and would like to discuss a project.

Name:
Business:
Project Type:
Budget:
Timeline:`
);

export default function Hero() {
  return (
    <div className="lg:col-span-5 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
          Connect with us
        </span>
        <h1 className="font-display-lg text-display-lg md:font-display-2xl md:text-display-2xl leading-tight">
          Let's Build<br />
          <span className="text-primary-fixed-dim">Something Modern.</span>
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
          Based in Mumbai, we build modern websites and brand experiences for
          businesses, restaurants, gyms, apparel brands, and studios across
          Navi Mumbai and Thane.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <a
          href={`mailto:buildhelix@gmail.com?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
          onClick={() => trackEmailClick("contact_card")}
          className="group flex items-center gap-5 p-5 rounded-lg transition-all duration-500"
          style={{
            backdropFilter: "blur(24px)",
            background: "var(--glass-bg, rgba(255,255,255,0.03))",
            border: "1px solid var(--glass-border, rgba(255,255,255,0.1))",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-hover-bg, rgba(255,255,255,0.07))" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--glass-bg, rgba(255,255,255,0.03))" }}
        >
          <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[22px]">mail</span>
          </div>
          <div className="min-w-0">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Email</p>
            <p className="font-body-md text-body-md truncate">buildhelix@gmail.com</p>
          </div>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("contact_card")}
          className="group flex items-center gap-5 p-5 rounded-lg transition-all duration-500"
          style={{
            backdropFilter: "blur(24px)",
            background: "var(--glass-bg, rgba(255,255,255,0.03))",
            border: "1px solid var(--glass-border, rgba(255,255,255,0.1))",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-hover-bg, rgba(255,255,255,0.07))" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--glass-bg, rgba(255,255,255,0.03))" }}
        >
          <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[22px]">chat</span>
          </div>
          <div className="min-w-0">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">WhatsApp</p>
            <p className="font-body-md text-body-md truncate">+91 90045 56455</p>
          </div>
        </a>

        <a
          href="tel:+919004556455"
          className="group flex items-center gap-5 p-5 rounded-lg transition-all duration-500"
          style={{
            backdropFilter: "blur(24px)",
            background: "var(--glass-bg, rgba(255,255,255,0.03))",
            border: "1px solid var(--glass-border, rgba(255,255,255,0.1))",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-hover-bg, rgba(255,255,255,0.07))" }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--glass-bg, rgba(255,255,255,0.03))" }}
        >
          <div className="w-11 h-11 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary shrink-0">
            <span className="material-symbols-outlined text-[22px]">call</span>
          </div>
          <div className="min-w-0">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Phone</p>
            <p className="font-body-md text-body-md truncate">+91 90045 56455</p>
          </div>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap gap-3"
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("contact_cta")}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary-container font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>WhatsApp</span>
        </a>
        <a
          href={`mailto:buildhelix@gmail.com?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
          onClick={() => trackEmailClick("contact_cta")}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-outline-variant bg-transparent text-on-surface font-label-md text-label-md hover:bg-white/5 active:bg-white/10 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-[20px] text-primary">alternate_email</span>
          <span>Direct Email</span>
        </a>
      </motion.div>
    </div>
  );
}
