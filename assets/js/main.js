function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const isDark = current === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('theme-btn').textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
}

(function() {
  const saved = localStorage.getItem('theme');
  const theme = saved || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('theme-btn').textContent = theme === 'dark' ? '☀️' : '🌙';
  });
})();

(function() {
  const path = window.location.pathname;
  const links = [
    { prefix: '/writing/', id: 'nav-writing' },
    { prefix: '/resume/', id: 'nav-resume' },
    { prefix: '/',        id: 'nav-home' },
  ];
  for (const { prefix, id } of links) {
    if (path === prefix || path.startsWith(prefix)) {
      const el = document.getElementById(id);
      if (el) el.classList.add('active');
      break;
    }
  }
})();
