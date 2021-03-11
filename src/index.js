import './assets/styles/main.scss';

import { getFormValues, todoItemActions, getLocalStorage } from './js/app';
import { getCounter } from './js/todoCounter';

import todoItemsFilter from './js/todoItemsFilter';

const runApp = () => {
  const form = document.getElementById('form');
  const formCheck = document.getElementById('formCheck');
  const todoContainer = document.getElementById('todoContainer');
  const filteringOptions = document.getElementById('filteringOptions');

  window.addEventListener('DOMContentLoaded', () => {
    getLocalStorage();
    getCounter();
  });

  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
  });

  todoContainer.addEventListener('click', todoItemActions);

  filteringOptions.addEventListener('click', todoItemsFilter);
};

runApp();
