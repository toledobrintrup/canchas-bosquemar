# Canchas Bosquemar

Sitio web y plataforma de **Canchas Bosquemar** (futbolito techado, Puerto Montt) — reservas online, comunidad y panel de gestión interno (mini-ERP).

## Stack

- **Next.js** (App Router, TypeScript) — web + API en un solo proyecto
- **Vercel** — hosting (auto-escala, CDN global, HTTPS)
- **Supabase** — base de datos PostgreSQL + autenticación (Fase 2)
- Dominio: **canchasbosquemar.cl**

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

Variables de entorno: copiar `.env.example` a `.env.local` y completar con los datos de Supabase.

## Estructura

- `app/` — páginas y layout (landing en `app/page.tsx`)
- `app/globals.css` — estilos del sitio (marca CDB/CB)
- `public/assets/` — logos, favicon, fotos, patrones
- `public/intranet*.html` — panel de gestión (maqueta; se migrará a React + Supabase en la Fase 2)
- `lib/supabase.ts` — cliente de base de datos (Fase 2)

## Hoja de ruta

1. ✅ **Fase 1** — Landing + intranet (maqueta) sobre el stack real.
2. **Fase 2** — Reservas reales con base de datos, login, pagos (Webpay/Mercado Pago) y ERP con datos en vivo.
