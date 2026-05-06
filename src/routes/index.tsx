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
      { title: "Swasthi — India's Prescription Clarity & Family Medication Governance Platform" },
      {
        name: "description",
        content:
          "Decode Indian prescriptions instantly. Understand OD/BD/TDS. Track medicines for family members. Built for Indian families managing BP, Diabetes, Thyroid & chronic care.",
      },
      { property: "og:title", content: "Prescription Clarity Meets Family Medication Governance" },
      {
        property: "og:description",
        content:
          "Decode handwritten prescriptions. Explain medicine instructions. Secure family caregiver tracking. Private beta for Indian families.",
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
            Founder-Built • Private Beta • Limited Early Access
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep">
              🇮🇳 Built for Indian prescriptions
            </span>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-foreground text-balance">
              Stop fighting <span className="gradient-text">handwritten prescriptions</span>
            </h1>

            <p className="mt-6 text-lg text-foreground/80 text-pretty font-medium">
              Decode doctor's handwriting. Understand OD/BD/TDS. Know when to take medicines. Before or after food. Clear instructions for your whole family.
            </p>

            <p className="mt-3 text-base text-foreground/70 text-pretty">
              Swasthi turns confusing prescription notes into clear, actionable medication instructions—built specifically for Indian prescription styles and family caregivers managing BP, Diabetes, Thyroid & chronic conditions.
            </p>

            <div className="mt-8 space-y-3">
              <WaitlistForm />
              <p className="mt-3 text-xs text-center text-muted-foreground font-medium">
                Private beta opening soon. Seats filling fast.
              </p>
            </div>

            {/* Trust Row */}
            <div className="mt-10 space-y-3 rounded-2xl border border-border/50 bg-surface/30 p-6">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-lg">🔐</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">100% Private & Secure</p>
                    <p className="text-xs text-foreground/70">End-to-end encrypted. Your family's health data never shared.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">💙</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Supports Doctors, Doesn't Replace Them</p>
                    <p className="text-xs text-foreground/70">We clarify—your doctor makes the calls. We're the bridge, not the expert.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">👨‍💻</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Founder-Built for Families Like Yours</p>
                    <p className="text-xs text-foreground/70">Built by a founder who got tired of prescription confusion at home.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Phone */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Category Differentiation Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Not a generic health app
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Unlike 1mg, Practo, or simple reminder apps—Swasthi specializes in one hard problem:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📝</span>
              <h3 className="text-lg font-semibold text-foreground">Prescription Clarity</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              <strong>AI decodes your doctor's handwriting.</strong> Extracts medicine name, dosage, frequency (OD/BD/TDS), and timing (before/after food). No guessing. No errors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <h3 className="text-lg font-semibold text-foreground">Family Medication Governance</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              <strong>Track multiple family members' medicines in one place.</strong> Caregivers can check if mom took her BP medicine. Reminders. Continuity tracking. One family, one system.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✅</span>
              <h3 className="text-lg font-semibold text-foreground">Built for Indian Care Patterns</h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              <strong>Understand Indian prescription abbreviations & formats.</strong> OD (once daily). BD (twice daily). TDS (thrice daily). "Before food." "After lunch." Your doctor's style, perfectly understood.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What Swasthi solves for your family
          </h2>
        </div>
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-8 hover:border-primary/30 transition">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-4xl shrink-0">📸</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Scan & Understand Any Prescription</h3>
                <p className="text-foreground/70 mb-3">
                  Snap a photo of the prescription. Our AI extracts the medicine details—names, doses, frequency, timing. No more "wait, what did the doctor write?"
                </p>
                <p className="text-sm text-foreground/60 italic">Built for handwritten Indian prescriptions. Works with typed ones too.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-8 hover:border-primary/30 transition">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-4xl shrink-0">📋</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Clear Medicine Instructions for Everyone</h3>
                <p className="text-foreground/70 mb-3">
                  "OD = Once Daily. Take after breakfast." "BD = Twice Daily. Morning & evening." Before food, after food, with milk—everything explained in plain language your grandmother will understand.
                </p>
                <p className="text-sm text-foreground/60 italic">No medical jargon. Just clarity.</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-8 hover:border-primary/30 transition">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-4xl shrink-0">👥</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Manage Your Family's Medicines Together</h3>
                <p className="text-foreground/70 mb-3">
                  Add mom's BP medicine, dad's diabetes meds, your own prescriptions. See who's taken their medicines. Get notified before doses run out. One app for everyone's health.
                </p>
                <p className="text-sm text-foreground/60 italic">Caregiver accountability without the stress.</p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-8 hover:border-primary/30 transition">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-4xl shrink-0">📊</div>
              <div>
                <h3 className="text-xl font-semibold text-foregroup mb-2">Refill Continuity Alerts</h3>
                <p className="text-foreground/70 mb-3">
                  Never let a prescription run out. Swasthi tracks when medicines will finish and reminds you to refill—helping you manage chronic care without gaps.
                </p>
                <p className="text-sm text-foreground/60 italic">For families managing BP, Diabetes, Thyroid & long-term conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Questions families ask us
          </h2>
        </div>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <details className="group rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 cursor-pointer transition">
            <summary className="flex items-center justify-between font-semibold text-foreground">
              <span>Is my family's health data really private?</span>
              <span className="text-xl group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-foreground/70">
              Completely private. End-to-end encrypted. We never share your prescription data, medicine history, or family member information. Your data never touches our servers—it stays on your device and is encrypted when synced. No data brokers. No selling to pharmacies or insurance companies.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 cursor-pointer transition">
            <summary className="flex items-center justify-between font-semibold text-foreground">
              <span>How accurate is the prescription decoder?</span>
              <span className="text-xl group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-foreground/70">
              Our AI is trained on thousands of Indian handwritten prescriptions. It decodes medicine names, dosages, and frequencies with high accuracy. But here's the truth: you should always verify against the original prescription and consult your doctor if anything seems unclear. We're the helper, not the replacement.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 cursor-pointer transition">
            <summary className="flex items-center justify-between font-semibold text-foreground">
              <span>Does Swasthi replace my doctor?</span>
              <span className="text-xl group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-foreground/70">
              No. Swasthi helps you understand your doctor's prescription better. It clarifies instructions, tracks doses, and keeps your family organized. But your doctor makes the medical decisions. We support their care plan, not replace their expertise.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="group rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 cursor-pointer transition">
            <summary className="flex items-center justify-between font-semibold text-foreground">
              <span>What conditions does Swasthi help with?</span>
              <span className="text-xl group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-foreground/70">
              Any prescription-based chronic care. BP (hypertension). Diabetes. Thyroid disorders. Arthritis. Kidney disease. And any other long-term condition where you need clarity on prescriptions, dose tracking, and family caregiving. If your family's health involves regular medicines, Swasthi works for you.
            </p>
          </details>

          {/* FAQ 5 */}
          <details className="group rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 cursor-pointer transition">
            <summary className="flex items-center justify-between font-semibold text-foreground">
              <span>This is beta. What if something breaks?</span>
              <span className="text-xl group-open:rotate-180 transition">▼</span>
            </summary>
            <p className="mt-4 text-foreground/70">
              We're in private beta because we're still refining the experience. Your feedback directly shapes Swasthi. If something breaks, you'll hear from us immediately. And you have direct contact with the founder—not a support chatbot. We move fast to fix issues because we built this for families like yours.
            </p>
          </details>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary-soft/40 to-mint/30 p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Want early access?
            </h2>
            <p className="mt-4 text-base text-foreground/80">
              Join a small group of Indian families testing Swasthi. We'll share updates and early access dates via WhatsApp as we open the beta.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918xxxxxxxx?text=I%20want%20to%20join%20Swasthi%20early%20access%20beta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition hover:bg-primary-deep hover:shadow-lg"
              >
                💬 Join Waitlist on WhatsApp
              </a>
              <button className="inline-flex items-center justify-center rounded-2xl bg-surface border border-border px-8 py-4 text-base font-bold text-foreground transition hover:border-primary/50">
                Or enter email above
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Credibility Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built by someone who lived this problem
          </h2>
        </div>
        <div className="rounded-2xl border border-border bg-surface/50 p-8">
          <div className="text-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary-deep mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">🧬</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Founder's Mission</h3>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              My grandmother spent 20 minutes every morning trying to read her BP doctor's prescription. My mom couldn't remember if it was "OD or BD." My cousin called the pharmacy five times to ask if the medicine was before or after meals.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              I built Swasthi to solve this. Not for 10 million users—for families like mine managing chronic care with zero confusion.
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">
              That's why Swasthi is India-first, privacy-first, and family-first.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-surface/50 to-surface/30 p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance text-center">
            Stop fighting prescriptions. Start living clearly.
          </h2>
          <p className="mt-4 text-base text-foreground/80 text-center max-w-2xl mx-auto">
            Early access spots are filling. Join families who are already managing their health with confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Swasthi • Built for Indian families managing prescription clarity and family medication care.</p>
        <p className="mt-2 text-[11px]">Swasthi is in private beta. Not a medical device. Always consult your doctor. <br /> Data is encrypted and private. Period.</p>
      </footer>
    </main>
  );
}
