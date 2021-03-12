import sunIcon from '../assets/images/icon-sun.svg';
import moonIcon from '../assets/images/icon-moon.svg';

const getDarkIcon = () => {
  const darkModeIcon = document.getElementById('darkModeIcon');
  const darkState = JSON.parse(localStorage.getItem('darkState'));

  if (darkState) {
    darkModeIcon.src = moonIcon;
  } else {
    darkModeIcon.src = sunIcon;
  }
};

const saveDarkIcon = (state) => {
  localStorage.setItem('darkState', JSON.stringify(state));
};

const toggleDarkIcon = ({ target }) => {
  const currentIcon = target;
  currentIcon.classList.toggle('dark');

  const hasDarkMode = currentIcon.classList.contains('dark');

  if (hasDarkMode) {
    currentIcon.src = moonIcon;
    saveDarkIcon(hasDarkMode);
  } else {
    currentIcon.src = sunIcon;
    saveDarkIcon(hasDarkMode);
  }
};

export { toggleDarkIcon, getDarkIcon };
