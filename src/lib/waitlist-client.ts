import { createClient } from "@supabase/supabase-js";

// External Supabase project used for waitlist storage.
// Anon keys are publishable and safe to ship in client code.
const SUPABASE_URL = "https://gntncwnkuxwtfkxkqrme.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdudG5jd25rdXh3dGZreGtxcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NjQ2NjIsImV4cCI6MjA5MDU0MDY2Mn0.f-cWjCy-dJH_cgaeh2dhv5d_oSloMDIzdrkB_WqTPeE";

export const WAITLIST_TABLE = "waitlist";

export const waitlistClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
