import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Loader2, ShieldCheck, CheckCircle2, Mail } from "lucide-react";
import { waitlistClient, WAITLIST_TABLE } from "@/lib/waitlist-client";
import { track, identify } from "@/lib/analytics";

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
  const [position, setPosition] = useState<number | null>(null);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const cleanEmail = parsed.data.toLowerCase();
      const utm = getUtmParams();

      const { error } = await waitlistClient.from(WAITLIST_TABLE).insert({
        email: cleanEmail,
        ...utm,
      });

      if (error) {
        if (error.code === "23505") {
          // Duplicate — already on the list
          setAlreadyJoined(true);
          setDone(true);
          toast.success("You're already on the waitlist ✓");
          track("waitlist_duplicate", { email: cleanEmail });
        } else {
          throw error;
        }
      } else {
        // Fake-but-friendly position number for delight
        setPosition(Math.floor(Math.random() * 400) + 100);
        setDone(true);
        toast.success("You're in. Welcome to Swasthi.");

        identify(cleanEmail, { email: cleanEmail });
        track("waitlist_signup", {
          email: cleanEmail,
          ...utm,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
      track("waitlist_error", { message: (err as Error)?.message });
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-primary-soft bg-gradient-to-br from-primary-soft/60 to-mint/40 p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
            <CheckCircle2 className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-foreground">
              {alreadyJoined ? "You're already on the list" : "You're on the waitlist"}
            </p>
            <p className="mt-1 text-sm text-foreground/75">
              {alreadyJoined
                ? "We've got your email saved. Sit tight — early access is coming soon."
                : "We'll email you the moment Swasthi opens to your family."}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 text-muted-foreground border border-border">
                <Mail className="h-3 w-3 text-primary" />
                {email.toLowerCase()}
              </span>
              {position !== null && !alreadyJoined && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-2.5 py-1 font-semibold">
                  #{position} in line
                </span>
              )}
            </div>
          </div>
        </div>
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
