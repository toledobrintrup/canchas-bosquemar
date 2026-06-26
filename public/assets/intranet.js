/* Tema claro/oscuro del ERP — sin parpadeo + botón en la topbar */
(function () {
  var t = localStorage.getItem('cb-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

(function () {
  var SUN = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2.5M12 20v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M1.5 12h2.5M20 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2z"/></svg>';

  function start() {
    var right = document.querySelector('.topbar .right');
    if (!right) return;
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
