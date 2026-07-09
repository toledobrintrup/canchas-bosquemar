/* ============================================================
   Núcleo financiero compartido (Flujo + Resumen).
   OJO: CUENTAS y saldoIni deben coincidir con intranet-caja.html.
   ============================================================ */
var FC = (function () {
  var CUENTAS = [
    { id: 'cb-chile', empresa: 'CB', banco: 'Banco de Chile', saldoIni: 0 },
    { id: 'cb-bice', empresa: 'CB', banco: 'Banco BICE', saldoIni: 0 },
    { id: 'qq-chile', empresa: 'QQ', banco: 'Banco de Chile', saldoIni: 21593053 }
  ];
  var EMP = { CB: 'Canchas Bosquemar', QQ: 'Quinque' };
  var MES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  var MOV = [];
  var FC_UPDATED = '';   // día de la última actualización de datos (campo "updated" del JSON)

  var fmt = function (n) { return (n < 0 ? '−$' : '$') + Math.abs(Math.round(n)).toLocaleString('es-CL'); };
  var fmtM = function (n) { return (n < 0 ? '−$' : '$') + (Math.abs(n) / 1e6).toFixed(1) + 'M'; };
  var corto = function (b) { return (b || '').replace('Banco de ', '').replace('Banco ', ''); };
  var signed = function (m) { return m.tipo === 'ingreso' ? m.monto : -m.monto; };
  var idsForScope = function (s) {
    return s === 'ALL' ? CUENTAS.map(function (c) { return c.id; })
      : s === 'CB' ? ['cb-chile', 'cb-bice'] : ['qq-chile'];
  };
  var cuenta = function (id) { return CUENTAS.find(function (c) { return c.id === id; }) || {}; };
  var saldoCuenta = function (id) {
    var c = cuenta(id);
    return (c.saldoIni || 0) + MOV.filter(function (m) { return m.cuenta === id; }).reduce(function (a, m) { return a + signed(m); }, 0);
  };
  var saldoScope = function (s) { return idsForScope(s).reduce(function (a, id) { return a + saldoCuenta(id); }, 0); };
  var periodo = function () { var ks = MOV.map(function (m) { return m.fecha.slice(0, 7); }); return ks.length ? ks.sort().pop() : '2026-07'; };
  var mesScope = function (s, mes, tipo) {
    var ids = idsForScope(s);
    return MOV.filter(function (m) { return ids.indexOf(m.cuenta) >= 0 && m.fecha.slice(0, 7) === mes && m.tipo === tipo; })
      .reduce(function (a, m) { return a + m.monto; }, 0);
  };
  // suma por categoría (opcional mes) o por glosa exacta, dentro de un scope
  var sumCat = function (s, cat, mes) {
    var ids = idsForScope(s);
    return MOV.filter(function (m) { return ids.indexOf(m.cuenta) >= 0 && m.cat === cat && (!mes || m.fecha.slice(0, 7) === mes); })
      .reduce(function (a, m) { return a + m.monto; }, 0);
  };
  var sumGlosa = function (s, glosa) {
    var ids = idsForScope(s);
    return MOV.filter(function (m) { return ids.indexOf(m.cuenta) >= 0 && m.glosa === glosa; })
      .reduce(function (a, m) { return a + m.monto; }, 0);
  };
  var load = function (cb) {
    fetch('data/qq-movimientos.json').then(function (r) { return r.json(); })
      .then(function (raw) { MOV = Array.isArray(raw) ? raw : (raw.movimientos || []); FC_UPDATED = (raw && raw.updated) || FC_UPDATED; if (cb) cb(); })
      .catch(function (e) { console.error('FC load:', e); if (cb) cb(); });
  };

  return {
    CUENTAS: CUENTAS, EMP: EMP, MES: MES,
    fmt: fmt, fmtM: fmtM, corto: corto, signed: signed,
    idsForScope: idsForScope, cuenta: cuenta, saldoCuenta: saldoCuenta, saldoScope: saldoScope,
    periodo: periodo, mesScope: mesScope, sumCat: sumCat, sumGlosa: sumGlosa, load: load,
    movs: function () { return MOV; },
    updated: function () { return FC_UPDATED; }
  };
})();
