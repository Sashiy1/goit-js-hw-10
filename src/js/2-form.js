const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form')
const textarea = document.querySelector('textarea')
const input = document.querySelector('input')

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY)
   event.currentTarget.reset()
}

textarea.addEventListener("input", onTextareaInput);

function onTextareaInput (event) {
    const message = event.target.value
    localStorage.setItem(STORAGE_KEY, message)
}

function populateTextArea () {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
   

    if (savedMessage) {
        textarea.value = savedMessage;
    }
}


populateTextArea();