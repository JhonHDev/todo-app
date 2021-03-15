import createTodo from './createTodo';
import renderTodo from './renderTodo';
import deleteCompleted from './deleteCompleted';
import resetForm from './resetForm';
import { incrementCounter } from './todoCounter';

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

const deleteTodoCompleted = (e) => {
  e.preventDefault();

  todoList.forEach((todo) => {
    const isTodoCompleted = todo.completed;

    if (isTodoCompleted) {
      const { id } = todo;
      deleteTodo(id);
      saveLocalStorage();
    }
  });

  deleteCompleted();
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

export {
  getFormValues,
  deleteTodoCompleted,
  deleteTodo,
  toggleTodoCompleted,
  getLocalStorage,
  saveLocalStorage,
};
