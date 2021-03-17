const createTodoItem = (task, completed) => ({
  id: Date.now(),
  task,
  completed,
});

export default createTodoItem;
