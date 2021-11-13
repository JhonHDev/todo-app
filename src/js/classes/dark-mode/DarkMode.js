import sunIcon from '../../../assets/images/icon-sun.svg';
import moonIcon from '../../../assets/images/icon-moon.svg';

class DarkMode {
  constructor() {
    this.$body = document.body;
    this.$darkModeIcon = document.getElementById('darkModeIcon');
    this.state = false;
  }

  toggleDarkModeState() {
    this.$body.classList.toggle('dark');
    this.state = !this.state;
  }

  getDarkModeState() {
    const darkState = JSON.parse(localStorage.getItem('darkState'));

    if (darkState) {
      this.$body.classList.add('dark');
    } else {
      this.$body.classList.remove('dark');
    }
  }

  saveDarkModeIconState() {
    localStorage.setItem('darkState', JSON.stringify(this.state));
  }

  getDarkModeIconState() {
    const darkState = JSON.parse(localStorage.getItem('darkState'));

    if (darkState) {
      this.$darkModeIcon.src = moonIcon;
    } else {
      this.$darkModeIcon.src = sunIcon;
    }
  }

  toggleDarkModeIcon({ target }) {
    const currentIcon = target;
    currentIcon.classList.toggle('dark');

    this.toggleDarkModeState();

    const hasDarkMode = currentIcon.classList.contains('dark');

    if (hasDarkMode) {
      currentIcon.src = moonIcon;
      this.saveDarkModeIconState(hasDarkMode);
    } else {
      currentIcon.src = sunIcon;
      this.saveDarkModeIconState(hasDarkMode);
    }
  }
}

export default DarkMode;
