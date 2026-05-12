import { useState, useEffect, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Loader2,
  ShieldCheck,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { waitlistClient, WAITLIST_TABLE } from "@/lib/waitlist-client";
import { track, identify } from "@/lib/analytics";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Please enter your email")
  .email("Please enter a valid email")
  .max(255, "Email too long");

interface UTMParams {
  utm_source: string | null;
  utm_campaign: string | null;
  utm_medium: string | null;
}

function getUtmParams(): UTMParams {
  if (typeof window === "undefined") {
    return {
      utm_source: "direct",
      utm_campaign: "none",
      utm_medium: "none",
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "direct",
    utm_campaign: params.get("utm_campaign") || "none",
    utm_medium: params.get("utm_medium") || "none",
  };
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: "direct",
    utm_campaign: "none",
    utm_medium: "none",
  });

  useEffect(() => {
    setUtmParams(getUtmParams());
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate email
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      track("waitlist_signup_attempted", {
        success: false,
        error: parsed.error.issues[0].message,
        ...utmParams,
      });
      return;
    }

    setLoading(true);
    const cleanEmail = parsed.data.toLowerCase();

    try {
      track("waitlist_signup_attempted", {
        ...utmParams,
      });

      // Insert into Supabase
      const { error } = await waitlistClient
        .from(WAITLIST_TABLE)
        .insert({
          email: cleanEmail,
          utm_source: utmParams.utm_source,
          utm_campaign: utmParams.utm_campaign,
          utm_medium: utmParams.utm_medium,
        });

      if (error) {
        // Handle duplicate email (unique constraint violation)
        if (error.code === "23505") {
          setAlreadyJoined(true);
          setDone(true);
          toast.success("You're already on the waitlist.");
          track("waitlist_signup_duplicate", {
            ...utmParams,
          });
        } else {
          throw error;
        }
      } else {
        // Success: generate a fun position number
        setPosition(Math.floor(Math.random() * 400) + 100);
        setDone(true);
        toast.success("Welcome to Renomedy Early Access.");

        // Identify user and track success
        identify(cleanEmail, {
          email_domain: cleanEmail.split("@")[1],
        });
        track("waitlist_signup_completed", {
          ...utmParams,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
      track("waitlist_signup_error", {
        error: (err as Error)?.message || "Unknown error",
        ...utmParams,
      });
    } finally {
      setLoading(false);
    }
  };

  // Success state
  if (done) {
    return (
      <div className="rounded-2xl border border-primary-soft bg-gradient-to-br from-primary-soft/60 to-mint/40 p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
            <CheckCircle2 className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-foreground">
              {alreadyJoined
                ? "You're already on the list"
                : "You're on the waitlist"}
            </p>
            <p className="mt-1 text-sm text-foreground/75">
              {alreadyJoined
                ? "We've got your email saved. Sit tight — early access is coming soon."
                : "We'll email you the moment Renomedy opens to your family."}
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

  // Form state
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2 p-1.5 sm:p-1.5 rounded-2xl bg-surface border border-border shadow-soft focus-within:ring-2 focus-within:ring-ring/40 transition">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          maxLength={255}
          aria-label="Email address"
          className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-deep hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Get Early Access <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
        Private • Secure • Family Care Simplified • No spam, ever.
      </p>
    </form>
  );
}
