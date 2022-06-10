const checkedItems = document.querySelectorAll('.aside__checkbox-options');
const checkedList = document.querySelector('.aside__checked-options-list');
const checkedGroupItems = document.querySelectorAll('.aside__checkbox-options_group');
const resetAllBtn = document.querySelector('.aside__reset-button');

function showCard() {
  const filterLevel = [];
  const filterStatus = [];

  const cardBox = document.querySelectorAll('.card-list__base');

  checkedItems.forEach((el) => {
    if (el.checked === true && el.dataset.level === 'Уровень') {
      filterLevel.push(el.value);
    }

    if (el.checked === true && el.dataset.status === 'Статус') {
      filterStatus.push(el.dataset.btn);
    }
  });

  cardBox.forEach((e) => {
    e.classList.remove('card-list__base_shattered');

    if (filterLevel.length === 0 && filterStatus.length === 0) {
      e.classList.remove('card-list__base_shattered');
    } else if (filterLevel.includes(e.dataset.card) === false && filterLevel.length !== 0) {
      e.classList.add('card-list__base_shattered');
    } else if (filterStatus.includes(e.dataset.status) === false && filterStatus.length !== 0) {
      e.classList.add('card-list__base_shattered');
    }
  });
}

resetAllBtn.addEventListener('click', () => {
  checkedGroupItems.forEach((item) => {
    const localItem = item;
    localItem.checked = false;
  });
  showCard();

  const cardBox = document.querySelectorAll('.card-list__base');

  cardBox.forEach((e) => {
    e.classList.remove('card-list__base_shattered');
  });

  while (checkedList.firstChild) {
    checkedList.removeChild(checkedList.firstChild);
  }
  resetAllBtn.classList.remove('aside__reset-button_active');
});

function deleteCheckedItem(element) {
  element.remove();
}

function addCheckedItem(parent, child) {
  parent.prepend(child);
}

function createCheckedItem(evt) {
  const event = evt;
  const checkedItemTemplate = document.querySelector('.checked-item-template').content;
  const checkedItem = checkedItemTemplate.querySelector('.aside__checked-item').cloneNode(true);
  const deselectButton = checkedItem.querySelector('.aside__deselect-button');
  const checkedName = checkedItem.querySelector('.aside__name-checked-option');
  const itemCollection = checkedList.querySelectorAll('.aside__checked-item');
  checkedName.textContent = evt.value;

  if (evt.checked === true) {
    resetAllBtn.classList.add('aside__reset-button_active');
    if (evt.value === 'Активный') {
      checkedGroupItems.forEach((item) => {
        const localItem = item;
        localItem.checked = false;
      });
      event.checked = true;

      for (let i = 0; i < [...itemCollection].length; i += 1) {
        const elem = [...itemCollection][i].childNodes[1].childNodes[1].textContent;

        if (elem === 'Не активный') {
          deleteCheckedItem([...itemCollection][i]);
        }
      }
      addCheckedItem(checkedList, checkedItem);
    }

    if (evt.value === 'Не активный') {
      checkedGroupItems.forEach((item) => {
        const localItem = item;
        localItem.checked = false;
      });
      event.checked = true;

      for (let i = 0; i < [...itemCollection].length; i += 1) {
        const elem = [...itemCollection][i].childNodes[1].childNodes[1].textContent;

        if (elem === 'Активный') {
          deleteCheckedItem([...itemCollection][i]);
        }
      }
      addCheckedItem(checkedList, checkedItem);
    }
    addCheckedItem(checkedList, checkedItem);
  }

  if (evt.checked === false) {
    for (let i = 0; i < [...itemCollection].length; i += 1) {
      const elem = [...itemCollection][i].childNodes[1].childNodes[1].textContent;
      if (elem === evt.value) {
        deleteCheckedItem([...itemCollection][i]);
      }
    }
    if (checkedList.children.length === 0) {
      resetAllBtn.classList.remove('aside__reset-button_active');
    }
  }

  deselectButton.addEventListener('click', () => {
    deleteCheckedItem(checkedItem);
    event.checked = false;
    if (checkedList.children.length === 0) {
      resetAllBtn.classList.remove('aside__reset-button_active');
    }
    showCard();
  });
  showCard();
}

checkedItems.forEach((item) => item.addEventListener('click', () => {
  createCheckedItem(item);
}));