import React from "react";
import Footer from "../Footer/Footer";

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
      <Footer />
    </>
  );
};

export default Contact;
