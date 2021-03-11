const todoItemsFilter = (e) => {
  e.preventDefault();

  const filterName = e.target;

  const todoContainer = document.getElementById('todoContainer');
  const todoItems = Array.from(todoContainer.querySelectorAll('.todo__item'));

  const optionLinks = Array.from(
    document.querySelectorAll('.filtering-options__link')
  );

  if (!filterName) {
    return;
  }

  todoItems.map((todoItem) => {
    todoItem.classList.remove('hidden');
    const isCompleted = todoItem.classList.contains('completed');

    optionLinks.forEach((option) => option.classList.remove('selected'));
    filterName.classList.add('selected');

    switch (filterName.textContent) {
      case 'Active':
        if (isCompleted) {
          todoItem.classList.add('hidden');
        }
        break;

      case 'Completed':
        if (!isCompleted) {
          todoItem.classList.add('hidden');
        }
        break;

      default:
        break;
    }

    return todoItem;
  });
};

export default todoItemsFilter;
