import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { PhoneMockup } from "@/components/PhoneMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { initAnalytics } from "@/lib/analytics";
import logo from "@/assets/renomedy-logo.png";
import icon from "@/assets/renomedy-icon.png";
import {
  ChevronDown,
  MessageCircle,
  CheckCircle,
  Lock,
  Users,
  Brain,
  Award,
  Smartphone,
  Bell,
  Heart,
  Shield,
  Star,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "Renomedy — Family Prescription & Medication Care" },
        {
          name: "description",
          content:
            "Understand prescriptions, manage medicines, and care for your family with confidence. AI prescription scanning, medication reminders, caregiver coordination. Family Care Simplified.",
        },
        { property: "og:title", content: "Renomedy — Family Care Simplified" },
        {
          property: "og:description",
          content:
            "Understand prescriptions, manage medicines, and coordinate care for your whole family. Family Care Simplified.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "icon", href: "/renomedy-icon.png" }],
    }),
    component: Index,
  }
);

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
        "Completely private. Your prescriptions are processed securely and never shared. HIPAA-aligned architecture. Your family data stays within your family.",
    },
    {
      question: "Does Renomedy replace my doctor?",
      answer:
        "No. Renomedy supports your relationship with doctors, not replaces it. We decode what doctors already prescribed. All guidance says 'consult your doctor.'",
    },
    {
      question: "Why focus on Indian prescriptions?",
      answer:
        "Indian prescription handwriting is different. Dosage abbreviations like OD (once daily), BD (twice daily), TDS (thrice daily) are specific. We're built for this, not generic.",
    },
    {
      question: "Is Renomedy for everyone?",
      answer:
        "Renomedy is built for families managing BP, Diabetes, Thyroid, and chronic care. Perfect if you have elderly parents or manage medicines for multiple family members.",
    },
    {
      question: "Can my family members access my medicines?",
      answer:
        "Only if you invite them. You control who sees what. Parents might see kids' medicines. Kids might see parents' medicines. Zero forced sharing.",
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi Renomedy, I'd like early access to the family care platform. Are you onboarding more families?"
  );
  const whatsappLink = `https://wa.me/919035658818?text=${whatsappMessage}`;

  const features = [
    {
      icon: Brain,
      color: "blue",
      title: "AI Prescription Scanning",
      desc: "Snap a photo of any prescription. Our AI decodes handwriting, shorthand (OD/BD/TDS/HS/SOS), and before/after-food instructions instantly.",
    },
    {
      icon: Users,
      color: "emerald",
      title: "Family Coordination",
      desc: "Invite Mom, Dad, or kids. See who took what, when. Get alerts for missed doses. One source of truth for the whole family.",
    },
    {
      icon: Lock,
      color: "violet",
      title: "Caregiver Privacy",
      desc: "Your health data stays private. You control who can see what. Designed for caregivers who protect, not surveil.",
    },
    {
      icon: Bell,
      color: "orange",
      title: "Medication Reminders",
      desc: "Smart reminders that match your prescription schedule—morning, afternoon, night. Never miss a dose again.",
    },
    {
      icon: Heart,
      color: "rose",
      title: "Adherence Tracking",
      desc: "Visual adherence reports for every family member. Know at a glance who's on track with their medications.",
    },
    {
      icon: Shield,
      color: "teal",
      title: "Medicine Safety",
      desc: "Flag potential interactions. Get plain-language explanations for every drug. Keep your family safe, informed, and confident.",
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string }> = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600" },
    emerald: { bg: "bg-emerald-100", icon: "text-emerald-600" },
    violet: { bg: "bg-violet-100", icon: "text-violet-600" },
    orange: { bg: "bg-orange-100", icon: "text-orange-600" },
    rose: { bg: "bg-rose-100", icon: "text-rose-600" },
    teal: { bg: "bg-teal-100", icon: "text-teal-600" },
  };

  const testimonials = [
    {
      quote: "My father's prescription had 6 medicines I didn't understand. Renomedy decoded it in seconds. Now we never miss a dose.",
      name: "Priya R.",
      role: "Caregiver, Bangalore",
      stars: 5,
    },
    {
      quote: "Managing meds for my elderly parents used to be chaos. Now I get reminders and can track everything from one place.",
      name: "Arjun M.",
      role: "Son & Caregiver, Mumbai",
      stars: 5,
    },
    {
      quote: "Finally an app that understands Indian prescriptions. OD, BD, TDS—it explains everything clearly. Game changer.",
      name: "Sunita K.",
      role: "Diabetic Patient, Chennai",
      stars: 5,
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "",
      highlight: false,
      tag: "",
      desc: "For individuals just getting started",
      features: [
        "Scan up to 3 prescriptions/month",
        "Basic medicine decoding",
        "Personal medication reminders",
        "1 family member",
      ],
      cta: "Get Started Free",
    },
    {
      name: "Care",
      price: "₹199",
      period: "/month",
      highlight: true,
      tag: "⭐ Most Popular",
      desc: "For families who want full protection",
      features: [
        "Unlimited prescription scans",
        "AI medicine decoding & explanations",
        "Up to 5 family members",
        "Smart reminders & dose tracking",
        "Adherence reports",
        "Caregiver coordination",
      ],
      cta: "Start Care Plan",
    },
    {
      name: "Family Plus",
      price: "₹299",
      period: "/month",
      highlight: false,
      tag: "",
      desc: "For large families & full coordination",
      features: [
        "Everything in Care",
        "Unlimited family members",
        "Priority support",
        "Medicine safety alerts",
        "Export & share reports",
        "Early access to new features",
      ],
      cta: "Get Family Plus",
    },
  ];

  return (
    <main className="min-h-screen">
      <Toaster richColors position="top-center" />

      {/* Nav */}
      <header className="mx-auto max-w-6xl px-6 pt-6 sm:pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={icon}
              alt="Renomedy icon"
              className="h-9 w-9 rounded-xl object-cover ring-1 ring-border"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Renomedy
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
            Early Access • Family-First • India-Built
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700">
              🏥 Family Care Simplified
            </span>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-foreground text-balance">
              Family Care{" "}
              <span className="gradient-text">Simplified</span>
            </h1>

            <p className="mt-6 text-lg text-foreground/80 text-pretty font-medium">
              Understand prescriptions, manage medicines, and care for your family with confidence.
            </p>

            <p className="mt-3 text-base text-foreground/70 text-pretty">
              AI-powered prescription decoding + family medication management. Built for Indian families managing chronic care—BP, Diabetes, Thyroid, and more.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">
              <WaitlistForm />
              <a
                id="whatsapp-cta-hero"
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
              Limited spots this month. Early families get lifetime beta access.
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
                  Family-first design
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

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep mb-4">
            <Zap className="h-3 w-3" /> Everything your family needs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What Renomedy does for your family
          </h2>
          <p className="mt-3 text-base text-foreground/70 max-w-xl">
            From scanning a prescription to coordinating care across the whole family — Renomedy handles it all.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            const c = colorMap[f.color];
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-surface/50 p-6 hover:border-primary/30 hover:shadow-soft transition-all duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`h-10 w-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-5 w-5 ${c.icon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground pt-1">{f.title}</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Renomedy is Different */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            How Renomedy is different
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Not a pharmacy marketplace. Not a generic reminder app. Not a telemedicine clone.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Renomedy</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground/60">1mg / Practo</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground/60">Generic Apps</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["AI prescription decoder (Indian format)", true, false, false],
                ["Family medication coordination", true, false, false],
                ["Caregiver-first design", true, false, false],
                ["End-to-end private (no data selling)", true, "Partial", false],
                ["Adherence tracking for whole family", true, false, false],
                ["Sells medicines or ads", "No", "Yes", "Some"],
              ].map(([feat, ren, mg, gen], i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground font-medium">{feat}</td>
                  <td className="text-center py-3 px-4">
                    {ren === true ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> :
                      <span className={ren === "No" ? "text-green-600 font-medium" : "text-orange-500"}>{ren as string}</span>}
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    {mg === false ? "—" : <span className="text-orange-500">{mg as string}</span>}
                  </td>
                  <td className="text-center py-3 px-4 text-muted-foreground">
                    {gen === false ? "—" : <span className="text-orange-500">{gen as string}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Families who found clarity
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Real caregivers. Real prescriptions. Real relief.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface/50 p-6 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pain points callout */}
        <div className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-primary-soft/40 to-mint/20 p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Sound familiar?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-foreground/80">
            {[
              "😰 Can't read the doctor's handwriting",
              "💊 Not sure if medicine is before or after food",
              "⏰ Dad keeps missing his evening dose",
              "📋 Lost the old prescription again",
              "🧓 Managing meds for elderly parents alone",
              "😕 Confused by OD, BD, TDS abbreviations",
            ].map((p) => (
              <div key={p} className="flex items-start gap-2">
                <span>{p}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm font-semibold text-primary-deep">
            Renomedy was built to solve exactly these problems. →
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Protect your family
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Simple, transparent pricing. Cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 flex flex-col gap-5 transition-all ${
                plan.highlight
                  ? "border-primary bg-gradient-to-br from-primary-soft/60 to-mint/30 shadow-elevated ring-2 ring-primary/30 scale-[1.02]"
                  : "border-border bg-surface/50"
              }`}
            >
              {plan.tag && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-0.5 text-xs font-bold w-fit">
                  {plan.tag}
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-xs text-foreground/60 mt-1">{plan.desc}</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground mb-1">{plan.period}</span>
              </div>
              <ul className="space-y-2 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                id={`pricing-cta-${plan.name.toLowerCase().replace(" ", "-")}`}
                className={`w-full rounded-xl px-5 py-3 text-sm font-bold transition ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary-deep hover:shadow-lg"
                    : "bg-muted text-foreground hover:bg-border"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Story */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6">
              Built by someone who lived this
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                When we visited doctors, prescriptions were always a mess—old papers to carry, confusing instructions to follow, and medicines that were easy to forget or misunderstand.
              </p>
              <p>
                We built Renomedy because our own family struggled with this: not knowing which medicine to take when, missing doses, or realizing too late that medicines were over.
              </p>
              <p>
                Renomedy exists to bring clarity after every doctor visit—so families can store prescriptions, understand medicines, track doses, and stay in control without confusion.
              </p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground">Founder: Renomedy Team</p>
                <p className="text-xs text-foreground/60 mt-1">Built for Indian families × Family-first × Care-driven</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary-soft/40 to-mint/30 p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-sm font-semibold text-foreground mb-2">Early Access</p>
              <p className="text-xs text-foreground/70">
                Every family using Renomedy right now shapes the future. Your feedback matters and drives every feature we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                id={`faq-${index}`}
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

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">
              Talk to us on WhatsApp
            </h2>
            <p className="text-green-800/90 mb-6">
              Have questions? Want early access? Need to share feedback? Chat directly with the Renomedy team.
            </p>
            <a
              id="whatsapp-cta-section"
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

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src={icon} alt="Renomedy" className="h-6 w-6 rounded-lg object-cover" />
          <span className="font-semibold text-foreground text-sm">Renomedy</span>
        </div>
        <div className="space-y-2">
          <p>© {new Date().getFullYear()} Renomedy • Family Care Simplified</p>
          <p>
            Built with ❤️ for Indian families. Family-first. Privacy-first. Doctor-supported.
          </p>
        </div>
      </footer>
    </main>
  );
}
