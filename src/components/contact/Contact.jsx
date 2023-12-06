import React from "react";

import ContactForm from "./contact-form/ContactForm";
import "./contact.css";

const Contact = function () {
  return (
    <>
      <div className="contact">
        <div className="contact--heading">
          <h1>Contact</h1>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
