declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackWhatsAppClick(label?: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label || "floating_button",
    });
  }
}

export function trackEmailClick(label?: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "email_click", {
      event_category: "engagement",
      event_label: label || "contact_link",
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

export function trackCTA(label: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      event_category: "conversion",
      event_label: label,
    });
  }
}
