const deleteCompletedTasks = (e, { todoList, counter }) => {
  e.preventDefault();

  todoList.todos.forEach((task) => {
    const isTaskCompleted = task.isCompleted;

    if (isTaskCompleted) {
      const $taskElement = document.getElementById(task.id);
      $taskElement.remove();

      todoList.deleteTask(task.id);
      todoList.saveTodoList();
      counter.decrementCounter();
    }
  });
};

export default deleteCompletedTasks;
