import './assets/styles/main.scss';

import { getFormValues, todoItemActions, getLocalStorage } from './js/app';
import { getCounter } from './js/todoCounter';

import todoItemsFilter from './js/todoItemsFilter';
import { toggleDarkIcon, getDarkIcon } from './js/darkImage';

const runApp = () => {
  const form = document.getElementById('form');
  const formCheck = document.getElementById('formCheck');
  const todoContainer = document.getElementById('todoContainer');
  const filteringOptions = document.getElementById('filteringOptions');
  const darkModeIcon = document.getElementById('darkModeIcon');

  window.addEventListener('DOMContentLoaded', () => {
    getLocalStorage();
    getCounter();
    getDarkIcon();
  });

  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
  });

  todoContainer.addEventListener('click', todoItemActions);

  filteringOptions.addEventListener('click', todoItemsFilter);

  darkModeIcon.addEventListener('click', toggleDarkIcon);
};

runApp();
