/* No dependencies, APIs, backend, tracking or cookies. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Mobile menu is keyboard/screen-reader friendly.
  const toggle = $('.menu-toggle');
  const nav = $('#primary-nav');
  const closeMenu = () => {
    nav?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation menu');
    document.body.classList.remove('menu-open');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });
  $$('#primary-nav a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (innerWidth > 850) closeMenu(); });

  const header = $('.site-header');
  const syncHeader = () => header?.classList.toggle('is-scrolled', scrollY > 15);
  addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  // Project filtering: all projects exist in HTML for SEO and no-JS browsing.
  const filterButtons = $$('.filter-chip[data-filter]');
  const cards = $$('.project-card[data-category]');
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((other) => {
      const active = other === button;
      other.classList.toggle('is-active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card) => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
  }));

  // Use screenshots from the ORIGINAL assets folder if they exist.
  // If only these new files are uploaded, polished CSS previews remain visible.
  $$('.project-shot, .portrait-image').forEach((image) => {
    const show = () => image.parentElement.classList.add('has-image');
    const hide = () => image.parentElement.classList.remove('has-image');
    image.addEventListener('load', () => image.naturalWidth ? show() : hide());
    image.addEventListener('error', hide);
    if (image.complete && image.naturalWidth) show();
  });

  // Static GitHub Pages hosting cannot deliver a form by itself.
  // Make a composed draft in the user's email or WhatsApp app; no automatic sending.
  const form = $('#inquiry-form');
  const notice = $('#form-notice');
  function buildBrief() {
    if (!form || !form.reportValidity()) return null;
    const get = (name) => form.elements.namedItem(name).value.trim();
    const name = get('name');
    const email = get('email');
    const type = get('type');
    const budget = get('budget');
    const details = get('details');
    const subject = `Website enquiry: ${type} — ${name}`;
    const body = `Hello Himas,\n\nI'd like to discuss a project.\n\nName: ${name}\nEmail: ${email}\nProject type: ${type}\nEstimated budget: ${budget}\n\nProject details:\n${details}\n\nThank you!`;
    return { subject, body };
  }
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const brief = buildBrief();
    if (!brief) return;
    const mailto = `mailto:mhdhimas99@gmail.com?subject=${encodeURIComponent(brief.subject)}&body=${encodeURIComponent(brief.body)}`;
    window.location.href = mailto;
    if (notice) notice.textContent = 'Your email app should open with a draft. Review and send it there; the website does not send messages automatically.';
  });
  $('#whatsapp-brief')?.addEventListener('click', () => {
    const brief = buildBrief();
    if (!brief) return;
    const url = `https://wa.me/94703883436?text=${encodeURIComponent(`${brief.subject}\n\n${brief.body}`)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    if (notice) notice.textContent = 'WhatsApp should open with your project brief. Please review it and press Send there.';
  });
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
