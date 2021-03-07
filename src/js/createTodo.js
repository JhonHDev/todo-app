const createTodo = (task, completed) => ({
  id: Date.now(),
  task,
  completed,
});

export default createTodo;
