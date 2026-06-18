export const LANDING_HTML = `<div class="demo-banner">⚡ Reservas online muy pronto · esta es una vista previa del sistema</div>

<header>
  <div class="wrap nav">
    <a href="#" class="logo" aria-label="Canchas Bosquemar">
      <span class="logo-badge"><img src="/assets/logo/cb-isotipo.png" alt="Canchas Bosquemar" /></span>
    </a>
    <nav class="nav-links">
      <a href="#reservar">Reservar</a>
      <a href="#features">Cómo funciona</a>
      <a href="#recinto">El recinto</a>
      <a href="#club">Casa Club</a>
      <a href="#ubicacion">Ubicación</a>
    </nav>
    <a href="#reservar" class="btn btn-primary">Reservar ⚽</a>
    <button class="burger" aria-label="menú">☰</button>
  </div>
</header>

<!-- TICKER -->
<div class="ticker"><div class="run">
  <span>⚽ Canchas techadas</span><b>·</b><span>Juega llueva o truene</span><b>·</b><span>Reserva online</span><b>·</b><span>Puerto Montt</span><b>·</b><span>3 canchas 20×40</span><b>·</b><span>Arma tu pichanga</span><b>·</b>
  <span>⚽ Canchas techadas</span><b>·</b><span>Juega llueva o truene</span><b>·</b><span>Reserva online</span><b>·</b><span>Puerto Montt</span><b>·</b><span>3 canchas 20×40</span><b>·</b><span>Arma tu pichanga</span><b>·</b>
</div></div>

<!-- HERO -->
<section class="hero">
  <svg class="hero-decor" viewBox="0 0 1440 820" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="none" stroke="#33f0c6" stroke-linecap="round">
      <path d="M-60,150 C320,55 780,38 1500,108" stroke-width="7" opacity=".5"/>
      <path d="M-60,192 C320,102 780,82 1500,156" stroke-width="6" opacity=".38"/>
      <path d="M-60,234 C320,150 780,128 1500,204" stroke-width="5" opacity=".27"/>
      <path d="M-60,276 C320,198 780,176 1500,252" stroke-width="4" opacity=".18"/>
    </g>
    <g transform="scale(0.68)">
      <path fill="#ff7a00" opacity=".9" d="M0,0 H402 C372,66 388,132 470,168 C404,222 312,222 268,278 C200,344 104,326 0,286 Z"/>
      <path fill="#17d4ad" opacity=".82" d="M0,284 C104,324 196,342 264,282 C286,318 282,358 232,392 C156,448 78,430 0,398 Z"/>
    </g>
  </svg>
  <div class="glow o"></div><div class="glow t"></div>
  <div class="wrap hero-grid">
    <div>
      <h1>Reserva.<br>Juega.<br><em>Gana.</em></h1>
      <p class="lead">Canchas de futbolito <strong>techadas</strong> en plena Población Bosquemar. Arrienda online, paga al toque y arma tu pichanga — llueva o truene. ☔→☀️</p>
      <div class="hero-cta">
        <a href="#reservar" class="btn btn-primary">Reservar ahora</a>
        <a href="#features" class="btn btn-light">Cómo funciona</a>
      </div>
      <div class="hero-stats">
        <div><b>3</b><span>canchas 20×40</span></div>
        <div><b>100%</b><span>techadas</span></div>
        <div><b>09—23h</b><span>todos los días</span></div>
      </div>
    </div>
    <div class="hero-photo">
      <img src="/assets/fotos/render-canchas.jpg" alt="Canchas Bosquemar techadas" />
      <span class="photo-tag">⛺ Canchas techadas</span>
    </div>
  </div>
</section>

<!-- FRANJA TECHADAS -->
<section class="block" style="padding-bottom:0">
  <div class="wrap">
    <div class="techa">
      <div class="ic"><svg viewBox="0 0 24 24"><path d="M2 11.5L12 4.5l10 7"/><path d="M5.5 13.5V20h13v-6.5"/><path d="M8.5 1.6l-1 2.2M12 1.1l-1 2.2M15.5 1.6l-1 2.2"/></svg></div>
      <div>
        <h3>Donde la pasión <span style="color:var(--orange)">desafía al clima</span></h3>
        <p>Nuestras 3 canchas están 100% techadas. Olvídate de suspender la pichanga por la lluvia: en Canchas Bosquemar se juega todo el año, llueva o truene.</p>
      </div>
      <div class="cta"><a href="#reservar" class="btn btn-primary">Reservar ⚽</a></div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="block" id="features">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Cómo funciona</span>
      <h2>Reservar en <em>3 toques</em></h2>
      <p>Pensado para que el que organiza la pichanga tenga la vida resuelta.</p>
    </div>
    <div class="features">
      <div class="feature"><div class="ic"><svg viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M8.5 14.5l2.3 2.3 4.7-4.6"/></svg></div><h3>Elige y paga</h3><p>Disponibilidad en vivo de las 3 canchas. Eliges tu horario y pagas online con Webpay o Mercado Pago. La cancha queda confirmada al instante.</p></div>
      <div class="feature"><div class="ic"><svg viewBox="0 0 24 24"><circle cx="8.5" cy="8" r="3"/><path d="M2.5 19c0-3.3 2.7-5.6 6-5.6"/><circle cx="16.7" cy="9.5" r="2.4"/><path d="M14.6 14.1c3.5-.5 6.9 1.4 6.9 4.9"/></svg></div><h3>Arma los equipos</h3><p>Pones los nombres de cada lado y generas el match. Comparte un link para que cada uno se sume solo.</p></div>
      <div class="feature"><div class="ic"><svg viewBox="0 0 24 24"><path d="M21.5 2.5L10.5 13.5M21.5 2.5l-7 19-4-8.5-8.5-4 19.5-6.5z"/></svg></div><h3>Manda al grupo</h3><p>Te generamos una invitación lista para el WhatsApp, con fecha, ubicación y botón para agregar al calendario.</p></div>
      <div class="feature"><div class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6.5v11M14.7 9c0-1.2-1.2-2-2.7-2s-2.7.8-2.7 2 1.2 1.6 2.7 2 2.8.8 2.8 2.1-1.3 2-2.8 2-2.8-.7-2.8-2"/></svg></div><h3>Recupera tu plata</h3><p>Tú confirmas pagando. Si quieres, generas un link para que cada jugador te transfiera su parte. Sin que dependas de que paguen todos.</p></div>
      <div class="feature"><div class="ic"><svg viewBox="0 0 24 24"><path d="M6.5 4h11v4.5a5.5 5.5 0 0 1-11 0z"/><path d="M6.5 6H3.5v1a3.5 3.5 0 0 0 3.5 3.5M17.5 6h3v1a3.5 3.5 0 0 1-3.5 3.5"/><path d="M12 13.5v4M8.5 20.5h7M10 20.5l.4-3h3.2l.4 3"/></svg></div><h3>Torneos y ligas</h3><p>Inscríbete a campeonatos, sigue el fixture y la tabla de posiciones desde la misma plataforma.</p></div>
      <div class="feature"><span class="soon">Pronto</span><div class="ic"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg></div><h3>Busca jugadores</h3><p>¿Te falta gente? La comunidad CB: ofrécete para jugar con tu posición y tu nivel del 1 al 10, y completa el equipo.</p></div>
    </div>
  </div>
</section>

<!-- GALERIA / RECINTO -->
<section class="block" id="recinto">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">El recinto</span>
      <h2>Conoce <em>Canchas Bosquemar</em></h2>
      <p>Canchas techadas de primer nivel y una Casa Club para vivir el deporte.</p>
    </div>
    <div class="galeria">
      <div class="gcard"><img src="/assets/fotos/render-canchas.jpg" alt="Vista aérea de las canchas techadas" /><div class="cap">Vista aérea del recinto</div></div>
      <div class="gcard"><img src="/assets/fotos/galpon.jpg" alt="Estructura de las canchas techadas" /><div class="cap">Estructura techada</div></div>
      <div class="gcard"><img src="/assets/fotos/casa-club.jpg" alt="Casa Club Canchas Bosquemar" /><div class="cap">Casa Club</div></div>
    </div>
  </div>
</section>

<!-- RESERVA -->
<section class="block" id="reservar">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Reserva en vivo</span>
      <h2>Elige tu <em>horario</em></h2>
      <p>Selecciona cancha y día. Los horarios con ⚡ son horario punta.</p>
    </div>
    <div class="booker">
      <div class="booker-top">
        <div class="field">
          <label>Cancha</label>
          <div class="courts" id="courts">
            <div class="chip active" data-c="1">Cancha 1</div>
            <div class="chip" data-c="2">Cancha 2</div>
            <div class="chip" data-c="3">Cancha 3</div>
          </div>
        </div>
        <div class="field"><label>Día</label>
          <div class="picker" id="dayPicker">
            <button type="button" class="picker-btn" id="dayBtn">
              <svg class="cal-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>
              <span id="dayLabel">Hoy 17 jun</span>
              <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="cal" id="cal"></div>
          </div>
        </div>
        <div class="field" style="margin-left:auto"><label>Duración</label>
          <div class="picker" id="durPicker">
            <button type="button" class="picker-btn" id="durBtn">
              <span id="durLabel">1 hora</span>
              <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="menu" id="durMenu">
              <div class="menu-item sel" data-v="1">1 hora</div>
              <div class="menu-item" data-v="1.5">1 hora 30 min</div>
            </div>
          </div>
        </div>
      </div>
      <div class="legend">
        <span><i style="background:#fff;border:2px solid var(--line)"></i>Disponible</span>
        <span><i style="background:var(--orange)"></i>Seleccionado</span>
        <span><i style="background:#f1f4f3;border:1px dashed #c5d2cf"></i>Ocupado</span>
        <span>⚡ Horario punta</span>
      </div>
      <div class="slots" id="slots"></div>
    </div>
  </div>
</section>

<!-- CASA CLUB -->
<section class="block" id="club">
  <div class="wrap club">
    <div>
      <span class="eyebrow">🏠 Casa Club CB</span>
      <h2 style="font-size:clamp(2rem,4.5vw,3rem);font-style:italic;font-weight:900;text-transform:uppercase;margin:12px 0 14px">Mucho más<br>que canchas</h2>
      <p style="color:var(--slate);font-size:1.06rem;margin-bottom:8px">La Casa Club: el cuartel general de Canchas Bosquemar. Llega, cámbiate, juega y quédate un rato.</p>
      <ul class="club-list">
        <li><span class="ic"><svg viewBox="0 0 24 24"><path d="M7 21V8.5A4.5 4.5 0 0 1 11.5 4"/><path d="M11.5 2.2v3.6"/><ellipse cx="16" cy="9" rx="5" ry="1.8"/><path d="M13 13v1.3M16 14v1.3M19 13v1.3"/></svg></span><div><b>Camarines y duchas</b> — llega listo, ándate listo.</div></li>
        <li><span class="ic"><svg viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M2.5 9.5h19M6 14.5h4"/></svg></span><div><b>Pagos y atención</b> — reserva online o paga en el local.</div></li>
        <li><span class="ic"><svg viewBox="0 0 24 24"><path d="M6 7.5h12l-1.1 12.5H7.1z"/><path d="M5 7.5h14"/><path d="M9.5 4c0 1 .8 1.4.8 2.4M13.5 3.5c0 1 .8 1.4.8 2.4"/></svg></span><div><b>Quiosco</b> — bebidas, hidratación y accesorios.</div></li>
        <li><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 21.5s7-6.5 7-11.5a7 7 0 1 0-14 0c0 5 7 11.5 7 11.5z"/><circle cx="12" cy="10" r="2.6"/></svg></span><div><b>Punto de encuentro</b> — el corazón de la comunidad CB.</div></li>
      </ul>
      <div style="margin-top:22px"><a href="#reservar" class="btn btn-primary">Quiero jugar 🔥</a></div>
    </div>
    <div class="club-photo"><img src="/assets/fotos/casa-club.jpg" alt="Casa Club Canchas Bosquemar" /></div>
  </div>
</section>

<!-- UBICACION -->
<section class="block" id="ubicacion" style="padding-top:0">
  <div class="wrap">
    <div class="loc-card">
      <div>
        <h3>📍 Pob. Bosquemar, Puerto Montt</h3>
        <p style="opacity:.95;margin-top:6px">Dirección exacta próximamente. Fácil acceso y estacionamiento.</p>
      </div>
      <a href="#" class="btn btn-light">Ver en el mapa</a>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <img class="logo-foot" src="/assets/logo/cb-completo-blanco.png" alt="Canchas Bosquemar" />
        <p>Canchas de futbolito techadas en la Población Bosquemar. El nuevo epicentro deportivo de Puerto Montt.</p>
      </div>
      <div><h5>Navegación</h5><a href="#reservar">Reservar cancha</a><a href="#features">Cómo funciona</a><a href="#recinto">El recinto</a><a href="#club">Casa Club</a><a href="#ubicacion">Ubicación</a><a href="intranet.html" style="color:var(--teal-bright)">🔒 Intranet</a></div>
      <div class="foot-contact"><h5>Contacto</h5>
        <a href="https://wa.me/56900000000" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.15a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>WhatsApp</a>
        <a href="https://instagram.com/canchasbosquemar" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>Instagram</a>
        <a href="mailto:contacto@canchasbosquemar.cl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6.5l9 6 9-6"/></svg>contacto@canchasbosquemar.cl</a>
      </div>
    </div>
    <div class="foot-bottom"><span>© 2026 Canchas Bosquemar · Puerto Montt</span><span>El nuevo epicentro deportivo</span></div>
  </div>
</footer>

<!-- MODAL -->
<div class="overlay" id="overlay">
  <div class="modal">
    <div class="modal-head"><h3 id="m-title">Tu reserva</h3><button class="x" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="steps"><div class="s on"></div><div class="s"></div><div class="s"></div></div>

      <div class="step show" id="step1">
        <div class="summary">
          <div class="big">⚽</div>
          <div class="info"><b id="sum-court">Cancha 1</b><span id="sum-when">Hoy · 20:00 hrs · 1 hora</span></div>
          <div class="price"><span style="font-size:.78rem;color:var(--slate)">Total</span><b id="sum-price">$32.000</b></div>
        </div>
        <div class="note">💡 <b>Tú reservas, tú confirmas.</b> Pagas el arriendo y la cancha queda bloqueada al toque. Después, si quieres, divides el gasto con el grupo — pero la reserva no depende de que paguen todos.</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn-primary" style="flex:1" onclick="goStep(2)">Pagar y continuar 💳</button>
          <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        </div>
        <p style="text-align:center;color:var(--slate);font-size:.78rem;margin-top:14px">🔒 Pago simulado en la vista previa · Webpay · Mercado Pago · Flow</p>
      </div>

      <div class="step" id="step2">
        <p style="color:var(--slate);font-size:.92rem;margin-bottom:16px">Arma los dos equipos. Puedes saltarte esto y compartir un link para que cada uno se agregue solo.</p>
        <div class="teams">
          <div class="team A"><h4>🟢 Equipo Verde <small id="cntA">0</small></h4><div class="players" id="playersA"></div><div class="add-row"><input id="inA" placeholder="Nombre del jugador" onkeydown="if(event.key==='Enter')addPlayer('A')"><button onclick="addPlayer('A')">+</button></div></div>
          <div class="team B"><h4>🟠 Equipo Naranja <small id="cntB">0</small></h4><div class="players" id="playersB"></div><div class="add-row"><input id="inB" placeholder="Nombre del jugador" onkeydown="if(event.key==='Enter')addPlayer('B')"><button onclick="addPlayer('B')">+</button></div></div>
        </div>
        <div style="display:flex;gap:10px;margin-top:20px">
          <button class="btn btn-ghost" onclick="goStep(1)">← Volver</button>
          <button class="btn btn-primary" style="flex:1" onclick="goStep(3)">Generar invitación 🎟️</button>
        </div>
      </div>

      <div class="step" id="step3">
        <div class="share-card" id="shareCard">
          <div class="sc-top"><img class="sc-badge-img" src="/assets/logo/cb-isotipo.png" alt="CB" /><div class="sc-when" id="sc-when">Hoy · 20:00 hrs</div></div>
          <div class="sc-title">¡Tenemos pichanga! ⚽</div>
          <div class="sc-sub" id="sc-court">Cancha 1 · Canchas Bosquemar</div>
          <div class="sc-teams">
            <div class="sc-team"><h5>🟢 Verde</h5><div id="sc-teamA">Por confirmar</div></div>
            <div class="sc-vs">VS</div>
            <div class="sc-team"><h5>🟠 Naranja</h5><div id="sc-teamB">Por confirmar</div></div>
          </div>
          <div class="sc-foot"><span>📍 Pob. Bosquemar, Pto. Montt</span><span id="sc-price">💳 $32.000</span></div>
        </div>
        <div class="share-actions">
          <button class="btn btn-wa" onclick="shareWhatsApp()">Compartir WhatsApp</button>
          <button class="btn btn-ghost" onclick="addToCalendar()">📅 Calendario</button>
          <button class="btn btn-ghost" onclick="copyText()">📋 Copiar</button>
          <button class="btn btn-teal" onclick="finish()">Listo ✅</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="fab-stack">
  <a class="fab fab-wa" href="https://wa.me/56900000000" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.15a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg></a>
  <a class="fab fab-ig" href="https://instagram.com/canchasbosquemar" target="_blank" rel="noopener" aria-label="Síguenos en Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" stroke="none"/></svg></a>
</div>

<div class="toast" id="toast"></div>`;
