const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

form.addEventListener('input', event => {
  const inputMessage = textarea.value.trim();
  const inputEmail = input.value.trim();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ email: inputEmail, message: inputMessage })
  );
});

function fillInForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const user = JSON.parse(savedData);
    console.log(user);

    input.value = user.email || '';
    textarea.value = user.message || '';
  }
}

fillInForm();
