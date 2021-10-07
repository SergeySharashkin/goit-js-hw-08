
var throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
const email = formEl.querySelector('input');
const message = formEl.querySelector('textarea');
const FORM_DATA = 'feedback-form-state';

const data = {
  form: formEl,
  email: email,
  message: message,
};
populateFormInput();

let formData = {};

data.form.addEventListener('submit', onFormSubmit);
data.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}


function populateFormInput() {
  const savedFormData = localStorage.getItem(FORM_DATA);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
  
    data.email.value = parsedFormData.email;
    data.message.value = parsedFormData.message;
  }
 
}

function onFormSubmit(e) {
  e.preventDefault();
  
  e.target.reset();
  localStorage.removeItem(FORM_DATA);
  console.log(`Form Submited. Form is ${JSON.stringify(formData)}`);
}