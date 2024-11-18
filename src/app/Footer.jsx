import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/70 text-white py-8 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <div className="space-y-1">
            <p className="text-lg font-semibold">Follow Us On:</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/inqubate.qu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src="/insta.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/inqubate-dt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src="/google.svg" alt="Google" className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <img src="/inqubate.svg" alt="InQubate" className="w-48" />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2 self-end">
          <p className="text-lg font-semibold">Subscribe to our BLOG:</p>
          <div className="flex space-x-4">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-white rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="border border-white bg-gray-950 text-white px-4 py-2 rounded-xl hover:bg-[#9c224b]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center md:text-right space-y-2">
          <a href="/" className="block hover:opacity-75">
            Home
          </a>
          <a href="/WhoWeAre" className="block hover:opacity-75">
            Who we are
          </a>
          <a href="/TeamPage" className="block hover:opacity-75">
            Team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
