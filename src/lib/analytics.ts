/**
 * Centralized Google Analytics (GA4) / Telemetry Tracking Utility
 * Science-backed CRO: Tracks mobile thumb actions and lead conversions without heavy libraries.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type EventCategory = "lead_action" | "engagement" | "navigation";

export function trackEvent(
  action: string,
  category: EventCategory = "lead_action",
  label?: string,
  value?: number
) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
