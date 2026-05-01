import posthog from "posthog-js";

// PostHog analytics — only initialized if VITE_POSTHOG_KEY exists
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || "https://app.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  if (!POSTHOG_KEY) {
    console.warn("PostHog not configured. Set VITE_POSTHOG_KEY in .env");
    return;
  }

  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage+cookie",
    });
    initialized = true;
    track("landing_page_viewed", {
      page: "swasthi_landing",
    });
  } catch (error) {
    console.error("Failed to initialize PostHog:", error);
  }
}

// Extract email domain only, not the full email
function getEmailDomain(email: string): string {
  const parts = email.split("@");
  return parts.length === 2 ? parts[1] : "unknown";
}

export function track(
  event: string,
  properties?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !POSTHOG_KEY) return;
  try {
    // Sanitize properties to never include full email
    const sanitized = {
      ...properties,
      page: "swasthi_landing",
    };
    if (sanitized.email && typeof sanitized.email === "string") {
      sanitized.email_domain = getEmailDomain(sanitized.email);
      delete sanitized.email;
    }
    posthog.capture(event, sanitized);
  } catch (error) {
    console.error("Failed to track event:", error);
  }
}

export function identify(
  id: string,
  properties?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !POSTHOG_KEY) return;
  try {
    // Sanitize to never send full email
    const sanitized = {
      ...properties,
    };
    if (sanitized.email && typeof sanitized.email === "string") {
      sanitized.email_domain = getEmailDomain(sanitized.email as string);
      delete sanitized.email;
    }
    posthog.identify(id, sanitized);
  } catch (error) {
    console.error("Failed to identify user:", error);
  }
}
