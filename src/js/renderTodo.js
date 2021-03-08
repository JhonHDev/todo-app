import checkIcon from '../assets/images/icon-check.svg';
import deleteIcon from '../assets/images/icon-cross.svg';

const renderTodo = ({ id, task, completed }) => {
  const todoContainer = document.getElementById('todoContainer');
  const element = document.createElement('div');

  element.innerHTML = `
  <div class="todo__item" id="${id}">

    <div class="check ${completed ? 'completed' : ''}">
      <img src="${checkIcon}" class="check__icon" />
    </div>

    <p class="todo__text ${completed ? 'completed' : ''}">
      ${task}
    </p>

    <img src="${deleteIcon}" class="todo__delete" />
    
  </div>`;

  const todoItem = element.firstElementChild;
  todoContainer.insertAdjacentElement('afterbegin', todoItem);
};

export default renderTodo;
