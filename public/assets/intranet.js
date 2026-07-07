/* ============================================================
   Canchas Bosquemar · Intranet — núcleo compartido
   Tema · Guardia de sesión · Login · Menú · Usuario · Nav-pill
   ============================================================ */

/* 1) Tema (sin parpadeo) — oscuro por defecto */
(function () {
  var t = localStorage.getItem('cb-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();

/* 2) Guardia de sesión: sin login → login.html (excepto en la propia login) */
(function authGate() {
  var page = (location.pathname.split('/').pop() || 'intranet.html').toLowerCase();
  if (page === 'login.html') return;
  if (page.indexOf('intranet') !== 0) return; // no protege el sitio público
  if (!localStorage.getItem('cb-user')) location.replace('login.html');
})();

/* 3) Usuarios — claves SHA-256 saladas (NUNCA texto plano). Login interino
   client-side: es una puerta, no una caja fuerte. Migrar a Supabase Auth. */
var CB_SALT = 'cdbmar::v1::';
var CB_USERS = [
  { name: 'Gabriel Toledo Brintrup', user: 'toledobrintrup@hotmail.com', hash: 'fbc4a9ddb36954975a3e3d1d63df41ee3b10978de5b87c2e37fc41250e0b791c', photo: '' },
  { name: 'Mario Álvarez Sabra',     user: 'mario.alvarez@isiete.cl',    hash: '66b6251ea2399d303cc4996b2fcdb5634e4ebc0fcd812497c0d390315dbb92d4', photo: 'assets/users/mario.jpg' },
  { name: 'Diego Muñoz Fuente Alba', user: 'yeyo',                       hash: 'faa35d944972b54c566536b5c7ea685e224c79531d42646c5af6c6cc30905d3f', photo: '' }
];
async function cbSha256(s) {
  var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.prototype.map.call(new Uint8Array(buf), function (b) { return b.toString(16).padStart(2, '0'); }).join('');
}
async function cbLogin(userRaw, pass) {
  var user = (userRaw || '').trim().toLowerCase();
  var u = CB_USERS.find(function (x) { return x.user === user; });
  if (!u) return { ok: false, msg: 'Usuario no encontrado.' };
  var h = await cbSha256(CB_SALT + pass);
  if (h !== u.hash) return { ok: false, msg: 'Clave incorrecta.' };
  localStorage.setItem('cb-user', JSON.stringify({ name: u.name, user: u.user, photo: u.photo }));
  return { ok: true };
}
function cbLogout() { localStorage.removeItem('cb-user'); location.replace('login.html'); }
function cbCurrentUser() { try { return JSON.parse(localStorage.getItem('cb-user') || 'null'); } catch (e) { return null; } }

/* 4) Menú lateral (data-driven → se pinta igual en todas las páginas) */
var CB_NAV = [
  { href: 'intranet.html', label: 'Resumen', icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>' },
  { href: 'intranet-caja.html?e=qq', label: 'Flujo QQ', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M14.5 9.3c0-1.1-1.1-1.8-2.5-1.8s-2.5.7-2.5 1.9 1.1 1.6 2.5 1.9 2.6.8 2.6 2-1.2 1.7-2.6 1.7-2.6-.6-2.6-1.8"/>' },
  { href: 'intranet-caja.html?e=cb', label: 'Flujo CB', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M14.5 9.3c0-1.1-1.1-1.8-2.5-1.8s-2.5.7-2.5 1.9 1.1 1.6 2.5 1.9 2.6.8 2.6 2-1.2 1.7-2.6 1.7-2.6-.6-2.6-1.8"/>' },
  { href: 'intranet-creditos.html', label: 'Créditos', icon: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19M6 15h4"/>' },
  { href: 'intranet-socovesa.html', label: 'Socovesa', icon: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 21v-4h6v4"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2"/>' },
  { sep: 'Operación' },
  { href: 'intranet-proyecto-cb.html', label: 'Proyecto CB', icon: '<path d="M3 18a9 9 0 0 1 18 0"/><path d="M2 18.3h20v2.2H2z"/><path d="M9.5 9.5V6.5h5v3"/><path d="M12 9.5V4.8"/>' },
  { href: 'intranet-canchas.html', label: 'Canchas', icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 5v14M3 12h18"/><circle cx="12" cy="12" r="2.2"/>' },
  { href: 'intranet-reservas.html', label: 'Reservas', icon: '<rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M8.5 14.5l2.3 2.3 4.7-4.6"/>' },
  { href: 'intranet-calendario.html', label: 'Calendario', icon: '<rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>' },
  { href: 'intranet-clientes.html', label: 'Clientes', icon: '<circle cx="9" cy="8" r="3"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5"/><circle cx="17" cy="9.5" r="2.4"/><path d="M15 14.2c3.4-.5 6 1.4 6 4.8"/>' },
  { href: 'intranet-torneos.html', label: 'Torneos y ligas', icon: '<path d="M6.5 4h11v4.5a5.5 5.5 0 0 1-11 0z"/><path d="M6.5 6H3.5v1a3.5 3.5 0 0 0 3.5 3.5M17.5 6h3v1a3.5 3.5 0 0 1-3.5 3.5"/><path d="M12 13.5v4M8.5 20.5h7M10 20.5l.4-3h3.2l.4 3"/>' },
  { href: 'intranet-config.html', label: 'Configuración', icon: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>' }
];
function cbBuildNav() {
  var nav = document.querySelector('nav.nav');
  if (!nav) return;
  var page = (location.pathname.split('/').pop() || 'intranet.html');
  var cur = (page + location.search).toLowerCase();
  if (page === 'intranet-caja.html' && !location.search) cur = 'intranet-caja.html?e=qq';
  nav.innerHTML = CB_NAV.map(function (it) {
    if (it.sep) return '<div class="sep">' + it.sep + '</div>';
    var on = it.href.toLowerCase() === cur ? ' class="on"' : '';
    return '<a href="' + it.href + '"' + on + '><svg class="ico" viewBox="0 0 24 24">' + it.icon + '</svg>' + it.label + '</a>';
  }).join('');
}

/* 5) Usuario en la topbar: foto o iniciales + botón cerrar sesión */
function cbInitials(name) {
  var p = (name || '').trim().split(/\s+/);
  return (((p[0] || '')[0] || '') + ((p[1] || '')[0] || '')).toUpperCase();
}
function cbBuildUser() {
  var box = document.querySelector('.topbar .user');
  if (!box) return;
  var u = cbCurrentUser();
  if (!u) return;
  var av = u.photo
    ? '<span class="av"><img src="' + u.photo + '" alt=""></span>'
    : '<span class="av">' + cbInitials(u.name) + '</span>';
  var nom = u.name.split(/\s+/).slice(0, 2).join(' ');
  box.innerHTML = av + '<span class="uname">' + nom + '</span>' +
    '<button class="logout-btn" title="Cerrar sesión" aria-label="Cerrar sesión" onclick="cbLogout()">' +
    '<svg viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l-5-5 5-5M4 12h11"/></svg></button>';
}

/* 6) Botón de tema en la topbar */
(function () {
  var SUN = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2.5M12 20v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M1.5 12h2.5M20 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2z"/></svg>';
  function startTheme() {
    var right = document.querySelector('.topbar .right');
    if (!right || right.querySelector('.theme-btn')) return;
    var btn = document.createElement('button');
    btn.className = 'theme-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Cambiar tema claro/oscuro');
    btn.title = 'Cambiar tema';
    function paint() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.innerHTML = dark ? SUN : MOON;
    }
    paint();
    btn.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      var next = dark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cb-theme', next);
      paint();
      window.dispatchEvent(new Event('themechange'));
    });
    right.insertBefore(btn, right.firstChild);
  }
  window.cbStartTheme = startTheme;
})();

/* 7) Nav-pill (indicador flotante con spring) */
function cbInitNavPill() {
  var nav = document.querySelector('.nav');
  if (!nav || nav.querySelector('.nav-pill')) return;
  var pill = document.createElement('div');
  pill.className = 'nav-pill';
  nav.insertBefore(pill, nav.firstChild);
  var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
  var active = nav.querySelector('a.on');
  function movePill(el, instant) {
    if (!el) { pill.style.opacity = '0'; return; }
    var nr = nav.getBoundingClientRect();
    var er = el.getBoundingClientRect();
    if (instant) pill.style.transition = 'none';
    pill.style.top = (er.top - nr.top) + 'px';
    pill.style.height = er.height + 'px';
    pill.style.opacity = '1';
    if (instant) setTimeout(function () { pill.style.transition = ''; }, 16);
  }
  setTimeout(function () { movePill(active, true); }, 80);
  links.forEach(function (link) {
    link.addEventListener('mouseenter', function () { movePill(link); });
  });
  nav.addEventListener('mouseleave', function () { movePill(active); });
}

/* 8) Orquestación en orden: nav → usuario → tema → nav-pill */
(function () {
  function boot() {
    cbBuildNav();
    cbBuildUser();
    if (window.cbStartTheme) window.cbStartTheme();
    cbInitNavPill();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}());
