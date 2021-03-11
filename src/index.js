import './assets/styles/main.scss';

import { getFormValues, todoItemActions, getLocalStorage } from './js/app';
import { getCounter } from './js/todoCounter';

const runApp = () => {
  const form = document.getElementById('form');
  const formCheck = document.getElementById('formCheck');
  const todoContainer = document.getElementById('todoContainer');

  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
  });

  todoContainer.addEventListener('click', todoItemActions);

  window.addEventListener('DOMContentLoaded', () => {
    getLocalStorage();
    getCounter();
  });
};

runApp();
