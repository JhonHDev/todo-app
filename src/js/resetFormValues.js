const resetFormValues = (form, formCheck) => {
  const isCheckboxCompleted = formCheck.classList.contains('completed');

  if (isCheckboxCompleted) {
    formCheck.classList.remove('completed');
  }

  form.reset();
};

export default resetFormValues;
