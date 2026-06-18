
  const TODAY = new Date(2026,5,17);
  const state = { court:1, date:new Date(TODAY), dur:1, time:null, price:0, teams:{A:[],B:[]} };
  const PRICE_BASE = 28000, PRICE_PEAK = 34000;
  const fmt = n => '$'+n.toLocaleString('es-CL');
  const dayNames = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const monthNames = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const MES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const DOW = ['L','M','M','J','V','S','D'];
  const sameDay=(a,b)=>a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
  const midnight=d=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
  function dayLabel(d){ const tom=new Date(TODAY); tom.setDate(TODAY.getDate()+1);
    if(sameDay(d,TODAY))return 'Hoy '+d.getDate()+' '+monthNames[d.getMonth()];
    if(sameDay(d,tom))return 'Mañana '+d.getDate()+' '+monthNames[d.getMonth()];
    return dayNames[d.getDay()]+' '+d.getDate()+' '+monthNames[d.getMonth()]; }

  const isPeak = h => h>=18;
  const dayKey = d => d.getDate()+d.getMonth()*31;
  function seededTaken(court,dk,h){ const x=Math.sin(court*97+dk*31+h*7)*10000; return (x-Math.floor(x))<0.32; }
  function renderSlots(){
    const box=document.getElementById('slots'); box.innerHTML=''; const dk=dayKey(state.date);
    for(let h=9;h<=22;h++){
      const peak=isPeak(h), taken=seededTaken(state.court,dk,h), price=peak?PRICE_PEAK:PRICE_BASE;
      const el=document.createElement('div');
      el.className='slot'+(peak?' peak':'')+(taken?' taken':'');
      el.innerHTML=`<div class="h">${String(h).padStart(2,'0')}:00</div><div class="p">${taken?'Ocupado':fmt(price)}</div>`;
      if(!taken){ el.onclick=()=>{ document.querySelectorAll('.slot.sel').forEach(s=>s.classList.remove('sel')); el.classList.add('sel'); state.time=h; state.price=Math.round(price*state.dur); openModal(); }; }
      box.appendChild(el);
    }
  }
  document.getElementById('courts').addEventListener('click',e=>{ const chip=e.target.closest('.chip'); if(!chip)return; document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); chip.classList.add('active'); state.court=+chip.dataset.c; renderSlots(); });

  // ---- pickers: día (calendario) + duración (menú) ----
  let viewY=state.date.getFullYear(), viewM=state.date.getMonth();
  const dayPicker=document.getElementById('dayPicker'), durPicker=document.getElementById('durPicker');
  const closeAll=()=>document.querySelectorAll('.picker.open').forEach(p=>p.classList.remove('open'));
  document.addEventListener('click',e=>{ if(!e.target.closest('.picker')) closeAll(); });
  document.getElementById('dayBtn').onclick=e=>{ e.stopPropagation(); const o=dayPicker.classList.contains('open'); closeAll(); if(!o){ viewY=state.date.getFullYear(); viewM=state.date.getMonth(); renderCal(); dayPicker.classList.add('open'); } };
  document.getElementById('durBtn').onclick=e=>{ e.stopPropagation(); const o=durPicker.classList.contains('open'); closeAll(); if(!o) durPicker.classList.add('open'); };
  function renderCal(){
    const startDow=(new Date(viewY,viewM,1).getDay()+6)%7;
    const dim=new Date(viewY,viewM+1,0).getDate(); const tmin=midnight(TODAY);
    let h=`<div class="cal-head"><button type="button" class="cal-nav" data-d="-1">‹</button><b>${MES[viewM]} ${viewY}</b><button type="button" class="cal-nav" data-d="1">›</button></div><div class="cal-grid">`;
    DOW.forEach(d=>h+=`<div class="cal-dow">${d}</div>`);
    for(let i=0;i<startDow;i++) h+='<div class="cal-day empty"></div>';
    for(let dd=1;dd<=dim;dd++){ const dt=new Date(viewY,viewM,dd); const past=midnight(dt)<tmin;
      h+=`<div class="cal-day${past?' dis':''}${sameDay(dt,TODAY)?' today':''}${sameDay(dt,state.date)?' sel':''}" data-day="${dd}">${dd}</div>`; }
    document.getElementById('cal').innerHTML=h+'</div>';
  }
  document.getElementById('cal').addEventListener('click',e=>{
    const nav=e.target.closest('.cal-nav');
    if(nav){ viewM+=+nav.dataset.d; if(viewM<0){viewM=11;viewY--;} if(viewM>11){viewM=0;viewY++;} renderCal(); return; }
    const day=e.target.closest('.cal-day');
    if(day&&!day.classList.contains('dis')&&!day.classList.contains('empty')){
      state.date=new Date(viewY,viewM,+day.dataset.day);
      document.getElementById('dayLabel').textContent=dayLabel(state.date);
      closeAll(); renderSlots();
    }
  });
  document.getElementById('durMenu').addEventListener('click',e=>{
    const it=e.target.closest('.menu-item'); if(!it)return;
    state.dur=+it.dataset.v; document.getElementById('durLabel').textContent=it.textContent;
    document.querySelectorAll('#durMenu .menu-item').forEach(m=>m.classList.toggle('sel',m===it));
    closeAll();
  });
  document.getElementById('dayLabel').textContent=dayLabel(state.date);

  function whenLabel(){ const durTxt=state.dur===1?'1 hora':'1 hora 30 min'; return `${dayLabel(state.date)} · ${String(state.time).padStart(2,'0')}:00 hrs · ${durTxt}`; }
  function openModal(){
    document.getElementById('sum-court').textContent='Cancha '+state.court;
    document.getElementById('sum-when').textContent=whenLabel();
    document.getElementById('sum-price').textContent=fmt(state.price);
    document.getElementById('sc-when').textContent=whenLabel().split(' · ').slice(0,2).join(' · ');
    document.getElementById('sc-court').textContent=`Cancha ${state.court} · Canchas Bosquemar`;
    document.getElementById('sc-price').textContent='💳 '+fmt(state.price);
    state.teams={A:[],B:[]}; renderPlayers(); goStep(1);
    document.getElementById('overlay').classList.add('open'); document.body.style.overflow='hidden';
  }
  function closeModal(){ document.getElementById('overlay').classList.remove('open'); document.body.style.overflow=''; }
  document.getElementById('overlay').addEventListener('click',e=>{ if(e.target.id==='overlay') closeModal(); });
  function goStep(n){
    document.querySelectorAll('.step').forEach((s,i)=>s.classList.toggle('show',i===n-1));
    document.querySelectorAll('.steps .s').forEach((s,i)=>s.classList.toggle('on',i<n));
    document.getElementById('m-title').textContent=['Tu reserva','Arma los equipos','¡Comparte!'][n-1];
    if(n===3) updateShareCard();
  }
  function addPlayer(side){ const inp=document.getElementById('in'+side); const name=inp.value.trim(); if(!name)return; state.teams[side].push(name); inp.value=''; inp.focus(); renderPlayers(); }
  function removePlayer(side,i){ state.teams[side].splice(i,1); renderPlayers(); }
  function renderPlayers(){
    ['A','B'].forEach(side=>{
      const box=document.getElementById('players'+side); box.innerHTML='';
      state.teams[side].forEach((n,i)=>{ const ini=n.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase(); const el=document.createElement('div'); el.className='player'; el.innerHTML=`<span class="av">${ini}</span>${n}<button onclick="removePlayer('${side}',${i})">✕</button>`; box.appendChild(el); });
      document.getElementById('cnt'+side).textContent=state.teams[side].length+(state.teams[side].length===1?' jugador':' jugadores');
    });
  }
  function updateShareCard(){ document.getElementById('sc-teamA').textContent=state.teams.A.length?state.teams.A.join(', '):'Por confirmar'; document.getElementById('sc-teamB').textContent=state.teams.B.length?state.teams.B.join(', '):'Por confirmar'; }
  function inviteText(){ const A=state.teams.A.length?state.teams.A.join(', '):'(por confirmar)'; const B=state.teams.B.length?state.teams.B.join(', '):'(por confirmar)'; return `⚽ ¡PICHANGA EN CANCHAS BOSQUEMAR! ⚽\n\n📅 ${document.getElementById('sc-when').textContent}\n📍 Cancha ${state.court} · Canchas Bosquemar, Pob. Bosquemar, Puerto Montt\n💳 Total: ${fmt(state.price)}\n\n🟢 Verde: ${A}\n🟠 Naranja: ${B}\n\n¡Nos vemos en la cancha! 🔥`; }
  function shareWhatsApp(){ window.open('https://wa.me/?text='+encodeURIComponent(inviteText()),'_blank'); }
  function copyText(){ navigator.clipboard.writeText(inviteText()).then(()=>toast('¡Invitación copiada! 📋')); }
  function addToCalendar(){
    const d=state.date, pad=x=>String(x).padStart(2,'0');
    const dt=`${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}T${pad(state.time)}0000`;
    const endH=state.time+1, endM=state.dur===1?'00':'30';
    const dtEnd=`${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}T${pad(endH)}${endM}00`;
    const ics=['BEGIN:VCALENDAR','VERSION:2.0','BEGIN:VEVENT',`SUMMARY:Pichanga Canchas Bosquemar - Cancha ${state.court}`,`LOCATION:Canchas Bosquemar, Poblacion Bosquemar, Puerto Montt`,`DESCRIPTION:Reserva en Canchas Bosquemar`,`DTSTART:${dt}`,`DTEND:${dtEnd}`,'END:VEVENT','END:VCALENDAR'].join('\n');
    const blob=new Blob([ics],{type:'text/calendar'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='pichanga-canchas-bosquemar.ics'; a.click(); toast('📅 Evento descargado');
  }
  function finish(){ closeModal(); toast('¡Reserva confirmada! Revisa tu correo 📧'); }
  let toastT; function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2600); }
  renderSlots();
