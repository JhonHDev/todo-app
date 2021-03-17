import { saveTodoList, toggleTodoCompleted, deleteTodo } from './app';
import { decrementCounter } from './todoListCounter';

const deleteTodoItem = (e) => {
  const todoItem = e.target.parentElement;
  const todoItemId = todoItem.getAttribute('id');

  deleteTodo(todoItemId);
  saveTodoList();
  decrementCounter();
  todoItem.remove();
};

const toggleCheckbox = (e) => {
  const todoItem = e.target.parentElement;
  const todoItemId = todoItem.getAttribute('id');

  toggleTodoCompleted(todoItemId);
  saveTodoList();
  todoItem.classList.toggle('completed');
};

const todoListActions = (e) => {
  const isCheckButton = e.target.classList.contains('check');
  const isDeleteButton = e.target.classList.contains('todo__delete');

  if (isCheckButton) {
    toggleCheckbox(e);
  } else if (isDeleteButton) {
    deleteTodoItem(e);
  }
};

export default todoListActions;
