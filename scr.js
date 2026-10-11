const dialog = document.querySelector('#consult-dialog');
const problemField = document.querySelector('[name="problem"]');
const serviceOptions = [...document.querySelectorAll('[name="services"]')];
const status = document.querySelector('.form-status');

document.querySelectorAll('[data-open-consult]').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = serviceOptions.filter((option) => option.checked).map((option) => option.value);
    if (selected.length) problemField.value = `Интересует: ${selected.join(', ')}.`;
    status.textContent = '';
    if (!dialog.open) dialog.showModal();
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    document.querySelector('.main-nav').classList.remove('is-open');
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('#consult-form').addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Спасибо! Форма заполнена. Чтобы заявки приходили вам, подключите обработчик или почтовый сервис.';
});

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  document.querySelector('.main-nav').classList.toggle('is-open', !isOpen);
});
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  document.querySelector('.main-nav').classList.remove('is-open');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

