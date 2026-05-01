import { Home, FileText, Activity, User, ScanLine, Plus, Pill, RefreshCw, ChevronRight } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px] animate-float">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, var(--mint), transparent 70%)",
        }}
      />

      {/* Device frame */}
      <div className="relative rounded-[2.75rem] bg-[oklch(0.18_0.02_200)] p-3 shadow-phone ring-1 ring-black/5">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-surface">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-[oklch(0.18_0.02_200)]" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-foreground/70">
            <span>9:41</span>
            <span className="opacity-0">.</span>
            <span>•••</span>
          </div>

          {/* Screen content */}
          <div className="px-5 pt-4 pb-24 space-y-4 max-h-[600px] overflow-hidden">
            {/* Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Good Morning,</p>
                <h3 className="text-xl font-semibold text-foreground">Arjun</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center text-primary-deep font-semibold text-sm">
                A
              </div>
            </div>

            {/* Family Health card */}
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-deep p-4 text-primary-foreground shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-wider opacity-80">Family Health</p>
                <ChevronRight className="h-4 w-4 opacity-80" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-2xl font-semibold">4 Members</p>
                  <p className="text-xs opacity-80">3 doses remaining today</p>
                </div>
              </div>
              <div className="flex gap-2">
                {["Self", "Mom", "Dad"].map((name) => (
                  <div key={name} className="flex-1 rounded-xl bg-white/15 backdrop-blur px-2 py-1.5 text-center">
                    <p className="text-[10px] font-medium">{name}</p>
                  </div>
                ))}
                <div className="flex-1 rounded-xl bg-white/10 border border-dashed border-white/30 px-2 py-1.5 text-center">
                  <Plus className="h-3 w-3 mx-auto" />
                </div>
              </div>
            </div>

            {/* Today's Medications */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-foreground">Today's Medications</h4>
                <span className="text-[10px] text-muted-foreground">View all</span>
              </div>
              <div className="rounded-2xl bg-card border border-border p-3 shadow-soft flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-mint flex items-center justify-center">
                  <Pill className="h-5 w-5 text-mint-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">Atorvastatin 20mg</p>
                  <p className="text-[11px] text-muted-foreground">For Dad · Post Lunch</p>
                </div>
                <div className="h-5 w-5 rounded-full border-2 border-primary" />
              </div>
            </div>

            {/* Scan CTA */}
            <button className="w-full rounded-2xl bg-foreground text-background p-3.5 flex items-center gap-3 shadow-soft">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                <ScanLine className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold">Scan & Understand</p>
                <p className="text-[10px] opacity-70">Snap any prescription</p>
              </div>
              <ChevronRight className="h-4 w-4 opacity-70" />
            </button>

            {/* Refill Continuity */}
            <div className="rounded-2xl bg-accent/60 border border-primary-soft p-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-surface flex items-center justify-center">
                <RefreshCw className="h-4 w-4 text-primary-deep" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-foreground">Refill in 3 days</p>
                <p className="text-[10px] text-muted-foreground">Metformin · Mom</p>
              </div>
              <button className="text-[10px] font-semibold text-primary-deep">Remind</button>
            </div>

            {/* Add manually */}
            <button className="w-full text-xs text-muted-foreground flex items-center justify-center gap-1.5 py-1">
              <Plus className="h-3 w-3" /> Add Medicine Manually
            </button>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 inset-x-0 bg-surface/90 backdrop-blur border-t border-border px-4 pt-2 pb-4 flex justify-between">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: FileText, label: "Prescription" },
              { icon: Activity, label: "Tracker" },
              { icon: User, label: "Profile" },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 flex-1">
                <Icon className={`h-4 w-4 ${active ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-[9px] ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
