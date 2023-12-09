import React, { useEffect, useState } from "react";

import { quoteOptions } from "../../../assets/constants";
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
  }, [submitMessage]); // Timeout for the response message of users submit

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
      <form className="price--quote_form" onSubmit={handleFormSubmit}>
        <div className="price--quote_form-heading price--quote_form-span3">
          <h2>Get a quote. </h2>
        </div>

        <div className="price--quote_form-first_name price--quote_form-el">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            onChange={handleChange}
            className="price--quote_form-inputs"
            type="text"
            value={userQuoteCred.firstName}
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="price--quote_form-last_name price--quote_form-el">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            className="price--quote_form-inputs"
            onChange={handleChange}
            type="text"
            value={userQuoteCred.lastName}
            name="lastName"
            placeholder="Last Name"
          />
        </div>

        <div className="price--quote_form-email price--quote_form-el price--quote_form-span3">
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            className="price--quote_form-inputs"
            onChange={handleChange}
            type="email"
            value={userQuoteCred.email}
            name="email"
            placeholder="E-Mail"
            autoComplete="none"
          />
        </div>

        <div className="price--quote_form-number price--quote_form-el price--quote_form-span3">
          <label htmlFor="number">Number</label>
          <input
            id="number"
            onChange={handleChange}
            className="price--quote_form-inputs"
            type="text"
            value={userQuoteCred.number}
            name="number"
            placeholder="Phone/Mobile Number"
          />
        </div>

        <div className="price--quote_form-services price--quote_form-el price--quote_form-span3">
          <label htmlFor="services">What service do you seek?</label>
          <select
            id="services"
            onChange={handleChange}
            className="price--quote_form-services-options price--quote_form-inputs"
            value={userQuoteCred.service}
            name="service"
          >
            <option>--Select a service--</option>
            {quoteOptions.map((quote) => {
              return <option key={quote.id}>{quote.service}</option>;
            })}
          </select>
        </div>

        <div className="price--quote_form-des price--quote_form-el price--quote_form-span3">
          <label htmlFor="description">Tell us what you need help with? </label>
          <textarea
            id="description"
            onChange={handleChange}
            value={userQuoteCred.messagDescription}
            className="price--quote_form-inputs"
            name="messagDescription"
            placeholder="Tell us more about your enquiry."
          />
        </div>

        <div className="price--quote_form-submit price--quote_form-el price--quote_form-span3">
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
