const { body } = document;

const toggleDarkModeState = () => {
  body.classList.toggle('dark');
};

const getDarkModeState = () => {
  const darkState = JSON.parse(localStorage.getItem('darkState'));

  if (darkState) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
};

export { toggleDarkModeState, getDarkModeState };
