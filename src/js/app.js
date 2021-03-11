import createTodo from './createTodo';
import renderTodo from './renderTodo';
import resetForm from './resetForm';
import { incrementCounter, decrementCounter } from './todoCounter';

let todoList = [];
const form = document.getElementById('form');
const formCheck = document.getElementById('formCheck');

const saveLocalStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const getLocalStorage = () => {
  if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.map(renderTodo);
  } else {
    todoList = [];
  }
};

const deleteTodo = (id) => {
  const todoId = Number(id);
  todoList = todoList.filter((todo) => todo.id !== todoId);
};

const toggleTodoCompleted = (id) => {
  const todoId = Number(id);

  todoList = todoList.map((todo) => {
    if (todo.id === todoId) {
      const newTodo = {
        ...todo,
        completed: !todo.completed,
      };
      return newTodo;
    }

    return todo;
  });
};

const todoItemActions = (e) => {
  const element = e.target;
  const { parentElement: todoItem } = element.parentElement;

  const isCheckButton = element.classList.contains('check__icon');
  const isDeleteButton = element.classList.contains('todo__delete');

  let todoItemId;

  if (isCheckButton) {
    todoItemId = element.parentElement.parentElement.getAttribute('id');
    toggleTodoCompleted(todoItemId);
    saveLocalStorage();
    element.parentElement.classList.toggle('completed');
    todoItem.classList.toggle('completed');
    todoItem.querySelector('p').classList.toggle('completed');
  }

  if (isDeleteButton) {
    todoItemId = element.parentElement.getAttribute('id');
    deleteTodo(todoItemId);
    saveLocalStorage();
    decrementCounter();
    element.parentElement.remove();
  }
};

const getFormValues = (e) => {
  e.preventDefault();

  const inputValue = document.getElementById('todoInput').value;
  const isCheckCompleted = formCheck.classList.contains('completed');

  if (inputValue.length >= 4) {
    const newTodo = createTodo(inputValue, isCheckCompleted);
    renderTodo(newTodo);
    todoList = [...todoList, newTodo];
    saveLocalStorage();
    incrementCounter();
    resetForm(form, formCheck);
  }
};

export { getFormValues, todoItemActions, getLocalStorage };
