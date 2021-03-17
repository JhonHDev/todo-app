const filterForTextContent = (todoItem, textContent) => {
  const isTodoItemCompleted = todoItem.classList.contains('completed');

  switch (textContent) {
    case 'Active':
      if (isTodoItemCompleted) {
        todoItem.classList.add('hidden');
      }
      break;

    case 'Completed':
      if (!isTodoItemCompleted) {
        todoItem.classList.add('hidden');
      }
      break;

    default:
      break;
  }
};

const todoListFilter = (e) => {
  e.preventDefault();

  const filterName = e.target;
  const todoContainer = document.getElementById('todoContainer');
  const todoItems = Array.from(todoContainer.querySelectorAll('.todo__item'));

  const optionLinks = Array.from(
    document.querySelectorAll('.filtering-options__link')
  );

  if (!filterName.textContent) {
    return;
  }

  todoItems.map((todoItem) => {
    todoItem.classList.remove('hidden');

    optionLinks.forEach((option) => option.classList.remove('selected'));
    filterName.classList.add('selected');

    const { textContent } = filterName;
    filterForTextContent(todoItem, textContent);

    return todoItem;
  });
};

export default todoListFilter;
