import React, { useState, useEffect } from "react";

import SubmitMessage from "../../modals/submit-modal/SubmitMessage";

const ContactForm = function () {
  // User credentials for the form
  const [userQuoteCred, setUserQuoteCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    messagDescription: "",
  });

  // Submit Message to the user
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSubmitMessage(null);
    }, 2200);
  }, [submitMessage]);

  // Handling change for the change of input fields.
  const handleChange = function (e) {
    const { name, value } = e.target;

    setUserQuoteCred((prevUserQuoteCred) => {
      return {
        ...prevUserQuoteCred,
        [name]: value,
      };
    });
    e.target.classList.remove("error");
  };

  // Handling submit
  const handleFormSubmit = function (e) {
    e.preventDefault();

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
      setUserQuoteCred({
        firstName: "",
        lastName: "",
        email: "",
        messagDescription: "",
      });
    }

    [...e.target.children].forEach((child) => {
      [...child.children].forEach((child) => {
        //Grand-Children elements
        if (
          (child.nodeName.toLowerCase() === "input" &&
            child.type !== "submit") ||
          (child.nodeName.toLowerCase() === "textarea" &&
            child.type !== "submit")
        ) {
          if (child.value === "") {
            child.classList.add("error");
          }
        }
      });
    });
  };

  return (
    <>
      {submitMessage && <SubmitMessage message={submitMessage} />}
      <div className="contact--form">
        <form onSubmit={handleFormSubmit}>
          <div className="price--quote_form-first_name">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="price--quote_form-inputs"
              type="text"
              name="firstName"
              value={userQuoteCred.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>

          <div className="price--quote_form-last_name">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className="price--quote_form-inputs"
              type="text"
              name="lastName"
              value={userQuoteCred.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <div className="price--quote_form-email price--quote_form-span3">
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              className="price--quote_form-inputs"
              type="email"
              name="email"
              value={userQuoteCred.email}
              placeholder="E-Mail"
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="price--quote_form-des price--quote_form-span3">
            <label htmlFor="messageDescription">
              Tell us what you need help with?{" "}
            </label>
            <textarea
              id="messageDescription"
              className="price--quote_form-inputs"
              name="messagDescription"
              value={userQuoteCred.messagDescription}
              placeholder="Tell us more about your enquiry."
              onChange={handleChange}
            />
          </div>

          <div className="price--quote_form-submit price--quote_form-span3">
            <input
              type="submit"
              className="price--quote_form-inputs price--quote_form-submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
