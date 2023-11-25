import React, { useEffect, useState } from "react";

import { quoteOptions } from "../../../constants/constants";
import SubmitMessage from "../../modals/submit-modal/SubmitMessage";

const PriceQuoteFormList = function () {
  // User credentials for the form
  const [userQuoteCred, setUserQuoteCred] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    service: "",
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
        number: "",
        service: "",
        messagDescription: "",
      });
    }

    [...e.target.children].map((child) => {
      [...child.children].map((child) => {
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
      <form className="price--quote_form" onSubmit={handleFormSubmit}>
        <div className="price--quote_form-heading price--quote_form-span3">
          <label>Get a quote. </label>
        </div>

        <div className="price--quote_form-first_name">
          <label>First Name</label>
          <input
            onChange={handleChange}
            className="price--quote_form-inputs"
            type="text"
            value={userQuoteCred.firstName}
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="price--quote_form-last_name">
          <label>Last Name</label>
          <input
            className="price--quote_form-inputs"
            onChange={handleChange}
            type="text"
            value={userQuoteCred.lastName}
            name="lastName"
            placeholder="Last Name"
          />
        </div>

        <div className="price--quote_form-email price--quote_form-span3">
          <label>E-Mail</label>
          <input
            className="price--quote_form-inputs"
            onChange={handleChange}
            type="email"
            value={userQuoteCred.email}
            name="email"
            placeholder="E-Mail"
          />
        </div>

        <div className="price--quote_form-number price--quote_form-span3">
          <label>Number</label>
          <input
            onChange={handleChange}
            className="price--quote_form-inputs"
            type="text"
            value={userQuoteCred.number}
            name="number"
            placeholder="Phone/Mobile Number"
          />
        </div>

        <div className="price--quote_form-services price--quote_form-span3">
          <label>What service do you seek?</label>
          <select
            onChange={handleChange}
            className="price--quote_form-services-options price--quote_form-inputs"
            value={userQuoteCred.service}
            name="service"
          >
            <option>--Select an option--</option>
            {quoteOptions.map((quote) => {
              return <option key={quote.id}>{quote.service}</option>;
            })}
          </select>
        </div>

        <div className="price--quote_form-des price--quote_form-span3">
          <label>Tell us what you need help with? </label>
          <textarea
            onChange={handleChange}
            value={userQuoteCred.messagDescription}
            className="price--quote_form-inputs"
            name="messagDescription"
            placeholder="Tell us more about your enquiry."
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
    </>
  );
};

export default PriceQuoteFormList;
