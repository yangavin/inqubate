import Contactform from "./contactform.jsx";
import C_tube from "./contact_tube.jsx";

import React from "react";

const Contact = () => {
  return (
    <div className="relative justify-center items-center w-[1400px] h-screen">
    <div className="relative w-[1350px] left-[300px] sm:w-[60vw] sm:h-[60vh] lg:w-[70vw] lg:h-[70vh]">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4" id="contact">
        Support Us
      </h1>
      <p className="mb-8 text-left w-[500px]">
        Interested in supporting inQUbate or becoming a member? Fill out the
        form below and we will get back to you as soon as possible.
      </p>
  
      <Contactform />
  
      {/* Align the tube to the right side of the parent container */}
      <div className="absolute top-[-270px] right-[-145px]">
        <C_tube />
      </div>
    </div>
  </div>



  );
};

export default Contact;
