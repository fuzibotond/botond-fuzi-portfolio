// Lightweight, privacy-friendly event tracking.
//
// This is a thin wrapper that forwards custom events to whichever analytics
// provider you enable later (Plausible or GA4). It is a NO-OP until one is
// present on the page, so it is safe to ship as-is and never blocks rendering.
//
// Pageviews / landing pages: enable Cloudflare Web Analytics (see the report's
// MANUAL ACTIONS section) — no code needed here.
// Custom CTA events below: require Plausible or GA4 (see MANUAL ACTIONS).

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props }) => void;
    gtag?: (command: "event", event: string, params?: Props) => void;
  }
}

/** Track a named conversion event. Safe to call even if no provider is configured. */
export function track(event: string, props?: Props): void {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.plausible === "function") {
      window.plausible(event, props ? { props } : undefined);
    } else if (typeof window.gtag === "function") {
      window.gtag("event", event, props);
    }
  } catch {
    /* never let analytics break the UI */
  }
}

// Canonical event names — keep these stable so reports stay comparable.
export const EVENTS = {
  contactEmailClick: "contact_email_click",
  cvDownload: "cv_download",
  hireEngineerCta: "hire_engineer_cta",
  webDevCta: "web_dev_cta",
  projectView: "project_view",
} as const;
