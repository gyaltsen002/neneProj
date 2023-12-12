import React, { useState } from "react";

import SubmitMessage from "../../modals/submit-modal/SubmitMessage";
import useTimeOut from "../../../custom-hooks/useTimeOut";
import handleFormSubmit from "../../../helpers/handleFormSubmit";
import handleFormInputChange from "../../../helpers/handleFormInputChange";

const ContactForm = function () {
  const defaultUserFormValues = {
    firstName: "",
    lastName: "",
    email: "",
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
      <div className="contact--form">
        <form
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
          <div className="price--quote_form-first_name">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="price--quote_form-inputs"
              type="text"
              name="firstName"
              value={userQuoteCred.firstName}
              placeholder="First Name"
              onChange={(event) => {
                handleFormInputChange(event, setUserQuoteCred);
              }}
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
              onChange={(event) => {
                handleFormInputChange(event, setUserQuoteCred);
              }}
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
              onChange={(event) => {
                handleFormInputChange(event, setUserQuoteCred);
              }}
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
              onChange={(event) => {
                handleFormInputChange(event, setUserQuoteCred);
              }}
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
