
var throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
const email = formEl.querySelector('input');
const message = formEl.querySelector('textarea');
const FORM_DATA = 'feedback-form-state';
let formData = {};
const data = {
  form: formEl,
  email: email,
  message: message,
};

data.form.addEventListener('submit', onFormSubmit);
data.form.addEventListener('input', throttle(onFormInput, 500));
populateFormInput()
function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(`Form Submited. Form is ${JSON.stringify(formData)}`);
  e.target.reset();
  localStorage.removeItem(FORM_DATA);
}
function populateFormInput() {
  const savedFormData = localStorage.getItem(FORM_DATA);
  // const parsedFormData = JSON.parse(savedFormData);
//   console.log(savedFormData);
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    // console.log(parsedFormData);
    data.email.value = parsedFormData.email;
    data.message.value = parsedFormData.message;
  }
 
}
