const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (toggle && nav && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
});
const desktop = window.matchMedia('(min-width: 801px)');
desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });

const form = document.querySelector('.enquiry-form');
if (form) {
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (!String(data.get('name') || '').trim()) {
      const field = form.querySelector('[name="name"]');
      field.setCustomValidity('Please enter your name.');
      field.reportValidity();
      field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
      return;
    }
    const message = [
      'Hello Ms & Mrs Fabrics and Boutique, I would like to discuss a design.',
      `Name: ${String(data.get('name') || '').trim()}`,
      `Service: ${String(data.get('service') || '').trim()}`,
      data.get('date') ? `Required date: ${data.get('date')}` : '',
      data.get('details') ? `Design details: ${String(data.get('details')).trim()}` : '',
      'Please let me know how to arrange a consultation.'
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/919444248866?text=${encodeURIComponent(message)}`;
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (status) {
      status.replaceChildren();
      status.append('Your message is ready. Review it in WhatsApp and tap Send to contact the boutique. ');
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Open WhatsApp';
      status.append(link);
    }
  });
}
