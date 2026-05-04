/* --- Custom Theme Functionality --- */
(function () {
  // Mobile Menu Toggle Logic
  document.addEventListener('click', function (event) {
    var toggle = event.target.closest('[data-mobile-menu-toggle]');
    if (!toggle) return;

    var header = toggle.closest('header');
    var panel = header && header.querySelector('[data-mobile-menu-panel]');
    var isOpen = toggle.classList.toggle('is-open');

    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    if (panel) panel.classList.toggle('is-open', isOpen);
  });
})();
