import { saveLocalStorage, toggleTodoCompleted, deleteTodo } from './app';
import { decrementCounter } from './todoCounter';

const deleteTodoItem = (e) => {
  const todoItem = e.target.parentElement;
  const todoItemId = todoItem.getAttribute('id');

  deleteTodo(todoItemId);
  saveLocalStorage();
  decrementCounter();
  todoItem.remove();
};

const toggleCheckTodoItem = (e) => {
  const todoItem = e.target.parentElement;
  const todoItemId = todoItem.getAttribute('id');

  toggleTodoCompleted(todoItemId);
  saveLocalStorage();
  todoItem.classList.toggle('completed');
};

const todoItemActions = (e) => {
  const isCheckButton = e.target.classList.contains('check');
  const isDeleteButton = e.target.classList.contains('todo__delete');

  if (isCheckButton) {
    toggleCheckTodoItem(e);
  } else if (isDeleteButton) {
    deleteTodoItem(e);
  }
};

export default todoItemActions;
