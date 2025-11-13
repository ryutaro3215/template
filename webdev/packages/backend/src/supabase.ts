import { SupabaseClient } from "@supabase/supabase-js";

export const supabaseClient = new SupabaseClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || "",
);
