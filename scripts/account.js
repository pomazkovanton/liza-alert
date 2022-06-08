const profileInputs = document.querySelectorAll('.personal-info__input');
const profileSubmitForms = document.querySelectorAll('.personal-info__form');
const profileAvatar = document.querySelector('.sidebar-account__image');
const profileName = document.querySelector('.sidebar-account__title');
const formAvatar = document.querySelector('#form-avatar');
const formName = document.querySelector('#form-name');
profileName.textContent = [formName.value];
profileAvatar.setAttribute('src', `${`../assets/images/${formAvatar.value}`}`);

function disableRemove(elem) {
  elem.removeAttribute('disabled');
}

function disableAdd(elem) {
  elem.setAttribute('disabled', 'disabled');
}

function submitForm() {
  profileInputs.forEach((item) => {
    const itemLocal = item;
    if (itemLocal.value.length !== 0) {
      itemLocal.textContent = item.value;
      profileName.textContent = formName.value;
      profileAvatar.setAttribute('src', `${`../assets//images/${formAvatar.value}`}`);
    }
  });
}

profileInputs.forEach((item) => {
  const itemLocal = item;
  itemLocal.oninput = () => {
    const parentForm = itemLocal.closest('form');
    const profileSubmitBttn = parentForm.querySelector('.personal-info__button-submit');
    disableRemove(profileSubmitBttn);
  };
});

profileSubmitForms.forEach((form) => form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitForm();
  disableAdd(form.lastElementChild);
}));
