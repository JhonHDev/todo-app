import { saveTodoList, toggleTodoItemCompleted, deleteTodoItem } from './app';
import { decrementCounter } from './todoListCounter';

const clearTodoItem = (e) => {
  const todoItem = e.target.parentElement;
  const todoItemId = todoItem.getAttribute('id');

  deleteTodoItem(todoItemId);
  saveTodoList();
  decrementCounter();
  todoItem.remove();
};

const toggleCheckbox = (e) => {
  const todoItem = e.target.parentElement;
  const todoItemId = todoItem.getAttribute('id');

  toggleTodoItemCompleted(todoItemId);
  saveTodoList();
  todoItem.classList.toggle('completed');
};

const todoListActions = (e) => {
  const isCheckButton = e.target.classList.contains('check');
  const isDeleteButton = e.target.classList.contains('todo__delete');

  if (isCheckButton) {
    toggleCheckbox(e);
  } else if (isDeleteButton) {
    clearTodoItem(e);
  }
};

export default todoListActions;
