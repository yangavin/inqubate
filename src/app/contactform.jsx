"use client";

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Message from "./contact_message.jsx";

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("service_0tuvwuv", "template_gxpi41h", form.current, {
        publicKey: "-1vvJnu-quO1S4d-2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          setSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSending(false);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4  rounded-md relative z-10"
    >
      <input
        type="text"
        name="user_name"
        className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px]"
        placeholder="Enter your name"
        required
      />

      <input
        type="email"
        name="user_email"
        className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px]"
        placeholder="Enter your email"
        required
      />

      <textarea
        name="message"
        className="border border-gray-900 p-2 rounded-[10px] bg-gray-900 text-white placeholder-gray-400 w-[747px] h-[150px] resize-none"
        placeholder="Enter your message"
        required
      />

      <div className="flex flex-col sm:flex-row items-center w-full mt-2 mb-4 sm:mt-8">
        <div className="flex-shrink-0 w-full sm:w-auto">
          {!isSubmitted && !sending && (
            <button className="font-bold border border-white rounded-lg cursor-pointer w-full sm:w-44 h-12 transition-transform duration-400 hover:-translate-y-1 hover:bg-slate-900">
              Submit
            </button>
          )}

          {isSubmitted && (
            <button className="font-bold border border-white rounded-lg cursor-pointer w-full sm:w-44 h-12 transition-transform duration-400 hover:-translate-y-1 hover:bg-slate-900">
              Complete
            </button>
          )}
        </div>

        <div className="flex flex-col items-start pb-4 mt-4 sm:mt-0 sm:pl-8">
          <Message />
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
