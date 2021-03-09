const todoActions = (e) => {
  const element = e.target;
  const { parentElement: todoItem } = element.parentElement;

  const isButtonCheck = element.classList.contains('check__icon');
  const isButtonDelete = element.classList.contains('todo__delete');

  if (isButtonCheck) {
    element.parentElement.classList.toggle('completed');
    todoItem.querySelector('p').classList.toggle('completed');
  }

  if (isButtonDelete) {
    element.parentElement.remove();
  }
};

export default todoActions;
