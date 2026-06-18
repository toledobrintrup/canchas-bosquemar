// Cliente de Supabase (base de datos + auth) — se usará en la Fase 2.
// Las credenciales viven en variables de entorno (Vercel / .env.local), nunca en el código.
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey ? createClient(url, anonKey) : null;
