import createTodo from './createTodo';
import renderTodo from './renderTodo';
import resetForm from './resetForm';
import todoActions from './todoActions';

let todoList = [];
const form = document.getElementById('form');
const formCheck = document.getElementById('formCheck');
const todoContainer = document.getElementById('todoContainer');

const getFormValues = (e) => {
  e.preventDefault();

  const inputValue = document.getElementById('todoInput').value;
  const isCheckCompleted = formCheck.classList.contains('completed');

  if (inputValue.length >= 4) {
    const newTodo = createTodo(inputValue, isCheckCompleted);
    renderTodo(newTodo);
    todoList = [...todoList, newTodo];
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
