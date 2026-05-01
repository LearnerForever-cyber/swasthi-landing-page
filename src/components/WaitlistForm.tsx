import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Please enter your email")
  .email("Please enter a valid email")
  .max(255, "Email too long");

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source"),
    utm_medium: p.get("utm_medium"),
    utm_campaign: p.get("utm_campaign"),
    referrer: typeof document !== "undefined" ? document.referrer || null : null,
  };
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert({
        email: parsed.data.toLowerCase(),
        ...getUtmParams(),
      });

      if (error) {
        if (error.code === "23505") {
          toast.success("You're already on the list ✓");
          setDone(true);
        } else {
          throw error;
        }
      } else {
        toast.success("You're in. We'll be in touch soon.");
        setDone(true);

        // PostHog placeholder
        if (typeof window !== "undefined" && (window as unknown as { posthog?: { capture: (e: string, p?: Record<string, unknown>) => void } }).posthog) {
          (window as unknown as { posthog: { capture: (e: string, p?: Record<string, unknown>) => void } }).posthog.capture(
            "waitlist_signup",
            { email: parsed.data }
          );
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-primary-soft bg-primary-soft/40 p-5 text-center">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <p className="text-sm font-semibold text-foreground">You're on the waitlist</p>
        <p className="mt-1 text-xs text-muted-foreground">
          We'll email you the moment Swasthi opens to your family.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2 p-1.5 sm:p-1.5 rounded-2xl bg-surface border border-border shadow-soft focus-within:ring-2 focus-within:ring-ring/40 transition">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          maxLength={255}
          aria-label="Email address"
          className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Join the Waitlist <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        Private, Secure & AI-Assisted · No spam, ever.
      </p>
    </form>
  );
}
