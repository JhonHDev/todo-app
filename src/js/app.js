import createTodo from './createTodo';
import renderTodo from './renderTodo';
import resetForm from './resetForm';
import todoCounter from './todoCounter';

let todoList = [];
const form = document.getElementById('form');
const formCheck = document.getElementById('formCheck');
const todoContainer = document.getElementById('todoContainer');

todoCounter(todoList.length);

const deleteTodo = (id) => {
  const todoId = Number(id);
  todoList = todoList.filter((todo) => todo.id !== todoId);
  todoCounter(todoList.length);
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

const todoActions = (e) => {
  const element = e.target;
  const { parentElement: todoItem } = element.parentElement;

  const isCheckButton = element.classList.contains('check__icon');
  const isDeleteButton = element.classList.contains('todo__delete');

  let todoItemId;

  if (isCheckButton) {
    todoItemId = element.parentElement.parentElement.getAttribute('id');
    toggleTodoCompleted(todoItemId);
    element.parentElement.classList.toggle('completed');
    todoItem.querySelector('p').classList.toggle('completed');
  }

  if (isDeleteButton) {
    todoItemId = element.parentElement.getAttribute('id');
    deleteTodo(todoItemId);
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
    todoCounter(todoList.length);
    resetForm(form, formCheck);
  }
};

const runApp = () => {
  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
  });

  todoContainer.addEventListener('click', todoActions);
};

export default runApp;
