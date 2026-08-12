const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('mobile-open', !open);
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menu?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('mobile-open');
  });
});

const inquiryForm = document.querySelector('#inquiry-form');
inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(inquiryForm);
  const subject = encodeURIComponent('New project enquiry from ' + data.get('name'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\n' +
    'Email or phone: ' + data.get('contact') + '\n\n' +
    'Project details:\n' + (data.get('brief') || 'Not provided')
  );
  window.location.href = 'mailto:info@bombaystudio.in?subject=' + subject + '&body=' + body;
});