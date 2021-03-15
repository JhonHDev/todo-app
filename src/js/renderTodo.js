import deleteIcon from '../assets/images/icon-cross.svg';

const renderTodo = ({ id, task, completed }) => {
  const todoContainer = document.getElementById('todoContainer');
  const element = document.createElement('div');

  element.innerHTML = `
  <div class="todo__item ${completed ? 'completed' : ''} " id="${id}">

    <div class="check"></div>

    <p class="todo__text">${task}</p>

    <img src="${deleteIcon}" class="todo__delete" />
    
  </div>`;

  const todoItem = element.firstElementChild;
  todoContainer.insertAdjacentElement('afterbegin', todoItem);
};

export default renderTodo;
