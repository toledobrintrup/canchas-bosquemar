-- =====================================================================
--  Canchas Bosquemar — Esquema de base de datos (Supabase / PostgreSQL)
--  Fase 2: reservas reales. Ejecutar en Supabase → SQL Editor.
-- =====================================================================

-- ---------- CONFIGURACIÓN GENERAL (una sola fila, editable desde la intranet) ----------
create table if not exists config (
  id               int primary key default 1,
  hora_apertura    int  not null default 9,    -- abre 09:00
  hora_cierre      int  not null default 23,    -- último bloque 22:00, cierra 23:00
  hora_punta_desde int  not null default 18,    -- desde las 18:00 es horario punta
  precio_normal    int  not null default 28000,
  precio_punta     int  not null default 34000,
  precio_finde     int  not null default 36000,
  duracion_min     int  not null default 60,
  cancelacion_horas int not null default 12,    -- anticipación mínima para cancelar
  constraint solo_una_fila check (id = 1)
);

-- ---------- CANCHAS ----------
create table if not exists canchas (
  id     smallint primary key,
  nombre text not null,
  tipo   text default 'Pasto sintético · 20×40',
  activa boolean default true,
  orden  smallint default 0
);

-- ---------- RESERVAS ----------
create table if not exists reservas (
  id              uuid primary key default gen_random_uuid(),
  cancha_id       smallint not null references canchas(id),
  fecha           date not null,
  hora            int  not null,                       -- hora de inicio (9..22)
  duracion_min    int  not null default 60,
  estado          text not null default 'pendiente',   -- pendiente | pagada | cancelada
  cliente_nombre  text not null,
  cliente_telefono text,
  cliente_email   text,
  monto           int  not null,
  medio_pago      text,                                -- webpay | mercadopago | transferencia | local
  equipo_verde    jsonb default '[]'::jsonb,           -- ["Juan","Pedro",...]
  equipo_naranja  jsonb default '[]'::jsonb,
  usuario_id      uuid references auth.users(id),      -- null si reservó sin cuenta
  creado_en       timestamptz default now()
);
-- No se puede reservar dos veces la misma cancha/fecha/hora (salvo canceladas)
create unique index if not exists reserva_unica
  on reservas (cancha_id, fecha, hora) where estado <> 'cancelada';
create index if not exists reservas_fecha_idx on reservas (fecha);

-- ---------- BLOQUEOS (mantención / torneos / cierres) ----------
create table if not exists bloqueos (
  id        uuid primary key default gen_random_uuid(),
  cancha_id smallint references canchas(id),  -- null = todas las canchas
  fecha     date not null,
  hora      int  not null,
  motivo    text,
  creado_en timestamptz default now()
);

-- ---------- PERFILES (roles para la intranet, ligados a Supabase Auth) ----------
create table if not exists perfiles (
  id     uuid primary key references auth.users(id) on delete cascade,
  nombre text,
  rol    text not null default 'operador'    -- admin | operador
);

-- =====================================================================
--  SEGURIDAD (Row Level Security)
-- =====================================================================
alter table config   enable row level security;
alter table canchas  enable row level security;
alter table reservas enable row level security;
alter table bloqueos enable row level security;
alter table perfiles enable row level security;

-- Helper: ¿el usuario actual es staff (admin u operador)?
create or replace function es_staff() returns boolean
language sql security definer set search_path = public as $$
  select exists (select 1 from perfiles where id = auth.uid());
$$;

-- Config y canchas: cualquiera puede LEER (precios/horarios públicos); solo staff edita.
create policy "config lectura publica"  on config  for select using (true);
create policy "config edita staff"      on config  for all    using (es_staff()) with check (es_staff());
create policy "canchas lectura publica" on canchas for select using (true);
create policy "canchas edita staff"     on canchas for all    using (es_staff()) with check (es_staff());

-- Reservas: el público puede CREAR; solo staff (o el dueño de la reserva) puede ver/editar.
create policy "reservas crear publico" on reservas for insert with check (true);
create policy "reservas ver staff"     on reservas for select using (es_staff() or usuario_id = auth.uid());
create policy "reservas edita staff"   on reservas for update using (es_staff()) with check (es_staff());

-- Bloqueos: solo staff.
create policy "bloqueos staff" on bloqueos for all using (es_staff()) with check (es_staff());

-- Perfiles: cada uno ve el suyo; staff ve todos.
create policy "perfiles propio" on perfiles for select using (id = auth.uid() or es_staff());

-- =====================================================================
--  DISPONIBILIDAD PÚBLICA (sin exponer datos personales)
--  Devuelve solo qué bloques están ocupados para una fecha dada.
-- =====================================================================
create or replace function disponibilidad(p_fecha date)
returns table (cancha_id smallint, hora int)
language sql security definer set search_path = public as $$
  select cancha_id, hora from reservas
    where fecha = p_fecha and estado <> 'cancelada'
  union
  select coalesce(b.cancha_id, c.id) as cancha_id, b.hora
    from bloqueos b
    left join canchas c on b.cancha_id is null
    where b.fecha = p_fecha;
$$;

-- =====================================================================
--  DATOS INICIALES
-- =====================================================================
insert into config (id) values (1) on conflict (id) do nothing;
insert into canchas (id, nombre, orden) values
  (1,'Cancha 1',1), (2,'Cancha 2',2), (3,'Cancha 3',3)
  on conflict (id) do nothing;
