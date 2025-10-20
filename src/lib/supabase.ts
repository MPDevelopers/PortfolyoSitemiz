import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // In dev without envs, keep app running and log a concise warning once
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn('[Supabase] Missing env vars. Contact form will be disabled.');
  }
}

export { supabase };
