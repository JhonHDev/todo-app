import { decrementCounter } from './todoListCounter';

const clearTodosCompleted = () => {
  const todoItems = Array.from(document.querySelectorAll('.todo__item'));

  todoItems.forEach((todo) => {
    const isTodoCompleted = todo.classList.contains('completed');

    if (isTodoCompleted) {
      todo.remove();
      decrementCounter();
    }
  });
};

export default clearTodosCompleted;
