import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSupport } from "react-icons/ti";
import axios from "axios";
const ContactComponent = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api-endpoint", {
        email: email,
        subject: subject,
        message: message,
      });

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                emailError ? "border-red-500" : ""
              }`}
              placeholder="name@gmail.com"
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            onClick={onClickHandler}
            className=' className="text-white bg-gradient-to-br ml-2 from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"'
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col h-auto md:flex-row md:pb-5 w-full justify-around text-white">
        <div className="flex flex-col justify-center items-center md:w-1/3">
          <MdEmail className="size-9" />
          <h1 className="text-2xl mt-3">Email us:</h1>
          <p className="mt-3">
            Email us for general queries, including marketing{" "}
          </p>
          <p>and partnership opportunities.</p>
          <a
            href="mailto:info@example.com"
            className="text-blue-500 hover:underline mt-3"
          >
            info@example.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/3">
          <FaPhone className="size-9" />
          <h1 className="text-2xl mt-3">Call us:</h1>
          <p className="mt-3">
            Call us to speak to a member of our team. We are
          </p>
          <p>always happy to help.</p>
          <a href="mailto:info@example.com" className="text-blue-500 mt-3">
            +1 (646) 786-5060
          </a>
        </div>
        <div className="flex flex-col justify-center items-center md:w-1/3">
          <TiSupport className="size-9" />
          <h1 className="text-2xl mt-3">Support</h1>
          <p className="mt-3">
            Email us for general queries, including marketing
          </p>
          <p>and partnership opportunities.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
            Button
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
