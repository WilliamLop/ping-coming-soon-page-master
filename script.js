

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

validarEmail();

emailInput.addEventListener('input', () => {
  validarEmail();
});

function validarEmail() {
  const email = emailInput.value;

  if (email === '') {
    emailError.innerHTML = 'Por favor ingrese su correo electrónico';
    emailError.classList.add('message__error--active');
    return false;
  } else {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}(\,[\s]*)?)+$/;

    if (regex.test(email)) {
      emailError.classList.remove('message__error--active');
      emailInput.classList.remove('from__email--active');
      return true;
    } else {
      emailError.innerHTML = 'Por favor ingrese un correo electrónico válido';
      emailError.classList.add('message__error--active');
      emailInput.classList.add('from__email--active');
      return false;
    }
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  if (!validarEmail()) {
    event.preventDefault();
  }
});
