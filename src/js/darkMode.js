const { body } = document;

const toggleDarkMode = () => body.classList.toggle('dark');

const getDarkMode = () => {
  const darkState = JSON.parse(localStorage.getItem('darkState'));

  if (darkState) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
};

export { toggleDarkMode, getDarkMode };
