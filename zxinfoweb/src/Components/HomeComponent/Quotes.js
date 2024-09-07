import React from "react";

const Quotes = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src="https://ats.mytalentvalue.com/assets1/images/12.png" alt="" />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-blue-500 font-bold text-2xl md:text-3xl mb-4">Request A Free Demo</h1>
          <p className="mb-6 text-gray-700">
            Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr sea
            kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit nonumy vero
            lorem amet stet diam at. Ea at lorem sed et, lorem et rebum ut eirmod
            gubergren, dolor ea duo diam justo dolor diam ipsum dolore stet stet
            elitr ut. Ipsum amet labore lorem lorem diam magna sea, eos sed dolore
            elitr.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border-2 rounded-lg border-gray-300 p-2"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border-2 rounded-lg border-gray-300 p-2"
            />
            <input
              type="text"
              placeholder="Type of Service"
              className="w-full border-2 rounded-lg border-gray-300 p-2"
            />
            <button
              type="button"
              className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Request a Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quotes;