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

export function trackPageView(page: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_location: page,
      page_title: document.title,
    });
  }
}

export function trackFunnelStep(step: string, label: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", `funnel_${step}`, {
      event_category: "funnel",
      event_label: label,
    });
  }
}

export function trackEngagement(action: string, label?: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "engagement", {
      event_category: "engagement",
      event_label: label || action,
      engagement_action: action,
    });
  }
}

let scrollDepthTracked = new Set<number>();

export function trackScrollDepth() {
  if (typeof window.gtag !== "function") return;
  const depths = [25, 50, 75, 90];
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;
  const percent = Math.round((scrollTop / docHeight) * 100);
  depths.forEach((d) => {
    if (percent >= d && !scrollDepthTracked.has(d)) {
      scrollDepthTracked.add(d);
      window.gtag!("event", "scroll_depth", {
        event_category: "engagement",
        event_label: `${d}%`,
        value: d,
      });
    }
  });
}

export function initScrollTracking() {
  scrollDepthTracked = new Set<number>();
  let ticking = false;
  const handler = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        trackScrollDepth();
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}

export function trackExternalLink(url: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "external_link_click", {
      event_category: "outbound",
      event_label: url,
      transport_type: "beacon",
    });
  }
}

export function trackTimeOnPage(seconds: number) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "time_on_page", {
      event_category: "engagement",
      event_label: `${seconds}s`,
      value: seconds,
    });
  }
}

export function trackBookingCall(label?: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "booking_call", {
      event_category: "conversion",
      event_label: label || "book_a_call",
      value: 1,
    });
  }
}

export function initTimeTracking() {
  const intervals = [30, 60, 120, 180, 300];
  const timers: number[] = [];
  intervals.forEach((sec) => {
    const timer = window.setTimeout(() => {
      trackTimeOnPage(sec);
    }, sec * 1000);
    timers.push(timer);
  });
  return () => timers.forEach(clearTimeout);
}
