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
      { title: "Swasthi — Never let your family miss medicines" },
      {
        name: "description",
        content:
          "Understand prescriptions. Track medicines. Protect your family. Get early access to Swasthi, built for Indian families managing chronic care.",
      },
      { property: "og:title", content: "Never let your family miss or misunderstand medicines" },
      {
        property: "og:description",
        content:
          "From confusing prescriptions to daily medication confidence — Swasthi helps families understand medicines, stay on track, and care better together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/favicon.svg" }],
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
            India Private Beta • Limited Early Families
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

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-foreground text-balance">
              Never let your family <span className="gradient-text">miss or misunderstand</span> medicines.
            </h1>

            <p className="mt-6 text-lg text-foreground/80 text-pretty font-medium">
              AI-assisted prescription understanding and medication continuity for Indian families managing chronic care.
            </p>

            <p className="mt-3 text-base text-foreground/70 text-pretty">
              From confusing prescriptions to daily medication confidence — Swasthi helps families understand medicines, stay on track, and care better together.
            </p>

            <div className="mt-8">
              <WaitlistForm />
              <p className="mt-3 text-xs text-center text-muted-foreground font-medium">
                Early access spots opening for first Indian families.
              </p>
            </div>

            {/* Trust row */}
            <div className="mt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/70 font-medium">
                <span>🔒 End-to-end private</span>
                <span>🇮🇳 Built for Indian prescriptions</span>
                <span>👨‍👩‍👧‍👦 Designed for caregivers & families</span>
              </div>
              <p className="text-xs text-foreground/60">
                Designed for families managing BP, Diabetes, Thyroid & chronic care.
              </p>
            </div>
          </div>

          {/* Right — Phone */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Why families choose Swasthi
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📋</span>
              <h3 className="text-lg font-semibold text-foreground">Understand Prescriptions</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Decode handwriting, shorthand & medicine instructions in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-lg font-semibold text-foreground">Track Medicines Daily</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Never miss doses or medication continuity with simple daily tracking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛡️</span>
              <h3 className="text-lg font-semibold text-foreground">Protect Your Family</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Caregiver-first medication accountability for families who care.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Swasthi • Helping Indian families understand, track & protect better.
      </footer>
    </main>
  );
}
