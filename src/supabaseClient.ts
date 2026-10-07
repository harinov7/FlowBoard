import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// env file harus pake prefix VITE di .env nya kalau mau di ekspos ke client
// itu aturan kalau pake tools vite

export const supabase = createClient(supabaseURL, supabaseAnonKey)