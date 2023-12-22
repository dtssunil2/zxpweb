import React from "react";

const Quotes = () => {
  return (
    <div className=" max-w-[1240px] h-[500px] p-2  mx-auto  mt-[100px]  md:grid grid-cols-2 md:mt-60">
      <div className=" col-span-1 w-[80%]">
        <img src="https://ats.mytalentvalue.com/assets1/images/12.png" alt="" />
      </div>

      <div className=" col-span-1">
        <h1 className="text-blue-500 font-bold m-2">Request A Free Demo</h1>
        <p className="m-2">
          Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr sea
          kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit nonumy vero
          lorem amet stet diam at. Ea at lorem sed et, lorem et rebum ut eirmod
          gubergren, dolor ea duo diam justo dolor diam ipsum dolore stet stet
          elitr ut. Ipsum amet labore lorem lorem diam magna sea, eos sed dolore
          elitr.
        </p>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border-2 rounded-lg border-gray-300 p-2 m-2"
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border-2 rounded-lg border-gray-300 p-2 m-2"
        />
        <input
          type="text"
          placeholder="Type of Service"
          className="border-2 rounded-lg border-gray-300 p-2 m-2"
        />
        <button
          type="button"
          class="text-white bg-gradient-to-br ml-2 from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Quotes;
