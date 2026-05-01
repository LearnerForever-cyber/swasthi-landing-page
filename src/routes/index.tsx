import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { initAnalytics } from "@/lib/analytics";
import logo from "@/assets/swasthi-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swasthi — Your family's medication clarity system" },
      {
        name: "description",
        content:
          "AI-assisted prescription clarity and medication continuity for Indian families managing chronic care. Join the waitlist.",
      },
      { property: "og:title", content: "Swasthi — Your family's medication clarity system" },
      {
        property: "og:description",
        content:
          "Understand prescriptions. Track medicines. Protect your family. Join the Swasthi waitlist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/favicon.ico" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <main className="min-h-screen">
      <Toaster richColors position="top-center" />

      {/* Nav */}
      <header className="mx-auto max-w-6xl px-6 pt-6 sm:pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Swasthi logo"
              className="h-9 w-9 rounded-xl object-cover ring-1 ring-border"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Swasthi
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            India · Private Beta soon
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep">
              For families managing chronic care
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.05] tracking-tight text-foreground text-balance">
              Your family's <span className="gradient-text">medication clarity</span> system.
            </h1>

            <p className="mt-5 text-lg text-foreground/80 text-pretty">
              Understand prescriptions. Track medicines. Protect your family.
            </p>

            <p className="mt-3 text-sm text-muted-foreground text-pretty">
              AI-assisted prescription clarity and medication continuity for families
              managing chronic care — built for India.
            </p>

            <div className="mt-8">
              <WaitlistForm />
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>🔒 End-to-end private</span>
              <span>🇮🇳 Built for Indian prescriptions</span>
              <span>👪 Multi-member households</span>
            </div>
          </div>

          {/* Right — Phone */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Swasthi. Made with care for Indian families.
      </footer>
    </main>
  );
}
