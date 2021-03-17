import createTodoItem from './createTodoItem';
import renderTodoItem from './renderTodoItem';
import clearTodoItemsCompleted from './clearTodoItemsCompleted';
import resetFormValues from './resetFormValues';
import { incrementCounter } from './todoListCounter';

let todoList = [];
const form = document.getElementById('form');
const formCheck = document.getElementById('formCheck');

const getTodoList = () => {
  if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.map(renderTodoItem);
  } else {
    todoList = [];
  }
};

const saveTodoList = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const deleteTodoItem = (id) => {
  const todoItemId = Number(id);
  todoList = todoList.filter((todoItem) => todoItem.id !== todoItemId);
};

const deleteTodoItemCompleted = (e) => {
  e.preventDefault();

  todoList.forEach((todoItem) => {
    const isTodoItemCompleted = todoItem.completed;

    if (isTodoItemCompleted) {
      const { id } = todoItem;
      deleteTodoItem(id);
      saveTodoList();
    }
  });

  clearTodoItemsCompleted();
};

const toggleTodoItemCompleted = (id) => {
  const todoItemId = Number(id);

  todoList = todoList.map((todo) => {
    if (todo.id === todoItemId) {
      const newTodoItem = {
        ...todo,
        completed: !todo.completed,
      };
      return newTodoItem;
    }

    return todo;
  });
};

const getFormValues = (e) => {
  e.preventDefault();

  const inputValue = document.getElementById('todoInput').value;
  const isCheckboxCompleted = formCheck.classList.contains('completed');

  if (inputValue.length > 0) {
    const newTodoItem = createTodoItem(inputValue, isCheckboxCompleted);
    renderTodoItem(newTodoItem);
    todoList = [...todoList, newTodoItem];
    saveTodoList();
    incrementCounter();
    resetFormValues(form, formCheck);
  }
};

export {
  getFormValues,
  toggleTodoItemCompleted,
  deleteTodoItemCompleted,
  deleteTodoItem,
  saveTodoList,
  getTodoList,
};
