import './assets/styles/main.scss';

import { getFormValues, deleteTodoCompleted, getLocalStorage } from './js/app';
import { getCounter } from './js/todoCounter';
import { toggleDarkIcon, getDarkIcon } from './js/darkImage';
import { getDarkMode } from './js/darkMode';

import todoItemActions from './js/todoItemActions';
import todoItemsFilter from './js/todoItemsFilter';

const runApp = () => {
  const form = document.getElementById('form');
  const formCheck = document.getElementById('formCheck');
  const todoContainer = document.getElementById('todoContainer');
  const filteringOptions = document.getElementById('filteringOptions');
  const btnClear = document.querySelector('.clear__link');
  const darkModeIcon = document.getElementById('darkModeIcon');

  window.addEventListener('DOMContentLoaded', () => {
    getLocalStorage();
    getCounter();
    getDarkIcon();
    getDarkMode();
  });

  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) =>
    e.target.classList.toggle('completed')
  );

  todoContainer.addEventListener('click', todoItemActions);

  filteringOptions.addEventListener('click', todoItemsFilter);

  btnClear.addEventListener('click', deleteTodoCompleted);

  darkModeIcon.addEventListener('click', toggleDarkIcon);
};

runApp();
