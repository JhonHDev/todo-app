import { Form, Task } from '../classes';
import taskTemplate from './taskTemplate';

const formActions = (e, { todoList, counter }) => {
  e.preventDefault();

  const $formCheck = document.getElementById('formCheck');
  const $todoContainer = document.getElementById('todoContainer');

  const myForm = new Form();
  const isCheckboxCompleted = $formCheck.classList.contains('completed');

  const newTask = new Task(
    myForm.getInputValue('todoValue'),
    isCheckboxCompleted
  );

  todoList.addTask(newTask);
  counter.incrementCounter();

  const $newTaskTemplate = taskTemplate({ ...newTask });
  $todoContainer.insertAdjacentElement('afterbegin', $newTaskTemplate);

  myForm.reset();
};

export default formActions;
