import { decrementCounter } from './todoListCounter';

const clearTodoItemsCompleted = () => {
  const todoItems = Array.from(document.querySelectorAll('.todo__item'));

  todoItems.forEach((todoItem) => {
    const isTodoItemCompleted = todoItem.classList.contains('completed');

    if (isTodoItemCompleted) {
      todoItem.remove();
      decrementCounter();
    }
  });
};

export default clearTodoItemsCompleted;
