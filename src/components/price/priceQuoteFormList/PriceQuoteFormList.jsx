import React, { useState } from "react";

import { quoteOptions } from "../../../assets/constants";
import SubmitMessage from "../../modals/submit-modal/SubmitMessage";
import handleFormSubmit from "../../../helpers/handleFormSubmit";
import handleFormInputChange from "../../../helpers/handleFormInputChange";

import useTimeOut from "../../../custom-hooks/useTimeOut";

const PriceQuoteFormList = function () {
  const defaultUserFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    service: "",
    messagDescription: "",
  };

  // User credentials for the form
  const [userQuoteCred, setUserQuoteCred] = useState(defaultUserFormValues);

  // Submit Message to the user
  const [submitMessage, setSubmitMessage] = useState(null);

  useTimeOut(() => {
    setSubmitMessage(null);
  }, 3);

  return (
    <>
      {submitMessage && <SubmitMessage message={submitMessage} />}
      <form
        className="price--quote_form"
        onSubmit={(event) => {
          handleFormSubmit(
            event,
            userQuoteCred,
            setSubmitMessage,
            setUserQuoteCred,
            defaultUserFormValues
          );
        }}
      >
        <div className="price--quote_form-heading price--quote_form-span3">
          <h2>Get a quote. </h2>
        </div>

        <div className="price--quote_form-first_name price--quote_form-el">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            onChange={(event) => {
              handleFormInputChange(event, setUserQuoteCred);
            }}
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
            onChange={(event) => {
              handleFormInputChange(event, setUserQuoteCred);
            }}
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
            onChange={(event) => {
              handleFormInputChange(event, setUserQuoteCred);
            }}
            type="email"
            value={userQuoteCred.email}
            name="email"
            placeholder="E-Mail"
            autoComplete="email"
          />
        </div>

        <div className="price--quote_form-number price--quote_form-el price--quote_form-span3">
          <label htmlFor="number">Number</label>
          <input
            id="number"
            onChange={(event) => {
              handleFormInputChange(event, setUserQuoteCred);
            }}
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
            onChange={(event) => {
              handleFormInputChange(event, setUserQuoteCred);
            }}
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
            onChange={(event) => {
              handleFormInputChange(event, setUserQuoteCred);
            }}
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
