import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { initAnalytics } from "@/lib/analytics";
import logo from "@/assets/swasthi-logo.jpg";
import {
  ChevronDown,
  MessageCircle,
  CheckCircle,
  Lock,
  Users,
  Brain,
  Award,
  Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swasthi — India's Prescription Clarity + Family Medication Governance Platform" },
      {
        name: "description",
        content:
          "Decode Indian prescriptions in seconds. Understand OD/BD/TDS. Manage family medicines with caregiver trust. Private beta for BP, Diabetes, Thyroid families.",
      },
      { property: "og:title", content: "Swasthi — Prescription Clarity for Indian Families" },
      {
        property: "og:description",
        content:
          "AI prescription decoder + family medication governance. Built for Indian prescriptions, not 1mg or Practo. Private beta.",
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

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How private is my prescription data?",
      answer:
        "Completely private. Your prescriptions never leave your phone. We use on-device OCR processing. HIPAA-aligned architecture. Your family data stays within your family.",
    },
    {
      question: "Does Swasthi replace my doctor?",
      answer:
        "No. Swasthi supports your relationship with doctors, not replaces it. We decode what doctors already prescribed. All guidance says 'consult your doctor.'",
    },
    {
      question: "Why focus on Indian prescriptions?",
      answer:
        "Indian prescription handwriting is different. Dosage abbreviations like OD (once daily), BD (twice daily), TDS (thrice daily) are specific. We're built for this, not generic.",
    },
    {
      question: "Is Swasthi for everyone?",
      answer:
        "Private beta for families managing BP, Diabetes, Thyroid, and chronic care. Perfect if you have elderly parents or manage medicines for multiple family members.",
    },
    {
      question: "Can my family members access my medicines?",
      answer:
        "Only if you invite them. You control who sees what. Parents might see kids' medicines. Kids might see parents' medicines. Zero forced sharing.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi Swasthi, I'd like early access to the prescription decoder. Are you onboarding more families?"
  );
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

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
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Private Beta • Founder-Built • India-First
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
              🔍 Prescription Clarity for Indian Families
            </span>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-foreground text-balance">
              Decode handwriting. Understand <span className="gradient-text">OD/BD/TDS</span>. Trust your medicines.
            </h1>

            <p className="mt-6 text-lg text-foreground/80 text-pretty font-medium">
              Your family deserves clarity on medicines. Swasthi decodes confusing prescriptions in seconds—then manages them together.
            </p>

            <p className="mt-3 text-base text-foreground/70 text-pretty">
              Works for BP, Diabetes, Thyroid families. Private. India-first. Built by a founder who saw his grandmother struggle with prescriptions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">
              <WaitlistForm />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700 hover:shadow-lg w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-center text-muted-foreground font-medium">
              Limited spots opening this month. Early families get lifetime beta access.
            </p>

            {/* Trust Row */}
            <div className="mt-8 space-y-3 rounded-2xl border border-border/50 bg-surface/30 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium">
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  Built for Indian prescriptions
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  End-to-end private
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  Founder-built, not VC-backed
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  Supports doctors, doesn't replace
                </div>
              </div>
              <p className="text-xs text-foreground/70 border-t border-border/50 pt-3">
                For families managing chronic care: BP, Diabetes, Thyroid, Asthma, Arthritis.
              </p>
            </div>
          </div>

          {/* Right — Phone */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What Swasthi does for your family
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Brain className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Decode Prescriptions</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Handwriting → clear text. Doctor's shorthand (OD, BD, TDS, HS, SOS) → explained. Before/after food → clarified.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Family Governance</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Invite Mom, Dad, kids. See who takes medicines. Get reminders. No missing doses. One source of truth for family health.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 transition">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Caregiver Trust</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Your health data never leaves your phone. Your medicines, your rules. Designed for caregivers who protect, not surveil.
            </p>
          </div>
        </div>
      </section>

      {/* Category Differentiation */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            How Swasthi is different
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Not a pharmacy marketplace. Not a medicine reminder. Not a telemedicine clone.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Swasthi</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground/60">1mg / Practo</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground/60">Generic Apps</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-foreground font-medium">Prescription decoder (Indian format)</td>
                <td className="text-center py-3 px-4">
                  <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-foreground font-medium">Family medicine governance</td>
                <td className="text-center py-3 px-4">
                  <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-foreground font-medium">Caregiver-first design</td>
                <td className="text-center py-3 px-4">
                  <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-foreground font-medium">End-to-end private (on-device)</td>
                <td className="text-center py-3 px-4">
                  <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center py-3 px-4 text-orange-500">Partial</td>
                <td className="text-center py-3 px-4 text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-foreground font-medium">Sells medicines or ads</td>
                <td className="text-center py-3 px-4 text-green-600 font-medium">No</td>
                <td className="text-center py-3 px-4 text-orange-500">Yes (business model)</td>
                <td className="text-center py-3 px-4 text-orange-500">Some</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Founder Credibility */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6">
              Built by someone who lived this
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                When we visited doctors, prescriptions were always a mess—old papers to carry, confusing instructions to follow, and medicines that were easy to forget or misunderstand once we got home.
              </p>
              <p>
                We built Swasthi because our own family struggled with this: not knowing which medicine to take when, missing doses, or realizing too late that medicines were over.
              </p>
              <p>
                Swasthi exists to bring clarity after every doctor visit—so families can store prescriptions, understand medicines, track doses, and stay in control without confusion.
              </p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground">Founder: Swasthi Team</p>
                <p className="text-xs text-foreground/60 mt-1">Built for Indian families × Family-first</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary-soft/40 to-mint/30 p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-sm font-semibold text-foreground mb-2">Private Beta</p>
              <p className="text-xs text-foreground/70">
                Every family using Swasthi right now shapes the future. Your feedback matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance text-center">
            Questions families ask
          </h2>
          <p className="mt-3 text-center text-foreground/70 text-base">
            Building trust means answering real concerns.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-surface/50 overflow-hidden transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 hover:bg-surface/80 transition text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expandedFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFAQ === index && (
                <div className="px-4 pb-4 pt-0 text-sm text-foreground/70 border-t border-border/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">
              Talk to us on WhatsApp
            </h2>
            <p className="text-green-800/90 mb-6">
              Have questions? Want early access? Need to share feedback? Chat directly with the Swasthi team.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-green-700 hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Open WhatsApp
            </a>
            <p className="mt-4 text-xs text-green-700">
              Replies within 24 hours. We read every message.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
          Your family deserves clarity
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
          Stop guessing. Start understanding. Early access is limited—secure your spot today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition hover:bg-primary-deep hover:shadow-lg"
          >
            <Smartphone className="h-5 w-5" />
            Try Free Prescription Decoder
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-8 py-4 text-base font-bold text-foreground transition hover:bg-surface/80"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Private beta. Limited families onboarding this month. No spam, guaranteed.
        </p>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        <div className="space-y-2">
          <p>© {new Date().getFullYear()} Swasthi • India's Prescription Clarity Platform</p>
          <p>
            Built with ❤️ for Indian families. Founder-led. Privacy-first. Doctor-supported.
          </p>
        </div>
      </footer>
    </main>
  );
}
