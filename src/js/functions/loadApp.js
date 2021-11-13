import taskTemplate from './taskTemplate';

const loadApp = ({ todoList, darkMode, counter }) => {
  const $todoContainer = document.getElementById('todoContainer');

  todoList.todos.forEach((task) => {
    const $newTaskTemplate = taskTemplate({ ...task });
    $todoContainer.insertAdjacentElement('afterbegin', $newTaskTemplate);
  });

  darkMode.getDarkModeState();
  darkMode.getDarkModeIconState();
  counter.getCounterValue();
};

export default loadApp;
