const todoListActions = (e, { todoList, counter }) => {
  const isCheckButton = e.target.classList.contains('check');
  const isDeleteButton = e.target.classList.contains('todo__delete');

  let task;
  let taskId;

  if (isCheckButton) {
    task = e.target.parentElement;
    taskId = Number(task.getAttribute('id'));

    task.classList.toggle('completed');
    todoList.toggleTodoItemCompleted(taskId);
  } else if (isDeleteButton) {
    task = e.target.parentElement;
    taskId = Number(task.getAttribute('id'));

    todoList.deleteTask(taskId);
    counter.decrementCounter();

    task.remove();
  }
};

export default todoListActions;
