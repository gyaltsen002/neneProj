const handleFormInputChange = function (event, setUserQuoteCred) {
  // Handling change for the change of input fields.
  const { name, value } = event.target;

  setUserQuoteCred((prevUserQuoteCred) => {
    return {
      ...prevUserQuoteCred,
      [name]: value,
    };
  });
  event.target.classList.remove("error");
};

export default handleFormInputChange;
