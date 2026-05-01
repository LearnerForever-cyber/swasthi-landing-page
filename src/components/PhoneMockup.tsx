import {
  Home,
  FileText,
  BarChart3,
  User,
  ScanLine,
  Plus,
  Check,
  History,
  Package,
  ShoppingCart,
  Users,
  ChevronRight,
} from "lucide-react";

export function PhoneMockup() {
  const members = [
    { name: "Self", color: "oklch(0.52 0.09 185)", initial: "AK", active: true },
    { name: "Mom", color: "oklch(0.55 0.08 30)", initial: "M" },
    { name: "Dad", color: "oklch(0.65 0.04 80)", initial: "D" },
  ];

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
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[oklch(0.985_0.005_180)]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-[oklch(0.18_0.02_200)]" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-foreground/70">
            <span>9:41</span>
            <span className="opacity-0">.</span>
            <span>•••</span>
          </div>

          {/* Content */}
          <div
            className="px-4 pt-3 pb-24 space-y-3.5 h-[640px] overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain"
          >
            {/* Greeting */}
            <div className="flex items-center justify-between px-1 sticky top-0 bg-[oklch(0.985_0.005_180)] z-10 py-1 -mx-1 px-2">
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-deep ring-2 ring-primary/30 flex items-center justify-center text-primary-foreground font-bold text-xs">
                  AK
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-tight">Good Morning,</p>
                  <h3 className="text-base font-bold text-primary-deep leading-tight">Arjun</h3>
                </div>
              </div>
              <Users className="h-4 w-4 text-primary-deep" />
            </div>

            {/* Family Health card */}
            <div className="rounded-2xl bg-card border border-border p-3.5 shadow-soft">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Family Health</h4>
                  <p className="text-[10px] text-muted-foreground">Collective status for today</p>
                </div>
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="rounded-xl bg-muted px-3 py-2">
                  <p className="text-[8px] font-semibold tracking-wider text-muted-foreground">MEMBERS</p>
                  <p className="text-base font-bold text-primary-deep leading-tight mt-0.5">4</p>
                  <p className="text-[10px] font-medium text-foreground/70">Members</p>
                </div>
                <div className="rounded-xl bg-mint/40 border border-primary/30 px-3 py-2">
                  <p className="text-[8px] font-semibold tracking-wider text-primary-deep">REMAINING</p>
                  <p className="text-base font-bold text-primary-deep leading-tight mt-0.5">3 Doses</p>
                </div>
              </div>
            </div>

            {/* Members row */}
            <div className="flex justify-between gap-2 px-1">
              {members.map((m) => (
                <div key={m.name} className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-soft ${
                      m.active ? "ring-2 ring-primary ring-offset-2 ring-offset-[oklch(0.985_0.005_180)]" : ""
                    }`}
                    style={{ backgroundColor: m.color }}
                  >
                    {m.initial}
                  </div>
                  <span className="text-[10px] font-medium text-foreground">{m.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="h-12 w-12 rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center">
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground">Add</span>
              </div>
            </div>

            {/* Today's Medications */}
            <div className="rounded-2xl bg-card border border-border p-3.5 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-foreground">Today's Medications</h4>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="rounded-xl bg-muted/60 border-l-4 border-primary p-3 relative">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center rounded-full bg-primary-soft px-2 py-0.5 text-[9px] font-semibold text-primary-deep uppercase tracking-wide">
                        Afternoon
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">1:30 PM</span>
                    </div>
                    <p className="text-sm font-bold text-foreground leading-tight">Atorvastatin 20mg</p>
                    <p className="text-[10px] text-muted-foreground mt-1">For Dad · Post Lunch</p>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-dashed border-primary/40 bg-primary-soft/30 px-3 py-1.5 flex items-center justify-center gap-1.5">
                <History className="h-3 w-3 text-primary-deep" />
                <span className="text-[10px] font-semibold text-primary-deep">2 Doses Taken Today</span>
              </div>
            </div>

            {/* Scan CTA */}
            <button className="w-full rounded-2xl bg-primary-deep text-primary-foreground p-3 flex items-center gap-2.5 shadow-soft">
              <ScanLine className="h-5 w-5" />
              <span className="text-sm font-semibold">Scan & Understand Prescription</span>
            </button>

            {/* Refill Continuity (peach) */}
            <div className="rounded-2xl border p-3 flex gap-3"
              style={{
                backgroundColor: "oklch(0.96 0.04 50)",
                borderColor: "oklch(0.88 0.06 55)",
              }}
            >
              <div className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "oklch(0.92 0.06 50)" }}>
                <Package className="h-4 w-4" style={{ color: "oklch(0.50 0.15 40)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold" style={{ color: "oklch(0.45 0.16 35)" }}>
                  Refill Continuity
                </p>
                <p className="text-[10px] mt-0.5 leading-snug" style={{ color: "oklch(0.45 0.10 40)" }}>
                  Dad's BP medicine may run out in 4 days. Would you like to order now?
                </p>
                <button className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold"
                  style={{ color: "oklch(0.50 0.16 35)" }}>
                  Order Refill <ShoppingCart className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Add manually */}
            <button className="w-full rounded-2xl bg-muted/70 border border-border py-2.5 flex items-center justify-center gap-2 text-xs font-semibold text-foreground/80">
              <Plus className="h-3.5 w-3.5" /> Add Medicine Manually
            </button>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 inset-x-0 bg-surface/95 backdrop-blur border-t border-border px-4 pt-2 pb-4 flex justify-between rounded-t-2xl">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: FileText, label: "Prescription" },
              { icon: BarChart3, label: "Tracker" },
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
