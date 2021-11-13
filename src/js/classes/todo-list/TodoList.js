class TodoList {
  constructor() {
    this.getTodoList();
  }

  addTask(task) {
    this.todos = [...this.todos, task];
    this.saveTodoList();
  }

  toggleTodoItemCompleted(taskId) {
    this.todos = this.todos.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    this.saveTodoList();
  }

  deleteTask(taskId) {
    this.todos = this.todos.filter((task) => task.id !== taskId);
    this.saveTodoList();
  }

  saveTodoList() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodoList() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
  }
}

export default TodoList;
