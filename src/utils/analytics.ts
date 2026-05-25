const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: true,
  });
}

export function initClarity() {
  const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || "";
  if (!CLARITY_ID || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_ID}");
  `;
  document.head.appendChild(script);
}

export function trackWhatsAppClick(label?: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label || "floating_button",
      value: 1,
    });
  }
}

export function trackEmailClick(label?: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "email_click", {
      event_category: "engagement",
      event_label: label || "contact_link",
      value: 1,
    });
  }
}

export function trackFormSubmission(fields: Record<string, string>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "form_submission", {
      event_category: "conversion",
      event_label: "contact_form",
      ...fields,
    });
  }
}

export function trackPageView(path: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: document.title,
    });
  }
}

export function trackCTA(
  ctaName: string,
  ctaLocation: string,
  ctaDestination?: string
) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "conversion",
      event_label: ctaName,
      cta_location: ctaLocation,
      cta_destination: ctaDestination || "",
      value: 1,
    });
  }
}
