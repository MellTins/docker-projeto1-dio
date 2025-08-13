(function() {
  const btn = document.getElementById('themeBtn');
  const root = document.documentElement;
  const THEME_KEY = 'theme';
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') root.classList.add('light');

  btn?.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  });

  console.log('Site rodando dentro de Apache + Docker.');
})();
