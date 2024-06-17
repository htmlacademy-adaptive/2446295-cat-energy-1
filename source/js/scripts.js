// меняет цвет иконок и бордера при не правильно введенных данных
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contacts__fieldset');
  const emailInput = document.querySelector('.contact__input--email');
  const phoneInput = document.querySelector('.contact__input--phone');
  const emailLabel = document.querySelector('.contact__input-label--email');
  const phoneLabel = document.querySelector('.contact__input-label--phone');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailInput.validity.valid) {
      emailLabel.classList.add('error');
    } else {
      emailLabel.classList.remove('error');
    }

    if (!phoneInput.validity.valid) {
      phoneLabel.classList.add('error');
    } else {
      phoneLabel.classList.remove('error');
    }
  });
});