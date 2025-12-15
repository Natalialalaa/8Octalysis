document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    nav.setAttribute('aria-hidden', String(!open));
  }

  btn.addEventListener('click', (e) => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
    btn.classList.toggle('open', !isOpen);
  });

  // keyboard: close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // close when a nav link is activated (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
  });
});
