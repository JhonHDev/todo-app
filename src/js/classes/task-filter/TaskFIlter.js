class TaskFilter {
  constructor() {
    this.$todoContainer = document.getElementById('todoContainer');
    this.name = '';
  }

  filterForName(todoItem) {
    const isTodoItemCompleted = todoItem.classList.contains('completed');

    switch (this.name) {
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
  }

  getNameToFilter(e) {
    e.preventDefault();

    const filterName = e.target;

    this.$todoItems = Array.from(
      this.$todoContainer.querySelectorAll('.todo__item')
    );

    this.$optionLinks = Array.from(
      document.querySelectorAll('.filtering-options__link')
    );

    if (!filterName.textContent) {
      return;
    }

    this.$todoItems.map((todoItem) => {
      todoItem.classList.remove('hidden');

      this.$optionLinks.forEach((option) =>
        option.classList.remove('selected')
      );

      filterName.classList.add('selected');

      const { textContent } = filterName;

      this.name = textContent;
      this.filterForName(todoItem);

      return todoItem;
    });
  }
}

export default TaskFilter;
