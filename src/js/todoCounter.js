const counterContainer = document.getElementById('todoCounter');

let counter = 0;
counterContainer.textContent = counter;

const saveCounter = () => {
  localStorage.setItem('counter', JSON.stringify(counter));
};

const getCounter = () => {
  if (localStorage.getItem('counter')) {
    counter = JSON.parse(localStorage.getItem('counter'));
    counterContainer.textContent = counter;
  } else {
    counter = 0;
    counterContainer.textContent = counter;
  }
};

const incrementCounter = () => {
  counter += 1;
  counterContainer.textContent = counter;
  saveCounter();
};

const decrementCounter = () => {
  counter -= 1;
  counterContainer.textContent = counter;
  saveCounter();
};

export { getCounter, incrementCounter, decrementCounter };
