import createTodo from './createTodo';
import resetForm from './resetForm';

let todoList = [];
const form = document.getElementById('form');
const formCheck = document.getElementById('formCheck');

const getFormValues = (e) => {
  e.preventDefault();

  const inputValue = document.getElementById('todoInput').value;
  const isCheckCompleted = formCheck.classList.contains('completed');

  if (inputValue.length >= 4) {
    const newTodo = createTodo(inputValue, isCheckCompleted);
    todoList = [...todoList, newTodo];
    resetForm(form, formCheck);
  }
};

const runApp = () => {
  form.addEventListener('submit', getFormValues);

  formCheck.addEventListener('click', (e) => {
    e.target.classList.toggle('completed');
  });
};

export default runApp;
