class Form {
  constructor() {
    this.$form = document.getElementById('form');
    this.$formCheck = document.getElementById('formCheck');
  }

  getInputValue(value) {
    const formData = new FormData(this.$form);
    return formData.get(value);
  }

  reset() {
    const isCheckboxCompleted = this.$formCheck.classList.contains('completed');

    if (isCheckboxCompleted) {
      this.$formCheck.classList.remove('completed');
    }

    this.$form.reset();
  }
}

export default Form;
