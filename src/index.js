import './assets/styles/main.scss';

import { getTodoList, getFormValues, deleteTodoCompleted } from './js/app';
import { getCounterValue } from './js/todoListCounter';
import { getDarkModeIconState, toggleDarkModeIcon } from './js/darkImage';
import { getDarkModeState } from './js/darkMode';

import todoListActions from './js/todoListActions';
import todoListFilter from './js/todoListFilter';

const runApp = () => {
  const form = document.getElementById('form');
  const formCheck = document.getElementById('formCheck');
  const todoContainer = document.getElementById('todoContainer');
  const filteringOptions = document.getElementById('filteringOptions');
  const btnClear = document.querySelector('.clear__link');
  const darkModeIcon = document.getElementById('darkModeIcon');

  window.addEventListener('DOMContentLoaded', () => {
    getTodoList();
    getCounterValue();
    getDarkModeIconState();
    getDarkModeState();
  });

  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) =>
    e.target.classList.toggle('completed')
  );

  todoContainer.addEventListener('click', todoListActions);

  filteringOptions.addEventListener('click', todoListFilter);

  btnClear.addEventListener('click', deleteTodoCompleted);

  darkModeIcon.addEventListener('click', toggleDarkModeIcon);
};

runApp();
