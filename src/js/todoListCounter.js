const counterContainer = document.getElementById('todoCounter');

let counter = 0;
counterContainer.textContent = counter;

const saveCounterValue = () => {
  localStorage.setItem('counter', JSON.stringify(counter));
};

const getCounterValue = () => {
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
  saveCounterValue();
};

const decrementCounter = () => {
  counter -= 1;
  counterContainer.textContent = counter;
  saveCounterValue();
};

export { getCounterValue, incrementCounter, decrementCounter };
