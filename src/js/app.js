import createTodo from './createTodo';
import renderTodo from './renderTodo';
import clearTodosCompleted from './clearTodosCompleted';
import resetFormValues from './resetFormValues';
import { incrementCounter } from './todoListCounter';

let todoList = [];
const form = document.getElementById('form');
const formCheck = document.getElementById('formCheck');

const getTodoList = () => {
  if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.map(renderTodo);
  } else {
    todoList = [];
  }
};

const saveTodoList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const deleteTodo = (id) => {
  const todoItemId = Number(id);
  todoList = todoList.filter((todoItem) => todoItem.id !== todoItemId);
};

const deleteTodoCompleted = (e) => {
  e.preventDefault();

  todoList.forEach((todoItem) => {
    const isTodoItemCompleted = todoItem.completed;

    if (isTodoItemCompleted) {
      const { id } = todoItem;
      deleteTodo(id);
      saveTodoList();
    }
  });

  clearTodosCompleted();
};

const toggleTodoCompleted = (id) => {
  const todoItemId = Number(id);

  todoList = todoList.map((todo) => {
    if (todo.id === todoItemId) {
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
  const isCheckboxCompleted = formCheck.classList.contains('completed');

  if (inputValue.length > 0) {
    const newTodo = createTodo(inputValue, isCheckboxCompleted);
    renderTodo(newTodo);
    todoList = [...todoList, newTodo];
    saveTodoList();
    incrementCounter();
    resetFormValues(form, formCheck);
  }
};

export {
  getFormValues,
  toggleTodoCompleted,
  deleteTodoCompleted,
  deleteTodo,
  saveTodoList,
  getTodoList,
};
