import { Counter, DarkMode, TaskFilter, TodoList } from './classes';

import {
  loadApp,
  formActions,
  todoListActions,
  deleteCompletedTasks,
} from './functions';

const states = {
  todoList: new TodoList(),
  taskFilter: new TaskFilter(),
  counter: new Counter(),
  darkMode: new DarkMode(),
};

const runApp = () => {
  const $form = document.getElementById('form');
  const $formCheck = document.getElementById('formCheck');
  const $todoContainer = document.getElementById('todoContainer');
  const $btnClear = document.querySelector('.clear__link');
  const $filteringOptions = document.getElementById('filteringOptions');
  const $darkModeIcon = document.getElementById('darkModeIcon');

  window.addEventListener('DOMContentLoaded', () => {
    loadApp(states);
  });

  $form.addEventListener('submit', (e) => {
    formActions(e, states);
  });

  $formCheck.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
  });

  $todoContainer.addEventListener('click', (e) => {
    todoListActions(e, states);
  });

  $btnClear.addEventListener('click', (e) => {
    deleteCompletedTasks(e, states);
  });

  $filteringOptions.addEventListener('click', (e) => {
    states.taskFilter.getNameToFilter(e);
  });

  $darkModeIcon.addEventListener('click', (e) => {
    states.darkMode.toggleDarkModeIcon(e);
  });
};

export default runApp;
