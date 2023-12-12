// Handling submit
const handleFormSubmit = function (
  formEvent,
  userQuoteCred,
  setSubmitMessage,
  setUserQuoteCred,
  resetValue
) {
  formEvent.preventDefault();

  const error = Object.values(userQuoteCred)
    .map((userQuote) => {
      if (userQuote === "") {
        return false;
      } else {
        return true;
      }
    })
    .includes(false);

  if (error) {
    setSubmitMessage("error");
  } else {
    setSubmitMessage("success");

    // Reset
    setUserQuoteCred(resetValue);
  }

  [...formEvent.target.children].forEach((child) => {
    [...child.children].forEach((child) => {
      //Grand-Children elements
      if (
        (child.nodeName.toLowerCase() === "input" && child.type !== "submit") ||
        (child.nodeName.toLowerCase() === "textarea" && child.type !== "submit")
      ) {
        if (child.value === "") {
          child.classList.add("error");
        }
      }
    });
  });
};

export default handleFormSubmit;
