import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refForm = document.querySelector('.feedback-form');

restoreUserData();

refForm.addEventListener('submit', onFormSubmit);
refForm.addEventListener('input', throttle(onFormChange, 500));


function onFormChange(e) {
  let userData = localStorage.getItem(STORAGE_KEY);

  userData = userData ? JSON.parse(userData) : {};
  userData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function restoreUserData() {
  let savedUserData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedUserData) {
    Object.entries(savedUserData).forEach(([name, value]) => {
      refForm.elements[name].value = value;
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}
