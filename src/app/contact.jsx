import Contactform from "./contactform.jsx";
import C_tube from "./contact_tube.jsx";

import React from "react";

const Contact = () => {
  return (
    <div className="relative overflow-hidden w-full sm:h-[650px] lg:h-[650px] mx-auto">
      <div className="relative translate-x-[10%] w-full sm:w-[60vw] sm:h-[60vh] lg:w-[70vw] lg:h-[70vh] mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4" id="contact">
          Support Us
        </h1>
        <p className="mb-8 text-left sm:max-w-[90%] lg:max-w-[70%]">
          Interested in supporting inQUbate or becoming a member? Fill out the
          form below and we will get back to you as soon as possible.
        </p>
        <Contactform />

        {/* Updated C_tube wrapper with responsive adjustments */}
        <div className="relative top-0 right-0 md:translate-x-[160px] sm:translate-x-[120px] sm:translate-y-[-280px] lg:translate-x-[80px] lg:translate-y-[-480px] xl:translate-x-[11vw] xl:translate-y-[-825px]">
          <C_tube />
        </div>
      </div>
    </div>
  );
};

export default Contact;
