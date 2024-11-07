import Contactform from "./contactform.jsx";
import React from "react";

const Contact = () => {
  return (
    <div className="relative p-4 sm:p-8">
      <div className="w-full sm:w-1/2 mx-auto sm:ml-64 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4" id="contact">
          Support Us
        </h1>
        <p className="mb-8 text-left">
          Interested in supporting inQUbate or becoming a member? Fill out the
          form below and we will get back to you as soon as possible.
        </p>
        <Contactform />
      </div>
    </div>
  );
};

export default Contact;
