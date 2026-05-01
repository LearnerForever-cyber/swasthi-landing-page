import posthog from "posthog-js";

// PostHog publishable project key — safe in client code.
const POSTHOG_KEY = "phc_mfdquhJipR59wHYfEK2Y7EUGKdnLQiQyx9MimmzHxS4D";
const POSTHOG_HOST = "https://us.i.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
  });
  initialized = true;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture(event, properties);
  } catch {
    // no-op
  }
}

export function identify(id: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    posthog.identify(id, properties);
  } catch {
    // no-op
  }
}
