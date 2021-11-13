class Counter {
  constructor() {
    this.counter = 0;
    this.$counterContainer = document.getElementById('todoCounter');
    this.$counterContainer.textContent = this.counter;
  }

  saveCounterValue() {
    localStorage.setItem('counter', JSON.stringify(this.counter));
  }

  getCounterValue() {
    if (localStorage.getItem('counter')) {
      this.counter = JSON.parse(localStorage.getItem('counter'));
      this.$counterContainer.textContent = this.counter;
    } else {
      this.counter = 0;
      this.$counterContainer.textContent = this.counter;
    }
  }

  incrementCounter() {
    this.counter += 1;
    this.$counterContainer.textContent = this.counter;
    this.saveCounterValue();
  }

  decrementCounter() {
    this.counter -= 1;
    this.$counterContainer.textContent = this.counter;
    this.saveCounterValue();
  }
}

export default Counter;
