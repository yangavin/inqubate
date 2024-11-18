"use client";

export default function Message() {
  return (
    <div className="absolute z-500 Message-container">
      <img
        src="/images/Message.svg"
        alt="Message"
        sizes="100vw"
        style={{ width: "90%", height: "auto", maxWidth: "500px" }}
        data-depth="-0.05"
      />
    </div>
  );
}
