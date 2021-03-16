const resetFormValues = (form, formCheck) => {
  const isCheckCompleted = formCheck.classList.contains('completed');

  if (isCheckCompleted) {
    formCheck.classList.remove('completed');
  }

  form.reset();
};

export default resetFormValues;