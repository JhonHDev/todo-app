import sunIcon from '../assets/images/icon-sun.svg';
import moonIcon from '../assets/images/icon-moon.svg';

import { toggleDarkModeState } from './darkMode';

const getDarkModeIconState = () => {
  const darkModeIcon = document.getElementById('darkModeIcon');
  const darkState = JSON.parse(localStorage.getItem('darkState'));

  if (darkState) {
    darkModeIcon.src = moonIcon;
  } else {
    darkModeIcon.src = sunIcon;
  }
};

const saveDarkModeIconState = (state) => {
  localStorage.setItem('darkState', JSON.stringify(state));
};

const toggleDarkModeIcon = ({ target }) => {
  const currentIcon = target;
  currentIcon.classList.toggle('dark');

  toggleDarkModeState();

  const hasDarkMode = currentIcon.classList.contains('dark');

  if (hasDarkMode) {
    currentIcon.src = moonIcon;
    saveDarkModeIconState(hasDarkMode);
  } else {
    currentIcon.src = sunIcon;
    saveDarkModeIconState(hasDarkMode);
  }
};

export { toggleDarkModeIcon, getDarkModeIconState };
