class Task {
  constructor(name, isCompleted) {
    this.id = Date.now();
    this.name = name;
    this.isCompleted = isCompleted;
  }
}

export default Task;
